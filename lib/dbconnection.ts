import mysql from 'mysql2'

export default class Dbconnection {
    public dbconnection: any;
    constructor() {
        this.dbconnection = mysql.createConnection({
            host: 'sh-cdb-gj0ny48a.sql.tencentcdb.com',
            port: 63503,
            user: 'root',
            password: 'xjxxs9791',
            database: 'my-blog'
        });
    }

    public query() {
        return this.dbconnection;
    }
}