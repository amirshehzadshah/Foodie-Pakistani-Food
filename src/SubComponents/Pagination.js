import React from 'react'

const Pagination = ({ totalProducts, productsPerPage, setCurrentPage, currentPage, totalPages }) => {

    // console.log("Total Products: " + totalProducts);
    // console.log(totalProducts)

    const handlePrevious = () => {
        if (currentPage <= 1) {
            setCurrentPage(1)
        }
        else {
            setCurrentPage(currentPage - 1)
        }
    }

    const handleNext = () => {
        if (currentPage === totalPages) {
            setCurrentPage(totalPages)
        } else {
            setCurrentPage(currentPage + 1)
        }
    }

    // let pages = [];
    // for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    //     // const element = array[i];
    //     pages.push(i)
    // }

    return (
        <div className='pagination'>
            {/* {
                pages.map((page, index) => {
                    return <button key={index} onClick={() => { setCurrentPage(page) }} className={page == currentPage ? 'active' : ''}>{page}</button>
                })
            } */}
            <div className="page-btn">
                <button onClick={() => handlePrevious()}>Previous</button>
            </div>
            <div className="page-count">
                <div className="count">{currentPage}</div>
                <div className="count">of</div>
                <div className="count">{totalPages}</div>
            </div>
            <div className="page-btn">
                <button onClick={() => handleNext()}>Next</button>
            </div>
        </div>
    )
}

export default Pagination