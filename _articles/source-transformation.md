---
layout: article
title:  "Source transformation"
author: Willy McAllister
comments: true
---

Two simple circuits have special names,

The *Thévenin* form is a voltage source in series with a resistor.  
The *Norton* form is a current source in parallel with a resistor.

![Thévenin and Norton forms]({{ site.baseurl }}{% link i/thevenin0.svg %})

You can convert between Thévenin and Norton forms. This is called *source transformation*. 

Explained by Willy McAllister.

(These names are used in the United States. If you learned other names, please let me know.)

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

### Where we're headed 
{:.no_toc}

The resistor value is the same for the Thévenin and Norton forms, $\text R_\text T = \text R_\text N$.

Convert Thévenin to Norton: set $\text I_\text N = \text V_\text T / \text R_\text T$.  

Convert Norton to Thévenin: set $\text V_\text T = \text I_\text N \, \text R_\text N$. 

Thévenin and Norton forms are *equivalent* because they have the same $i$-$v$ behavior from the viewpoint of the output port.

----

We'll draw a lot of $i$-$v$ graphs to visualize what's going on. This sinks in better if you to do most of the work. Please follow along with pencil and paper. 

The theory of [Thévenin and Norton equivalents]({{ site.baseurl }}{% link _articles/thevenin-proof.md %}) is based on source transformation. Thévenin's theorem says any complicated network of resistors and sources can be reduced down to a Thévenin or Norton equivalent. 

## $i$-$v$ graphs for $\text V$, $\text I$, and $\text R$

Let's review the individual $i$-$v$ graphs of sources and resistors. Carefully sketch each of these as separate lines on an $i$-$v$ graph,
* voltage source, $v = 5\,\text V$
* current source, $i = 6\,\text{mA}$
* resistor, $\text R = 2\,\text k\Omega$  

A voltage source plots as a vertical straight line. It's the same voltage for any current.  
A current source plots as a horizontal straight line. It's the same current for any voltage.

A resistor appears as a line, $i = \dfrac{v}{\text R_{\text T}}$, where the slope (rise over run) is $\dfrac{1}{\text R_{\text T}}$.

{% include_relative d3s/thevenin_blank_graph.html imageID="blank_graph_1" %} 

<details>
<summary>show answer</summary>
<p><img src="/i/thevenin1.svg"></p>
<p>The resistor passes through the origin and has a tilt of $1/\text R = 1/2\,\text k\Omega$.</p>
<p>The ideal sources are either vertical or horizontal. They don't pass through the origin.</p>
</details>

## Thévenin form

Now make it more interesting: What does the graph a resistor and voltage source look like on an $i$-$v$ plot? 

![Resistor and voltage source schematic]({{ site.baseurl }}{% link i/thevenin2.svg %}){: .centered :}

### How to label network ports

The pair of little circles on the right represents the *port* of this simple network. You are allowed to touch the port with voltmeter probes. You can also measure current with an ammeter connected to the port. We "look into" the circuit from the viewpoint of the port. 

There is a common convention to label $v$ and $i$ at a port. It is an extension of the [sign convention for passive components]({{ site.baseurl }}{% link _articles/sign-convention.md %}). Place the voltage label next to the port and pick which way you want $+$ and $-$ polarity to go. Usually we put $+$ towards the top of the page. Then, by convention, point the current arrow *into the port* on the $+$ voltage side,

![Labeled resistor and voltage source schematic]({{ site.baseurl }}{% link i/thevenin2a.svg %}){: .centered :}

A lot of times current actually flows out of the top port, towards the right. Quite often it means $i$ will have a negative sign. That's fine. We like this convention because it gives a consistent current arrow direction; it doesn't flip around for different people and different ports. We're happy to deal with a few minus signs in return for consistency.

### Thévenin $i$-$v$ plot
{:.no_toc}

See if you can derive and plot the $i$-$v$ graph for this circuit. 

**Work out a symbolic expression for $i$ in terms of** $v,\text R_\text T,\text V_\text T$. 

Try to find an equation for $i$ in terms of $v$ and the circuit elements, something with the form $i(v) = f(v,\text R_\text T,\text V_\text T)$. Give it a try. Use what you already know about the two components and Ohm's Law.  

$i(v) = f(v,\text R_\text T,\text V_\text T) = $ \_\_\_\_\_\_\_\_\_\_\_\_\_ 

**Then plot your function with** $\text V_\text T = 5\,\text V$ and $\text R_\text T = 2\,\text k\Omega$.

![Thévenin schematic with 5 V and 2 kohms]({{ site.baseurl }}{% link i/thevenin2b.svg %}){: .centered :}

{% include_relative d3s/thevenin_blank_graph.html imageID="blank_graph_2" %} 

Now that you've had a try, it's my turn. I want to derive an $i$-$v$ expression by traditional circuit analysis, and then again with some EE cleverness. 

#### Traditional circuit analysis
{:.no_toc}

![Labeled resistor and voltage source schematic]({{ site.baseurl }}{% link i/thevenin2a.svg %}){: .centered :}

Write KVL around the loop; start in the lower left,

$\text V_\text T + i\,\text R_\text T - v = 0\qquad$ ($+$ sign on the resistor term because $i$ points right to left)

$v = \text V_{\text T} + i\,\text R_{\text T}$

Solve for $i$ in terms of $v,\text R_\text T$, and $\text V_\text T$,

$i = \dfrac{v - \text V_\text T}{\text R_\text T}$

Cross the $v$ axis: When $v = \text V_\text T$ then $i = 0$.

Rearrange a little,

$i = \dfrac{v}{\text R_\text T} - \dfrac{\text V_\text T}{\text R_\text T}$

Do you recognize this as the equation of a line? It's what we should expect since it is the combination of lines from a voltage source and resistor, $\text V_{\text T}$ and $\text R_{\text T}$. 

Here's a plot with the given values, $i = \dfrac{v}{2\,\text k\Omega} - 2.5\,\text{mA}$

![Resistor and voltage source i-v graph]({{ site.baseurl }}{% link i/thevenin3.svg %}){: .centered :}

The result resembles the tilted $i$-$v$ line of a resistor, but shifted away from the origin. The voltage source shifts the line to the right by $\text V_\text T$ so it crosses the voltage axis at $v = 5\,\text V$. The resistor determines the slope, $1/\text R_{\text T} = 1/2000$. The y-intercept is $-\text V_{\text T}/\text R_{\text T}$. It crosses the current axis at $-5 / 2000\,\Omega = -2.5 \,\text{mA}$. 

#### EE cleverness
{:.no_toc}

Let's see if we can get the circuit to tell us its $i$-$v$ graph. 

We expect it to be a line, since it's made from the sum of two lines. If we know two points on the line, we can form the equation. Can get the circuit to tell us two points? 

Two easy points are where the line crosses the voltage axis and where it crosses the current axis. For this we need some equipment: a voltmeter, an ammeter, and a short wire. 

**What could you do to find the point where the line crosses the Voltage axis?**

<details>
<summary>show answer</summary>
<p>The line crosses the voltage axis when $i = 0$. How might we force $i$ to be $0$?</p> 
<p>We could connect nothing across the port to create an open circuit,</p>
<p><img src="/i/thevenin4.svg"></p>
<p>With $i = 0$, measure the voltage. You can use a voltmeter or do this in your head. </p>
<p>$v_{oc} = \text V_{\text T} = 5\,\text V$ </p>
<p>$v_{oc}$ stands for "open circuit voltage". One point on the line, one more to go.</p>
<p>The open circuit voltage is the same as the voltage supply, $\text V_\text T$.</p>
</details>

**What could you do to find the point where the line crosses the Current axis?**

<details>
<summary>show answer</summary>
<p>The line crosses the current axis when $v = 0$. How might we force $v$ to be $0$? </p>
<p>We could connect a wire across the port to short it out,</p>
<p><img src="/i/thevenin5.svg"></p>
<p>With $v = 0$, you can measure the current in the wire. Insert an ammeter into the wire, or do it in your head.</p>
<p>$-i_{sc} = \dfrac{\text V_{\text T}}{\text R_{\text T}}\quad$ (minus sign since $i$ points to the left.)</p>
<p>$-i_{sc} = \dfrac{5\,\text V}{2000\,\Omega}$</p>
<p>$i_{sc} = -2.5\,\text{mA}$</p>

<p>$i_{sc}$ stands for "short circuit current". We have a second point on the line.</p>

<p>[Caution: DO NOT short a real circuit unless you already know it can survive the abuse.]</p>
</details>

**Create an equation for the line based on the two points.**

<details>
<summary>show answer</summary>
<p>I like to see the plot right away. Just mark the two points and draw a line. The points are $(v_{oc},0)$ and $(0,i_{sc})$.</p>
<p><img src="/i/thevenin6.svg"></p>
<p>Given any two points, the equation of the line is,</p>
<p>$(y - y_1) = m\,(x - x_1)\qquad m = \dfrac{(y_1 - y_2)}{(x_1 - x_2)}$</p>
<p>The two points we know are,</p>
<p>$x_1,y_1 = (v_{oc},0) = (5\,\text V,0) \quad$ and $\quad x_2,y_2 = (0,i_{sc}) = (0,-2.5\,\text{mA})$</p>

<p>$y - 0 = \dfrac{(0 - i_{sc})}{(v_{oc} - 0)}(x - v_{oc})$</p>
<p>$y = \dfrac{0 - (-2.5\,\text{mA})}{5 - 0}(x - 5)$</p>
<p>$y = \dfrac{2.5\,\text{mA}}{5}(x - 5)$</p>
<p>$y = \dfrac{2.5\,\text{mA}}{5}\,x - \dfrac{2.5\,\text{mA}}{5}\cdot 5$</p>
<p>$y = \dfrac{x}{2000} - 2.5\,\text{mA}\qquad$ (same as what we got with the traditional KVL method)</p>
</details>

What have we learned? We worked through two ways to reveal the $i$-$v$ behavior of a Thévenin circuit. The tilt of the line is controlled by $\text R_\text T$. The line crosses the voltage axis at $\text V_\text T$. You can position the line anywhere you want on the $i$-$v$ graph with your choice of resistor and voltage values. 

The open-circuit/short-circuit technique is pretty handy. We will use it again.

## Norton form

Now let's look at the Norton form,

![Norton circuit: Resistor and current source]({{ site.baseurl }}{% link i/thevenin7.svg %}){: .centered :}

**Work out a symbolic expression for $i$ in terms of** $v,\text R_{\text N},\text I_{\text N}$. 

$i(v) = f(v,\text R_{\text N},\text I_{\text N}) = $ \_\_\_\_\_\_\_\_\_\_\_\_\_


**Then plot your function with these values,** $\text I_{\text N} = 2\,\text{mA}$ and $\text R_{\text N} = 500\,\Omega$.

![Norton circuit: 2 ma and 500 ohms]({{ site.baseurl }}{% link i/thevenin7a.svg %}){: .centered :}

{% include_relative d3s/thevenin_blank_graph.html imageID="blank_graph_3" %} 

Now you've had a chance. I will derive the Norton $i$-$v$ expression by traditional circuit analysis, and again use the EE cleverness we learned above. 

#### Traditional circuit analysis
{:.no_toc}

Write Kirchhoff's Current Law for the top node; add up currents flowing *into* the node,

$\text I_{\text N} - {v}{\text R_{\text N}} + i = 0$

Solve for $i$ in terms of $v,\text R_{\text N}$, and $\text I_{\text N}$,

$i = \dfrac{v}{\text R_{\text N}} - \text I_{\text N}$

This the equation of a line. It shouldn't be a surprise. The $i$-$v$ graphs for a current source and a resistor are lines, and it makes sense to get a line when we add lines. This time the y-intercept is $-\text I_{\text N}$ and the slope is $1/\text R_{\text N}$.

Cross the $i$ axis: When $i = \text I_\text N$ then $v = 0$.

Notice the strong resemblance this equation has to the one we derived for the Thévenin form. Hmm, hold the thought.

Here's the plot with the given values, $i = \dfrac{v}{500\,\Omega} - 2\,\text{mA}$

![First Norton i-v graph]({{ site.baseurl }}{% link i/thevenin8.svg %}){: .centered :}

#### More EE cleverness
{:.no_toc}

Let's identify two points again, with the same open-circuit/short-circuit thing we did above. Please give this a try before you peek,

![Norton circuit: Resistor and current source]({{ site.baseurl }}{% link i/thevenin7.svg %}){: .centered :}

**Find the two points where the line crosses the $v$ axis and $i$ axis.**

Put open and sort circuits across the port and measure with your mental multimeter.

$(v_{oc}, 0) = ($ \_\_\_\_\_\_\_\_, $0)$   

$(0, i_{sc}) = (0$, \_\_\_\_\_\_\_\_ $)$

<details>
<summary>show answer</summary>
<p>The line crosses the $v$ axis when $i = 0$. To force $i = 0$ leave the port unconnected (open circuit) so no current can flow in or out of the port,</p>
<p><img src="/i/thevenin8c.svg"></p>
<p>With the port open, all of $\text I_{\text N}$ is has to flow through $\text R_{\text N}$. The voltage across $\text R_{\text N}$ is,</p>
<p>$v_{oc} = \text I_{\text N}\,\text R_{\text N}$</p>
<p>$v_{oc} = 2\,\text{mA} \cdot 500 \,\Omega = 1\,\text V$</p>
<p>This is our first point.</p>

<p>The point where the line crosses the $i$ axis is $v = 0$. To force $v = 0$ connect a wire to short across the port.</p>
<p><img src="/i/thevenin8b.svg"></p>
<p>With the wire in place there is no voltage across the resistor. All of $\text I_{\text N}$ flows through the short and none through the resistor. Figure out the current in the short. By simple inspection,</p>
<p>$i_{sc} = -\text I_{\text N} = -2\,\text{mA}$</p>
<p>This is our second point. Use these two points to construct an equation of the line. It should match what we did with the KCL analysis just above. Here is the plot,</p>
<p><img src="/i/thevenin8a.svg"></p>
</details>

What have we learned? The Norton form, as weird it is, behaves just like the Thévenin form. It plots as a line in $i$-$v$ space. You can move it anywhere just by your choice of component values.

## Observations
{:.no_toc}

$\text V_{\text{Thevenin}}$ creates a left-right offset away from the vertical current axis.  

$\text I_{\text{Norton}}$ creates an up/down offset away from the horizontal voltage axis. 

$\text R$ creates the tilt. The tilt is the same for both forms, which is why $\text R_{\text{Thévenin}} = \text R_{\text{Norton}}$. 

$\text V_\text{Thévenin}$ and $\text I_\text{Norton}$ have no effect tilt, they just generate offset. The tilt depends only on the resistance.

Notice the current in the Norton resistor. Current in $\text R_\text N$ isn't available to the load resistor. It seems like "wasted" power. That's what happens when you drive a load with a Norton source. In the Thévenin circuit, the equivalent "waste" is the voltage across the Thévenin resistor. This voltage dissipates power (heat) in $\text R_\text T$ and isn't available to the load. The amount of waste is the same. 

## Source transformation challenge 1

Both circuits generate tilted lines on the $i$-$v$ plot.

**1. Make the two circuits produce the same line.**

Reminder: Here are equations for the Thévenin and Norton forms,

$i = \dfrac{v}{\text R_\text T} - \dfrac{\text V_\text T}{\text R_\text T}$

$i = \dfrac{v}{\text R_{\text N}} - \text I_{\text N}$

Find relationships between the key parameters, $\text R_\text T$, $\text R_\text N$, $\text V_\text T$, and $\text I_\text N$ to make the two equations the same.

$\text R_\text N = $  \_\_\_\_\_\_\_\_

$\text I_\text N \,= $ \_\_\_\_\_\_\_\_

$\text V_\text T = $ \_\_\_\_\_\_\_\_

<details>
<summary>show answer</summary>
<p>Two lines are the same if they have the same slope and the same y-intercept. Look at the two equation. Match the things that need to match.</p>
<p>To get the slopes to match, $\text R_\text N = \text R_\text T$. The resistors have to be the same.</p>
<p>To get the y-intercepts to match, $\text I_\text N = \text V_\text T / \text R_\text T$.</p>
<p>This is the same as $\text V_\text T = \text I_\text N\,\text R_\text N$.</p>
<p>If you are given one of these forms you can instantly changed it into the other with these relationships. Both circuits produce identical $i$-$v$ characteristics.</p>
</details>

**2. Use the component values from the Thévenin example to produce an equivalent Norton circuit.**

$\text V_{\text T} = 5\,\text V$, $\text R_{\text T} = 2\,\text k\Omega$

$\text I_{\text N} =$ \_\_\_\_\_\_\_\_

$\text R_{\text N} =$ \_\_\_\_\_\_\_\_

<details>
<summary>show answer</summary>
<p>$\text R_\text N = \text R_\text T = 2000\,\Omega$</p>
<p>$\text I_{\text N} = \dfrac{\text V_{\text T}}{\text R_{\text T}} = \dfrac{5}{2000} = 2.5\,\text{mA}$</p>
<p><img src="/i/thevenin11.svg"></p>
</details> 

**3. Now go in reverse. Use the component values from the Norton example to create an equivalent Thévenin circuit.**

$\text I_{\text N} = 2\,\text{mA}$, $\text R_{\text N} = 500\,\Omega$

$\text V_{\text T} =$ \_\_\_\_\_\_\_\_

$\text R_{\text T} =$ \_\_\_\_\_\_\_\_

<details>
<summary>show answer</summary>
<p>$\text R_\text T = \text R_\text N = 500\,\Omega$</p>
<p>$\text V_{\text T} = \text V_{\text T} \, \text R_{\text N} = 0.002 \cdot 500 = 1\,\text V$</p>
<p><img src="/i/thevenin12.svg"></p>
</details> 

Notice how the conversion process resembles Ohm's Law.

When you "look into" these circuits from the port you can't tell them apart. (You "look" with a voltmeter or ammeter.) They produce identical behavior for any $v$ or any $i$. This means they are equivalent and therefore interchangeable. We will take advantage of this when we put Thévenin's theorem to work in the next article.

## Source transformation challenge 2

You can use this [simulation model](http://spinningnumbers.org/circuit-sandbox/index.html?value=[["v",[88,80,0],{"name":"Vt","value":"dc(0)","_json_":0},["4","0"]],["r",[240,80,4],{"name":"RL1","r":"","_json_":1},["7","6"]],["r",[176,64,1],{"name":"Rt","r":"","_json_":2},["5","4"]],["g",[152,144,0],{"_json_":3},["0"]],["w",[88,128,88,144]],["w",[88,144,152,144]],["w",[88,80,88,64]],["w",[88,64,128,64]],["w",[176,64,200,64]],["w",[152,144,200,144]],["w",[240,128,240,144]],["w",[240,144,224,144]],["w",[240,80,240,64]],["w",[240,64,224,64]],["r",[240,208,4],{"name":"RL2","r":"","_json_":14},["3","2"]],["r",[152,256,2],{"name":"Rn","r":"","_json_":15},["0","1"]],["g",[152,272,0],{"_json_":16},["0"]],["w",[240,256,240,272]],["w",[240,272,224,272]],["w",[240,208,240,192]],["w",[240,192,224,192]],["i",[88,256,6],{"name":"In","value":"dc(0)","_json_":21},["0","1"]],["w",[192,192,152,192]],["w",[152,256,152,272]],["w",[192,272,152,272]],["w",[88,208,88,192]],["w",[152,208,152,192]],["w",[152,192,88,192]],["w",[152,272,88,272]],["w",[88,272,88,256]],["view",-95.5,25.30000000000001,1.5625,"50","10","1G",null,"100","0.01","1000"]]) to help you with this design challenge. Open the link in another tab. Follow the steps of the challenge. To change a component value, double-click on it. At the appropriate step, click **DC** in the top menu bar to tell you the voltage and current.

**1. Design your own Thévenin form. Pick any values for $\text V_\text T$ and $\text R_\text T$.**

![Design challenge 2 Thévenin circuit]({{ site.baseurl }}{% link i/thevenin13.svg %}){: .centered :}

{:start="2"}
**2. Design the Norton equivalent to your Thévenin circuit,**

![Design challenge 2 Norton circuit]({{ site.baseurl }}{% link i/thevenin15.svg %}){: .centered :}

{:start="3"}
**3. Determine the open-circuit voltage and short-circuit current,**

$v_{oc} =$ \_\_\_\_\_\_\_\_\_ $\quad i_{sc} =$ \_\_\_\_\_\_\_\_\_ 

{:start="4"}
**4. Write the $i$-$v$ equation and plot it on an $i$-$v$ graph.** It's the same equation for both forms,

$i(v) = $ \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

{% include_relative d3s/thevenin_blank_graph.html imageID="blank_graph_4" %}  
(Adjust the scales so your particular graph look nice.) 

{:start="5"}
**5. Connect a load resistor $\text R_\text L$ to both forms.** Use the same resistance for both load resistors.

![Design challenge 2 with load resistor]({{ site.baseurl }}{% link i/thevenin16.svg %})

{:start="6"}
**6. Compute the voltage and current for both load resistors,**

$v_\text{RLTh} = $ \_\_\_\_\_\_\_\_\_ $\quad i_\text{RLTh} = $ \_\_\_\_\_\_\_\_\_ 

$v_\text{RLN} = $ \_\_\_\_\_\_\_\_\_ $\quad i_\text{RLN} = $ \_\_\_\_\_\_\_\_\_

{:start="7"}
**7. Plot this point on your $i$-$v$ graph.** It's not the same point as $v_{oc}$ or $i_{sc}$, but it should fall on the $i$-$v$ line you plotted.

If you used the simulation model to help you with this design challenge, notice the simulator didn't tell you the answer. You had to figure out the Norton equivalent on your own. However, the simulator did confirm if your answer was right or wrong. 

## Summary
{:.no_toc}

Thévenin's circuit is a voltage source in series with a resistor.

Norton's circuit is a current source in parallel with a resistor.

Thévenin and Norton forms have identical $i$-$v$ behavior if you set,

$\text R_{\text{Thévenin}} = \text R_{\text{Norton}}$

$\text V_{\text{Thévenin}} = \text I_{\text{Norton}}\, \text R$

When circuits produce the same $i$-$v$ curve from the viewpoint of a selected port, we say they are *equivalent* from the perspective of the port. 

You can swap a Norton for a Thévenin or the other way round any time you want.

Source transformation stands on the shoulders of Ohm's Law and Kirchhoff's Laws. It is useful when you come across the pattern of a source and a resistor. 

Don't short out real electronic equipment to find $i_{sc}$. That is a recipe for smoke.

The next article shows how to apply [source transformation]({{ site.baseurl }}{% link _articles/source-transformation.md %}).

<details>
<summary>Aren't there other circuits with one source and one resistor?</summary>
<p>After so much talk about Thévenin and Norton circuits, it's an obvious question to ask about the other two possibilities. Consider,</p>

<ul>
    <li>Voltage source in parallel with a resistor</li>
    <li>Current source in series with a resistor</li>
</ul>

<p>Give this a little thought for a second or two. What does the resistor do in these alternatives?</p>
<p>The resistors don't do anything in either circuit.</p>
<p>If you put a resistor in parallel with a voltage source it has no effect on the voltage, and it doesn't influence $i$. All you do is pull some extra current out of the ideal voltage source, a current we can't observe from the port. Who cares if there's a resistor in parallel with the ideal voltage source? The resistor is useless.</p>
<p>The same goes for the resistor in series with a current source. The source pushes its current through the resistor no matter what the resistor value is. The resistor just forces the ideal current source to create some extra voltage to drive the required current. We can't observe the source voltage from the port.</p>
<p>So after some thought, these two variations don't make sense and therefore don't matter to us.</p>
</details>
