import React, { useState } from 'react';

const AddUserForm = (props) => {
  const initialFormState = { id: null, name: '', diary: '', date: '' };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (user.name === '' || user.importance === '' || user.diary === '' || user.date === '') {
          return alert('Please fill up all the fields');
        }

        props.addUser(user);
        setUser(initialFormState);
      }}
    >
      <label>Event Name</label>
      <input type='text' name='name' value={user.name} onChange={handleInputChange} />
      <label>Importance</label>
      <div className='radios'>
        <input
          type='radio'
          checked={user.importance === 'High'}
          value='High'
          name='importance'
          onChange={handleInputChange}
        />
        <span>High</span>
        <input
          type='radio'
          checked={user.importance === 'Moderate'}
          value='Moderate'
          onChange={handleInputChange}
          name='importance'
        />
        <span>Moderate</span>
        <input
          type='radio'
          checked={user.importance === 'Less important'}
          value='Less important'
          name='importance'
          onChange={handleInputChange}
        />
        <span>Less important</span>
      </div>
      <label>Diary</label>
      <input type='text' name='diary' value={user.diary} onChange={handleInputChange} />
      <label>Date</label>
      <input type='text' name='date' value={user.date} onChange={handleInputChange} />
      <button>Add new event</button>
    </form>
  );
};

export default AddUserForm;
