# C#/.NET

::: tip
参考文档：[.NET 上的 gRPC 概述](https://learn.microsoft.com/zh-cn/aspnet/core/grpc/)

本教程基于[Visual Studio Code](https://code.visualstudio.com/download)与[C#插件](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp)进行编写。
::: warning
本教程假定用户熟悉 VS Code。
:::

请打开`终端`，然后CD到study_plugin文件夹，输入以下命令生成工程。

``` terminal
cd \HiperLink\plugins\study_plugin
dotnet new grpc -o StudyPlugin
cd StudyPlugin
dotnet dev-certs https --trust
```

让我们打开工程。
