import React from 'react'
import { Alert } from 'react-bootstrap'
import {useSelector} from 'react-redux'
function Errors() {
    const errors = useSelector(state=> state.errorReducer)
  return (
    <div>
        {
            errors.map(el=> <>
                <Alert variant="danger" >
            <Alert.Heading>{el.msg}</Alert.Heading>
          
          </Alert></>)

        }
    </div>
  )
}

export default Errors