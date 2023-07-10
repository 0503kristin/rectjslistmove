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

  function formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2) 
      day = '0' + day;

    return [year, month, day].join('-');
  }

  const halaman = (event) => {
    alert("Anda sudah berada di Input Data");
  }

  const btnInput =  (event) => {  
    event.preventDefault();
    const formData = new FormData(event.target);
    koneksiMovie
      .post("/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })

      .then((res) => {
        console.log(res);
        setId(res.data.id);
        setIdMovie(res.data.idMovie);
        window.location.reload();
        alert("data berhasil di input");
      })

      .catch((err) => {
        console.log(err);
      });
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
        <title>Input Data</title>
      </Head>
      <div className="header">
        <div className="kiri">
          <div className="isi-header-kiri">
            <h1>Input Data</h1>
          </div>
          <div className="isi-header-kanan">
            <ul>
              <li><Link href="/">Beranda</Link></li>
              <li><Link href="#" onClick={halaman}>Input Data</Link></li>
              <li><Link href="/list">List Data</Link></li>
              <li><Link href="/about">About</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="isi-input-data">
        <form id="formadd" onSubmit={btnInput} >
          <table border={0}>
            <tbody>
              
              <tr>
                <td><label> judul:</label></td>
                <td><input type="text" id="judul" name="judul" /></td>
              </tr>
          
              <tr>
                <td><label> Cover:</label></td>
                <td><input type="file" name="foto"/></td>
              </tr>
          
              <tr>
                <td><label> Terbit:</label></td>
                <td><input type="date" name="terbit" min="1970-01-01" max="2025-12-31"/></td>
              </tr>

              <tr>
                <td><label> Deskripsi:</label></td>
                <td><input type="text" id="deskripsi" name="deskripsi" /></td>
              </tr>
            
            </tbody>
          </table>
          <input type="submit" />
        </form>
      </div>
    </>
  )
}
}