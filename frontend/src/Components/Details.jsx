import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import axios from 'axios';
import AboutMe from './AboutMe';
import Header from './Header';

const Wrapper = styled.div`
    button {
        border-radius: 0px;
        border: 2px solid darkGray;
        background-color: white;
    }
    img {
        object-fit: cover;
    }
`;

const PostContainer = styled.div`
    div {
        background-color: white;
    }
    p {
        background-color: white;
    }
`;

const Details = () => {
    let { id } = useParams();
    const [data, setData] = useState();
    const [author, setAuthor] = useState([]);
    const [comments, setComments] = useState();
    const [joiningDate, setJoinedDate] = useState('');
    const [postDate, setPostDate] = useState('');
    let coverImg = [
        'http://lorempixel.com/640/480/fashion',
        'http://lorempixel.com/640/480/sports',
        'http://lorempixel.com/640/480/cats',
        'http://lorempixel.com/640/480/peoples',
    ];

    useEffect(() => {
        let config = {
            method: 'get',
            url: `https://5fbcebea3f8f90001638c727.mockapi.io/blog/v1/posts/${id}`,
            headers: {},
        };

        axios(config)
            .then(function (response) {
                setData(response.data);
                let temp1 = new Date(response.data.dateCreated);
                setPostDate(temp1.toDateString());
                setAuthor(response.data.author[0]);
                let temp2 = new Date(response.data.author[0].dateCreated);
                setJoinedDate(temp2.toDateString());
            })
            .catch(function (error) {
                console.log(error.message);
            });
    }, []);

    useEffect(() => {
        let config = {
            method: 'get',
            url: `https://5fbcebea3f8f90001638c727.mockapi.io/blog/v1/posts/${id}/comments`,
            headers: {},
        };

        axios(config)
            .then(function (response) {
                console.log(response.data[0]);
                setComments(response.data[0]);
                console.log(response.data[0].comment);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    return (
        <>
            <div className='mt-5 mb-5'>
                <Header coverImg={coverImg} />
            </div>
            <Wrapper className='mt-4 mb-4'>
                <div className='container'>
                    <div className='row'>
                        <PostContainer className='col-8 py-3'>
                            <div className='row-cols-1'>
                                <div className='col py-2'>
                                    <div className='row'>
                                        <div className='col-2 p-0'>
                                            <img
                                                src={`https://randomuser.me/api/portraits/women/${Math.floor(
                                                    Math.random() *
                                                    Math.floor(25),
                                                )}.jpg`}
                                                alt='avatar'
                                            />
                                        </div>
                                        <div className='col p-0'>
                                            <div className='row-cols-1'>
                                                <div className='col py-3'>
                                                    <p className='font-italic font-weight-bold text-capitalize text-left mb-0 h3'>
                                                        {author.name}
                                                        {/* name */}
                                                    </p>
                                                </div>
                                                <div className='col'>
                                                    <b>Bio: </b> {author.bio}
                                                </div>
                                                <div className='col'>
                                                    <b> Joined: </b>{' '}
                                                    {joiningDate}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />

                                <div className='col'>
                                    <p className='font-italic font-weight-bold text-capitalize text-center mb-0 h4 p-3'>
                                        {data && data.title}
                                        <br />
                                        <small
                                            className='text-center'
                                            style={{ fontSize: '15px' }}
                                        >
                                            created on: {postDate}{' '}
                                        </small>
                                    </p>
                                </div>
                                <hr />
                                <div className='col pb-4'>
                                    <p className='font-italic font-weight-normal text-capitalize text-left mb-0 h5'>
                                        {data && data.content}
                                    </p>
                                </div>
                                <hr />
                                <div className='col pb-2'>
                                    <p className='font-italic font-weight-bold text-capitalize text-left mb-0 h5'>
                                        Comments:
                                        <hr />
                                        <p className='font-italic font-weight-normal text-capitalize text-left mb-0 h6'>
                                            <strong>
                                                {comments && comments.author}:{' '}
                                            </strong>{' '}
                                            {comments && comments.comment}
                                        </p>
                                    </p>
                                </div>
                                <hr />
                                <div className='col pb-4'>
                                    <div className='row'>
                                        <div className='col-10'>
                                            <input
                                                type='text'
                                                placeholder='Type a Comment here...'
                                                className='form-control'
                                            />
                                        </div>
                                        <button className='btn col mr-3'>
                                            Post
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </PostContainer>
                        <div className='col-4 mt-2'>
                            <AboutMe />
                        </div>
                    </div>
                </div>
            </Wrapper>
        </>
    );
};

export default Details;
