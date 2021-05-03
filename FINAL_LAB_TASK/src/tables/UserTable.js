import React from 'react';

const UserTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>Event Name</th>
        <th>Importance</th>
        <th>Diary</th>
        <th>Date</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {props.users?.length > 0 ? (
        props.users?.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.importance}</td>
            <td>{user.diary}</td>
            <td>{user.date}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(user);
                }}
                className='button muted-button'
              >
                Edit
              </button>
              <button onClick={() => props.deleteUser(user.id)} className='button muted-button'>
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No user event</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default UserTable;
