import { useState } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import PersonList from './PersonList'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [shownPersons, setShownPersons] = useState(persons)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons} setShownPersons={setShownPersons} />
      <PersonForm newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} persons={persons} setPersons={setPersons} />
      <PersonList shownPersons={shownPersons} />
    </div>
  )
}

export default App