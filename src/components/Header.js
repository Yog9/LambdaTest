import React from 'react'

/**
 * Component that renders a Header
 * @returns JSX Element
 */
const Header = () => {
    return (
        <div>
            <div className="grid grid-cols-4 pt-4 pb-2 text-zinc-500 justify-center gap-1">
                <div className='col-span-2 pl-2'>EMAIL</div>
                <div>ROLE</div>
                <div>GROUP</div>
            </div>
        </div>
    )
}

export default Header
