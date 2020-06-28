# 架构

## MVC
- 用户向View发出指令
- View告诉Controller要干嘛
- Controller修改Model
- View订阅了Model，Model的修改触发View的更新
- ps: 业务逻辑在Controller中 

## MVP
- 用户向View发出指令
- View告诉Controller要干嘛
- Controller修改Model
- Model告诉Presenter修改了什么
- Presenter触发View的更新
- ps: 业务逻辑在Presenter中 

## MVVM
- View和viewModel中的数据双向绑定，同时变化
- viewModel中的逻辑修改Model
- Model的修改告诉viewModel
- viewModel和View一同更新
- ps: 业务逻辑在viewModel中

## 微内核
- 核心
- 插件