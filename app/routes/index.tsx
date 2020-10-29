import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

export function meta() {
  return {
    title: 'Home | A-J Roos',
    description: 'Welcome to remix!',
  };
}

export default function Index() {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}
