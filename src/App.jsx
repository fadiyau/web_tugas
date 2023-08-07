// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div className="card-header">
      <nav className="navbar pt-1 coba" style={{background: '#916DB3', height: 120}}>
        <div style={{width: "100%"}}>
          <div className="navbar-brand" href="#" >
            <a href="#" className="btn btn1 btn-light bi bi-house-gear-fill me-3 home " style={{color: '#A78295', height: "31px"}}></a>
            <a href="#" className="btn btn1 btn-outline-secondary text-light me-3" style={{fontSize: "12px"}}>Belajar</a>
            <a href="#" className="btn btn1 btn-outline-secondary text-light me-3" style={{fontSize: "12px"}}>Primagama</a>
            <a href="#" className="btn btn1 btn-outline-secondary text-light me-3" style={{fontSize: "12px"}}>StudyLand</a>
            <a href="#" className="btn btn1 btn-outline-secondary text-light" style={{fontSize: "12px"}}>Profesional</a>
            {/* <a href="#" className="btn"  style={{color: '#A78295'}}>Primagama</a>
            <a href="#" className="btn"  style={{color: '#A78295'}}>StudyLand</a>
            <a href="#" className="btn"  style={{color: '#A78295'}}>Profesional</a> */}
            <br/>
          </div>

          <div className="mt-2 d-flex align-items-center justify-content-between" style={{width: "100%"}}>
            <div>
              <img src="src/assets/zeniuslogo.png" width="110" height="35" alt=""/>
              <a href="#" className="dropdown-toggle text-light mx-3 me-3 text-decoration-none">Fitur</a>
              <a href="#" className="text-light me-3 text-decoration-none">Paket Belajar</a>
              <a href="#" className="text-light me-3 text-decoration-none">Promo</a>
              <a href="#" className="text-light me-3 text-decoration-none">Blog</a>
              <a href="#" className="text-light me-3 text-decoration-none">Testimonial</a>
              <a href="#" className="dropdown-toggle text-light text-decoration-none">Panduan        
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </a>
            </div>
            <div>
              <a href="#" className="btn btn1 bi bi-search" style={{color: 'white'}}></a>
              <a href="#" className="btn btn1 bi bi-download me-3" style={{color: 'white'}}></a>
              <a href="#" className="btn btn2 btn-light login ls fst-italic fw-bold msk pt-1" style={{color: '#A78295', height: "27px", fontSize: "11px"}}>Masuk/Daftar</a>
            </div>
          </div>
        </div>
      </nav>
      <div style={{height: "4px", width: "100%", border: "1px solid #F1C93B", background: "#F1C93B"}}></div>
    </div>

    <div style={{marginBottom: "420px"}}>
      <img src='src/assets/unnamed.jpg' className="z-1 position-absolute"  width="100%" height="410px"/>
      <div className='z-2 position-absolute d-flex justify-content-between align-items-center' style={{marginRight: "170px"}}>
        <div className="text-light" style={{marginLeft: "110px", width: "35%"} }>
          <p className="fw-bold" style={{fontSize: "33px"}}>#BikinCerdasBeneran 
          untuk Jadi Apapun yang 
          Kamu Mau!</p>
          <p>Zenius gak hanya ngasih materi pelajaran, tapi juga fokus di bikin otak makin pinter dalam berpikir</p>
          <a className="btn btn2 btn-warning p-2" style={{width: "135px", height: "40px", fontSize: "12px", color: '#916DB3'}}>Yuk, ikutan!</a>
        </div>
        <img src='src/assets/jadi.png' width="38.4%" height="100%"/>
      </div>
      {/* <img src='src/assets/jadi.png' width="300px" height="310px"/> */}
    </div>

    <div className="card-body d-flex flex-column align-items-center justify-content-center">
      <div className="mt-4 d-flex align-items-center justify-content-center">
        <a href="#" className="btn btn2 btn-warning me-3 text-decoration-none">
          <img className="bg bg-danger percent" src='src/assets/percent.png' width="40"/>
          <i className="fw-bold fw-normal"> Paket Belajar sukses masuk PTN 2024 </i>
        </a>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="jdl fw-bold" style={{color: '#916DB3'}} >Makin Jago Bernalar dan Lolos SNBT (UTBK) Bareng Zenius!</h1>
            <div className='d-flex'>
              <img src='https://www.zenius.net/_next/image/?url=https%3A%2F%2Fzenius.net%2Fproduct%2FzeniusImages%2Fhome%2Fprestasi.png&w=128&q=75' width="90px" height="90px" />
              <p className="fw-bold px-4">93.7% siswa tidak lulus standar kompetensi
              <br/> <p className='fw-normal'>walaupun yang diuji hanya kemampuan skolastik, banyak yang masih kesulitan dengan tipe soal terbaru, nih! *dari total peserta 17,043</p>
              </p>
            </div>
            <div className='d-flex'>
              <img src='https://www.zenius.net/_next/image/?url=https%3A%2F%2Fzenius.net%2Fproduct%2FzeniusImages%2Fhome%2Flogika.png&w=128&q=75' width="90px" height="90px" />
              <p className="fw-bold px-4">Berlatih bernalar bareng Zenius
              <br/> <p className='fw-normal'>Bayangin kamu jadi atlet, untuk sehat mungkin bisa usaha sendiri. 
              Tapi untuk menang kompetisi, atlet pasti pakai pelatih siapin segudang program latihan supaya kamu jadi juara. Sama halnya dengan kompetisi di PTN, biar lolos pakai Zenius yang paling jago ngelatih kamu bernalar!</p>
              </p>
            </div>
            <div className='d-flex'>
              <img src='https://www.zenius.net/_next/image/?url=https%3A%2F%2Fzenius.net%2Fproduct%2FzeniusImages%2Fhome%2FbelajarKeras.png&w=128&q=75' width="90px" height="90px" />
              <p className="fw-bold px-4">7 dari 10 pengguna Zenius, lolos SNBT (UTBK)
              <br/> <p className='fw-normal'>Zenius sudah terbukti bikin peluang lolos SNBT (UTBK) jadi lebih tinggi! Beragam penjelasan materi dari konsep, latihan soal dan try out yang bakalan ningkatin peluangmu tembus PTN 2023!</p>
              </p>
            </div>
          </div>
          <div className="col">
            <img className='imgbljr' src='https://www.zenius.net/_next/image/?url=https%3A%2F%2Fzs-inline.s3.ap-southeast-1.amazonaws.com%2Fproduction%2F5%2F2b%2F89dc%2F52b89dcb1fc44d95af76f70c24199d11.png%3Fefs%3Dhttps%253A%252F%252Fwww.zenius.net%252Fassets%252Fv-img%252F5%252F2b%252F89dc%252F52b89dcb1fc44d95af76f70c24199d11.png&w=1920&q=75'/>
          </div>
        </div>
      </div>
    </div>
    
    <div className="d-flex flex-column align-items-center justify-content-center" style={{background: "#916DB3"}}>
      <div className='kps d-flex align-items-center justify-content-center'> 
          <h5 className='fw-bold'>Kupas Tuntas Aturan Baru Masuk PTN 2023 — Apa saja yang berubah?!</h5>
      </div>
      <div className='d-flex align-items-center justify-content-center pt-2'>
        <img className='vid1' src='https://www.zenius.net/_next/image/?url=https%3A%2F%2Fzs-inline.s3.ap-southeast-1.amazonaws.com%2Fproduction%2Fe%2F57%2Ff73e%2Fe57f73ebe6564ca593c48cc354fcab24.jpg%3Fefs%3Dhttps%253A%252F%252Fwww.zenius.net%252Fassets%252Fv-img%252Fe%252F57%252Ff73e%252Fe57f73ebe6564ca593c48cc354fcab24.jpg&w=1920&q=75' width="600" height="350" />
      </div>
        <div className="kmd text-center mb-5">
          <p>Kemendikbud resmi merubah sistem seleksi PTN tahun depan! Tes Potensi Skolastik atau TPS ramai dibicarain. Jadi, kamu gak perlu susah-susah ngehafal banyak rumus, karena ini 4 hal utama yang akan di uji dalam TPS: kemampuan potensi kognitif, penalaran logika matematika, kemampuan dalam bahasa Indonesia dan kemampuan dalam bahasa Inggris. Gimana ya cara untuk belajar menghadapi PTN tahun depan? Mulai dari ZenCore, playlist video belajar yang bisa kamu akses tiap saat, dan juga Live Class, Zenius punya solusi asik untuk #GantiCaraBelajar kamu biar bisa bersaing untuk masuk PTN 2023. Simak pembahasannya bersama Sabda & Isel di video ini!</p>
        </div>
      <div className="crd1 bg bg-secondary text-start d-flex align-items-center justify-content-center">
          <img className="jrm" src="https://www.zenius.net/_next/image/?url=https%3A%2F%2Fzenius.net%2Fproduct%2FzeniusImages%2Fhome%2FprofileJerome.jpg&w=1920&q=75" width="130"/>
          <div className="text text-light">
            <p className="fw-bold">“Zenius asik banget woy! Ga ngajarin rumus cepet, tapi jelasin dari konsepnya. Zenius ngebantu aku lolos kuliah ke Jepang & menginspirasi buat bikin video Youtube yang nunjukin Matematika itu bisa seru.” </p>
            <p className="fw-bolder">Jerome Polin - Zenius Alumnus 2016
              <br/>
              <p className="fw-normal">
                  Matematika Terapan, Universitas Waseda - Jepang
                <br/>
                  Youtube Content Creator
              </p>
            </p>
          </div>
      </div>
    </div>

    <div className="zns fw-bold text-light" style={{background: "#916DB3"}}>
      <p>Dapet Apa Aja di Zenius?</p>
    </div>

    <div className="card">
            
    </div>


      
    </>
  )
}

export default App
