import { Head } from 'next/document';

export const Meta = () => (
    <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <meta
            name="Description"
            content="Developer portfolio for Morten Vistisen"
        ></meta>
        <link rel="icon" href="https://example.com/favicon.png" />
        <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Montserrat:thin,normal,bold&family=Roboto:thin,normal,bold"
        />
        <script
            async
            defer
            data-website-id="989a3cf5-6f3c-4a09-b121-e9beae05c4c6"
            src="https://mbv-websites-analytics.herokuapp.com/umami.js"
        ></script>
        <title>Vistisen</title>
    </Head>
);
