export default (props)=>(<form method="post" className="c-search-form">
	<label htmlFor="search" className="c-search-form__label is-vishidden">Search the site</label>
	<input type="search" id="search" className="c-search-form__input" placeholder="Search the site" />
  <style jsx>
    {`
      .c-search-form {
          display: none;
      }
      
      .c-search-form__input {
          padding: 0.5rem;
      }

      @media (min-width: 29.75em)
      .c-search-form {
          display: block;
      }
    `}
  </style>
</form>)