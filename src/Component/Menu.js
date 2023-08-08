import React, { useState } from 'react';
import '../App.css';
import Products from './Cart/Products';
import { useSelector } from 'react-redux';
import Pagination from '../SubComponents/Pagination';
import ResponsiveHeader from '../SubComponents/ResponsiveNavbar';

function Menu() {

    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(8);

    const { items, status } = useSelector((state) => state.products)
    console.log(items, status)
    // console.log("Items Lenght: " + items.length);
    const totalPages = Math.ceil(items.length / productsPerPage);
    // console.log("Total Pages:" + totalPages);
    const lastProductIndex = currentPage * productsPerPage;
    const firstProductIndex = lastProductIndex - productsPerPage;
    const currentProducts = items.slice(firstProductIndex, lastProductIndex);

    return (
        <>
            <ResponsiveHeader />
            <div className='menu-container'>
                <div className='primary-heading-menu'>Our Menu</div>
                <div className="cardMenuBox">
                    {
                        currentProducts.map((item, index) => {
                            return (
                                <div className='menuCardMenuBox' key={item.id}>
                                    <Products {...item} />
                                </div>
                            )
                        })
                    }
                </div>
                <Pagination
                    totalProducts={items.length}
                    productsPerPage={productsPerPage}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                    totalPages={totalPages} />
            </div>
        </>
    );
}

export default Menu;