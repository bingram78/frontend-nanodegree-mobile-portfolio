## Website Performance Optimization portfolio project

This was part of a project for Udacity's Front End Development Nanodegree. The project description and directions are shown later for reference.

### Changes Made

#### PageSpeed Score portion
1. Setup grunt to automate imagemin processes.
1. Imagemin in grunt used to minify and compress images. Then, ImageOptim to further reduce size. Change image links to match minified image folders.
1. One image resized in Gimp and exported to restrain image size.
1. Inline CSS to improve PageSpeed insight score. This seemed like a lot to inline but it helped prevent render blocking.
1. Inline Google Fonts styles to improve speed.
1. Set media types for CSS that can be separated into other files. Prevents render blocking behavior.
1. Async loading of JavaScript file in index.html to stop render blocking.

*could include: Uglify CSS and HTML, unCSS but project should meet specs without these. Would include in production environment.*

#### Getting Rid of Jank portion
1. Eliminate redundant code in resizePizzas function.
1. Refactor functions (resizePizzas) for Force Layout issue.
1. Refactor updatePositions function to help FPS.
1. Include requestAnimationFrame in updatePositions and DOMContentLoaded sections to improve performance.

*One note about the FPS is that speed is definitely affected by having the "Screenshots" checked on while testing. Having that checked lowered the FPS to ~30.
Leaving the "Screenshots" unchecked brought the score up to 60FPS. That took a long time to discover and much frustration preceded that discovery.*

### Steps to Run:
On local machine:
1. Check out repository using git clone.
1. Navigate to the directory, run a local server using python.
  ``` bash
  cd /Your-Path-to-folder
  python -m SimpleHTTPServer 8000
  ```
1. Open web browser and navigate to 0.0.0.0:8000

Using ngrok:
1. Download and install [ngrok](https://ngrok.com/) to the top-level of the directory.
1. Navigate to the directory and with the python server still running, start the ngrok remote server.
  ``` bash
  cd /Your-Path-to-folder
  ./ngrok http 8000
  ```
1. ngrok will give a public website address that can be used in PageSpeed Insights.

******
******
*Original project description and directions below!*

## Website Performance Optimization portfolio project

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository and inspect the code.

### Getting started

#### Part 1: Optimize PageSpeed Insights score for index.html

Some useful tips to help you get started:

1. Check out the repository
1. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to the top-level of your project directory to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ./ngrok http 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! Optional: [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

Profile, optimize, measure... and then lather, rinse, and repeat. Good luck!

#### Part 2: Optimize Frames per Second in pizza.html

To optimize views/pizza.html, you will need to modify views/js/main.js until your frames per second rate is 60 fps or higher. You will find instructive comments in main.js.

You might find the FPS Counter/HUD Display useful in Chrome developer tools described here: [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).

### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>
