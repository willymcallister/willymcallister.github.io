---
layout: article
title:  "Thévenin's theorem - proof"
author: Willy McAllister
comments: true
---

Thévenin's theorem says a complicated network of resistors and sources, when viewed from a port, can be simplified down to one voltage source and one resistor. 

We cover Thévenin's theorem in two steps. In this article we present the proof. In the next article we use Thévenin's theorem to find equivalent circuits.

Consider Thévenin's theorem when you want to focus on a specific part a circuit and hide the rest. For example, suppose you care about what happens at the output port of a circuit. The theorem allows you to model the $i$-$v$ behavior at the output port with a simple Thévenin equivalent. This keeps the exact behavior you care about while hiding the internal complexity. 

Thévenin's theorem is another design tool to put in your toolbox. Use it is an alternative to [Kirchhoff's Current Law]({{ site.baseurl }}{% link _articles/kirchhoffs-current-law.md %}) or [Voltage Law]({{ site.baseurl }}{% link _articles/kirchhoffs-voltage-law.md %}). 

Thévenin's theorem works for all *linear* circuits. We cover circuits composed of resistors and sources. The theorem easily extends to circuits with $\text R, \text L,$ and $\text C$ by talking in terms of [impedance]({{ site.baseurl }}{% link _videos/ac-analysis-impedance.md %}), $\text Z$.

Written by Willy McAllister.

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

### Where we're headed 
{:.no_toc}

**Thévenin's theorem**  
Any combination of resistors and sources can be simplified down to a single voltage source in series with a single resistor.

----

One of the surprising concepts from linear circuit theory is the idea that two circuits can be *equivalent*. That is, two circuits are equivalent if they display the same $i$-$v$ behavior at a port. Thévenin's theorem says if you have a complicated a linear circuit, you can find an equivalent Thévenin equivalent circuit made from one voltage source and one resistance. 

In an earlier article, [simplifying resistor networks]({{ site.baseurl }}{% link _articles/simplifying-resistor-networks.md %}), we learned how to simplify any resistor network down to a single resistor. Thévenin's theorem is the next step. It teaches us how to simplify networks of resistors *and* sources. 

In this article we prove Thévenin's theorem using the principle of [superposition]({{ site.baseurl }}{% link _articles/superposition.md %}). In the next article I will show practical steps to create a Thévenin equivalent from a given circuit. The proof and the practical design steps are separate ideas, often mixed together in many texts. 

Norton's theorem is a companion to Thévenin's, 

**Norton's theorem**  
A circuit with any combination of resistors and sources can be simplified down to a single current source in parallel with a single resistor.

Norton and Thévenin circuit forms are interchangeable based on what we learned in an earlier article on [source transformation]({{ site.baseurl }}{% link _articles/source-transformation.md %}).

## Preparation

Thévenin's theorem says,

A circuit with *any* combination of resistors and voltage or current sources can be simplified down to a single voltage source in series with a single resistor.

In schematic form, Thévenin's theorem looks like,

![Thévenin's theorem illustrated]({{ site.baseurl }}{% link i/thevenin22.svg %}){: .centered :}

<p class="caption">On the left is an arbitrary circuit made of any number of resistors, voltage sources, and current sources. We select any two internal nodes we are interested in and mark them with little circles to define a <em>port</em>, shown at the edge of the circuit. We create the Thévenin equivalent "from the viewpoint" of this port.</p>

In equation form, Thévenin's theorem is,

$\goldC v = f(\blueD i, \text R1, \text R2,\ldots,\, \text V_1, \text V_2,\ldots \text V_N,\, \text I_1, \text I_2,\ldots \text I_{M-1}) = \text V_\text T + \blueD i\,\text R_\text T$

The voltage $\goldC v$ produced by the big schematic at the selected port is a function of the current $\blueD i$ flowing in from the port plus everything inside the box. We need to show the big $f(\blueD i, \text R, \text V, \text I)= \text V_\text T + i\,\text R_\text T$, where $\text V_\text T$ and $\text R_\text T$ are yet to be determined. $\text V_\text T$ is called the *Thévenin voltage* and $\text R_\text T$ is called the *Thévenin resistance*.

<details>
<summary>sign convention for ports</summary>
<p>The convention to label current and voltage at a port is an extension of the <a href="/a/sign-convention.html">sign convention for passive components</a>. Write the voltage label near the port and pick $+$ and $-$ polarity. Then, <em>by convention</em>, point the current arrow <em>into</em> the port on the $+$ voltage side,</p>
<p><img class="centered" src="/i/thevenin2a.svg" alt="Labeled port"></p>
<p>A lot of times current actually flows out of the $+$ port, towards the right. Quite often it means $i$ will have a negative sign. That's fine. We like this convention because it gives a consistent current arrow direction. We're happy to deal with a few minus signs in return for consistency.</p>
</details>

## Proof of Thévenin's theorem for an example circuit

Before we do the general proof let's do this specific example,

![Example circuit]({{ site.baseurl }}{% link i/thevenin20.svg %}){: .centered :}

We are interested in what's happening at the $2\,\text k\Omega$ resistor on the far right, so we identify the port by drawing two little port circles as shown. Our goal is to simplify the rest of the circuit (everything to the left of the port) by finding its Thévenin equivalent. Here's the circuit we're going to transform, with the $2\,\text k\Omega$ resistor removed, 

![Example Thévenin circuit]({{ site.baseurl }}{% link i/thevenin21.svg %}){: .centered :}

To demonstrate Thévenin's theorem we need to show the voltage at the port can be written $\goldC v = \text V_\text T - \blueD i\,\text R_\text T$, where $\text V_\text T$ and $\text R_\text T$ are to be discovered. 

The demonstration is pretty clever. We use the the principle of superposition. The feature that tips us off to think about superposition is the multiple sources. Whenever you see lots of sources, superposition should pop into your head.

<details>
    <summary>linearity and superposition</summary>
<p>The proof that follows relies on your understanding of linearity and the resulting circuit analysis method based on superposition. If you want to learn or refresh on these important theories, please take a break from this proof and visit <a href="/a/linearity.html">linearity</a> and <a href="/a/superposition.html">superposition</a>. Then come back and go through the proof. It will make a lot more sense.</p>
</details>

### Review - how to solve a circuit with superposition

To solve a circuit using superposition, 

* Break the circuit up into multiple sub-circuits. Create one sub-circuit for each independent source.
* To create a sub-circuit keep one source and turn off or *suppress* all the others.  
    - To suppress a *voltage* source, replace it with a *short* circuit.
    - To suppress a *current* source, replace it with an *open* circuit.  

* Analyze each sub-circuit. In our case, find $v$ at the port. 
* The final result is the sum of (the superposition of) the individual results. 

### External current source 

Before diving into the proof, we do a cute trick. We connect something to the port to get a handle on the current coming in from the right. We introduce an external current source connected to the port. This gives us a way to include $i$ in equations. 

![Example circuit with external current source]({{ site.baseurl }}{% link i/thevenin23.svg %}){: .centered :}

<p class="caption">Linear network with an external current source connected to the port.</p>

{% capture summary %}alternatives to a current source{% endcapture %}  
{% capture details %}  
Plugging in a current source is the simplest way to get control of $i$. It's possible to connect other things, like perhaps a resistor. The problem with a resistor it it introduces a fiddly $i$-$v$ dependence that makes the proof harder than it needs to be. In the end it doesn't matter what the external add-on is, as long as we end up with a clean $v = f(i)$.
{% endcapture %}{% include details.html %} 

The external current source contributes something special to the superposition solution. The extra current source means one sub-circuit has *all* its internal sources suppressed, leaving just a resistor network. 

This made-up current source may sound bogus, but please wait and see what happens.

### Solve by superposition

Now we are ready to solve by superposition. We leave one source on and suppress the others, and analyze each sub-circuit. With three sources, we do it three times to get three contributions to $v$. 

**Sub-circuit 1.** Turn on the $5\,\text V$ source, suppress the others. The two current sources become open circuits. Solve for $v_{5\text V}$,

![5V source turned on, others suppressed]({{ site.baseurl }}{% link i/thevenin24.svg %}){: .centered :}

$i = 0$

There is no current in the $500\,\Omega$ resistor. Solve for $v_{5\text V}$ using the voltage divider formula,

$v_{5\text V} = 5\,\dfrac{1000}{1000 + 1000} = 2.5\,\text V$

**Sub-circuit 2.** Turn on the $2\,\text{mA}$ source, suppress the others. The voltage source becomes a short and the external current source is an open. Solve for $v_{2\text{mA}}$,

![2mA source turned on, others suppressed]({{ site.baseurl }}{% link i/thevenin25.svg %}){: .centered :}

$i = 0$

Find a single $\text R_\text{equiv}$ to represent the resistor network, then apply the $2\,\text{mA}$ current,

$\text R_\text{equiv} = 500 + 1000 \,\|\|\, 1000 = 500 + \dfrac{1000 \cdot 1000}{1000 + 1000} = 1000\,\Omega$

>The vertical bar symbol $\|\|$ is shorthand for "in parallel with."

$v_{2\,\text{mA}} = 2\,\text{mA}\cdot \text R_\text{equiv} = 2\,\text{mA}\cdot 1000\Omega = 2\,\text V$

**Sub-circuit 3.** Turn on the external $\text I_\text{ext}$ source, suppress the others. *All* the internal sources are off, so all that's left of the original circuit is a resistor network. Solve for $v_{\text{Iext}}$,

![Iext source turned on, others suppressed]({{ site.baseurl }}{% link i/thevenin26.svg %}){: .centered :}

$i = \text I_\text{ext}$

The equivalent resistor is the same as before, $\text R_\text{equiv} = 1000$. 

Apply the external current,

$v_{\text{Iext}} = i\,\text R_\text{equiv} = \text I_\text{ext} \cdot 1000$

**Superposition.** Superimpose (add) the three contributions,

$v = v_{5\text V} + v_{2\,\text{mA}} + v_{\text{Iext}}$

$v = 2.5 + 2 + 1000\,\text I_\text{ext}$

$v = 4.5 + 1000\,i$

**Equivalent circuit.** Now here's the clever bit: Can we construct a circuit with one voltage source and one resistor that obeys this same $i$-$v$ equation? Yes we can! Here it is,

![Thévenin equivalent of example circuit]({{ site.baseurl }}{% link i/thevenin27.svg %}){: .centered :}

The values for the voltage source and resistor are pulled straight out of the equation. When $i = 0$ the voltage on the port is $4.5\,\text V$. When $i$ is not $0$ the port voltage is $4.5\,\text V$ plus whatever voltage is contributed by the resistor, $1000\,i$.

We call this the *Thévenin equivalent*. $4.5\,\text V$ is the *Thévenin voltage* and $1000\Omega$ is the *Thévenin resistance*. 

$v = \text V_\text T + i \, \text R_\text T$

This model is valid for the particular port we selected at the beginning. The $i$-$v$ behavior is *exactly* the same as the original circuit, for any $i$ and any $v$. Connect any load to the port of the Thévenin equivalent and the same current and voltage appear, the same as the original circuit.

### Simulation models

Open this [simulation model](http://spinningnumbers.org/circuit-sandbox/index.html?value=[["w",[392,192,368,192]],["w",[328,192,352,192]],["w",[304,256,392,256]],["w",[392,192,392,200]],["w",[248,200,248,192]],["w",[248,248,248,256]],["w",[392,248,392,256]],["w",[248,256,304,256]],["a",[352,192,0],{"color":"magenta","offset":"0","_json_":8},["9","8"]],["w",[312,136,256,136]],["w",[208,136,256,136]],["g",[304,256,0],{"_json_":11},["0"]],["w",[248,192,280,192]],["r",[328,192,5],{"name":"Rth","r":"1k","_json_":13},["9","7"]],["r",[392,200,0],{"name":"","r":"2000","_json_":14},["8","0"]],["v",[248,200,4],{"name":"Vth","value":"dc(4.5)","_json_":15},["7","0"]],["a",[352,72,0],{"color":"magenta","offset":"0","_json_":16},["3","6"]],["g",[256,136,0],{"_json_":17},["0"]],["w",[392,128,392,136]],["w",[312,128,312,136]],["w",[104,136,208,136]],["w",[208,128,208,136]],["w",[104,128,104,136]],["w",[312,80,312,72]],["w",[392,72,392,80]],["w",[232,72,208,72]],["w",[208,80,208,72]],["w",[104,72,136,72]],["w",[104,80,104,72]],["r",[392,80,0],{"name":"RL","r":"2000","_json_":29},["6","0"]],["r",[208,80,0],{"name":"R2","r":"1000","_json_":30},["1","0"]],["r",[232,72,3],{"name":"R3","r":"500","_json_":31},["1","4"]],["r",[184,72,5],{"name":"R1","r":"1k","_json_":32},["2","5"]],["i",[312,128,2],{"name":"I","value":"dc(2.m)","_json_":33},["0","3"]],["v",[104,80,4],{"name":"V","value":"dc(5)","_json_":34},["5","0"]],["a",[288,72,0],{"color":"magenta","offset":"0","_json_":35},["4","3"]],["w",[280,72,288,72]],["w",[312,72,304,72]],["a",[192,72,0],{"color":"magenta","offset":"0","_json_":38},["2","1"]],["w",[184,72,192,72]],["w",[392,136,312,136]],["w",[368,72,392,72]],["w",[352,72,312,72]],["view",-11.5,21.30000000000001,1.5625,"50","10","1G",null,"100","0.01","1000"]]) of the example circuit and its Thévenin equivalent. 

* Click on **DC** to run a DC analysis. 
* Look at the current and voltage for the $2\,\text k\Omega$ load resistor on the right. Are they the same? 
* Change the load resistor in both circuits by double-clicking on the resistor symbol. 
* Run DC analysis again. 
* What happens to the current and voltage on that resistor? Are they the same for any resistor value you pick? 

They are always be the same because both circuits have the same $i$-$v$ equation. Pretty cool, eh? That is what is meant by an *equivalent* circuit.

Try out this [simulation model](http://spinningnumbers.org/circuit-sandbox/index.html?value=[["w",[392,192,368,192]],["w",[328,192,352,192]],["w",[304,256,392,256]],["w",[392,192,392,200]],["w",[248,200,248,192]],["w",[248,248,248,256]],["w",[392,248,392,256]],["w",[248,256,304,256]],["a",[352,192,0],{"color":"magenta","offset":"0","_json_":8},["9","1"]],["w",[312,136,256,136]],["w",[208,136,256,136]],["g",[304,256,0],{"_json_":11},["0"]],["w",[248,192,280,192]],["r",[328,192,5],{"name":"Rth","r":"1k","_json_":13},["9","8"]],["v",[248,200,4],{"name":"Vth","value":"dc(4.5)","_json_":14},["8","0"]],["a",[352,72,0],{"color":"magenta","offset":"0","_json_":15},["5","2"]],["g",[256,136,0],{"_json_":16},["0"]],["w",[392,128,392,136]],["w",[312,128,312,136]],["w",[104,136,208,136]],["w",[208,128,208,136]],["w",[104,128,104,136]],["w",[312,80,312,72]],["w",[392,72,392,80]],["w",[232,72,208,72]],["w",[208,80,208,72]],["w",[104,72,136,72]],["w",[104,80,104,72]],["r",[208,80,0],{"name":"R2","r":"1000","_json_":28},["3","0"]],["r",[232,72,3],{"name":"R3","r":"500","_json_":29},["3","6"]],["r",[184,72,5],{"name":"R1","r":"1k","_json_":30},["4","7"]],["i",[312,128,2],{"name":"I","value":"dc(2.m)","_json_":31},["0","5"]],["v",[104,80,4],{"name":"V","value":"dc(5)","_json_":32},["7","0"]],["a",[288,72,0],{"color":"magenta","offset":"0","_json_":33},["6","5"]],["w",[280,72,288,72]],["w",[312,72,304,72]],["a",[192,72,0],{"color":"magenta","offset":"0","_json_":36},["4","3"]],["w",[184,72,192,72]],["w",[392,136,312,136]],["w",[368,72,392,72]],["w",[352,72,312,72]],["i",[392,80,0],{"name":"","value":"dc(1m)","_json_":41},["2","0"]],["i",[392,200,0],{"name":"","value":"dc(1m)","_json_":42},["1","0"]],["view",-11.5,21.30000000000001,1.5625,"50","10","1G",null,"100","0.01","1000"]]) where the external load has been changed to a current source.

* Click on **DC** to run a DC analysis.
* Does the port voltage $v$ of the Thévenin equivalent match the original circuit? (Both currents $i$ come from current sources, so they are forced to match.)
* Change the value of the load current source in both versions. Rerun the **DC** analysis and see if the voltages stay the same. 
* Try negative values for the load current and see what happens. 

This shows the Thévenin equivalent still works when loaded with a current source. 

* For more fun, change the load to a voltage source see what happens. 

## Proof of Thévenin's theorem 

Now that you've seen the proof demonstrated for a particular example, let's prove the theorem in general. For the general form of Thévenin's theorem we allow unlimited resistors and unlimited independent voltage or current sources. (Dependent sources add a small complication we won't cover here. They basically get grouped in with the resistors.)

![Thévenin's theorem illustrated]({{ site.baseurl }}{% link i/thevenin22.svg %}){: .centered :}

Select any two nodes inside the circuit and bring them out to a port. Our goal is to prove the voltage and current can be related like this: $v = \text V_\text T + \bold Ri$, where $\bold R$ stands for some expression composed of resistance values.

Assume a linear network composed of, 
* any number of resistors, 
* $N$ voltage sources: $\text V1 \ldots \text V_N$, 
* $M$ current sources: $\text I1 \ldots \text I_{M-1}$ internal current sources plus an external current source $\text I_M$ connected to the port. 

![Generalized linear resistor circuit]({{ site.baseurl }}{% link i/thevenin29.svg %}){: .centered :}

Now apply the principle of superposition. The original circuit can be decomposed into $N+M$ sub-circuits, one for each source. Each sub-circuit contains a single source and some arbitrary network of resistors. (All the other sources have been suppressed.) We know how the answer comes out for circuits like this.

For the $N$ sub-circuits with a voltage source, the voltage at the port is always a scaled version of the internal voltage source, just like we saw in Sub-circuit 1 of the example circuit. The scale factor is a dimensionless ratio of resistances, $\bold A$, 

$v_n = \bold A_n \text V_n, \quad$ where $n$ ranges from $1 \ldots \text N$

For $M-1$ sub-circuits with an internal current source the voltage at the port is always the Ohm's Law product of the current source $\text I_m$ times some resistance expression $\bold R$. This is what we saw in Sub-circuit 2 of the example circuit.

$v_m = \text I_m \bold R_m, \quad$ where $m$ ranges from $1 \ldots \text M-1$ 

The last current source is the external $\text I_M$, which produces this voltage,

$v_m = \text I_M \bold R_M$ 

where $\bold R_M$ is the equivalent resistance looking into the port when *all* the internal sources are suppressed. This is Sub-circuit 3 of the example circuit.

We've found all the separate contributions to the port voltage. Now we superimpose (add them all up),

$\displaystyle v = \sum_{n=1}^N v_n + \sum_{m = 1}^{M-1} v_m + v_M$

$\displaystyle v = \sum_{n=1}^N A_n \text V_n + \sum_{m=1}^{M-1} \text I_m \bold R_m + \text I_M \bold R_M$

The first two summation terms produce voltage values based on the internals of the circuit, with nothing connected to the port. For every one of these sub-circuits the external current source was suppressed. The combination of these two summation terms gets a special name, $v_{oc}$, which stands for *open-circuit voltage*, 

$v_{oc} = \displaystyle \sum_{n=1}^N A_n \text V_n + \sum_{m=1}^{M-1} \text I_m \bold R_m$

$v_{oc}$ is the voltage that appears at the port when the port is left open.

With this new variable name we rewrite the superposition equation,

$v = v_{oc} + \text I_M \bold R_M$

Wow. The whole arbitrary circuit boils down to this equation. It's exactly what we've been looking for. This voltage-current relationship allows us to construct a Thévenin equivalent circuit,

![Resistor and voltage source schematic]({{ site.baseurl }}{% link i/thevenin2a.svg %}){: .centered :}

|$\text V_\text T = v_{oc}$ |The Thévenin voltage is the voltage on the port of the original circuit when left open.|
|$\text R_\text T = \bold R_M$ |The Thévenin resistance is the equivalent resistance of the original circuit when all internal sources are suppressed (turned off).|
|$\blueD i = \text I_M$ |The current that flows into or out of the port.|
|$\goldC v = \text V_\text T + \blueD i\,\text R_\text T$ | Solving for $v$, the voltage on the port comes from an unknown $i$.|
|$\blue i = \dfrac{\goldC v}{\text R_\text T} - \dfrac{\text V_\text T}{\text R_\text T}\quad$|Solving for $i$, the current at the port comes from an unknown $v$.|

Both the original complex circuit and our little Thévenin equivalent obey the same $\blueD i$ and $\goldC v$ equations. Done! We proved that any circuit composed of resistors, voltage sources, and current sources can be reduced to a single voltage source and a single resistor.

## Norton's theorem

In the article on [Source transformation]({{ site.baseurl }}{% link _articles/source-transformation.md %}) we proved the Thévenin form and the Norton form are equivalent, meaning they have the same $i$-$v$ behavior. We know any Thévenin can be transformed into a Norton, so we don't have to bother with a separate proof of Norton's Theorem. 

![Thévenin and Norton forms]({{ site.baseurl }}{% link i/thevenin0.svg %}){: .centered :}

All we need is a reminder of the transformation.

The resistor is the same in both forms,

$\text R_\text N = \text R_\text T$

and the Norton current source is,

$\text I_\text N = \dfrac{\text V_\text T}{\text R_\text T}$

Look back at the equation for $i$ in terms of $v$ from the table above,

$\blue i = \dfrac{\goldC v}{\text R_\text T} + \dfrac{\text V_\text T}{\text R_\text T}$

Can we find $\text I_\text N$ somewhere in this equation? Suppose you set the port voltage to $v=0$ by shorting the terminals of the port. The resulting current is,

$i_{sc} = \dfrac{\text V_\text T}{\text R_\text T}$

where $i_{sc}$ stands for short circuit current. That's the same as the Norton current source, $\text I_\text N$.

$i_{sc} = \text I_\text N$

So $i_{sc}$ is another name for $\text I_\text N$. 

This means if you go back to the original circuit and put a short circuit across the port, the current that flows in the shorting wire is $i_{sc} = \text I_\text N$. That's what Norton's theorem means.

## Observations

Our real goal is to find the Thévenin or Norton equivalent of a complex circuit. What can the proof teach us about doing this?

* The superposition strategy gave us three types of sub-circuit. Some had a single voltage source, some had a single current source, and one had no sources at all. 

* The first two types both left the port open. Combined, they give us the Thévenin voltage source, $\text V_\text T$, equal to $v_{oc}$, the open-circuit voltage. 

* The third sub-circuit had all the internal sources suppressed, leaving just the original resistor network. We simplified the network to get $\text R_\text T$, the Thévenin resistance. 

* If we want $\text I_\text N$ we can short across the port and measure $i_{sc}$ in the shorting wire.

* If for some reason we know both $\text V_\text T$ and $\text I_\text N$ but not $\text R$, we can find $\text R$ with,  
$\text R = v_{oc}/i_{sc}$.

These observations are the basis for a step-by-step process for creating a Thévenin or Norton equivalent. We'll work out the steps in the next article, [Thévenin - how to]({{ site.baseurl }}{% link _articles/thevenin-howto.md %}).

## Historical references (optional reading)

### Credit the inventors

Thévenin's theorem was independently derived in 1853 by German scientist Hermann von Helmholtz and thirty years later in 1883 by Léon Charles Thévenin, an electrical engineer with France's national phone company, Postes et Télégraphes Telecommunications (PTT). Thévenin's name is attached to the idea. Don't feel bad for Helmholtz. His name is on plenty of other great ideas in engineering and physics.</p>

Norton's theorem was independently derived in 1926 by researcher Hans Ferdinand Mayer of Siemens & Halske and Bell Labs engineer Edward Lawry Norton. They published the same month. The theory can also be called the Mayer-Norton theorem.

The two theories have an interesting history and naming honors. The first publication by Helmholtz didn't become widely known. Thirty years later, Thévenin thought he had invented something new. And, in the United States at least, we give Thévenin and Norton naming credit. It was hard for engineering discoveries to travel widely or rapidly. Now we have the Web, but these folks did not. If you use other names for these theories I would be interested in hearing from you.

Johnson, D.H., ["Origins of the equivalent circuit concept: the voltage-source equivalent"](https://www.ece.rice.edu/~dhj/paper1.pdf) (PDF). Proceedings of the IEEE. 91 (4): 636–640. doi:[10.1109/JPROC.2003.811716](https://doi.org/10.1109%2FJPROC.2003.811716).

Johnson, D.H., ["Origins of the equivalent circuit concept: the current-source equivalent"](https://www.ece.rice.edu/~dhj/paper2.pdf) (PDF). Proceedings of the IEEE. 91 (5): 817–821. doi:[10.1109/JPROC.2003.811795](https://doi.org/10.1109%2FJPROC.2003.811795).

## Summary
{:.no_toc}

**Thévenin's theorem**
"A circuit made of any combination of resistors and sources can be simplified down to a single voltage source in series with a single resistor."

We did the proof using the principle of superposition.

**Norton's theorem**
"A circuit made of any combination of resistors and sources can be simplified down to a single current source in parallel with a single resistor."

This is a direct outcome of the transformation of Thévenin's circuit form to Norton's form.

In the next article we will learn practical methods to find the Thévenin equivalent of a given circuit. You don't have to go through the superposition analysis each time. There are some nice shortcuts.
