import Link from "next/link";

export const metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <>
      <h1>Welcome </h1>
      <Link href="/blog">Blog</Link>
      <Link href="/products">Products</Link>
    </>
  );
}
