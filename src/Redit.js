import React from 'react';
import { useQuery } from '@tanstack/react-query'

function Redit(props) {

    // const [posts,isLoading] = useFetch('https://www.reddit.com/r/aww.json');


    const {
        data: posts,
        isLoading,
        isError,
        error,
        isSuccess,
    } = useQuery(['posts'], fetchPosts);

    function fetchPosts() {
        return fetch('https://www.reddit.com/r/aww.json').then(response =>
            response.json()
        );
    }

    return (
        <div>
            {isLoading &&
                <p>loading...</p>
            }

            {(posts && isSuccess) && (
                <ul>
                    {posts.data.children.map(post => (
                        <li key={post.data.id}>
                            <a href={`https://reddit.com${post.data.permalink}`}>
                                {post.data.title}
                            </a>
                        </li>
                    ))}
                </ul>
            )}

            {isError && (
                <p>{error.message}</p>
            )}
        </div>
    );
}

export default Redit;