import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts'
import ProgressBar from './ProgressBar'
import Title from './Title'
interface Props { }


const Skills: React.FC<Props> = () => {
    return (
        <SkillsStyled>
                <Title title={'My Skills'} span={'My Skills'} />
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar title={'HTML5'} width={'70%'} text={'70%'} />
                        <ProgressBar title={'CSS3'} width={'90%'} text={'90%'} />
                        <ProgressBar title={'JAVASCRIPT'} width={'85%'} text={'85%'} />
                        <ProgressBar title={'TYPESCRIPT'} width={'75%'} text={'75%'} />
                        <ProgressBar title={'NODE.JS'} width={'70%'} text={'70%'} />
                        <ProgressBar title={'SQL'} width={'60%'} text={'60%'} />
                    </div>
            </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width:700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`
export default Skills