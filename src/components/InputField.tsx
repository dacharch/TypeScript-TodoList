import React, { useEffect, useRef } from "react";
import "./style.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.focus();
      }}
    >
      <input
        ref={inputRef}
        className="input_box"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="input"
        placeholder="Enter a task"
      />
      <button className="input_submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
