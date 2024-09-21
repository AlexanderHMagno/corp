import Hero from '@/components/hero';
import homeImg from '/public/home.jpg';

export default function Home() {
  return (
    <Hero
      image={homeImg}
      imageAlt="Car Factory"
      title="Profesional Web Hosting"
    />
  );
}
