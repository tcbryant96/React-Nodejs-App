import React from 'react'

export default function ButtonDown(props) {
  return (
    <td className='btn btn-danger' id={props.idx} type="Submit" onClick={props.handleMoveDown} >Move Down</td>      
  )
}
