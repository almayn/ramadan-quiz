'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function ControlPage() {
  const router = useRouter();

  useEffect(() => {
    const ok = localStorage.getItem('admin_ok');
    if (ok === '1') return;

    const code = prompt('أدخل كود الدخول');
    if (code === '66100') {
      localStorage.setItem('admin_ok', '1');
    } else {
      router.replace('/');
    }
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="bg-white shadow-2xl rounded-xl p-8 text-center max-w-xs w-full border-4 border-blue-200">
        <Link href="/control">
          <Image
            src="/almas.PNG"
            alt="شعار الماس"
            width={120}
            height={120}
            className="mx-auto mb-4 drop-shadow-xl cursor-pointer"
          />
        </Link>

        <h1 className="text-4xl font-extrabold text-blue-800 mb-2 drop-shadow-lg">
          لوحة التحكم
        </h1>

        <p className="text-md text-gray-700 font-semibold mb-6">
          خاصة بالإدارة
        </p>

        <div className="space-y-6">
          <Link href="/">
            <button className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition transform duration-300">
              عرض صفحة السؤال (العامة)
            </button>
          </Link>

          <Link href="/draw">
            <button className="w-full py-3 px-6 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition transform duration-300">
              صفحة السحب
            </button>
          </Link>

          <Link href="/add-question">
            <button className="w-full py-3 px-6 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition transform duration-300">
              إدراج سؤال
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
