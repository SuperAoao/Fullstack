const PersonList = ({ shownPersons }) => {
  return (
    <div>
      <h2>Numbers</h2>
      <ul>
        {shownPersons.map(person => <li key={person.name}>{person.name} {person.number}</li>)}
      </ul>
    </div>
  )
}

export default PersonList
