import Document, { Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <title>Food-Stuff</title>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}

export default MyDocument