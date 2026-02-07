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
const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <Course course={courses} />
    </div>
  )
}

export default App