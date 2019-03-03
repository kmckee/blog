---
path: "/posts/2015/04/knockout-components/"
date: "2015-04-18T14:25:14Z"
title: "Getting Familiar with Knockout Components"
categories: ["Tutorials"]
tags: ["Javascript", "KnockoutJS"]
excerpt: "I put together a learning activity for a few teams I'm currently working with to help us get more f..."
---

I put together a learning activity for a few teams I'm currently working with to help us get more familiar with Components in KnockoutJS.

##### A few reasons to consider Components...

The most obvious reason is re-use.  By creating a component that represents some chunk of html and it's corresponding behaviors you make it portable. You can drop that component into different spots on the page, or even different pages in your application, and keep your code nice and DRY.

Another reason to consider components is that it encourages composition in your client side view models.  If these components are responsible for retrieving their own data, you can avoid 'god' like controllers with giant dependency graphs.  Instead of getting all the data for the page through one controller action, each component can run through it's own action and get just the data it needs.

Here's the starting point for the exercise:

[http://jsfiddle.net/kmckee8372/kbb31abt/](http://jsfiddle.net/kmckee8372/kbb31abt/ "Starting point")

Here it is after I played with it for a bit:

[http://jsfiddle.net/kmckee8372/20haq73w/](http://jsfiddle.net/kmckee8372/20haq73w/ "End point?")