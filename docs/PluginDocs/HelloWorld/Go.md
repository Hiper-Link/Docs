# Golang 

由于 `HiperLink` 就是由 `Golang` 编写的软件，使用 `Golang` 开发插件变得极度简单。

在本案例中，我们将会编写一个在加载插件时弹出`Hello World!`弹窗的插件。

在 `study_plugin` 文件夹中进入终端，输入以下命令初始化工程并设置依赖：

``` cmd
go mod init study_plugin
go get github.com/Hiper-Link/go-plugin
go get github.com/Hiper-Link/plugin-libs/shared
```

新建 `plugin.go` 文件，在其中编写以下示例代码

``` go
package main

import (
	"github.com/Hiper-Link/go-plugin"
	"github.com/Hiper-Link/plugin-libs/shared"
)

var Handshake = plugin.HandshakeConfig{
	ProtocolVersion:  1,
	MagicCookieKey:   "study_plugin", // 此处为你的插件ID
	MagicCookieValue: "Hello, HiperLink",
}

type API struct{}

// 加载插件
func (API) OnLoad(p string) ([]byte, error) {
	return nil, nil
}

// 停用插件
func (API) OnUnload(p string) ([]byte, error) {
	return nil, nil
}

// 安装插件
func (API) OnInstall(p string) ([]byte, error) {
	return nil, nil
}

// 卸载插件
func (API) OnUninstall(p string) ([]byte, error) {
	return nil, nil
}

// HL 启动
func (API) OnStart(p string) ([]byte, error) {
	return nil, nil
}

// HL 停止
func (API) OnStop(p string) ([]byte, error) {
	return nil, nil
}

// 前后端交互
func (API) Interaction(p string, function string) (string, error) {
	return function, nil
}

func main() {
	plugin.Serve(&plugin.ServeConfig{
		HandshakeConfig: Handshake,
		Plugins: map[string]plugin.Plugin{
			"grpc": &shared.GRPCPlugin{Impl: &API{}},
		},
		NetworkType: "tcp",
		GRPCServer: plugin.DefaultGRPCServer,
	})
}
```

你可以随意扩展本代码，HiperLink中的相关操作将会触发类似于`OnLoad`的回调事件。
::: warning
`OnInstall`与`OnUninstall`暂不可用。
:::

我们将会在`import`中引入`walk`，在`OnLoad`中写入弹窗代码：

> 1. 使用终端命令`go get github.com/lxn/walk`设置依赖
> 2. 在`OnLoad`下写入`walk.MsgBox(nil, "StudyPlugin", "HelloWorld!", walk.MsgBoxIconInformation)`

完整代码如下：

``` go
package main

import (
	"github.com/Hiper-Link/go-plugin"
	"github.com/Hiper-Link/plugin-libs/shared"
	"github.com/lxn/walk"
)

var Handshake = plugin.HandshakeConfig{
	ProtocolVersion:  1,
	MagicCookieKey:   "study_plugin",
	MagicCookieValue: "Hello, HiperLink",
}

type API struct{}

// 加载插件
func (API) OnLoad(p string) ([]byte, error) {
	walk.MsgBox(nil, "StudyPlugin", "HelloWorld!", walk.MsgBoxIconInformation)
	return nil, nil
}

// 停用插件
func (API) OnUnload(p string) ([]byte, error) {
	return nil, nil
}

// 安装插件
func (API) OnInstall(p string) ([]byte, error) {
	return nil, nil
}

// 卸载插件
func (API) OnUninstall(p string) ([]byte, error) {
	return nil, nil
}

// HL 启动
func (API) OnStart(p string) ([]byte, error) {
	return nil, nil
}

// HL 停止
func (API) OnStop(p string) ([]byte, error) {
	return nil, nil
}

// 前后端交互
func (API) Interaction(p string, function string) (string, error) {
	return function, nil
}

func main() {
	plugin.Serve(&plugin.ServeConfig{
		HandshakeConfig: Handshake,
		Plugins: map[string]plugin.Plugin{
			"grpc": &shared.GRPCPlugin{Impl: &API{}},
		},
		NetworkType: "tcp",
		GRPCServer: plugin.DefaultGRPCServer,
	})
}
```

最后，我们编译该代码：
``` cmd
go build plugin.go
```
在study_plugin文件夹下将会生成一个名为plugin的二进制可执行文件。

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
        "hiperlink": ">=1.0.0"
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