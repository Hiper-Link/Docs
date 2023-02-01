# 插件目录格式

插件的基本组织形式为`文件夹`，一个文件夹即为一个插件。

插件所需要用到的一切都可以放进这个文件夹中。

现在，让我们制作一个名为`StudyPlugin`的插件。

首先我们需要一个`唯一ID`，这将会成为你插件的标志。在这里我们将`StudyPlugin`的唯一ID设定为`study_plugin`。

然后我们需要进行三步：

>1. 创建一个名为 `study_plugin` 的文件夹
>
>2. 在文件夹中创建 `metadata.json` 文件
>
>3. 将文件夹移动到HiperLink下的plugins文件夹（如果没有就新建）

目录在此时应该是这样的：

```
│ HiperLink.exe
├─config
├─libs        
├─logs
└─plugins
    ├─study_plugin
        ├─metadata.json
```