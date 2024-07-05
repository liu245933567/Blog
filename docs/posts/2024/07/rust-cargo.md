---
title: 了解 Cargo
date: 2024-07-03
categories:
  - 编程技术
tags:
  - Rust
---

# Cargo

.toml 文件（Tom's Obvious, Minimal Language）是一种配置文件格式，广泛用于 Rust 项目中，特别是 Cargo 用来描述项目及其依赖项的配置文件。一个典型的 Rust 项目根目录中会包含一个 Cargo.toml 文件。

Cargo.toml 文件是 Rust 项目的配置文件，使用 TOML（Tom's Obvious, Minimal Language）语法格式来描述项目的元数据和依赖关系。以下是对 Cargo.toml 文件中各个部分的详细讲解：

基本结构

一个典型的 Cargo.toml 文件包含以下几个部分：

- [package]：项目的基本信息。
- [dependencies]：项目的依赖项。
- [dev-dependencies]：开发环境的依赖项。
- [build-dependencies]：构建脚本的依赖项。
- [features]：可选功能和特性。
- [workspace]：工作空间配置。
- [profile]：配置构建选项。
- [patch]：覆盖依赖项。
- [replace]：替换依赖项。
- [badges]：在文档中显示状态徽章。

[package] 部分

描述项目的基本信息

```toml
[package]
name = "my_project"
version = "0.1.0"
authors = ["Your Name <your.email@example.com>"]
edition = "2021"
description = "A brief description of my project"
license = "MIT"
repository = "https://github.com/yourusername/my_project"
homepage = "https://myproject.example.com"
documentation = "https://docs.myproject.example.com"
readme = "README.md"
keywords = ["example", "project"]
categories = ["command-line-utilities"]
```