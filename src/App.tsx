import { SnackbarProvider } from "notistack";
import Layout from "./components/Layout";
import Todo from "./components/Todo";

function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <Layout>
        <Todo />
      </Layout>
    </SnackbarProvider>
  );
}

export default App;
