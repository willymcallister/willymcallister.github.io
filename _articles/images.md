---
layout: article
title:  "Image templates"
author: Willy McAllister
comments: true
---

Insert these useful templates into markdown documents to embed images into articles. There are variations for left/center/right images along with text-style or caption-style. Each template is paired with an html include file you save in your \_includes folder. 

----

#### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

## Centered image

Use conventional markdown syntax for most centered images without a caption,

```
![Ant in amber]({% link i/ant_in_amber.jpg %}){: .centered }{: height="200px" :}
```

![Ant in amber]({% link i/ant_in_amber.jpg %}){: .centered }{: height="200px" :}

or with a caption,

```
![Ant in amber]({% link i/ant_in_amber.jpg %}){: .centered }{: height="200px" :}

An ant preserved in amber.
{: .caption :}
```

![Ant in amber]({% link i/ant_in_amber.jpg %}){: .centered }{: height="200px" :}

An ant preserved in amber.
{: .caption :}

## Image_left_without_caption

Insert template into markdown,
```
{% raw %}{% capture image %}IMAGE FILE NAME{% endcapture %} 
{% capture alt %}ALT TEXT{% endcapture %}  
{% capture height %}200px{% endcapture %}  
{% capture description %} 
DESCRIPTION 
{% endcapture %}{% include image_left_without_caption.html %}{% endraw %}
```

Include file: \_includes/image_left_without_caption.html
```
{% raw %}<div>
  <p><img height="{{ height }}" src="../i/{{ image }}" alt="{{ alt }}"></p>
</div> 
<div style="clear: both;"></div>{% endraw %}
```

Example,

{% capture image %}ant_in_amber.jpg{% endcapture %}  
{% capture alt %}Ant in droplet of amber{% endcapture %}  
{% capture height %}200px{% endcapture %}  
{% include image_left_without_caption.html %}  

Regular text follows.

## Image_left_with_caption

Insert template into markdown,
```
{% raw %}{% capture image %}IMAGE_FILE_NAME{% endcapture %}
{% capture alt %}ALT TEXT{% endcapture %}
{% capture height %}200px{% endcapture %} 
{% capture caption %}
CAPTION
{% endcapture %}{% include image_left_with_caption.html %}{% endraw %}
```

Include file: \_includes/image_left_with_caption.html 
```
{% raw %}<div style="clear: both;">
  <div style="float: left; margin-right: 1em;">
    <img height="{{ height }}" src="../i/{{ image }}" alt="{{ alt }}">
  </div>
  <div class="caption">
    {{ caption | markdownify }}
  </div>
</div>
<div style="clear: both;">&nbsp;</div>{% endraw %}
```

Example,

{% capture image %}ant_in_amber.jpg{% endcapture %}  
{% capture alt %}Ant in droplet of amber{% endcapture %}  
{% capture height %}200px{% endcapture %}  
{% capture caption %}  
This is an ant captured in a fossilized droplet of amber.  
{% endcapture %}{% include image_left_with_caption.html %}  

## Image_left_with_text

Insert template into markdown,
```
{% raw %}{% capture image %}IMAGE FILE NAME{% endcapture %} 
{% capture alt %}ALT TEXT{% endcapture %}  
{% capture height %}200px{% endcapture %}  
{% capture description %} 
DESCRIPTION 
{% endcapture %}{% include image_left_with_text.html %}{% endraw %}
```

Include file: \_includes/image_left_with_text.html
```
{% raw %}<div style="clear: both;">
  <div style="float: left; margin-right: 1em;">
    <img height="{{ height }}" src="../i/{{ image }}" alt="{{ alt }}">
  </div>
  <div>
    {{ description | markdownify }}
  </div>
</div>
<div style="clear: both;">&nbsp;</div>{% endraw %}
```

Example,

{% capture image %}ant_in_amber.jpg{% endcapture %} 
{% capture alt %}Ant encased in a drop of amber{% endcapture %}
{% capture height %}200px{% endcapture %}   
{% capture description %} 
Amber is the fossilized form of tree resin, basically a natural form of plastic.  
{% endcapture %}{% include image_left_with_text.html %}

## Image_right_with_caption

Insert template into markdown,
```
{% raw %}{% capture image %}IMAGE FILE NAME{% endcapture %} 
{% capture alt %}ALT TEXT{% endcapture %} 
{% capture height %}200px{% endcapture %}   
{% capture caption %} 
CAPTION 
{% endcapture %}{% include image_right_with_caption.html %}{% endraw %}
```

Include file: \_includes/image_right_with_caption.html
```
{% raw %}<div style="clear: both;">
  <div style="float: right; margin-left: 1em;">
    <img height="{{ height }}" src="../i/{{ image }}" alt="{{ alt }}">
  </div>
  <div class="caption">
    {{ caption | markdownify }}
  </div>
</div>
<div style="clear: both;">&nbsp;</div>{% endraw %}
```

Example,

{% capture image %}diode_voltmeter_dial.jpg{% endcapture %} 
{% capture alt %}ALT TEXT{% endcapture %}
{% capture height %}200px{% endcapture %}    
{% capture caption %} 
Dial of a typical multimeter. 
{% endcapture %}{% include image_right_with_caption.html %}

## Image_right_with_text

Insert template into markdown,
```
{% raw %}{% capture image %}IMAGE FILE NAME{% endcapture %} 
{% capture alt %}ALT TEXT{% endcapture %} 
{% capture height %}200px{% endcapture %}    
{% capture description %} 
DESCRIPTION 
{% endcapture %}{% include image_right_with_text.html %}{% endraw %}
```

Include file: \_includes/image_right_with_text.html
```
{% raw %}<div style="clear: both;">
  <div style="float: right; margin-left: 1em;">
    <img height="{{ height }}" src="../i/{{ image }}" alt="{{ alt }}">
  </div>
  <div>
    {{ description | markdownify }}
  </div>
</div>
<div style="clear: both;">&nbsp;</div>{% endraw %}
```

Example,

{% capture image %}diode_voltmeter_dial.jpg{% endcapture %} 
{% capture alt %}ALT TEXT{% endcapture %} 
{% capture height %}200px{% endcapture %}    
{% capture description %} 
Find the 'diode' setting on your multimeter. This can be used to determine the forward conducting direction of the diode. Use this if the marking on the diode is unclear. 
{% endcapture %}{% include image_right_with_text.html %}

## Caption style

Typical style for a caption, specified in assets/main.scss,

```
{% raw %}$grey-color:         #757575 !default;

.caption {
    color: $grey-color;
    font-size: $small-font-size;
}{% endraw %}
```