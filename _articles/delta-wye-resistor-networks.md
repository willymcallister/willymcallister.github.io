---
layout: article
title:  "Delta-Wye resistor networks"
author: Willy McAllister
comments: true
---

Sometimes you get stuck when simplifying a resistor network. Sometimes, no matter how hard you look, you can't find a series or parallel combination to simplify. When that happens it's time to try the $\Delta - \text Y$ *transformation*, or 'Delta-Wye' transformation. 

Written by Willy McAllister.

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

The *Delta* and *Wye* names come from the shapes of the circuits, which resemble letters. The transformation allows you to replace three resistors in a $\Delta$ configuration by three resistors in a $\text Y$ configuration, and the other way around. 

![Delta and Wye configurations]({% link i/delta_wye1.svg %}){: .centered :} 

Drawing $\Delta$ and $\text Y$ this way emphasizes the 3 terminals. The $\text Y$ is also called a *star*. 

You can redraw the resistors to square them up. This is called a $\pi - \text T$ configuration.

![Pi and T configurations]({% link i/delta_wye2.svg %}){: .centered :} 

$\pi - \text T$ is what you might see in a typical schematic. The same transformation equations apply, it is just a different nickname.

Something to notice: The two configurations have a different number of nodes. $\Delta$ has three nodes while $\text Y$ has four nodes. (The extra node is in the middle.)

## Transformations

For a transformation to be valid, the resistance between each pair of terminals must be the same before and after transformation. It is possible to write three simultaneous equations to capture this constraint. 

![Delta and Wye configurations with labeled nodes and resistors.]({% link i/delta_wye3.svg %}){: .centered :} 

DIAGRAM 1 $- \,\Delta$ and $\text Y$ configurations with labeled nodes and resistors.
{: .caption :} 

First look at the $\text Y$ side. Consider terminals $x$ and $y$. Assume terminal $z$ isn't connected to anything, so the current in $R3$ is $0$. (We can make this assumption because we know resistors are [linear]({% link _articles/linearity.md %}) devices and we can apply the principle of [superposition]({% link _articles/superposition.md %}). If you haven't studied linearity and superposition yet, please trust me for now that the assumption is a good one.) 

On the $\text Y$ side, the resistance between $x$ and $y$ is the series combination $R1+R2$.

Now look at the $\Delta$ configuration. The resistance between $x$ and $y$ is $Rc$ in parallel with $Ra + Rb$.  

We set these equal to each other to get the first of three simultaneous equations,

$R1+R2 = \dfrac{Rc\,(Ra+Rb)}{Rc+(Ra+Rb)}$

We can write two similar expressions for the other two pairs of terminals. Notice the $\Delta$ resistors have letter names, $(Ra$, etc.$)$ and the $\text Y$ resistors have number names, $(R1$, etc.$)$. Keeping the resistor names straight is the hardest part of using the transformations.

After solving the simultaneous equations (not shown), we get the equations to transform either network into the other. Find a full derivation of the transform equations is in this [article]({% link _articles/delta-wye-derivations.md %}).

### $\Delta \rightarrow \text Y$ transformation

Equations for transforming a $\Delta$ network into a $\text Y$ network,

$\quad R1 = \dfrac{Rb\,Rc}{Ra + Rb + Rc}$

$\quad R2 = \dfrac{Ra\,Rc}{Ra + Rb + Rc}$

$\quad R3 = \dfrac{Ra\,Rb}{Ra + Rb + Rc}$

Transforming from $\Delta$ to $\text Y$ introduces one additional node.

### $\text Y \rightarrow\Delta$ transformation

Equations for transforming a $\text Y$ network into a $\Delta$ network,

$\quad Ra = \dfrac{R1\,R2 + R2\,R3 + R3\,R1}{R1}$

$\quad Rb = \dfrac{R1\,R2 + R2\,R3 + R3\,R1}{R2}$

$\quad Rc = \dfrac{R1\,R2 + R2\,R3 + R3\,R1}{R3}$

Transforming from $\text Y$ to $\Delta$ removes one node.

## Example 1 - symmetric

Let's do a nice symmetric example. Assume we have a $\Delta$ circuit with $3\,\Omega$ resistors. 

Derive the $\text Y$ equivalent by using the $\Delta \rightarrow \text Y$ equations.

$R1 = \dfrac{Rb\,Rc}{Ra + Rb + Rc} = \dfrac{3 \cdot 3}{3 + 3 + 3} = 1\,\Omega$

$R2 = \dfrac{Ra\,Rc}{Ra + Rb + Rc} = \dfrac{3 \cdot 3}{3 + 3 + 3} = 1\,\Omega$

$R3 = \dfrac{Ra\,Rb}{Ra + Rb + Rc} = \dfrac{3 \cdot 3}{3 + 3 + 3} = 1\,\Omega$

![3 ohm Delta and 1 ohm Wye]({% link i/delta_wye4.svg %}){: .centered :}

Going in the other direction, from $\text Y \rightarrow\Delta$, looks like this,

$Ra = \dfrac{R1\,R2 + R2\,R3 + R3\,R1}{R1}  = \dfrac{1\cdot1 + 1\cdot1 + 1\cdot1}{1} = 3\,\Omega$

$Rb = \dfrac{R1\,R2 + R2\,R3 + R3\,R1}{R2}  = \dfrac{1\cdot1 + 1\cdot1 + 1\cdot1}{1} = 3\,\Omega$

$Rc = \dfrac{R1\,R2 + R2\,R3 + R3\,R1}{R3}  = \dfrac{1\cdot1 + 1\cdot1 + 1\cdot1}{1} = 3\,\Omega$

This $3:1$ resistor ratio is the classic Delta-Wye test case.

Look like a wizard: If you come across a *balanced* $\Delta$ or $\text Y$ (all the resistors are the same value) you can instantly do the transformation if you remember this $3:1$ property.  
* For the $\Delta \rightarrow \text Y$ direction divide the resistors by $3$. 
* For the $\text Y \rightarrow \Delta$ direction multiply the resistors by $3$. 

## Example 2 - less tidy

Now for an example that's a little less tidy. Let's find the equivalent resistance between the top and bottom terminals of this circuit,

![Example 2 less tidy delta circuit]({% link i/delta_wye5.svg %}){: .centered :}

Try as we might, there are no resistors in series or in parallel. But, we are not out of hope. We can throw the $\Delta - \text Y$ transformation at the problem to see if it gets us unstuck. 

First, redraw the schematic to emphasize we have two $\Delta$ connections stacked on top of each other, 

![Example 2 drawn as two deltas]({% link i/delta_wye6.svg %}){: .centered :}

Now select one of the $\Delta$'s to convert to a $\text Y$. We will perform a $\Delta \rightarrow \text Y$ transformation on the bottom $\Delta$ (an arbitrary choice). This might break the log jam, opening up other opportunities for simplification. 

**Very carefully label the resistors and nodes.** 

It is critical to keep the resistor names and node names straight. $Rc$ must connect between nodes $x$ and $y$, and so on. Refer to <small>DIAGRAM 1</small> above for the labeling convention.

![Example 2 with labels]({% link i/delta_wye7.svg %}){: .centered :}

Our plan is to replace the three black $\Delta$ resistors by three new gray $\text Y$ resistors, like this,

![Example 2 with shadow Wye]({% link i/delta_wye8.svg %}){: .centered :}

**Convert the lower $\Delta$ to a $\text Y$.**

See if you can perform the transform yourself before peeking ahead at the answer. Be sure to select the right set of transform equations.

{% capture summary %}show the $\Delta$ to Y transformation{% endcapture %}  
{% capture details %}  
Apply the transformation equations for $\Delta \rightarrow \text Y$,

$R1 = \dfrac{Rb\,Rc}{Ra + Rb + Rc} = \dfrac{5\cdot 3}{4 + 5 + 3} = \dfrac{15}{12}= 1.25\,\Omega$

$R2 = \dfrac{Ra\,Rc}{Ra + Rb + Rc} = \dfrac{4\cdot 3}{4 + 5 + 3} = \dfrac{12}{12}= 1\,\Omega$

$R3 = \dfrac{Ra\,Rb}{Ra + Rb + Rc}= \dfrac{4\cdot 5}{4 + 5 + 3} = \dfrac{20}{12}= 1.66\,\Omega$

To draw the new circuit, substitute the equivalent $\text Y$ network in place of the $\Delta$ resistors. Make sure the $\text Y$ resistor names connect between the proper node names. Refer to <small>DIAGRAM 1</small> above for the labeling convention.

Voilà! Here's our circuit with the $\text Y$ resistors in place of the bottom $\Delta$, 

![Example 2 with Wye transformation]({% link i/delta_wye9.svg %}){: .centered :}

Here's the circuit redrawn all squared up,

![Example 2 with Wye transformation]({% link i/delta_wye10.svg %}){: .centered :}

The circuit now has series and parallel resistors where there were none before.
{% endcapture %}{% include details.html %}

We continue simplification using series and parallel resistor combinations, just as we did in the article [Simplify resistor networks]({% link _articles/simplify-resistor-networks.md %}).

On the left branch, $3.125 + 1.25 = 4.375 \,\Omega$  
On the right branch, $4 + 1 = 5\,\Omega$

![Example 2 simplified]({% link i/delta_wye11.svg %}){: .centered :}

The two parallel resistors combine as, 

$4.375 \parallel 5 = \dfrac{4.375 \cdot 5}{4.375 + 5} = 2.33\,\Omega$  

And we finish by adding the last two series resistors together,

$R_{equivalent} = 2.33 + 1.66 = 4\,\Omega$

![Example 2 result 4 ohms]({% link i/delta_wye12.svg %}){: .centered :}

The original five resistors simplify down to a single $4\,\Omega$ resistor.

### Simulation model

 Here is a [simulation model](https://spinningnumbers.org/circuit-sandbox/index.html?value=[["r",[120,16,0],{"name":"R1","r":"3.125","_json_":0},["1","4"]],["r",[232,16,0],{"name":"R2","r":"4","_json_":1},["1","5"]],["r",[232,96,0],{"name":"R4","r":"4","_json_":2},["5","0"]],["r",[200,80,1],{"name":"R3","r":"3","_json_":3},["5","4"]],["r",[120,96,0],{"name":"R5","r":"5","_json_":4},["4","0"]],["w",[152,80,120,80]],["w",[120,64,120,80]],["w",[120,96,120,80]],["w",[200,80,232,80]],["w",[232,64,232,80]],["w",[232,96,232,80]],["v",[296,56,0],{"name":"Vin","value":"dc(1)","_json_":11},["2","0"]],["r",[376,56,0],{"name":"Requiv","r":"4","_json_":12},["3","0"]],["g",[176,144,0],{"_json_":13},["0"]],["w",[120,144,176,144]],["w",[232,144,176,144]],["g",[296,104,0],{"_json_":16},["0"]],["g",[376,104,0],{"_json_":17},["0"]],["a",[328,-16,6],{"color":"magenta","offset":"0","_json_":18},["2","3"]],["a",[272,-16,2],{"color":"magenta","offset":"0","_json_":19},["2","1"]],["w",[296,-16,328,-16]],["w",[376,-16,344,-16]],["w",[296,-16,272,-16]],["w",[176,-16,256,-16]],["w",[296,-16,296,56]],["w",[376,-16,376,56]],["w",[176,-16,176,16]],["w",[176,16,120,16]],["w",[176,16,232,16]],["view",43.69999999999999,-48.260000000000005,1.953125,"50","10","1G",null,"100","0.009","1000"]]){:target="_blank"} of the transformation we just did. Open the link in another browser tab. The left side of the schematic is the original Example 2 circuit. The right side is the $4\,\Omega$ resistor we derived. Click on **DC** in the top menu bar to perform a DC analysis. 

 Notice the current flowing into the Delta-Wye network is the same as the current flowing into the $4\,\Omega$ resistor. That shows the network and the single resistor are equivalent. 

## Summary
{:.no_toc}

$\Delta - \text Y$ transformations are another tool in your bag of tricks for simplifying circuits.

Don't bother to memorize the transformation equations. If the need arises, you can look them up. For the curious: Find a full derivation of the transform equations is in this [article]({% link _articles/delta-wye-derivations.md %}).



