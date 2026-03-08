# Web 面板访问

## 默认访问方式

TreeCore 的 Web 面板默认只监听本机：

- 地址：`http://127.0.0.1:8080`
- 默认端口：`8080`

默认相关配置：

```jsonc
{
  "webServerPort": 8080,
  "webAllowRemote": false,
  "webBindAddress": "127.0.0.1",
  "webRequireAuth": false,
  "webAdminToken": ""
}
```

这意味着：

- 你在服务器本机浏览器里通常能直接打开
- 局域网 / 公网设备默认不能直接访问

---

## 如何开启远程访问

如果你要让其他设备访问 Web 面板，建议至少这样配置：

```jsonc
{
  "webAllowRemote": true,
  "webBindAddress": "0.0.0.0",
  "webRequireAuth": true,
  "webAdminToken": "请改成你自己的强随机令牌"
}
```

### 建议说明

- `webAllowRemote = true`：允许非回环地址访问
- `webBindAddress = 0.0.0.0`：监听全部网卡
- `webRequireAuth = true`：启用管理令牌验证
- `webAdminToken`：建议使用足够长的随机字符串

> 不建议把远程访问和无鉴权同时打开。

---

## 当前面板页签

当前 Web 面板为 **11 页签**：

1. 仪表盘
2. 控制台
3. 系统诊断
4. 核心配置
5. 生电优化
6. 模型管理
7. 资源包
8. 粒子特效
9. 集成运维
10. ItemsAdder 编辑器
11. 备份管理

---

## 常见访问问题

### 打不开页面
请优先检查：

1. 服务端是否成功启动 WebServer
2. 端口是否被占用
3. 是否仍在使用旧缓存页面（浏览器可尝试 `Ctrl + F5`）
4. 是否启用了远程访问但防火墙未放行端口

### 页面看起来还是旧版本
当前网页资源带有版本同步机制。

如果你升级了服务端但页面没变化，重点检查：

- 运行的是否真的是新 JAR
- 服务端是否完整重启
- `treecore-web/.ui_version` 是否已刷新

技术细节可看：

- [Web 资源同步机制](../development/web-ui-pipeline.md)

---

## 下一步阅读

- [资源包 / 模型链路](../operations/resource-pack.md)
- [诊断与备份](../operations/diagnostics-and-backups.md)
