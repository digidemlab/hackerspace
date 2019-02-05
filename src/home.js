import { render, h } from 'preact'

export default props => {
  document.title = "Code Moth"
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
          This week we'll be meeting at Chalmers Johanneberg, next to the campus entrance at the Chalmers tram station.<br/><br/>
          Time and day: Thursday 24th of January 17:00 - 19:30<br/><br/>
          Call or send a text message to <strong>070 754 70 12</strong> if you're joining late or if you're wondering anything about Code Moth.
        </p>
			</div>
		</main>
	)
}

/*
 *        <p class="thin">
          2nd floor<br/>
          Normally we're at Linnégatan 21, Göteborg, but today (10th of January) we're at <a href="https://kalendarium.goteborg.se/wps/portal/enhetssida/motesplats-backa-brunnsbo-/kontakt" target="_blank">Mötesplats Backa-Brunnsbo</a>, Folkvisegatan 14.<br/>
          Thursdays 18:00 - 20:00
        </p>



					Contact <span id="none-phumber">070 754 70 12</span> to enter the building, in case the outer door is locked. You can also send a text message if you have questions about the hangout.
*/
