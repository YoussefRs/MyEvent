import "@/styles/global.css";
import "@/styles/Home.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/favicon_io/favicon.ico" />
                <title>THRUST</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
}
