import log4js from 'log4js'
import format from 'date-format'

export default function(opts){
  let DEFAULT = "%s %s -- %s %s HTTP/%s, %s %s";
  let logger;
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

  return function* (next){
    var req = this.request, header = req.header, nodeReq = this.req;
    var date = format.asString('yyyy-MM-dd hh:mm:ss.SSS+O')
    var len = req.length||null
    logger.info('%s %s -- %s %s HTTP/%s, %s %s',date,req.ip,req.method, req.url, nodeReq.httpVersion,len,header['user-agent']);
    yield next;
  }
}