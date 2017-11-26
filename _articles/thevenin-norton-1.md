---
layout: article
title:  "Thévenin and Norton equivalents - part 1"
author: Willy McAllister
comments: true
---

The theory of *Thévenin* and *Norton equivalents* is a way to simplify circuits. There are times you can apply this instead of [Kirchhoff's Current Law]({{ site.baseurl }}{% link _articles/kirchhoffs-current-law.md %}) or [Voltage Law]({{ site.baseurl }}{% link _articles/kirchhoffs-voltage-law.md %}). It's another tool to put in your toolbox of circuit design techniques.

The theory works for resistor ciruits and also for more complicated circuits with linear components, $\text R, \text L,$ and $\text C$. In this article we cover the resistor version.

Part 1 covers the $i$-$v$ graphs of the Thévenin and Norton circuits, and shows how they are equivalent.

Part 2 (the next article) derives Thévenin's theorem. We show how a complicated network of resistors and sources can be reduced to a Thévenin equivalent. 

Written by Willy McAllister.

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

### Where we're headed 
{:.no_toc}

The Thévenin circuit is a voltage source in series with a resistor.  
The Norton circuit is a current source in parallel with a resistor.

![Thevenin and Norton equivalent circuits]({{ site.baseurl }}{% link i/thevenin0.svg %})

Convert Thévenin to Norton by setting $\text R_\text N = \text R_\text T$ and $\text I_\text N = \text V_\text T / \text R_\text T$.  
Convert Norton to Thévenin by setting $\text R_\text T = \text R_\text N$ and $\text V_\text T = \text I_\text N \, \text R_\text N$. 

These circuits are *equivalent* because they produce the same $i$-$v$ behavior from the viewpoint of the output port (small circles).


----

In an earlier article on [simplifying resistor networks]({{ site.baseurl }}{% link _articles/simplifying-resistor-networks.md %}) we learned how to simplify any complicated resistor network down to a single resistor. Thévenin's theory is the next step in simplification strategy, 

**Thévenin's theory**  
"A circuit with any combination of resistors and ideal sources can be simplified down to a single voltage source in series with a single resistor."

**Norton's theory**  
"A circuit with any combination of resistors and ideal sources can be simplified down to a single current source in parallel with a single resistor."

If these two theories are true, it follows that,  
"Any Thévenin circuit can be converted into an equivalent Norton circuit, a current source in parallel with a single resistor."

Here in Part 1 we cover this last statement. We'll define Thévenin and Norton circuits and show what it means for them to "be equivalent." We learn some EE cleverness to figure out the $i$-$v$ characteristic of the two circuits.

This sinks in better if you to do most of the work. Please follow along with pencil and paper. 

## Review $i$-$v$ graphs for $\text V$, $\text I$, and $\text R$

Let's do a quick review of the $i$-$v$ graphs of the two sources and a resistor. Carefully sketch each of these as separate lines on an $i$-$v$ graph,
* voltage source, $v = 5\,\text V$
* current source, $i = 6\,\text{mA}$
* resistor, $\text R = 2\,\text k\Omega$  

A voltage source plots as a vertical straight line. Same voltage for any current.  
A current source plots as a horizontal straight line. Same current for any voltage.  
A resistor appears as a sloped line, $i = \dfrac{1}{\text R_{\text T}}\, v$, where the slope (rise over run) is $\dfrac{1}{\text R_{\text T}}$.

{% include_relative d3s/thevenin_blank_graph.html imageID="blank_graph_1" %} 

<details>
<summary>show answer</summary>
<p><img src="/i/thevenin1.svg"></p>
<p>The resistor passes through the origin. The ideal sources do not.</p>
</details>

There are lots of $\text T$ and $\text N$ subscripts in this article. I bet you can guess from the title what they stand for.

## Thévenin equivalent - voltage source and resistor

Now we get a bit more interesting by combining a resistor with a voltage source. 

![Resistor and voltage source schematic]({{ site.baseurl }}{% link i/thevenin2.svg %}){: .centered :}

### Convention for labeling network ports

The pair of little circles on the right represents the *port* of this simple network. The port is where you are allowed touch voltmeter probes or insert an ammeter into the circuit. We "look into" the circuit from the viewpoint of the port. 

There is a convention labeling $v$ and $i$ on a port. It is an extension of the [sign convention for passive components]({{ site.baseurl }}{% link _articles/sign-convention.md %}). Place the voltage label next to the port and pick which way you want $+$ and $-$ polarity to go. Then, by convention, point the current arrow *into the port* on the $+$ voltage side,

![Labeled resistor and voltage source schematic]({{ site.baseurl }}{% link i/thevenin2a.svg %}){: .centered :}

A lot of the time current actually flows out of the top port, going towards the right. That means quite often $i$ will have a negative sign. That's fine. We like this convention because everyone is consistent about current arrow direction and it isn't flipping around for different ports. We're happy to deal with a few minus signs in return for consistency.

### Thévenin $i$-$v$ plot

Now see if you can derive and plot the $i$-$v$ graph for this circuit. You want to find an equation for $i$ in terms of $v$ and the circuit elements, of the form $i = f(v,\text R_{\text T},\text V_{\text T})$. Give it a try using what you already know about the components and Ohm's Law.  

$i = f(v,\text R_{\text T},\text V_{\text T}) = $ \_\_\_\_\_\_\_\_\_\_\_\_\_ 

Plot your function with $\text V_{\text T} = 5\,\text V$ and $\text R_{\text T} = 2\,\text k\Omega$.

{% include_relative d3s/thevenin_blank_graph.html imageID="blank_graph_2" %} 

We'll find an $i$-$v$ expression with traditional circuit analysis and Ohm's Law, and then again by EE cleverness. 

#### Traditional circuit analysis

![Labeled resistor and voltage source schematic]({{ site.baseurl }}{% link i/thevenin2a.svg %}){: .centered :}

Write KVL around the loop, starting in the lower left,

$\text V_{\text T} + i\,\text R_{\text T} - v = 0\qquad$ (Notice the $+$ sign on the resistor term. $i$ points in.)

$v = \text V_{\text T} + i\,\text R_{\text T}$

Solve for $i$ in terms of $v,\text R_{\text T}$, and $\text V_{\text T}$,

$\dfrac{v - \text V_{\text T}}{\text R_{\text T}} = i$

$i = \dfrac{v}{\text R_{\text T}} - \dfrac{\text V_{\text T}}{\text R_{\text T}}$

Do you recognize this as the equation of a line? That's what we should expect since we are adding two lines $(\text V_{\text T}$ and $i\,\text R_{\text T})$. 

![Resistor and voltage source i-v graph]({{ site.baseurl }}{% link i/thevenin3.svg %}){: .centered :}

The result reminds us of a resistor line, but shifted to the right. The voltage source causes the line to cross the voltage axis at $v = 5\,\text V$ instead of going through the origin. The y-intercept is $-\text V_{\text T}/\text R_{\text T}$, crossing the current axis at $-5 / 2000\,\Omega = -2.5 \,\text{mA}$. The slope is $1/\text R_{\text T} = 1/2000$.

#### EE cleverness

We know the $i$-$v$ graph is a line, since it is the combination of lines. Another way to create the equation of a line is to find two points on the line.

To be clever, let's see if we can get the circuit to tell us how to plot the line. We look for where the line crosses both axes. For this we need some equipment: a voltmeter, an ammeter, and a shorting wire. 

**What could you do to the circuit to find where the line crosses the Voltage axis?**

<details>
<summary>show answer</summary>
<p>The line crosses the voltage axis when $i = 0$. How might we force $i$ to be $0$?</p> 
<p>We could connect nothing across the port, creating an open circuit,</p>
<p><img src="/i/thevenin4.svg"></p>
<p>With $i = 0$ measure the voltage. You can use a voltmeter or do this in your head. </p>
<p>$v_{oc} = \text V_{\text T} = 5\,\text V$ </p>
<p>The term $v_{oc}$ stands for "open circuit voltage". That's one point on the line.</p>
</details>

**What could you do to the circuit to find where the line crosses the Current axis?**

<details>
<summary>show answer</summary>
<p>The line crosses the current axis when $v = 0$. How might we force $v$ to be $0$? </p>
<p>We could connect a shorting wire across the port,</p>
<p><img src="/i/thevenin5.svg"></p>
<p>With $v = 0$, you can measure the current in the shorting wire. You could insert an ammeter into the shorting wire, or do it in your head.</p>
<p>$-i_{sc} = \dfrac{\text V_{\text T}}{\text R_{\text T}}\quad$ (minus sign since $i$ points to the left.)</p>
<p>$-i_{sc} = \dfrac{5\,\text V}{2000\,\Omega}$</p>
<p>$i_{sc} = -2.5\,\text{mA}$</p>

<p>The term $i_{sc}$ stands for "short circuit current". We have a second point on the line.</p>

<p>[Caution: DO NOT short a real circuit unless you already know it can survive the abuse.]</p>
</details>

**Create an equation for the line based on the two points.**

<details>
<summary>show answer</summary>
<p>I like to cut straight to the plot by marking the two points and drawing a straight line through them. The points are $(v_{oc},0)$ and $(0,i_{sc})$.</p>
<p><img src="/i/thevenin6.svg"></p>
<p>Given two points on a line, the equation of the line is,</p>
<p>$(y - y_1) = m\,(x - x_1)\qquad m = \dfrac{(y_1 - y_2)}{(x_1 - x_2)}$</p>
<p>The two points we know are,</p>
<p>$x_1,y_1 = (v_{oc},0) = (5\,\text V,0) \quad$ and $\quad x_2,y_2 = (0,i_{sc}) = (0,-2.5\,\text{mA})$</p>

<p>$y - 0 = \dfrac{(0 - i_{sc})}{(v_{oc} - 0)}(x - v_{oc})$</p>
<p>$y = \dfrac{0 - (-2.5\,\text{mA})}{5 - 0}(x - 5)$</p>
<p>$y = \dfrac{2.5\,\text{mA}}{5}(x - 5)$</p>
<p>$y = \dfrac{2.5\,\text{mA}}{5}\,x - \dfrac{2.5\,\text{mA}}{5}\cdot 5$</p>
<p>$y = \dfrac{x}{2000} - 2.5\,\text{mA}\qquad$ (same as what we got with the KCL algebra method)</p>
</details>

What have we learned? This exercise shows you how to plot the $i$-$v$ line for a Thévenin equivalent circuit. You can position the line anywhere on the $i$-$v$ graph just by picking the right resistor and voltage source. 

This open-circuit/short-circuit technique is pretty handy. We will use it again.

## Norton equivalent - current source and resistor

Let's look at a similar circuit with a current source. We will show how to generate any line on the $i$-$v$ graph, just like with the voltage source version. This time, the resistor is in parallel with the current source instead of in series as it was with a voltage source. 

![Norton circuit: Resistor and current source]({{ site.baseurl }}{% link i/thevenin7.svg %}){: .centered :}

We don't get to mess with current sources very often, so this circuit can be kind of a mind-bender. It's a good growth experience to sit with for a while and just ponder how it works. Envision what happens to currents when $v$ has different values.

Current $\text I_{\text N}$ flows out of the current source. When it reaches the resistor it merges with current $i$ flowing in from the port. What is the current flowing down through the resistor? It depends on the voltage appearing on the port (applied by some outside agent, not shown over to the right).

When the voltage is high the resistor demands a high current (Ohm's Law), that could be more than $\text I_{\text N}$. The extra portion comes from $i$. 
When the voltage across the port (across $\text R_{\text N}$) is low, the current demanded by the resistor is low. If the current demand is less than $\text I_{\text N}$, the extra current will flow out of the port as $-i$. If the voltage goes to $0$ that represents a short across the resistor. All of $\text I_{\text N}$ flows through the short, so $i = \text I_{\text N}$. If the voltage goes negative (the left side of the $i$-$v$ plot) then all of $\text I_{\text N}$ plus extra current flowing up through the resistor all goes out the port as a large $-i$. The extra current is provided by the unseen voltage source.  

### Norton $i$-$v$ plot

**Create an $i$-$v$ graph for this circuit.**  

Work out a symbolic expression for $i$ in terms of $v,\text R_{\text N},\text I_{\text N}$. 

$i = f(v,\text R_{\text N},\text I_{\text N}) = $ \_\_\_\_\_\_\_\_\_\_\_\_\_ 

Then plot the function with these component values, $\text I_{\text N} = 2\,\text{mA}$ and $\text R_{\text N} = 500\,\Omega$.

{% include_relative d3s/thevenin_blank_graph.html imageID="blank_graph_3" %} 

#### Traditional circuit analysis

Write Kirchhoff's Current Law for the top node, adding up currents flowing *into* the node,

$\text I_{\text N} - {v}{\text R_{\text N}} + i = 0$

Solve for $i$ in terms of $v,\text R_{\text N}$, and $\text I_{\text N}$,

$i = \dfrac{v}{\text R_{\text N}} - \text I_{\text N}$

We get the equation of a line. That shouldn't be a surprise. The $i$-$v$ graphs for a current source and a resistor are straight lines. It makes sense to get a line when we add lines. This time the y-intercept is $-\text I_{\text N}$ and the slope is $1/\text R_{\text N}$.

Here's the plot using the component values from above,

$i = \dfrac{v}{500\,\Omega} - 2\,\text{mA}$

![First Norton i-v graph]({{ site.baseurl }}{% link i/thevenin8.svg %}){: .centered :}

Notice the strong resemblance this equation has to the one we derived for the voltage source and resistor. Hmm, that's interesting, hold that thought.

#### EE cleverness again

Let's identify two points on the line with the same open-circuit/short-circuit thing we did above. Please try this yourself first,

**Find the two points where the line crosses the $v$ and $i$ axes.**

Consider doing this two ways, by fiddling with the equation, and by putting open and sort circuits on the schematic and measuring with your mental multimeter.

$(v_{oc}, 0) = ($ \_\_\_\_\_\_\_\_, $0)$   
$(0, i_{sc}) = (0$, \_\_\_\_\_\_\_\_ $)$

<details>
<summary>show answer</summary>
<p>Find where the line crosses the $v$ axis. $i = 0$ everywhere on the $v$ axis. To make sure $i = 0$ leave the port unconnected (an open circuit) so no current can flow in or out of the port.</p>
<p><img src="/i/thevenin8c.svg"></p>
<p>With the port left open, all of $\text I_{\text N}$ is forced to flow through $\text R_{\text N}$. The voltage appearing across $\text R_{\text N}$ is,</p>
<p>$v_{oc} = \text I_{\text N}\,\text R_{\text N}$</p>
<p>$v_{oc} = 2\,\text{mA} \cdot 500 \,\Omega = 1\,\text V$</p>
<p>That's our first point.</p>

<p>Now find the point where the line crosses the $i$ axis. $v = 0$ everywhere on the $i$ axis. In this case we force $v$ to $0$ by connecting a shorting wire across the port.</p>
<p><img src="/i/thevenin8b.svg"></p>
<p>With the short in place there is no voltage across the resistor. All of $\text I_{\text N}$ flows through the short and none through the resistor. Figure out the current flowing in the short. By simple inspection,</p>
<p>$i_{sc} = -\text I_{\text N} = -2\,\text{mA}$</p>
<p>That's our second point. If you want, you can use these two points to construct an equation of the line, and it should match what we did with the KCL analysis just above. Here is the plot,</p>
<p><img src="/i/thevenin8a.svg"></p>
</details>

What have we learned? The current source and resistor circuit, as weird it is, behaves just like the voltage source with resistor circuit. It creates a line in $i$-$v$ space that we can adjust by changing component values.

Coming next is a design challenge: We find a way to match the two circuits.

## Norton's theorem design challenge

The two circuits generate similar lines on the $i$-$v$ plot. Here's a design challenge for you,

**1. Make the two circuits produce the same line.**

Reminder: Here are equations for the Thévenin and Norton equivalents,

$i = \dfrac{v}{\text R_{\text T}} - \dfrac{\text V_{\text T}}{\text R_{\text T}}$

$i = \dfrac{v}{\text R_{\text N}} - \text I_{\text N}$

Find relationships between the key parameters, $\text R_\text T$, $\text R_\text N$, $\text V_\text T$, and $\text I_\text N$ that makes the two equations the same.

$\text R_\text N = $  \_\_\_\_\_\_\_\_

$\text I_{\text N} = $ \_\_\_\_\_\_\_\_

<details>
<summary>show answer</summary>
<p>Two lines are the same if they have the same slope and the same y-intercept. Look at the two equations and figure out how to match the things that need to match.</p>
<p>To get the slopes to match, $\text R_\text N = \text R_\text T$. The resistors have to be the same.</p>
<p>To get the y-intercepts to match, $\text I_{\text N} = \dfrac{\text V_{\text T}}{\text R_{\text T}}$. That's the same as saying $\text V_{\text T} = \text I_{\text N}\,\text R_{\text N}$</p>
</details>

If you are given one of these circuits you can instantly changed it into the other using these relationships. Both circuits produce identical $i$-$v$ characteristics.

**2. Use the component values from the original Voltage source circuit to produce an equivalent Current source circuit.**

$\text V_{\text T} = 5\,\text V$, $\text R_{\text T} = 2\,\text k\Omega$

$\text I_{\text N} =$ \_\_\_\_\_\_\_\_

$\text R_{\text N} =$ \_\_\_\_\_\_\_\_

<details>
<summary>show answer</summary>
<p>$\text I_{\text N} = \dfrac{\text V_{\text T}}{\text R_{\text T}} = \dfrac{5}{2000} = 2.5\,\text{mA}$</p>
<p>$\text R_\text N = \text R_\text T = 2000\,\Omega$</p>
<p><img src="/i/thevenin11.svg"></p>
<p>Notice how $\text I_{\text N}$ is the $i_{sc}$ intersection point on the current axis we found when we shorted out the voltage source circuit.</p>
<p><img src="/i/thevenin6.svg"></p>

</details> 

**3. Now go in reverse. Use the component values from the original Current source circuit to create an equivalent Voltage source circuit.**

$\text I_{\text N} = 2\,\text{mA}$, $\text R_{\text N} = 500\,\Omega$

$\text V_{\text T} =$ \_\_\_\_\_\_\_\_

$\text R_{\text T} =$ \_\_\_\_\_\_\_\_

<details>
<summary>show answer</summary>
<p>$\text V_{\text T} = \text V_{\text T} \, \text R_{\text N} = 0.002 \cdot 500 = 1\,\text V$</p>
<p>$\text R_\text T = \text R_\text N = 500\,\Omega$</p>
<p><img src="/i/thevenin12.svg"></p>

<p>$\text V_\text T$ is the same as the $v_{oc}$ intersection point on the voltage axis we found when we applied an open to the current source circuit.</p>
<p><img src="/i/thevenin8a.svg"></p>
</details> 

When you "look into" these circuits from the port with a volt meter or ammeter, you can't tell them apart. They produce identical behavior for any $v$ or any $i$. That means they are interchangeable. We will take advantage of this when we put Thévenin's theorem to work in Part 2 of this article. 

## Summary
{:.no_toc}

Thévenin's circuit is a voltage source in series with a resistor.

Norton's circuit is a current source in parallel with a resistor.

You can make them produce the same $i$-$v$ behavior if you set,

$\text R_{\text{Thevenin}} = \text R_{\text{Norton}}\quad$ and

$\text V_{\text{Thevenin}} = \text I_{\text{Norton}}\, \text R$

When circuits produce the same $i$-$v$ curve from the viewpoint of a selected port, we say they are *equivalent* from the perspective of that port.

In Part 2 of this article we will see how to simplify complex networks of multiple $\text R$'s and sources down to a *Thévenin equivalent* or *Norton equivalent*.

<details>
<summary>what about other one-source one-resistor circuits?</summary>
<p>After thinking so much about Thévenin and Norton circuits, it's an obvious question to ask about the other two possibilities. Consider,</p>

<ul>
    <li>Voltage source in parallel with a resistor</li>
    <li>Current source in series with a resistor</li>
</ul>

<p>Think about this for a second or two. What does the resistor do in these alternatives?</p>
<p>The resistors don't do anything in either circuit.</p>
<p>If you put a resistor in parallel with a voltage source it has no effect on the voltage, and it doesn't influence $i$. All you are doing is pulling some extra current out of the ideal voltage source, a current we can't observe from the port. Who cares if there's a resistor in parallel with the ideal voltage source? The resistor is useless.</p>
<p>The same goes for the resistor in series with a current source. The source pushes its current through the resistor no matter what the resistor value is. The resistor just forces the ideal current source to create some extra voltage to drive the required current. We can't observe that voltage from the port.</p>
<p>So after some thought, these two variations don't make sense and therefore don't matter to us.</p>
</details>

<details>
    <summary>credit to the inventors</summary>
<p>Thévenin's theorem was independently derived in 1853 by German scientist Hermann von Helmholtz and thirty years later in 1883 by Léon Charles Thévenin, an electrical engineer with France's national Postes et Télégraphes Telecommunications (PTT).</p>

<p>Norton's theorem was independently derived in 1926 by Siemens & Halske researcher Hans Ferdinand Mayer and Bell Labs engineer Edward Lawry Norton. Published the same month.</p>
</details>
