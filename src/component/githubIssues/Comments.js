import React from 'react';
import { useQuery } from '@tanstack/react-query';
import moment from 'moment';

function Comments({ number }) {
    const {
        isLoading,
        isSuccess,
        data: comments,
    } = useQuery([`comment:${number}`], fetchIssue);

    function fetchIssue() {
        return fetch(
            `https://api.github.com/repos/laravel/laravel/issues/${number}/comments`
        ).then(response => response.json());
    }

    return (
        <>
            {isLoading && <p>Loading...</p>}
            {isSuccess &&
                comments &&
                comments.map((comment, index) => (
                    <div key={index} className={`flex space-x-3 mt-4 `}>
                        <div>
                            <a href={comment.user.html_url}>
                                <img
                                    className={`w-10 border border-white border-2 rounded-full `}
                                    src={comment.user.avatar_url}
                                    alt=""
                                />
                            </a>
                        </div>
                        <div className={`ml-10 flex-1`}>
                            <div
                                className={`rounded-t flex items-center bg-gray-200 p-2`}
                            >
                                <p className={`font-bold mr-1`}>
                                    {comment.user.login}{' '}
                                </p>
                                <p>
                                    commented{' '}
                                    {moment(comment.created_at).fromNow()}
                                </p>
                            </div>
                            <div className={`bg-white p-4 rounded-b`}>
                                <p className={``}>{comment.body}</p>
                            </div>
                        </div>
                    </div>
                ))}
        </>
    );
}

export default Comments;
