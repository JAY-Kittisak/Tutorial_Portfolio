import React from 'react'
import styled from 'styled-components'
import GitHub from '@material-ui/icons/GitHub'
import Pinterest from '@material-ui/icons/Pinterest'

interface Props {
    menuItem: Array<{
        id: number;
        category: string;
        image: string;
        link1: string;
        link2: string;
        title: string;
        text: string;
    }>
}

const Menu: React.FC<Props> = ({ menuItem }) => {
    return (
        <MenuItemStyled>
            {
                menuItem.map((item) => {
                    return (
                        <div key={item.id} className='grid-item'>
                            <div className="portfolio-content">
                                <div className="portfolio-image">
                                    <img src={item.image} alt="" />
                                    <ul>
                                        <li>
                                            <a href={item.link1}>
                                                <GitHub />
                                            </a>
                                        </li>
                                        <li>
                                            <a href={item.link2}>
                                                <Pinterest />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <h6>{item.title}</h6>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    )
                })
            }
        </MenuItemStyled>
    )
}

const MenuItemStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    .grid-item{
        .portfolio-content{
            display: block;
            position: relative;
            h6{
                font-size: 1.5rem;
            }
            img{
                width: 100%;
            }
            ul{
                display: none;
            }
        }
    }
`
export default Menu