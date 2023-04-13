import React, { FC, ReactNode } from 'react';
import Head from 'next/head';
import { Navbar } from '../ui';

interface Props {
  children:ReactNode;
  title?:string;
}

export const Layout: FC<Props> = ({children, title}) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta  name='author' content='Daniel Calderón'/>
        <meta  name='description' content={`Informacion sobre el pokemon`}/>
        <meta  name='keywords' content={`pokemon`}/>
      </Head>
      <Navbar/>
      <main style={{
        padding:' 0px 20px'
      }}>
        {children}
      </main>
    </>
  )
};
