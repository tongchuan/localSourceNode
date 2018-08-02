import os from 'os'

export default {
  EOL(){
    // 一个字符串常量,定义操作系统相关的行末标志:
    //   \n 在 POSIX 系统上
    //   \r\n 在 Windows系统上
    return os.EOL==='\n' ? 'POSIX' : 'Windows'
  },
  arch(){ 
    //操作系统CPU架构. 
    return os.arch()
  },
  constants(){
    // 返回一个包含错误码,处理信号等通用的操作系统特定常量的对象. 现在, 这些特定的常量的定义被描述在OS Constants。
    return os.constants
  },
  cpus(){
    // 方法返回一个对象数组, 包含每个逻辑 CPU 内核的信息.
    return os.cpus()
  },
  endianness(){
    // 方法返回一个字符串,表明Node.js二进制编译环境的字节顺序.
      // 可能的值:
      // 'BE' 大端模式
      // 'LE' 小端模式
    return os.endianness()
  },
  freemem(){
    /**
     * 方法以整数的形式回空闲系统内存 的字节数.
     */
    return os.freemem()
  },
  homedir(){
    // 方法以字符串的形式返回当前用户的home目录.
    return os.homedir()
  },
  hostname(){
    // 方法以字符串的形式返回操作系统的主机名
    return os.hostname()
  },
  loadavg(){
    /**
     * 方法返回一个数组,包含1, 5, 15分钟平均负载.
     * 平均负载是系统活动的测量,由操作系统计算得出,表达为一个分数. 一般来说,平均负载应该理想地比系统的逻辑CPU的数目要少. 平均负载是UNIX相关的概念,在Windows平台上没有对应的概念. 在Windows上,其返回值总是[0, 0, 0]
     */
    return os.loadavg()
  },
  networkInterfaces(){
    /**
     * 方法返回一个对象,包含只有被赋予网络地址的网络接口
     * 在返回对象的每个关键词都指明了一个网络接口.

        返回的值是一个对象数组, 每个都描述了赋予的网络地址.

        被赋予网络地址的对象包含的属性:
        address <string> 被赋予的 IPv4 或 IPv6 地址
        netmask <string> IPv4 或 IPv6 子网掩码
        family <string> IPv4 或 IPv6
        mac <string> 网络接口的MAC地址
        internal <boolean> 如果 网络接口是loopback或相似的远程不能用的接口时, 值为true,否则为false
        scopeid <number> IPv6 数字领域识别码 (只有当 family 是IPv6时可用)
        cidr <string> 以 CIDR 表示法分配的带有路由前缀的 IPv4 或 IPv6 地址。如果 netmask 参数不可用，则该属性是 null。
     */
    return os.networkInterfaces()
  },
  platform(){
    /**
     * 方法返回一个字符串, 指定Node.js编译时的操作系统平台
     * aix'
      'darwin'
      'freebsd'
      'linux'
      'openbsd'
      'sunos'
      'win32'
     */
    return os.platform()
  },
  release(){
    /**
     * 方法返回一个字符串, 指定操作系统的发行版.
     */
    return os.release()
  },
  tmpdir(){
    /**
     * 方法返回一个字符串, 表明操作系统的 默认临时文件目录.
     */
    return os.tmpdir()
  },
  totalmem(){
    /**
     * 方法以整数的形式返回所有系统内存的字节数.
     */
    return os.totalmem()
  },
  type(){
    /**
     * 方法返回一个字符串,表明操作系统的名字, 由 uname(3) 返回.举个例子, 'Linux' 在 Linux系统上, 'Darwin' 在 macOS 系统上,'Windows_NT' 在 Windows系统上
     */
    return os.type()
  },
  uptime(){
    /**
     * 方法在几秒内返回操作系统的上线时间.
     * 注意：在Windows平台上，这个方法返回的秒值包含分数，请用Math.floor()获取整数值
     */
    return os.uptime()
  },
  userInfo(){
    return os.userInfo()
  }
}