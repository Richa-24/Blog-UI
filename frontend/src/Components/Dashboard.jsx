import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Posts from './Posts';
import AboutMe from './AboutMe';
import Header from './Header';

const Wrapper = styled.div`
    i {
        background-color: white;
        // border: 1px solid red;
    }
    button {
        border-radius: 0px;
        border: 2px solid darkGray;
        background-color: white;
    }
`;

const Dashboard = () => {
    const [page, setPage] = useState(1);
    const [posts, setPosts] = useState([]);
    const [coverImg, setCoverImg] = useState([]);
    let temp = [];

    useEffect(() => {
        getPosts(page);
    }, []);

    useEffect(() => {
        getPosts(page);
    }, [page]);

    const getPosts = (pageNo) => {
        var config = {
            method: 'get',
            url: `https://5fbcebea3f8f90001638c727.mockapi.io/blog/v1/posts?page=${pageNo}&limit=4`,
            headers: {},
        };

        axios(config)
            .then(function (response) {
                console.log(response.data);
                setPosts(response.data);
                response.data.map((item) => temp.push(item.coverImage));
                setCoverImg(temp);
                console.log(coverImg);
            })
            .catch(function (error) {
                console.log(error.message);
            });
    };

    return (
        <>
            <div className='mt-5 mb-5'>
                <Header coverImg={coverImg} />
            </div>
            <Wrapper className='mt-4 mb-4'>
                <div className='container'>
                    <div className='row'>
                        {/* Posts */}
                        <div className='col-8'>
                            <div className='row-cols-1 '>
                                {posts &&
                                    posts.map((post) => (
                                        <div className='col p-0'>
                                            <Posts key={post.id} post={post} />
                                        </div>
                                    ))}

                                <div className='col'>
                                    <div className='row justify-content-between'>
                                        {page === 1 ? (
                                            <button
                                                type='button'
                                                className='btn col-3 font-weight-bold'
                                                disabled
                                            >
                                                <i className='fas fa-chevron-circle-left'></i>{' '}
                                                Newer Post
                                            </button>
                                        ) : (
                                                <button
                                                    type='button'
                                                    className='btn col-3 font-weight-bold'
                                                    onClick={() =>
                                                        setPage(page - 1)
                                                    }
                                                >
                                                    <i className='fas fa-chevron-circle-left'></i>{' '}
                                                Newer Post
                                                </button>
                                            )}
                                        <button
                                            type='button'
                                            className='btn col-3 font-weight-bold'
                                            onClick={() => setPage(page + 1)}
                                        >
                                            Older Posts{' '}
                                            <i className='fas fa-arrow-circle-right'></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-4 mt-2'>
                            <AboutMe />
                        </div>
                    </div>
                </div>
            </Wrapper>
        </>
    );
};

export default Dashboard;
