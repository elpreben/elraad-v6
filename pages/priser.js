import React from 'react';
import Link from 'next/link';

export default function Priser() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Priser</h2>
      <ul className="list-inside list-disc text-gray-600 text-lg mb-6">
        <li>Telefonsamtale vedr. veiledning, evt. prisestimat og tilbud – <strong>kr 50,- inkl. MVA.</strong></li>
      </ul>
      <Link href="/kontakt">
        <a className="text-xl font-bold text-red-500">Vil du at vi skal kontakte deg?</a>
      </Link>
    </div>
  );
}
