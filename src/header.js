import { render, h } from 'preact'
import Nav from './nav'

export default props => {
	return (
		<header>
      <img src="codemoth_logo_textured.svg"/>
			<h1>Code Moth</h1>
			<h2>A weekly hangout in Gothenburg for learning about computers</h2>

      <Nav links={props.links} />
		</header>
	)
}
