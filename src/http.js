function createXMLHttpRequest() {
  let xhr = null;
  try {
    xhr = new XMLHttpRequest();
  } catch (error) {
    //兼容IE6+
    xhr = new ActiveXObject('Microsoft.XMLHTTP');
  }
  return xhr;
}
function ajax(options) {
  const xhr = createXMLHttpRequest();
  const defaultOptions = {
    type: 'get',
    url: '',
    data: '',
    contentType: 'application/x-www-form-urlencoded',
    dataType: 'json',
    async: true
  };
  options = Object.assign(defaultOptions, options);
  if (xhr) {
    const type = options['type'];
    xhr.open(type, options['url'], options['async']);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200 && xhr.status < 300) {
          const success = options['success'];
          typeof success === 'function' && success(xhr.responseText);
        } else {
          const fail = options['fail'];
          typeof fail === 'function' && fail(xhr.status);
        }
      }
    };
    if (type === 'post') {
      //发送合适的请求头信息
      xhr.setRequestHeader('Content-type', options.contentType);
    }
    type === 'post' ? xhr.send(options['data']) : xhr.send();
  }
}
