import React from 'react'
import styled from 'styled-components'
import BusinessCenter from '@material-ui/icons/BusinessCenter'
import SchoolIcon from '@material-ui/icons/School'

import { InnerLayout } from '../styles/Layouts'
import SmallTitle from './SmallTitle'
import Title from './Title'
import ResumeItem from './ResumeItem'

interface Props { }

const Resume: React.FC<Props> = () => {
    const briefcase = <BusinessCenter />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'Resume'} />
            <InnerLayout>
                <div className='small-title'>
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem
                        year={'2015 - 2020'}
                        title={'Computer Science'}
                        subTitle={'Sussex University'}
                        text={
                            `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Tenetur ut dolore voluptatem iste quibusdam voluptate dolorum ipsum sequi omnis accusamus.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Tenetur ut dolore voluptatem iste quibusdam voluptate dolorum ipsum sequi omnis accusamus.`
                        }
                    />
                    <ResumeItem
                        year={'2020 - Present'}
                        title={'Full Stack Developer'}
                        subTitle={'JSR Group'}
                        text={
                            `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Tenetur ut dolore voluptatem iste quibusdam voluptate dolorum ipsum sequi omnis accusamus.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Tenetur ut dolore voluptatem iste quibusdam voluptate dolorum ipsum sequi omnis accusamus.`
                        }
                    />
                    <ResumeItem
                        year={'2022 - Present'}
                        title={'UX/UI Designer'}
                        subTitle={'JSR Group'}
                        text={
                            `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Tenetur ut dolore voluptatem iste quibusdam voluptate dolorum ipsum sequi omnis accusamus.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Tenetur ut dolore voluptatem iste quibusdam voluptate dolorum ipsum sequi omnis accusamus.`
                        }
                    />
                </div>
                <div className='small-title u-small-title-margin'>
                    <SmallTitle icon={school} title={'School Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem
                        year={'2015 - 2020'}
                        title={'Computer Science'}
                        subTitle={'Sussex University'}
                        text={
                            `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Tenetur ut dolore voluptatem iste quibusdam voluptate dolorum ipsum sequi omnis accusamus.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Tenetur ut dolore voluptatem iste quibusdam voluptate dolorum ipsum sequi omnis accusamus.`
                        }
                    />
                    <ResumeItem
                        year={'2020 - Present'}
                        title={'Full Stack Developer'}
                        subTitle={'JSR Group'}
                        text={
                            `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Tenetur ut dolore voluptatem iste quibusdam voluptate dolorum ipsum sequi omnis accusamus.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Tenetur ut dolore voluptatem iste quibusdam voluptate dolorum ipsum sequi omnis accusamus.`
                        }
                    />
                    <ResumeItem
                        year={'2022 - Present'}
                        title={'UX/UI Designer'}
                        subTitle={'JSR Group'}
                        text={
                            `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Tenetur ut dolore voluptatem iste quibusdam voluptate dolorum ipsum sequi omnis accusamus.
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Tenetur ut dolore voluptatem iste quibusdam voluptate dolorum ipsum sequi omnis accusamus.`
                        }
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`
export default Resume