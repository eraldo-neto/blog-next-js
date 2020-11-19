import Image from 'next/image'
import { HeroCard, HeroCardContent, CarouselItem, HeroImageContainer, HeroCardImage, HeroCardCategory, HeroCardTitle, HeroCardMetas, SectionHero } from './styles';
import Style from './style.module.css'
import Slider from "react-slick"

const Hero = ({ cards }) => {  
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
        {cards.map((card, index) =>
          <CarouselItem key={index}>
            <HeroImageContainer href={card.homeHeroPost.link}>
              <Image 
                src={card.homeHeroPost.featuredImage.node.mediaItemUrl}
                alt="{alt}"
                title="{title}"
                layout="fill"
                className={Style.BackgroundImage}
              />
            </HeroImageContainer>
            <HeroCard>
              <HeroCardImage href="">
                <Image 
                  src={card.homeHeroPost.featuredImage.node.mediaItemUrl}
                  alt="{alt}"
                  title="{title}"
                  layout="fill"
                />
              </HeroCardImage>
              <HeroCardContent>
                <HeroCardCategory href={card.homeHeroPost.categories.nodes[0].link}>{card.homeHeroPost.categories.nodes[0].name}</HeroCardCategory>
                <a href={card.homeHeroPost.link}>
                  <HeroCardTitle>{card.homeHeroPost.title}</HeroCardTitle>
                  <HeroCardMetas>{card.homeHeroPost.date}</HeroCardMetas>
                  <HeroCardMetas> | </HeroCardMetas>
                  <HeroCardMetas>9 min de leitura</HeroCardMetas>
                </a>
              </HeroCardContent>
            </HeroCard>
          </CarouselItem>
        )}
      </Slider>
    </SectionHero>
  );
}

export default Hero;
