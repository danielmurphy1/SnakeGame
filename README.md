# Snake Game App

_Web Based Snake Game using Vanilla JavaScript, HTML, and CSS_

## Instructions

---

This application is my take on the classic Snake Game that became popular when it was included on cell-phones in the late 1990's and early 2000's before smart-phones took over. Use the keyboard arrows to move your snake, and see how many apples you can eat before running into the sides or the rest of the snake!


Access the app [here](https://danielmurphy1.github.io/SnakeGame/)

![SnakeGame Screen](https://github.com/danielmurphy1/SnakeGame/blob/master/SnakeGameScreenShot.JPG)

### Summary

I created this app to learn how to use the HTML canvas element. I learned how to create and draw the canvas, how to draw items over the canvas. What was most challenging, though, was learning how to create 2D animation using the canvas's 2D context so that the canvas and the items drawn on it could continuously be drawn, giving the appearance of animation. This was achieved by utilizing JavaScript's built-in setInterval() function and setting a framerate so as to achieve the smoothest possible animation appearance. 

In creating this game, I also increaed my debugging skills. It is one thing to debug an app that relies on user input to move through the code, but when debugging using the setInterval() function, it is even more important to watch the code to follow the logic. 

Lastly, the most challenging portion of creating this game was getting the snake to continously grow and be redrawn properly with each draw during each iteration of the setInterval() function. Here, I found that it was only necessary to move the "head" of the snake (which is the first element in an array that makes up the snake's body), and then to redraw each added body unit (an element in the arry) from back to front, each taking the previous position of the piece in front of it. I learned a very good amount in creating this game, and I look forward to take what I learned in this app and implement it into my future projects.

### Author

- Dan Murphy