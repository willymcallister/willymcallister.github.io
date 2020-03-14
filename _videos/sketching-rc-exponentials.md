---
layout: video
title:  "Sketching RC exponentials"
author: Willy McAllister
youtubeID: 4XHMqvVByFQ
comments: true
--- 

Voltages and currents often have an exponential shape. We look at some properties of exponential curves and learn tricks to rapidly sketch accurate waveforms. 

{% capture summary %}What we are trying to show...{% endcapture %}
{% capture details %}
Suppose you have an $RC$ circuit with known $R$, $C$, and $V_o$, and a blank voltage vs time plot with labeled $t$ and $v$ axes... Can you sketch the $v(t)$ curve right off the top of your head?

You know what a falling exponential curve looks like in general. They all have a similar droopy shape. The only remaining interesting thing is to know how fast the the curve falls---how droopy is it? That's the only missing piece of info you need if you want to sketch it. 

The video goes through a sequence of pleasingly clever math tricks and observations that makes it easy to quickly draw a reasonably correct exponential curve. There is no profound or significant wisdom here, it is just a handy trick to amaze your friends. 

We know the $RC$ natural response. It is an exponential, 

$v(t) = V_o e^{-t/RC}$ 

We make some clever observations about this equation and make those observations into a handy manual technique.

Observation 1. We know the solution for the $RC$ natural response is $e^{(something)t}$. What if we take the derivative of the solution? That would give us an expression for the slope of the natural response. Taking the derivative of $e^{(something)t}$ brings the "$something$" down out in front of the exponential to become part of the leading coefficient. The slope expression is,

$\dfrac{dv}{dt} = -\dfrac{1}{RC} V_o e^{-t/RC}$ 

Observation 2. is based on a property of an exponent. Anything raised to the $0$ power $= 1$.  If we set $t = 0$ then $e^{t/RC}$ becomes $e^0$. That makes the exponential term $e^0 = 1$. We are left with whatever coefficient was sitting in front of the exponential. If we use this idea on the expression for the slope, we get, 

slope at $t = 0$ is $-\dfrac{V_o}{RC}$ 

The slope at $t = 0$ involves the value of the two components and the starting voltage value. That should make intuitive sense. Now we know the slope of the exponential curve at $t=0$. So what? More cleverness...

Observation 3. We take the slope we just figured out for the exponential curve and use it to draw a straight line. We are counting on the fact that we are pretty good at quickly drawing a straight line with a known slope. To draw the line we need two points. One of them is where the exponential passes through the voltage axis (where $t = 0$) and $v = V_o$. Put a dot at $[0, V_o]$. 

The line going through $t = 0$ has a slope of $-V_o/RC$. How steep is that? A tiny bit of geometry tells you the line passes through the horizontal axis at $t = RC$. That is also an easy point to locate. Multiply ohms times farads to get seconds (the time constant) and put a dot at $[RC, 0]$. 

Draw a line between the two points. It will have the same slope as the natural response at $t = 0$. Now the plot has a straight line , but no exponential... yet. As you can see in the video, if you hold the plot out at arm's length, the straight line is a rough approximation to the exponential curve. But we can do better.

Observation 4. Go back to the original $v(t)$ natural response equation and plug in the time constant, $t = RC$. Compute the voltage after one time constant has passed,

$v(t=RC) = V_o e^{-RC/RC} = V_o e^{-1}$

What voltage does this represent? $e^{-1}$ is just a number. If you compute $e^{-1}$ you get roughly $0.37$. That means $v(t=RC) = V_o \times 0.37$, or saying it another way, when time advances to $t = RC$ the voltage has fallen to $37\%$ of $V_o$. Put a dot on the plot at this point, $[RC, 37\%$ of $V_o]$. This voltage is down by $2/3$ from its original value. You know the natural response curve goes through this point.

Observation 5. A third point on the natural response curve is at $t = reallylongtime$. After a really long time the voltage falls to $0$. That's what happens to every natural response.

Sketch: Now you have three points on the plot that you know the exponential goes through. It intersects $V_o$ at $t=0$ and the slope of the exponential is exactly the slope of the line. That gives you an accurate initial steepness. Then the curve goes through the point $[RC, 37\%$ of $V_o]$, and finally you know it fades away to $0$ after a long time. This is enough to sketch a reasonably accurate version of the exponential curve. 

Pretty good trick, eh? I think it's pretty brilliant.
{% endcapture %}{% include details.html %}

Created by Willy McAllister.