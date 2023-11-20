import { useState } from 'react';
import { Header } from './components/header';
import { NewTask } from './components/new-task';
import { Tasks } from './components/tasks';
import { NoTasks } from './components/no-tasks';

export interface TasksProps {
  id: string;
  text: string;
  isDone: boolean;
}

function App() {
  const [tasks, setTasks] = useState<TasksProps[]>([]);

  function handleCreateTask(taskTitle: string) {
    setTasks([...tasks,
      {
        id: Math.random().toString(),
        text: taskTitle,
        isDone: false
      }]);
  }

  function handleDeleteTask(taskId: string) {
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTasks);
  }

  function toggleDoneTask(taskid: string) {
    const toggledTasks = tasks.map((task) => {
      if (task.id === taskid) {
        return {
          ...task,
          isDone: !task.isDone
        };
      }
      return task;
    });

    setTasks(toggledTasks);
  }

  return (
    <>
      <Header />
      <NewTask onAddNewTask={handleCreateTask} />
      {tasks.length === 0
        ? <NoTasks />
        : <Tasks
          tasks={tasks}
          onDeleteTask={handleDeleteTask}
          onCompleteTask={toggleDoneTask}
        /> }
    </>
  );
}

export default App;
