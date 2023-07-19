import React, { useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
    const [open, setOpen] = useState(false)

    return (
        <header className='w-full fixed z-10 bg-black opacity-90'>
            <nav className='flex w-full py-2 md:py-3 px-4 md:px-20 items-center justify-between'>
                <a href="/" className='flex items-center justify-center text-white text-lg cursor-pointer'>
                    <div className="flex">
                    <p className="font-bold text-center text-xl">
                        Chefs<span className="text-blue-500 text-xl">Corner</span>
                    </p>
                </div>
                </a>

                <ul className='hidden md:flex text-white gap-6'>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/#recipes">Explore</a>
                    </li>
                    <li>
                        <a href="/favorites">Favorites</a>
                    </li>
                </ul>


                <a href="/" className='hidden md:block border border-white text-white items-end justify-items-end text-center hover:bg-white hover:text-slate-700 rounded-full min-w-[130px]'>
                <button>Sign In</button>
                </a>


                <button className='block md:hidden text-white text-xl'
                    onClick={() => setOpen(prev => !prev)}>
                    {open ? <AiOutlineClose /> : <HiMenuAlt3 />}
                </button>
            </nav>
            <div className={`${open ? "flex" : "hidden"} bg-black flex-col w-full px-4 pt-16 pb-10 text-white gap-6 text-[14px]`}>
                <a href="#">Home</a>
                <a href="/#recipes">Recipes</a>
                <a href="#">Favorites</a>
            </div>
        </header>
    )
}

export default Navbar