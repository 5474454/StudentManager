import React from 'react'
import StudentForm from '../../components/StudentForm'

export default function $id({ match }) {
  return (
    <div>
      <StudentForm sNo={match.params.id} />
    </div>
  )
}
