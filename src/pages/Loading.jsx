import React from 'react';

export const Loading = (visible) => {
    
    return (
        <div className="flex transition-all duration-200 absolute w-full h-full bg-[#1C1C1C] z-[999] items-center justify-center"
            style={{transform: visible ? 'scale(0)' : 'scale(1)' }}
        >
            <img src="/loading.png" className='animate-bounce w-[570.093px] h-[119px]'></img>
        </div>
    )
}