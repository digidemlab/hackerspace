import { render, h } from 'preact'

export default props => {
	return (
    <nav>
      {props.links.map(link => {
        return <a className={
          window.location.hash == link.href ? 'active' : ''
        } href={link.href}>{link.text}</a>
      })}
    </nav>
	)
}
