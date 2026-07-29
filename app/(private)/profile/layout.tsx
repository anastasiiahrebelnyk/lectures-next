import { Metadata } from 'next';
import Link from 'next/link';

interface ProfileLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'Profile | NoteHub',
  description: 'Your profile on NoteHub',
};

export default function ProfileLayout({ children }: ProfileLayoutProps) {
  return (
    <div className="ProfileLayout">
      <nav>
        <ul>
          <li>
            <Link href={'./profile'}>Profile</Link>
          </li>
          <li>
            <Link href={'./profile/settings'}>Settings</Link>
          </li>
          <li>
            <Link href={'./profile/notification'}>Notification</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
}
