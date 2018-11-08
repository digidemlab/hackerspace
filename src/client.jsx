import { h, render } from 'preact'

const header = (links) => {
	return (
		<header>
			<h1>Code Moth</h1>
			<h2>A weekly hangout in Gothenburg for learning about computers</h2>
			<nav>
				{links.map(link => {
					return <button onClick={link.action}>{link.text}</button>
				})}
			</nav>
		</header>
	)
}

const home = () => {
	return (
		<main>
		  <div class="row">
					<img src="Room.png"/>
					<div class="blurb">
						Code Moth is an <b>open weekly hangout</b> in Gothenburg, Sweden for everyone who wants to learn and work with IT for a better world.
					</div>
					<div class="blurb">
						<h2>Be motivated</h2>by meeting others with similar interests. Having people around you who are interested in what you do helps you progress, and you can either work silently or ask others for feedback.
					</div>
					<div class="blurb">
						<h2>Ask for help</h2> when you're stuck. There are experienced IT-people at the hangout who will gladly help you out!
					</div>
			</div>
        
			<div class="row">
				<img src="Stairs.png"/>
					<div class="text">
						2nd floor<br/>
						Linnégatan 21, Göteborg<br/>
						Thursdays 18:00 - 20:00
					</div>
			</div>
       
			<div class="row">
				<div class="text">
					<span id="outer-door-locked">Contact <span id="none-phumber">[PHONE NUMBER]</span> to enter the building, in case the outer door is locked. You can also send a text message if you have questions about the hangout.</span>
				</div>
			</div>
		</main>
	)
}

const otherPage = () => {
	return <h1>hi lol</h1>
}

function app(header, page) {
	/*
	const links = [
		{
			action: () => app(header, home),
			text: "Home"
		},
		{
			action: () => app(header, otherPage),
			text: "Other"
		}
	]
 */
	const links = []
	render(<div id="root">
				 {header(links)}
				 {page()}
				 </div>,
				document.body, document.getElementById("root"))
}

app(header, home)
