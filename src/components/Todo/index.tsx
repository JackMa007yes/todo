import { FC, useEffect, useState } from "react";
import TodoList, { TodoListItemType } from "./TodoList";
import CreateTodo from "./CreateTodo";
import { useSnackbar } from "notistack";
import { LocalStorageKeyEnum } from "../../type";

const Todo: FC = () => {
  const { enqueueSnackbar } = useSnackbar();

  const [todoList, setTodoList] = useState<TodoListItemType[]>(
    JSON.parse(
      localStorage.getItem(LocalStorageKeyEnum.LOCAL_TODO_LIST) || "[]"
    )
  );

  const checkAlreadyExist = (value: string) => {
    return todoList.find((item) => item.value === value);
  };

  const handleCreateTodo = (todo: string) => {
    if (checkAlreadyExist(todo)) {
      enqueueSnackbar("The same todo already exists", { variant: "warning" });
      return;
    }
    setTodoList([
      ...todoList,
      {
        value: todo,
        checked: false,
      },
    ]);
    enqueueSnackbar("Created successfully", { variant: "success" });
  };

  const handleItemCheck = (item: TodoListItemType, state: boolean) => {
    const newTodoList = todoList.map((todo) =>
      todo === item ? { ...todo, checked: state } : todo
    );
    setTodoList(newTodoList);
  };

  const handleItemDelete = (item: TodoListItemType) => {
    const newTodoList = todoList.filter((todo) => todo !== item);
    setTodoList(newTodoList);
  };

  const handleClearCompleted = () => {
    const newTodoList = todoList.filter((todo) => !todo.checked);
    setTodoList(newTodoList);
  };

  const handleSelectAll = () => {
    const newTodoList = todoList.map((todo) => ({ ...todo, checked: true }));
    setTodoList(newTodoList);
  };

  useEffect(() => {
    localStorage.setItem(
      LocalStorageKeyEnum.LOCAL_TODO_LIST,
      JSON.stringify(todoList)
    );
  }, [todoList]);

  return (
    <div
      className="w-1/2 min-w-96 h-100 p-10 flex flex-col m-20 bg-slate-100 rounded-2xl overflow-hidden">
      <h1 className="text-4xl font-bold mb-8">TODO😊</h1>
      <CreateTodo onCreate={handleCreateTodo} />
      <TodoList
        data={todoList}
        onItemCheck={handleItemCheck}
        onItemDelete={handleItemDelete}
        onClearCompleted={handleClearCompleted}
        onSelectAll={handleSelectAll}
      />
    </div>
  );
};

export default Todo;
