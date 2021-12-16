import gateway from '../lib/gateway'

export default function handler(req, res) {
    if (req.method === 'POST') {
        try {
            // using the braintree nonce
            const clientNonce = req.body.paymentMethodNonce
            const amount = req.body.transactionInfo.amount
            console.log(clientNonce)

            // create transaction for $15
            gateway.transaction.sale(
                {
                    amount: amount,
                    merchantAccountId: 'canadawheels_testing_merchant',
                    // currencyIsoCode: 'USD',
                    paymentMethodNonce: clientNonce,
                    options: {
                        // This option requests the funds once it has been authorized successfully
                        submitForSettlement: true
                    }
                },
                (error, result) => {
                    if (error) res.status(500).send(error)
                    res.send(result)
                }
            )
        } catch (error) {
            console.error(err)
            res.send(err)
        }
    } else {
        // Handle any other HTTP method
    }
}
