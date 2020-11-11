import React from 'react';
import { useRouteData } from '@remix-run/react';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';

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

export default function Post() {
  const post = useRouteData();

  return (
    <>
      <header>
        <Link className="font-serif text-4xl font-medium text-storm-gray hover:underline" to="/">
          A-J Roos
        </Link>
      </header>
      <article className="mt-16 prose prose-xl">
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </article>
      <Footer />
    </>
  );
}
