// src/components/pages/UsersPage.jsx
import { useState, useEffect } from "react";
import UserList from "../organisms/UserList";
import Spinner from "../atoms/Spinner";
import ErrorMessage from "../atoms/ErrorMessage";
import TwoColumnTemplate from "../templates/TwoColumnTemplate";
import PostList from "../organisms/PostList";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => setUsers(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));

    return () => controller.abort(); // cleanup
  }, []); // empty array: only once, after mount

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <TwoColumnTemplate
      title="Users directory"
      left={
        <UserList
          users={users}
          selectedId={selectedUser?.id}
          onSelect={setSelectedUser}
        />
      }
      right={
        selectedUser ? (
          <>
            <h2>Posts by {selectedUser.name}</h2>
            <PostList userId={selectedUser.id} />
          </>
        ) : (
          <p>Select a user to see their posts.</p>
        )
      }
    />
  );
}
