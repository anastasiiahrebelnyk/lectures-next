import Link from 'next/link';

interface ProfileLayoutProps {
  children: React.ReactNode;
}

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
