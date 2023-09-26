import { useState, useEffect } from "react"
import { getNonStaffUsers } from "../../services/userService"
import "./Customers.css"
import { User } from "../../users/User"

export const CustomersList = () => {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        getNonStaffUsers().then(customerArray => {
            setCustomers(customerArray)
        })
    }, [])
    
    return (
        <div className="customers">
            {customers.map(customerObj => {
                return <User user={customerObj}/>
            })}
        </div>
    )
}