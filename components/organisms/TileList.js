import BlockTile from '../molecules/BlockTile'

export default (props)=>(<ul className="c-tile-list">
	{!!props.tileList&&props.tileList.map((item,i)=>(
    <li key={i} className="c-tile-list__item">
      <BlockTile {...item} />
    </li>
  ))}
  <style jsx>
    {`
      /**
      * Tile list
      */
      .c-tile-list {
        display: flex;
        flex-direction: column; }
        @media all and (min-width: 55rem) {
          .c-tile-list {
            flex-direction: row;
            flex-wrap: wrap; } }

      /**
      * Tile list item
      */
      .c-tile-list__item {
        width: 100%;
        margin-bottom: 1em;
        position: relative; }
        .c-tile-list__item:nth-child(2n) {
          padding-right: 0; }
        @media all and (min-width: 55rem) {
          .c-tile-list__item {
            width: 50%;
            margin: 0;
            padding: 0 1em 1em 0; } }
    `}
  </style>
</ul>)