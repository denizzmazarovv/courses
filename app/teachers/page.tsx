export async function generateStaticParams() {
  return [
    { id: '1' }
  ];
}

export default function TeachersPage() {
  return <TeachersContent />;
}

import TeachersContent from './TeachersContent';