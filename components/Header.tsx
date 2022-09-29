import React, { useEffect } from 'react'
import CheckBox from './CheckBox'


const Header = () => {
    return (
        <header className="p-8 pb-10 flex flex-row justify-between items-center mobile:flex-col mobile:pb-24">
            <h1 className="text-5xl">BookInfo</h1>
            <CheckBox/>  
        </header>
        
    )
}
export default Header