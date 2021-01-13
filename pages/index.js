import Head from 'next/head';
import { useState, useCallback } from 'react';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Sonnet 18 | Repo Comparison</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>Sonnet 18</h1>
      <h2>Shall I compare thine repo to a summer's day?</h2>
      <p>Add one repo URL per line:</p>
    </div>
  );
}
