import TileList from './TileList'
import BlockTile from '../molecules/BlockTile'

export default (props)=>(<div className="c-tile-grid">
	<div className="c-tile-grid__inner l">

		{!!props.blockFeature && <div className="c-tile-grid__primary">
      <BlockTile {...props.blockFeature}/>
    </div>}

		<div className="c-tile-grid__secondary">
			<TileList {...props} />
		</div>

	</div>
  <style jsx>
    {`
      .c-tile-grid {
          background: url(/static/organisms/tilegrid/hero-mountains.jpg) no-repeat 50% 50% #444444;
          background-size: cover;
      }

      .c-tile-grid__inner {
          display: flex;
          flex-direction: column;
      }

      @media (min-width: 46.8em){
        .c-tile-grid__inner {
            flex-direction: row;
        }
      }

      .c-tile-grid__primary {
          display: flex;
          position: relative;
          width: 100%;
          margin-bottom: 1rem;
      }

      @media (min-width: 46.8em){
        .c-tile-grid__primary {
            width: 50%;
        }
      }

      @media (min-width: 55rem){
        .c-tile-grid__primary {
            width: 30%;
        }
      }
      
      @media (min-width: 46.8em){        
        .c-tile-grid__secondary {
            padding: 0 0 0 1em;
        }
      }
      
      .c-tile-grid__secondary {
          flex: 1;
      }
    `}
  </style>
</div>)