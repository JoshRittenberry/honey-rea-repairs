import { useState, useEffect } from "react"
import { getNonStaffUsers } from "../../services/userService"
import "./Customers.css"
import { User } from "../../users/User"
import { Link } from "react-router-dom"

export const CustomersList = () => {
    const [customers, setCustomers] = useState([])

    useEffect(() => {http://localhost:8088/posts?_embed=postLikes&_expand=topic
        getNonStaffUsers().then(customerArray => {
            setCustomers(customerArray)
        })
    }, [])
    
    return (
        <div className="customers">
            {customers.map(customerObj => {
                return (
                    <Link to={`/customers/${customerObj.id}`}>
                        <User user={customerObj}/>
                    </Link>
                )
            })}
        </div>
    )
}