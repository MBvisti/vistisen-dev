import Head from 'next/head';

const Meta = () => (
    <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta charSet='utf-8' />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:thin,normal,bold&family=Roboto:thin,normal,bold" />
        <title>vistisen</title>
        <script>
        </script>
            <script dangerouslySetInnerHTML={{
                    __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-T37R6RN');
            `
            }} />
    </Head>
);

export default Meta;