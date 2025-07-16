export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Solar ICT, Bangladesh, Dhaka</h1>
      <p className="text-gray-700 text-lg mb-6">
        Salam! This is a basic homepage built with Next.js and Tailwind CSS.
        By Solar ICT @Tasnia! 
      </p>
      <a
        href="/about"
        className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Learn More
      </a> 
    </main>
  );
}
