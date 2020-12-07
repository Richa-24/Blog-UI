import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    div {
        background-color: white;
        // border: 1px solid red;
    }
    img {
        background-color: white;
        object-fit: fit;
        width: 100%;
    }
    p {
        background-color: white;
    }
    .link {
        border-radius: 0px;
        border: 2px solid darkGray;
        background-color: white;
    }
`;

const Posts = (props) => {
    const [date, setDate] = useState('');
    const { post } = props;
    console.log(post);

    useEffect(() => {
        let temp = new Date(post.dateCreated);
        setDate(temp.toDateString());
    }, []);

    return (
        <Wrapper className='my-3'>
            {/* <h1>Posts</h1> */}
            <div className='container p-3'>
                <div className='row'>
                    <div className='col-3'>
                        <img src={post.coverImage} alt='coverImage' />
                    </div>
                    <div className='col'>
                        <div className='row-cols-1'>
                            <div className='col px-0 pb-2'>
                                <p className='font-italic font-weight-bold text-capitalize text-left mb-0 h4'>
                                    {post.title}
                                </p>
                            </div>
                            <div className='col px-0 pb-2'>
                                <p className='text-left text-wrap h5 mb-0'>
                                    {post.content}
                                </p>
                            </div>
                            <div className='col'>
                                <div className='row justify-content-between'>
                                    <div className='col-md-auto pl-0'>
                                        {date}
                                    </div>
                                    <Link
                                        to={{
                                            pathname: `/posts/${post.id}`,
                                        }}
                                        type='button'
                                        className='btn btn-sm col-3 font-weight-bold link'
                                    >
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Posts;
