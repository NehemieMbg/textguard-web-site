import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center w-full min-height p-16 ">
      <h1 className="text-4xl font-bold text-white font-open-sans text-center mb-8">
        Empower Your Apps with
        <br />
        Bulletproof Validation.
      </h1>
      <p className="text-center text-lg mb-16">
        A <span className="text-teal-400">robust</span> JavaScript/TypeScript
        library for{' '}
        <span className="text-teal-400">precise data validation</span>. Ensure
        data integrity
        <br />
        from emails to custom fields, enhancing your app&apos;s reliability and
        user experience.
      </p>
      <Link
        href={'/docs/installation'}
        className="bg-teal-500 hover:bg-teal-600 transition-colors duration-250 text-black font-medium py-2 px-4 rounded-md"
      >
        Get started
      </Link>
    </section>
  );
}
