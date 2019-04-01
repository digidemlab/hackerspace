import { render, h } from 'preact'

export default props => {
  function isActive(link) {
    let status = ''
    if (window.location.hash.indexOf(link.href) > -1) {
      status = 'active'

      if (link.href == '#/' &&
          window.location.hash != '#/') {
        status = ''
      }
    }

    return status
  }

	return (
    <nav>
      {props.links.map(link => {

        return <a className={isActive(link)} href={link.href}>{link.text}</a>
      })}
    </nav>
	)
}
