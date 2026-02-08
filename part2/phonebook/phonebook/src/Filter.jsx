const Filter = ({ persons, setShownPersons }) => {
  return (
    <div>
      filter shown with <input onChange={(event) => {
        event.preventDefault()
        // case insensitive filter
        const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(event.target.value.toLowerCase()))
        setShownPersons(filteredPersons)
      }} />
    </div>
  )
}

export default Filter
