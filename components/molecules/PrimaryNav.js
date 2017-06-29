import Link from 'next/link'

export default (props) => (<nav id="nav" className="c-primary-nav">
  <ul className="c-primary-nav__list">
    {!!props.primaryNav && props.primaryNav.map((item,i) => (
      <li className="c-primary-nav__item" key={i}>
        <Link href={item.url}><a className="c-primary-nav__link">{item.label}</a></Link>
      </li>
    ))}
  </ul>
  <style jsx>
    {`
      .c-primary-nav {
        display: none;
      }

      .c-primary-nav__list {
        display: flex;
      }

      .c-primary-nav__link {
        font-weight: bold;
        display: block;
        padding: 1rem;
      }
      
      @media (min-width: 46.8em){
        .c-primary-nav {
            display: block;
            margin-right: 1rem;
        }
      }
    `}
  </style>
</nav>)