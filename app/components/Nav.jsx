import React from 'react';

export default function Nav() {
  return (
    <nav className="flex items-center space-x-6">
      {/* … other nav items … */}
      <a
        href="https://your.vagaro.url/?source=ely"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-800 hover:text-accent transition"
        data-cy="nav-booking-link"
      >
        Book on Vagaro
      </a>
    </nav>
  );
}
