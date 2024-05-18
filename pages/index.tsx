import { Inter } from "next/font/google";
import Navbar from '../components/Navbar';
import BkkGolf from '../public/bkkGolf.jpg';
import Image from "next/image";
import Ren from "../public/Renville_Winter.jpg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <div className="unset w-full ">
    <Image 
    src={Ren}
    alt="Bkk Golfing"
    height={1200}

    


    />
    </div>
    <h1>Hello From Home!</h1>
    </>

  );
}
