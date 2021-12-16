import gateway from '../lib/gateway'

export default function handler(req, res) {
    if (req.method === 'GET') {
        try {
            gateway.clientToken.generate({}, (err, response) => {
                if (err) res.status(500).send(err)
                else res.send(response)
            })
        } catch (error) {
            res.status(500).send(err)
        }
    } else {
        // Handle any other HTTP method
    }
}
