function setCookie(name, value, day, domain = document.domain) {
  var date = new Date();
  date.setDate(date.getDate() + day);
  //domain=.cnblogs.com;写入cookie到主域 子域名都可用    path=/表示本站全部路径都可使用
  document.cookie =
    name + '=' + value + ';expires=' + date + ';domain=' + domain + ';path=/';
}
setCookie('cat', 'cat', 3);
setCookie('cat2', 'cat2', 3, 'cat.dudu.com');
