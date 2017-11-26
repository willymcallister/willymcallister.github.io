---
layout: article
title:  "Continuity of capacitive voltage and inductive current"
author: Willy McAllister
comments: true
---

We explain two *principles of continuity*. One for capacitors and one for inductors. 

These two principles are predicted by the $i$-$v$ equations for capacitors and inductors.

The *principle of continuity of capacitive voltage* says: In the absence of infinite current, the voltage across a capacitor cannot change instantaneously.

The dual of this is the *principle of continuity of inductive current*: In the absence of infinite voltage, the current through an inductor cannot change instantaneously.

Written by Willy McAllister.

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

## Capacitor

When talking to an experienced engineer you might hear something like "The voltage on a capactitor cannot change instantaneously."

What does this mean, and where does it come from?

An *instantaneous* change means the voltage changes from say $1\,\text V$ to $2\,\text V$ in $0$ time. The voltage has an abrupt vertical step. 

This can happen for a resistor. Ohm's Law places no limit on how fast $i$ and $v$ can change in a resistor. But that's not the case for a capacitor. Here's why,

### Capacitor $q$-$v$ equation

We determine the voltage on a capacitor with this equation,

$q = \text C \,v$

or

$v = \dfrac{q}{\text C}$

This is the fundamental definition of a capacitor. The voltage depends on the amount of charge $q$ stored on the capacitor's plates.

Charge is always associated with some kind of particle, usually an electron in the circuits we study. An electron is real stuff that exists on the capacitor plates. 

Suppose you try to make the voltage change instantaneously. You are saying that real stuff (a bunch of electrons) has to instantly appear or disappear. That  happens in sci-fi movies, but not in real life. 

This is why we say *the voltage on a capacitor cannot change instantaneously*. The voltage on a capacitor never has an abrupt step up or down. It always changes gradually.

### A capacitor is like a bucket

A good mental image for a capacitor: A capacitor is like a bucket for charge. 

![Capacitor is like a bucket]({{ site.baseurl }}{% link i/bucket.png %}){: .centered :}{: height="240px"}

* The stored electrons $q$ are like the water in a bucket. 
* The voltage $v$ across the capacitor correpsonds to the water level in the bucket. 
* The capacitance $\text C$ corresponds to the size of the bucket.

The water level (voltage) changes gradually as you pour water in or out of the bucket using a hose or ladle. 

If you turn the bucket all the way upside down the water pours out really fast, but it doesn't disappear in $0$ time.

<details>
<summary>same story, with capacitor current</summary>
<p>We can reach the same conclusion about changing voltage by thinking about capacitor current.</p>

<p>Current is the motion of charge. Let's make that idea more formal. You can define current as,</p>

<p>$I = \dfrac{\Delta Q}{\Delta t}$</p>

<p>where $\Delta Q$ is some amount of charge and $\Delta t$ is a time interval. So current is the amount of charge moving past a point in some amount of time. To measure current in units of amperes, we normalize the time interval to one second. The amount of charge is measured in units of coulombs. </p>
<p>If we let $\Delta t$ get smaller and smaller, the amount of charge passing by gets smaller, too. In the limit, both $t$ and $q$ become "infinitissemally" small, (but not zero). And this is where we get the definition of current in derivative notation, </p>

<p>$i = \dfrac{dq}{dt}$</p>

<p>Now think about the current in a capacitor. $q = \text C v$ tells us how to find the stored charge if we know the capacitor voltage. If we take the derivative of both sides with respect to time we'll get,</p>

<p>$\dfrac{dq}{dt} = \text C \dfrac{dv}{dt}$</p>

<p>The left side is $dq/dt$, which we just decided was the definition of current. Lets replace $dq/dt$ with $i$, </p>

<p>$i = \text C \dfrac{dv}{dt}$</p>

<p>We just derived the well-known $i$-$v$ relationship for a capacitor. The current in a capacitor is proportional to the rate of change (the slope) of the voltage across the capacitor.</p>

<h3>Instantaneous change of voltage</h3>

<p>A question you might ask is, "what current do you need to cause an instantaneous change of voltage on a capacitor?". An "instantaneous" change is a change from one voltage to another that happens in zero time. One moment the voltage is $1\,\text V$ and the next moment BING! it is $2\,\text V$. That's an instantaneous change. The change of voltage is some finite difference, like $\Delta v = 2-1$. The change of time is $\Delta t = 0$. The capacitor $i$-$v$ equation tells us what the current has to be,</p>

<p>$i = \text C \dfrac{2 - 1}{0}$</p>

<p>$i = \infty$</p>

<p>To achieve an instantaneous change of voltage requires an infinite current!</p>

<p>As long as you don't have a source of infinite current, the voltage on a capacitor <em>will not</em> change instantaneously. That is the principle of voltage continuity for a capacitor.</p>
</details>

## Inductor

We can tell the same story about an inductor, but this time the story is about current instead of voltage. The principle of continuity for an [inductor]({{ site.baseurl }}{% link _articles/inductor-how-it-works.md %}) is a little harder to understand because it is based on magnetism, and magnetism is always tricky to figure out.

>This is an example of a *dual* relationship. A *dual* is a really interesting idea I've seen mostly in electronics; not too often elsewhere. *Duality* recognizes the similarity between two relationships. It always involves a switcheroo between variables. In this story, we exchange $\text C$ and $v$ for $\text L$ and $i$. We end up with a similar (but contrasting) conclusion. *Dual* is kind of hard to define, but I hope this example helps you see what it means. Duals are common in circuit theory. Once you get the concept, you will start to find them on your own. I always feel smart when I recognize a dual.

### Inductor $i$-$v$ equation

The governing $i$-$v$ equation for an inductor is,

$v = \text L \dfrac{di}{dt}$

The voltage appearing across an inductor is proportional to the rate of change $di/dt$ (the slope) of the current through the inductor. I'm not going to prove this equation since it's pretty hard to do, but I want you to believe it anyway.

>Compare the inductor's $i$-$v$ equation to the capacitor $i$-$v$ equation, $i = \text C dv/dt$. They are duals of each other. Notice how they are similar, but we swap $i$ for $v$, and $\text C$ for $\text L$. 

<details>
<summary>$d$ notation</summary>

<p>The $d$ in ${di}/{dt}$ is notation from calculus, it means <em>differential</em>. You can think of $d$ as meaning "a tiny change in ..." </p>

<p>For example, the expression $dt$ means <em>a tiny change in time</em>. When you see $d$ in a ratio, like $di/dt$, it means, "a tiny change in $i$ (current) for each tiny change in $t$ (time)." An expression like $di/dt$ is called a <a href="https://www.khanacademy.org/math/ap-calculus-ab/derivative-introduction-ab/derivative-as-a-limit-ab/v/calculus-derivatives-1-new-hd-version">derivative</a>, and it is what you study in <a href="https://www.khanacademy.org/math/differential-calculus">Differential Calculus</a>.</p>

<p>In calculus, $d$ represents a small amount of change, so small it approaches $0$. Sometimes you will see change indicated with a $\Delta$ symbol. We use $\Delta$ to indicate a large change, like $1$ meter or $1$ second. And we use $d$ to indicate tiny nearly-zero-sized change. </p>
</details>

### Instantaneous change of inductor current

Quite often, an inductor is part of a circuit that also includes a switch. It is really easy for the switch to "request" an instantaneous change of current. All you have to do is open or close the switch. Throwing the switch from closed to open could mean a change of current going from $100\,\text{mA}$ to $0\,\text{mA}$ in no time $(\Delta i = 0 - 100\,\text{mA}$ while $\Delta t = 0)$, for example. Inductors don't like this. Here's why,

Let's look at the inductor $i$-$v$ equation for this example, 

$v = \text L \dfrac{\Delta i}{\Delta t}$

$v = \text L \dfrac{-100\,\text{mA}}{0}$

$v = -\infty !$

To achieve an instantaneous change of current requires an infinite voltage! Whoa!

If you don't have a source of infinite voltage, the current through an inductor *will not* change instantaneously. That is the principle of continuity for an inductor. 

In physical terms, there is energy stored in the magnetic field surrounding the inductor. That magnetic energy cannot appear or disappear in an instant. It has to be added or taken away gradually, just like the water in the capacitor bucket.

This is why everyone says, "The current in an inductor never changes instantaneously." It always changes gradually.

### Inductor references
{:.no_toc}

![]({{ site.baseurl }}{% link i/article.svg %}) [Inductor - how it works]({{ site.baseurl }}{% link _articles/inductor-how-it-works.md %})  
![]({{ site.baseurl }}{% link i/article.svg %}) [Inductor kickback]({{ site.baseurl }}{% link _articles/inductor-kickback.md %})    
![]({{ site.baseurl }}{% link i/video.svg %}) [Inductor i-v equations]({{ site.baseurl }}{% link _videos/inductor-iv-equations.md %})  
![]({{ site.baseurl }}{% link i/video.svg %}) [Inductor kickback (1 of 2)]({{ site.baseurl }}{% link _videos/inductor-kickback1.md %})  
![]({{ site.baseurl }}{% link i/video.svg %}) [Inductor kickback (2 of 2)]({{ site.baseurl }}{% link _videos/inductor-kickback2.md %})  

## Summary
{:.no_toc}

When we build circuits with capacitors and inductors we have to account for time, because the $i$-$v$ laws for $\text C$ and $\text L$ include time. Two *principles of continuity* impose certain limits on what can happen to voltage and current,

* The voltage on a capacitor can't change in an instant.
* The current through an inductor can't change in an instant.
