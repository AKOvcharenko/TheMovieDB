import React, { Component } from 'react';
import './../styles/pagination.scss';

class Pagination extends Component{

    getSubArr = (arr, index) => {
        if (index < 3){return arr.slice(0, 5);}
        else if (arr.length - index < 3){return arr.slice(-5);}
        return  arr.slice(index - 3, index + 2);
    };



    createPageList = (num, activePage) => {
        let arr;
        let pagesNumber;
        if(num > 20){
            pagesNumber = num / 20;
            arr = (Array.apply(null, {length: pagesNumber})).map(Number.call, Number); //array contains number of pages;
            arr = this.getSubArr(arr, activePage); // i want show only 5 pages
            return arr.map((page, index) => {
                return (<li key={`page-${page}`} className={page + 1 === activePage ? 'active' : ''}>
                                <a href="#">{page + 1}</a>
                        </li>)});
        }
        return null;
    };

    render(){
        let { requestPending, showPrevPage, showNextPage, activePage, itemsNumber } = this.props;
        let { createPageList } = this;
        return (
            <div className="pagination-wrapper">
                <ul className="pager previous-pager">
                    <li className={`previous ${(requestPending || activePage === 1) ? 'disabled' : ''}`} onClick={showPrevPage}>
                        <a href="#"><span aria-hidden="true">&larr;</span></a>
                    </li>
                </ul>
                <ul className="pagination"> {createPageList(itemsNumber, activePage)}</ul>
                <ul className="pager next-pager">
                    <li className={`next ${requestPending ? 'disabled' : ''}`} onClick={showNextPage}>
                        <a href="#"><span aria-hidden="true">&rarr;</span></a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Pagination;