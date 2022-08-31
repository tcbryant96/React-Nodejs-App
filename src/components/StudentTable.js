import React, {useState, useEffect} from 'react'
import ButtonDown from './ButtonDown'
import ButtonUp from './ButtonUp'
import {arrayMoveImmutable} from 'array-move';

export default function StudentTable() {
    const [student, setStudent] = useState([])
   let myStudent= student

    useEffect(() =>{
        fetch('https://kekambas-bs.herokuapp.com/kekambas')
        .then(arr => arr.json())
        .then(data =>{
            setStudent(data)
        })
    }, [])
    function handleMoveUp(e){
        e.preventDefault()
        for (let i in student){
            if (e.target.id === i){
              if (i>0) {
            var newStudents = arrayMoveImmutable(myStudent, i, i-1)
              
            myStudent = newStudents
        
               setStudent(myStudent)
               console.log(student)
              }
            }
        }

        }
    function handleMoveDown(e){
        e.preventDefault()
        for (let i in student){
            if (e.target.id === i){
              if (i<student.length-1) {
                console.log(myStudent[i])
                var newStudents = arrayMoveImmutable(myStudent, i, ((i-myStudent.length)+1))
                myStudent = newStudents
                setStudent(myStudent)
               
              }
            }
        }
    }

  return (
    <>
    <h1 className='text-center'>Who's Your favorite?</h1>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">Favorite Ranking#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Id</th>
      <th scope= 'col'>Move Up</th>
      <th scope= 'col'>Move Down</th>
    </tr>
  </thead>
  <tbody>
    {student.map((students, idx) =>{
    return (<tr key={idx}>
    
    <th scope="row">{idx+1}</th>
      <td>{students.first_name}</td>
      <td>{students.last_name}</td>
      <td>{students.id}</td>
      <td>{<ButtonUp handleMoveUp={handleMoveUp} idx={idx}/>}</td>
      <td>{<ButtonDown handleMoveDown={handleMoveDown} idx={idx}/>}</td>    
    </tr>)
})}

  </tbody>
</table>
</>
  )
}
