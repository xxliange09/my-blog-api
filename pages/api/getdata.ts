import mysql from 'mysql2/promise'

export default async function handler(req: any, res: any) {
    const dbconnection = await mysql.createConnection({
        host: 'sh-cdb-gj0ny48a.sql.tencentcdb.com',
        port: 63503,
        user: 'root',
        password: 'xjxxs9791',
        database: 'my-blog'
    })
    try {
        const [data, fields] = await dbconnection.execute('SELECT * FROM `user_data`', []);
        dbconnection.end();
        res.status(200).json({ result: data });
    } catch (error) {
        res.status(500).json({ error: (error as any).message });
    }

}