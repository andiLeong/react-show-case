import React from 'react';
import useFetch from "./hooks/useFetch";

function Redit(props) {

    const [posts,isLoading] = useFetch('https://www.reddit.com/r/aww.json');

    return (
        <div>
            {isLoading &&
                <p>loading...</p>
            }

            {posts && (
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
        </div>
    );
}

export default Redit;