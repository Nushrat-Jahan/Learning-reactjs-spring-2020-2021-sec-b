import React, { useState, Fragment } from 'react';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm';
import Login from './forms/Login';
import UserTable from './tables/UserTable';

const App = () => {
  // Data
  const usersData = [
    {
      username: 'Test',
      data: [
        {
          id: 1,
          name: 'Birthday',
          importance: 'High',
          diary: 'Every one was very happy that day. I got a huge cake.',
          date: '5/1/2020',
        },
        {
          id: 2,
          name: 'First day in College',
          importance: 'Moderate',
          diary: 'I got a lot of friend',
          date: '1/1/2015',
        },
        {
          id: 3,
          name: 'First travel in train',
          importance: 'less important',
          diary: 'I went to visit my aunt by the train',
          date: '5/1/2017',
        },
      ],
    },
  ];

  const initialFormState = { id: null, name: '', importance: '', diary: '', date: '' };

  // Setting state
  const [users, setUsers] = useState(usersData);
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  const [loggedInUser, setLoggedInUser] = useState('');

  // CRUD operations
  const addUser = (newData) => {
    console.log('adding');
    newData.id = Math.random();

    console.log(newData, loggedInUser);

    const existingUser = users.find((user) => user.username === loggedInUser);

    // existing user
    if (existingUser) {
      const newUser = existingUser.data.push(newData);
      setUsers([...users, { ...newUser }]);
    } else {
      //If new user
      const newUser = {
        username: loggedInUser,
        data: [newData],
      };
      setUsers([...users, newUser]);
    }
  };

  const deleteUser = (id) => {
    setEditing(false);

    console.log(id);

    const theUser = users.find((user) => user.username === loggedInUser);
    console.log(theUser);
    const userData = theUser.data.filter((u) => u.id !== id);
    theUser.data = userData;

    console.log(theUser);
    setUsers([...users, { ...theUser }]);
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);

    const theUser = users.find((user) => user.username === loggedInUser);
    const userData = theUser.data.map((user) => (user.id === id ? updatedUser : user));
    theUser.data = userData;
    setUsers([...users, { ...theUser }]);
  };

  const editRow = (user) => {
    setEditing(true);

    setCurrentUser({ id: user.id, name: user.name, importance: user.importance, diary: user.diary, date: user.date });
  };

  const logoutUser = () => {
    setLoggedInUser('');
  };

  if (!loggedInUser) {
    return <Login leUserLogin={(username) => setLoggedInUser(username)} />;
  }

  const currentUserData = users.filter((user) => user.username === loggedInUser)[0]?.data;

  return (
    <div className='container'>
      <h1>{loggedInUser}'s DIGITAL DIARY</h1>
      <div className='flex-row'>
        <div className='flex-large'>
          {editing ? (
            <Fragment>
              <h2>Edit Event</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </Fragment>
          ) : (
            <Fragment>
              <h2>Add Event</h2>
              <AddUserForm addUser={addUser} />
            </Fragment>
          )}
          <br />
          <button onClick={logoutUser}>Logout</button>
        </div>
        <div className='flex-large'>
          <h2>View Your Diary</h2>
          <UserTable users={currentUserData} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};

export default App;
