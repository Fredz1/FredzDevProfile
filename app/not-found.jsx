import React from 'react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div>
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <p>Yet...</p>
        <Link href="/">
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;