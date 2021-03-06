import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts'
import ReviewItem from './ReviewItem'
import Title from './Title'

interface Props { }

const ReviewsSections: React.FC<Props> = () => {
    return (
        <ReviewsStyled>
            <Title title={'Reviews'} span={'Reviews'} />
            <InnerLayout>
                <div className="reviews">
                    <ReviewItem text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio deleniti obcaecati nam similique.'} />
                    <ReviewItem text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio deleniti obcaecati nam similique. Optio deleniti obcaecati nam similique.'} />
                </div>
            </InnerLayout>
        </ReviewsStyled>
    )
}

const ReviewsStyled = styled.section`
    .reviews{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`
export default ReviewsSections