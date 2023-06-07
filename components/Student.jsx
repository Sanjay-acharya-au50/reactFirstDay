
import Comp from "./Comp"
// import PropTypes from 'prop-types'  -> PropTypes should b propTypes

import propTypes from 'prop-types'

//  conponents
const Student = (props) => {
// const Student = ({name,age}) => {

  return (
    <div className="App">
        {/* <h1>{name}</h1> */}
        <h1>{props.name}</h1>

        {/* <h1>{age}</h1> */}
        <h1>{props.age}</h1>
        <Comp name={props.name} />
    </div>
  )
}

Student.propTypes = {
  name : propTypes.string,
  age : propTypes.number
} 

  Student.defaultProps = {
    name : "name",
    age : 0
  }

export default Student