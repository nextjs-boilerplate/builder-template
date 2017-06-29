const style = {
    WebkitAppearance: 'none',
    appearance: 'none',
    border: '1px solid rgba(0, 0, 0, 0.5)',
    background: '#cdcaa2',
    backgroundSize: 'auto',
    width: '100%',
    maxWidth: '300px',
    height: '0.5rem',
    borderRadius: '6px',
    marginBottom: '1em',
}

export default (props)=>(<progress style={style} max={ props.max } value={ props.progressValue }>
	<strong>{props.label}</strong>
</progress>)
