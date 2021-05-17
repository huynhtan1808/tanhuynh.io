import Container from '@/components/Container';

export default function UsesLayout({ children }) {
  return (
    <Container
      title="My Gear – Tan Huynh"
      description="Here's what tech I'm currently using for coding, videos, and music."
    >
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          My Gear
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mt-2 mb-8">
          Đây là những 'đồ nghề' mà mình sử dụng cho coding. Hầu hết các món đồ này được mình
          tích lũy trong vài năm qua, sẽ cập nhật thêm sau đợt nâng cấp vào cuối năm 2021 này.
        </p>
        <div className="prose dark:prose-dark w-full">{children}</div>
      </article>
    </Container>
  );
}
