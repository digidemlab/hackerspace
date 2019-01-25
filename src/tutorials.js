import { render, h } from 'preact'
import FirstPythonScript from './tutorial_firstscript'
import PythonByExample from './tutorial_byexample'
import Nav from './nav'

export default props => {
  const tutorial = props.tutorial

  let tutelem = ''
  if (tutorial === "first-python-script") {
    tutelem = <FirstPythonScript />
  } else if (tutorial === "python-by-example") {
    tutelem = <PythonByExample />
  }

  const links = [
    {
      href: "#/tutorials/first-python-script",
      text: "1. First Python Script"
    },
    {
      href: "#/tutorials/python-by-example",
      text: "2. Python By Example"
    }
  ]

	return (
    <main class="tutorials">
      <div class="pageblurb">
        <h1>Tutorials</h1>

        <p>Below are a couple of tutorials in the programming language <em>Python</em> that could help you in learning.</p>

        <p><em>None of these are a requirement for any of our lectures.</em> They are just a complement to our weekly activity.</p>

        <Nav links={links} />
      </div>
      {tutelem}
    </main>
  )
}
