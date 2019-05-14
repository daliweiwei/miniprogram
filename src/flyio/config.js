/**
 * flyio 配置
 * Created by liweiliang 406320591@QQ.com on 2019/5/14 0014 15:08.
 */
let Fly = require("flyio/dist/npm/wx");
let fly = new Fly;

//定义公共headers
// fly.config.headers={xx:5,bb:6,dd:7};
// fly.config.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// fly.config.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
//设置超时
fly.config.timeout=20000;
//设置请求基地址
// fly.config.baseURL="https://wendux.github.io/";
fly.config.baseURL = 'http://101.201.41.41:8888'; //阿里云41环境
//设置公共的Get参数
// fly.config.params={"token":"testtoken"};


//添加请求拦截器
fly.interceptors.request.use((request) => {
  //给所有请求添加自定义header
  // request.headers["X-Tag"]="flyio";
  // request.headers["X-Tag"] = 'Content-Type': 'application/json', // 设置很关键
  request.body = { data: request.body };

  //打印出请求体
  console.log(request.body);
  //终止请求
  //var err=new Error("xxx")
  //err.request=request
  //return Promise.reject(new Error(""))

  //可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
  return request;
})


//添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use((response) => {
    //只将请求结果的data字段返回
    return response.data;
  },
  (err) => {
    console.log(JSON.stringify(err));
    //发生网络错误后会走到这里
    return Promise.resolve(err)
    // return Promise.resolve("ssss")
  }
);

export default fly
