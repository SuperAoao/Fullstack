const PersonForm = ({ newName, setNewName, newNumber, setNewNumber, persons, setPersons }) => {
  return (
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
  )
}

export default PersonForm
