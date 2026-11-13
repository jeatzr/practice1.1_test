// src/components/organisms/PostList.jsx
import { useState, useEffect } from "react";
import PostItem from "../molecules/PostItem";
import Spinner from "../atoms/Spinner";
import ErrorMessage from "../atoms/ErrorMessage";
import "./PostList.css";

export default function PostList({ userId }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError(null);

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`, {
      signal: controller.signal,
    })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name === "AbortError") return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort(); // cancels the old request when userId changes
  }, [userId]); // ← re-runs whenever userId changes

  if (loading) return <Spinner label="Loading posts..." />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <ul className="post-list">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </ul>
  );
}
