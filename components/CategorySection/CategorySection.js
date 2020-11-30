import { Section } from './styles'
import { useState } from 'react'
import Image from 'next/image'
import { SectionTitle, Separator } from "../../styles/common"
import HorizontalCard from "../HorizontalCard"
import { PostWrapper, ImagesPostsWrapper, Thumbnails } from './styles'

const CategorySection = ({ cards, title }) => {    
    const [cardActive, setcardActive] = useState(0);

    return (
        <Section className="container">
            <SectionTitle>{title}</SectionTitle>
            <Separator></Separator>
            <ImagesPostsWrapper>
                <Thumbnails>
                    {cards.map((card, index) =>
                        <div key={index} className={index == cardActive ? 'thumbnailWrapper active' : 'thumbnailWrapper'}>
                            <Image 
                                className="thumbnail"
                                src={card.node.featuredImage.node.mediaItemUrl}
                                alt="{alt}"
                                width="611"
                                height="516"
                                title="{title}"
                                layout="fixed"
                            />
                        </div>
                    )}
                </Thumbnails>
                <PostWrapper>
                    {cards.map((card, index) =>
                        <HorizontalCard index={index} setcardActive={setcardActive} card={card.node} key={index} />
                    )}
                </PostWrapper>
            </ImagesPostsWrapper>
        </Section>
    )
}

export default CategorySection