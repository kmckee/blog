---
path: "/posts/2014/01/hacking-a-hexbug-robot/"
date: "2014-01-11T03:18:03Z"
title: "Hacking a HexBug Robot"
categories: ["Projects"]
tags: ["arduino", "ruby", "toy hacking"]
excerpt: "I found one of these little HEXBUG Hexbug Spider (colors may vary) on Amazon and thought it might b..."
---

I found one of these little [HEXBUG Hexbug Spider (colors may vary)](http://www.amazon.com/gp/product/B004HL0A12/ref=as_li_tf_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B004HL0A12&linkCode=as2&tag=aptobits-20)![](http://ir-na.amazon-adsystem.com/e/ir?t=aptobits-20&l=as2&o=1&a=B004HL0A12) on Amazon and thought it might be fun to try and hook an Arduino up to it.  It's about the size of a fist and is controlled by an infrared remote control.

The robot's movement is controlled by two small servos .  The first servo causes the top of the robot to rotate 360 degrees without moving the feet.  The second servo causes the legs to move.  The legs are mechanically linked to the top of the robot in such a way that the robot will always walk in the direction that the top of the robot is facing.

Here's a video of my hacked HexBug in action:

After opening up the robot I was able to use a multimeter to probe the leads running up to the motors and determine that they're operating at about 3.3v.  Since the Arduino Nano's digital IO pins are 3.3v when high it made this a really simple project.

Parts List:
<script charset="utf-8" type="text/javascript" src="http://ws-na.amazon-adsystem.com/widgets/q?rt=tf_mfw&amp;ServiceVersion=20070822&amp;MarketPlace=US&amp;ID=V20070822%2FUS%2Faptobits-20%2F8001%2F2e4ad14d-badd-4dd4-abb6-d07f0bff6179">// <![CDATA[ // ]]></script>

<noscript><A HREF="http://ws-na.amazon-adsystem.com/widgets/q?rt=tf_mfw&#038;ServiceVersion=20070822&#038;MarketPlace=US&#038;ID=V20070822%2FUS%2Faptobits-20%2F8001%2F2e4ad14d-badd-4dd4-abb6-d07f0bff6179&#038;Operation=NoScript">Amazon.com Widgets</A></noscript>

Wiring Schematic:

[![SpiderBotSchematic](11-1.png)](11-1.png)

Note that the RXD line on the Bluetooth Shield is connect to TXD on the arduino, and TX goes to RX. I wasn't able to pair with the device for quite some time, and eventually the person I was pairing with figured out I wired that up backwards.

The code I wrote to control everything is [available on GitHub](https://github.com/kmckee/spider_bot "Spider Bot Code on GitHub").

## Comments from WordPress

* ![Constance](https://www.gravatar.com/avatar/c774380daad23b0fa4380750a3e913aa?d=identicon) **[Constance](http://mhaucgtogmj.com)** 2016-05-20T04:56:47Z
  > Pour cela, il faudrait que les transports en commun se dÃ©veloppent et que des actions soient entreprises pour rapprocher les logements des emplois.Au risque de vous dÃ©cevoir, ce n&rsquo;est pas du tout le cas aclettlemune. La voiture a de beaux jours devant elle&#8230;
