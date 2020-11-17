import { useState } from 'react'
import { Section } from './styles'
import { SectionTitle, Separator } from "../../styles/common"
import VerticalCard from "../VerticalCard";
import { PostWrapper } from './styles';

const SeeToo = ({ cards }) => {    
    const [specialBackground, setspecialBackground] = useState(false);

    return (
        <Section className={specialBackground ? 'specialBackground padding-container' : 'padding-container'}>
            <SectionTitle>Postagens recentes</SectionTitle>
            <Separator></Separator>
            <PostWrapper
            onMouseOver={() => setspecialBackground(true)} 
            onMouseOut={() => setspecialBackground(false)}>
                {cards.map((card, index) =>
                    <VerticalCard key={index} 
                     />
                )}
            </PostWrapper>
        </Section>
    )
}

export default SeeToo