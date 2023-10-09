import { useEffect, useState } from "react"
import { EmployeeViews } from "./EmployeeViews"
import { CustomerViews } from "./CustomerViews"

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    const localHoneyUser = localStorage.getItem("honey_user")
    const honeUserObject = JSON.parse(localHoneyUser)

    setCurrentUser(honeUserObject)
  }, [])

  return currentUser.isStaff ? ( 
      <EmployeeViews currentUser={currentUser} /> 
    ) : (
      <CustomerViews currentUser={currentUser} />
    )
}
