import React, {useContext} from "react"
import { ThemeContext } from "../../contexts/theme-context"

export const Button = (props) => {

    return <button {...props} className="btn"/>
}