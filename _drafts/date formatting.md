---
layout: post
title: How to format a date
date: 2017-07-23T22:43:24.128Z
---
date: 2017-07-21T22:10:15.374Z

date: 2016-03-23T10:20:00Z

date: 2017-07-23T22:43:24.128Z


<ul>
<li>{{ page.date }}</li>
<li>{{ page.date | date_to_long_string }}</li>
<li>{{ page.date | date_to_rfc822 }}</li>
<li>{{ page.date | date_to_xmlschema}}</li>

<li>{{ page.date | date: "%B %-d, %Y, %I:%M %z %%"}}</li>

</ul>