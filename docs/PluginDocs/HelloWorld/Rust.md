# Rust

::: tip
笔者使用的rustc版本为`1.66.0`，因此一切操作均以此为准。

版本要求 `Rust 1.39` 或更高版本。
:::

在本案例中，我们将会编写一个在加载插件时弹出`Hello World!`弹窗的插件。

让我们进入终端，输入以下命令来设置依赖：
``` cmd
rustup update
rustup component add rustfmt
```
Rust插件开发需要模板，请[点击此处](/file/hl_plugin_rust.zip)下载模板，然后将模板解压至`study_plugin`文件夹。

此时`study_plugin`的内部文件结构如下：

```
└─study_plugin
    metadata.json
    Cargo.toml
    └─src
        main.rs
        proto.rs
```

我们开发的入口点在`main.rs`，在此基础上你可以进行任何开发。

`main.rs`的内部代码如下：

``` rust
// 本模板由天机Ceyase编写，基于MIT许可证开源
use tonic::{transport::Server, Request, Response, Status};
use std::net::TcpListener;

use hiper_link::plugin_server::{Plugin, PluginServer};
use hiper_link::{EventsRequest, EventsResponse, InteractionRequest, InteractionResponse};

pub mod hiper_link {
    include!("proto.rs");
}

#[derive(Debug, Default)]
pub struct API {}

#[tonic::async_trait]
impl Plugin for API {

    // 加载插件
    async fn on_load(
        &self,
        _request: Request<EventsRequest>,
    ) -> Result<Response<EventsResponse>, Status> {
        let reply = hiper_link::EventsResponse {value : "1".into()};

        Ok(Response::new(reply))
    }

    // 停用插件
    async fn on_unload(
        &self,
        _request: Request<EventsRequest>,
    ) -> Result<Response<EventsResponse>, Status> {
        let reply = hiper_link::EventsResponse {value : "1".into()};

        Ok(Response::new(reply))
    }

    // 安装插件
    async fn on_install(
        &self,
        _request: Request<EventsRequest>,
    ) -> Result<Response<EventsResponse>, Status> {
        let reply = hiper_link::EventsResponse {value : "1".into()};

        Ok(Response::new(reply))
    }

    // 卸载插件
    async fn on_uninstall(
        &self,
        _request: Request<EventsRequest>,
    ) -> Result<Response<EventsResponse>, Status> {
        let reply = hiper_link::EventsResponse {value : "1".into()};

        Ok(Response::new(reply))
    }

    // HL 启动
    async fn on_start(
        &self,
        _request: Request<EventsRequest>,
    ) -> Result<Response<EventsResponse>, Status> {
        let reply = hiper_link::EventsResponse {value : "1".into()};

        Ok(Response::new(reply))
    }

    // HL 停止
    async fn on_stop(
        &self,
        _request: Request<EventsRequest>,
    ) -> Result<Response<EventsResponse>, Status> {
        let reply = hiper_link::EventsResponse {value : "1".into()};

        Ok(Response::new(reply))
    }

    // 前后端交互
    async fn interaction(
        &self,
        _request: Request<InteractionRequest>,
    ) -> Result<Response<InteractionResponse>, Status> {

        let reply = hiper_link::InteractionResponse {value : "1".into()};
        Ok(Response::new(reply))
    }
}

fn listen_available_port() -> Option<TcpListener> {
    for port in 32768..61000 {
         match TcpListener::bind(("127.0.0.1", port)) {
             Ok(l) => return Some(l),
             _ => {}
         }
    }
    None
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {

    let addr_str = listen_available_port().unwrap().local_addr().unwrap().to_string();

    let addr = addr_str.parse()?;
    let plugin = API::default();

    println!("1|1|tcp|{addr_str}|grpc");
    Server::builder()
        .add_service(PluginServer::new(plugin))
        .serve(addr)
        .await?;
    Ok(())
}
```
你可以随意扩展本代码，HiperLink中的相关操作将会触发类似于`on_load`的回调事件。

::: warning
`on_install`与`on_uninstall`暂不可用。
:::
::: tip
请记得在`Cargo.toml`中更改您的项目名称！
:::
本教程中，我们将会引入`user32`，使用`MessageBoxW`函数进行弹窗：

> 1. 在`Cargo.toml`的最后一行添加`user32-sys = "0.2.0"`
> 2. 写入`use user32::MessageBoxW;`，在`on_load`下写入以下几行：

``` rust
let lp_text: Vec<u16> = "Hello world!\0".encode_utf16().collect();
let lp_caption: Vec<u16> = "StudyPlugin\0".encode_utf16().collect();

unsafe {
    MessageBoxW(
        std::ptr::null_mut(),
        lp_text.as_ptr(),
        lp_caption.as_ptr(),
        0
        );
    }
```

完整代码如下：

``` rust
// 本模板由天机Ceyase编写，基于MIT许可证开源
use tonic::{transport::Server, Request, Response, Status};
use std::net::TcpListener;

use hiper_link::plugin_server::{Plugin, PluginServer};
use hiper_link::{EventsRequest, EventsResponse, InteractionRequest, InteractionResponse};

use user32::MessageBoxW;
pub mod hiper_link {
    include!("proto.rs");
}

#[derive(Debug, Default)]
pub struct API {}

#[tonic::async_trait]
impl Plugin for API {

    // 加载插件
    async fn on_load(
        &self,
        _request: Request<EventsRequest>,
    ) -> Result<Response<EventsResponse>, Status> {
        let reply = hiper_link::EventsResponse {value : "1".into()};

        let lp_text: Vec<u16> = "Hello world!\0".encode_utf16().collect();
        let lp_caption: Vec<u16> = "StudyPlugin\0".encode_utf16().collect();

        unsafe {
            MessageBoxW(
            std::ptr::null_mut(),
            lp_text.as_ptr(),
            lp_caption.as_ptr(),
            0
            );
        }
        Ok(Response::new(reply))
    }

    // 停用插件
    async fn on_unload(
        &self,
        _request: Request<EventsRequest>,
    ) -> Result<Response<EventsResponse>, Status> {
        let reply = hiper_link::EventsResponse {value : "1".into()};

        Ok(Response::new(reply))
    }

    // 安装插件
    async fn on_install(
        &self,
        _request: Request<EventsRequest>,
    ) -> Result<Response<EventsResponse>, Status> {
        let reply = hiper_link::EventsResponse {value : "1".into()};

        Ok(Response::new(reply))
    }

    // 卸载插件
    async fn on_uninstall(
        &self,
        _request: Request<EventsRequest>,
    ) -> Result<Response<EventsResponse>, Status> {
        let reply = hiper_link::EventsResponse {value : "1".into()};

        Ok(Response::new(reply))
    }

    // HL 启动
    async fn on_start(
        &self,
        _request: Request<EventsRequest>,
    ) -> Result<Response<EventsResponse>, Status> {
        let reply = hiper_link::EventsResponse {value : "1".into()};

        Ok(Response::new(reply))
    }

    // HL 停止
    async fn on_stop(
        &self,
        _request: Request<EventsRequest>,
    ) -> Result<Response<EventsResponse>, Status> {
        let reply = hiper_link::EventsResponse {value : "1".into()};

        Ok(Response::new(reply))
    }

    // 前后端交互
    async fn interaction(
        &self,
        _request: Request<InteractionRequest>,
    ) -> Result<Response<InteractionResponse>, Status> {

        let reply = hiper_link::InteractionResponse {value : "1".into()};
        Ok(Response::new(reply))
    }
}

fn listen_available_port() -> Option<TcpListener> {
    for port in 32768..61000 {
         match TcpListener::bind(("127.0.0.1", port)) {
             Ok(l) => return Some(l),
             _ => {}
         }
    }
    None
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {

    let addr_str = listen_available_port().unwrap().local_addr().unwrap().to_string();

    let addr = addr_str.parse()?;
    let plugin = API::default();

    println!("1|1|tcp|{addr_str}|grpc");
    Server::builder()
        .add_service(PluginServer::new(plugin))
        .serve(addr)
        .await?;
    Ok(())
}
```

让我们使用`cargo run`命令运行此工程。

如果出现了`1|1|tcp|127.0.0.1:xxxxx|grpc`的输出，并且程序一直保持运行，那么该插件就可以进行下一步了。

使用`cargo build --release`命令打包工程。

等待片刻，`\study_plugin\target\release`文件夹下将会生成可执行文件，将其中的`可执行文件`重命名为`plugin.exe`并移动到`study_plugin`文件夹（当然，你可以删除一些冗余文件）

最终`study_plugin`文件夹的目录结构如下：

```
└─study_plugin
    │  src
    │  target
    │  Cargo.lock
    │  Cargo.toml
    │  metadata.json
    │  plugin.exe
    └─lib
```

让我们打开`metadata.json`进行最后的编写：
``` json
{
    "id": "study_plugin",
    "version": "0.0.1",
    "name": "StudyPlugin",
    "description": "一个基础教程插件",
    "author": ["天机"],
    "link": "hiper.ink",
    "dependencies": {
    },
    "command": "./plugin",
    "args": [],
    "type": "gRPC",
    "root": false,
    "color": "#93d5dc",
    "icon": "mdi-book",
    "frontend": {
        "ui": true,
        "configuration": true
    }
}
```
以上所有东西您都能改！我们写入了软件的启动命令`./plugin`。

回到HiperLink，查看并开启我们的插件。

![HiperLink插件界面](/img/PluginDocs/Start-2.png "HiperLink插件界面")