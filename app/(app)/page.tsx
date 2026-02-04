import Hero from "@/components/hero";
import About from "@/components/about";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Contact from "@/components/contact";
import Facilities from "@/components/facilities";
import Treatments from "@/components/treatments";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start w-full">
      <Hero />
      <Facilities />
      <Treatments />
      <About />
      <Contact />
    </main>
  );
}
