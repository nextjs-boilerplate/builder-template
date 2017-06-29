import Link from 'next/link'
import Progress from '../atoms/Progress'
import Overlay from './Overlay'

export default (props) => (<div>
  <Link href={props.url}>
    <a className={'c-block-tile c-block-tile--' + props.styleModifier}>
      {!!props.progress && <Progress {...props.progress} />}
      <span className="c-block-tile__value">{props.number}</span>
      <h2 className="c-block-tile__label">{props.shotHeadline}</h2>
    </a>
  </Link>
  {!!props.overlay && <Overlay {...props.overlay} />}
  <style jsx>
    {`
      @media (min-width: 55rem){
        .c-block-tile {
            padding: 4em 1em;
        }
      }
      .c-block-tile {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          background: rgba(0, 0, 0, 0.5);
          color: #fff;
          border-radius: 6px;
          padding: 1em 1em;
          text-align: center;
          overflow: hidden;
          transition: all 0.2s ease;
      }

      
      .c-block-tile__value {
          font-size: 1.5rem;
          line-height: 1.2;
      }
        @media (min-width: 55rem){
          .c-block-tile__value {
              font-size: 3rem;
          }
        }

      /**
      * Featured tile block
      */
      .c-block-tile--featured {
        min-height: 200px; }

        .c-block-tile--featured .c-block-tile__value {
          font-size: 2.5rem; }
          @media all and (min-width: 46.8em) {
            .c-block-tile--featured .c-block-tile__value {
              font-size: 5rem; } }
    `}
  </style>
</div>)