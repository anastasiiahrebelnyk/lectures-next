'use client';

import Link from 'next/link';
import { useAuthStore } from '../../store/authStore';

function UserMenu() {
  const { isAuthenticated, user } = useAuthStore();

  if (isAuthenticated !== true) {
    return (
      <>
        <Link
          href="/sign-in"
          className="relative px-2.5 py-1.5 text-sm font-medium text-muted transition-colors duration-200 hover:text-foreground sm:px-3"
        >
          <span className="after:absolute after:inset-x-2.5 after:bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-200 hover:after:scale-x-100 sm:after:inset-x-3">
            Sign in
          </span>
        </Link>
        <Link
          href="/sign-up"
          className="relative px-2.5 py-1.5 text-sm font-medium text-muted transition-colors duration-200 hover:text-foreground sm:px-3"
        >
          <span className="after:absolute after:inset-x-2.5 after:bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-200 hover:after:scale-x-100 sm:after:inset-x-3">
            Sign up
          </span>
        </Link>
      </>
    );
  }

  return (
    <>
      <Link
        href="/profile"
        className="relative px-2.5 py-1.5 text-sm font-medium text-muted transition-colors duration-200 hover:text-foreground sm:px-3"
      >
        <span className="after:absolute after:inset-x-2.5 after:bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-200 hover:after:scale-x-100 sm:after:inset-x-3">
          {user?.userName}
        </span>
      </Link>
      <button
        type="button"
        // onClick={handleLogout}
        className="relative px-2.5 py-1.5 text-sm font-medium text-muted transition-colors duration-200 hover:text-foreground sm:px-3"
      >
        <span className="after:absolute after:inset-x-2.5 after:bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-200 hover:after:scale-x-100 sm:after:inset-x-3">
          Log out
        </span>
      </button>
    </>
  );
}

export default UserMenu;
