import Document, { Html, Main, NextScript } from 'next/document'
import { Meta } from '../components/components/meta'

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang='en'>
                <Meta />
                <body>
                    <Main />
                    <NextScript/>
                </body>
            </Html>
        )
    }
}
