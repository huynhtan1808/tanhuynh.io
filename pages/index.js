import Link from 'next/link';

import Container from '../components/Container';
import BlogPost from '../components/BlogPost';
import Subscribe from '../components/Subscribe';
import ProjectCard from '../components/ProjectCard';



export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
        👋 Chào, mình là Tân Huỳnh
        </h1>
        <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
          Hiện đang là 💻 web developer, 🎨  designer,✍🏻  writer. Bạn đã tìm thấy blog cá nhân của mình – Bạn có thể&nbsp;
          <Link href="/contact">
            <a>Liên hệ mình</a>
          </Link>
          &nbsp;nếu như có bất cứ câu hỏi nào.
        </h2>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          Nổi Bật
        </h3>
        <BlogPost
              title="Web Fonts Năm 2021"
              summary="Tìm hiểu các phương pháp hay nhất cho các trang web hiệu suất cao sử dụng phông chữ web, được cập nhật cho năm 2021."
              slug="web-fonts-nam-2021"
        />
        <BlogPost
              title="Tại Sao Bạn Nên Học Next.js?"
              summary="Hiểu được sự phát triển đằng sau Web Framework phổ biến nhất của JavaScript và tìm hiểu lý do tại sao Next.js có thể giúp bạn xây dựng các ứng dụng web nhanh hơn."
              slug="hoc-nextjs"
        />
        <BlogPost
              title="Core Web Vitals sẽ ảnh hưởng như thế nào đến Xếp hạng tìm kiếm Google vào năm 2021"
              summary="Bắt đầu từ tháng 6 này, Google sẽ thêm Core Web Vitals vào báo hiệu xếp hạng Trải nghiệm trang của mình. Năm ngoái, Google đã công bố rằng những thay đổi đang đến trong cách thuật toán của họ xếp hạng các trang vượt xa tốc độ tải trang, duyệt web an toàn, HTTPS và tính thân thiện với thiết bị di động của chúng.              "
              slug="core-web-virals-anh-huong-google-rankings-2021"
        />
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Dự án đã thực hiện
        </h3>
        <ProjectCard
          title="GET Express"
          description="Thiết kế và Xây Dựng Website với công nghệ JAMStack bằng Next.js, Headless CMS Strapi."
          href="https://getexpress.vn/"
          icon="getexpress"
        />
        <ProjectCard
          title="Pinnacle Credit Management"
          description="Thiết kế và Xây Dựng Website trên nền tảng Wordpress, Bộ nhận diện thương hiệu, SEO Google."
          href="https://pinnaclecreditrepair.com/"
          icon="pinnacle"
        />
        <ProjectCard
          title="URBANOUTCAST"
          description="Lên ý tưởng, thiết kế và xây dựng toàn bộ Trang Web TMĐT trên nền tảng Shopify."
          href="https://urbanoutcast.club/"
          icon="urbanoutcast"
        />
        <ProjectCard
          title="WPVie"
          description="Website chia sẻ kiến thức và các hướng dẫn cho người mới bắt đầu sử dụng Wordpress"
          href="https://wpvie.com/"
          icon="wpvie"
        />
        <Subscribe />
      </div>
    </Container>
  );
}
