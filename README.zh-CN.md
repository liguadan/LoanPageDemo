[English](./README.md) | 简体中文

# dswp-admin

直销银行的中后台前端/设计解决方案。

- 预览：http://www.qiandaijr.com/
- 使用文档：[Documentation](./docs/getting-started.md)
- 更新日志: [ChangeLog](./docs/CHANGELOG.md)
- 常见问题：[FAQ](./docs/faq.md)

## 特性

- :gem: **优雅美观**：基于 Element UI 体系精心设计
- :triangular_ruler: **常见设计模式**：提炼自中后台应用的典型页面和场景
- :rocket: **最新技术栈**：使用 Vue/Vuex/Element UI 等前端前沿技术开发
- :art: **主题**：可配置的主题满足多样化的品牌诉求
- :gear: **最佳实践**：良好的工程实践助您持续产出高质量代码

## 项目结构

```
- dist                                  # 打包输出目录
- docs                                  # 文档目录
  - CHANGELOG.md                        # 更新日志
  - faq.md                              # 常见问题
  - getting-started.md                  # 使用文档
- node_modules                          # 依赖的node工具包目录
- public                                # 静态文件目录
- src                                   # 源码目录
  - assets                              # 资源目录
  - components                          # 组件目录
  - pages                               # 视图目录
  - plugins                             # 插件目录
  - router                              # 路由目录
  - service                             # 接口目录
  - store                               # Vuex配置目录
  - utils                               # 常用工具目录
  - App.vue                             # Vue实例入口
  - main.js                             # 项目构建入口
- .browserslistrc                       # 浏览器兼容性配置
- .editorconfig                         # vscode 编辑器配置
- .eslintrc                             # 代码检测配置
- .gitignore                            # Git 提交忽略文件
- .postcssrc.js                         # postcss配置文件
- babel.config.js                       # babel配置文件
- package-lock.json                     # 锁定包版本号文件
- package.json                          # 项目配置文件
- README.md                             # 英文项目说明文件
- README.zh-CN.md                       # 中文项目说明文件
- vue.config.js                         # webpack相关配置
```

## 使用

```bash
$ git clone
$ cd dswp-admin
$ npm install
$ npm run dev         # 访问 http://localhost:8888
```

## 兼容性

## 参与贡献

我们非常欢迎你的贡献，你可以通过以下方式和我们一起共建 :smiley:：

- 通过 [Issue](../issues) 报告 bug 或进行咨询。
- 提交 [Pull Request](.../pulls) 改进 dswp-admin 的代码。
