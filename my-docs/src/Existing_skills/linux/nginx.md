# Nginx 服务指南

Nginx 是一个高性能的 HTTP 服务器和反向代理服务器，同时也是一个 IMAP/POP3 代理服务器。它广泛用于网站托管、负载均衡和反向代理。

## 安装 Nginx

在大多数 Linux 发行版中，您可以使用包管理器来安装 Nginx：

### 在 Debian/Ubuntu 上安装

```bash
sudo apt update
sudo apt install nginx
```

### 在 CentOS/RHEL 上安装

```bash
sudo yum install nginx
```

## 配置 Nginx

Nginx 的主要配置文件位于 `/etc/nginx/nginx.conf`。此外，站点配置文件通常放在 `/etc/nginx/sites-available/` 目录中，并通过符号链接到 `/etc/nginx/sites-enabled/`。

### 示例配置文件

以下是一个简单的 Nginx 配置文件示例：

```conf
# 全局设置
user www-data;
worker_processes auto;
pid /run/nginx.pid;
include /etc/nginx/modules-enabled/*.conf;

events {
    worker_connections 768;
    # multi_accept on;
}

http {
    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;
    keepalive_timeout 65;
    types_hash_max_size 2048;
    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    # 日志设置
    access_log /var/log/nginx/access.log;
    error_log /var/log/nginx/error.log;

    # Gzip 设置
    gzip on;
    gzip_disable "msie6";

    # 虚拟主机配置
    include /etc/nginx/conf.d/*.conf;
    include /etc/nginx/sites-enabled/*;
}
```

### 示例站点配置文件

以下是一个站点配置文件示例，通常放在 `/etc/nginx/sites-available/` 目录中：

```conf
server {
    listen 80;
    server_name example.com;

    root /var/www/example.com;
    index index.html index.htm index.php;

    access_log /var/log/nginx/example.com.access.log;
    error_log /var/log/nginx/example.com.error.log;

    location / {
        try_files $uri $uri/ =404;
    }

    location ~ \.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/var/run/php/php7.4-fpm.sock;
    }

    location ~ /\.ht {
        deny all;
    }
}
```

## 启动和管理 Nginx 服务

启动 Nginx 服务：

```bash
sudo systemctl start nginx
```

设置开机自启动：

```bash
sudo systemctl enable nginx
```

检查 Nginx 服务状态：

```bash
sudo systemctl status nginx
```

重新加载 Nginx 配置：

```bash
sudo systemctl reload nginx
```

## 常见参数

- `worker_processes`：设置工作进程数。
- `worker_connections`：每个工作进程的最大连接数。
- `keepalive_timeout`：客户端保持连接的超时时间。
- `server_name`：定义服务器名称。
- `root`：定义站点根目录。
- `listen`：定义服务器监听的端口。
- `access_log`：定义访问日志文件路径。
- `error_log`：定义错误日志文件路径。

## 示例案例

### 示例 1：配置一个静态网站

配置一个简单的静态网站：

```conf
server {
    listen 80;
    server_name static.example.com;

    root /var/www/static.example.com;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

### 示例 2：配置一个反向代理

配置一个反向代理，将请求转发到后端服务器：

```conf
server {
    listen 80;
    server_name proxy.example.com;

    location / {
        proxy_pass http://127.0.0.1:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### 示例 3：配置负载均衡

配置基于轮询的负载均衡：

```conf
upstream backend {
    server backend1.example.com;
    server backend2.example.com;
}

server {
    listen 80;
    server_name loadbalancer.example.com;

    location / {
        proxy_pass http://backend;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

## 参考链接

- [Nginx 官方文档](https://nginx.org/en/docs/)
- [Nginx 配置示例](https://www.nginx.com/resources/wiki/start/topics/examples/)
