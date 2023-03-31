---
layout: '@/templates/BasePost.astro'
title: Test Post 01
pubDate: 2023-03-29T05:54:26.348Z
description: t﻿est deploy artikel
imgSrc: '/assets/images/bet-roger-fix.png'
imgAlt: 'Image test post'
---
### Creating collections

With collections, we can organize our data better in the CMS and specify the type of content we want to enter for each collection. *[Read more on collections in Netlify CMS](https://www.netlifycms.org/docs/configuration-options/#collections)*.

If we have different types of content for our website, we can define a separate collection for each type. For example, we can have a one collection for blog posts, another collection for events or even another for products that we are selling.

From each of those collections we can gather different types of data by adding specific fields (numbers, strings, dates, images etc.) according to our needs.

For each collection we create, we first need to add some general information about it (the name, the labels, the folder where new posts should be saved). Then, we need to specify the fields for each collection. Each field consists of a label, a name and a widget. *[Read more on widgets.](https://www.netlifycms.org/docs/widgets/)*

Below there is a very basic collection for blog posts: