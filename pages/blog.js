import { useState } from 'react';

import Container from '@/components/Container';
import BlogPost from '@/components/BlogPost';
import { getAllFilesFrontMatter } from '@/lib/mdx';

export default function Blog({ posts }) {
  const [searchValue, setSearchValue] = useState('');
  const filteredBlogPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
    );

  return (
    <Container
      title="Blog – Tan Huynh"
      description="Thoughts on the software industry, programming, tech, videography, music, and my personal life."
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Blog
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {`Mình bắt đầu viết blog từ năm 2019, chủ yếu về web development.
            Tính tới thời điểm này, Mình đã viết ${posts.length} bài viết trên trang này.
            Sử dụng thanh tìm kiếm bên dưới để lọc nội dung bạn quan tâm.`}
        </p>
        <div className="relative w-full mb-4">
          <input
            aria-label="Tìm kiếm bài viết"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Tìm kiếm bài viết"
            className="px-4 py-2 border border-gray-300 dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          />
          <svg
            className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        {!searchValue && (
          <>
            <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
              Nổi bật
            </h3>
            <BlogPost
              title="Web Fonts Năm 2021"
              summary="Tìm hiểu các phương pháp hay nhất cho các trang web hiệu suất cao sử dụng phông chữ web, được cập nhật cho năm 2021."
              slug="web-fonts-nam-2021"
            />
          </>
        )}
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Tất Cả Bài Viết
        </h3>
        {!filteredBlogPosts.length && 
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Không tìm được bài viết nào.
          </p>
        }
        {filteredBlogPosts.map((frontMatter) => (
          <BlogPost key={frontMatter.title} {...frontMatter} />
        ))}
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');

  return { props: { posts } };
}
