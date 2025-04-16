const Header = (prop) => {
    return (
      <div>
        <h1>{prop.course.name}</h1>
      </div>
    )
  }
  
  
  const Content = (props) => {
    console.log(props.course.parts[0].name)
    const Part = (arr) => {
      console.log(arr.part.exercises);
    return (
      <div>
        <p>
          {arr.part.name} {arr.part.exercises}
        </p>
      </div>
    )
  }
    return (
      <div>
        <Part part={props.course.parts[0]} />
        <Part part={props.course.parts[1]} />
        <Part part={props.course.parts[2]} />
      </div>
    )
  }
  
  const Total = t => {
    console.log("t:", t.course.parts[0].exercises);
    return (
      <p>
        Number of exercises {t.course.parts[0].exercises + t.course.parts[1].exercises + t.course.parts[2].exercises}  
      </p>
    )
  }
  
  const App = () => {
    const course = {
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10
        },
        {
          name: 'Using props to pass data',
          exercises: 7
        },
        {
          name: 'State of a component',
          exercises: 14
        }
      ]
    }
  
  
    return (
      <div>
        <Header course={course} />
        <Content course={course}/>
        <Total course={course}/>
      </div>
    )
  }
  
  export default App