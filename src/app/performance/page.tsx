import Hero from '@/components/hero';
import performanceImg from '/public/performance.jpg';

export default function Performance() {
  return (
    <Hero
      image={performanceImg}
      imageAlt="Welding"
      title="We Serve High Performance applications"
    />
  );
}
