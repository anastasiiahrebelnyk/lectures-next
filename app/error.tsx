'use client';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div>
      <h1>Error! {error.message}</h1>
      <button onClick={() => window.location.reload()}>Reload</button>
    </div>
  );
}
