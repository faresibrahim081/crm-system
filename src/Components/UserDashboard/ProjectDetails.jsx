import React from 'react'

function ProjectDetails({ title, icon, content }) {
    return (
        <div className='ProjectDetails  bg-black mb-5 rounded-2xl p-10'>
            {icon}
            <h4 className='mb-4'>{title} </h4>
            <button className='p-2 bg-[#00FFA9] rounded'>{content}</button>
        </div>
    )
}

export default ProjectDetails