import Image from "next/image";

export default function User() {
  return (
    <div className="flex items-center gap-4 px-4 py-4">
      <div className="relative w-12 h-12">
        <Image
          src="/images/user.jpg"
          alt="user"
          fill
          sizes="100%"
          className="rounded-full"
        />
        <div className="absolute bottom-0 right-0 bg-green-500 rounded-full w-3 h-3"></div>
      </div>
      <div className="flex flex-col">
        <h1 className="text-lg font-bold">John Doe</h1>
        <p className="text-sm text-gray-500">john.doe@example.com</p>
      </div>
    </div>
  );
}
