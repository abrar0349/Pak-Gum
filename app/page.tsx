
import Header from "@/app/component/Headers/Header";
import Navbar from "@/app/component/Navbar/Navbar";


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
       <Header />
       <Navbar />
    </div>
  );
}
