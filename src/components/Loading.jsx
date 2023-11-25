import React from 'react'
import Loader from '../assets/images/loading.gif'

const Loading = ({ children }) => {
    return (
        <div className='loader-div flex flex-col items-center justify-center'>
            <img
                src={Loader}
            />
            <p className="h3 text-center">{children}</p>
        </div>
    )
}

export default Loading