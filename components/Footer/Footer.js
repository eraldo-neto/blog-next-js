import Image from 'next/image'
import { Menu, MenuItem, MenuWrapper, FooterWrapper, SocialMidias, Logo, Copyright } from './styles'

const Footer = ({ menus, socialNetworks, menuContact }) => {    
    
    return (
        <FooterWrapper className="padding-container">
            <MenuWrapper>
                <Logo>
                    <Image 
                        src="/images/logo.png"
                        alt="teste"
                        title="teste"
                        height={40}
                        width={167}
                        layout="fixed"
                    />
                    <SocialMidias>
                        {socialNetworks.map((socialNetwork, index) =>
                            <a href={socialNetwork.link} className="socialNet" key={index}>
                                <i dangerouslySetInnerHTML={{__html: socialNetwork.svg}} />
                            </a>
                        )}
                    </SocialMidias>
                </Logo>
                {menus.map((menu, index) =>
                    <Menu key={index}>
                        <p>{menu.title}</p>
                        <ul>
                            {menu.items.map((item, index) =>
                                <li key={index}>
                                    <MenuItem href={item.link}>
                                        {item.text}
                                    </MenuItem>
                                </li>
                            )}
                        </ul>
                    </Menu>
                )}
                <Menu className="contactMenu">
                    <p>{menuContact.title}</p>
                    <MenuItem as="div" className="contactText" dangerouslySetInnerHTML={{__html: menuContact.description}} />
                </Menu>
            </MenuWrapper>
            <Copyright>
                <p>© Copyright - Blog Next</p>
            </Copyright>
        </FooterWrapper>
    )
}

export default Footer
