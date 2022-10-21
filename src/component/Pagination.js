import React, { useEffect, useState } from 'react';
import ChevronLeft from 'component/svg/ChevronLeft';
import ChevronRight from 'component/svg/ChevronRight';
import useArrayChunk from 'module/useArrayChunk';

function Pagination(props) {
    const totalPages = Math.ceil(props.total / props.perPage);
    const ranges = Array.from({ length: totalPages }, (_, i) => i + 1);
    const [currentPage, setCurrentPage] = useState(props.page);
    const offsetSize = 3;
    const [groups] = useState(useArrayChunk(ranges, offsetSize));
    const [group, setGroup] = useState(pageGroup());
    const [metaArray] = useState(meta());
    const groupClass = `relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 cursor-pointer`;
    const pageClass = `relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20`;
    const activePageClass = `z-10 bg-indigo-50 border-indigo-500 text-indigo-600`;

    useEffect(() => {
        setCurrentPage(props.page);
    }, [props.page]);

    function meta() {
        let tem = [];
        for (let i = 0; i < totalPages; i++) {
            let onPage = i + 1;

            if (i === 0) {
                tem.push([1, props.perPage]);
            } else {
                let diff;
                let previousSum = tem[i - 1].reduce((pre, ini) => pre + ini, 0);
                if (onPage === 2) {
                    diff = 0;
                } else {
                    diff = onPage * props.perPage - props.perPage * 2;
                }

                let first = previousSum - diff;

                tem.push([
                    first,
                    onLastPage() ? props.total : first + (props.perPage - 1),
                ]);
            }
        }
        return tem;
    }

    function pageGroup() {
        return groups.filter(group => group.includes(currentPage))[0];
    }

    function goTo(e, page) {
        e.preventDefault();
        goToPageOf(page);
    }

    function goToPageOf(page) {
        let group = getGroupByPage(page);

        setGroup(group);
        setPage(page);
    }

    function getGroupByPage(page) {
        return groups.filter(pageNumber => pageNumber.includes(page))[0];
    }

    function goToPreviousPage(e) {
        e.preventDefault();
        goToPageOf(currentPage - 1);
    }

    function goToNextPage(e) {
        e.preventDefault();
        goToPageOf(currentPage + 1);
    }

    function setPage(page) {
        setCurrentPage(page);
        props.setCurrentPage(page);
    }

    function goToPreviousGroup(e) {
        let previousIndex = getCurrentGroupIndex() - 1;
        goToPageOf(groups[previousIndex][0]);
    }

    function goToNextGroup(e) {
        let nextIndex = getCurrentGroupIndex() + 1;
        goToPageOf(groups[nextIndex][0]);
    }

    function goToFirstPage(e) {
        e.preventDefault();
        goToPageOf(1);
    }

    function goToLastPage(e) {
        e.preventDefault();
        goToPageOf(totalPages);
    }

    function getCurrentGroupIndex() {
        let groupsInString = groups.map(group => group.join(''));
        return groupsInString.indexOf(group.join(''));
    }

    function onLastPage() {
        return onPage(totalPages);
    }

    function onFirstPage() {
        return onPage(1);
    }

    function onPage(page) {
        return page === currentPage;
    }

    function inFirstGroup(page = null) {
        return groups[0].includes(page || currentPage);
    }

    function inLastGroup(page = null) {
        return groups[groups.length - 1].includes(page || currentPage);
    }

    return (
        <div className="flex items-center justify-between  bg-white px-4 py-3 sm:px-6">
            <div className="flex flex-1 justify-between sm:hidden">
                <a
                    href="#"
                    className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Previous
                </a>
                <a
                    href="#"
                    className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Next
                </a>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing {}
                        <span className="font-medium">
                            {metaArray[currentPage - 1][0]}
                        </span>{' '}
                        {}
                        to {}
                        <span className="font-medium">
                            {metaArray[currentPage - 1][1]}
                        </span>{' '}
                        {}
                        of {}
                        <span className="font-medium">{props.total}</span> {}
                        results
                    </p>
                </div>
                <div>
                    <nav
                        className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                        aria-label="Pagination"
                    >
                        {!onFirstPage() && (
                            <a
                                onClick={e => goToPreviousPage(e)}
                                href="#"
                                className={`${pageClass} rounded-l-md`}
                            >
                                <span className="sr-only">Previous</span>
                                <ChevronLeft className={`h-5 w-5`} />
                            </a>
                        )}

                        {!inFirstGroup() && (
                            <a
                                onClick={e => goToFirstPage(e)}
                                href="#"
                                aria-current="page"
                                className={`${pageClass} ${
                                    onFirstPage() ? activePageClass : ''
                                }`}
                            >
                                {1}
                            </a>
                        )}

                        {!inFirstGroup() && (
                            <span
                                onClick={e => goToPreviousGroup(e)}
                                className={`${groupClass}`}
                                id={`js-previous-group`}
                            >
                                ...
                            </span>
                        )}

                        {group.map((pageNumber, index) => (
                            <a
                                onClick={e => goTo(e, pageNumber)}
                                key={index}
                                href="#"
                                aria-current="page"
                                className={`${pageClass} ${
                                    onPage(pageNumber) ? activePageClass : ''
                                }`}
                            >
                                {pageNumber}
                            </a>
                        ))}

                        {!inLastGroup() && !onLastPage() && (
                            <span
                                onClick={e => goToNextGroup(e)}
                                className={`${groupClass}`}
                            >
                                ...
                            </span>
                        )}

                        {!inLastGroup() && (
                            <a
                                onClick={e => goToLastPage(e)}
                                href="#"
                                aria-current="page"
                                className={`${pageClass} ${
                                    onLastPage() ? activePageClass : ''
                                }`}
                            >
                                {totalPages}
                            </a>
                        )}

                        {!onLastPage() && (
                            <a
                                onClick={e => goToNextPage(e)}
                                href="#"
                                className={`rounded-r-md ${pageClass}`}
                            >
                                <span className="sr-only">Next</span>
                                <ChevronRight className={`h-5 w-5`} />
                            </a>
                        )}
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Pagination;
