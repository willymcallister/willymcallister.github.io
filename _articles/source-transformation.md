---
layout: article
title:  "Source transformation"
author: Willy McAllister
comments: true
---

*Source transformation* lets you change a voltage source into a current source, or the other way around. It is a way to simplify a circuit. The method is based on Thévenin's theorem and Norton's theorem.

Two simple circuits have special names,

The *Thévenin* form is a voltage source in series with a resistor.  
The *Norton* form is a current source in parallel with a resistor.

![Thévenin and Norton forms]({% link i/thevenin0.svg %})

It is possible to convert between Thévenin and Norton forms.  

Written by Willy McAllister. 

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

### Where we're headed 
{:.no_toc}

To convert Thévenin to Norton: set $\text I_\text N = \text V_\text T / \text R_\text T$.  

To convert Norton to Thévenin: set $\text V_\text T = \text I_\text N \, \text R_\text N$. 

The Thévenin and Norton resistors have the same value, $\text R_\text T = \text R_\text N$.

Thévenin and Norton forms are *equivalent* because they have the same $i$-$v$ behavior from the viewpoint of the output port.

----

We'll draw a lot of $i$-$v$ graphs to visualize what's going on. The idea sinks in better if you to do most of the work. Please follow along with pencil and paper. 

We use source transformation in the [proof of Thévenin's and Norton's theorem]({% link _articles/thevenin-proof.md %}). 

## $i$-$v$ graphs for V, I, and R

Let's first review the $i$-$v$ graphs of sources and resistors by themselves. Prepare an $i$-$v$ graph and carefully sketch each of these as separate lines,
* voltage source, $v = 5\,\text V$
* current source, $i = 6\,\text{mA}$
* resistor, $\text R = 2\,\text k\Omega$  

![Blank i-v graph]({% link i/thevenin_blank_graph.svg %}){: .centered :}

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
![i-v graphs of v, i, and r]({% link i/thevenin1.svg %}){: .centered :}

The resistor line has a tilt of $1/\text R = 1/2\,\text k\Omega$. It passes through the origin.  
The voltage source line is a vertical line passing through $v = 5\,\text V$.  
The current source line is a horizontal line passing through $i = 6\,\text{mA}$.
{% endcapture %}{% include details.html %} 

A resistor appears as a slanted line through the origin, $i = \dfrac{v}{\text R}$. 

The slope (rise over run) of a resistor line is $\dfrac{1}{\text R}$.

A voltage source plots as a vertical line. It's the same voltage for any current.  
A current source plots as a horizontal line. It's the same current for any voltage.  
Voltage and current source lines do not pass through the origin.

## Thévenin form

Now make it more interesting: Find the $i$-$v$ behavior of this resistor and voltage source circuit. 

![Resistor and voltage source schematic]({% link i/thevenin2.svg %}){: .centered :}

The pair of little circles on the right represents the *port* of this simple network. You are allowed to touch the port with voltmeter probes. You can also measure current if you connect an ammeter to the port. This is what it means to "look into" the circuit from the "viewpoint" of the port.
{: .caption :}

**Derive the $i$-$v$ graph for this circuit.** 

Hint: Start by deriving a symbolic expression for $i$ in terms of $v,\text R_\text T,\text V_\text T$. 

Try to find something with the form $i(v) = f(v,\text R_\text T,\text V_\text T)$. Use what you know about the two components and Ohm's Law.  

$i = f(v,\text R_\text T,\text V_\text T) = $ \_\_\_\_\_\_\_\_\_\_\_\_\_ 

**Plot your function for** $\text V_\text T = 5\,\text V$ and $\text R_\text T = 2\,\text k\Omega$.

![Thévenin schematic with 5 V and 2 kohms]({% link i/thevenin2b.svg %}){: .centered :}

![Blank i-v graph]({% link i/thevenin_blank_graph.svg %}){: .centered :}

Now that you've had a try, it's my turn. I will derive an $i$-$v$ expression by traditional circuit analysis, and then again with some EE cleverness. 

#### Traditional circuit analysis
{:.no_toc}

![Labeled resistor and voltage source schematic]({% link i/thevenin2a.svg %}){: .centered :}

Write KVL around the loop; start in the lower left,

$\text V_\text T - i\,\text R_\text T - v = 0$ 

Solve for $i$ in terms of $v,\text R_\text T$, and $\text V_\text T$,

$i = \dfrac{\text V_\text T - v}{\text R_\text T}$

Rearrange a little,

$i = -\dfrac{v}{\text R_\text T} + \dfrac{\text V_\text T}{\text R_\text T}$

Do you recognize this as the equation of a line? It's what we should expect since it is the combination of lines from a voltage source and resistor, $\text V_{\text T}$ and $\text R_{\text T}$. 

With the given values, 

$i = -\dfrac{v}{2\,\text k\Omega} + \dfrac{5\,\text V}{2\,\text k\Omega} = -\dfrac{v}{2\,\text k\Omega} + 2.5\,\text{mA}$

And it plots like this,

![Resistor and voltage source i-v graph]({% link i/thevenin3.svg %}){: .centered :} 

The line is tilted $i$-$v$ like a resistor, with a negative slope because of the way we defined the direction of the $i$ arrow, but it does not pass through the origin like a resistor would.

The voltage source makes the line shift to the right. It crosses the voltage axis at $v = \text V_\text T$. 

#### EE cleverness
{:.no_toc}

It is reasonable to expect the $i$-$v$ curve to be a straight line, since it's made from the sum of two lines. If you know two points you can create the equation of a line. Can we get the circuit to tell us two points? 

Two easy points are where the line crosses the voltage axis and where it crosses the current axis. For this we need some equipment: a voltmeter, an ammeter, and a short length of wire. 

**Where does the $i$-$v$ line cross the voltage axis?**

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
The line crosses the voltage axis when $i = 0$. How might we force $i$ to be $0$?

We could connect nothing across the port to create an open circuit,

![Open circuit on port]({% link i/thevenin4.svg %}){: .centered :} 

With $i = 0$, measure the voltage with a voltmeter (or do it in your head).

$v_{oc} = \text V_{\text T} = 5\,\text V$

$v_{oc}$ stands for "open circuit voltage".

The open circuit voltage is the same as the voltage source, $\text V_\text T$.

The line crosses the voltage axis at $v_{oc} = \text V_{\text T}$. 
{% endcapture %}{% include details.html %} 

**Where does the $i$-$v$ line cross the current axis?**

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
The line crosses the current axis when $v = 0$. How might we force $v$ to be $0$?

We could connect a wire across the port to short it out,

![Short circuit on port]({% link i/thevenin5.svg %}){: .centered :} 

With $v = 0$, measure the current in the shorting wire. Insert an ammeter into the wire (or do it in your head).

$i_{sc} = \dfrac{\text V_{\text T}}{\text R_{\text T}} = \dfrac{5\,\text V}{2000\,\Omega} = 2.5\,\text{mA}$

$i_{sc}$ stands for "short circuit current."

The line crosses the current axis at $i_{sc}$.

**Caution:** DO NOT put a short across a real circuit unless you *already know* it can survive the abuse.  
{% endcapture %}{% include details.html %} 

**Create an $i$-$v$ equation based on the two points.**

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
You can see the plot right away. Just mark the two points and draw a line. The points are $(v_{oc},0)$ and $(0,i_{sc})$.

![i-v plot]({% link i/thevenin6.svg %}){: .centered :} 

Now find the equation of the line. Given two points the equation of the line is,

$(y - y_1) = m\,(x - x_1)\qquad m = \dfrac{(y_1 - y_2)}{(x_1 - x_2)}$</p>
The two points we know are,

$x_1,y_1 = (v_{oc},0)\quad$ and $\quad x_2,y_2 = (0,i_{sc})$

$y - 0 = \dfrac{(0 - i_{sc})}{(v_{oc} - 0)}(x - v_{oc})$

$y = \dfrac{0 - (2.5\,\text{mA})}{5 - 0}(x - 5)$

$y = -\dfrac{2.5\,\text{mA}}{5}(x - 5)$

$y = -\dfrac{2.5\,\text{mA}}{5}\,x + \dfrac{2.5\,\text{mA}}{5}\cdot 5$

$y = -\dfrac{x}{2\,\text k\Omega} + 2.5\,\text{mA}\qquad$ (same as the traditional method)  
{% endcapture %}{% include details.html %} 

What have we learned about the Thévenin form? The Thévenin form plots as a line in $i$-$v$ space. The tilt of the line is controlled by $\text R_\text T$. The line crosses the voltage axis at $\text V_\text T$. You can position the line anywhere you want in $i$-$v$ space by your choice of component values.

The open-circuit/short-circuit technique is pretty handy. We will use it again.

## Norton form

Now let's look at the Norton form,

![Norton circuit: Resistor and current source]({% link i/thevenin7.svg %}){: .centered :}

**Work out a symbolic expression for port current $i$ in terms of** $v,\text R_{\text N},\text I_{\text N}$. 

$i = f(v,\text R_{\text N},\text I_{\text N}) = $ \_\_\_\_\_\_\_\_\_\_\_\_\_


**Then plot your function with these values,** $\text I_{\text N} = 2\,\text{mA}$ and $\text R_{\text N} = 500\,\Omega$.

![Norton circuit: 2 ma and 500 ohms]({% link i/thevenin7a.svg %}){: .centered :}

![Blank i-v graph]({% link i/thevenin_blank_graph.svg %}){: .centered :}

Now that you've had a chance to plot the function, I will derive the Norton $i$-$v$ expression by traditional circuit analysis, and then with EE cleverness like we did above. 

#### Traditional circuit analysis
{:.no_toc}

Write Kirchhoff's Current Law for the top node; add up currents flowing *into* the node,

$+\text I_{\text N} - \dfrac{v}{\text R_{\text N}} - i = 0$

Solve for $i$ in terms of $v,\text R_{\text N}$, and $\text I_{\text N}$,

$i = -\dfrac{v}{\text R_{\text N}} + \text I_{\text N}$

This the equation of a line, which shouldn't be a surprise. The $i$-$v$ graphs for a current source and a resistor are lines, so it makes sense to get a line when we add lines. The y-intercept is $\text I_{\text N}$ and the slope is $-1/\text R_{\text N}$.

Notice the resemblance of this equation to the one we derived for the Thévenin form.  
Hmm, pretty similar. Hold that thought.

Here's the plot with the given values, 

$i = -\dfrac{v}{500\,\Omega} + 2\,\text{mA}$

![First Norton i-v graph]({% link i/thevenin8.svg %}){: .centered :}

#### More EE cleverness
{:.no_toc}

Let's identify two points with the same open-circuit/short-circuit thing we did above. Please give this a try before you peek,

**Find two points where the $i$-$v$ line of this circuit crosses the $v$ axis and $i$ axis.**

![Norton circuit: Resistor and current source]({% link i/thevenin7.svg %}){: .centered :}

Put open and short circuits across the port and measure with your mental multimeter.

$(v_{oc}, 0) = ($ \_\_\_\_\_\_\_\_, $0)$   

$(0, i_{sc}) = (0$, \_\_\_\_\_\_\_\_ $)$

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
The line crosses the $v$ axis when $i = 0$. To force $i = 0$ leave the port unconnected (open circuit) so no current can flow in or out of the port,

![open circuit on port]({% link i/thevenin8c.svg %}){: .centered :}

With the port open, all of $\text I_{\text N}$ is has to flow through $\text R_{\text N}$. The open-circuit voltage is,

$v_{oc} = \text I_{\text N}\,\text R_{\text N}$

$v_{oc} = 2\,\text{mA} \cdot 500 \,\Omega = 1\,\text V$

The $i$-$v$ line crosses the $v$ axis at $1\,\text V$. That's our first point.

The line crosses the $i$ axis when $v = 0$. To force $v = 0$ connect a wire to short across the port.

![short circuit on port]({% link i/thevenin8b.svg %}){: .centered :}

With the wire shorting out the port there is $0$ voltage across the resistor. All of $\text I_{\text N}$ flows through the short and none through the resistor. What is the short-circuit current? By simple inspection,

$i_{sc} = \text I_{\text N} = 2\,\text{mA}$

The $i$-$v$ line crosses the $i$ axis at $2\,\text{mA}$. This is our second point.

Use these two points to construct an equation of the line. It should match what we did with the KCL analysis just above. Here is the plot,

![i-v plot]({% link i/thevenin8a.svg %}){: .centered :}
{% endcapture %}{% include details.html %} 

What have we learned about the Norton form? The Norton form behaves just like the Thévenin form. It plots as a line in $i$-$v$ space. You can position the line anywhere you want by your choice of component values.

## Source transformation challenge 1

Thévenin and Norton forms forms both generate tilted lines on the $i$-$v$ plot.

**1. Make the two circuits produce the same line.**

Here are equations for the Thévenin and Norton forms,

$i = -\dfrac{v}{\text R_\text T} + \dfrac{\text V_\text T}{\text R_\text T}$

$i = -\dfrac{v}{\text R_{\text N}} + \text I_{\text N}$

Find relationships between the key parameters, $\text R_\text T$, $\text R_\text N$, $\text V_\text T$, and $\text I_\text N$ to make the two equations the same.

$\text R_\text N = $  \_\_\_\_\_\_\_\_

$\text I_\text N \,= $ \_\_\_\_\_\_\_\_

$\text V_\text T = $ \_\_\_\_\_\_\_\_

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
Two lines are the same if they have the same slope and the same y-intercept. Look at the two equations and match the things that need to match.

The slopes match if $\text R_\text N = \text R_\text T$. The resistors are the same.

The y-intercepts match if $\text I_\text N = \text V_\text T / \text R_\text T$.

This is the same as saying $\text V_\text T = \text I_\text N\,\text R_\text N$.

If you are given one form you instantly change it into the other with these relationships. Both circuits will have identical $i$-$v$ characteristics.  
{% endcapture %}{% include details.html %} 

**2. Use the component values from the Thévenin example above to create an equivalent Norton circuit.**

$\text V_{\text T} = 5\,\text V$, $\text R_{\text T} = 2\,\text k\Omega$

![Design challenge 1 Thévenin to Norton]({% link i/thevenin11a.svg %}){: .centered :}

$\text I_{\text N} =$ \_\_\_\_\_\_\_\_

$\text R_{\text N} =$ \_\_\_\_\_\_\_\_

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
$\text R_\text N = \text R_\text T = 2000\,\Omega$

$\text I_{\text N} = \dfrac{\text V_{\text T}}{\text R_{\text T}} = \dfrac{5}{2000} = 2.5\,\text{mA}$

![Design challenge 1 Thévenin to Norton]({% link i/thevenin11.svg %}){: .centered :}
{% endcapture %}{% include details.html %} 

**3. Use the component values from the Norton example above to create an equivalent Thévenin circuit.**

$\text I_{\text N} = 2\,\text{mA}$, $\text R_{\text N} = 500\,\Omega$

![Design challenge 1 Norton to Thévenin]({% link i/thevenin12a.svg %}){: .centered :}

$\text V_{\text T} =$ \_\_\_\_\_\_\_\_

$\text R_{\text T} =$ \_\_\_\_\_\_\_\_

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
$\text R_\text T = \text R_\text N = 500\,\Omega$

$\text V_{\text T} = \text I_{\text N} \, \text R_{\text N} = 0.002 \cdot 500 = 1\,\text V$

![Design challenge 1 Norton to Thévenin]({% link i/thevenin12.svg %}){: .centered :}
{% endcapture %}{% include details.html %} 

Notice how the conversion process resembles Ohm's Law.

If you "look into" these circuits from the port you can't tell them apart. (You "look" with a voltmeter or ammeter.) They have identical behavior for any $v$ or any $i$. This means they are equivalent and therefore interchangeable. We will take advantage of this in the next article.

## Source transformation challenge 2

Use this [simulation model](https://spinningnumbers.org/circuit-sandbox/index.html?value=[["v",[88,80,0],{"name":"Vt","value":"dc(0)","_json_":0},["4","0"]],["r",[240,80,4],{"name":"RL1","r":"","_json_":1},["7","6"]],["r",[176,64,1],{"name":"Rt","r":"","_json_":2},["5","4"]],["g",[152,144,0],{"_json_":3},["0"]],["w",[88,128,88,144]],["w",[88,144,152,144]],["w",[88,80,88,64]],["w",[88,64,128,64]],["w",[176,64,200,64]],["w",[152,144,200,144]],["w",[240,128,240,144]],["w",[240,144,224,144]],["w",[240,80,240,64]],["w",[240,64,224,64]],["r",[240,208,4],{"name":"RL2","r":"","_json_":14},["3","2"]],["r",[152,256,2],{"name":"Rn","r":"","_json_":15},["0","1"]],["g",[152,272,0],{"_json_":16},["0"]],["w",[240,256,240,272]],["w",[240,272,224,272]],["w",[240,208,240,192]],["w",[240,192,224,192]],["i",[88,256,6],{"name":"In","value":"dc(0)","_json_":21},["0","1"]],["w",[192,192,152,192]],["w",[152,256,152,272]],["w",[192,272,152,272]],["w",[88,208,88,192]],["w",[152,208,152,192]],["w",[152,192,88,192]],["w",[152,272,88,272]],["w",[88,272,88,256]],["view",-95.5,25.30000000000001,1.5625,"50","10","1G",null,"100","0.01","1000"]]){:target="_blank"} to help you with this design challenge. Double-click on a component to change its value. At the appropriate step, click **DC** in the top menu bar to find the voltage and current.

**1. Design your own Thévenin form. Pick any values for $\text V_\text T$ and $\text R_\text T$.**

![Design challenge 2 Thévenin circuit]({% link i/thevenin13.svg %}){: .centered :}

{:start="2"}
**2. Design the Norton equivalent to your Thévenin circuit,**

![Design challenge 2 Norton circuit]({% link i/thevenin15.svg %}){: .centered :}

{:start="3"}
**3. Determine the open-circuit voltage and short-circuit current of both forms,**

$v_{oc} =$ \_\_\_\_\_\_\_\_\_ $\quad i_{sc} =$ \_\_\_\_\_\_\_\_\_ 

{:start="4"}
**4. Write the $i$-$v$ equation and plot it on an $i$-$v$ graph.** It's the same equation for both forms,

$i = $ \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

![Blank i-v graph]({% link i/thevenin_blank_graph.svg %}){: .centered :} 
(Adjust the scales so your particular graph look nice.) 

{:start="5"}
**5. Connect a load resistor $\text R_\text L$ to both forms.** Use the same resistance for both load resistors.

![Design challenge 2 with load resistor]({% link i/thevenin16.svg %})

{:start="6"}
**6. Compute the voltage and current for both load resistors,**

$v_\text{RLTh} = $ \_\_\_\_\_\_\_\_\_ $\quad i_\text{RLTh} = $ \_\_\_\_\_\_\_\_\_ 

$v_\text{RLN} = $ \_\_\_\_\_\_\_\_\_ $\quad i_\text{RLN} = $ \_\_\_\_\_\_\_\_\_

{:start="7"}
**7. Plot this point on your $i$-$v$ graph.** It's not the same point as $v_{oc}$ or $i_{sc}$, but it should fall somewhere on the $i$-$v$ line.

If you used the simulation model notice the simulator didn't tell you how to do the problem. You had to figure out the Norton equivalent on your own. The simulator did provide some help because you could confirm if your answer was right. Simulators are great tools, but they don't think for you.

## Summary
{:.no_toc}

Thévenin's circuit is a voltage source in series with a resistor.

Norton's circuit is a current source in parallel with a resistor.

Thévenin and Norton forms have identical $i$-$v$ behavior if you set,

$\text R_{\text{Thévenin}} = \text R_{\text{Norton}}$

$\text V_{\text{Thévenin}} = \text I_{\text{Norton}}\, \text R$

When circuits produce the same $i$-$v$ curve from the viewpoint of a selected port, we say they are *equivalent* (from the perspective of the port). 

To derive the equation of the $i$-$v$ line for a complicated circuit we found two points on the line. We left the port open and measured the open circuit voltage, $v_{oc}$. Then we placed a short across the port and measured the short circuit current, $i_{sc}$. From the equation we derive the Thévenin and Norton component values.

**Caution:** Shorting out real electronic equipment to find $i_{sc}$ is a recipe for smoke. Be super careful before you do this.

In the next article we apply [source transformation]({% link _articles/source-transformation-example.md %}) to a problem.

{% capture summary %}What about other circuits with one source and one resistor?{% endcapture %}  
{% capture details %}  
After so much talk about Thévenin and Norton forms, it's an obvious question to ask about the other two possibilities. Consider,

* Voltage source in parallel with a resistor
* Current source in series with a resistor

![Other resistor and source circuits]({% link i/thevenin50.svg %})

Give this a little thought for a second or two. What do the resistors do?

The resistors don't do anything in either circuit.

If you put a resistor in parallel with a voltage source it has no effect on the voltage, and it doesn't influence $i$. All you do is pull some extra current out of the ideal voltage source, a current we can't observe from the port. Who cares if there's a resistor in parallel with the ideal voltage source?

The same goes for the resistor in series with a current source. The source pushes its current through the resistor no matter what the resistor value is. The resistor just forces the ideal current source to create some extra voltage to drive the required current. We can't observe the voltage across the current source from the port.

These two variations don't make sense.  
{% endcapture %}{% include details.html %} 