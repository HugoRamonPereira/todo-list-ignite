import { TasksProps } from '../../App';
import { TaskItem } from '../task-item';

interface TaskProps {
  tasks: TasksProps[];
  onDeleteTask: (id: string) => void;
  onCompleteTask: (taskId: string) => void;
}

export function Tasks({ tasks, onDeleteTask, onCompleteTask }: TaskProps) {
  const tasksAmount = tasks.length;
  const doneTasks = tasks.filter((task) => task.isDone).length;

  return (
    <section className='w-[736px] h-[700px] overflow-y-auto mx-auto flex flex-col'>
      <header className='flex justify-between'>
        <div className='flex justify-center items-center gap-3'>
          <p className='text-Blue font-semibold'>
              Tarefas criadas
          </p>
          <span className='text-Gray-200 w-8 h-5 bg-Gray-400 p-3 flex items-center justify-center rounded-2xl'>
            {tasksAmount}
          </span>
        </div>

        <div className='flex justify-center items-center gap-3'>
          <p className='text-Purple font-semibold'>
              Concluídas
          </p>
          <span className='text-Gray-200 w-20 h-5 bg-Gray-400 p-3 flex items-center justify-center rounded-2xl'>
            {doneTasks} de {tasksAmount}
          </span>
        </div>
      </header>

      <div>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={onDeleteTask}
            onComplete={onCompleteTask}
          />
        ))}
      </div>
    </section>
  );
}