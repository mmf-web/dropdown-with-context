import classes from './Dropdown.module.css'

export default function Dropdown({ title, options, onOptionClick }) {
  return (
    <div className={classes.dropdown}>
      {title}
      <div className={classes.options}>
        {options.map((option) => (
          <Option
            key={option.value}
            label={option.label}
            value={option.value}
            variant={option.variant}
            onClick={onOptionClick}
          />
        ))}
      </div>
    </div>
  )
}

function Option({ label, value, onClick, variant }) {
  return (
    <div
      style={{
        backgroundColor: variant === 'red' ? 'red' : '',
      }}
      onClick={() => onClick(value)}
    >
      {label}
    </div>
  )
}
