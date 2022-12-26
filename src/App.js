import './App.css';
import Title from './components/Title';
import TaskList from './components/TaskList';

function App() {
  const tasks = ["Learn React", "Climb Mt. Everest","Run a marathon","Feed the dogs"];
  return (
    <div className='container'>
      <Title title="Hello Dojo"/>
      <TaskList tasks={tasks} title="Things I need to do:"/>
    </div>
  );
}

export default App;
