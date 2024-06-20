import About from "@/Components/About";
import Banner from "@/Components/Banner";
import Projects from "@/Components/Projects";
import Skills from "@/Components/Skills";

export default function Home() {
  return (
   <>
    <Banner/>
    <div className="bg-themeWhite">
      <About/>
      <Skills/>
      <Projects/>
      {/* <div className='h-[100vh] end bg-themeWhite'></div> */}
    </div>
   </>
  );
}
