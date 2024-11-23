import { useState } from 'react'
import DropdownNoContext from './dropdown/Dropdown'
import Dropdown from './dropdown-context/Dropdown'

export default function App() {
  const [lastOption, setLastOption] = useState('')
  return (
    <div>
      Last option: {lastOption}
      {/* Без React.Context */}
      <DropdownNoContext
        title="Dropdown 🔍"
        options={[
          { label: '1', value: 'id_1' },
          { label: '2', value: 'id_2', variant: 'red' },
        ]}
        onOptionClick={(value) => setLastOption(value)}
      />
      {/* C React.Context */}
      <Dropdown title="Dropdown Context 🔍" onOptionClick={(value) => setLastOption(value)}>
        <Dropdown.TextOption value="id_1">1</Dropdown.TextOption>
        <Dropdown.RedTextOption value="id_2">2</Dropdown.RedTextOption>
        {/* Теперь внутренний Dropdown тоже можно использовать как Option */}
        <Dropdown title="Inner Dropdown 🔍">
          <Dropdown.TextOption value="inner_id_1">inner option</Dropdown.TextOption>
        </Dropdown>
      </Dropdown>
    </div>
  )
}
