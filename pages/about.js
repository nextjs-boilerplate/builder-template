import {fetchJSON} from '../tools/fetch'
import Detail from '../components/templates/Detail.js'

const About = (props) => (
    <Detail />
)

About.getInitialProps = async ({ req, res }) => {
  return await fetchJSON('/static/pages/about.json', {}, req, res)
}

export default About