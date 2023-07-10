import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  const halaman = (event) => {
    alert("Anda sudah berada di halaman Beranda");
  }

  return (
    <>
      <Head>
        <title>IDIX - streaming Film</title>
      </Head>
      <div className="header">
        <div className="kiri">
          <div className="isi-header-kiri">
            <h1 style={{color: "red"}}>IDLIX</h1>
          </div>
          <div className="isi-header-kanan">
            <ul>
              <li><Link href="/" onClick={halaman}>Beranda</Link></li>
              <li><Link href="/input">Input Data</Link></li>
              <li><Link href="/list">List Data</Link></li>
              <li><Link href="/about">About</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="background"></div>
    </>
  )
}
