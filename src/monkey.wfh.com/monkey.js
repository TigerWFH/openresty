console.log('monkey.js');
function setCookie(name, value, day, domain = document.domain) {
  var date = new Date();
  date.setDate(date.getDate() + day);
  //domain=.cnblogs.com;写入cookie到主域 子域名都可用    path=/表示本站全部路径都可使用
  document.cookie =
    name + '=' + value + ';expires=' + date + ';domain=' + domain + ';path=/';
}
setCookie('monkey', 'monkey', 3);
setCookie('monkey2', 'monkey2', 3, '.wfh.com');
setCookie('monkey3', 'monkey3', 3, 'cat.dudu.com');
