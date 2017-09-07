---
layout: topic
title: Everything
author: Willy McAllister
comments: true
---

### Topic pages

{% assign topics = site.topics | sort  %}
<ul>
  {% for t in topics %}
    <li><a href="{{ t.url | prepend: site.baseurl }}">{{ t.title }}</a></li>
  {% endfor %}
</ul> 

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

### Images

<ul>
{% assign image_files = site.static_files | where: "image", true %}
{% for myimage in image_files %}
<li><a href="{{ myimage.path }}">{{ myimage.name}}</a></li>
{% endfor %}
</ul>

### Other posts

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
