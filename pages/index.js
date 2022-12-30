import Head from 'next/head';
import { Banner, Header, ProductFeed } from '../components';

import { Inter } from '@next/font/google';
const inter = Inter({ subsets: ['latin'] });

export default function Home({ products }) {
  return (
    <div className='bg-gray-100'>
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      <Header />

      <main className='max-w-screen-2xl mx-auto'>
        {/* Banner */}
        <Banner />

        {/* ProductFeed */}
        <ProductFeed products={products} />
      </main>
    </div>
  )
};

export const getServerSideProps = async (context) => {
  const products = await fetch('https://fakestoreapi.com/products').then(res => res.json());

  return {
    props: {
      products,
    }
  }
};


// GET >>> https://fakestoreapi.com/products