import React, {useEffect, useState} from 'react';
import Check from "component/svg/Check";
import Xcirle from "component/svg/Xcirle";
import Chat from "component/svg/Chat";
import useFetch from "hooks/useFetch";
import Pagination from "component/Pagination";


function GithubIssue(props) {

    const [page,setPage] = useState(1);
    const totalRecords = 10;
    let perPage = 10;
    let totalPages = Math.ceil(totalRecords / perPage)
    let url = `https://api.github.com/repos/laravel/laravel/issues?page=${1}&per_page=${perPage}&state=closed`;
    // let url = `https://api.github.com/repos/laravel/laravel/issues?page=${page}&per_page=${perPage}&state=closed`;

    // const lists = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    const [lists, loading] = useFetch(url);

    useEffect(() => {
        console.log(lists)

    }, [lists])

    return (

        <div className={`max-w-4xl mx-auto`}>

            <div className={`bg-white rounded shadow`}>
                <div className={`bg-gray-200 py-4 px-3`}>
                    <h1 className={`text-sky-600 font-semibold`}>facebook/create-react-app</h1>
                    <div className={`flex item-center space-x-3 mt-1`}>
                        <div className={`flex space-x-1 items-center`}>
                            <p>
                                <Xcirle className={`h-5 w-5 text-green-600`}/>
                            </p>
                            <button>
                                <p className={`font-bold text-sm`}>
                                    <span className={`mr-0.5`}>99</span>
                                    open
                                </p>
                            </button>
                        </div>


                        <div className={`flex space-x-1 items-center`}>
                            <p>
                                <Check className={`h-5 w-5 text-red-600`}/>
                            </p>
                            <button>
                                <p className={`text-sm`}>
                                    <span className={`mr-0.5`}>99</span>
                                    closed
                                </p>
                            </button>
                        </div>

                    </div>
                </div>

                {lists && lists.map((list, index) => (
                        <div
                            key={index}
                            className={`flex items-center justify-between p-3 border-b-2 border-gray-200 mb-1`}>
                            <div className={`flex items-start space-x-2`}>
                                <p>
                                    <Xcirle className={`h-5 w-5 text-green-600`}/>
                                </p>

                                <div>
                                    <p className={`font-bold text-gray-900`}>
                                        <a href={`${list.html_url}`}>
                                            {list.title}
                                        </a>
                                    </p>
                                    <p className={`text-gray-400 tracking-tight`}>
                                        #{list.number} opened 10 hours ago by {}
                                        <a className={`text-sky-400`} href={`${list.user.html_url}`}>
                                            {list.user.login}
                                        </a>
                                    </p>
                                </div>
                            </div>

                            {
                                list.comments > 0 && (
                                    <div className={`flex items-center space-x-1`}>
                                        <p>
                                            <Chat className={`h-5 w-5 text-gray-500`}/>
                                        </p>
                                        <p>{list.comments}</p>
                                    </div>
                                )
                            }

                        </div>
                    )
                )}


                <div className={`pt-5`}>
                    <Pagination totalPages={totalPages} setCurrentPage={setPage} page={page}/>
                </div>
            </div>

        </div>
    );
}

export default GithubIssue;