---
layout: article
title:  "Thévenin's theorem - how to"
author: Willy McAllister
comments: true
---

In the [previous article]({{ site.baseurl }}{% link _articles/thevenin-proof.md %}) we proved Thévenin's theorem and Norton's theorem. Now we learn how to apply them.

**Thévenin's theorem**  
Any network of resistors and sources, when viewed from a single port, can be simplified down to one voltage source in series with one resistor.

**Norton's theorem**  
Any network of resistors and sources, when viewed from a single port, can be simplified down to one current source in parallel with one resistor. 

Written by Willy McAllister.

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

### Where we're headed 
{:.no_toc}

To create a Thévenin or Norton equivalent,
* Pick two nodes to be the port of the circuit you want to transform.
* Remove the external component(s) connected to the port.
* Find any two of these three: $\bold R, v_{oc}, i_{sc}$, whichever two are the easiest,
    - $\bold R$ -- Suppress the internal sources and simplify the resulting resistor network down to a single resistor.
    - $v_{oc}$ -- Restore the internal sources, leave the port open, find the open-circuit voltage.
    - $i_{sc}$ -- Restore the internal sources, short across the port, find the short-circuit current.
* The third variable comes from the other two, 
    - $\text R_\text T = v_{oc}/i_{sc}$
    - $v_{oc} = i_{sc}\,\text R_\text T$
    - $i_{sc} = v_{oc}/\text R_\text T$
* The Thévenin equivalent is $\text R_\text T$ in series with $\text V_\text T$,
    - $\text V_\text T = v_{oc}$
    - $\text R_\text T = \bold R$
* The Norton equivalent is $\text R_\text N$ in parallel with $\text I_\text N$,
    - $\text I_\text N = i_{sc}$
    - $\text R_\text N = \bold R$

----

One of the coolest ideas from linear circuit theory is the concept of an *equivalent circuit*. Say you have two circuits and you "look into" a port on each one. If you observe the same $i$-$v$ behavior, we say the circuits are *equivalent* from the viewpoint of those ports. In electronics, a "viewpoint" is what you can observe with a voltmeter and an ammeter. 

Thévenin's theorem and Norton's theorem go on to teach us: If you have a really complicated linear circuit here's how to construct a very simple equivalent circuit. 

In an earlier article, [Simplifying resistor networks]({{ site.baseurl }}{% link _articles/simplifying-resistor-networks.md %}), we learned how to turn any resistor network into a single resistor. Thévenin's theorem is the next step. It teaches us how to simplify networks of resistors *and* sources. 

This article covers the practical steps to create a Thévenin or Norton equivalent from a given circuit. We proved Thévenin's theorem in the [previous article]({{ site.baseurl }}{% link _articles/thevenin-proof.md %}). The  practical design method and the proof are separate ideas. You often find them mixed together in many texts. 

Thévenin's and Norton's theorems work for *linear* circuits. We cover linear circuits limited to resistors and sources. The theorems extend to circuits with $\text R, \text L,$ and $\text C$ by talking in terms of [impedance]({{ site.baseurl }}{% link _videos/ac-analysis-impedance.md %}), $\text Z$ instead of just $\text R$.

## Using Thévenin's theorem

Thévenin's theorem looks like this in schematic form,

![Thévenin's theorem illustrated]({{ site.baseurl }}{% link i/thevenin22.svg %}){: .centered :}

<p class="caption">On the left is a circuit made of any number of resistors, voltage sources, and current sources. We select two internal nodes and mark them with little circles to define a port we care about. The port is brought out to the edge of the circuit. We create the Thévenin equivalent "from the viewpoint" of this port.</p>

## When is Thévenin's theorem useful?

Consider using Thévenin's theorem when you want to focus on a specific part of a circuit and push the details of the rest into the background. For example, suppose you care mostly about what the circuit does at its output port. Thévenin's theorem allows you to create a really simple equivalent version of the circuit that has the exact same $i$-$v$ behavior you care about.  

Sometimes you can use Thévenin's theorem as an alternative to [Kirchhoff's Current Law]({{ site.baseurl }}{% link _articles/kirchhoffs-current-law.md %}) or [Voltage Law]({{ site.baseurl }}{% link _articles/kirchhoffs-voltage-law.md %}). It is another circuit design tool to have in your toolbox.

## Preview the steps

We use aspects of the [proof]({{ site.baseurl }}{% link _articles/thevenin-proof.md %}#observations) to come up with practical steps to finding an equivalent circuit.

To create a Thévenin equivalent,
* Pick two nodes to be the port of the circuit you want to transform.
* Remove the external component(s) connected to the port.
* Transform what remains to a Thévenin equivalent.

A Thévenin equivalent has two components, a voltage source, $\text V_\text T$, and a resistor $\bold R$. 

* The Thévenin voltage source is the same as $v_{oc}$, the voltage appearing at the port when the port is left open. 

* Alternatively, if you think it will be an easier analysis problem, you can figure out $i_{sc}$, the current appearing at the port when a short is placed across the port. If you have $i_{sc}$ and $\bold R$ you can quickly compute $v_{oc}$.

* For both forms, the resistor (you can call it $\bold R$ or $\text R_\text T$ or $\text R_\text N$) is the simplified equivalent resistance of the resistor network from the original circuit, when all the internal sources are suppressed. The resistor has the same value for both Thévenin and Norton forms.

    To suppress a voltage source, replace it with a short.  
    To suppress a current source, replace it with an open.

In practice, here are the steps,

* Find any two of these three variables: $\bold R, v_{oc}, i_{sc}$, whichever two are the easiest to find.
    - $\bold R$ -- Suppress the internal sources and simplify the resulting resistor network down to a single resistor.
    - $v_{oc}$ -- Restore internals sources, leave the port open, find the open-circuit voltage.
    - $i_{sc}$ -- Restore internal sources, short across the port, find the short-circuit current.
* Derive the third variable, if you need it, from the two you know, 
    - $\text R_\text T = v_{oc}/i_{sc}$
    - $v_{oc} = i_{sc}\,\text R_\text T$
    - $i_{sc} = v_{oc}/\text R_\text T$
* The Thévenin equivalent is $\text R_\text T$ in series with $\text V_\text T$,
    - $\text V_\text T = v_{oc}$
    - $\text R_\text T = \bold R$
* The Norton equivalent is $\text R_\text N$ in parallel with $\text I_\text N$,
    - $\text I_\text N = i_{sc}$
    - $\text R_\text N = \bold R$

## Example 1

Here is our first example. Suppose we are asked to find the output voltage for several different values of the load resistor (the $2\,\text k$ resistor on the right). Rather than solving the whole circuit for each value of the load, we can find the Thévenin equivalent of everything to the left of the port (the two little circles),  

![Example circuit]({{ site.baseurl }}{% link i/thevenin20.svg %}){: .centered :}

### Define the port
{:.no_toc}

First, decide what part of the system you want to reduce to a Thévenin equivalent. Select two nodes you care about and define them as the *port*. Then remove any components you consider to be external to the circuit.

We are interested in what's happening at the $2\,\text k\Omega$ resistor on the far right, so we identify the port by drawing two little port circles. Our goal is to simplify everything to the left of the port by finding its Thévenin equivalent. Here's the circuit we're going to transform, with the $2\,\text k\Omega$ resistor removed, 

![Example Thévenin circuit]({{ site.baseurl }}{% link i/thevenin21.svg %}){: .centered :} 

<details>
<summary>sign convention for ports</summary>
<p>The convention for labeling current and voltage at a port is an extension of the <a href="/a/sign-convention.html">sign convention for passive components</a>. Put the voltage label near the port and pick $+$ and $-$ polarity. Then, <em>by convention</em>, point the current arrow <em>into</em> the port on the $+$ voltage side,</p>
<p><img class="centered" src="/i/thevenin2a.svg" alt="Labeled port"></p>
<p>A lot of times current will end up flowing out of the $+$ port. That means $i$ will have a negative sign. That's perfectly okay. We use this convention because it gives a consistent current arrow direction every time you define a port. We're happy to deal with a few minus signs in return for consistency.</p>
</details>

### Find the Thévenin components
{:.no_toc}

The next task is to identify the Thévenin voltage source and the Thévenin resistor. 

We derive three key variables, $\text R_\text T$, $\text V_\text T$, and $\text I_\text N$. Actually, we just need to find two, because the third can be quickly derived. I'll show you how to get all three from the original circuit. If you want, you can guess which two are the easiest to find and derive the third if you need it. If you can't tell, just dive in and find any of them. 

#### Thévenin resistance
{:.no_toc}

To find the Thévenin resistance, suppress all internal sources and compute a single equivalent $\bold R$. We use this same resistance in both the Thévenin and Norton equivalent circuits, so we can call it $\text R_\text T$ or $\text R_text N$ or just $\bold R$.

Here is the circuit with the two internal sources suppressed,

![Circuit to find RT, sources suppressed]({{ site.baseurl }}{% link i/thevenin30.svg %}){: .centered :}

With all the sources gone, what's left? A resistor network. So let's reduce the network to a single equivalent resistance,

$\bold R = 500 + 1000 \,\|\|\, 1000 = 500 + \dfrac{1000 \cdot 1000}{1000 + 1000}$

$\bold R = 1000\,\Omega$

>The vertical bar symbol $\|\|$ is shorthand for "in parallel with."

#### Thévenin voltage
{:.no_toc}

To find $\text V_\text T$ we have to do some circuit analysis. If it looks like it's going to be difficult, think about solving for $\text I_\text N$ instead. Pick the easiest route.

To find the Thévenin voltage restore the internal sources and leave the port *open*. Then find the open circuit voltage, $v_{oc}$. $v_{oc}$ is the voltage the circuit presents to the world when nothing is connected to its port. The Thévenin voltage is equal to $v_{oc}$.

![Find the Thévenin voltage circuit, port open]({{ site.baseurl }}{% link i/thevenin31.svg %}){: .centered :} 

Have a go at solving this circuit yourself. (It is not that easy.) Hint: When a circuit has multiple sources a good strategy is to solve by superposition. You can find the solution in the [proof article]({{ site.baseurl }}{% link _articles/thevenin-proof.md %}#solve-by-superposition). 

The answer is tucked away here, in case you want to try it yourself before peeking,

{% capture summary %}Find $v_{oc}${% endcapture %}  
{% capture details %} 
The circuit has multiple sources. Any time you see multiple sources, *superposition!* should pop into your head. Let's break the circuit into two sub-circuits, one for each source. Then we work out $v_{oc}$ for each one. The result is the superposition of the two sub-circuits, $v_{oc} = v_{oc1} + v_{oc2}$.

Sub-circuit #1 has the voltage source, with the current source suppressed,

![Sub-circuit #1, current source suppressed]({{ site.baseurl }}{% link i/thevenin36.svg %}){: .centered :}

Use the voltage divider formula to find $v_{oc1}$,

$v_{oc1} = 5\,\text V \,\dfrac{1000}{1000+1000} = 2.5\,\text V$

Sub-circuit #2 has the current source restored and the voltage source suppressed,

![Sub-circuit #2, voltage source suppressed]({{ site.baseurl }}{% link i/thevenin37.svg %}){: .centered :}

The output voltage is the current times the equivalent resistance,

$v_{oc2} = 2\,\text{mA} (500 + 1000 \|\| 1000) = 2\,\text{mA} (500 + 500)$

$v_{oc2} = 2\,\text V$

Now superimpose the two sub-circuits,

$v_{oc} = v_{oc1} + v_{oc2} = 2.5 + 2$

$v_{oc} = 4.5\,\text V$  

If you are not already in love with solving circuits by superposition, try this circuit using the Node Voltage Method. The difference in effort is striking.
{% endcapture %}{% include details.html %}

#### Norton current
{:.no_toc}

The third variable you might want to find is the Norton current, $\text I_\text N$. You have to do a circuit analysis for this, too. It may turn out to be easier than finding $v_{oc}$. Let's see if that's the case.

To find the Norton current restore all the internal sources and place a short circuit across the port. Then find the current in the shorting wire, $i_{sc}$. The Norton current is equal to $i_{sc}$. It is the current the circuit would generate if you forced the output voltage to zero by shorting the port. (Please do not do this to a real circuit. It might not be designed to drive a short.)

![Find the Norton current circuit, output shorted]({{ site.baseurl }}{% link i/thevenin32.svg %}){: .centered :} 

{% capture summary %}Find $i_{sc}${% endcapture %}  
{% capture details %}
This problem has multiple sources (one voltage source, one current source). Whenever I come across multiple sources my first thought is *superposition*. Superposition turns one nasty circuit into two simpler circuits. 

Solve for $i_{sc}$ twice, and add the results, $i_{sc} = i_{sc1} + i_{sc2}$

Sub-circuit #1 includes the voltage source, with the current source suppressed,

![Sub-circuit #1, current source suppressed]({{ site.baseurl }}{% link i/thevenin33.svg %}){: .centered :}

Solve for $i_{sc1}$,

$5\,\text V = i_1 ( 1000 + 1000 \|\| 500)$

$(1\text K \|\| 500) = \dfrac{1000 \cdot 500}{1000 + 500} = 333\,\Omega$

$i_1 = \dfrac{5\,\text V}{1000 + 333} = 3.75\,\text{mA}$

Use the voltage divider formula to find $v_2$,

$v_2 = 5\, \dfrac{333}{1000 + 333} = 5 \cdot 0.250 = 1.25\,\text V$

$i_{sc1}$ is the current flowing in the $500\,\Omega$ resistor,

$i_{sc1} = -\dfrac{v_2}{500} = -\dfrac{1.25}{500}$

$i_{sc1} = -2.5\,\text{mA}$

Sub-circuit #2 has the current source restored and the voltage source suppressed. This one is particularly easy to solve.

![Sub-circuit #2, voltage source suppressed]({{ site.baseurl }}{% link i/thevenin34.svg %}){: .centered :}

The shorting wire across the port means the voltage across the current source *and* the $1\,\text k\Omega$ and $500\,\Omega$ resistors is zero. Therefore, the entire $2\,\text{mA}$ current flows in the shorting wire,

$i_{sc2} = - 2\,\text{mA}$

Superimpose the two components of $i_{sc}$,

$i_{sc} = i_{sc1} + i_{sc2} = -2.5\,\text{mA} - 2\,\text{mA}$

$i_{sc} = 4.5\,\text{mA}$ 

For this example the effort to find $i_{sc}$ compared to $v_{oc}$ was similar, with $v_{oc}$ probably a little easier overall. No harm done, we got to see both. Hooray hurrah for superposition! 
{% endcapture %}{% include details.html %}

#### Assemble the equivalent circuits
{:.no_toc}

Putting it all together, the Thévenin equivalent is $\bold R$ and the open-circuit voltage,

![Thévenin equivalent of example 1]({{ site.baseurl }}{% link i/thevenin27.svg %}){: .centered :}

If we want the Norton equivalent, we know $\bold R$ and the short-circuit current,

![Norton equivalent of example 1]({{ site.baseurl }}{% link i/thevenin35.svg %}){: .centered :}

### Example 1 simulation models

Open this [simulation model](https://spinningnumbers.org/circuit-sandbox/index.html?value=[["g",[512,352,0],{"_json_":0},["0"]],["w",[512,288,496,288]],["w",[456,288,480,288]],["a",[480,288,0],{"color":"magenta","offset":"0","_json_":3},["21","22"]],["w",[512,288,560,288]],["w",[600,288,576,288]],["a",[560,288,0],{"color":"magenta","offset":"0","_json_":6},["22","23"]],["w",[512,296,512,288]],["w",[600,352,512,352]],["w",[456,352,512,352]],["w",[512,344,512,352]],["w",[600,352,600,344]],["w",[456,344,456,352]],["w",[600,288,600,296]],["w",[456,296,456,288]],["r",[600,296,0],{"name":"","r":"2000","_json_":15},["23","0"]],["r",[512,296,0],{"name":"Rn","r":"1k","_json_":16},["22","0"]],["i",[456,344,2],{"name":"","value":"dc(4.5m)","_json_":17},["0","21"]],["w",[280,176,296,176]],["a",[296,176,0],{"color":"magenta","offset":"0","_json_":19},["13","11"]],["w",[184,288,192,288]],["a",[192,288,0],{"color":"magenta","offset":"0","_json_":21},["8","9"]],["w",[184,176,192,176]],["a",[192,176,0],{"color":"magenta","offset":"0","_json_":23},["12","14"]],["w",[600,176,576,176]],["w",[536,176,560,176]],["w",[512,240,600,240]],["w",[600,176,600,184]],["w",[456,184,456,176]],["w",[456,232,456,240]],["w",[600,232,600,240]],["w",[456,240,512,240]],["a",[560,176,0],{"color":"magenta","offset":"0","_json_":32},["20","19"]],["w",[312,136,256,136]],["w",[208,136,256,136]],["g",[512,240,0],{"_json_":35},["0"]],["w",[456,176,488,176]],["w",[376,136,312,136]],["r",[536,176,5],{"name":"Rth","r":"1k","_json_":38},["20","18"]],["r",[600,184,0],{"name":"","r":"2000","_json_":39},["19","0"]],["v",[456,184,4],{"name":"Vth","value":"dc(4.5)","_json_":40},["18","0"]],["w",[312,72,336,72]],["w",[376,72,352,72]],["a",[336,72,0],{"color":"magenta","offset":"0","_json_":43},["3","17"]],["g",[256,136,0],{"_json_":44},["0"]],["w",[376,128,376,136]],["w",[312,128,312,136]],["w",[104,136,208,136]],["w",[208,128,208,136]],["w",[104,128,104,136]],["w",[312,80,312,72]],["w",[376,72,376,80]],["w",[232,72,208,72]],["w",[208,80,208,72]],["w",[104,72,136,72]],["w",[104,80,104,72]],["r",[376,80,0],{"name":"RL","r":"2000","_json_":56},["17","0"]],["r",[208,80,0],{"name":"R2","r":"1000","_json_":57},["1","0"]],["r",[232,72,3],{"name":"R3","r":"500","_json_":58},["1","4"]],["r",[184,72,5],{"name":"R1","r":"1k","_json_":59},["2","16"]],["i",[312,128,2],{"name":"I","value":"dc(2.m)","_json_":60},["0","3"]],["v",[104,80,4],{"name":"V","value":"dc(5)","_json_":61},["16","0"]],["w",[376,240,312,240]],["w",[312,176,336,176]],["w",[376,176,352,176]],["a",[336,176,0],{"color":"magenta","offset":"0","_json_":65},["11","15"]],["g",[256,240,0],{"_json_":66},["0"]],["w",[376,232,376,240]],["w",[312,232,312,240]],["w",[104,240,208,240]],["w",[208,232,208,240]],["w",[104,232,104,240]],["w",[312,184,312,176]],["w",[376,176,376,184]],["w",[232,176,208,176]],["w",[208,184,208,176]],["w",[104,176,136,176]],["w",[104,184,104,176]],["r",[208,184,0],{"name":"","r":"1000","_json_":78},["14","0"]],["r",[232,176,3],{"name":"","r":"500","_json_":79},["14","13"]],["r",[184,176,5],{"name":"","r":"1k","_json_":80},["12","10"]],["i",[312,232,2],{"name":"","value":"dc(2m)","_json_":81},["0","11"]],["v",[104,184,4],{"name":"","value":"dc(5)","_json_":82},["10","0"]],["w",[208,240,256,240]],["w",[312,240,256,240]],["w",[376,352,312,352]],["w",[312,288,336,288]],["w",[376,288,352,288]],["a",[336,288,0],{"color":"magenta","offset":"0","_json_":88},["5","0"]],["g",[256,352,0],{"_json_":89},["0"]],["w",[312,344,312,352]],["w",[104,352,208,352]],["w",[208,344,208,352]],["w",[104,344,104,352]],["w",[312,296,312,288]],["w",[232,288,208,288]],["w",[208,296,208,288]],["w",[104,288,136,288]],["w",[104,296,104,288]],["r",[208,296,0],{"name":"","r":"1000","_json_":99},["9","0"]],["r",[232,288,3],{"name":"","r":"500","_json_":100},["9","6"]],["r",[184,288,5],{"name":"","r":"1k","_json_":101},["8","7"]],["i",[312,344,2],{"name":"","value":"dc(2m)","_json_":102},["0","5"]],["v",[104,296,4],{"name":"","value":"dc(5)","_json_":103},["7","0"]],["w",[208,352,256,352]],["w",[312,352,256,352]],["w",[376,352,376,288]],["a",[288,288,0],{"color":"magenta","offset":"0","_json_":107},["6","5"]],["w",[280,288,288,288]],["w",[312,288,304,288]],["a",[288,72,0],{"color":"magenta","offset":"0","_json_":110},["4","3"]],["w",[280,72,288,72]],["w",[312,72,304,72]],["a",[192,72,0],{"color":"magenta","offset":"0","_json_":113},["2","1"]],["w",[184,72,192,72]],["view",28.5,32.5,1.25,"50","10","1G",null,"100","0.01","1000"]]) of Example 1. There are five circuits shown. The top one is the original Example 1 circuit. The two below that are the open-circuit and short-circuit versions we used to find the components. Use these to check your own circuit analysis work. The two on the right are the Thévenin and Norton equivalents. 

* Click on **DC** to run a DC analysis. 
* Look at the current and voltage for the $2\,\text k\Omega$ load resistor on the right. Compare that to the current and voltage on the two equivalent circuits. Are they the same? 
* Change the load resistor in all three by double-clicking on the resistor symbol. 
* Run **DC** analysis again. 
* The the current and voltage will be different values, but will still match for the original circuit and the two equivalents.

They are always the same because both circuits have the same $i$-$v$ equation. Pretty cool, eh?

* If you want to simulate the superposition solutions, suppress the sources one at a time in the two versions in the lower left and run **DC** again. 

## Example 2

Here's a practical application. This circuit shows a common way to set up a bipolar junction transistor (BJT) as an amplifier. The BJT is the symbol in the center right, with reference designator $\text Q1$. The power supply for the amplifier is provided by the $15\text V$ source. 

![Example 2 circuit]({{ site.baseurl }}{% link i/thevenin40.svg %}){: .centered :}

The $100\,\text k\Omega$ and $50\,\text k\Omega$ resistors set the base voltage of $\text Q1$'s base terminal to an intermediate value between the power supply and ground. Together they are called the *biasing network*. It is often useful to convert the biasing network to its Thévenin equivalent. 

**Find the Thévenin equivalent of the biasing network.** 

The port is identified by the two small circles. The first thing we do is isolate the biasing network by removing the external components,

![Example 2 biasing network]({{ site.baseurl }}{% link i/thevenin41.svg %}){: .centered :}

Now we can find the two Thévenin components, the Thévenin voltage and resistance. To test your understanding, give this a try on your own before peeking at the answer.

{% capture summary %}Thévenin voltage{% endcapture %}  
{% capture details %}  
The Thévenin voltage is to the voltage on the port when we leave it open, $v_{oc}$. The circuit is a voltage divider, so we'll use that formula to find $v_{oc}$,

$\text V_\text T = v_{oc} = 15\,\text V\,\dfrac{50\text k}{100\text k + 50\text k} = 15\,\text V \cdot \dfrac{1}{3}$

$\text V_\text T = 5\,\text V$
{% endcapture %}{% include details.html %} 

{% capture summary %}Thévenin resistance{% endcapture %}  
{% capture details %} 
To get the Thévenin resistance we suppress the voltage source by replacing it with a short circuit. The Thévenin resistance is what's left,

![Example 2 biasing network with voltage source suppressed]({{ site.baseurl }}{% link i/thevenin42.svg %}){: .centered :}

<p class="caption">Circuit for finding $\text R_\text T$. The symbol on the right is an eyeball "looking into" the port.</p>

$\text R_\text T = 50\text k \|\| 100\,\text k = \dfrac{50\text k \cdot 100\text k}{50\text k + 100\text k} = \dfrac{5000\text M}{150\text k}$

$\text R_\text T = 33.3 \,\text k\Omega$
{% endcapture %}{% include details.html %} 

Assemble the two components to get the Thévenin equivalent,

{% capture summary %}Thévenin equivalent{% endcapture %}  
{% capture details %} 
![Example 2 Thévenin equivalent]({{ site.baseurl }}{% link i/thevenin43.svg %}){: .centered :}
{% endcapture %}{% include details.html %} 

And the final step is to embed the Thévenin equivalent of the biasing network back into the amplifier circuit,

{% capture summary %}Thévenin equivalent embedded into amplifier{% endcapture %}  
{% capture details %} 
![Example 2 Thévenin equivalent embedded into the amplifier]({{ site.baseurl }}{% link i/thevenin44.svg %}){: .centered :}
{% endcapture %}{% include details.html %} 

## Summary
{:.no_toc}

**Thévenin's theorem**
"A circuit made of any combination of resistors and sources can be simplified down to a single voltage source in series with a single resistor."

We did the proof using the principle of superposition.

**Norton's theorem**
"A circuit made of any combination of resistors and sources can be simplified down to a single current source in parallel with a single resistor."

Norton and Thévenin forms are interchangeable because of what we learned in an earlier article on [source transformation]({{ site.baseurl }}{% link _articles/source-transformation.md %}).

If you know the Thévenin voltage and resistance, the Norton equivalent is,

$\text R_\text N = \text R_\text T$

$\text I_\text N = \text V_\text T / \text R_\text N$
