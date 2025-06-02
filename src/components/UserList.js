import React, { useEffect, useState } from 'react';

function UserList({ token }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://user-management-frontend1.vercel.app/api/users', {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [token]);

  return (
    <div>
      <h2>All Users:</h2>
      <ul>
        {users.map(u => <li key={u._id}>{u.name} ({u.email})</li>)}
      </ul>
    </div>
  );
}

export default UserList;
