import React from 'react'

export default function ButtonUp(props) {
  return (
    <td className='btn btn-primary' id={props.idx} type="Submit" onClick={props.handleMoveUp} >Move Up</td>
  )
}
