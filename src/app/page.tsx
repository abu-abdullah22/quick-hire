import Companies from "@/components/Companies";
import CTABanner from "@/components/CTABanner";
import ExploreCategories from "@/components/ExploreCategories";
import FeaturedJobs from "@/components/FeaturedJobs";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Companies />
      <ExploreCategories />
      <CTABanner />
      <FeaturedJobs />
    </>
  );
}
