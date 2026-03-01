import Companies from "@/components/Companies";
import ExploreCategories from "@/components/ExploreCategories";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Companies />
      <ExploreCategories />
    </>
  );
}
