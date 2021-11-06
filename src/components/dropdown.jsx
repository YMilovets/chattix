import React from 'react'

export default function Dropdown({children, className, ...props}) {
    return (
        <div className={["dropdown-menu", className].filter(Boolean).join(" ")}>
            {children}
        </div>
    )
}
