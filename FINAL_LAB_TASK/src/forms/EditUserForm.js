import React, { useState, useEffect } from 'react'

const EditUserForm = props => {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        props.updateUser(user.id, user)
      }}
    >
      <label>Event Name</label>
      <input type="text" name="name" value={user.name} onChange={handleInputChange} />
      <label>Importance</label>
      <input type="text" name="importance" value={user.importance} onChange={handleInputChange} />
      <label>Diary</label>
      <input type="text" name="diary" value={user.diary} onChange={handleInputChange} />
      <label>Date</label>
      <input type="text" name="date" value={user.date} onChange={handleInputChange} />
      <button>Update event</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditUserForm
