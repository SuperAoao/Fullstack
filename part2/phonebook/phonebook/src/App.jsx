import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
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
        {persons.map(person => <li key={person.name}>{person.name} {person.number}</li>)}
      </h3>
      ...
    </div>
  )
}

export default App