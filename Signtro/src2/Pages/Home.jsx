import Illustration from '../assets/illustration.svg'
import Image1 from '../assets/handsign.svg'
import Image2 from '../assets/computer_vision.svg'
import './Home.css'
import Footer from './FooterComponent'
import { useNavigate  } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    return (
        <>
            <div className='illustration'>
                <img src={Illustration} alt="illustration" />
                    <button className='green-button' onClick={()=>{navigate('/courses');}}>
                        Get Started
                    </button>
            </div>
            <div className="container">
                <div className="section">
                    <div className="text-section">
                        <h1 className="title">Sign Language</h1>
                        <p className="description">
                            Bahasa isyarat adalah sistem komunikasi yang menggunakan gerakan tangan, ekspresi wajah, dan bahasa tubuh untuk menyampaikan pesan. Bahasa ini digunakan oleh komunitas tunarungu dan orang-orang dengan gangguan pendengaran sebagai alat utama komunikasi mereka. Setiap negara atau wilayah memiliki variasi bahasa isyarat yang unik, seperti American Sign Language (ASL) di Amerika Serikat atau Bahasa Isyarat Indonesia (BISINDO). Bahasa isyarat tidak hanya sekadar meniru kata-kata lisan, tetapi memiliki tata bahasa dan struktur kalimat yang khas. Selain itu, bahasa isyarat juga memberikan peluang penting dalam inklusi sosial dan pendidikan bagi komunitas tunarungu, membantu mereka untuk berinteraksi dengan lebih mudah di masyarakat yang lebih luas.
                        </p>
                    </div>
                    <div className="image-container">
                        <img src={Image1} alt="Sign Language Icon" className="icon" />
                    </div>
                </div>

                <div className="section">
                    <div className="image-container">
                        <img src={Image2} alt="Computer Vision" className="icon" />
                    </div>
                    <div className='text-section'>
                        <h1 className="title">Computer Vision</h1>
                        <p className="description">
                            Computer vision adalah cabang dari kecerdasan buatan (AI) yang memungkinkan komputer untuk memperoleh, memahami, dan menafsirkan informasi visual dari gambar atau video, mirip dengan cara manusia memproses penglihatan. Tujuan utama dari computer vision untuk aplikasi ini adalah untuk mengklasifikasi sign language yang dikuasai oleh pengguna.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home
