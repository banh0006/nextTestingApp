import data from '../lib/data'

export default function handler(req, res) {
    if (req.method === 'GET') {
        const reqId = req.query.id
        const productFound = data.find(product => product.id == reqId)
        res.send(productFound)
    } else {
        // Handle any other HTTP method
    }
}
