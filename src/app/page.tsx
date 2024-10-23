import CommingSoon from "@/components/CommingSoon";
import Footer from "@/components/footer";
import Landing from "@/components/Landin";

import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Landing />
      <CommingSoon/>
      <Footer/>
    </div>
  );
}