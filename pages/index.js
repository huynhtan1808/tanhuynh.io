import Link from 'next/link';
//import { google } from 'googleapis';

//import googleAuth from '@/lib/google/auth';
//import Timeline from '../components/Timeline';
import Container from '../components/Container';
import BlogPost from '../components/BlogPost';
//import Subscribe from '../components/Subscribe';
import ProjectCard from '../components/ProjectCard';
//import VideoCard from '../components/VideoCard';

//export async function getStaticProps() {
  //const auth = await googleAuth.getClient();
  //const youtube = google.youtube({
    //auth,
    //version: 'v3'
  //});

  //const response = await youtube.videos.list({
    //id: 'Pd2tVxhFnO4,FytxaSVQROc,u_o09PD_qAs',
    //part: 'snippet,statistics'
  //});

  //return {
    //props: {
      //videos: response.data.items
    //},
    //revalidate: 60 * 60 // 1 hour
  //};
//}

export default function Home({ videos }) {
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
        
       
      </div>
    </Container>
  );
}
