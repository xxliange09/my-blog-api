export default function handler(req: any, res: any) {
    console.log(req.query.id);
    res.status(200).json({ result: 'data' });
}