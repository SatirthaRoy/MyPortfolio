import About from "@/Components/About";
import Banner from "@/Components/Banner";
import Projects from "@/Components/Projects";
import Skills from "@/Components/Skills";
import Image from "next/image";

export default function Home() {
  return (
   <>
    <Banner/>
    <div className="bg-themeWhite background">
      <About/>
      <Skills/>
      <div className="relative">
        <Image className="scale-0 white-blob fixed top-0 right-1/2 translate-x-1/2" alt="white blob" src='/blob-big-white.svg' height={450} width={800}/>
        <Projects/>
      </div>
      {/* <div className='h-[100vh] end bg-themeWhite'></div> */}
    </div>
   </>
  );
}
