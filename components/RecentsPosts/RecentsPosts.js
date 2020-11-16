import HorizontalCard from "../HorizontalCard";
import { SectionTitle, Separator } from "../../styles/common";
import { Section, Banner, BannerImg, TitlePostsWrapper } from "./style";
import Image from 'next/image';

const RecentsPosts = ({ cards }) => {    

    return (
        <Section className="container">
            <TitlePostsWrapper>
                <SectionTitle>Postagens recentes</SectionTitle>
                <Separator></Separator>
                {cards.map((card, index) =>
                    <HorizontalCard key={index}></HorizontalCard>
                )}
            </TitlePostsWrapper>
            <Banner>
                <a href="#">
                    <BannerImg>
                        <Image 
                            src="https://squad-swift.raccoon-stage.com/imgs/hero.png"
                            alt="{alt}"
                            title="{title}"
                            layout="fill"
                        />
                    </BannerImg>
                </a>
            </Banner>
        </Section>
    )
}

export default RecentsPosts