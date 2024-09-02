import Image from "next/image";
import Hero from "@/../components/Hero"
import PhotoMontage from "../../components/PhotoMontage"
import Guide from "@/../components/Guide"
import Testomonial from "@/../components/testomonial"


import dynamic from "next/dynamic";


export default function Home() {
    return (
    <> 
    <Hero />
    <Testomonial />
    
    <Guide  />
    
    
    
    </>
    );
  }


