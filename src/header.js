import { render, h } from 'preact'

export default props => {
	return (
		<header>
			<h1>Code Moth</h1>
			<h2>A weekly hangout in Gothenburg for learning about computers</h2>

			<nav>
				{props.links.map(link => {
					return <a className={
            window.location.hash == link.href ? 'active' : ''
          } href={link.href}>{link.text}</a>
				})}
			</nav>
		</header>
	)
}
