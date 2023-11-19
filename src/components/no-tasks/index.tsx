import Clipboard from '../../assets/images/Clipboard.svg';

export function NoTasks() {
  return (
    <div className='w-[736px] mx-auto flex flex-col mt-10 items-center justify-center gap-5'>
      <div className='border-[0.5px] border-Gray-400 w-full mb-10' />
      <img src={Clipboard} alt="clipboard icon" />
      <div className='flex flex-col items-center'>
        <p className='text-Gray-300 font-semibold tracking-wide'>
          Você ainda não tem tarefas cadastradas
        </p>
        <p className='text-Gray-300 font-light'>
          Crie tarefas e organize seus items a fazer
        </p>
      </div>
    </div>
  );
}