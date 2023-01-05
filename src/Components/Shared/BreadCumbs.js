import React from 'react'
import { Link } from 'react-router-dom'

const BreadCumbs = () => {
    return (
        <div className="text-sm breadcrumbs">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li>Products</li>
            </ul>
        </div>
    )
}

export default BreadCumbs