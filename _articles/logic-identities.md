---
layout: article
title:  "Logic identities"
author: Willy McAllister
comments: true
---

Boolean logic has identities you can take advantage of when working with logic equations.

Written by Willy McAllister.

----

Boolean logic identities resemble the what you learned in regular algebra for addition and multiplication. These ideas are quite simple so I'll let you work out the answers yourself. That will help them sink in. 

I encourage you to work through this on paper. Write out truth tables as you need them. And to finish up, sketch the identity with logic symbols. 

## Identities

<span class="oline">0</span> =  
<span class="oline">1</span> =  

NOT(NOT B) =  

{% capture summary %}logic diagram{% endcapture %}  
{% capture details %}  
![B bar bar]({{ site.baseurl }}{% link i/logic27.svg %}){: .centered }
{% endcapture %}{% include details.html %}


A &middot; <span class="oline">A</span> =    
A + <span class="oline">A</span> =  

A &middot; 0 =  
A &middot; 1 =   
A &middot; A =  

A + 0 =   
A + 1 =   
A + A =  

A $\oplus$ 0 =  
A $\oplus$ 1 =   
A $\oplus$ A =  

## Properties

Boolean algebra has properties similar to (but not *exactly* the same as) regular algebra. AND is a lot like multiply. OR is a lot like addition. 

Commutative property  
AB = BA  
A + B = B + A

Associative property  
A(BC) = (AB)C  
A + (B + C) = (A + B) + C

Distributive property  
A (B + C) = AB + AC  
A + BC = (A + B)(A + C)

## Concept check

Draw a logic diagram of each expression. Then pick from identities and properties to simplify,

A + AB = 

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
Expand the leading A term,

A + AB = (A &middot; 1) + (A &middot; B)

Factor out A from both terms,

A &middot; (1 + B) = A &middot; 1 = A

The outcome of A + AB does not depend on B. 
{% endcapture %}{% include details.html %}

A(A + B) =  

{% capture summary %}show answer{% endcapture %}  
{% capture details %} 
Distribute the leading A term over the sum,

A(A + B) = AA + AB = A + AB

We just solved A + AB = A, so,

A(A + B) = A

The outcome of A(A + B) does not depend on B. 
{% endcapture %}{% include details.html %}

## Summary

You worked out a baker's dozen of identities and learned some familiar algebra properties. They come in handy when you are working with logic. Don't think you need to memorize all this. Now that you have the general idea you will recognize the situations where they help, and they are super-easy to derive on the spot. 