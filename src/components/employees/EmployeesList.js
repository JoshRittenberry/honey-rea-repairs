import { useEffect, useState } from "react"
import { getStaffUsers } from "../../services/userService"
import "./Employees.css"
import { User } from "../../users/User"

export const EmployeesList = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        getStaffUsers().then(employeeArray => {
            setEmployees(employeeArray)
        })
    }, [])

    return (
        <div className="employees">
            {employees.map(employeesObj => {
                return <User user={employeesObj} />
            })}
        </div>
    )
}