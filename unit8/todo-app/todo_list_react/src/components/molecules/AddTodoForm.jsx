import Input from "../atoms/Input";
import Button from "../atoms/Button";
import "./AddTodoForm.css";
import { useState } from "react";

function AddTodoForm({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const cleanText = text.trim();
    if (cleanText) {
      onAdd(cleanText);
      setText("");
    } else {
      console.log("the text is empty");
    }
  };
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <Input value={text} onChange={(e) => setText(e.target.value)} />
      <Button type="submit">Add</Button>
    </form>
  );
}

export default AddTodoForm;
