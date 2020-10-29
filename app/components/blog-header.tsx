import React from 'react';
import { Link } from 'react-router-dom';

export default function BlogHeader() {
  return (
    <header className="flex justify-between text-storm-gray">
      <div>
        <h1 className="text-4xl font-medium">
          <Link className="hover:underline" to="/">
            A-J Roos
          </Link>
        </h1>
      </div>
    </header>
  );
}
