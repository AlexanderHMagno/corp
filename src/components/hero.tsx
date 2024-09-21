import Image, { StaticImageData } from 'next/image';

type HeroProps = {
  image: StaticImageData;
  imageAlt: string;
  title: string;
};

const Hero = (props: HeroProps) => {
  return (
    <div className="relative h-screen">
      <div className="absolute -z-10 inset-0">
        <Image
          src={props.image}
          alt={props.imageAlt}
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute bg-gradient-to-r from-slate-900  inset-0"></div>
      </div>

      <div className="pt-48 flex justify-center items-center ">
        <h1 className="text-white text-6xl">{props.title}</h1>
      </div>
    </div>
  );
};

export default Hero;
