import LogoLink from '../molecules/LogoLink'
import PrimaryNav from '../molecules/PrimaryNav'
import Search from '../molecules/Search'

export default (props)=>(<header className="c-header" role="banner">
  <LogoLink {...props}/>
  <div className="c-header__controls">
    <a href="#nav" className="nav-toggle nav-toggle-menu icon-menu"><span className="is-vishidden">Menu</span></a>
		<a href="#search-form" className="nav-toggle nav-toggle-search icon-search"><span className="is-vishidden">Search</span></a>
    <PrimaryNav {...props} />
    <Search />
  </div>
  <style jsx>
    {`
      .c-header {
        display: flex;
        align-items: center;
        box-shadow: 0px 3px 5px -2px rgba(0, 0, 0, 0.2);
      }

      .c-header__controls {
        margin-left: auto;
        display: flex;
        align-items: center;
        padding-right: 1rem;
      }
    `}
  </style>
</header>)