import { useState } from 'react';
import type { User } from '../types.ts';
import UserCard from './UserCard';

const INITIAL_DATA: User[] = [
  { name: "Alice", email: "alice@mail.com", age: 25 },
  { name: "Bob", email: "bob@mail.com", age: 30 },
  { name: "Charlie", email: "charlie@mail.com", age: 35 },
  { name: "David", email: "david@mail.com", age: 28 },
  { name: "Eve", email: "eve@mail.com", age: 22 },
];

const SearchApp = () => {

  const [users] = useState<User[]>(INITIAL_DATA);
  const [filteredUsers, setFilteredUsers] = useState<User[]>(INITIAL_DATA);
  

  const [searchTerm, setSearchTerm] = useState("");


  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);

    const filtered = users.filter((u) =>
      u.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  const handleClear = () => {
    setSearchTerm("");
    setFilteredUsers(users);
  };

  return (
    <div style={{ padding: '20px', border: '2px solid blue', marginTop: '20px' }}>
      <h2>User Search</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={handleSearch}
          style={{ padding: '8px', marginRight: '10px' }}
        />
        <button onClick={handleClear}>Clear</button>
      </div>

      <div className="results">
        {filteredUsers.length === 0 ? (
          <p>No results found</p>
        ) : (
          filteredUsers.map((user) => (
            <UserCard key={user.email} user={user}>
              <p>Status: Verified User</p>
            </UserCard>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchApp;