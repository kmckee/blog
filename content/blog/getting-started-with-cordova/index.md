---
date: "2015-10-04T01:51:56Z"
title: "Getting Started with Cordova"
---

Have you been telling yourself you're going to do mobile, but never got around to it? Wouldn't it be awesome if you could leverage your existing web skills to quickly build native mobile apps? Cordova is a platform for building native mobile applications that lets you do exactly that.

In this blog series, I'll walk you through building native mobile apps using HTML, CSS and JavaScript. Cordova will take your html and javascript and bundle them up inside a native application.  The native application will host an embedded web browser that will host your web app.

Other posts in this series:

* [Getting Started with Cordova](/getting-started-with-cordova)
* [Intro to Ionic](/intro-to-ionic)
* [Build a Calculator with Ionic - Part 1 of 2](/build-a-calculator-with-ionic-1)
* [Build a Calculator with Ionic - Part 2 of 2](/build-a-calculator-with-ionic-2)

## Prerequisities

### Node.js

The first thing you'll need to do is install Node. I will be using v4.1.1 in the example.

You can [download Node here](https://nodejs.org/en/download/).

Node.js is an open-source, cross-platform runtime environment for developing server-side web applications. Node.js applications are written in JavaScript and can be run within the Node.js runtime on OS X, Microsoft Windows, Linux, FreeBSD, NonStop, IBM AIX, IBM System z and IBM i.

### Node Packages

Node ships with a tool called the Node Package Manager, or npm for short. The package manager is a command line utility that is used to download and install node packages for your projects. As of the time of writing, there are over 190,000 node modules with an average of 360 new modules being added every day.

![module_counts](04-1.png)
<small>See [modulecounts.com](http://www.modulecounts.com) for updated stats.</small>

Some node packages can also include command line utilities that are added to your PATH. When you install these packages, you'll want to install them globally by using the -g switch. Lets use npm to install a couple CLI utilities that we'll be using.

```shell
npm install -g cordova
```

If you're on a mac and want to deploy to the iOS emulator you'll also want to install the ios simulator module.

```shell
npm install -g ios-sim
```

### Create a Cordova App

To create a new Cordova app, you'll want to cd into whatever directory you keep your projects and run this cordova create command, passing in the directory name you would like to create the project in.

```shell
cd ~/code/
cordova create hello_world
```

Let's take a look at what this created for us.
![vanilla_cordova_tree](04-2.png)

#### config.xml

The config.xml holds metadata about your project, the plugins that it uses, and preferences that are applicable to one or more of the platforms that you support.

#### hooks\

Hooks are an extensibility point that can be used to define custom functionality.  You can write custom scripts and wire them into cordova to be run at different points in time.  If you find yourself needing to do something that it feels like cordova won't let you do, take a look at the [documentation for hooks](https://cordova.apache.org/docs/en/edge/guide_appdev_hooks_index.md.html).  

#### platforms\

Your cordova project can be deployed to one or more different device platforms (iOs, Android, Windows Phones, etc).  Currently our project doesn't support any platforms, so this directory is empty.  After we add a platform, this directory will be where you can find the files that support each platform.  If you add support for the iOs platform, for example, the platforms directory would contain a iOs directory that contains the XCode project an all it's supporting files that will ultimately be compiled to the binaries that are deployed to your device.

#### plugins\

Cordova features a plugin system to allow you to add support for different functionalities.  If, for example, you want to use the device's camera, you could add a plugin that would expose the functionality to do so to you through a JavaScript API exposed to you.  More on that later, but for now just know that plugins can be used to add all sorts of functionality to your app that you wouldn't normally be able to use if you were building a traditional mobile website.

#### www\

This is where most of your application code will live.  The index.html page contained in this directory is the entry point for your application.  All other assets that your web application needs, including CSS, HTML, javascript, and images should be contained in this directory.

### Git

It's a good idea to get a commit in at this point, just in case things get squirrelly.  

```shell
git init
git commit -am "First commit, vanilla cordova app"
```

### Adding Platforms

Before we can see our app running anywhere, we need to add one or more platforms.  For this tutorial we'll be adding the iOS and Android platforms.  Let's tell Cordova what platforms we'd like to target:

```shell
cordova platform add ios
cordova platform add android
```

### Deploying to the iOS simulator

Lets go ahead and run our app on an iOS simulator (assuming you're on a mac).  Open up a terminal in the root of your project and run the following command:

```shell
cordova emulate ios
```

If you're following along at home and everything went well, you should see the iOS simulator spin up at this point and load an app that looks like this:
![vanilla_cordova](04-3.png)

### Deploying to an Android Simulator

Unfortunately, getting an android emulator going is a little more involved.  If you're on a windows machine, or you don't have a physical android device that you can use, I recommend you take a look at the [Android platform documentation](https://cordova.apache.org/docs/en/4.0.0/guide_platforms_android_index.md.html) to get it installed.

### Deploying to a device

The easiest way to deploy to a device is to connect a single device to your computer and then run:

```shell
cordova run ios --device
```

or

```shell
cordova run android --device
```

### Wrap up

That's it!  At this point, you probably want to throw down another git commit.

```shell
git commit -am "Added iOS and Android platforms"
```

With that out of your way, you're ready to start actually working on your app.  Before you start down that road, though, let's [take a look at what ionic has to offer](/intro-to-ionic) over a vanilla cordova installation.

Other posts in this series:

* Getting Started with Cordova
* [Intro to Ionic](/intro-to-ionic)
* [Build a Calculator with Ionic - Part 1 of 2](/build-a-calculator-with-ionic-1)
* [Build a Calculator with Ionic - Part 2 of 2](/build-a-calculator-with-ionic-2)