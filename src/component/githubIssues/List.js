import React from 'react';
import moment from 'moment';
import Xcirle from 'component/svg/Xcirle';
import Check from 'component/svg/Check';
import Chat from 'component/svg/Chat';
import { NavLink } from 'react-router-dom';

function List({ list, filter }) {
    return (
        <div
            className={`flex items-center justify-between p-3 border-b-2 border-gray-200 mb-1`}
        >
            <div className={`flex items-start space-x-2`}>
                <p>
                    {filter === 'open' ? (
                        <Xcirle className={`h-5 w-5 text-green-600`} />
                    ) : (
                        <Check className={`h-5 w-5 text-red-600`} />
                    )}
                </p>

                <div>
                    <p className={`font-bold text-gray-900`}>
                        <NavLink to={`/github-issues/${list.number}`}>
                            {list.title}
                        </NavLink>
                    </p>
                    <p className={`text-gray-400 tracking-tight`}>
                        #{list.number} opened{' '}
                        {moment(list.created_at).fromNow()} by {}
                        <a
                            className={`text-sky-400`}
                            href={`${list.user.html_url}`}
                        >
                            {list.user.login}
                        </a>
                    </p>
                </div>
            </div>

            {list.comments > 0 && (
                <div className={`flex items-center space-x-1`}>
                    <p>
                        <Chat className={`h-5 w-5 text-gray-500`} />
                    </p>
                    <p>{list.comments}</p>
                </div>
            )}
        </div>
    );
}

export default List;
