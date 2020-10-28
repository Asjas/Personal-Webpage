import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="text-storm-gray flex justify-between">
      <div>
        <h1 className="text-4xl font-medium">
          <Link className="hover:underline" to="/">
            A-J Roos
          </Link>
        </h1>
        <p className="mt-2 text-lg">Hey 👋, this is my personal blog.</p>
      </div>
      <img className="w-24 h-24 rounded-full hidden sm:inline-block" src="/profile-picture.jpg" alt="" />
    </header>
  );
}
