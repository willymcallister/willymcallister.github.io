---
layout: page
title: Everything
author: Willy McAllister
comments: true
---

### Articles

{% assign articles = site.articles | sort  %}
<ul>
  {% for a in articles %}
    <li><a href="{{ a.url | prepend: site.baseurl }}">{{ a.title }}</a></li>
  {% endfor %}
</ul> 

### Videos

{% assign videos = site.videos | sort  %}
<ul>
  {% for v in videos %}
    <li><a href="{{ v.url | prepend: site.baseurl }}">{{ v.title }}</a></li>
  {% endfor %}
</ul> 

### Blog posts and draft articles

<ul>
{% for p in site.posts %}
  <li><a href="{{ p.url | prepend: site.baseurl }}">{{ p.title }}</a></li>
{% endfor %}
</ul>

### Other pages

- [Home]({{ site.baseurl}}/index.html)
- [About]({{ site.baseurl}}/about/index.html)
- [Blog]({{ site.baseurl}}/blog/index.html)
- [Main]({{ site.baseurl}}/main.html)
- [Everything]({{ site.baseurl}}/everything.html)
