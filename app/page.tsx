import Link from "next/link"

export default function Home() {
  return (
    <>
      <h1>Testing</h1>
      <br />
      <Link href="/posts">Posting Page</Link>
      <br />
      <Link href="/albums">Album Page</Link>
    </>
  )
}
