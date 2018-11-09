import { h, render } from 'preact'
import Router from 'preact-router'
import createHashHistory from 'history/createHashHistory'

const Header = (props) => {
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

const Home = (props) => {
	return (
		<main>
		  <div class="row">
        <img src="Room.png"/>
        <p>
          Code Moth is an <em>open weekly hangout</em> in Gothenburg, Sweden for everyone who wants to learn and work with IT for a better world.
        </p>
        <p>
          <h2>Be motivated</h2>by meeting others with similar interests. Having people around you who are interested in what you do helps you progress, and you can either work silently or ask others for feedback.
        </p>
        <p>
          <h2>Ask for help</h2> when you're stuck. There are experienced IT-people at the hangout who will gladly help you out!
        </p>
			</div>
        
			<div class="row">
				<img src="Stairs.png"/>
        <p class="thin">
          2nd floor<br/>
          Linnégatan 21, Göteborg<br/>
          Thursdays 18:00 - 20:00
        </p>
			</div>
       
			<div class="row">
				<p class="thin">
					Contact <span id="none-phumber">070 754 70 12</span> to enter the building, in case the outer door is locked. You can also send a text message if you have questions about the hangout.
				</p>
			</div>
		</main>
	)
}

const Lectures = () => {
	return (
    <main>
      <div class="pageblurb">
        <h1>Lectures</h1>
        <p>Sometimes we hold a public lecture or workshop at Code Moth. Here are the latest lectures you can participate in.</p>
      </div>
      <div class="row">
        <h1>Why should I learn programming?</h1>
        <h2 class="tagline">A lecture on the applications of programming</h2>
        <img src="focused_radu_and_seb.png"/>
        <p>
          Thursday, 29th of November<br/>
          18:00-19:00<br/>
          Language: English if needed, otherwise Swedish.<br/>
          Required knowledge: None, everyone is welcome.<br/>
          Place: Linnégatan 21, Göteborg (our usual location)
        </p>
        <p>
          Programming is a popular subject nowadays, and many want to learn more about it. But what is it, really? In this lecture we explore a couple of examples that show how widespread programming really is, and what possibilities appear after one learns a programming language.
        </p>
        <p>
          After the lecture there will be an open hangout where everyone is welcome to hang out and talk, code, ask questions and learn things about computers. Everyone is welcome no matter previous knowledge.
        </p>
        <p>
          Depending on how many are interested we might put up a signup form, otherwise you can just join without signing up.
        </p>
      </div>
    </main>
  )
}

function App(props) {
	const links = [
		{
      href: "#/",
			text: "Home"
		},
		{
      href: "#/lectures",
			text: "Lectures"
		}
	]
	return(
    <div id="root">
      <Header links={links}/>
      <Router history={createHashHistory()}>
        <Home path="/"/>
        <Lectures path="/lectures"/>
      </Router>
    </div>
	)
}

render(<App/>, document.body)

window.onhashchange = () => render(<App/>, document.body, document.getElementById('root'))
