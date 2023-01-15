# 简介

::: warning
HiperLink仍然在测试阶段，此文档可能随时变更。
:::

HiperLink插件（以下简称插件）可以使用任何支持netRPC或gRPC通讯的语言编写。

我们建议你使用`Golang`进行插件开发。

::: tip

`net/rpc`只有`Golang`支持，所以本文档会优先注重多语言支持的`gRPC`库。

`gRPC`在理论上支持`C/C++`、`C#`、`Dart`、`Go`、`Java`、`Kotlin`、`Node.js`、`Objective-C`、`PHP`、`Python`、`Ruby`等语言。

HiperLink 需要支持`多平台`，你所选用的语言应该尽可能的支持更多平台，因此`Objective-C`，`PHP`等选项被不幸的排除在外了。
:::

如果你准备好了，那让我们开始吧！