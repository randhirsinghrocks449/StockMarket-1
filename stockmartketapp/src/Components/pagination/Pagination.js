import React, { useState, useEffect } from 'react';

const Pagination = ({ userPerPage, onPaginationChange, total }) => {
    const [pageNumber, setpageNumber] = useState(1)

    useEffect(() => {

        const pagesVisited = userPerPage * pageNumber;
        onPaginationChange(pagesVisited, pagesVisited + userPerPage)

    }, [pageNumber])

    function onButtonClick(type) {
        if (type === "prev") {
            if (pageNumber === 1) {

                setpageNumber(1)
            }
            else {
                setpageNumber(pageNumber - 1)
            }
        }
        else if (type === "next") {
            if (Math.ceil(total / userPerPage) === pageNumber) {
                setpageNumber(pageNumber)
            }
            else {
                setpageNumber(pageNumber + 1);
            }
        }
    }

    return (
        <div className="d-flex justify-content-end px-5 align-items-center pagination_styling">
            <span>Page-{pageNumber}</span>
            <button className="mx-2 btn" onClick={() => onButtonClick("prev")}><i className="fa fa-less-than"></i> </button>
            <button className="mx-2 btn" onClick={() => onButtonClick("next")}><i className="fa fa-greater-than"></i></button>
        </div>
    )
}

export default Pagination














