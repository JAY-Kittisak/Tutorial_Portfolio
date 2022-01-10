import React from 'react'
import styled from 'styled-components'

import { MainLayout } from '../styles/Layouts'
import ImageSection from '../Components/ImageSection'
import ServicesSection from '../Components/ServicesSection'
import Title from '../Components/Title'
import ReviewsSections from '../Components/ReviewsSections'

interface Props { }

const AboutPage: React.FC<Props> = () => {
    return (
        <MainLayout>
            <AboutStyled>
                <Title title={'About Me'} span={'About Me'} />
                <ImageSection />
                <ServicesSection />
                <ReviewsSections />
            </AboutStyled>
        </MainLayout>
    )
}

const AboutStyled = styled.section`

`

export default AboutPage