import React from 'react'
import styled from 'styled-components'
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import { MainLayout, InnerLayout } from '../styles/Layouts'
import Title from '../Components/Title'
import PrimaryButton from '../Components/PrimaryButton'
import ContactItem from '../Components/ContactItem';

interface Props { }

const ContactPage: React.FC<Props> = () => {

    const phone = <PhoneIcon />
    const email = <EmailIcon />
    const address = <LocationOnIcon />

    return (
        <MainLayout>
            <Title title={'Contact'} span={'Contact'} />
            <ContactPageStyled>
                <InnerLayout className='contact-section'>
                    <div className="left-content">
                        <div className="contact-title">
                            <h4>Get In Touch</h4>
                        </div>
                        <form action="" className="form">
                            <div className="form-field">
                                <label htmlFor="name">Enter your name*</label>
                                <input type="text" id="name" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="email">Enter your name*</label>
                                <input type="email" id="email" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="subject">Enter your subject</label>
                                <input type="text" id="subject" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="text-area">Enter your Message*</label>
                                <textarea name="textarea" id="textarea" cols={30} rows={10}></textarea>
                            </div>
                            <div className="form-field f-button">
                                <PrimaryButton title={'Send Email'} />
                            </div>
                        </form>
                    </div>
                    <div className="right-content">
                        <ContactItem
                            icon={phone}
                            title={'Phone'}
                            contact1={'012-345-6789'}
                            contact2={'012-345-6789'}
                        />
                        <ContactItem
                            icon={email}
                            title={'Email'}
                            contact1={'test1@tutorial.com'}
                            contact2={'test2@tutorial.com'}
                        />
                        <ContactItem
                            icon={address}
                            title={'Address'}
                            contact1={'850/1 Soi. Ladkrabang 30/5,Ladkrabang Rd., Kwang Ladkrabang Khet Ladkrabang, Bangkok 10520 Thailand'}
                            contact2={undefined}
                        />
                    </div>
                </InnerLayout>
            </ContactPageStyled>
        </MainLayout>
    )
}

const ContactPageStyled = styled.div`
    .contact-section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        @media screen and (max-width:978px){
            grid-template-columns: repeat(1, 1fr);
            .f-button{
                margin-bottom: 3rem;
            }
        }
        .right-content{
            display: grid;
            grid-template-columns: repeat(1,1fr);
            @media screen and (max-width: 502px){
                width: 70%;
            }
        }
        .contact-title{
            h4{
                color: var(--white-color);
                padding: 1rem 0;
                font-size: 1.8rem;
            }
        }
        .form{
            width: 100%;
            @media screen and (max-width: 502px){
                width: 100%;
            }
            .form-field{
                margin-top: 2rem;
                position: relative;
                width: 100%;
                label{
                    position: absolute;
                    left: 20px;
                    top: -19px;
                    display: inline-block;
                    background-color: var(--background-dark-color);
                    padding: 0 .5rem;
                    color: inherit;
                }
                input{
                    border: 1px solid var(--border-color);
                    outline: none;
                    background: transparent;
                    height: 50px;
                    padding: 0 15px;
                    width: 100%;
                    color: inherit;
                }
                textarea{
                    background-color: transparent;
                    border: 1px solid var(--border-color);
                    outline: none;
                    color: inherit;
                    width: 100%;
                    padding: .8rem 1rem;
                }
            }
        }
    }
`
export default ContactPage