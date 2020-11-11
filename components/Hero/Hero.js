import Image from 'next/image'
import { HeroCard, HeroCardContent, CarouselItem, HeroImageContainer, HeroCardImage, HeroCardCategory, HeroCardTitle, HeroCardMetas, SectionHero } from './styles';
import Style from './style.module.css'
import Slider from "react-slick"

const Hero = ({ }) => {  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    
    return (
      <SectionHero>
        <Slider {...settings}>
          <CarouselItem>
            <HeroImageContainer href="#">
              <Image 
                src="https://squad-swift.raccoon-stage.com/imgs/hero.png"
                alt="{alt}"
                title="{title}"
                layout="fill"
                className={Style.BackgroundImage}
              />
            </HeroImageContainer>
            <HeroCard>
              <HeroCardImage href="">
                <Image 
                  src="https://squad-swift.raccoon-stage.com/imgs/hero.png"
                  alt="{alt}"
                  title="{title}"
                  layout="fill"
                />
              </HeroCardImage>
              <HeroCardContent>
                <HeroCardCategory>Hiperconvergência</HeroCardCategory>
                <a href="">
                  <HeroCardTitle>Conheça o potencial da hiperconvergência no gerenciamento de TI</HeroCardTitle>
                  <HeroCardMetas>18 de agosto, 2020</HeroCardMetas>
                  <HeroCardMetas> | </HeroCardMetas>
                  <HeroCardMetas>9 min de leitura</HeroCardMetas>
                </a>
              </HeroCardContent>
            </HeroCard>
          </CarouselItem>
          <CarouselItem>
            <HeroImageContainer href="#">
              <Image 
                src="https://squad-swift.raccoon-stage.com/imgs/hero.png"
                alt="{alt}"
                title="{title}"
                layout="fill"
                className={Style.BackgroundImage}
              />
            </HeroImageContainer>
            <HeroCard>
              <HeroCardImage href="">
                <Image 
                  src="https://squad-swift.raccoon-stage.com/imgs/hero.png"
                  alt="{alt}"
                  title="{title}"
                  layout="fill"
                />
              </HeroCardImage>
              <HeroCardContent>
                <HeroCardCategory>Hiperconvergência</HeroCardCategory>
                <a href="">
                  <HeroCardTitle>Conheça o potencial da hiperconvergência no gerenciamento de TI</HeroCardTitle>
                  <HeroCardMetas>18 de agosto, 2020</HeroCardMetas>
                  <HeroCardMetas> | </HeroCardMetas>
                  <HeroCardMetas>9 min de leitura</HeroCardMetas>
                </a>
              </HeroCardContent>
            </HeroCard>
          </CarouselItem>
        </Slider>
      </SectionHero>
    );
}

export default Hero;
