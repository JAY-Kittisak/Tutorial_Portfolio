import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonWrapper, HeroButton, Button } from './HeroStyles';

interface Props { }

const Hero: React.FC<Props> = () => {
    return (
        <ButtonWrapper>
            <Link to="login">
                <Button>เข้าสู่ระบบ</Button>
            </Link>
            <HeroButton>Find More</HeroButton>
        </ButtonWrapper>
    );
};
export default Hero;