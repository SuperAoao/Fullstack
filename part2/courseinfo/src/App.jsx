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
    <Header course={props.course.name} />
    <Content parts={props.course.parts} />
    <Total parts={props.course.parts} />
  </>
)
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App