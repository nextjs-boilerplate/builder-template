import Head from 'next/head'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'
import Alert from '../molecules/Alert'
import TileGrid from '../organisms/TileGrid'

export default (props)=>(
  <div>
    <Head>
      <link href="/static/global/css/reset.css" media="all" rel="stylesheet" />
      <link href="/static/global/css/guild.css" media="all" rel="stylesheet" />
      <link href="/static/global/css/icon.css" media="all" rel="stylesheet" />
      <link href="/static/global/css/form.css" media="all" rel="stylesheet" />
      <link href="/static/global/css/link.css" media="all" rel="stylesheet" />
    </Head>
    <Header {...props}/>
    <main role="main">
      {!!props.alert && <Alert {...props.alert} />}
      {!!props.sectionBlock && <TileGrid {...props.sectionBlock} />}      
    </main>
    <Footer/>
  </div>
)