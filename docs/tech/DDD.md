---
title: Domain-Driven Design
tags:
  - book
  - DDD
---

# {{ $frontmatter.title }}

[[toc]]

软件核心复杂性应对之道

项目怎么开发才能确保成功？什么样的软件才能为用户提供真正的价值？什么样的团队才算是优秀的团队？现在，在仔细研读本书后，这些问题都找到了答案。

本书有两个前提：

- 在大多数软件项目中，主要的焦点应该是领域和领域逻辑。
- 复杂的领域设计应该基于模型。

>[极限编程](https://www.scrumcn.com/agile/xp.html#:~:text=%E6%9E%81%E9%99%90%E7%BC%96%E7%A8%8B%E7%9A%84%E4%B8%BB%E8%A6%81%E7%9B%AE%E6%A0%87%E5%9C%A8%E4%BA%8E%E9%99%8D%E4%BD%8E%E5%9B%A0%E9%9C%80%E6%B1%82%E5%8F%98%E6%9B%B4%E8%80%8C%E5%B8%A6%E6%9D%A5%E7%9A%84%E6%88%90%E6%9C%AC%E3%80%82%20%E5%9C%A8%E4%BC%A0%E7%BB%9F%E7%B3%BB%E7%BB%9F%E5%BC%80%E5%8F%91%E6%96%B9%E6%B3%95%E4%B8%AD%EF%BC%8C%E7%B3%BB%E7%BB%9F%E9%9C%80%E6%B1%82%E6%98%AF%E5%9C%A8%E9%A1%B9%E7%9B%AE%E5%BC%80%E5%8F%91%E7%9A%84%E5%BC%80%E5%A7%8B%E9%98%B6%E6%AE%B5%E5%B0%B1%E7%A1%AE%E5%AE%9A%E4%B8%8B%E6%9D%A5%EF%BC%8C%E5%B9%B6%E5%9C%A8%E4%B9%8B%E5%90%8E%E7%9A%84%E5%BC%80%E5%8F%91%E8%BF%87%E7%A8%8B%E4%B8%AD%E4%BF%9D%E6%8C%81%E4%B8%8D%E5%8F%98%E7%9A%84%E3%80%82%20%E8%BF%99%E6%84%8F%E5%91%B3%E7%9D%80%E9%A1%B9%E7%9B%AE%E5%BC%80%E5%8F%91%E8%BF%9B%E5%85%A5%E5%88%B0%E4%B9%8B%E5%90%8E%E7%9A%84%E9%98%B6%E6%AE%B5%E6%97%B6%E5%87%BA%E7%8E%B0%E7%9A%84%E9%9C%80%E6%B1%82%E5%8F%98%E6%9B%B4%E5%B0%86%E5%AF%BC%E8%87%B4%E5%BC%80%E5%8F%91%E6%88%90%E6%9C%AC%E6%80%A5%E9%80%9F%E5%A2%9E%E5%8A%A0%EF%BC%8C%E8%80%8C%E8%BF%99%E6%A0%B7%E7%9A%84%E9%9C%80%E6%B1%82%E5%8F%98%E6%9B%B4%E5%9C%A8%E4%B8%80%E4%BA%9B%E5%8F%91%E5%B1%95%E6%9E%81%E5%BF%AB%E7%9A%84%E9%A2%86%E5%9F%9F%E4%B8%AD%E6%98%AF%E4%B8%8D%E5%8F%AF%E9%81%BF%E5%85%8D%E7%9A%84%E3%80%82%20%E6%9E%81%E9%99%90%E7%BC%96%E7%A8%8B%E9%80%9A%E8%BF%87%E5%BC%95%E5%85%A5%E5%9F%BA%E6%9C%AC%E4%BB%B7%E5%80%BC%E3%80%81%E5%8E%9F%E5%88%99%E3%80%81%E6%96%B9%E6%B3%95%E7%AD%89%E6%A6%82%E5%BF%B5%E6%9D%A5%E8%BE%BE%E5%88%B0%E9%99%8D%E4%BD%8E%E5%8F%98%E6%9B%B4%E6%88%90%E6%9C%AC%E7%9A%84%E7%9B%AE%E7%9A%84%E3%80%82,%E4%B8%80%E4%B8%AA%E5%BA%94%E7%94%A8%E4%BA%86%E6%9E%81%E9%99%90%E7%BC%96%E7%A8%8B%E6%96%B9%E6%B3%95%E7%9A%84%E7%B3%BB%E7%BB%9F%E5%BC%80%E5%8F%91%E9%A1%B9%E7%9B%AE%E5%9C%A8%E5%BA%94%E5%AF%B9%E9%9C%80%E6%B1%82%E5%8F%98%E6%9B%B4%E6%97%B6%E5%B0%86%E6%98%BE%E5%BE%97%E6%9B%B4%E4%B8%BA%E7%81%B5%E6%B4%BB%E3%80%82%20%E6%9E%81%E9%99%90%E7%BC%96%E7%A8%8B%E7%9A%8412%E4%B8%AA%E6%A0%B8%E5%BF%83%E5%AE%9E%E8%B7%B5%20%E7%9F%AD%E4%BA%A4%E4%BB%98%E5%91%A8%E6%9C%9F%20%E6%9E%81%E9%99%90%E7%BC%96%E7%A8%8B%E5%92%8CScrum%E4%B8%80%E6%A0%B7%E9%87%87%E7%94%A8%E8%BF%AD%E4%BB%A3%E7%9A%84%E4%BA%A4%E4%BB%98%E6%96%B9%E5%BC%8F%EF%BC%8C%E6%AF%8F%E4%B8%AA%E8%BF%AD%E4%BB%A31-3%E5%91%A8%E6%97%B6%E9%97%B4%E3%80%82)

## 让领域模型发挥作用

## 模型驱动设计的构造块

## 通过重构来加深理解

## 战略设计