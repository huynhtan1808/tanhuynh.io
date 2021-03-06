import { MDXRemote } from 'next-mdx-remote';

import { getFileBySlug } from '@/lib/mdx';
import UsesLayout from '@/layouts/gears';

export default function Uses({ mdxSource, frontMatter }) {
  return (
    <UsesLayout frontMatter={frontMatter}>
      <MDXRemote {...mdxSource} />
    </UsesLayout>
  );
}

export async function getStaticProps() {
  const uses = await getFileBySlug('gears');

  return { props: uses };
}
