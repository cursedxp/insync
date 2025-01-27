import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Link href="/dashboard">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Dashboard
        </button>
      </Link>
    </div>
  );
}
