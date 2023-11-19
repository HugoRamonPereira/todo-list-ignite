import { ChangeEvent, FormEvent, useState } from 'react';
import PlusIcon from '../../assets/images/plus-icon.svg';

interface NewTaskProps {
  onAddNewTask: (taskTitle: string) => void;
}

export function NewTask({ onAddNewTask }: NewTaskProps) {
  const [inputValue, setInputValue] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    onAddNewTask(inputValue);
    setInputValue('');
  }

  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  return (
    <form
      className='w-[736px] h-[54px] flex items-center justify-between gap-2 mx-auto -translate-y-2/4'
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder='Adicione uma nova tarefa'
        value={inputValue}
        className='bg-Gray-500 border border-Gray-700 w-full h-full px-5 rounded-lg outline-none placeholder:text-gray-400 text-gray-100'
        onChange={handleInput}
      />
      <button
        className='h-full w-[90px] bg-Blue hover:bg-BlueDark transition-colors flex items-center justify-center gap-2 text-white font-medium rounded-lg px-7'
      >
        Criar
        <img src={PlusIcon} alt="plus icon" />
      </button>
    </form>
  );
}