import React, { useState, useEffect, useRef } from 'react'
import Script from 'next/script'
import axios from 'axios'
import styles from '../styles/checkout.module.scss'
import { useSelector } from 'react-redux'

export function Checkout() {
    const [clientToken, setClientToken] = useState(null)
    const [total, setTotal] = useState(0)
    const formRef = useRef()
    const cartItems = useSelector(state => state.cartReducer.items)

    useEffect(() => {
        (async function () {
            try {
                // Get a client token for authorization from your server
                const response = await axios.get('http://localhost:3000/api/braintree/getToken')
                const clientToken = response.data.clientToken
                setClientToken(clientToken)
            } catch (err) {
                console.error(err)
            }
        })()
    }, [])

    useEffect(() => {
        if (clientToken && cartItems.length > 0) {
            renderPayment()
        }
    })

    useEffect(() => {
        const totalAmount = getTotalAmount()
        const tax = totalAmount * 13 / 100
        totalAmount += tax

        setTotal(totalAmount)
    }, [cartItems])

    const hostedFieldsStyles = {
        input: {
            'font-size': '16px',
            'font-family': 'courier, monospace',
            'font-weight': 'lighter',
            color: '#ccc'
        },
        ':focus': {
            color: 'black'
        },
        '.valid': {
            color: '#8bdda8'
        }
    }

    const fields = {
        number: {
            selector: '#card-number',
            placeholder: '4111 1111 1111 1111'
        },
        cvv: {
            selector: '#cvv',
            placeholder: '123'
        },
        expirationDate: {
            selector: '#expiration-date',
            placeholder: 'MM/YYYY'
        },
        // postalCode: {
        //     selector: '#postal-code',
        //     placeholder: '11111'
        // }
    }

    const teardown = function (event, hostedFieldsInstance) {
        event.preventDefault()
        hostedFieldsInstance.tokenize(
            async function (err, payload) {
                if (err) {
                    console.error(err)
                    return
                }

                const totalAmount = getTotalAmount()
                console.log(totalAmount)
                // submit nonce to express server
                const response = await axios.post(
                    'http://localhost:3000/api/braintree/submit', 
                    { 
                        paymentMethodNonce: payload.nonce,
                        transactionInfo: {
                            amount: total,
                        }
                    }
                )
                // TODO: hanlde payment result here
            }
        )
    }

    const createHostedFields = (clientInstance, formRef) => {
        window.braintree.hostedFields.create(
            {
                client: clientInstance,
                styles: hostedFieldsStyles,
                fields: fields
            },
            function (err, hostedFieldsInstance) {
                if (err) {
                    console.error(hostedFieldsErr);
                    return;
                }

                formRef.current.addEventListener('submit', e => teardown(e, hostedFieldsInstance), false)
            }
        )
    }

    const getTotalAmount = () => {
        let totalAmount = 0
        if (cartItems.length > 0) {
            totalAmount = cartItems.reduce((total, item) => {
                return total + item.price
            }, 0)
        }

        return totalAmount
    }

    const renderPayment = () => {
        let authorization = clientToken
        if (typeof window !== 'undefined') {
            window.braintree.client.create(
                {
                    authorization: authorization
                },
                (err, clientInstance) => {
                    if (err) {
                        console.log(err)
                        return
                    }
                    createHostedFields(clientInstance, formRef)
                }
            )
        }
    }

    return (
        <div className={styles.checkout_container}>
            <Script src="https://js.braintreegateway.com/web/3.84.0/js/client.min.js" />
            <Script src="https://js.braintreegateway.com/web/3.84.0/js/hosted-fields.min.js" />
            <form submit="/" method="post" id="cardForm" className={styles.cardForm} ref={formRef}>
                <label className={styles.hosted_fields__label} htmlFor="card-number">
                    Card Number
                </label>
                <div id="card-number" className={styles.hosted_field}></div>

                <label className={styles.hosted_fields__label} htmlFor="expiration-date">
                    Expiration Date
                </label>
                <div id="expiration-date" className={styles.hosted_field}></div>

                <label className={styles.hosted_fields__label} htmlFor="cvv">
                    CVV
                </label>
                <div id="cvv" className={styles.hosted_field}></div>

                {/* <label className={styles.hosted_fields__label} htmlFor="postal-code">
                    Postal Code
                </label> */}
                {/* <div id="postal-code" className={styles.hosted_field}></div> */}

                <div className="button-container">
                    <input className={styles.submit} type="submit" value="Purchase" id="submit" />
                </div>
            </form>
        </div>
    )
}
  
export default Checkout