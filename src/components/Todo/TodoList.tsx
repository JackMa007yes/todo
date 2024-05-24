import { FC } from "react";
import TodoItem from "./TodoItem";
import { Button, ButtonGroup, Paper } from "@mui/material";
import Empty from "../Empty";

export interface TodoListItemType {
  value: string;
  checked: boolean;
}

type Props = {
  data: TodoListItemType[];
  onItemCheck: (item: TodoListItemType, state: boolean) => void;
  onItemDelete: (item: TodoListItemType) => void;
  onSelectAll: () => void;
  onClearCompleted: () => void;
};

const TodoList: FC<Props> = ({
  data,
  onItemCheck,
  onItemDelete,
  onSelectAll,
  onClearCompleted,
}) => {
  return (
    <Paper
      elevation={0}
      className="flex-1 overflow-auto border flex flex-col justify-between h-100">
      <section className="overflow-auto flex-1">
        {data.map((item) => (
          <TodoItem
            data={item}
            onCheck={(state) => onItemCheck(item, state)}
            onDelete={onItemDelete}
            key={item.value}
          />
        ))}
        {data.length === 0 && <Empty />}
      </section>
      <ButtonGroup size="large" color="secondary" className="w-100 flex-0">
        <Button className="w-1/2" onClick={onSelectAll}>
          All Active Completed
        </Button>
        <Button className="w-1/2" onClick={onClearCompleted}>
          Clear Completed
        </Button>
      </ButtonGroup>
    </Paper>
  );
};

export default TodoList;
