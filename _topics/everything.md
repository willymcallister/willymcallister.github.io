---
layout: topic
title: Everything
author: Willy McAllister
comments: true
---

{% capture summary %}**Topics**{% endcapture %}  
{% capture details %}  
{% assign topics = site.topics | sort  %}
<ul>
  {% for t in topics %}
    <li><a href="{{ t.url | prepend: site.baseurl }}">{{ t.title }}</a></li>
    <br>
  {% endfor %}
</ul>   
{% endcapture %}{% include details.html %} 

{% capture summary %}**Articles**{% endcapture %}  
{% capture details %}  
{% assign articles = site.articles | sort  %}
<ul>
  {% for a in articles %}
    <li><a href="{{ a.url | prepend: site.baseurl }}">{{ a.title }}</a></li>
    <br>
  {% endfor %}  
{% endcapture %}{% include details.html %} 

{% capture summary %}**Videos**{% endcapture %}  
{% capture details %}  
{% assign videos = site.videos | sort  %}
<ul>
  {% for v in videos %}
    <li><a href="{{ v.url | prepend: site.baseurl }}">{{ v.title }}</a></li>
    <br>
  {% endfor %}
</ul>   
{% endcapture %}{% include details.html %} 

{% capture summary %}**Images**{% endcapture %}  
{% capture details %}  
Note: The text in these .svg images is flattened down to paths. Images with the original text are available [here](https://github.com/willymcallister/willymcallister.github.io/tree/master/images).
<ul>
{% assign image_files = site.static_files | where: "image", true %}
{% for myimage in image_files %}
<li><a href="{{ myimage.path }}">{{ myimage.name}}</a></li>
<br>
{% endfor %}
</ul>  
{% endcapture %}{% include details.html %} 

{% capture summary %}**Other posts**{% endcapture %}  
{% capture details %}  
<ul>
{% for p in site.posts %}
  <li><a href="{{ p.url | prepend: site.baseurl }}">{{ p.title }}</a></li>
  <br>
{% endfor %}
</ul>  
{% endcapture %}{% include details.html %} 

{% capture summary %}**Other pages**{% endcapture %}  
{% capture details %}  
- [Home]({{ site.baseurl}}/index.html)

- [About]({{ site.baseurl}}/about/index.html)

- [Blog]({{ site.baseurl}}/blog/index.html)

- [Everything]({{ site.baseurl}}/t/everything.html) (this page)  
{% endcapture %}{% include details.html %} 

