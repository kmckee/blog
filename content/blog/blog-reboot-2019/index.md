---
date: "2019-03-03"
title: "Blog Reboot 2019"
description: "Migrating blog from WordPress to Gatsby"
---

It's been a while since I've written any blog posts (4 years!), and after watching a coworker take the dive into blogging I figured it was high time for me to get back in the habit of writing about what I'm learning.

I started blogging in 2011 and continued through sometime in 2015.  Over that time I created around a dozen different posts that were focused on projects I was working on, technology I was learning, and a few opinion pieces related to software development.

I wrote all of my content in Wordpress because it was the cool thing to do in 2011.  Luckily, before shutting down my wordpress site I had the sense to export my content.  Exporting from wordpress left me with an XML file that looks disgusting.

Fast forward a few years to today.  I'm moving my content over to Gatsby which is a static site generator that's built on React and GraphQL.  I think this is going to be a much better way to store my content, because everything that I create is just markdown files and images on disk.

## Recovering Old Content

The first challenge was finding a way to extract all of the text content from the wordpress XML file.  Luckily, there's a node module for that!

I used the npm package `wpxml2md` to convert the XML file into a set of markdown files.  This worked really well, and handled almost all of the text content correctly.  A few regex find and replaces to fix a few minor issues and I had most of the text.

Here's the code:

```js
const wpxml2md = require('wpxml2md');
const options = {
  report: true,
  noGFM: false,
  noMELink: true,
  withMetadata: true,
  withImageDownload: false,
  withComment: true,
};
wpxml2md('wordpress.xml', 'dest', options)
.then(() => {
  console.log('Completed!!');
} )
.catch((err) => {
  console.error(err);
});
```

## Recovering Images

The `wpxml2md` module made an attempt to download all of the image references that it found inside the wordpress export.  Unfortunately, my site was long so that resulted in a whole bunch of 404's.

I was close to giving up on recovering the images, and then I figured I'd give my old friend the WaybackMachine a try.  If you've never seen this, it's an incredibly useful site that is regularly crawling and archiving the internet.

Curious what GitHub's pricing was like in 2008?  [It's archived](https://web.archive.org/web/20080621111340/http://github.com/plans).

I was able to recover all of the images I was missing, and pull everything together in an afternoon.

## Next

I have some housekeeping to do to get this blog back up to snuff:

* Look into a youtube plugin to simplify embedding videos
* Set up syntax highlighting with Prism.
* Find more of the broken links and missing images.
* Actually write new content.

My goal is to keep my markdown as vanilla as possible so that 8 years from now I don't find myself in the same position I was in this morning.

Also, thanks Donny for inspiring me to get writing again!