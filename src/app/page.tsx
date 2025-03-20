import Link from "next/link";
export default function Home() {
  return (
    <div className="bg-black bg-[url(../../public/images/home-img.jpg)] bg-cover bg-center">
      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
        <div className="flex flex-col gap-6 p-12 rounded-xl bg-black/90 w-4/5 sm:max-w-96 mx-auto text-white sm:text-2xl">
          <h1 className="text-4xl sm:text-6xl font-bold">
            Sal&apos;s Computer <br /> Repair Shop
          </h1>
          <address>
            123 Main Street <br />
            Anytown, USA 12345
          </address>
          <p>Open Daily: 9am to 5pm</p>
          <Link href="tel:123456789" className="hover:underline">
            +1-123-456-789
          </Link>
        </div>
      </main>
    </div>
  );
}
