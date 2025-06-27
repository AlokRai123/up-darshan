'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const languages = [
  { code: 'en', label: 'English', path: '/' },
  { code: 'hi', label: 'Hindi', path: '/homeHindi' },
  { code: 'es', label: 'Spanish', path: '/homeSpanish' }
];

export default function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="relative inline-block text-left w-14 h-8 bg-gray-600 rounded-full items-center justify-center text-white text-xs font-medium">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 focus:outline-none"
      >
        {languages.find(lang => lang.code === selectedLanguage)?.label}
        <svg
          className="w-4 h-4 ml-2 -mr-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
        </svg>
      </button>

      {open && (
        <div className="absolute z-10 mt-2 w-20 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {languages.map(lang => (
              <button
                key={lang.code}
                onClick={() => {
                  setSelectedLanguage(lang.code);
                  setOpen(false);
                  router.push(lang.path);
                }}
                className="w-full px-2 py-1 text-sm text-gray-700 hover:bg-gray-100"
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
