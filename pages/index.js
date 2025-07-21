import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Velkommen til Elråd!</h1>
      <p className="text-lg text-gray-600 mb-6">Din pålitelige kilde for elektriske råd og veiledning.</p>
      <Link href="/priser">
        <a className="inline-block bg-red-500 text-white py-2 px-6 rounded hover:bg-red-400">Se våre priser</a>
      </Link>
    </div>
  );
}
