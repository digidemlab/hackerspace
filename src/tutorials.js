import { render, h } from 'preact'
import FirstPythonScript from './tutorial_firstscript'
import PythonByExample from './tutorial_byexample'
import MasterTheMoose from './article_master_the_moose'
import Nav from './nav'

export default props => {
  const tutorial = props.tutorial

  let tutelem = ''
  if (tutorial === "first-python-script") {
    tutelem = <FirstPythonScript />
  } else if (tutorial === "python-by-example") {
    tutelem = <PythonByExample />
  } else if (tutorial === "master-the-moose") {
    tutelem = <MasterTheMoose />
  }

  const links = [
    {
      href: "#/tutorials/first-python-script",
      text: "1. First Python Script"
    },
    {
      href: "#/tutorials/python-by-example",
      text: "2. Python By Example"
    },
    {
      href: "#/tutorials/master-the-moose",
      text: "3. How do you understand programming?"
    }
  ]

	return (
    <main class="tutorials">
      <div class="pageblurb">
        <h1>Tutorials and Articles</h1>

        <p>Below are a couple of tutorials and articles that could help you in code learning.</p>

        <p><em>None of these are a requirement for any of our lectures.</em> They are just a complement to our weekly activity.</p>

        <Nav links={links} />
      </div>
      {tutelem}
    </main>
  )
}
