import { h, render } from 'preact'
import Router from 'preact-router'
import createHashHistory from 'history/createHashHistory'
import Header from './header'
import Home from './home'
import Lectures from './lectures'
import Tutorials from './tutorials'

function App(props) {
	const links = [
		{
      href: "#/",
			text: "Home"
		},
		{
      href: "#/lectures",
			text: "Lectures"
    },
    {
      href: "#/tutorials",
      text: "Tutorial"
    }
	]
	return (
    <div id="root">
      <Header links={links}/>
      <Router history={createHashHistory()}>
        <Home path="/"/>
        <Lectures path="/lectures"/>
        <Tutorials path="/tutorials"/>
      </Router>
    </div>
	)
}

render(<App/>, document.body)

window.onhashchange = () => render(<App/>, document.body, document.getElementById('root'))
