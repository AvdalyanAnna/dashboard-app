import React from "react";
import './emptyPlus.css'

const EmptyPlus = ({ isClass }) => {
    return (
        <div className={`boxes block_${isClass}`}>

        </div>
    )
}

export default EmptyPlus;