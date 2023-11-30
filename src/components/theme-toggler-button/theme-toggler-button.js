import React, { useContext } from "react"
import { ThemeContext } from "styled-components"

export const ThemeTogglerButton = () => {
    const { themes } = useContext(ThemeContext)
    console.log('ThemeTogglerButton theme', themes );

    return(
        <div>

        </div>
    )
}