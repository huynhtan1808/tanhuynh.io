import { useState } from 'react';
import SuccessMessage from '@/components/SuccessMessage';
import ErrorMessage from '@/components/ErrorMessage';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function Contact() {
  const [form, setForm] = useState(false);

  const contact = async (e) => {
    e.preventDefault();
    setForm({ state: 'loading' });

    const res = await fetch('/api/contact', {
      body: JSON.stringify({
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    const { error } = await res.json();
    if (error) {
      setForm({
        state: 'error',
        message: error
      });
      return;
    }
    e.target.reset();
    setForm({
      state: 'success',
      message: `Đã gửi! Mình sẽ phản hồi sau khi nhận được.`
    });
  };

  return (
    <div className="border border-gray-200 rounded p-6 my-4 w-full dark:border-gray-800 bg-white dark:bg-blue-opaque">
      <p className="my-1 text-gray-800 dark:text-gray-200">
        vui lòng điền đầy đủ thông tin bên dưới nếu như bạn muốn liên hệ mình 
        về công việc, câu hỏi,... hoặc bất cứ vấn đề gì liên quan.
      </p>
      <form className="w-full relative my-4" onSubmit={contact}>
        <div className="flex flex-wrap">
        <div className="w-full md:w-1/2">
        <label className="py-2 text-gray-800 dark:text-gray-200">
            Tên của bạn 
        </label>
        <input
          name="name"
          aria-label="Name for contact form"
          type="text"
          autoComplete="name"
          required
          className="px-4 w-full py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block border-gray-300 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        />
        </div>
        <div className="w-full md:w-1/2 md:pl-2">
        <label className="py-2 text-gray-800 dark:text-gray-200">
            Email của bạn 
        </label>
        <input
          name="email"
          aria-label="Email for newsletter"
          type="email"
          autoComplete="email"
          required
          className="px-4 w-full py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block border-gray-300 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        />
        </div>
        </div>
        <label className="py-2 text-gray-800 dark:text-gray-200">
            Nội dung liên hệ 
        </label>
        <textarea
          name="message"
          aria-label="Contact Message"
          type="text"
          autoComplete="message"
          required
          className="px-4 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-gray-300 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        />
        <button
          className="flex items-center justify-center mt-3 px-4 font-bold h-8 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded w-28"
          type="submit"
        >
          {form.state === 'loading' ? <LoadingSpinner /> : 'Gửi'}
        </button>
      </form>
      {form.state === 'error' ? (
        <ErrorMessage>{form.message}</ErrorMessage>
      ) : form.state === 'success' ? (
        <SuccessMessage>{form.message}</SuccessMessage>
      ) : (
        <p className="text-sm text-gray-800 dark:text-gray-200">
          liên hệ trực tiếp: hi@tanhuynh.io
        </p>
      )}
    </div>
  );
}
