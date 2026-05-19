"use client";
import React from 'react';

export default function GlobalError({ error, reset }) {
  // Log error for debugging
  // eslint-disable-next-line no-console
  console.error('Global app error:', error);

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-lg text-center">
        <h1 className="text-2xl font-bold mb-2">Something went wrong</h1>
        <p className="text-gray-600 mb-4">An unexpected error occurred. Try refreshing the page.</p>
        <button
          onClick={() => reset()}
          className="px-4 py-2 bg-primary text-white rounded"
        >
          Retry
        </button>
      </div>
    </div>
  );
}
