import React from "react";
import styled from "styled-components";

import { InnerLayout } from "../styles/Layouts";
import ServiceCard from "./ServiceCard";
import Title from "./Title";
import design from '../assets/svg/design.svg'
import intelligence from '../assets/svg/intelligence.svg'
import gameDev from '../assets/svg/game-dev.svg'

interface Props { }

const ServicesSection: React.FC<Props> = () => {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={"Services"} span={"services"} />
                <div className="services">
                    <ServiceCard
                        image={design}
                        title={"Web Design"}
                        paragraph={
                            "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Sit et, voluptatibus vitae fuga aperiam numquam! Animi odit iure."
                        }
                    />
                    <ServiceCard
                        image={intelligence}
                        title={"Artificial Design"}
                        paragraph={
                            "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Sit et, voluptatibus vitae fuga aperiam numquam! Animi odit iure."
                        }
                    />
                    <ServiceCard
                        image={gameDev}
                        title={"Game Design"}
                        paragraph={
                            "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Sit et, voluptatibus vitae fuga aperiam numquam! Animi odit iure."
                        }
                    />
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    );
};

const ServicesSectionStyled = styled.section`
    .services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
    }
`;

export default ServicesSection;
