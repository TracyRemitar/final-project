// routes/items.js
import prisma from '../../path-to-prisma-instance';

export default async function handler(req, res) {
    const { id } = req.query;
    if (req.method === 'GET') {
        try {
            const items = await prisma.item.findMany(); // Fetch all items from Prisma
            res.status(200).json(items);
        } catch (error) {
            res.status(500).json({ error: 'Could not fetch items' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }


}
