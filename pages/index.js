import Link from 'next/link';
//import { google } from 'googleapis';

//import googleAuth from '@/lib/google/auth';
//import Timeline from '../components/Timeline';
import Container from '../components/Container';
import BlogPost from '../components/BlogPost';
import Subscribe from '../components/Subscribe';
import ProjectCard from '../components/ProjectCard';



export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Chào, mình là Tân Huỳnh
        </h1>
        <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
          Hiện đang là web developer, writer, and creator. Bạn đã tìm thấy trang web cá nhân của mình –&nbsp;Bạn có thể&nbsp;
          <Link href="/guestbook">
            <a>Liên hệ mình&nbsp;</a>
          </Link>
          nếu như có bất cứ câu hỏi nào.
        </h2>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          Most Popular
        </h3>
        <BlogPost
          title="Everything I Know About Style Guides, Design Systems, and Component Libraries"
          summary="A deep-dive on everything I've learned in the past year building style guides, design systems, component libraries, and their best practices."
          slug="test"
        />
        <BlogPost
          title="How Stripe Designs Beautiful Websites"
          summary="Examining the tips and tricks used to make Stripe's website design a notch above the rest."
          slug="test"
        />
        <BlogPost
          title="Creating a Monorepo with Lerna & Yarn Workspaces"
          summary="In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process."
          slug="test"
        />
        
       
      </div>
    </Container>
  );
}
