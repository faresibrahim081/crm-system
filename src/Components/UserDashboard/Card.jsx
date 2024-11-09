import React from 'react'

function Card({ title, icon, content }) {
    return (
        <div className='Card bg-black mb-5 rounded-2xl p-10'>
            {icon}
            <h4 className='mb-4'>{title} </h4>
            <p>{content}</p>
        </div>
    )
}

export default Card