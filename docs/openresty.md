# openresty（nginx）

> homebrew 安装，所在目录

## openresty（nginx）的配置文件

> 配置目录：/opt/homebrew/etc/openresty
>
> 以下是配置文件
>
> - `fastcgi.conf`
> - `fastcgi.conf.default`
> - `fastcgi_params`
> - `fastcgi_params.default`
> - `koi-utf`
> - `koi-win`
> - `mime.types`
> - `mime.types.default`
> - `nginx.conf`
> - `nginx.conf.default`
> - `scgi_params`
> - `scgi_params.default`
> - `uwsgi_params`
> - `uwsgi_params.default`
> - `win-utf`

### nginx.conf 配置项说明

> Nginx 的配置文件主要分成四部分：
>
> - `main：`全局设置
> - `server：`主机设置
> - `upstream：`上游服务器设置，主要为反向代理、负载均衡
> - `location：`URL 匹配特定位置后的设置

## 一些命令

### 检查 nginx 配置是否正确

> openresty -p $PWD/ -t -c conf/nginx.conf

> openresty -p $PWD/ -c conf/nginx.conf
