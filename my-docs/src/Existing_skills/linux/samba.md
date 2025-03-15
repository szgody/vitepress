# Samba 服务指南

Samba 是一个用于在 Linux 系统和 Windows 系统之间实现文件和打印共享的免费软件。它实现了 SMB/CIFS 协议，使得 Linux 系统能够像 Windows 系统一样进行文件共享和打印共享。

## 安装 Samba

在大多数 Linux 发行版中，您可以使用包管理器来安装 Samba：

### 在 Debian/Ubuntu 上安装

```bash
sudo apt update
sudo apt install samba
```

### 在 CentOS/RHEL 上安装

```bash
sudo yum install samba
```

## 配置 Samba

Samba 的主要配置文件是 `/etc/samba/smb.conf`。在配置文件中，您可以定义共享目录、用户权限等。

### 示例配置文件

以下是一个简单的 Samba 配置文件示例：

```ini
[global]
   workgroup = WORKGROUP
   server string = Samba Server %v
   netbios name = ubuntu
   security = user
   map to guest = bad user
   dns proxy = no

[Anonymous]
   path = /srv/samba/anonymous
   browsable = yes
   writable = yes
   guest ok = yes
   read only = no

[Private]
   path = /srv/samba/private
   valid users = @smbgroup
   guest ok = no
   writable = yes
   browsable = yes
```

### 解释

- `[global]` 部分包含全局设置，如工作组名称、NetBIOS 名称和安全选项。
- `[Anonymous]` 部分定义了一个匿名共享，任何人都可以访问和写入。
- `[Private]` 部分定义了一个私有共享，仅 `smbgroup` 组的用户可以访问。

## 创建共享目录

创建共享目录并设置权限：

```bash
sudo mkdir -p /srv/samba/anonymous
sudo mkdir -p /srv/samba/private
sudo chown -R nobody:nogroup /srv/samba/anonymous
sudo chown -R root:smbgroup /srv/samba/private
sudo chmod -R 0775 /srv/samba/private
```

## 管理 Samba 用户

添加 Samba 用户：

```bash
sudo smbpasswd -a username
```

添加 Samba 组：

```bash
sudo groupadd smbgroup
sudo usermod -aG smbgroup username
```

## 启动和管理 Samba 服务

启动 Samba 服务：

```bash
sudo systemctl start smbd
sudo systemctl start nmbd
```

设置开机自启动：

```bash
sudo systemctl enable smbd
sudo systemctl enable nmbd
```

## 测试和访问共享

### 从 Linux 客户端访问

您可以使用 `smbclient` 工具来访问 Samba 共享：

```bash
smbclient //hostname/Anonymous
```

### 从 Windows 客户端访问

您可以在 Windows 资源管理器中输入 `\\hostname\Anonymous` 来访问共享。

## 常见参数

- `workgroup`：指定工作组名称。
- `server string`：设置服务器描述。
- `netbios name`：设置 NetBIOS 名称。
- `security`：定义安全模式，如 `user`、`share`。
- `path`：定义共享目录的路径。
- `browsable`：指定共享是否可浏览。
- `writable`：指定共享是否可写。
- `guest ok`：允许匿名访问。

## 示例案例

### 共享公共文件夹

创建一个公共文件夹，允许所有用户读写：

```ini
[Public]
   path = /srv/samba/public
   browsable = yes
   writable = yes
   guest ok = yes
   read only = no
```

### 共享私有文件夹

创建一个私有文件夹，仅允许特定用户访问：

```ini
[Private]
   path = /srv/samba/private
   valid users = user1 user2
   guest ok = no
   writable = yes
   browsable = yes
```

## 参考链接

- [Samba 官方文档](https://www.samba.org/samba/docs/)
- [Samba Wiki](https://wiki.samba.org/index.php/Main_Page)
