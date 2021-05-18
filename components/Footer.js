import Link from 'next/link';


const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <div className="flex sm:flex-row mb-8 space-x-0 sm:space-x-2 w-full">
      <p className="text-gray-800 dark:text-gray-200 font-small text-sm">
      This blog is a 
        <Link href="https://nextjs.org/">
            <a target="_blank" className="text-blue-500 hover:text-blue-600 transition"> Next.js </a>
        </Link>
      application and I deloy it on
        <Link href="https://vercel.com/">
            <a target="_blank" className="text-blue-500 hover:text-blue-600 transition"> Vercel</a>
        </Link>
        .
      </p>
      </div>
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link href="/">
            <a className="text-gray-500 hover:text-gray-600 transition">Home</a>
          </Link>
          <Link href="/blog">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Blog
            </a>
          </Link>
          <Link href="mailto:hi@tanhuynh.io">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Contact
            </a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://www.facebook.com/huynhtan1808/">
            Facebook
          </ExternalLink>
          <ExternalLink href="https://github.com/huynhtan1808">
            GitHub
          </ExternalLink>
          <ExternalLink href="https://www.youtube.com/channel/UCelv4SsrE62_WX_Os7_HWVA">
            YouTube
          </ExternalLink>
        </div>
        <div className="flex flex-col space-y-4">
          <Link href="/my-gear">
            <a className="text-gray-500 hover:text-gray-600 transition">
              My Gear
            </a>
          </Link>
          <Link href="/snippets">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Snippets
            </a>
          </Link>
          <Link href="https://github.com/huynhtan1808/tanhuynh.io">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Source
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
