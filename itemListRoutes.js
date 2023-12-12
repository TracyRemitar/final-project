import prisma from '../../path-to-prisma-instance';


// Fetch all items from Prisma

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const items = await prisma.item.findMany(); 
      res.status(200).json(items);
    } catch (error) {
      res.status(500).json({ error: 'Could not fetch items' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}

// Fetch item by ID from Prisma

export default async function handler(req, res) {
  const { id } = req.query;
  if (req.method === 'GET') {
    try {
      const item = await prisma.item.findUnique({ where: { id: Number(id) } }); 
      if (!item) {
        return res.status(404).json({ error: 'Item not found' });
      }
      res.status(200).json(item);
    } catch (error) {
      res.status(500).json({ error: 'Could not fetch item' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}

// Create new item
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, description, quantity } = req.body;
    try {
      const newItem = await prisma.item.create({
        data: {
          name,
          description,
          quantity,
        },
      });
      res.status(201).json(newItem);
    } catch (error) {
      res.status(500).json({ error: 'Could not create item' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}

// Update item
export default async function handler(req, res) {
  const { id } = req.query;
  if (req.method === 'PUT') {
    const { name, description, quantity } = req.body;
    try {
      const updatedItem = await prisma.item.update({
        where: { id: Number(id) },
        data: {
          name,
          description,
          quantity,
        },
      });
      res.status(200).json(updatedItem);
    } catch (error) {
      res.status(500).json({ error: 'Could not update item' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}

// Delete item
export default async function handler(req, res) {
  const { id } = req.query;
  if (req.method === 'DELETE') {
    try {
      await prisma.item.delete({ where: { id: Number(id) } });
      res.status(200).json({ message: 'Item deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Could not delete item' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}