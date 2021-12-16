import { wrapper } from '../redux/store'
import MyThemeProvider from '../components/MyThemeProvider'
import '../styles/main.css'
import Layout from '../components/layout/Layout'

function MyApp({ Component, pageProps }) {
    return (
        <MyThemeProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </MyThemeProvider>
    )
}

export default wrapper.withRedux(MyApp)
