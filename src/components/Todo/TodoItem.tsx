import { DeleteRounded } from "@mui/icons-material";
import { Checkbox, IconButton } from "@mui/material";
import { FC } from "react";
import { TodoListItemType } from "./TodoList";

type Props = {
  data: TodoListItemType;
  onCheck: (state: boolean) => void;
  onDelete: (data: TodoListItemType) => void;
};

const TodoItem: FC<Props> = ({ data, onCheck, onDelete }) => {
  return (
    <div className="w-100 p-4 flex justify-between cursor-pointer border-b transition-all">
      <span>
        <Checkbox
          checked={data.checked}
          color="secondary"
          onChange={(e) => onCheck(e.target.checked)}
        />
        {data.value}
      </span>
      <IconButton aria-label="delete" onClick={() => onDelete(data)}>
        <DeleteRounded fontSize="inherit" />
      </IconButton>
    </div>
  );
};

export default TodoItem;
