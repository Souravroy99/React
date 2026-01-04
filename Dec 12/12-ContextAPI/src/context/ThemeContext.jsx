import { createContext } from 'react'

export const ThemeContext = createContext()

const ThemeContextProvider = ({children}) => {
  return (
    <div>   
        <ThemeContext>
            {children}
        </ThemeContext>
    </div>
  )
}

export default ThemeContextProvider