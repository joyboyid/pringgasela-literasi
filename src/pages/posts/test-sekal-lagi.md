---
layout: "@/templates/BasePost.astro"
title: Test sekal lagi
description: i﻿ni adalah deskripsi
pubDate: 2023-03-31T01:37:03.495Z
imgSrc: /assets/images/1.jpg
imgAlt: azela
---
# Astro + Netlify CMS

Static sites powered by a git-based CMS, made easy.

Wed Jun 23 2021 by **[Tony Sullivan](https://tonysull.co/)** • 4 min read

I like markdown as much as the next developer, but it’s easy to forget how convenient a CMS can be. For personal projects or internal tools, though, I can’t justify reaching for a full headless CMS setup. Configuration takes time and, more importantly, for Jamstack sites it can be a huge time saver to have the entire CMS alongside the source code right in `git`.

**tl;dr;** Check the [live demo](https://demo-astro-netlify-cms.netlify.app/) or dive right into the code on [Github](https://github.com/Navillus-BV/demo-astro-netlify-cms).

## The power of a git-based CMS

We’re huge fans of the git-based CMS idea at Navillus. When the entire site is built to be deployed as a static site it really doesn’t make much sense to need to pull from a remote server to load content, and you’re already working in `git`!