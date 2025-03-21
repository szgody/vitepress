# iKuai 系统使用指南

iKuai 是一款功能强大的企业级路由管理系统，提供了全面的网络管理功能，包括负载均衡、流量控制、VPN等。本文将介绍 iKuai 的安装、配置、常见参数以及实际案例。

## 安装 iKuai

### 硬件安装
1. 将 iKuai 安装到支持的硬件设备上。
2. 连接电源和网络接口。

### 软件安装
1. 下载 iKuai 安装包并写入到USB闪存盘。
2. 插入闪存盘，启动设备并进入BIOS设置，设置从USB启动。
3. 按照屏幕提示完成安装。

## 配置 iKuai

### 登录管理界面
1. 使用浏览器访问设备的默认IP地址（通常为 `192.168.1.1`）。
2. 使用默认用户名和密码登录（默认用户名 `admin`，密码 `admin`）。

### 网络接口配置
配置WAN和LAN接口：

```plaintext
网络 -> 接口设置 -> WAN口设置
网络 -> 接口设置 -> LAN口设置
```

### 配置负载均衡
1. 进入 `负载均衡` 菜单。
2. 添加WAN接口并配置负载均衡策略。

### 配置流量控制
1. 进入 `流量控制` 菜单。
2. 添加控制策略，设置带宽限制、优先级等参数。

### 配置VPN
1. 进入 `VPN` 菜单。
2. 选择VPN类型（如L2TP、PPTP、IPSec）。
3. 按照向导设置VPN参数。

## 常见参数

- **接口设置**：配置WAN和LAN接口的IP地址、子网掩码、网关等。
- **负载均衡**：配置多个WAN接口的负载均衡策略。
- **流量控制**：设置带宽限制、优先级等流量控制参数。
- **VPN**：配置VPN的类型、认证方式、加密方式等。
- **防火墙**：设置防火墙规则、访问控制列表（ACL）等。
- **DHCP**：配置DHCP服务器的IP地址池、租约时间等。

## 示例案例

### 案例 1：配置基本的WAN和LAN接口

1. 登录管理界面。
2. 进入 `网络 -> 接口设置 -> WAN口设置`，配置WAN口的IP地址、子网掩码、网关和DNS。
3. 进入 `网络 -> 接口设置 -> LAN口设置`，配置LAN口的IP地址和子网掩码。

### 案例 2：配置负载均衡

1. 进入 `负载均衡` 菜单。
2. 添加两个WAN接口，并设置负载均衡策略为轮询。
3. 保存配置。

### 案例 3：配置流量控制策略

1. 进入 `流量控制` 菜单。
2. 添加新的流量控制策略，设置带宽限制为每用户2Mbps。
3. 保存配置。

### 案例 4：配置L2TP VPN

1. 进入 `VPN` 菜单。
2. 选择 `L2TP` 并添加新的L2TP VPN配置。
3. 设置VPN服务器的IP地址、用户名和密码。
4. 保存配置并启用VPN服务。

## 参考链接

- [iKuai 官方文档](https://www.ikuai8.com/document)
- [iKuai 支持论坛](https://forum.ikuai8.com)
