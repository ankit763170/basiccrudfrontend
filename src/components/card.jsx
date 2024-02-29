import { useState } from "react";
import "./card.css";

function UserCard({ user, onDelete }) {
  const [addCount, setAddCount] = useState(0);
  const [updateCount, setUpdateCount] = useState(0);

  const handleAdd = () => {
    setAddCount(addCount + 1);
    // Logic for adding new data if needed
  };

  const handleUpdate = () => {
    setUpdateCount(updateCount + 1);
    // Logic for updating data if needed
  };

  const handleDelete = () => {
    onDelete(user.id);
  };

  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <div className="count-container">
        <p>Add Count: {addCount}</p>
        <p>Update Count: {updateCount}</p>
      </div>
      <div className="button-container">
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleUpdate}>Update</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default UserCard;
