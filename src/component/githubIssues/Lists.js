import React, {useState} from 'react';
import List from "component/githubIssues/List";
import Pagination from "component/Pagination";
import useFetch from "hooks/useFetch";
import Filter from "component/githubIssues/Filter";
import {GithubIssuesContext} from "context/GithubIssuesContext";
import useGithubIssuesFilterStore from "store/useGithubIssuesFilterStore";

function Lists(props) {

    const filter = useGithubIssuesFilterStore((state) => state.filter)
    const [page, setPage] = useState(1);
    const totalRecords = 100;
    let perPage = 10;
    let url = `https://api.github.com/repos/laravel/laravel/issues?page=${1}&per_page=${perPage}&state=${filter}`;
    // let url = `https://api.github.com/repos/laravel/laravel/issues?page=${page}&per_page=${perPage}&state=closed`;

    const [lists, loading] = useFetch(url);

    return (
        <>
            {loading && (
                <p>Loading...</p>
            )}

            {lists &&
                <div className={`bg-gray-200 py-4 px-3`}>
                    <h1 className={`text-sky-600 font-semibold`}>laravel/laravel</h1>
                    <div className={`flex item-center space-x-3 mt-1`}>
                        <GithubIssuesContext.Provider value={{setPage}}>
                            <Filter/>
                        </GithubIssuesContext.Provider>
                    </div>
                </div>
            }

            {lists && lists.map((list, index) => (
                <List
                    filter={filter}
                    list={list}
                    key={index}
                />
            ))}

            {lists &&
                <div className={`pt-5`}>
                    <Pagination
                        setCurrentPage={setPage}
                        page={page}
                        perPage={perPage}
                        total={totalRecords}
                    />
                </div>
            }

        </>
    );
}

export default Lists;