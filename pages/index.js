import {fetchJSON} from '../tools/fetch'
import Dashboard from '../components/templates/Dashboard.js'


const Index = (props) => (
  <Dashboard {...props} />
)

Index.getInitialProps = async ({ req, res }) => {
  return await fetchJSON('/static/pages/index.json', {}, req, res)
}

export default Index