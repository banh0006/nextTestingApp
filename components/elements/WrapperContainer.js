import React from 'react'
import { wrapper_container } from '../../styles/global.module.scss'

export default function WrapperContainer({ children, className, ...props }) {
    return (
        <div className={className ? `${wrapper_container} ${className}` : `${wrapper_container}`} {...props}>
            {children}
        </div>
    )
}
