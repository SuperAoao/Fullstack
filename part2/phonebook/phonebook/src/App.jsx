import { useState, useEffect } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import PersonList from './PersonList'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [shownPersons, setShownPersons] = useState([])

  // Fetching data from the server
  useEffect(() => {
    axios.get('http://localhost:3001/persons').then(response => {
      const persons = response.data
      console.log(persons)
      setPersons(persons)
      setShownPersons(persons)
    })
  }, [])
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