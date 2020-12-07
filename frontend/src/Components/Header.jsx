import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    div {
        background-color: white;
    }
`;

const Logo = styled.div`
    // background-color: white;
    div {
        // border: 1px solid red;
    }
`;

const BigImg = styled.img`
    object-fit: cover;
    width: 100%;
    max-height: 500px;
    border-right: 3px solid white;
    border-top: 3px solid white;
`;

const SmallImg = styled.img`
    max-height: 166px;
    object-fit: cover;
    width: 100%;
    border-top: 3px solid white;
`;

const Header = ({ coverImg }) => {
    return (
        <Wrapper>
            <div className='container'>
                <div className='row'>
                    <Logo className='col display-1 font-weight-bolder text-center p-5'>
                        <u>
                            {' '}
                            <em style={{ background: 'white' }}>
                                Blog UI
                            </em>{' '}
                        </u>
                    </Logo>
                </div>
                <div className='row'>
                    <Link
                        to={{
                            pathname: `/`,
                        }}
                        className='btn col-1'
                    >
                        <p className='font-italic font-weight-normal text-capitalize  mb-0 h5'>
                            Home
                        </p>
                    </Link>
                    <Link
                        to={{
                            pathname: `/NewPosts`,
                        }}
                        className='btn col-2'
                    >
                        <p className='font-italic font-weight-normal text-capitalize  mb-0 h5'>
                            New Blog
                        </p>
                    </Link>
                </div>
                <div className='row'>
                    <div className='col-8 p-0'>
                        <BigImg src={coverImg[0]} alt='blog' />
                    </div>
                    <div className='col-4 p-0'>
                        <div className='row-cols-1'>
                            {coverImg.map((img, i) =>
                                i !== 0 ? (
                                    <div className='col p-0'>
                                        <SmallImg src={img} alt='blog' />
                                    </div>
                                ) : null,
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Header;
