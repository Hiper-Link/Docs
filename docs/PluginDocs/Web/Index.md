# 前端

对于每个插件，在其文件夹下都有`src`子文件夹，此文件夹内部有两个文件：`index.html`与`config.html`。

- index.html 为插件页面的入口点
- config.html 为插件的配置页面

编写插件页面需要你有基本的`HTML`与`JavaScript`知识，HiperLink内置了[Vuetify](https://vuetify.cn/zh-Hans/) 框架，因此您可以直接开始！

以下是一个用于范例的`index.html`页面代码：

```html
<div class="v-container">
  <div class="v-row">
    <div class="v-col-sm-7 v-col-12">
      <div class="v-card v-card--flat v-theme--light v-card--density-default v-card--variant-elevated" style="background-color: rgb(242, 245, 254); border-radius: 12px; margin-top: -8px;">
        <div class="v-card-title" style="margin-top: 12px;">
          <strong>这是一个卡片</strong>
          <div class="v-card-text">
            <div style="overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 7; -webkit-box-orient: vertical;">
              <div class="v-input v-input--horizontal v-input--density-default v-text-field">
                <div class="v-input__control">
                  <div class="v-field v-field--active v-field--has-background v-field--variant-filled v-theme--light" role="textbox" style="background-color: rgb(242, 245, 254);">
                    <div class="v-field__overlay">
                    </div>
                    <div class="v-field__loader">
                      <div class="v-progress-linear v-theme--light" role="progressbar" aria-hidden="true" aria-valuemin="0" aria-valuemax="100" style="height: 0px; --v-progress-linear-height:2px;">
                        <div class="v-progress-linear__background bg-info" style="width: 100%;">
                        </div>
                        <div class="v-progress-linear__indeterminate">
                          <div class="v-progress-linear__indeterminate long bg-info">
                          </div>
                          <div class="v-progress-linear__indeterminate short bg-info">
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="v-field__field" data-no-activator="">
                      <label class="v-label v-field-label v-field-label--floating" aria-hidden="true" for="input-887">这是一个输入框</label>
                      <input size="1" type="text" id="otherip" class="v-field__input">
                    </div>
                    <div class="v-field__outline">
                    </div>
                  </div>
                </div>
                <div class="v-input__details">
                  <div class="v-messages">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="v-card-actions" style="margin-top: -24px;">
            <div style="float: right;">
              <button type="button" onclick="" class="v-btn v-theme--light text-info v-btn--density-default v-btn--size-default v-btn--variant-text" style="font-size: 16px;">
                <span class="v-btn__overlay">
                </span>
                <span class="v-btn__underlay">
                </span>
                <span class="v-btn__content" data-no-activator="">一个小按钮</span>
              </button>
            </div>
          </div>
          <span class="v-card__underlay">
          </span>
        </div>
      </div>
    </div>
    <div class="v-col-sm-5 v-col-12">
      <div class="v-card v-card--flat v-theme--light v-card--density-default v-card--variant-elevated" style="background-color: rgb(242, 245, 254); border-radius: 12px; margin-top: -8px;">
        <div class="v-card__loader">
          <div class="v-progress-linear v-theme--light" role="progressbar" aria-hidden="true" aria-valuemin="0" aria-valuemax="100" style="height: 0px; --v-progress-linear-height:2px;">
            <div class="v-progress-linear__background" style="width: 100%;">
            </div>
            <div class="v-progress-linear__indeterminate">
              <div class="v-progress-linear__indeterminate long">
              </div>
              <div class="v-progress-linear__indeterminate short">
              </div>
            </div>
          </div>
        </div>
        <div class="v-card-title" style="margin-top: 12px;">
          <strong>这是另一个卡片</strong>
          <div style="margin-top: 4px;font-size: 1px;">一些简单的注释，下面是一个列表</div>
        </div>
        <div class="v-card-text">
          <div class="v-table v-theme--light v-table--density-compact">
            <div class="v-table__wrapper">
              <table>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                      <span class="v-chip v-theme--light text-info v-chip--density-default v-chip--size-x-small v-chip--variant-tonal" draggable="false" id="version-rustdesk">1
                        <span class="v-chip__underlay"></span>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>
                      <span class="v-chip v-theme--light text-info v-chip--density-default v-chip--size-x-small v-chip--variant-tonal" draggable="false" id="ip">2
                        <span class="v-chip__underlay"></span>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>111</td>
                    <td>
                      <span class="v-chip v-theme--light text-info v-chip--density-default v-chip--size-x-small v-chip--variant-tonal" draggable="false" id="password">3
                        <span class="v-chip__underlay"></span>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>1111</td>
                    <td>
                      <span class="v-chip v-theme--light text-info v-chip--density-default v-chip--size-x-small v-chip--variant-tonal" draggable="false" id="password">4
                        <span class="v-chip__underlay"></span>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>1111</td>
                    <td>
                      <span class="v-chip v-theme--light text-info v-chip--density-default v-chip--size-x-small v-chip--variant-tonal" draggable="false" id="password">5
                        <span class="v-chip__underlay"></span>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <span class="v-card__underlay">
        </span>
      </div>
      <a class="v-btn v-btn--block v-theme--light v-btn--density-default rounded-xl v-btn--size-x-large v-btn--variant-tonal" style="color: rgb(106, 164, 255); caret-color: rgb(106, 164, 255); margin-top: 16px;" onclick="" id="actionButton">
        <span class="v-btn__overlay">
        </span>
        <span class="v-btn__underlay">
        </span>
        <span class="v-btn__content" data-no-activator="">
          <strong id="action">一个大按钮</strong>
        </span>
      </a>
    </div>
  </div>
</div>
```
效果如下：
![Example](/img/PluginDocs/Example-1.png "Example")
