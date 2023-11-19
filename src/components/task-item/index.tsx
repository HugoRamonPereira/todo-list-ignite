import Trash from '../../assets/images/trash.svg';
import Checked from '../../assets/images/check-checked.svg';
import Unchecked from '../../assets/images/check-unchecked.svg';
import { TasksProps } from '../../App';

interface TaskItemProps {
  task: TasksProps;
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export function TaskItem({ task, onDelete, onComplete }: TaskItemProps) {
  return (
    <div className='first:mt-7 mt-2'>
      <div className='bg-Gray-500 rounded-lg border border-Gray-400 p-3 flex justify-between'>
        <div className='flex gap-1 items-start'>
          <button
            className='mt-[2px] w-7'
            onClick={() => onComplete(task.id)}
          >
            <img src={task.isDone ? Checked : Unchecked} alt="checkbox" />
          </button>
          <p

            className={`${task.isDone ? 'line-through text-Gray-300' : 'text-Gray-100'} font-light pt-[0.5px]`}
          >
            {task.text}
          </p>
        </div>

        <div className='w-8 h-8 ml-3'>
          <button
            className='flex items-start justify-center w-8 h-7'
            onClick={() => onDelete(task.id)}
          >
            <img src={Trash} alt="trash icon" />
          </button>
        </div>
      </div>
    </div>
  );
}