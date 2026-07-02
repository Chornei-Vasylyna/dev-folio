import { Footer } from "@/components/layout/Footer";
import { Catalog } from "@/features/home/components/Catalog";
import { Hero } from "@/features/home/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Catalog />
      <Footer />
    </>
  );
}
