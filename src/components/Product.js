import React from 'react';
import {observer} from 'mobx-react'

const Root = ({ name, onBuyClick, id, sold }) => {
    const handleClick = () => {
        console.log(id)
        onBuyClick(id);
    }
    return (
        <div>
            <span>
                {name} Sprzedano: {sold} |
            </span>
            <button onClick={handleClick}>Buy</button>
        </div>
    )
}

export default observer(Root);