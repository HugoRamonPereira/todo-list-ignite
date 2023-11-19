import Logo from '../../assets/images/Logo.svg';

export function Header() {
  return (
    <header className='w-full h-[200px] bg-Gray-700 flex items-center justify-center'>
      <img src={Logo} alt="todo-logo" />
    </header>
  );
}