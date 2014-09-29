# BEAN Stack

### Current Version
v0.1.1

This is code for the start of a BEAN stack project. What is a BEAN stack you ask. Well it is Bootstrap, Express, Angular, and Node. At the basic level this gives you a simple Bootstrap and Angular set up with a simple Express server.

Out of the box you have livereload, JS uglify, and SASS compiling. The JS files and SASS files are watched and ready to be processed and reloaded as you develop.

The BEAN Stack files are meant to be unbloated and bare bones for easy customization. Please let me know suggestions to improve this tool. 

If you use **Yeoman** I recommend looking at the [Yeoman generator](https://github.com/mattludwigs/generator-bean-stack) for the bean-stack.

As of version 0.1.0 there are two types of bean stacks (more comming soon!).

### Base Bean
The Base Bean is just that: base. This means just the start of the project is done for you. This is so that the code is not too hard to interact with from the start, so you as the developer can customize as you see fit without having to worry about breaking something (this is the goal at least).

### Route Bean
The Route Bean is the Base Bean with small tweaks. It is set up to work as a single page app, useing ngRoute and ng-veiews. Further explaination below about the file struture is important. The main thing is since this uses client side routing it is important to make your client side route changes in the src/js/routes.js file.

## Getting started
Your will want to be sure to have a few things installed first:

* [Node.JS](http://nodejs.org/) version 0.10 and up
* [npm](http://npmjs.org), which if you have Node you should have npm.
* [Grunt CLI](http://gruntjs.com/getting-started)
* [Bower](http://bower.io/#install-bower)

### Getting Project
Clone the project onto your local machine, or download to your desktop. You can then use these templates in different project by copying the exiting start point code into your project directory. 

Then open your command line, navigate to yoru project, and enter:

```
$ node kickstart.js
```
The kickstart script will run bower install and npm install, and then clean up some of the files in the bower packages. 

**IMPORTANT NOTE:** you might need to run npm install as root/sudo, but kickstart will let you know if this happens.

Lastly start yoru server
```
$ grunt server
```
## File Structure

While trying to make the file system easy to use, it would be good to explain a few things.

Once your project is generated will have three directories you can work from: app, public, and src.

### App Directory

This is where your server side modules should live. You will always start out with a route module to declare routes. However when using the Route Bean (ngRoute single page application) you should declare your routes in the src/js/routes.js file.

### Public Directory

This is where all your compiled SASS and uglified JS will go. Plus your images directory lives here. The main area of development you will use this directory for is when you work with your html files. In the ngRoute generator there will an extra directory in here called views, and this is where you can add your views.

### Src Directory

This is where you write your JS and SASS. Remember the project is on livereload watching these files, so in development your changes will sent through the compiling and uglifying when you save these files, and then your browser will be updated.

Again please let me know how to improve this project, but just remember we are going toward simplictiy for solid start point in a project. We don't want to overload a developer with tons of code and complex systems, so they can still have the freedom to customize freely with little to none breakage. Thanks!


## License

The MIT License (MIT)

Copyright (c) 2014

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

