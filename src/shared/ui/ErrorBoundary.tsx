'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface ErrorBoundaryProps {
  error: unknown;
}

export default function ErrorBoundary({ error }: ErrorBoundaryProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center mt-52">
      <h2 className="mb-8 text-xl-2">Something went wrong!</h2>
      <div className="mt-4">
        <button
          className="p-4 bg-red-500 rounded-md"
          onClick={() => router.replace('/')}
        >
          Go main paget
        </button>
      </div>
    </div>
  );
}
