import Document, { Html, Main, NextScript } from 'next/document'
import { Meta } from '../screens/components/meta'

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
