import { createContext, useContext } from 'react'
import classes from './Dropdown.module.css'

const DropdownContext = createContext(null)

export default function Dropdown({ title, onOptionClick, children }) {
  const dropdownContext = useContext(DropdownContext) // Используй Context, объявленный выше
  const handleOptionClick = dropdownContext?.onClick ?? onOptionClick
  return (
    <div className={classes.dropdown}>
      {title}
      <div className={classes.options}>
        {/* Создай свой Context и передай его ниже */}
        <DropdownContext.Provider value={{ onClick: handleOptionClick }}>{children}</DropdownContext.Provider>
      </div>
    </div>
  )
}

Dropdown.TextOption = function TextOption({ value, children }) {
  const { onClick } = useContext(DropdownContext)
  return <div onClick={() => onClick(value)}>{children}</div>
}

Dropdown.RedTextOption = function RedTextOption({ value, children }) {
  const { onClick } = useContext(DropdownContext)
  return (
    <div style={{ backgroundColor: 'red' }} onClick={() => onClick(value)}>
      {children}
    </div>
  )
}
