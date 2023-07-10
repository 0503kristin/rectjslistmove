import Head from 'next/head';
import { useState,useEffect } from "react";
import Link from 'next/link';
import axios from "axios";
import { stat } from "fs";
 
const koneksiMovie = axios.create({ 
  baseURL: "http://127.0.0.1:5000/api/movie" 
});

export default function Home() {
    const [statejudul, setJudul] = useState("");
    const [stateid, setId] = useState("");
    const [stateterbit, setTerbit] = useState("2018-07-22");
    const [statedeskripsi, setDeskripsi] = useState("");
    const [statefoto, setFoto] = useState("");
    const [statefile, setFile] = useState("");
    const [stateidmovie, setIdMovie] = useState("");
    const [movie, setMovie] =  useState(null);
    const [getmovie, setGetMovie] =  useState(null);

    const halaman = (event) => {
        alert("Anda sudah berada di halaman List Movie");
    }

    const contoh = (event) => {
        event.preventDefault();
        var id = event.target.value;

        const mhsEdit =  movie.filter((movie) => {
            return movie.id == id;
        });
        
        if(mhsEdit!=null){
            setId(mhsEdit[0].id);
            setIdMovie(mhsEdit[0].idMovie);
            const idMovie = stateidmovie;

            const tengokMovie = getmovie.filter((getmovie) => {
                return getmovie.idMovie == idMovie;
            });

            if(tengokMovie!=null) {
                setFile(tengokMovie[0].foto);
                const url = statefile;
                window.location.href = url;
            }
        }
    }

    useEffect(() => {
        async function getMovie() {
        const response = await koneksiMovie.get("/").then(function (axiosResponse) {
            setMovie(axiosResponse.data.data);
        })
            
        .catch(function (error) {   
            alert('error from movie in api movie: '+error);
        });
        }
        
        getMovie();
    }, []);

  if(movie==null){
    return(
      <div>
        waiting...
      </div>
    )
  }else{

  return (
    <>
      <Head>
        <title>List Movie</title>
      </Head>
      <div className="header">
        <div className="kiri">
          <div className="isi-header-kiri">
            <h1>List Movie</h1>
          </div>
          <div className="isi-header-kanan">
            <ul>
              <li><Link href="/">Beranda</Link></li>
              <li><Link href="/input">Input Data</Link></li>
              <li><Link href="#" onClick={halaman}>List Data</Link></li>
              <li><Link href="/about">About</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="contoh">
        <div className="isi-list">
            <div className="all-list">
                {movie.map((mhs) => 
                    <ul>
                        <li style={{fontWeight: "bold", fontSize: "25px", marginTop: "2%", marginLeft: "2%"}}>Judul {mhs.judul}</li>
                        <li className="liImg" style={{marginLeft: "20%", marginTop: "2%"}}><img src={mhs.foto} className="layFoto" style={{borderRadius: "10px"}} width="300"/></li>
                        <li style={{height: "47%", marginTop: "2%", marginLeft: "2%", marginRight: "2%"}}>{mhs.deskripsi}</li>
                        <li style={{marginRight: "3%", float: "right", marginTop: "1.5%"}}>Terbit {mhs.terbit}</li>
                        <li style={{float: "left", marginLeft: "2%"}}><button value={mhs.id}>Edit Data</button></li>
                        <li style={{float: "left", marginLeft: "5%"}}><button value={mhs.id}>Delete Data</button></li>
                    </ul>
                )}
            </div>
        </div>
      </div>
      <div className="formedit">
          a
      </div>
    </>
  )
}
}