export async function generateStaticParams() {
  return [
    { id: '1' }
  ];
}

export default function BlogPage() {
  return <BlogContent />;
}

import BlogContent from './BlogContent';