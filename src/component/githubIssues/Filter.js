import React, {useContext} from 'react';
import Check from "component/svg/Check";
import Xcirle from "component/svg/Xcirle";
import {GithubIssuesContext} from "context/GithubIssuesContext";
import useGithubIssuesFilterStore from "store/useGithubIssuesFilterStore";

function Filter(props) {
    const {setPage} = useContext(GithubIssuesContext)
    const filter = useGithubIssuesFilterStore((state) => state.filter)
    const setFilter = useGithubIssuesFilterStore((state) => state.setFilter)

    return (
        <>
            <div className={`flex space-x-1 items-center`}>
                <p>
                    <Xcirle className={`h-5 w-5 text-green-600`}/>
                </p>

                <button onClick={() => {
                    setFilter('open')
                    setPage(() => 1)
                }}>
                    <p className={`${filter === 'open' ? 'font-bold' : ''} text-sm`}>
                        <span className={`mr-0.5`}>99</span>
                        open
                    </p>
                </button>
            </div>

            <div className={`flex space-x-1 items-center`}>
                <p>
                    <Check className={`h-5 w-5 text-red-600`}/>
                </p>
                <button onClick={() => {
                    setFilter('closed')
                    setPage(() => 1)
                }}>
                    <p className={`${filter === 'closed' ? 'font-bold' : ''} text-sm`}>
                        <span className={`mr-0.5`}>99</span>
                        closed
                    </p>
                </button>
            </div>
        </>
)
    ;
}

export default Filter;