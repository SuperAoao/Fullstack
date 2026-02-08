import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
    const [shownPersons, setShownPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with<input onChange = {(event) => {
        event.preventDefault()
        // case insensitive filter
        const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(event.target.value.toLowerCase()))
        setShownPersons(filteredPersons)
      }} />
      <form>
        <div>
          <h2>add a new</h2>
          name: <input value={newName} onChange={(event) => {
            event.preventDefault()
            setNewName(event.target.value)}} />
          <div>
            number: <input value = {newNumber} onChange={(event) => {
              event.preventDefault()
              setNewNumber(event.target.value)}} />
          </div>
        </div>
        <div>
          <button type="submit" onClick={(event) => {
            event.preventDefault()
            // Check if the name already exists in the phonebook
            if (persons.some(person => person.name === newName)) {
              alert(`${newName} is already added to phonebook`)
              return
            }
            const personObject = {
              name: newName,
              number: newNumber
            }
            setPersons(persons.concat(personObject))
            setNewName('')
            setNewNumber('')
          }}>add</button>
        </div>
        <div>debug: {newName}</div>
      </form>
      <h2>Numbers</h2>
      <h3>
        {shownPersons.map(person => <li key={person.name}>{person.name} {person.number}</li>)}
      </h3>
      ...
    </div>
  )
}

export default App