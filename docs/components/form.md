---
title: Form | Simple UI
description: Form 组件的文档
---

# Form 表单
表单包含 `输入框`, `单选框`, `下拉选择`, `多选框` 等用户输入的组件。 使用表单，您可以收集、验证和提交数据。

## 典型表单
使用 `type`、`plain`、`round` 和 `circle` 来定义按钮的样式。

<preview path="../demo/Form/Basic.vue" title="典型表单" description="Form 表单的典型表单"></preview>

## 表单校验
Form 组件允许你验证用户的输入是否符合规范，来帮助你找到和纠正错误。

Form 组件提供了表单验证的功能，只需为 rules 属性传入约定的验证规则，并将 form-Item 的 prop 属性设置为需要验证的特殊键值即可。 更多高级用法可参考 async-validator。

<preview path="../demo/Form/rules.vue" title="表单校验" description="Form 表单的表单校验"></preview>

## 自定义校验规则
这个例子中展示了如何使用自定义验证规则来完成密码的二次验证。

<preview path="../demo/Form/setRules.vue" title="自定义校验规则" description="Form 表单的自定义校验规则"></preview>