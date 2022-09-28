import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Centered Hello World</title>
                <meta
                    name="description"
                    content="Center “Hello World” in the middle of the browser window."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex justify-center items-center h-screen w-screen bg-slate-800">
                <h1 className="font-semibold text-4xl text-sky-500 ">
                    Hello World
                </h1>
            </main>
        </div>
    );
};

export default Home;
