import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-black shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">My Website</h1>
        <div className="space-x-4">
          {/* <Link href="/about" className="text-gray-700 hover:text-blue-500">
            About
          </Link> */}
          <Link href="/contact" className=" text-white text-gray-700 hover:text-blue-500">
            Contact
          </Link>
        </div>
      </nav>

      <section className="p-12 text-center">
       <h1 className="text-black">This is Home Page!</h1>
      </section>
    </main>
  );
}
