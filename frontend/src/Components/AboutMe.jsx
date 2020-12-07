import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    div {
        background-color: white;
    }
    img {
        background-color: white;
        object-fit: fit;
    }
    p {
        background-color: white;
    }
    h5 {
        background-color: white;
    }
    h3 {
        background-color: white;
    }
`;

const AboutMe = () => {
    return (
        <>
            <div className='row-cols-1'>
                <Wrapper className='col'>
                    <div>
                        <h3 className='text-center mt-2'>ABOUT ME</h3>
                    </div>
                    <div className='card'>
                        <img
                            src='https://avatars3.githubusercontent.com/u/63995194?s=460&u=26f45b5e33912d4b51438eb5628a0a13f1fcb989&v=4'
                            className='card-img-top'
                            alt='me'
                        />
                        <div className='card-body'>
                            <h5 className='card-title'>
                                Hello! I am Richa Singh.
                            </h5>
                            <p className='card-text'>
                                I’m a passionate Full Stack Developer trained in
                                FrontEnd & BackEnd Development, Data Structures
                                and Algorithms at Masai School, a military style
                                intensive bootcamp.
                            </p>
                        </div>
                    </div>
                </Wrapper>
            </div>
        </>
    );
};

export default AboutMe;
