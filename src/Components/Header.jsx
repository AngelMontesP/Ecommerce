import '../Components/header.scss'
const Header = () => {
  return (
<nav className='header' >
<a className='header__logo' href=''>Logo</a>
<ul className='header__nav-list'>
<li className='header__list-item'>
    <a className='header__item-link' href="/home"></a>
</li>
<li className='header__list-item'>
    <a className='header__list-link' href="/dashboard">Dashboard</a>
</li>
<li className='header__list-item'>
    <a className='header__list-link' href="/secret">Secret</a>
</li>
<li className='header__list-item'>
    <a className='header__list-link' href="/login">login</a>
</li>
<li className='header__list-item'>
    <a className='header__list-link' href="/Signup">Signup</a>
</li>

</ul>
    </nav>
  )
}

export default Header
