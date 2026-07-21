'use client';

// import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const timerId = setTimeout(() => {
      router.replace('/');
    }, 3000);
    return () => {
      clearTimeout(timerId);
    };
  }, [router]);

  return (
    <div>
      <h1>Oops. Page that you are looking for is not exist</h1>
      {/* <Link href="/">GO HOME</Link> */}
      <p>You will redirect to home page after 3 seconds</p>
    </div>
  );
}
