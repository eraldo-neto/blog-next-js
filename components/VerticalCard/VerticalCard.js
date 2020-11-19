import { CategoryCard, TitleCard, CardMetas, CardMeta, CardContent } from "../../styles/common";
import { Card, CardImage } from "./styles";
import Image from 'next/image';

const VerticalCard = ({}) => {    

    return (
        <Card className="postCard">
            <a href="#">
                <CardImage>
                    <Image 
                        src="https://squad-swift.raccoon-stage.com/imgs/hero.png"
                        alt="{alt}"
                        width="300"
                        height="200"
                        title="{title}"
                        layout="responsive"
                    />
                </CardImage>
            </a>
            <CardContent className="cardContent">
                <CategoryCard href="{category.link}">Tecnologia e Sustentabilidade</CategoryCard>
                <a href="#">
                    <TitleCard className="titleCard">Gerenciamento de serviços de TI: organize suas demandas</TitleCard>
                </a>
                <CardMetas className="metasWrapper">
                    <CardMeta>
                        <svg id="Camada_1" data-name="Camada 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 17.98"><defs><linearGradient id="calendar-grad" x1="6.01" y1="1827.62" x2="8.23" y2="1826.08" gradientTransform="matrix(18, 0, 0, -17.98, -114.6, 32855.35)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#48e4ff"></stop><stop offset="1" stopColor="#7a1ea1"></stop></linearGradient></defs><path id="Caminho_135" data-name="Caminho 135" className="cls-1-calendar" d="M20.68,7.4H19.06V6.56a.56.56,0,0,0-1.12,0V7.4H10.06V6.56a.56.56,0,0,0-1.12,0V7.4H7.32A2.32,2.32,0,0,0,5,9.72v12A2.32,2.32,0,0,0,7.32,24H20.68A2.32,2.32,0,0,0,23,21.67v-12A2.32,2.32,0,0,0,20.68,7.4Zm1.2,14.27a1.2,1.2,0,0,1-1.2,1.2H7.32a1.2,1.2,0,0,1-1.2-1.2V12.36a.18.18,0,0,1,.18-.18H21.7a.18.18,0,0,1,.18.18h0Z" transform="translate(-5 -6.02)"></path></svg>
                        <p>15 de outubro, 2020</p>
                    </CardMeta>
                    <CardMeta>
                        <svg id="Camada_1" data-name="Camada 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><defs><clipPath id="clip-path" transform="translate(-6.41 -5.56)"><path className="cls-1-clock" d="M15.41,5.56a9,9,0,0,1,9,9,9.67,9.67,0,0,1-.08,1.2,9,9,0,1,1-8.92-10.2Z"></path></clipPath><linearGradient id="Gradiente_sem_nome_3" x1="8.01" y1="1826.37" x2="5.97" y2="1827.64" gradientTransform="matrix(18, 0, 0, -18, -114.6, 32898.04)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#7a1ea1"></stop><stop offset="1" stopColor="#48e4ff"></stop></linearGradient><linearGradient id="clock-grad" x1="18.62" y1="1866.84" x2="16.58" y2="1868.1" gradientTransform="matrix(6.27, 0, 0, -7.08, -94.7, 13237.84)"></linearGradient></defs><g className="cls-2-clock"><g id="Grupo_de_máscara_30" data-name="Grupo de máscara 30"><g id="clock"><g id="Grupo_1184" data-name="Grupo 1184"><path id="Caminho_132" data-name="Caminho 132" className="cls-3-clock" d="M15.41,5.56a9,9,0,1,0,9,9A9,9,0,0,0,15.41,5.56Zm0,16.09a7.09,7.09,0,1,1,7.08-7.09h0A7.1,7.1,0,0,1,15.41,21.65Z" transform="translate(-6.41 -5.56)"></path><path id="Caminho_133" data-name="Caminho 133" className="cls-4-clock" d="M20.1,14.28h-4V9.42a.75.75,0,0,0-1.49,0V15a.74.74,0,0,0,.74.74H20.1a.74.74,0,0,0,0-1.48Z" transform="translate(-6.41 -5.56)"></path></g></g></g></g></svg>
                        <p>10 min de leitura</p>
                    </CardMeta>
                </CardMetas>
            </CardContent>
        </Card>
    )
}

export default VerticalCard