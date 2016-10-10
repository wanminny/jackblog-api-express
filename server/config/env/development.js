'use strict';

// 开发环境配置
// ==================================
module.exports = {
  //开发环境mongodb配置
  mongo: {
    uri: 'mongodb://localhost/jackblog-dev'
  },
  //开发环境redis配置
  redis: {
    db: 0
  },
  seedDB: true,
  session:{
    cookie:  {maxAge: 60000*5}
  }
};
//////本地默认是开发模式； 需要启动MONGODB 服务；已经redis服务；
