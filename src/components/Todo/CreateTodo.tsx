import { TextField } from "@mui/material";
import { FC, useState } from "react";

interface CreateTodoProps {
  onCreate: (value: string) => void;
}

const CreateTodo: FC<CreateTodoProps> = ({ onCreate }) => {
  const [value, setValue] = useState("");
  return (
    <div className="w-full mb-10">
      <TextField
        value={value}
        label="Create a new todo"
        color="secondary"
        className="w-full"
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            value && onCreate?.(value);
            setValue("");
          }
        }}
      />
    </div>
  );
};

export default CreateTodo;
