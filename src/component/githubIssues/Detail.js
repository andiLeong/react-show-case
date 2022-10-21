import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import moment from 'moment';
import Comments from 'component/githubIssues/Comments';
import ReactMarkdown from 'react-markdown';
import MergeIcon from 'component/githubIssues/MergeIcon';

function Detail(props) {
    const params = useParams();

    const {
        isLoading,
        isSuccess,
        data: issue,
    } = useQuery([`issue:${params.id}`], fetchIssue);

    function fetchIssue() {
        return fetch(
            `https://api.github.com/repos/laravel/laravel/issues/${params.id}`
        ).then(response => response.json());
    }

    return (
        <div className={`max-w-3xl mx-auto my-18 mt-5`}>
            {isLoading && <p>loading...</p>}

            {isSuccess && issue && (
                <>
                    <div className={`pb-16 border-b border-gray-200`}>
                        <div className={`space-y-2`}>
                            <div className={`flex items-center`}>
                                <p>
                                    <MergeIcon
                                        closed={issue.closed_at !== null}
                                        merged={
                                            issue.pull_request.merged_at !==
                                            null
                                        }
                                    />
                                </p>
                                <h1
                                    className={`ml-2 font-bold text-gray-800 text-xl tracking-tight`}
                                >
                                    {issue.title}
                                </h1>
                                <span className={`ml-2 text-gray-600`}>
                                    #{params.id}
                                </span>
                            </div>
                            <div className={`flex space-x-1 text-sm`}>
                                <p className={`font-semibold`}>
                                    {issue.user.login}
                                </p>
                                <p>
                                    opened this issue{' '}
                                    {moment(issue.created_at).fromNow()}
                                </p>
                            </div>
                        </div>

                        <div className={`flex space-x-3 mt-4 `}>
                            <div>
                                <a href={issue.user.html_url}>
                                    <img
                                        className={`w-10 border border-white border-2 rounded-full`}
                                        src={issue.user.avatar_url}
                                        alt=""
                                    />
                                </a>
                            </div>
                            <div className={`ml-10 flex-1`}>
                                <div
                                    className={`rounded-t flex items-center bg-gray-200 p-2`}
                                >
                                    <p className={`font-bold mr-1`}>
                                        {issue.user.login}
                                    </p>
                                    <p>
                                        commented{' '}
                                        {moment(issue.created_at).fromNow()}
                                    </p>
                                </div>
                                <div className={`bg-white p-4 rounded-b`}>
                                    <p className={`prose lg:prose-xl`}>
                                        <ReactMarkdown children={issue.body} />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {issue.comments > 0 && (
                        <div
                            className={`space-y-12 mt-10 border-b border-b-2 pb-20`}
                        >
                            <Comments number={issue.number} />
                        </div>
                    )}
                    {issue.state === 'closed' && (
                        <div
                            className={`flex items-center mt-4 text-gray-400 space-x-1`}
                        >
                            <img
                                src={`${issue.closed_by.avatar_url}`}
                                className={`w-5 h-5 rounded-full`}
                                alt=""
                            />
                            <p className={`text-gray-800`}>
                                {issue.closed_by.login}
                            </p>
                            <span>
                                closed this {moment(issue.closed_at).fromNow()}
                            </span>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

export default Detail;
