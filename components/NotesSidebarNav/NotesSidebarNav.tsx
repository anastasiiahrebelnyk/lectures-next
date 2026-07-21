'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Category } from '../../types/category';

interface NotesSidebarNavProps {
  categories: Category[];
}

function NotesSidebarNav({ categories }: NotesSidebarNavProps) {
  const pathname = usePathname();

  const items = [
    { href: '/notes/filters/all', label: 'All' },
    ...categories.map(category => ({
      href: `/notes/filters/${category.id}`,
      label: category.name,
    })),
  ];

  return (
    <nav aria-label="Note categories">
      <p className="font-display text-xs font-semibold uppercase tracking-[0.12em] text-ink-faint">
        Categories
      </p>
      <ul className="mt-4 space-y-0.5">
        {items.map(item => {
          const isActive =
            pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`block border-l-2 py-2 pl-3 text-sm transition-colors duration-200 ${
                  isActive
                    ? 'border-accent font-semibold text-foreground'
                    : 'border-transparent text-muted hover:border-border hover:text-foreground'
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default NotesSidebarNav;
