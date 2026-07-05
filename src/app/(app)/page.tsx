import { Footer } from "@/components/layout/Footer";
import { getPublicProfiles } from "@/features/home/actions/getPublicProfiles";
import { Catalog } from "@/features/home/components/Catalog";
import { Hero } from "@/features/home/components/Hero";

export default async function Home() {
  const profiles = await getPublicProfiles()
  const userCount = profiles.length
  
  return (
    <>
      <Hero userCount={userCount}/>
      <Catalog profiles={profiles}/>
      <Footer />
    </>
  );
}
