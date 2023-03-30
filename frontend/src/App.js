import TaskList from "./components/TaskList";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="app">
      <div className="task-container">
        <TaskList/>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
