import { Catalog } from "@/components/features/home/Catalog";
import { Hero } from "@/components/features/home/Hero";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Catalog />
      <Footer />
    </>
  );
}
