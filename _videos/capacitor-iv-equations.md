---
layout: video
title:  "Capacitor i-v equations"
author: Willy McAllister
youtubeID: EqlsSqET1kk
comments: true
--- 

The capacitor current-voltage equation has a derivative form and an integral form.

I could have perhaps described the "t to tau" substitution step in the video a little better. 

{% capture summary %}t to $\tau$ substitution{% endcapture %}  
{% capture details %}  
Say you have some function, $f()$. An example would be $f(x) = 2x$.
The variable inside the parentheses, in this case $x$ gets matched up with the variable name $x$ on the right side. If I wanted to, I could express exactly the same function with $f(y) = 2y$. All I did was swap out $x$ and put in $y$. The meaning of the function did not change. 

We can do this trick when the function is an integral. In this video I did exactly that. I swapped $t$ out of the integral expression and replaced it with tau, $\tau$. 

$\displaystyle \int i(t) \,dt$ can be written as $\displaystyle \int i(\tau) \,d\tau$ and it means exactly the same thing. 

That's the "$t$ to $\tau$" step.

The obvious question is, "Why bother?" This is going to be a bit long.

At 5:40 you see the integral form of the capacitor $i$-$v$ equation for $v$ in terms of $i$,

$v = \dfrac{1}{\text C}\displaystyle \int_{-\infty}^{\text T} i(t) \,dt$ 

where the definite integral runs from $t = -\infty$ up to $t = \text T$. The value $t = \text T$ is the moment we stop the integral. I call that time "now". The equation tells you the voltage on the capacitor "now." It tells you to add up all the current that ever flowed in or out of the capacitor, accounting for all time back to the beginning of the universe $(t = -\infty)$. Of course, we only go back in time as far as makes sense, like back to when we turned the circuit on, or back to the last time we were sure of the voltage. 

When you evaluate a definite integral, by the time you are done the independent variable $(t$ and $dt)$ inside the integral will vanish. That's why we don't care what the independent variable is called. It could be $t$ or $\tau$ or *@#%. We don't care. It is going to disappear. 

You evaluate the integral and apply the lower and upper limits. The $t$ and $dt$ terms get consumed in the calculation. All that is left is big $\text T$. Big $\text T$ survives and becomes part of the answer. You get some expression like this,

$v(\text T) = f(\text T)$

So the voltage on the capacitor is a function of big $\text T$,

$v(\text T) = \dfrac{1}{\text C}\displaystyle \int_{-\infty} ^{\text T} i(t) \,dt$

If you believe what I said above about $f(x) = 2x$ is identical to $f(y) = 2y$, then you should believe it is okay to replace $t$ with $\tau$, like this,

$v(T) = \dfrac{1}{\text C}\displaystyle \int_{-\infty} ^{\text T} i(\tau) \,d\tau$

The reason for doing the $t$ to $\tau$ switch is it frees me up to do another switch, purely for the cosmetic look of the equation. I want to replace $\text T$ with $t$, just because I like the look of little $t$ as the independent variable.

$v(t) = \dfrac{1}{\text C}\displaystyle \int_{-\infty} ^t i(\tau) d\tau$

And this is the equation you see at 8:03. After doing all the name changes, the variable $t$ is the time you stop the integration and learn the voltage on the capacitor.

In some textbooks you may see $t$ used both inside the integral and as the upper limit. 

$v(t) = \dfrac{1}{\text C}\displaystyle \int_{-\infty} ^t i(t) dt$

I think this notation is deceiving because it glosses over the two interpretations of time, the continuous time axis and the time now when you want to know the voltage.

{% endcapture %}{% include details.html %} 

Created by Willy McAllister.
