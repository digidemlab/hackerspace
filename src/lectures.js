import { render, h } from 'preact'

export default props => {
  document.title = "Code Moth - Lectures"
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
