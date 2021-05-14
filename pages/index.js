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
          Hiện đang là web developer, designer, and writer. Bạn đã tìm thấy trang web cá nhân của mình –&nbsp;Bạn có thể&nbsp;
          <Link href="/guestbook">
            <a>Liên hệ mình&nbsp;</a>
          </Link>
          nếu như có bất cứ câu hỏi nào.
        </h2>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          Nổi Bật
        </h3>
        <BlogPost
              title="Web Fonts Năm 2021"
              summary="Tìm hiểu các phương pháp hay nhất cho các trang web hiệu suất cao sử dụng phông chữ web, được cập nhật cho năm 2021."
              slug="web-fonts-nam-2021"
        />
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Khách hàng
        </h3>
        <ProjectCard
          title="Pinnacle Credit Management"
          description="Thiết kế và Xây Dựng Website trên nền tảng Wordpress, Bộ nhận diện thương hiệu, SEO Google."
          href="https://pinnaclecreditrepair.com/"
          icon="react2025"
        />
        <ProjectCard
          title="URBANOUTCAST"
          description="Lên ý tưởng, thiết kế và xây dựng toàn bộ Trang Web TMĐT trên nền tảng Shopify."
          href="https://masteringnextjs.com/"
          icon="nextjs"
        />
        <Subscribe />
      </div>
    </Container>
  );
}
