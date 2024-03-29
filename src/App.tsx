import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { ListOfTasks} from './components/Pages/ListOfTasks/ListOfTasks';
import { TaskView, taskLoader } from './components/Pages/TaskView/TaskView';
import { TaskEdit, editLoader } from './components/Pages/TaskEdit/TaskEdit';


const router = createBrowserRouter(createRoutesFromElements(
  <Route>
      <Route path="/task/:id/task_edit" element={<TaskEdit/>} loader={editLoader}/>
      <Route path="/task/:id" element={<TaskView/>} loader={taskLoader}/>
      <Route path="/" element={<ListOfTasks/>}/>
  </Route>
))

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
