import type { NextApiRequest, NextApiResponse } from 'next'
import mysql from 'mysql2/promise'


export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const apiRouter = (req.query.slug as []).join('/');
    if (req.method === 'POST') {
        switch (apiRouter) {
            case 'login':
                userLogin(req, res);
                break;
            default:
                res.status(404).json({ result: '路由未找到' });
                break;

        }
    }
}

const userLogin = async (req: NextApiRequest, res: NextApiResponse) => {
    const { user, pass } = req.body;
    const dbconnection = await mysql.createConnection({
        host: 'sh-cdb-gj0ny48a.sql.tencentcdb.com',
        port: 63503,
        user: 'root',
        password: 'xjxxs9791',
        database: 'my-blog'
    })
    try {
        const [data] = await dbconnection.execute(`SELECT * FROM \`member_user\` WHERE user_name = '${user}' AND passworld = '${pass}'`, []);
        dbconnection.end();
        if ((data as []).length === 0) {
            res.status(200).json({ data: '账号密码错误，请重新输入', code: 1 });
        } else {
            res.status(200).json({ data: (data as [any])[0], code: 0 })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: (error as any).message });
    }
}