import { useEffect, useState } from "react"
import { getStaffUsers } from "../../services/userService"
import "./Employees.css"
import { User } from "../../users/User"
import { Link } from "react-router-dom"

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
                return (
                    <Link to={`/employees/${employeesObj.id}`}>
                        <User user={employeesObj} />
                    </Link>
                )
            })}
        </div>
    )
}