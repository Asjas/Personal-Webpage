import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="flex justify-between text-storm-gray">
      <div>
        <h1 className="font-serif text-4xl font-medium">
          <Link className="hover:underline" to="/">
            A-J Roos
          </Link>
        </h1>
        <p className="mt-2 text-lg font-medium">Hey 👋, this is my personal blog.</p>
      </div>
      <img className="hidden w-24 h-24 rounded-full sm:inline-block" src="/profile-picture.jpg" alt="" />
    </header>
  );
}
