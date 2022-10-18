import React, {useEffect, useState} from 'react';

function Pagination(props) {

    const ranges = Array.from({length: props.totalPages}, (_, i) => i + 1)
    const [currentPage, setCurrentPage] = useState(props.page);
    const offsetSize = 3;

    const [groups, setGroups] = useState(sliceIntoChunks(ranges, offsetSize));
    const [group, setGroup] = useState(pageGroup());
    const [isFirstGroup, setIsFirstGroup] = useState(JSON.stringify(groups[0]) === JSON.stringify(group));
    const [isLastGroup, setIsLastGroup] = useState(groups[groups.length - 1] === group);
    const groupClass = `relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 cursor-pointer`;
    const pageClass = `relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20`


    // console.log('see what happens')
    // console.log(groups.filter(group => group.includes(currentPage))[0])


    function sliceIntoChunks(arr, chunkSize) {
        const res = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            const chunk = arr.slice(i, i + chunkSize);
            res.push(chunk);
        }
        return res;
    }

    function pageGroup() {
        return groups.filter(group => group.includes(currentPage))[0];
    }

    function goToPageOf(e,page){
        e.preventDefault()
        setPage(page)
    }

    function goToPreviousPage(e) {
        e.preventDefault()
        if(group[0] === currentPage){
           goToPreviousGroup(e,currentPage - 1);
           return;
        }

        setPage(currentPage - 1)
    }

    function goToNextPage(e) {
        e.preventDefault()
        if(group[group.length - 1] === currentPage){
           goToNextGroup(e,currentPage + 1);
           return;
        }

        setPage(currentPage + 1 )
    }

    function setPage(page){
        setCurrentPage(page)
        props.setCurrentPage(page)
    }

    function goToPreviousGroup(e,page = null) {
        if (group.length === 0) {
            let lastIndex = groups.length - 1;
            let last = groups[lastIndex];
            if(last.length === 1){
                let previousTwoIndex = groups.length - 2;
                let previousTwo = groups[previousTwoIndex];
                console.log(previousTwo)
                setGroup(previousTwo)
                setIsFirstGroup(previousTwoIndex === 0)
                setIsLastGroup(false)
                setPage(page || previousTwo[0])
                return;
            }
            setGroup(last)
            setIsFirstGroup(lastIndex === 0)
            setIsLastGroup(true)
            setPage(page || last[0])
            return;
        }

        let currentIndex = getCurrentGroupIndex();
        let previousIndex = currentIndex - 1
        if (previousIndex in groups) {
            let previous = groups[previousIndex];
            setGroup(previous)
            setIsFirstGroup(previousIndex === 0)
            setIsLastGroup(previousIndex === groups.length - 1)
            setPage(page || previous[0])
        }
    }

    function goToNextGroup(e,page = null) {
        let nextIndex = getCurrentGroupIndex() + 1
        if (nextIndex in groups) {
            let next = groups[nextIndex]
            setGroup(next)
            setIsFirstGroup(nextIndex === 0)
            setIsLastGroup(nextIndex === groups.length - 1)
            setPage(page ?? next[0])
        }
    }

    function goToFirstPage(e) {
        e.preventDefault()
        setGroup(groups[0])
        setIsFirstGroup(true)
        setIsLastGroup(false)
        setCurrentPage(1)
        props.setCurrentPage(1)
    }

    function goToLastPage(e) {
        e.preventDefault()
        setGroup([])
        setIsFirstGroup(false)
        setIsLastGroup(false)
        setPage(props.totalPages)
    }

    function getCurrentGroupIndex() {
        let groupsInString = groups.map(group => group.join(''))
        return groupsInString.indexOf(group.join(''))
    }

    // <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
    return (

        <div className="flex items-center justify-between  bg-white px-4 py-3 sm:px-6">
            <div className="flex flex-1 justify-between sm:hidden">
                <a href="#"
                   className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
                <a href="#"
                   className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing {}
                        <span className="font-medium">1</span> {}
                        to {}
                        <span className="font-medium">10</span> {}
                        of {}
                        <span className="font-medium">97</span> {}
                        results
                    </p>
                </div>
                <div>
                    <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                        {
                            currentPage > 1 && (
                                <a onClick={() => goToPreviousPage} href="#"
                                   className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
                                    <span className="sr-only">Previous</span>
                                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                         fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd"
                                              d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                                              clipRule="evenodd"/>
                                    </svg>
                                </a>
                            )
                        }

                        {/*{*/}
                        {/*    !isFirstGroup && (*/}
                        {/*        <a onClick={() => goToFirstPage} href="#" aria-current="page"*/}
                        {/*           className={`${pageClass} ${1 === currentPage ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600' : ''}`}>*/}
                        {/*            {1}*/}
                        {/*        </a>*/}
                        {/*    )*/}
                        {/*}*/}


                        {/*{*/}
                        {/*    !isFirstGroup && (*/}
                        {/*        <span onClick={() => goToPreviousGroup} className={`${groupClass}`} id={`js-previous-group`}>*/}
                        {/*            ...*/}
                        {/*        </span>*/}
                        {/*    )*/}
                        {/*}*/}

                        {
                            group.map((group, index) => (
                                <a onClick={(e) => goToPageOf(e,group)} key={index} href="#" aria-current="page"
                                   className={`${pageClass} ${group === currentPage ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600' : ''}`}>
                                    {group}
                                </a>
                            ))
                        }

                        {
                            (!isLastGroup && props.totalPages !== currentPage) && (
                                <span onClick={() => goToNextGroup} className={`${groupClass}`}>
                                    ...
                                </span>
                            )
                        }


                        {
                            !isLastGroup && (
                                <a onClick={() => goToLastPage} href="#" aria-current="page"
                                   className={`${pageClass} ${props.totalPages === currentPage ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600' : ''}`}>
                                    {props.totalPages}
                                </a>
                            )
                        }


                        {
                            props.totalPages !== currentPage && (
                                <a onClick={ () => goToNextPage} href="#"
                                   className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
                                    <span className="sr-only">Next</span>
                                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                         fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd"
                                              d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                              clipRule="evenodd"/>
                                    </svg>
                                </a>
                            )
                        }

                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Pagination;