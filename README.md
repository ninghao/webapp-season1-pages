## 重要说明

最近我简化了这个项目的开发流程，只保留了一个依赖，让大家可以专注做页面设计。简化开发流程之后的项目地址：[https://github.com/ninghao/landrover-ui](https://github.com/ninghao/landrover-ui)

**演示地址**：[_https://demo.ninghao.net/landrover-ui_](https://demo.ninghao.net/landrover-ui)

**课程地址**：_https://ninghao.net/package/website_

![演示](https://raw.githubusercontent.com/ninghao/landrover-ui/master/images/landrover-demo.jpg)

## 环境

macOS 用户要安装 Xcode，可以在 App Store 里直接搜索并安装一下它，完成以后打开 Xcode，再安装一些额外的工具。Windows 用户也需要安装一些编译工具。

Node.js 版本必须是 11，我在 11.13.0 这个版本的 Node.js 上测试可以正常运行这个项目。在 Node 12 与 13 都失败了。

## 下载

```
git clone git@github.com:ninghao/webapp-s01-pages.git
```

## 安装

可以使用 npm 或 [yarn](https://yarnpkg.com/zh-Hans/) 安装。推荐使用 yarn，因为这样更安全一些，它能确保我安装的包的版本跟你即将安装的包的版本一致，另外安装的速度也会更快。

进入到项目所在的目录：

```
cd webapp-s01-pages
```

然后用 yarn 安装项目需要的包：

```
yarn install
```

如果你的系统没安装 yarn，先去安装一下 yarn 这个工具。

## 编译 Semantic UI

这个项目用了 Semantic UI，第一次运行，你需要先编译一下 Semantic UI，编译好的东西会在 `semantic/dist` 目录的下面。

在项目的目录下执行：

```
gulp build-ui
```

## 监视 Semantic UI

我们会去定制 Semantic UI，修改了某些地方以后，需要重新编译修改的东西，监视 Semantic UI 以后可以自动给我们编译修改之后的东西。这样就不需要每次修改以后手工执行编译命令了。

```
gulp watch-ui
```

## 创建本地服务

在本地可以创建一个服务器，这样会自动在编辑器上打开我们的项目页面，每次我们修改了样式表，脚本以后，浏览器都会自动刷新。

```
gulp serve
```

## 编辑项目

用编辑器打开项目，然后去编辑在 `app` 目录下的东西，你可能还需要去编辑 `semantic` 目录下的东西。

[ninghao.net](http://ninghao.net)
