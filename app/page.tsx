import Footer from "@/app/component/Footer/Footer";
import Header from "@/app/component/Headers/Header";
import Navbar from "@/app/component/Navbar/Navbar";
// import AboutProduct from "@/app/component/Home/AboutProduct";
import About from "@/app/component/Home/About";
import Product from "@/app/component/Home/Product";


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
       <Header />
       <Navbar />
       <Footer />
       <About />
        <Product />
       {/* <AboutProduct /> */}
    </div>
  );
}
