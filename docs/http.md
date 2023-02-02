# http 测试问题

## 浏览器缓存机制

```js
/*

 */
```

### http cache(browser cache)

- `问题：`没有明确的缓存策略，客户端会不会根据策略做一个在接受程度内的缓存？
  > 当 response 没有明确的缓存控制时，浏览器可以根据自有算法，计算一个 fresh time 缓存资源
  > [参考资料](https://stackoverflow.com/questions/14496694/whats-default-value-of-cache-control)

#### 缓存策略

> 如果响应首部中没有 Cache-Control 和 Expires，缓存（客户端）可以计算出一个试探性最大使用期。LM-Factor 是常用的试探性算法。
>
> `缓存`通常为没有任何新鲜周期线索的`文档`分配一个默认的`新鲜周期`（通常是 1 小时或 1 天）。有时，比较保守的缓存会将这种试探性新鲜生存周期设置为 0，强制`缓存`每次将其提供给客户端之前，都去验证一下这戏数据仍然是新鲜的。 ------《HTML 权威指南》，Page193
>
> HTML 文档设置缓存: <META HTTP-EQUIV>标签

```html
<meta HTTP-EQUIVE="Cache-Control" content="no-cache" />
```

- `Expires：`HTTP1.0 的首部，指定资源的过期时间（绝对时间），是一个实际日期
- `Cache-Control：`HTTP1.1 的首部，可以指定资源的过期时间（相对时间）
  > - `Cache-Control: no-store`，响应首部：禁止`缓存`对响应进行复制；
  > - `Cache-Control: no-cache`，响应首部：可以存储响应的副本，与原始服务器校验新鲜度后，才能发给客户端；
  > - `Cache-Control: max-age=xxx`，响应首部：响应的缓存（新鲜）时间，单位是秒；
  > - `Cache-Control: s-maxage=xxx`，响应首部：仅用于共享缓存，作用同 max-age；
  > - `Cache-Control: must-revalidate`，响应首部：资源处于新鲜状态，可以直接提供给客户端；若是处于非新鲜状态，必须和服务器校验，提供最新的资源
  > - `Cache-Control: max-stable=<s>`，响应首部：
  > - `Cache-Control: min-fresh=<s>`，响应首部：
  > - `Cache-Control: only-if-cached`，响应首部：
- `Pragma：no-cache`HTTP1.1 提供该头部，为了兼容 HTTP1.0
- `If-None-Match & ETag`
- `If-Modified-Since & Last-Modified`
- `If-Unmodified-Since & `
- `If-Range & Range：`
- `If-Match：`
- `Date：`提供日期和时间标志，说明报文是什么时间创建的
- `Via：`显示了报文经过的中间节点(代理、网管)
- `Host：`给出了接收请求的服务器的主机名和端口
- `Referer：`提供了包含当前当前请求 URI 的文档 URL
- `User-Agent：`将发起请求的应用程序名称告知服务器
- `Cookie`
- `Set-Cookie`
- `Age`

#### 缓存位置

- `memory cache(blink cache, from memory cache)`
  > Blink uses Http Cache as backend in two modes of creation - in memory and simple (filesystem). Which one is used depends on limit set globally for caches how much memory they can take. Also the current renderer cache gets the most share. What is cached are fonts, images and scripts. If global memory usage reaches some specified threshold then filesystem backend is used.
- `disk cache(browser cache, from disk cache)`

### service worker cache

> services workers

### push cache

## 参考资料

[chrome memory cache vs disk cache](https://stackoverflow.com/questions/44596937/chrome-memory-cache-vs-disk-cache#:~:text=%22Memory%20Cache%22%20stores%20and%20loads,loaded%20to%20and%20from%20disk.)
[关于 blink cache](https://stackoverflow.com/questions/52950068/what-does-blink-in-memory-cache-store#:~:text=For%20Chrome%2C%20there%20is%20another,cache)%20in%20the%20network%20tab.)
