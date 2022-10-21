import React from 'react';
import useFetch from './hooks/useFetch';

function JsonHolder(props) {
    const [posts, isLoading] = useFetch(
        'https://jsonplaceholder.typicode.com/posts'
    );

    return (
        <div>
            {isLoading && <p>loading...</p>}

            {posts && (
                <ul>
                    {posts.map(post => (
                        <li key={post.id}>
                            <a href={`/`}>{post.title}</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default JsonHolder;
