import React, { useEffect, useMemo, useState } from 'react';
import './table.css';

export const Table = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sort, setSort] = useState({ key: 'name', direction: 'asc' });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        setError('Failed to fetch users');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleSort = key => {
    setSort(prev => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc',
    }));
  };

  const filteredAndSortedUsers = useMemo(() => {
    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );

    return filtered.sort((a, b) => {
      const valA = a[sort.key].toLowerCase();
      const valB = b[sort.key].toLowerCase();

      if (valA < valB) return sort.direction === 'asc' ? -1 : 1;
      if (valA > valB) return sort.direction === 'asc' ? 1 : -1;
      return 0;
    });
  }, [users, search, sort]);

  return (
    <div className="container">
      <h2>User Table</h2>

      {loading && <div>Loading...</div>}
      {error && <div className="error">{error}</div>}

      {!loading && !error && (
        <>
          <input
            className="search-input"
            placeholder="Search by name"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />

          {filteredAndSortedUsers.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th onClick={() => handleSort('name')}>
                    Name {sort.key === 'name' && (sort.direction === 'asc' ? '↑' : '↓')}
                  </th>
                  <th onClick={() => handleSort('email')}>
                    Email {sort.key === 'email' && (sort.direction === 'asc' ? '↑' : '↓')}
                  </th>
                  <th>Company</th>
                </tr>
              </thead>
              <tbody>
                {filteredAndSortedUsers.map(user => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.company?.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div>No users match your search.</div>
          )}
        </>
      )}
    </div>
  );
};
