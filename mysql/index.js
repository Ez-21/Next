import mysql from 'mysql2/promise'
// 连接mysql
const connect = mysql.createPool({
    // 主机地址
    host:process.env.MYSQL_HOST,
    // 用户
    user:process.env.MYSQL_USER,
    // 密码
    password:process.env.MYSQL_PASSWORD,
    // 数据库
    database:process.env.MYSQL_DATABASE,
    // 端口
    port:process.env.MYSQL_PORT
})

export default connect