import Link from 'next/link';
import Container from '@/components/Container';
import Contact from '@/components/Contact';

export default function NotFound() {
  return (
    <Container title="Contact – Tan Huynh">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Liên hệ
        </h1>
        <Contact />
        <Link href="/">
          <a className="p-1 sm:p-4 w-64 font-bold mx-auto bg-gray-100 dark:bg-gray-900 text-center rounded-md text-black dark:text-white">
            Quay Lại
          </a>
        </Link>
      </div>
    </Container>
  );
}
