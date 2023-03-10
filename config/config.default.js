/* eslint valid-jsdoc: "off" */

"use strict"

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {})

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1674980411206_6097"

  // add your middleware config here
  config.middleware = []

  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    domainWhiteList: ["*"], // 配置白名单
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  }

  exports.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: "39.98.41.188",
      // 端口号
      port: "3306",
      // 用户名
      user: "root",
      // 密码
      password: "12345678", // 初始化密码，没设置的可以不写
      // 数据库名
      database: "tspider", // 我们新建的数据库名称
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  }

  return {
    ...config,
    ...userConfig,
  }
}
