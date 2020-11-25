import Image from 'next/image'
import { useState } from 'react'
import { BackgroundHeader, BurguerIcon, DynamicSearch, HeaderContainer, MenuItem, OverlayBackground, SidebarMenu } from './styles'
import Style from './style.module.css'
import { Button } from '../../styles/common'
import Input from '../Input'
import { useInView } from 'react-intersection-observer'

const Header = ({ menuList, socialNetworks, searchIcon }) => {    
    const [menuOpen, setmenuOpen] = useState(false);
    const [searchOpen, setsearchOpen] = useState(false);
    const [anchorHeaderRef, anchorHeaderInView] = useInView( {  threshold : 1 } );

    function openSearch() {
        setsearchOpen(!searchOpen);
        setmenuOpen(false);
    }

    function openMenu() {
        setsearchOpen(false);
        setmenuOpen(!menuOpen);
    }

    function closeStates() {
        setsearchOpen(false);
        setmenuOpen(false);
    }
    
    return (
        <header className={Style.header}>
            <span ref={anchorHeaderRef} className={Style.anchorHeader}></span>
            <BackgroundHeader className={[Style.backgroundHeader, anchorHeaderInView ? '' : 'translate', menuOpen ? 'translate' : '', searchOpen ? 'translate' : ''].join(' ')}/>
            <HeaderContainer>
                <Image 
                    src="/images/logo.png"
                    alt="teste"
                    title="teste"
                    height={40}
                    width={167}
                />
                <div className={Style.menuRight}> 
                    <Button>
                        Newsletter
                    </Button>
                    <i className={searchOpen ? Style.hidden : ''} dangerouslySetInnerHTML={{__html: searchIcon}} onClick={openSearch} />
                    <i className={searchOpen ? '' : Style.hidden} onClick={openSearch}>
                        <BurguerIcon className="open" />
                    </i>
                    <div className={Style.burguerIconWrapper} onClick={openMenu}>
                        <BurguerIcon className={menuOpen ? 'open' : ''} />
                    </div>
                </div>
                
            </HeaderContainer>
            <div>
                <SidebarMenu className={menuOpen ? 'open' : ''}>
                    <div className={[Style.menuContainer, 'container'].join(' ')}>
                        <Input className={Style.input} placeholder="Pesquisar" name="s"/>
                        <div className={Style.menuWrapper}>
                            <ul className={Style.menuList}>
                                {menuList.map((menuItem, index) =>
                                    <li key={index}>
                                        <MenuItem href={menuItem.link}>
                                            {menuItem.text}
                                        </MenuItem>
                                    </li>
                                )}
                            </ul>
                        </div>
                        <div className={Style.menuBottom}>
                            <Button>
                                Newsletter
                            </Button>
                            <ul className={Style.socialNetworks}>
                                {socialNetworks.map((socialNetwork, index) =>
                                    <li key={index}>
                                        <a href={socialNetwork.link}>
                                        <i dangerouslySetInnerHTML={{__html: socialNetwork.svg}} />
                                        </a>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </SidebarMenu>
            </div>
            <DynamicSearch className={searchOpen ? 'open' : ''}>
                <Input className={Style.input} placeholder="Pesquisar" name="s"/>
            </DynamicSearch>
            <OverlayBackground className={[menuOpen ? 'show' : '', searchOpen ? 'show' : ''].join(' ')} onClick={closeStates}/>
        </header>
    )
}

export default Header
