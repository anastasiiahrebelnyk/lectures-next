// import { notFound } from 'next/navigation';

import PageContainer from '../../../components/PageContainer/PageContainer';

export default function Profile() {
  // const coin = Math.random();
  // if (coin < 0.5) {
  //   notFound();
  // }
  return (
    <PageContainer
      title="Profile"
      description="View and update your account settings."
    />
  );
}
