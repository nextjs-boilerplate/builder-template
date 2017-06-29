const basicStyle = {
  display: 'block',
  maxWidth: '200px',
}
const styles = {
  basic: basicStyle,
  'c-logo-link__img': {
    ...basicStyle,
    position: 'relative'
  }
}
const getStyle = (modifier = 'basic')=>styles[modifier]

export default (props) => (<img src="/static/atoms/logo/logo.svg" style={getStyle(props.styleModifier)} alt={props.companyName} />)