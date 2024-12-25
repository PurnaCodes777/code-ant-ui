import React from 'react'

const Stats = ({ count, category }) => {
    return (
        <div>
            <div>
                <p className='font-bold text-lg'>{count}</p>
                <p className='tablet:text-[10px]'>{category}</p>
            </div>
        </div>
    )
}

export default Stats