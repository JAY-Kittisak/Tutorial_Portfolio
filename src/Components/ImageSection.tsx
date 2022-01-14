import React from "react";
import styled from "styled-components";
import logo from "../assets/image/jay.jpg";
import PrimaryButton from "./PrimaryButton";

interface Props { }

const ImageSection: React.FC<Props> = () => {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={logo} alt="" />
            </div>
            <div className="right-content">
                <h4>
                    I am <span>Lorem Ipsum</span>
                </h4>
                <p className="paragraph">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
                    incidunt, inventore suscipit repudiandae ut cumque eum sapiente
                    officiis minima cupiditate ipsam fugiat ducimus voluptatibus
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age </p>
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Location </p>
                        <p>Service </p>
                    </div>
                    <div className="info">
                        <p>: Lorem Ipsum</p>
                        <p>: 36</p>
                        <p>: Thai </p>
                        <p>: Thai, English </p>
                        <p>: Bangkok, Thailand </p>
                        <p>: IT Developer </p>
                    </div>
                </div>
                <PrimaryButton title={"Download Cv"} />
            </div>
        </ImageSectionStyled>
    );
};

const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    .left-content{
        width: 100%;
        img{
            width: 90%;
            object-fit: cover;
        }
    }
    .right-content{
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
