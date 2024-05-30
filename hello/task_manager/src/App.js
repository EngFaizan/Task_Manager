import logo from './logo.svg';
import './App.css';
import TaskForm from './components/Task_Creation_Form';
import TaskListView from './components/Task_List_View';

function App() {
  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskListView />
    </div>
  );
}

export default App;