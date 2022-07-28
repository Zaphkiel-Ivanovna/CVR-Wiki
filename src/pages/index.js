import React from 'react';
import Layout from '@theme/Layout';
import Homepage from '@site/src/components/Homepage';

export default function Home() {
  return (
    <Layout noFooter
      title={`Accueil`}
      description="A minimal React Hooks library that saves you time and lines of code.">

      <main className='home'>
        <Homepage />
      </main>
    </Layout>
  );
}
