// import { log } from 'util';

const log4js = require('log4js')
const format = require('date-format')
// var util = require('util');
// var date = require('./lib/date_format.js');

// date, addr, method, url, HTTP/version, content-length, user-agent
var DEFAULT = "%s %s -- %s %s HTTP/%s, %s %s";
/*
* middleware
*/
module.exports = function(opts){
    var logger;
    if(!opts){
        logger = log4js.getLogger();  // 默认使用 console logger
    }else{
        log4js.configure({
            appenders: {
                cheese: {
                    type: 'file', 
                    filename: opts.file, 
                }
            },
            categories: {
                default: { 
                    appenders: ['cheese'], 
                    level: 'info' 
                }      
            }
        });
        logger = log4js.getLogger('normal');
    }
    // logger.setLevel('info')// = 'info';
    // logger.trace 
    // logger.debug
    // logger.info
    // logger.warn
    // logger.error
    // logger.fatal
    return function* (next){
        var req = this.request, header = req.header, nodeReq = this.req;
        // var str = util.format(DEFAULT, date.asString(new Date), req.ip, req.method, req.url, nodeReq.httpVersion, req.length || null, header['user-agent']);
        // var str = util.format(req.ip, req.method, req.url)
        // var date = new Date()
        var date = format.asString('yyyy-MM-dd hh:mm:ss.SSS+O')
        // var str = [g,req.ip, req.method, req.url]
        var len = req.length||null
        // logger.error("%s %s -- %s %s HTTP/%s, %s %s",)
        logger.info('%s %s -- %s %s HTTP/%s, %s %s',date,req.ip,req.method, req.url, nodeReq.httpVersion,len,header['user-agent']);
        yield next;
    }
}


// where to get status, referer
// add more info
// 解析配置选项, 创建file logger, 支持log 内容配置
// 从其他middleware中可以获取到 logger  
// 日志格式可参看 log4js的 connetct-logger