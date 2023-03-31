use crate::{app::api_manager::ApiManager, opts_match};

use anyhow::{anyhow, Result};
use serde_json::json;

pub fn register_api_instances(api_manager: &mut ApiManager) {
    #[cfg(target_os = "macos")]
    {
        use active_win_pos_rs::get_active_window;
        use cocoa::appkit::NSApplicationActivateIgnoringOtherApps;

        use cocoa::base::{nil, NO};
        use objc::runtime::{Class, Object, Sel};
        use objc::{class, msg_send, sel, sel_impl};

        api_manager.register_api("extra.getActiveWindowId", |_, _, _| {
            Ok(match get_active_window() {
                Ok(window) => json!(format!("{}_{}", window.process_id, window.window_id)),
                Err(_) => json!(null),
            })
        });

        api_manager.register_api("extra.focusByWindowId", |_, _, request| {
            opts_match!(request, id_string: String);
            let result = id_string.split("_").collect::<Vec<&str>>();

            if result.len() != 2 {
                return Err(anyhow!("invalid window id"));
            }
            let process_id = result[0].parse::<u32>()?;
            let window_id = result[1].parse::<u64>()?;

            unsafe {
                let app_class = class!(NSRunningApplication);
                let app_with_process_id: *mut Object = msg_send![
                    app_class,
                    runningApplicationWithProcessIdentifier: process_id as i64
                ];
                if app_with_process_id != nil {
                    let success: bool = msg_send![
                        app_with_process_id,
                        activateWithOptions: NSApplicationActivateIgnoringOtherApps
                    ];

                    if !success {
                        return Ok(true);
                    }
                }
            }
            Ok(false)
        });
    }

    #[cfg(target_os = "windows")]
    {
        use winapi::shared::windef::HWND;
        use winapi::um::winuser::{GetForegroundWindow, SetForegroundWindow};
        api_manager.register_async_api("extra.getActiveWindowId", |_, _, _| -> Result<String> {
            let hwnd = unsafe { GetForegroundWindow() as usize };
            Ok(hwnd.to_string())
        });

        api_manager.register_async_api("extra.focusByWindowId", |_, _, request| -> Result<()> {
            args_match!(request, hwnd_str: String);
            let hwnd = hwnd_str.parse::<usize>()? as HWND;
            unsafe {
                SetForegroundWindow(hwnd);
            }
            Ok(())
        });
    }
}

// fn get_active_window_id()