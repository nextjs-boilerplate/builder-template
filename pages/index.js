
import { connect } from 'react-redux'
import Dashboard from '../components/templates/Dashboard.js'
import wrapper from '../tools/wrapper'
import { getContextedFetch } from '../tools/fetch'
import { fetchJSON, getPath } from '../tools/store/json'

const storePath = 'app_pages_index'

const Index = (props) => (
  <Dashboard {...props} />
)

Index.getInitialProps = async (ctx) => {
  return await ctx.store.dispatch(fetchJSON('/static/pages/index.json', storePath, getContextedFetch(ctx), ctx.store))
    .catch((e) => {
      console.log(e)
    })
}

export default wrapper(connect(state => state[storePath])(Index))