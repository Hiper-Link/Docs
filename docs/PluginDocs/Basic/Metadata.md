# 插件元数据

此时你的插件还无法被识别，因为我们需要编写metadata.json的内容。

metadata.json 的基础模板如下：

``` json
{
    "id": "",
    "version": "",
    "name": "",
    "description": "",
    "author": [""],
    "link": "",
    "dependencies": {
        "hiperlink": ">=1.0.0"
    },
    "command": "",
    "args": [],
    "type": "gRPC",
    "root": false,
    "color": "",
    "icon": "",
    "frontend": {
        "ui": true,
        "configuration": true
    }
}
```

## 属性

### id

- 字段键名：`id`
- 字段类型：`string`

ID（即插件 ID）是你插件的“身份证号”。

该值要与文件夹名称保持一致。

HiperLink 使用插件 ID 来区分不同的插件并检查插件间的依赖。 HiperLink 中加载的所有插件都应使用不同的插件 ID。如果新加载的插件具有与现有插件完全相同的插件 ID，则新插件将无法加载

请明智地选择你的插件 ID。强烈建议你在发布插件后不要再更改插件 ID

::: warning
小心可能的包名冲突。非常不推荐为你的插件取一个与标准库 / 第三方库名相同的 id，如 test，否则 MCDR 很可能无法正确地加载你的插件
:::

### version

- 字段键名：`version`
- 字段类型：`string`

version 字段代表你的插件版本。它基本上采用了 [语义化版本](https://semver.org/lang/zh-CN/) 的格式，不过限制较少，如你可以定义任意长度的版本号

### name 

- 字段键名：`name`
- 字段类型：`string`

你的插件名称——给你的插件起一个好听的名字吧

尽量不要使插件名称太长。你可以把插件的详细信息放在 `description` 之中

### description

- 字段键名：`description`
- 字段类型：`string`

你的插件描述。在这里写下你的插件的功能总结吧

### author

- 字段键名：`author`
- 字段类型：`string[]`

插件作者。该值为数组，可以容纳多个作者

### link

- 字段键名：`link`
- 字段类型：`string`

你的插件的网址。你可以将其指向插件的 github 链接。它的值应为一个可访问的网址

### command

- 字段键名：`command`
- 字段类型：`string`

插件的运行指令，如`./plugin`，`python plugin.py`，`java -jar plugin.jar`等。

### args

- 字段键名：`args`
- 字段类型：`string[]`

插件的指令参数

### type

- 字段键名：`type`
- 字段类型：`string`
- 可选值  : `gRPC`与`netRPC`

插件与HiperLink通信方式，目前可选的值只有`gRPC`与`netRPC`

### root

- 字段键名：`root`
- 字段类型：`bool`

插件是否需要使用管理员权限运行

### color 

- 字段键名：`color`
- 字段类型：`string`

插件图标的颜色，为十六进制颜色码(#FFFFFF)和RGB颜色码()。颜色的选择可以参考[中国色](http://zhongguose.com)

### icon 

- 字段键名：`icon`
- 字段类型：`string`

插件图标，该值为`mdi-` + [Material Design Icons](https://materialdesignicons.com/)上的所有可选图标代码，如`mdi-user-arrow-left-outline`

### frontend.ui

- 字段键名：`ui`
- 字段类型：`bool`

是否显示插件页面

### frontend.configuration

- 字段键名：`configuration`
- 字段类型：`bool`

是否显示配置页面

## 实例

在本案例中，metadata.json的内容应该是：

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
    "command": "",
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