import * as mysql from 'mysql';

const config = {
  host: '127.0.0.1',
  port: 3306,
  database: 'catalyst',
  user: 'root',
  password: 'CKKgUy4k',
};
export const mysqlPool = mysql.createPool(config);
