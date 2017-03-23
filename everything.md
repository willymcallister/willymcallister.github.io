---
layout: page
title: Everything
author: Willy McAllister
comments: true
---

### Videos

<ul>
{% for video in site.videos %}
  <li>
    <a href="{{ video.url | prepend: site.baseurl }}">{{ video.title }}</a>
  </li>
{% endfor %} 
</ul>

{% comment %}
And in my own sort order:

{% assign videos = site.videos | sort:"order"  %}
<ul>
  {% for p in videos %}
    <li>
        <a href="{{ p.url | prepend: site.baseurl }}">{{ p.title }}</a>
    </li>
  {% endfor %}
</ul> 
{% endcomment %}

### Articles

<ul>
{% for article in site.articles %}
  <li>
    <a href="{{ article.url | prepend: site.baseurl }}">{{ article.title }}</a>
  </li>
{% endfor %}
</ul>

### Drafts

<ul>
{% for article in site.drafts %}
  <li>
    <a href="{{ article.url | prepend: site.baseurl }}">{{ article.title }}</a>
  </li>
{% endfor %}
</ul>

### Blog posts

<ul>
{% for post in site.posts %}
  <li>
    <a href="{{ post.url }}">{{ post.title }}</a>
  </li>
{% endfor %}
</ul>

### Other pages

- [Home]({{ site.baseurl}}/index.html)
- [About]({{ site.baseurl}}/about/index.html)
- [Blog]({{ site.baseurl}}/blog/index.html)
- [Main]({{ site.baseurl}}/main.html)
- [Everything]({{ site.baseurl}}/everything.html)
