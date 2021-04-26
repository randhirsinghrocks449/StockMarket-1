import React, { useState, useEffect } from 'react';

const Pagination = ({ userPerPage, onPaginationChange, total }) => {
    const [pageNumber, setpageNumber] = useState(1)

    useEffect(() => {

        const pagesVisited = userPerPage * pageNumber;
        onPaginationChange(pagesVisited -userPerPage, pagesVisited )

    }, [pageNumber,userPerPage,onPaginationChange])

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
            <button className="npbtn" style={{border:"none",fontWeight:"bold",fontSize:"1.5rem",background:"transparent",cursor:"pointer",padding:"0px 12px"}}onClick={() => onButtonClick("prev")}>&lt;</button>
            <button className="npbtn" style={{border:"none",fontWeight:"bold",fontSize:"1.5rem",background:"transparent",cursor:"pointer",padding:"0px 12px"}} onClick={() => onButtonClick("next")}>&gt;</button>
        </div>
    )
}

export default Pagination














