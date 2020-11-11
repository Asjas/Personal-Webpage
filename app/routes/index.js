import React from 'react';
import { useRouteData } from '@remix-run/react';

import Header from '../components/header';
import Footer from '../components/footer';
import BlogPostEntry from '../components/BlogPostEntry';

export function headers({ loaderHeaders }) {
  return {
    'cache-control': loaderHeaders.get('cache-control'),
  };
}

export function meta({ data }) {
  return {
    title: 'Home | A-J Roos',
    description: 'Welcome to remix!',
  };
}

export default function Index() {
  const data = useRouteData();

  return (
    <>
      <Header />
      <main className="mt-16">
        {data.map(post => (
          <BlogPostEntry key={post.id} post={post}></BlogPostEntry>
        ))}
      </main>
      <Footer />
    </>
  );
}
