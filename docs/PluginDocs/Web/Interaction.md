# 交互

前文的`HTML`中可以加入`JavaScript`，`HiperLink` 添加了 `HLInteraction` 方法来进行后端与前端的交互。

HLInteraction 用法如下

``` javascript
HLInteraction("插件ID","方法名")
```

使用案例：

``` html
<script type="text/javascript">
    var PluginID = 'study_plugin'
    function init() {
        HLInteraction(PluginID, 'something').then((result) => {
            const obj = JSON.parse(result)
			// 其中obj即为方法返回的json对象。
        })
    }
    window.onload = init()
</script>
```