import hero from '../images/hero/frogBig.jpg';
import { HeroContainer, HeroImages } from './Home.styled';

function Hero() {
  return (
    <HeroContainer>
      <HeroImages src={hero} alt="Frog" />
    </HeroContainer>
  );
}

export default Hero;
