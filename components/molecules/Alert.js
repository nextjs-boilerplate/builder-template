export default (props) => (<div>
  <div className={'alert alert--' + props.styleModifier} dangerouslySetInnerHTML={{ __html: props.alertText }} />
  <style jsx>
    {`    
      .alert {
        text-align: center;
        padding: 1rem;
        background: #f7f9f9;
        overflow: hidden;
        font-size: 1em;
        animation: slideDown 2s forwards; }

      .alert :global(a) {
        color: inherit;
        text-decoration: underline; }

      /**
      * Error alert
      */
      .alert--error {
        color: #b12a0b;
        background: #fdded8; }

      /**
      * Success alert
      */
      .alert--success {
        color: #03804d;
        background: #d4f3e6; }

      /**
      * Warning alert
      */
      .alert--warning {
        color: #a59b15;
        background: #fffecf; }

      /**
      * Info alert
      */
      .alert--info {
        color: #0192d0;
        background: #d3f2ff; }
      
    `}

  </style>
</div>)