'use client';

import Link from 'next/link';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ApiError, login } from '../../../lib/api';

import { useAuthStore } from '../../../store/authStore';

const SignIn = () => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const setUser = useAuthStore(state => state.setUser);

  const handleSubmit = async (formData: FormData) => {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    setError('');
    setIsLoading(true);

    try {
      const user = await login({ email, password });

      setUser(user);
      router.push('/profile');
    } catch (error) {
      setError(
        (error as ApiError).response?.data?.error ??
          (error as ApiError).message ??
          'Oops... Something went wrong'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-md px-4 py-10 sm:px-6 sm:py-14">
      <div className="animate-fade-up">
        <p className="font-display text-sm font-medium tracking-wide text-accent">
          NoteHub
        </p>
        <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Sign in
        </h1>
        <p className="mt-3 text-base leading-relaxed text-muted">
          Welcome back — pick up where you left off.
        </p>
      </div>

      <form
        action={handleSubmit}
        className="animate-fade-up delay-1 mt-10 space-y-8"
      >
        <div>
          <label
            htmlFor="sign-in-email"
            className="block text-xs font-semibold uppercase tracking-[0.12em] text-ink-faint"
          >
            Email
          </label>
          <input
            id="sign-in-email"
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className="mt-2 w-full border-b border-border bg-transparent py-2 text-base text-foreground placeholder:text-ink-faint focus:border-accent focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="sign-in-password"
            className="block text-xs font-semibold uppercase tracking-[0.12em] text-ink-faint"
          >
            Password
          </label>
          <input
            id="sign-in-password"
            type="password"
            name="password"
            required
            autoComplete="current-password"
            placeholder="Your password"
            className="mt-2 w-full border-b border-border bg-transparent py-2 text-base text-foreground placeholder:text-ink-faint focus:border-accent focus:outline-none"
          />
        </div>

        {error && (
          <p role="alert" className="text-sm font-medium text-red-700">
            {error}
          </p>
        )}

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <button
            type="submit"
            disabled={isLoading}
            className="bg-accent px-5 py-2.5 text-sm font-semibold text-surface transition-opacity duration-200 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isLoading ? 'Logging in…' : 'Log in'}
          </button>
          <Link
            href="/sign-up"
            className="text-sm font-medium text-muted underline decoration-border underline-offset-4 transition-colors duration-200 hover:text-accent hover:decoration-accent"
          >
            Create an account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
