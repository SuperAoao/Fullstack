const Header = (props) => <h1>{props.course}</h1>

const Total = (props) => {
  const total = props.parts.reduce((sum, part) => {
    console.log("Whats happening", sum, part.exercises)
    return sum + part.exercises
  }, 0)
  return (<p>
    <strong>total of {total} exercises</strong>
    </p>)
}

const Content = (props) => (
  <div>
    {props.parts.map((part) => (
      <Part key={part.name} part={part} />
    ))}
  </div>
)

const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
)

const Course = (props) => (
  <>
    {props.course.map(course => {
      return (
      <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      </>)
    })}
  </>
)

export default Course