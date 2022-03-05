# Tempo

基于angular版本开发，[在线预览](https://bojue.github.io/Web-Editor/)

## 项目截图


<img width="1278" alt="update" src="https://user-images.githubusercontent.com/14350577/156899334-b5b7b5fa-16ef-4077-906d-ecde085805f2.png">

<img width="1264" alt="newdemo" src="https://user-images.githubusercontent.com/14350577/156899343-63bdfce5-206d-4f18-aab3-0a888ddc0716.png">

```diff
! DEMO数据存储在IndexedDB，不要清除本地缓存:cookie及其他网站数据 
! 商业开发请开发对应后台服务
```

## 下载

- 前端
```javascript
git clone https://github.com/bojue/Web-Editor.git
cd Web-Editor
npm install

```

## 运行

1. 默认运行命令，需要服务端支持，也就是所以tag v0.1.0之后的版本，请先下载 [服务端node版本](https://github.com/bojue/Web-editor-server) 并完成服务端启动。

```javascrpt
npm run dev 

//or

npm run start

```


## 使用说明

> 功能列表

* 拖拽创建组件
* 页面管理
* 元素列表
* 样式绑定
* 快捷键
* 预览
* 项目管理
* <del>服务器支持 (仅v0.1.0支持)</del>
* IndexDB


> 快捷键

名称|快捷键
----|----
拷贝| `control+ c`
复制| `control+ v`
删除| `delete`
位置|上，下，左，右键

## 开发文档

> 编辑器代码组织

```ASCII
.
+-- editor                      //编辑器模块
|   +-- comps  
|       +-- comp-basic              //组件库基类
|           +-- data-basic             //数据基类组件
|           +-- event-basic            //事件基类组件
|           +-- style-basic            //样式基类组件
|           +-- custom-basic           //自定义基类组件（业务组件）
|       +-- comp-lib                //核心组件库
|           +-- basic                   //基础组件库，不需要绑定数据的组件 
|           +-- business                //业务组件库，可绑定数据等复杂操作
|           +-- tool                    //工具组件库，仅方便编辑组态
|       +-- comp-settings          //设置组件库
|           +-- data                    //数据绑定
|           +-- event                   //事件绑定
|           +-- style                   //样式绑定
|   +-- develop                     //开发编辑模块
|       +-- configuration               //页面配置
|       +-- help                        //帮助
|       +-- pre-view                    //预览
|       +-- setting                     //组件设置
|       +-- develop.component           //编辑器核心容器组态
|   +-- directive                   //编辑器指令
|   +-- model  
|   +-- provider                    //编辑器核心服务
|       +-- comp-list.service           //组态列表
|       +-- comp-config.service         //组态配置信息
|       +-- comp-dynamic-create.service //组态type和组态映射
```

## v0.1.1
- 服务端(仅v0.1.1支持服务端)

```javascript
npm run proxy 
```


下载编辑器对应的[Node服务端](https://github.com/bojue/Web-editor-server)，` v0.1.0 `以后版本都需要服务器支持，请按照 [文档](https://github.com/bojue/Web-editor-server/blob/master/README.md) 配置依次服务器


## 其他


> History List

- 项目基于angular2 (版本号 7.0.2)开发
- 已经升级到V8.0
- 服务端支持
- 本地部署


> TODO List

- IDC行业组态扩展示例内容
- 在线试用

