---
path: "/posts/2014/08/theoretical-vs-empirical-estimation-software-development-effort/"
date: "2014-08-18T14:53:41Z"
title: "Theoretical vs Empirical Estimation of Software Development Effort"
categories: ["Opinions"]
tags: ["estimates", "process"]
excerpt: "Lean thinking tells us that any expenditure of resources that does not create value for the custome..."
---

Lean thinking tells us that any expenditure of resources that does not create value for the customer is waste. If you could accurately tell your partners when your project would be complete, that would probably be incredibly valuable to them. So why, then, do some people consider it wasteful to have developers estimate?

# Theoretical Estimation

Most software estimation activities that I've seen in my career are what I'd consider to be theoretical estimation. This includes poker planning, t-shirt sizing, Fibonnaci sizing, etc. A few concerns I have with these approaches are:

* You don't know what you don't know. You really can't estimate what you don't know.
* Each card estimate is basically pulled out of thin air.
* [Studies have shown](http://en.wikipedia.org/wiki/Software_development_effort_estimation "Software Development Estimation")that even when we are 90% sure about the amount of effort that something will require, we're wrong about it 60-70% of the time.

Card estimation doesn't provide value because it's inaccurate, plain and simple. In all of these techniques, _you're literally making up numbers_.  Wrong numbers.

The activity of estimating itself is waste, but even more than that you're going to break trust with your business when reality doesn't match your estimates. When that happens, and it will, all you can say is "Sorry, I'll try to guess better next time."

**I don't know about you, but I don't want to work this way anymore.**

> Hofstadter's Law: It always takes longer than you expect, even when you take into account Hofstadter's Law. — Douglas Hofstadter, Gödel, Escher, Bach: An Eternal Golden Braid

# Empirical Estimation

How can we get away from making up numbers, then?  You have options, but I'm going to briefly describe a pretty light weight approach that I've seen work well for a few different teams I've coached.

## Small Story Cards

You need to be working in small slices.  You should be doing this for a host of other reasons, but, it's particularly important if you're going to move away from having developers estimating.

If all of your cards are "Small", then you can just count the number of things that were completed.  What you'll find is that you'll get  about the same number of things done per week regardless of their size.  In other words, you'll get 5 cards done per week.  It doesn't matter if you estimate the size of the cards or not, you'll still get the same 5 cards done.  It averages out.  This also puts a positive pressure on slicing small, which is a Good Thing.

Of course all the other rules of story card slicing still apply.  Don't overslice your cards down into technical tasks.  All of your cards should still show _demonstrable_ progress.  Always ask yourself, "How will I demo this card to the business?"

## Metrics

A couple of metrics that you'll want to keep track of are your card cycle time time and the growth rate of cards for your project.

Your card cycle time is the entire time that it's actively being worked on.  This begins when you do your story card meeting with your product owner.  In a perfect world it would end after the feature is deployed to production.  In practice, however, sometimes it makes more sense to consider the card done when the card is accepted by your Product Owner.

Card growth is another important metric to track as it affects your projections.  Based on the rate at which cards are being discovered (growth) and the rate at which cards are being completed we can project when we will complete some subset of work.

### So, where does this leave you?

* Team spends close to 0 time estimating.
* Project managers have a much more active role in estimation.
* Team is focused on finding the smallest slices that will deliver demonstrable value
    * Small slices mean more options for the business (ability to pivot and defer less valuable work).
    * Small slices increase team morale (sense of completion).
    * Small slices lead to higher quality code (narrower focus by the team).
* Estimates are based on facts rather than the opinions of team members.
* Increased transparency with your Product Owner and stakeholders.

This certainly isn't the only way to run a team, but, I think it's underused in comparison to a lot of the more opinion based estimation techniques I see in use.  I'd be curious to hear if anyone else has any experience with other techniques that base estimation on empirical data.

## Comments from WordPress

* ![&#12304;&#36865;&#26009;&#28961;&#26009;&#12305;&#33050;&#20184;&#12365;&#12510;&#12483;&#12488;&#12524;&#12473;&#12288;&#12475;&#12511;&#12480;&#12502;&#12523;&#12288;&#20998;&#21106;&#12288;&#33050;&#12398;&#39640;&#12373; 25cm &#12505;&#12483;&#12489;](https://www.gravatar.com/avatar/70e90738b689bf880cbdec4e79c32d7b?d=identicon) **[&#12304;&#36865;&#26009;&#28961;&#26009;&#12305;&#33050;&#20184;&#12365;&#12510;&#12483;&#12488;&#12524;&#12473;&#12288;&#12475;&#12511;&#12480;&#12502;&#12523;&#12288;&#20998;&#21106;&#12288;&#33050;&#12398;&#39640;&#12373; 25cm &#12505;&#12483;&#12489;](http://www.siteconomics.ru/mlckeivg/604.html)** 2015-11-08T02:30:30Z
  > &#65281;&#12502;&#12483;&#12463;&#12510;&#12540;&#12463;&#12375;&#12289;&#12371;&#12398;&#12452;&#12531;&#12479;&#12540;&#12493;&#12483;&#12488;&#12469;&#12452;&#12488;&#19978;&#12391;&#12356;&#12367;&#12388;&#12363;&#12398;&#26412;&#24403;&#12395;&#36062;&#12398;&#20869;&#23481;&#12434;
* ![Elida](https://www.gravatar.com/avatar/4a98183938960547794e29b8fd56ac42?d=identicon) **[Elida](http://rochesternylocksmith.s3-website-us-east-1.amazonaws.com)** 2015-11-30T23:51:16Z
  > Lost your car keys, or perhaps inadvertently broke in the ignition. These days,  > 
  > the customer is king and the service industry needs tto respect the   > 
  > customer. Never be alone: It is always better thqt you shall hafe someone withh you.
