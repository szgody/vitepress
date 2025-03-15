# iKuai 系统安装 Docker 使用指南

Docker 是一个开源的应用容器引擎，允许开发者将应用程序及其所有依赖打包成一个标准化的单元。本文将介绍如何在 iKuai 系统上通过插件管理安装 Docker 以及使用方法、参数和实际案例。

## 安装 Docker

### 步骤 1：登录 iKuai 管理界面

1. 打开浏览器并输入 iKuai 设备的 IP 地址（默认地址通常为 `192.168.1.1`）。
2. 输入用户名和密码（默认用户名为 `admin`，密码为 `admin`），然后点击登录。

### 步骤 2：进入插件管理

1. 在左侧导航栏中找到并点击 `插件管理`。
2. 在插件管理页面中，找到 `Docker` 插件并点击 `安装`。

### 步骤 3：配置 Docker

1. 安装完成后，进入 `Docker` 插件设置界面。
2. 配置 Docker 存储目录，可以选择默认目录或者自定义目录。

### 步骤 4：启动 Docker

1. 在 Docker 插件界面，点击 `启动` 按钮启动 Docker。
2. 确认 Docker 状态为运行中。

## 使用 Docker

### 拉取镜像

使用以下命令从 Docker Hub 拉取镜像：

```bash
docker pull <image_name>
```

例如，拉取 Ubuntu 镜像：

```bash
docker pull ubuntu
```

### 运行容器

使用以下命令运行容器：

```bash
docker run -d --name <container_name> <image_name>
```

例如，运行一个 Ubuntu 容器：

```bash
docker run -d --name my_ubuntu ubuntu
```

### 查看运行中的容器

使用以下命令查看运行中的容器：

```bash
docker ps
```

### 停止容器

使用以下命令停止容器：

```bash
docker stop <container_name>
```

例如，停止名为 `my_ubuntu` 的容器：

```bash
docker stop my_ubuntu
```

### 删除容器

使用以下命令删除容器：

```bash
docker rm <container_name>
```

例如，删除名为 `my_ubuntu` 的容器：

```bash
docker rm my_ubuntu
```

## 常见参数

- `-d`：后台运行容器。
- `--name`：指定容器名称。
- `-p`：映射主机和容器的端口。
- `-v`：挂载主机目录到容器。
- `--rm`：容器停止后自动删除容器。

## 示例案例

### 案例 1：运行 Nginx 容器

1. 拉取 Nginx 镜像：

```bash
docker pull nginx
```

2. 运行 Nginx 容器并映射端口：

```bash
docker run -d --name my_nginx -p 80:80 nginx
```

3. 使用浏览器访问 iKuai 设备的 IP 地址，验证 Nginx 服务是否正常运行。

### 案例 2：运行 MySQL 容器

1. 拉取 MySQL 镜像：

```bash
docker pull mysql:5.7
```

2. 运行 MySQL 容器并设置环境变量：

```bash
docker run -d --name my_mysql -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 mysql:5.7
```

3. 使用 MySQL 客户端连接到 iKuai 设备的 IP 地址，验证 MySQL 服务是否正常运行。

### 案例 3：运行 Python 应用容器

1. 创建一个 `Dockerfile` 文件，内容如下：

```dockerfile
FROM python:3.9-slim
COPY app.py /app/app.py
WORKDIR /app
CMD ["python", "app.py"]
```

2. 创建一个 `app.py` 文件，内容如下：

```python
print("Hello, Docker!")
```

3. 构建 Docker 镜像：

```bash
docker build -t my_python_app .
```

4. 运行 Python 应用容器：

```bash
docker run -d --name my_python_container my_python_app
```

## 参考链接

- [Docker 官方文档](https://docs.docker.com)
- [iKuai 官方文档](https://www.ikuai8.com/document)
- [iKuai 支持论坛](https://forum.ikuai8.com)
