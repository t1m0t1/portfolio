import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/pages/components/Layout";
import Hero from "./components/Hero";
import About from "./components/About";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
   
      <Hero/>
      <About/>

    </Layout>
  );
}
