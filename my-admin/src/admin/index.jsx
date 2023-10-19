import { Admin, Resource } from "react-admin";
import { PocketBaseProvider } from "./ra-pocketbase";
import { TodoCreate, TodoEdit, TodoList, TodoShow } from "./todos";

const pbProvider = PocketBaseProvider('http://127.0.0.1:8090/');

function App() {
  return (
    <Admin dataProvider={pbProvider.dataProvider} authProvider={pbProvider.authProvider}>
      <Resource />
    </Admin>
  )
}

export default App
