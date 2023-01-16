# Python

::: tip
笔者使用的Python版本为`3.10.9`，因此一切操作均以此为准。

版本要求 `Python 3.5` 或更高版本。
:::

在本案例中，我们将会编写一个在加载插件时弹出`Hello World!`弹窗的插件。

让我们进入终端，输入以下命令来设置依赖：
``` cmd
pip install grpcio
pip install grpcio-tools
```
Python插件开发需要模板，请[点击此处](/file/hl_plugin_python.zip)下载模板，然后将模板解压至`study_plugin`文件夹。

此时`study_plugin`的内部文件结构如下：

```
└─study_plugin
    health_pb2.py
    health_pb2_grpc.py
    hiperlink_pb2.py
    hiperlink_pb2_grpc.py
    metadata.json
    plugin.py
```

我们开发的核心工作主要集中在`plugin.py`，在此基础上你可以加入任何文件到此文件夹。

`plugin.py`的内部代码如下：

``` python
# 本模板由天机Ceyase编写，基于MIT许可证开源
import hiperlink_pb2
import hiperlink_pb2_grpc
import health_pb2_grpc
import grpc
import concurrent.futures as futures
import sys
import time
import random
import socket

class HiperLinkServicer(hiperlink_pb2_grpc.PluginServicer):

    # 加载插件
    def OnLoad(self, request, context):
        return hiperlink_pb2.EventsResponse()

    # 停用插件
    def OnUnload(self, request, context):
        return hiperlink_pb2.EventsResponse()

    # 安装插件
    def OnInstall(self, request, context):
        return hiperlink_pb2.EventsResponse()

    # 卸载插件
    def OnUninstall(self, request, context):
        return hiperlink_pb2.EventsResponse()

    # HL 启动
    def OnStart(self, request, context):
        return hiperlink_pb2.EventsResponse()

    # HL 停止
    def OnStop(self, request, context):
        return hiperlink_pb2.EventsResponse()

    # 前后端交互
    def Interaction(self, request, context):
        return hiperlink_pb2.InteractionResponse()

def get_free_port():
    while True:
        port = random.randint(32768, 61000)
        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        if not (sock.connect_ex(('127.0.0.1', port)) == 0):
            return port 

if __name__ == '__main__':
    health = health_pb2_grpc.HealthServicer()
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    hiperlink_pb2_grpc.add_PluginServicer_to_server(HiperLinkServicer(), server)
    health_pb2_grpc.add_HealthServicer_to_server(health, server)
    port = get_free_port()
    server.add_insecure_port(f'127.0.0.1:{port}')
    server.start()
    print(f"1|1|tcp|127.0.0.1:{port}|grpc")
    sys.stdout.flush()
    try:
        while True:
            time.sleep(60 * 60 * 24)
    except KeyboardInterrupt:
        server.stop(0)
```
你可以随意扩展本代码，HiperLink中的相关操作将会触发类似于`OnLoad`的回调事件。

::: warning
`OnInstall`与`OnUninstall`暂不可用。
:::

本教程中，我们将会引入`winapi`，在`OnLoad`中写入弹窗代码：

> 1. 使用终端命令`pip install pywin32`设置依赖
> 2. 写入`import win32api,win32con`，在`OnLoad`下写入`win32api.MessageBox(0,"HelloWorld!","StudyPlugin",win32con.MB_OK)`

完整代码如下：

``` python
# 本模板由天机Ceyase编写，基于MIT许可证开源
import hiperlink_pb2
import hiperlink_pb2_grpc
import health_pb2_grpc
import grpc
import concurrent.futures as futures
import sys
import time
import random
import socket
import win32api,win32con

class HiperLinkServicer(hiperlink_pb2_grpc.PluginServicer):

    # 加载插件
    def OnLoad(self, request, context):
        win32api.MessageBox(0,"HelloWorld!","StudyPlugin",win32con.MB_OK)
        return hiperlink_pb2.EventsResponse()

    # 停用插件
    def OnUnload(self, request, context):
        return hiperlink_pb2.EventsResponse()

    # 安装插件
    def OnInstall(self, request, context):
        return hiperlink_pb2.EventsResponse()

    # 卸载插件
    def OnUninstall(self, request, context):
        return hiperlink_pb2.EventsResponse()

    # HL 启动
    def OnStart(self, request, context):
        return hiperlink_pb2.EventsResponse()

    # HL 停止
    def OnStop(self, request, context):
        return hiperlink_pb2.EventsResponse()

    # 前后端交互
    def Interaction(self, request, context):
        return hiperlink_pb2.InteractionResponse()

def get_free_port():
    while True:
        port = random.randint(32768, 61000)
        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        if not (sock.connect_ex(('127.0.0.1', port)) == 0):
            return port 

if __name__ == '__main__':
    health = health_pb2_grpc.HealthServicer()
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    hiperlink_pb2_grpc.add_PluginServicer_to_server(HiperLinkServicer(), server)
    health_pb2_grpc.add_HealthServicer_to_server(health, server)
    port = get_free_port()
    server.add_insecure_port(f'127.0.0.1:{port}')
    server.start()
    print(f"1|1|tcp|127.0.0.1:{port}|grpc")
    sys.stdout.flush()
    try:
        while True:
            time.sleep(60 * 60 * 24)
    except KeyboardInterrupt:
        server.stop(0)
```

让我们使用`python plugin.py`命令运行此py文件。

如果出现了`1|1|tcp|127.0.0.1:xxxxx|grpc`的输出，并且程序一直保持运行，那么该插件就可以进行下一步了。

为了照顾没有`python`的用户，你应该打包此插件！

目前尚不支持`pyinstaller`打包，我们推荐你使用`cxfreeze`打包。

在`study_plugin`文件夹下输入此终端命令：
``` cmd
pip install cx_Freeze
cxfreeze plugin.py
```
等待片刻，`study_plugin`文件夹下将会生成`build`文件夹，将其中的可执行文件移动到`study_plugin`文件夹（当然，你可以删除一些冗余文件）

最终`study_plugin`文件夹的目录结构如下：

```
└─study_plugin
    │  metadata.json
    │  plugin.exe
    │  plugin.py
    │  python3.dll
    │  python310.dll
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