import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Foto from 'foto.jpg';

export default function Home() {
    const halaman = (event) => {
        alert("Anda sudah berada di halaman About");
    }

  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <div className="header">
        <div className="kiri">
          <div className="isi-header-kiri">
            <h1>About</h1>
          </div>
          <div className="isi-header-kanan">
            <ul>
              <li><Link href="/">Beranda</Link></li>
              <li><Link href="/input">Input Data</Link></li>
              <li><Link href="/list">List Data</Link></li>
              <li><Link href="#" onClick={halaman}>About</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="isi-about">
          <div className="kiri-about">
              <div className="gambar-about"></div>
          </div>
          <div className="kanan-about">
              <p>
              Layaknya puisi yang tercipta dari kesunyian, Senja menyiratkan ketenangan dan kebijaksanaan. Ia mengajarkan kita tentang perjalanan hidup, Bahwa setiap perpisahan membawa pertemuan yang indah. Makanya sebelum terjadi perpisahan tatkalanya kita berkenalan terlebih dahulu, karena ada pepatah "tak kenal maka tak sayang", perkenalkan nama saya Kristin Ross Pattikawa, dengan nim 21562004 dari prodi Sistem Informasi, saya baru menempuh semester 3, saya harap dengan berkuliah disini, saya akan mendapatkan ilmu yang bermanfaat dan mempunyai teman-teman yang baik hati pastinya. Buat teman-teman yang kuliah SEMANGAT TERUS YAAAA!!!!
              </p>
          </div>
      </div>
    </>
  )
}
