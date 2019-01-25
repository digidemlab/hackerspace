import { render, h } from 'preact'

export default props => {
	return (
    <div>
      <article>
      <h1>Your first Python script</h1>
        <p>This is a tutorial to get you through the first challenges of how to start coding in Python. It prepares you for many other tutorials out there that assume you have everything set up already.</p>

        <h2>Why programming, and why Python?</h2>

        <p>There are many reasons for learning programming, but in the end only you can decide if it's something you want to invest time into or not. Some do it for fun, others do it to achieve something. What's certain is that it does require a lot of time and motivation to both work with and learn.</p>
        <p>Learning your first programming language is hard. However, after learning one language, other languages come much, much easier. This is the main reason for this tutorial teaching Python. What you learn here can be used in almost every other modern programming language.</p>
        <p>As for Python itself, here are some situations where it may be useful:</p>
        <ul>
          <li>Web development using <a href="https://www.djangoproject.com/" target="_blank">Django</a>.</li>
          <li>Game development using libraries like <a href="https://www.pygame.org" target="_blank">PyGame</a> and <a href="http://www.panda3d.org/" target="_blank">Panda3D</a>.</li>
          <li>Mathematical calculations, from just a simple calculator to matrix algebra and more. <a href="http://www.numpy.org/" target="_blank">Numpy</a> for example is a very fast library for matrix algebra.</li>
        </ul>

        <h2>What you should know already</h2>

        <p>This tutorial assumes you know how to navigate in a command line. If you haven't yet, look up and learn these commands:</p>

        <ul>
          <li>"ls" on Linux/Mac, or "dir" on Windows.</li>
          <li>"cd"</li>
        </ul>

        <p>Both commands are explained in one of the following tutorials, depending on your operating system:</p>
        <ul>
          <li>Linux/Mac: <a href="http://linuxcommand.org/lc3_lts0020.php" target="_blank">http://linuxcommand.org/lc3_lts0020.php</a></li>
          <li>Windows: <a href="https://www.digitalcitizen.life/command-prompt-how-use-basic-commands" target="_blank">https://www.digitalcitizen.life/command-prompt-how-use-basic-commands</a></li>
        </ul>

        <p>Also expect to run into new computer problems that you haven't seen before. If things seem wacky and out of control, that's completely safe and normal!</p>

        <h2>Installing Python</h2>

        <p>The official Python website should hopefully contain all the information you need about installing Python:</p>

        <a href="https://www.python.org/" target="_blank">https://www.python.org</a>

        <p>When this tutorial was written, the latest version of Python was 3.7. You probably want version 3 or higher. Many old tutorials use version 2, which does things a bit differently, and you might find that some old Python code doesn't work with newer Python versions.</p>

        <h2>Writing and running your first script</h2>

        <p>Now that you've (hopefully) installed Python on your computer, let's create our first script! Create a simple text file, for example by using Notepad. Write the following into this text file:</p>

        <code class="block">print("Hello World!")
        </code>

        <p>Save the file with the name "script.py" somewhere where you can find it in the command line. This is your first Python <em>script</em>. Now <em>run</em> this Python script by navigating into the folder where the script lies, and then typing the following command (depending on if you're on Windows or Unix/Mac):</p>

        <p><strong>Linux/Mac:</strong></p>
        <code class="block">&gt; python script.py
        </code>

        <p><strong>Windows:</strong></p>
        <code class="block">&gt; py script.py
        </code>

        <p>If everything went well, you should see something like this:</p>

        <code class="block">&gt; py script.py
          Hello World!
        </code>

        <p>If that is the case, congratulations! You just ran your first Python script. If not, just go back and try to figure out what went wrong. Taking time to get started is very common in new programming projects.</p>
      </article>
    </div>
  )
}
