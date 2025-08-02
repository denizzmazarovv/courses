export async function generateStaticParams() {
  return [
    { id: '1' }
  ];
}

export default function AboutPage() {
  return <AboutContent />;
}

import AboutContent from './AboutContent';