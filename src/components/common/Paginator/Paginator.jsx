import React from 'react'
import { useState } from 'react';
import styles from './Paginator.module.css'
import cn from "classnames";
export const Paginator = ({onPageChange, currentPage, pageSize, totalItemsCount, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i=1; i<pagesCount;i++) {
        pages.push(i);}

    let portionCount = Math.ceil(pagesCount/portionSize)
    let [currentPortion, setCurrentPortion] = useState(1)
    let lastPageOnLeftSide =( currentPortion-1)*portionSize+1;
    let lastPageOnRightSide = currentPortion*portionSize;


    return(
        <div> 
            {currentPortion>1 ? <button onClick ={()=>setCurrentPortion (currentPortion-1)}>назад</button> : ''}
            {pages.filter( p => p >=lastPageOnLeftSide && p<=lastPageOnRightSide)
            .map( (p) => 
            { return <div key = {p} className = {styles.block}>
                
            <span  onClick={()=>{onPageChange(p)}} 
                            className={cn({[styles.selectedPage]: currentPage === p}, styles.pages)}>{p}</span>
               
            </div> 
            })
            
            }
             {currentPortion<portionCount ? <button onClick ={()=> setCurrentPortion (currentPortion+1)}>вперёд</button> : ''}
        </div>)
    
} 