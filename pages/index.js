import Image from "next/image";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export async function getServerSideProps() {
  try {
    // Fetching data from your internal API endpoint
    const res = await fetch('https://backendnext-hazel.vercel.app//api/users'); // Use your internal API route
    if (!res.ok) {
      throw new Error('Failed to fetch data from internal API');
    }
    const data = await res.json();

    return {
      props: {
        data, // Pass fetched data to the page component as props
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        data: null, // Return null or handle the error as needed
      },
    };
  }
}

export default function Home({ users }) {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              pages/index.js
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>
        <div>
          <h1>User List</h1>
          <ul>
            {users.map((user, index) => (
              <li key={index}>{user.Player}</li>
            ))}
          </ul>
        </div>
      </main>

    </div>
  );
}
