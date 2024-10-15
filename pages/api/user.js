let users = []; // In-memory store (for demonstration purposes)

export default function handler(req, res) {
    if (req.method === 'GET') {
        // Handle GET requests
        res.status(200).json(users);
    } else if (req.method === 'POST') {
        // Handle POST requests
        const user = req.body; // Assuming body-parser is set up (Next.js handles this by default)
        users.push(user);
        res.status(201).json(user);
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}