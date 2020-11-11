import React from 'react';
import { Link } from 'react-router-dom';
import formatDate, { formatShortDate } from '../../utils/dateFormatter';

export default function BlogPostEntry({ post }) {
  const isPostUpdated = post.published_at !== post.updated_at;

  console.log(post);

  return (
    <div className="grid grid-cols-2 px-4 pt-2 pb-3 my-8 rounded-sm shadow-outline text-storm-gray">
      <h2 className="col-span-2 mb-1 font-serif text-2xl">{post.title}</h2>
      <p className="col-span-2 my-3 font-sans">{post.custom_excerpt}</p>
      <hr className="col-span-2 mb-3 border-blue-600" />
      <div className="flex flex-col justify-center">
        <time className="font-sans text-sm" dateTime={formatShortDate(post.published_at)}>
          Published at {formatDate(post.published_at)}.
        </time>
        {isPostUpdated && (
          <time className="font-sans text-sm" dateTime={formatShortDate(post.updated_at)}>
            Updated at {formatDate(post.updated_at)}.
          </time>
        )}
      </div>
      <Link
        className="inline-grid items-center justify-center font-sans text-lg underline hover:no-underline hover:text-white"
        to={`/${post.slug}`}
      >
        Read Post &#8594;
      </Link>
    </div>
  );
}
