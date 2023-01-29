# openresty

## hosts 域名映射

> - `monkey.wfh.com`127.0.0.1
> - `cat.wfh.com`127.0.0.1
> - `dudu.wfh.com`127.0.0.1
> - `fish.wfh.com`127.0.0.1

## 静态资源映射到 src 目录

## 关于 cookie 的理解

```js
/*
cookie格式：
        name=value：cookie名称和值
        expires=Date：cookie有效期
        domain=xxx：cookie可以被哪些域读取
        path=/：cookie可以被哪些路径下的页面读取
        secure：安全标记，表示cookie只能通过https传送
        httpOnly：安全标记，标识cookie不能被document.cookie访问，仅用于服务器。意味着客户端无法访问

    重要理解：
        1、同一域，前端JS通过document.cookie只能在同一域名或子域名写cookie，不能写入其它域名，即a.com写cookie中domain不能是b.com，例外：如果第三方不指定domain，默认取当前文档的domain写入
        2、第三方cookie，是第三方资源写入的
        3、当前文档引入了第三方的资源，就可以看到第三方的cookie。第三方的资源请求需要带上第三方的cookie，从这个角度上是讲的通的

    第一方cookie：由访问的站点a.com创建
    第三方cookie：由访问的站点a.com中应用的第三方b.com的资源创建的
    HTTP RESPONSE中的Set-Cookie，服务端告诉客户端种植cookie

    Domain和Path属性，定义了cookie的作用域，即允许 Cookie 应该发送给哪些 URL
    Domain: 指定了哪些主机可以接受 Cookie。默认是同一host；如果指定，一般包含子域名；不能指定无关域名
    Path: 指定能携带该cookie的具体url。 "/" 是目录分隔符，会匹配子目录

    Cookie的时效性：一般情况下浏览器关闭，cookie失效；可通过设置特定的Expires或者Max-Age为cookie设置相对较长的有效时间

    Sec-Fetch-Site	描述
    cross-site	请求的发起源与资源源完全不相同
    same-origin	请求的发起源与资源源完全相同
    same-site	请求的发起源与资源源部分相同：同一顶级域名下的二级域名
    none	    无限制

    最新IEEF cookie SameSite策略：
        1、督促浏览器版本迁移，使cookie的SameSite默认是Lax（没有设置浏览器的SameSite属性，默认就是Lax）
        2、如果需要跨域发送cookie，请使用None，无SameSite限制；需要搭配Secure指令使用（SameSite=None，但是不带secure，那么cookie将会被丢弃）
    Lax：对同源、顶级域的请求才可以携带cookie，等价于same-site
    Strict：对同源请求才可以携带cookie，等价于same-origin
    None：对于cookie的使用无限制
*/
```
