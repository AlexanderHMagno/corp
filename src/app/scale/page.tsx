import Hero from '@/components/hero';
import scaleImg from '/public/scale.jpg';

export default function Scale() {
  return (
    <Hero
      image={scaleImg}
      imageAlt="Steal Factory"
      title="Scale your app to infinity"
    />
  );
}
