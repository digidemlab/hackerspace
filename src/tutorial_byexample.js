import { render, h } from 'preact'

export default props => {
  document.title = "Code Moth - Python By Example"

	return (
    <main>
      <article>
    <h1>Python by example</h1>
    <p>An example for people who are learning the basics of programming, with short descriptions and some exercises.</p>

    <h2>How to use the tutorial</h2>
    <p>Copy-paste the example code into a Python script and run it, or just read through the examples. Then do the exercises in the end.</p>

    <h2>Relevance</h2>
    <p>You'll learn how to use Python as a calculator. This is basic knowledge that is useful in any programming situation.</p>

    <h2>Calculating the area of a rectangle</h2>
    <p>We want to calculate the area of a rectangle using Python. For a rectangle with dimensions 5x4, we can do this:</p>

    <code class="block">print(5*4)
    </code>

    <p>This happens when we run the code:</p>

    <code class="block">20
    </code>

    <p>The function "print(...)" writes whatever you put inside the parenthesis in the terminal.</p>

    <p>
      The arithmetic operator "*" multiplies two numbers, ex. "3*2", just like + and - would add or subtract. You can read more about these operators here: <br/>
    <a href="https://www.tutorialspoint.com/python/python_basic_operators.htm">https://www.tutorialspoint.com/python/python_basic_operators.htm</a>
    </p>

    <h2>Area of a rectangle with user input</h2>

    <p>What if we don't want to change the code every time we calculate a different rectangle? Here's how:</p>

    <code class="block">widthText = input("Width of rectangle: ")<br/>
      heightText = input("Height of rectangle: ")<br/>
      <br/>
      width = int(widthText)<br/>
      height = int(heightText)<br/>
      <br/>
      print(width*height)<br/>
    </code>

    <p>This happens when we run the code:</p>

    <code class="block">Width of rectangle: 12<br/>
      Height of rectangle: 8<br/>
    96
    </code>

    <p>The function "input(...)" prints a message in the terminal, waits for the user to write something, then returns what the user wrote.</p>

    <p>Since what the user wrote is a form of text, we can't multiply it like we do with a number. Therefore we need to convert it into a number. We do this by using the "int(...)"-function.</p>

    <p>The assignment operator "=" saves the value of the thing to the right of it inside the variable to the left of it. A variable is a part of the computer's memory with a name, e.g. "favouritePet" could be a variable that contains the text "dog". In this case, the variable "width" contains the number "12".</p>

    <h2>Restricting the user from breaking the laws of geometry</h2>
    <p>What if the user writes a negative width or height? This is not allowed in geometry. Therefore, we will give them an error message when they write a negative number.</p>

    <code class="block">widthText = input("Width of rectangle: ")<br/>
      heightText = input("Height of rectangle: ")<br/>
      <br/>
      width = int(widthText)<br/>
      height = int(heightText)<br/>
      <br/>
      if width &lt; 0 or height &lt; 0:<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;print("A rectangle can't have negative width or height!")<br/>
      else:<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;print(width*height)
    </code>

    <p>This happens when we run the code:</p>

    <code class="block">Width of rectangle: 12<br/>
      Height of rectangle: -3<br/>
    A rectangle can't have negative width or height!
    </code>

    <p>The "&lt;", or "less than" symbol, compares what's left and right of it and returns whether the statement is True or False. "width &lt; 0" returns True of width is negative.</p>

    <p>The "or" statement returns True if either of the things to the left or right of it is True. "width &lt; 0 or height &lt; 0" returns True if either width or height is negative.</p>

    <p>The statement "if" creates a code block that is run if its given conditions are met, which means they return True. A code block is a separate piece of code that can be run at will. In Python, code blocks are started by a ":" symbol, followed by an indentation (four spaces; "    ") for every part of code that's part of the code block. The code block ends when a line starts that's not indented.</p>

    <p>The statement "else" comes after one or more if statements. It starts a code block that is run if none of the if statements' conditions were met.</p>

    <h2>Exercises</h2>
    <p>Create a similar program for the area and circumference of a circle.</p>
    <p>Do the same thing for the volume of a cylinder.</p>
    </article>
  </main>
  )
}
