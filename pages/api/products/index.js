import data from '../lib/data'

export default function handler(req, res) {
    if (req.method === 'GET') {
        res.send(data)
    } else {
        // Handle any other HTTP method
    }
}