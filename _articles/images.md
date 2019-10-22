---
layout: article
title:  "Image templates"
author: Willy McAllister
comments: true
---

----

#### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

Here are some useful templates to embed images with captions into articles. Each template is paired with an html include file you save in your \_includes folder. 

## Image_left_with_caption

Insert template into markdown,
```
{% raw %}{% capture image %}IMAGE_FILE_NAME{% endcapture %}
{% capture alt %}ALT TEXT{% endcapture %}
{% capture caption %}
CAPTION
{% endcapture %}{% include image_left_with_caption.html %}{% endraw %}
```

Include file: image_left_with_caption.html 
```
{% raw %}<div style="clear: both;">
  <div style="float: left; margin-right: 1em;">
    <img src="../i/{{ image }}" alt="{{ alt }}">
  </div>
  <div class="caption">
    {{ caption | markdownify }}
  </div>
</div>
<div style="clear: both;">&nbsp;</div>{% endraw %}
```

Example,

{% capture image %}ant_in_amber.jpg{% endcapture %} 
{% capture alt %}ALT TEXT{% endcapture %} 
{% capture caption %} 
This is an ant captured in a fossilized drop of amber. 
{% endcapture %}{% include image_left_with_caption.html %}

## Image_left_with_text

Insert template into markdown,
```
{% raw %}{% capture image %}IMAGE FILE NAME{% endcapture %} 
{% capture alt %}ALT TEXT{% endcapture %} 
{% capture description %} 
DESCRIPTION 
{% endcapture %}{% include image_left_with_text.html %}{% endraw %}
```

Include file: image_left_with_text.html
```
{% raw %}<div style="clear: both;">
  <div style="float: left; margin-right: 1em;">
    <img src="../i/{{ image }}" alt="{{ alt }}">
  </div>
  <div>
    {{ description | markdownify }}
  </div>
</div>
<div style="clear: both;"></div>{% endraw %}
```

Example,

{% capture image %}ant_in_amber.jpg{% endcapture %} 
{% capture alt %}Ant encased in a drop of amber{% endcapture %} 
{% capture description %} 
Amber is the fossilized form of tree resin. Think of it as a natural form of plastic.  
{% endcapture %}{% include image_left_with_text.html %}

## Image_right_with_caption

Insert template into markdown,
```
{% raw %}{% capture image %}IMAGE FILE NAME{% endcapture %} 
{% capture alt %}ALT TEXT{% endcapture %} 
{% capture caption %} 
CAPTION 
{% endcapture %}{% include image_right_with_caption.html %}{% endraw %}
```

Include file: image_right_with_caption.html
```
{% raw %}<div style="clear: both;">
  <div style="float: right; margin-left: 1em;">
    <img src="../i/{{ image }}" alt="{{ alt }}">
  </div>
  <div class="caption">
    {{ caption | markdownify }}
  </div>
</div>
<div style="clear: both;"></div>{% endraw %}
```

Example,

{% capture image %}diode_voltmeter_dial.jpg{% endcapture %} 
{% capture alt %}ALT TEXT{% endcapture %} 
{% capture caption %} 
Dial of a typical multimeter. 
{% endcapture %}{% include image_right_with_caption.html %}

## Image_right_with_text

Insert template into markdown,
```
{% raw %}{% capture image %}IMAGE FILE NAME{% endcapture %} 
{% capture alt %}ALT TEXT{% endcapture %} 
{% capture description %} 
DESCRIPTION 
{% endcapture %}{% include image_right_with_text.html %}{% endraw %}
```

Include file: image_right_with_text.html
```
{% raw %}<div style="clear: both;">
  <div style="float: right; margin-left: 1em;">
    <img src="../i/{{ image }}" alt="{{ alt }}">
  </div>
  <div>
    {{ description | markdownify }}
  </div>
</div>
<div style="clear: both;"></div>{% endraw %}
```

Example,

{% capture image %}diode_voltmeter_dial.jpg{% endcapture %} 
{% capture alt %}ALT TEXT{% endcapture %} 
{% capture description %} 
Find the 'diode' setting on your multimeter. This can be used to determine the forward conducting direction of the diode. Use this if the marking on the diode is unclear. 
{% endcapture %}{% include image_right_with_text.html %}

## Image_centered_with_caption

Insert template into markdown,
```
{% raw %}{% capture image %}IMAGE_FILE_NAME{% endcapture %} 
{% capture alt %}ALT_TEXT{% endcapture %}
{% capture height %}200px{% endcapture %} 
{% capture caption %}CAPTION{% endcapture %}
{% include image_centered_with_caption.html %}{% endraw %}
```

Include file: image_centered_with_caption.html
```
{% raw %}<div>
  <p><img class="centered" height="{{ height }}" src="../i/{{ image }}" alt="{{ alt }}"></p>
</div>
<div class="caption">
  {{ caption | markdownify }}
</div>{% endraw %}
```

Example,

{% capture image %}electric-eel.jpg{% endcapture %} 
{% capture alt %}Electric eel{% endcapture %}
{% capture height %}200px{% endcapture %} 
{% capture caption %}This is an **electric eel**.{% endcapture %}
{% include image_centered_with_caption.html %}

## Image_centered_without_caption

Insert template into markdown,
```
{% raw %}{% capture image %}electric-eel.jpg{% endcapture %} 
{% capture alt %}Electric eel{% endcapture %}
{% capture height %}200px{% endcapture %} 
{% include image_centered_without_caption.html %}{% endraw %}
```

Include file: image_centered_without_caption.html
```
{% raw %}<div>
  <p><img class="centered" height="{{ height }}" src="../i/{{ image }}" alt="{{ alt }}"></p>
</div>
<div style="clear: both;"></div>{% endraw %}
```

Example,

{% capture image %}electric-eel.jpg{% endcapture %} 
{% capture alt %}Electric eel{% endcapture %}
{% capture height %}200px{% endcapture %} 
{% include image_centered_without_caption.html %}

## Caption style

Typical style for a caption,
```
{% raw %}$grey-color:         #757575 !default;

.caption {
    color: $grey-color;
    font-size: $small-font-size;
}{% endraw %}
```