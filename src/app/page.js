import About from "@/Components/About";
import Banner from "@/Components/Banner";
import Skills from "@/Components/Skills";

export default function Home() {
  return (
   <>
    <Banner/>
    <About/>
    <Skills/>
    <div className='h-[300vh] end'></div>
   </>
  );
}
