import React from 'react'
import styled from 'styled-components'
import { MainLayout } from '../styles/Layouts'

interface Props { }

const AboutPage: React.FC<Props> = () => {
    return (
        <MainLayout>
            <AboutStyled>
                <h1>Helo About apde</h1>
            </AboutStyled>
        </MainLayout>
    )
}

const AboutStyled = styled.section`

`

export default AboutPage