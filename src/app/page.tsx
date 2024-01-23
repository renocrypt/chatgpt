import HeroImg from "@/components/heros/HeroImg";
import HeroText from "@/components/heros/HeroText";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div>
        <HeroText />
        <HeroImg
          heading="A Spectrum of Possibilities"
          content="At RenoGPTz, we believe in the transformative power of AI. Our
              collection of custom GPT models is not just a showcase of
              technological prowess but a testament to the limitless potential
              of AI in various domains. From enhancing business intelligence to
              revolutionizing creative processes, our GPT models are designed to
              cater to a diverse range of needs and industries."
          img_url="/imgs/rhino-day.jpg"
          backgroundTag="bg-blue-200"
          orientationTag="flex-row-reverse"
        />

        <HeroImg
          heading="A Spectrum of Possibilities"
          content="At RenoGPTz, we believe in the transformative power of AI. Our
              collection of custom GPT models is not just a showcase of
              technological prowess but a testament to the limitless potential
              of AI in various domains. From enhancing business intelligence to
              revolutionizing creative processes, our GPT models are designed to
              cater to a diverse range of needs and industries."
          img_url="/imgs/rhino-night.jpg"
          backgroundTag="bg-purple-200"
          orientationTag="flex-row"
        />
      </div>
    </main>
  );
}
