---
layout: article
title:  "Thévenin's theorem proof"
author: Willy McAllister
comments: true
---

Thévenin's theorem says a complicated network of resistors and sources, when viewed from a port, can be simplified down to one voltage source and one resistor. 

We cover Thévenin's theorem in two steps. In this article we present the proof. In the [next article]({{ site.baseurl }}{% link _articles/thevenin-howto.md %}) we turn Thévenin's theorem into a practical tool for circuit analysis.

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

**Norton's theorem**  
Any combination of resistors and sources can be simplified down to a single current source in parallel with a single resistor.

----

One of the surprising concepts from linear circuit theory is the idea that two circuits can be *equivalent*. Two circuits are equivalent if they display the same $i$-$v$ behavior *at a selected port*. Thévenin's theorem says: A complicated linear circuit can be replaced with an equivalent Thévenin circuit made from one voltage source in series with one resistor. 

In an earlier article, [simplifying resistor networks]({{ site.baseurl }}{% link _articles/simplify-resistor-networks.md %}), we learned how to turn any resistor network into a single resistor. That's an example of equivalence. Thévenin's theorem is the next step. It shows us how to simplify a network of resistors *and* sources. If you have a complicated circuit the theorem shows you how to construct a simple equivalent circuit. 

In this article we prove Thévenin's theorem using the principle of [superposition]({{ site.baseurl }}{% link _articles/superposition.md %}). The [following article]({{ site.baseurl }}{% link _articles/thevenin-howto.md %}) shows practical steps to create a Thévenin equivalent of a circuit. The proof and the practical design steps are separate ideas, often mixed together in many texts. 

In schematic form, Thévenin's theorem looks like this,

![Thévenin's theorem illustrated]({{ site.baseurl }}{% link i/thevenin22.svg %}){: .centered :}

The top circuit is made of any number of resistors, voltage sources, and current sources. We select any two internal nodes we are interested in and mark them with little circles to define a *port*, shown at the edge of the circuit. We create the Thévenin equivalent "from the viewpoint" of this port.
{: .caption :}

In equation form, Thévenin's theorem is,

$\goldC v = f(\blueD i, \text R1, \text R2,\ldots,\, \text V_1\ldots \text V_N,\, \text I_1\ldots \text I_{M-1}) = \text V_\text T - \blueD i\,\text R_\text T$ 

The voltage $\goldC v$ produced by the complicated schematic at the selected port is a function of the current $\blueD i$ flowing out of the port and everything inside the box. We need to show the big $f(\blueD i, \text R, \text V, \text I)$ is equal to $\text V_\text T - i\,\text R_\text T$, where $\text V_\text T$ and $\text R_\text T$ are yet to be determined. $\text V_\text T$ is the *Thévenin voltage* and $\text R_\text T$ is the *Thévenin resistance*.

## Proof of Thévenin's theorem for an example

Before we do the general proof let's do this specific example,

![Example circuit]({{ site.baseurl }}{% link i/thevenin20.svg %}){: .centered :}

We are interested in what's happening at the $2\,\text k\Omega$ resistor on the far right, so we identify the port by drawing the two little port circles. Our goal is to simplify the rest of the circuit (everything to the left of the port) by finding its Thévenin equivalent. Here's the circuit we're going to transform. The $2\,\text k\Omega$ resistor has been removed, 

![Example Thévenin circuit]({{ site.baseurl }}{% link i/thevenin21.svg %}){: .centered :}

To demonstrate Thévenin's theorem we need to show the voltage at the port can be written in the form $\goldC v = \text V_\text T - \blueD i\,\text R_\text T$, where $\text V_\text T$ and $\text R_\text T$ are to be discovered. 

![Resistor and voltage source schematic]({{ site.baseurl }}{% link i/thevenin2a.svg %}){: .centered :}

The demonstration is pretty clever. We use the the principle of superposition. (Whenever you see a circuit with multiple sources, *superposition!* should pop into your head.)

{% capture summary %}linearity and superposition{% endcapture %}  
{% capture details %}  
This proof relies on your understanding of linearity and the resulting circuit analysis method called superposition. If you want to refresh on these important ideas, please take a break from this proof and visit <a href="/a/linearity.html">linearity</a> and <a href="/a/superposition.html">superposition</a>. Then come back and finish up here.  
{% endcapture %}{% include details.html %} 

### Review - solve a circuit with superposition

To solve a circuit using superposition, 

* Break the circuit up into multiple sub-circuits. Create one sub-circuit for each independent source.
* To create a sub-circuit keep one source turned on and turn off or *suppress* all the others.  
    - To suppress a *voltage* source, replace it with a *short* circuit.
    - To suppress a *current* source, replace it with an *open* circuit.  

* Analyze each sub-circuit. In our case, find $v$ in terms of $i$ at the port. 
* The final result is the sum of (the superposition of) the individual results. 

### External current source 

Before diving into the proof, we do a clever trick. We connect something to the port to get a handle on the current coming from the port. We introduce an external current source connected to the port, $i = \text I_{\text{ext}}$.

![Example circuit with external current source]({{ site.baseurl }}{% link i/thevenin23.svg %}){: .centered :}

Linear network with an external current source connected to the port.
{: .caption :}

The external current source contributes something special to the superposition solution---one sub-circuit will have *all* internal sources suppressed, leaving just a resistor network. 

This made-up current source may sound bogus, but wait and see what happens.

{% capture summary %}alternatives to a current source{% endcapture %}  
{% capture details %}  
Plugging in a current source is the simplest way to get control of $i$. It's possible to connect other things, like perhaps a resistor. The problem with a resistor is it introduces a fiddly $i$-$v$ dependence. This makes the proof harder than it needs to be. In the end it doesn't matter what the external add-on is, as long as we end up with a clean $v = f(i)$.
{% endcapture %}{% include details.html %} 

### Solve by superposition

The first step in a superposition solution is to draw the sub-circuits, one for each source. Each sub-circuit keeps one source on and suppresses the others. Then we analyze each sub-circuit. Finally we add up (superimpose) the individual contributions to get the overall answer. With three sources we build three sub-circuits to get three contributions to $v$. 

**Sub-circuit 1.** Turn on the $5\,\text V$ source, suppress the others. The two current sources become open circuits. Solve for $v_{5\text V}$,

![5V source turned on, others suppressed]({{ site.baseurl }}{% link i/thevenin24.svg %}){: .centered :}

$i = 0$. There is no current in the $500\,\Omega$ resistor. 

Solve for $v_{5\text V}$ using the voltage divider formula,

$v_{5\text V} = 5\,\dfrac{1000}{1000 + 1000} = 2.5\,\text V$

**Sub-circuit 2.** Turn on the $2\,\text{mA}$ source, suppress the others. The voltage source becomes a short and the external current source is an open. Solve for $v_{2\text{mA}}$,

![2mA source turned on, others suppressed]({{ site.baseurl }}{% link i/thevenin25.svg %}){: .centered :}

$i = 0$.

Find a single $\text R_\text{equiv}$ to represent the resistor network, then apply the $2\,\text{mA}$ current,  
(The vertical bar symbol $\parallel$ is shorthand for "in parallel with.")

$\text R_\text{equiv} = 500 + 1000 \parallel 1000 = 500 + \dfrac{1000 \cdot 1000}{1000 + 1000}$

$\text R_\text{equiv} = 1000\,\Omega$

$v_{2\,\text{mA}} = 2\,\text{mA}\cdot \text R_\text{equiv} = 2\,\text{mA}\cdot 1000\Omega = 2\,\text V$

**Sub-circuit 3.** Turn on the external $\text I_\text{ext}$ source, suppress the others. *All* the internal sources are off, leaving only the resistor network from the original circuit. Solve for $v_{\text{Iext}}$,

![Iext source turned on, others suppressed]({{ site.baseurl }}{% link i/thevenin26.svg %}){: .centered :}

$i = \text I_\text{ext}$

The equivalent resistor is the same as we worked out above, $\text R_\text{equiv} = 1000\,\Omega$. 

The circuit now looks like this,

![Iext source turned on, with equivalent resistor]({{ site.baseurl }}{% link i/thevenin26a.svg %}){: .centered :}

and the voltage at the port is,

$v_{\text{Iext}} = -i\,\text R_\text{equiv} = -\text I_\text{ext} \cdot 1000\,\Omega$

The minus sign shows up because sub-circuit 3 happens to violate the sign convention for passive components. The current flows *out* of the resistor terminal with the positive voltage polarity. It's not an error, we just have to be careful to get the sign right.

**Superposition.** Superimpose (add) the three contributions,

$v = v_{5\text V} + v_{2\,\text{mA}} + v_{\text{Iext}}$

$v = 2.5 + 2 - 1000\,\text I_\text{ext}$

$v = 4.5 - 1000\,i$

This tells you what the voltage will be at the port for any current $i$ flowing out of the port.

**Equivalent circuit.** Can we construct a circuit with one voltage source and one resistor that obeys this same $i$-$v$ equation? Yes we can! Here it is,

![Thévenin equivalent of example circuit]({{ site.baseurl }}{% link i/thevenin27.svg %}){: .centered :}

$v = 4.5 - 1000\,i$

The values for the voltage source and resistor are pulled straight out of the equation. When $i = 0$ there is no voltage drop across the resistor and the voltage on the port is $4.5\,\text V$. When $i$ is not $0$ the port voltage is $4.5\,\text V$ minus whatever voltage drop appears across the resistor, $-1000\,i$.

This circuit is the *Thévenin equivalent* of the circuit we started with. $4.5\,\text V$ is the *Thévenin voltage*. $1000\,\Omega$ is the *Thévenin resistance*. 

This model is valid for the particular port we selected. The $i$-$v$ behavior is *exactly* the same as the original circuit, for any $i$ and any $v$. Connect any load to the port of the Thévenin equivalent and the same current and voltage appear, just like the original circuit.

### Simulation models

Open this [simulation model](https://spinningnumbers.org/circuit-sandbox/index.html?value=%5B%5B%22w%22%2C%5B352%2C72%2C312%2C72%5D%5D%2C%5B%22w%22%2C%5B368%2C72%2C392%2C72%5D%5D%2C%5B%22w%22%2C%5B392%2C136%2C312%2C136%5D%5D%2C%5B%22w%22%2C%5B184%2C72%2C192%2C72%5D%5D%2C%5B%22a%22%2C%5B192%2C72%2C0%5D%2C%7B%22color%22%3A%22magenta%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A4%7D%2C%5B%229%22%2C%226%22%5D%5D%2C%5B%22w%22%2C%5B312%2C72%2C304%2C72%5D%5D%2C%5B%22w%22%2C%5B280%2C72%2C288%2C72%5D%5D%2C%5B%22a%22%2C%5B288%2C72%2C0%5D%2C%7B%22color%22%3A%22magenta%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A7%7D%2C%5B%227%22%2C%225%22%5D%5D%2C%5B%22v%22%2C%5B104%2C80%2C4%5D%2C%7B%22name%22%3A%22V%22%2C%22value%22%3A%22dc(5)%22%2C%22_json_%22%3A8%7D%2C%5B%228%22%2C%220%22%5D%5D%2C%5B%22i%22%2C%5B312%2C128%2C2%5D%2C%7B%22name%22%3A%22I%22%2C%22value%22%3A%22dc(2.m)%22%2C%22_json_%22%3A9%7D%2C%5B%220%22%2C%225%22%5D%5D%2C%5B%22r%22%2C%5B184%2C72%2C5%5D%2C%7B%22name%22%3A%22R1%22%2C%22r%22%3A%221k%22%2C%22_json_%22%3A10%7D%2C%5B%229%22%2C%228%22%5D%5D%2C%5B%22r%22%2C%5B232%2C72%2C3%5D%2C%7B%22name%22%3A%22R3%22%2C%22r%22%3A%22500%22%2C%22_json_%22%3A11%7D%2C%5B%226%22%2C%227%22%5D%5D%2C%5B%22r%22%2C%5B208%2C80%2C0%5D%2C%7B%22name%22%3A%22R2%22%2C%22r%22%3A%221000%22%2C%22_json_%22%3A12%7D%2C%5B%226%22%2C%220%22%5D%5D%2C%5B%22r%22%2C%5B392%2C80%2C0%5D%2C%7B%22name%22%3A%22RL%22%2C%22r%22%3A%222000%22%2C%22_json_%22%3A13%7D%2C%5B%224%22%2C%220%22%5D%5D%2C%5B%22w%22%2C%5B104%2C80%2C104%2C72%5D%5D%2C%5B%22w%22%2C%5B104%2C72%2C136%2C72%5D%5D%2C%5B%22w%22%2C%5B208%2C80%2C208%2C72%5D%5D%2C%5B%22w%22%2C%5B232%2C72%2C208%2C72%5D%5D%2C%5B%22w%22%2C%5B392%2C72%2C392%2C80%5D%5D%2C%5B%22w%22%2C%5B312%2C80%2C312%2C72%5D%5D%2C%5B%22w%22%2C%5B104%2C128%2C104%2C136%5D%5D%2C%5B%22w%22%2C%5B208%2C128%2C208%2C136%5D%5D%2C%5B%22w%22%2C%5B104%2C136%2C208%2C136%5D%5D%2C%5B%22w%22%2C%5B312%2C128%2C312%2C136%5D%5D%2C%5B%22w%22%2C%5B392%2C128%2C392%2C136%5D%5D%2C%5B%22g%22%2C%5B256%2C136%2C0%5D%2C%7B%22_json_%22%3A25%7D%2C%5B%220%22%5D%5D%2C%5B%22a%22%2C%5B352%2C72%2C0%5D%2C%7B%22color%22%3A%22magenta%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A26%7D%2C%5B%225%22%2C%224%22%5D%5D%2C%5B%22v%22%2C%5B248%2C200%2C4%5D%2C%7B%22name%22%3A%22Vth%22%2C%22value%22%3A%22dc(4.5)%22%2C%22_json_%22%3A27%7D%2C%5B%223%22%2C%220%22%5D%5D%2C%5B%22r%22%2C%5B392%2C200%2C0%5D%2C%7B%22name%22%3A%22RLth%22%2C%22r%22%3A%222000%22%2C%22_json_%22%3A28%7D%2C%5B%221%22%2C%220%22%5D%5D%2C%5B%22r%22%2C%5B328%2C192%2C5%5D%2C%7B%22name%22%3A%22Rth%22%2C%22r%22%3A%221k%22%2C%22_json_%22%3A29%7D%2C%5B%222%22%2C%223%22%5D%5D%2C%5B%22w%22%2C%5B248%2C192%2C280%2C192%5D%5D%2C%5B%22g%22%2C%5B304%2C256%2C0%5D%2C%7B%22_json_%22%3A31%7D%2C%5B%220%22%5D%5D%2C%5B%22w%22%2C%5B208%2C136%2C256%2C136%5D%5D%2C%5B%22w%22%2C%5B312%2C136%2C256%2C136%5D%5D%2C%5B%22a%22%2C%5B352%2C192%2C0%5D%2C%7B%22color%22%3A%22magenta%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A34%7D%2C%5B%222%22%2C%221%22%5D%5D%2C%5B%22w%22%2C%5B248%2C256%2C304%2C256%5D%5D%2C%5B%22w%22%2C%5B392%2C248%2C392%2C256%5D%5D%2C%5B%22w%22%2C%5B248%2C248%2C248%2C256%5D%5D%2C%5B%22w%22%2C%5B248%2C200%2C248%2C192%5D%5D%2C%5B%22w%22%2C%5B392%2C192%2C392%2C200%5D%5D%2C%5B%22w%22%2C%5B304%2C256%2C392%2C256%5D%5D%2C%5B%22w%22%2C%5B328%2C192%2C352%2C192%5D%5D%2C%5B%22w%22%2C%5B392%2C192%2C368%2C192%5D%5D%2C%5B%22view%22%2C-11.5%2C21.30000000000001%2C1.5625%2C%2250%22%2C%2210%22%2C%221G%22%2Cnull%2C%22100%22%2C%220.01%22%2C%221000%22%5D%5D){:target="_blank"}. You see the original circuit and its Thévenin equivalent. 

* Click on **DC** to run a DC analysis. 
* Look at the current and voltage for the $2\,\text k\Omega$ load resistor on the right. Are they the same? 
* Change the load resistor in both circuits by double-clicking on the resistor symbols. Change RL and RLth to anything, but make them the same value. 
* Run DC analysis again. 
* What happens to the current and voltage on the load resistor? 
* Are $i$ and $v$ the same for any load resistor value you pick? 

They are always the same because both circuits have the same $i$-$v$ equation. Pretty cool, eh? This is what it means to be an *equivalent* circuit.

Try out this [simulation model](https://spinningnumbers.org/circuit-sandbox/index.html?value=[["w",[392,192,368,192]],["w",[328,192,352,192]],["w",[304,256,392,256]],["w",[392,192,392,200]],["w",[248,200,248,192]],["w",[248,248,248,256]],["w",[392,248,392,256]],["w",[248,256,304,256]],["a",[352,192,0],{"color":"magenta","offset":"0","_json_":8},["9","1"]],["w",[312,136,256,136]],["w",[208,136,256,136]],["g",[304,256,0],{"_json_":11},["0"]],["w",[248,192,280,192]],["r",[328,192,5],{"name":"Rth","r":"1k","_json_":13},["9","8"]],["v",[248,200,4],{"name":"Vth","value":"dc(4.5)","_json_":14},["8","0"]],["a",[352,72,0],{"color":"magenta","offset":"0","_json_":15},["5","2"]],["g",[256,136,0],{"_json_":16},["0"]],["w",[392,128,392,136]],["w",[312,128,312,136]],["w",[104,136,208,136]],["w",[208,128,208,136]],["w",[104,128,104,136]],["w",[312,80,312,72]],["w",[392,72,392,80]],["w",[232,72,208,72]],["w",[208,80,208,72]],["w",[104,72,136,72]],["w",[104,80,104,72]],["r",[208,80,0],{"name":"R2","r":"1000","_json_":28},["3","0"]],["r",[232,72,3],{"name":"R3","r":"500","_json_":29},["3","6"]],["r",[184,72,5],{"name":"R1","r":"1k","_json_":30},["4","7"]],["i",[312,128,2],{"name":"I","value":"dc(2.m)","_json_":31},["0","5"]],["v",[104,80,4],{"name":"V","value":"dc(5)","_json_":32},["7","0"]],["a",[288,72,0],{"color":"magenta","offset":"0","_json_":33},["6","5"]],["w",[280,72,288,72]],["w",[312,72,304,72]],["a",[192,72,0],{"color":"magenta","offset":"0","_json_":36},["4","3"]],["w",[184,72,192,72]],["w",[392,136,312,136]],["w",[368,72,392,72]],["w",[352,72,312,72]],["i",[392,80,0],{"name":"","value":"dc(1m)","_json_":41},["2","0"]],["i",[392,200,0],{"name":"","value":"dc(1m)","_json_":42},["1","0"]],["view",-11.5,21.30000000000001,1.5625,"50","10","1G",null,"100","0.01","1000"]]){:target="_blank"} where the external load has been changed to a current source.

* Click on **DC** to run a DC analysis.
* Does the port voltage $v$ of the Thévenin equivalent match the original circuit?
* Change the value of the load current source in both versions. Rerun the **DC** analysis and see if the voltages come out the same. 
* Try negative values for the load current and see what happens. 

The Thévenin equivalent still works when loaded with a current source. 

* Change the load to a voltage source see what happens. 

## Proof of Thévenin's theorem

{% capture summary %}acknowledgment{% endcapture %}  
{% capture details %}  
This proof is inspired by a question I found on [Physics StackExchange](https://physics.stackexchange.com/questions/110498/proof-of-thevenin-and-norton-theorem). One of the answer's paraphrased a proof from a text by Kendall Su  "Fundamentals of Circuits, Electronics, and Signal Analysis", Appendix A.1, page 568). 
{% endcapture %}{% include details.html %} 

Now you've seen the proof for a particular example, let's prove Thévenin's theorem in general. We allow unlimited resistors and unlimited independent voltage or current sources. (Dependent sources add a small complication we won't cover here. Dependent sources basically get grouped in with the resistors.)

![Thévenin's theorem illustrated]({{ site.baseurl }}{% link i/thevenin22.svg %}){: .centered :}

Select any two nodes inside the circuit and bring them out to a port. Our goal is to prove the voltage and current at the port can be written like this: $v = \text V_\text T - \bold Ri$, where $\bold R$ stands for some expression composed of resistance values.

Assume a linear network composed of, 
* any number of resistors 
* $M$ voltage sources: $\text V_1 \ldots \text V_M$ 
* $N$ current sources: $\text I_1 \ldots \text I_{N-1}$ internal current sources 
* one extra external current source $\text I_N$ connected to the port 

![Generalized linear circuit with an external current source connected to the port]({{ site.baseurl }}{% link i/thevenin29.svg %}){: height="300px" :}{: .centered :}

We do the proof based on the principle of superposition. The original circuit can be decomposed into $M+N$ sub-circuits, one sub-circuit for each source. Each sub-circuit contains one source and an arbitrary network of resistors. All the other sources are suppressed. 

We know how the answer comes out for circuits like this.

For the $M$ sub-circuits with an internal voltage source, the voltage at the port is always a scaled version of the voltage source, just like we saw up above in sub-circuit 1 of the example circuit. The scale factor is a dimensionless ratio of resistances, $\bold A$, 

$v_m = \bold A_m \text V_m, \quad$ where $m = 1 \ldots \text M$

For the $N-1$ sub-circuits with an internal current source the voltage at the port is always the Ohm's Law product of the current source $\text I_n$ times some resistance expression $\bold R$. This is what we saw in sub-circuit 2 of the example circuit.

$v_n = \text I_n \bold R_n, \quad$ where $n = 1 \ldots \text N-1$ 

The last sub-circuit has the external current source, $\text I_N$, with a network of resistors inside the circuit. 

![External current source turned on, with equivalent internal resistor]({{ site.baseurl }}{% link i/thevenin26b.svg %}){: .centered :}

The voltage at the port is,

$v_N = -\text I_N \bold R_N$ 

where $\bold R_N$ is the equivalent resistance looking into the port when *all* the internal sources are suppressed. This is sub-circuit 3 of the example circuit.

We have all the separate contributions to the port voltage. Now we superimpose (add up) all the contributions,

<p>
$\begin{aligned}
\displaystyle v &= \sum_{m=1}^M v_m &&+ \sum_{n = 1}^{N-1} v_n &&+ v_N \\
\displaystyle v &= \sum_{m=1}^M \bold A_m \text V_m &&+ \sum_{n=1}^{N-1} \text I_n \bold R_n &&- \text I_N \bold R_N
\end{aligned}$
</p>

The first two summation terms are voltage values based on the internals of the circuit, with nothing connected to the port. For every one of these sub-circuits the external current source was suppressed by making it an open circuit. We combine these two terms and give them a special name, $v_{oc}$, the *open-circuit voltage*, 

$v_{oc} = \displaystyle \sum_{m=1}^M A_m \text V_m + \sum_{n=1}^{N-1} \text I_n \bold R_n$

$v_{oc}$ appears at the port when the port is left open.

With this new variable name we rewrite the superposition equation,

$v = v_{oc} - \text I_N \bold R_N$

Wow. The whole arbitrary circuit boils down to this equation, and it's exactly what we want. 

This voltage-current relationship allows us to construct this Thévenin equivalent circuit,

![Resistor and voltage source schematic]({{ site.baseurl }}{% link i/thevenin2a.svg %}){: .centered :}

|$\text V_\text T = v_{oc}$ |The Thévenin voltage source is the voltage on the port of the original circuit when the port is left open and all the internal sources are turned on.|
|$\text R_\text T = \bold R_N$ |The Thévenin resistance is the equivalent resistance of the original circuit when all internal sources are suppressed.|
|$\nobreak{\goldC v = \text V_\text T - \blueD i\,\text R_\text T}$ | Solve for $v$ to find the voltage on the port from an unknown $i$.|
|$\nobreak{\blue i = -\dfrac{\goldC v - \text V_\text T}{\text R_\text T}}\quad$|Solve for $i$ to find the current at the port from an unknown $v$.|

Both the original complex circuit and our little Thévenin equivalent obey the same $\blueD i$ and $\goldC v$ equations. Done! We proved any circuit composed of resistors, voltage sources, and current sources can be reduced to a single voltage source and a single resistor.

## Norton's theorem

Norton's theorem is a companion to Thévenin's, 

**Norton's theorem**  
A circuit with any combination of resistors and sources can be replaced by a single current source in parallel with a single resistor. In schematic form, Norton's theorem looks like this,

![Norton's theorem illustrated]({{ site.baseurl }}{% link i/thevenin22n.svg %}){: .centered :}

On the left is an arbitrary circuit made of any number of resistors, voltage sources, and current sources. We select any two internal nodes we are interested in and define a port, brought out to the edge of the circuit. We create the Norton equivalent "from the viewpoint" of this port.
{: .caption :}

Norton and Thévenin circuit forms are interchangeable based on what we learned in the article on [source transformation]({{ site.baseurl }}{% link _articles/source-transformation.md %}). We proved the Thévenin and Norton forms are equivalent, meaning they have the same $i$-$v$ behavior. We know any Thévenin form can be transformed to or from a corresponding Norton form. That means we don't need a separate proof of Norton's Theorem. All we need is to remind ourselves how to do source transformation, 

### Source transformation

The resistor is the same in both forms,

$\text R_\text N = \text R_\text T$

The Norton current source is derived from the Thévenin voltage and resistor,

$\text I_\text N = \dfrac{\text V_\text T}{\text R_\text T}$

![Thévenin and Norton forms]({{ site.baseurl }}{% link i/thevenin0.svg %}){: .centered :}

(To go in the other direction, set $\text V_\text T = \text I_\text N \,\text R_\text N$ and $\text R_\text T = \text R_\text N$.)

### Find the Norton equivalent

To find the Norton equivalent of a complicated circuit we have to determine $\text R_\text N$ and $\text I_\text N$.

The Norton resistor has the same value as the Thévenin resistor. We find it the same way: Calculate the resistance looking into the port when all the internal sources are suppressed.

There are two ways to find the Norton current. 

If you already know the Thévenin voltage then,

$\text I_\text N = \dfrac{\text V_\text T}{\text R_\text T}$

If you don't know $\text V_\text T$ then you use the equation for $\blueD i$ in terms of $\goldC v$ from the table above (the last row). This is the $i$-$v$ equation of the complicated circuit at the chosen port *and* the Thévenin equivalent *and* the Norton equivalent,

$\blue i = -\dfrac{\goldC v - \text V_\text T}{\text R_\text T}$

$\blue i = -\dfrac{\goldC v}{\text R_\text T} + \dfrac{\text V_\text T}{\text R_\text T}$

Do you see $\text I_\text N$ somewhere in this equation? Yes,

$\blue i = -\dfrac{\goldC v}{\text R_\text T} + \text I_\text N$

If you could somehow force the port voltage to be $\goldC v$ to be $0$ then $\blueD i$ becomes the Norton current, $\text I_\text N$. Do this by placing a short across the port, 

![Short placed across the port of a Thévenin form]({{ site.baseurl }}{% link i/thevenin22n1.svg %}){: height="300px" :}{: .centered :}

$i_{sc}$ stands for short circuit current. It's another name for the Norton current, $\text I_\text N$.
{: .caption :}

Here's what the same short looks like applied to the Thévenin and Norton forms,

![Thévenin and Norton forms with a short across the port]({{ site.baseurl }}{% link i/thevenin0n.svg %}){: .centered :}

To find the Norton current directly from the complicated circuit place a short across the port and measure (or analyze with pencil and paper) the current in the short, $i_{sc}$. All the internal sources are turned on when you do this. Then set $\text I_\text N = i_{sc}$. 

## Review

The proof demonstrates that Thévenin's theorem is true and it also guides us to a practical way to find a Thévenin or Norton equivalent.

* The superposition strategy gave us three types of sub-circuit. Some had one voltage source, some had one current source, and one sub-circuit had no internal sources. 

* We merged the first and second sub-circuit families and found the open-circuit voltage, $v_{oc}$. The Thévenin voltage $\text V_\text T$ is equal to $v_{oc}$.

* The third sub-circuit, the one with all internal sources suppressed, left us with just the original resistor network. When we simplified the resistor network it gave us the Thévenin resistance, $\text R_\text T$. 

* To find $\text I_\text N$ we can either compute $\text V_\text T/\text R_\text T$, or place a short across the port and measure $i_{sc} = \text I_\text N$ in the shorting wire.

The various pieces of the proof become the basis for a step-by-step process to find a Thévenin or Norton equivalent of a complicated circuit. We cover that in the next article, [Thévenin - how to]({{ site.baseurl }}{% link _articles/thevenin-howto.md %}).

## Historical background (optional)

The two theorems have an interesting history and naming honors. 

Thévenin's theorem was derived in 1853 by German scientist Hermann von Helmholtz and independently thirty years later---in 1883---by Léon Charles Thévenin, an electrical engineer with the national phone company of France, Postes et Télégraphes Telecommunications (PTT). The first publication by Helmholtz did not become widely known. Thirty years later, Thévenin thought he had invented something new. In the United States, we give Thévenin name credit. Don't feel sad for Helmholtz though. His name is on plenty of great ideas in engineering and physics.

Norton's theorem was derived by Hans Ferdinand Mayer, a researcher at Siemens & Halske in Germany, and independently derived by Edward Lawry Norton, an engineer at Bell Labs. They published their work the same month in 1926. The theorem may also be called the Mayer-Norton theorem.

Back then engineering discoveries did not travel widely or rapidly. Now we have the Web but these people did not. If you know other names for these theorems I would be interested to hear from you.

Johnson, D.H., ["Origins of the equivalent circuit concept: the voltage-source equivalent"](https://www.ece.rice.edu/~dhj/paper1.pdf) (PDF). Proceedings of the IEEE. 91 (4): 636–640. doi:[10.1109/JPROC.2003.811716](https://doi.org/10.1109%2FJPROC.2003.811716).

Johnson, D.H., ["Origins of the equivalent circuit concept: the current-source equivalent"](https://www.ece.rice.edu/~dhj/paper2.pdf) (PDF). Proceedings of the IEEE. 91 (5): 817–821. doi:[10.1109/JPROC.2003.811795](https://doi.org/10.1109%2FJPROC.2003.811795).

## Summary
{:.no_toc}

**Thévenin's theorem**
"A circuit made of any combination of resistors and sources can be simplified down to a single voltage source in series with a single resistor."

We proved this using the principle of superposition.

**Norton's theorem**
"A circuit made of any combination of resistors and sources can be simplified down to a single current source in parallel with a single resistor."

Thévenin's theorem works for all *linear* circuits. In this article we did the proof with a circuit made of resistors and sources. The theorem extends to circuits with $\text R, \text L,$ and $\text C$ by talking in terms of [impedance]({{ site.baseurl }}{% link _videos/ac-analysis-impedance.md %}), $\text Z$ instead of $\text R$.

In the [next article]({{ site.baseurl }}{% link _articles/thevenin-howto.md %}) we will learn practical methods to find the Thévenin equivalent of a given circuit. You don't have to go through the superposition analysis each time---there are some nice shortcuts.
