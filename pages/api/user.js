export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const response = await fetch('https://script.google.com/macros/s/AKfycbzzlL52v_BgUWkxo_paVwl0HDBDdOgwVZGxiC31Qdpb7q1tXvOZaI8X8PVmbjESj_Xh/exec'); // Fetch data from the external API
            if (!response.ok) {
                throw new Error('Failed to fetch data from Coinbase');
            }
            const data = await response.json(); // Parse the JSON data
            res.status(200).json(data); // Return the data to the front-end
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' }); // Handle errors
        }
    } else {
        res.setHeader('Allow', ['GET']); // Specify allowed methods
        res.status(405).end(`Method ${req.method} Not Allowed`); // Handle unsupported methods
    }
}