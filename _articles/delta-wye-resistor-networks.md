---
layout: article
title:  "Delta-Wye resistor networks"
author: Willy McAllister
comments: true
---

Sometimes you get stuck when simplifying a resistor network. Sometimes, no matter how hard you try, you can't find a series or parallel combination to simplify. When that happens it's time to try the $\Delta\text{\textendash}\text Y$ transformation, or *Delta-Wye transformation*. 

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

You can redraw the resistors to square them up. This is called a $\pi\text{\textendash}\text T$ configuration.

![Pi and T configurations]({% link i/delta_wye2.svg %}){: .centered :} 

$\pi\text{\textendash}\text T$ is what you might see in a typical schematic. The same transformation equations apply, it is just a different nickname.

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

 Here is a [simulation model](https://spinningnumbers.org/circuit-sandbox/index.html?value=%5B%5B%22w%22%2C%5B176%2C16%2C232%2C16%5D%5D%2C%5B%22w%22%2C%5B176%2C16%2C120%2C16%5D%5D%2C%5B%22w%22%2C%5B176%2C-16%2C176%2C16%5D%5D%2C%5B%22w%22%2C%5B376%2C-16%2C376%2C56%5D%5D%2C%5B%22w%22%2C%5B296%2C-16%2C296%2C56%5D%5D%2C%5B%22w%22%2C%5B176%2C-16%2C256%2C-16%5D%5D%2C%5B%22w%22%2C%5B296%2C-16%2C272%2C-16%5D%5D%2C%5B%22w%22%2C%5B376%2C-16%2C344%2C-16%5D%5D%2C%5B%22w%22%2C%5B296%2C-16%2C328%2C-16%5D%5D%2C%5B%22a%22%2C%5B272%2C-16%2C2%5D%2C%7B%22color%22%3A%22magenta%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A9%7D%2C%5B%224%22%2C%222%22%5D%5D%2C%5B%22a%22%2C%5B328%2C-16%2C6%5D%2C%7B%22color%22%3A%22magenta%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A10%7D%2C%5B%224%22%2C%225%22%5D%5D%2C%5B%22g%22%2C%5B376%2C104%2C0%5D%2C%7B%22_json_%22%3A11%7D%2C%5B%220%22%5D%5D%2C%5B%22g%22%2C%5B296%2C104%2C0%5D%2C%7B%22_json_%22%3A12%7D%2C%5B%220%22%5D%5D%2C%5B%22w%22%2C%5B232%2C144%2C176%2C144%5D%5D%2C%5B%22w%22%2C%5B120%2C144%2C176%2C144%5D%5D%2C%5B%22g%22%2C%5B176%2C144%2C0%5D%2C%7B%22_json_%22%3A15%7D%2C%5B%220%22%5D%5D%2C%5B%22r%22%2C%5B376%2C56%2C0%5D%2C%7B%22name%22%3A%22Requiv%22%2C%22r%22%3A%224%22%2C%22_json_%22%3A16%7D%2C%5B%225%22%2C%220%22%5D%5D%2C%5B%22v%22%2C%5B296%2C56%2C0%5D%2C%7B%22name%22%3A%22Vin%22%2C%22value%22%3A%22dc(1)%22%2C%22_json_%22%3A17%7D%2C%5B%224%22%2C%220%22%5D%5D%2C%5B%22w%22%2C%5B232%2C96%2C232%2C80%5D%5D%2C%5B%22w%22%2C%5B232%2C64%2C232%2C80%5D%5D%2C%5B%22w%22%2C%5B200%2C80%2C232%2C80%5D%5D%2C%5B%22w%22%2C%5B120%2C96%2C120%2C80%5D%5D%2C%5B%22w%22%2C%5B120%2C64%2C120%2C80%5D%5D%2C%5B%22w%22%2C%5B152%2C80%2C120%2C80%5D%5D%2C%5B%22r%22%2C%5B120%2C96%2C0%5D%2C%7B%22name%22%3A%22R5%22%2C%22r%22%3A%225%22%2C%22_json_%22%3A24%7D%2C%5B%221%22%2C%220%22%5D%5D%2C%5B%22r%22%2C%5B200%2C80%2C1%5D%2C%7B%22name%22%3A%22R3%22%2C%22r%22%3A%223%22%2C%22_json_%22%3A25%7D%2C%5B%223%22%2C%221%22%5D%5D%2C%5B%22r%22%2C%5B232%2C96%2C0%5D%2C%7B%22name%22%3A%22R4%22%2C%22r%22%3A%224%22%2C%22_json_%22%3A26%7D%2C%5B%223%22%2C%220%22%5D%5D%2C%5B%22r%22%2C%5B232%2C16%2C0%5D%2C%7B%22name%22%3A%22R2%22%2C%22r%22%3A%224%22%2C%22_json_%22%3A27%7D%2C%5B%222%22%2C%223%22%5D%5D%2C%5B%22r%22%2C%5B120%2C16%2C0%5D%2C%7B%22name%22%3A%22R1%22%2C%22r%22%3A%223.125%22%2C%22_json_%22%3A28%7D%2C%5B%222%22%2C%221%22%5D%5D%2C%5B%22view%22%2C43.7%2C-48.26%2C1.953125%2C%2250%22%2C%2210%22%2C%221G%22%2Cnull%2C%22100%22%2C%220.009%22%2C%221000%22%5D%5D){:target="_blank"} of the transformation we just did. Open the link in another browser tab. The left side of the schematic is the original Example 2 circuit. The right side is the $4\,\Omega$ resistor we derived. Click on **DC** in the top menu bar to perform a DC analysis. 

 Notice the current flowing into the Delta-Wye network is the same as the current flowing into the $4\,\Omega$ resistor. That shows the network and the single resistor are equivalent. 

## Summary
{:.no_toc}

$\Delta - \text Y$ transformations are another tool in your bag of tricks for simplifying circuits.

Don't bother to memorize the transformation equations. If the need arises, you can look them up. For the curious: Find a full derivation of the transform equations is in this [article]({% link _articles/delta-wye-derivations.md %}).


## Appendices
### Delta to Wye Calculator

$R1 = \dfrac{Rb\,Rc}{Ra + Rb + Rc}$

$R2 = \dfrac{Ra\,Rc}{Ra + Rb + Rc}$

$R3 = \dfrac{Ra\,Rb}{Ra + Rb + Rc}$

<script>
function delta2wye() {
  var valRa = parseFloat(document.getElementById("valueRa").value);
  var valRb = parseFloat(document.getElementById("valueRb").value);
  var valRc = parseFloat(document.getElementById("valueRc").value);
  var R1 = (valRb * valRc) / (valRa + valRb + valRc);
  document.getElementById('displayR1').innerHTML = R1.toFixed(2);   
  var R2 = (valRa * valRc) / (valRa + valRb + valRc);
  document.getElementById('displayR2').innerHTML = R2.toFixed(2);
  var R3 = (valRa * valRb) / (valRa + valRb + valRc);
  //ansR3.value = R3.toFixed(2); 
  document.getElementById('displayR3').innerHTML = R3.toFixed(2);
}
</script>
|![Delta configuration]({% link i/wye.svg %}) |$Ra\colon$ <input type="text" id="valueRa" name="Ra" value="3" size="8" style="text-align:right;font-size:1.1em;"> $\Omega$ <br><br>$Rb\colon$ <input type="text" id="valueRb" name="Rb" value="3" size="8" style="text-align:right;font-size:1.1em;"> $\Omega$ <br><br>$Rc\colon$ <input type="text" id="valueRc" name="Rc" value="3" size="8" style="text-align:right;font-size:1.1em;"> $\Omega$ |
{:.noborder }


<input type="button" style="padding: 10px; background-color: #e8e8e8; border-radius: 10px; font-size: 1em" name="Submit" value=" delta to wye " onclick="delta2wye()"> 

| ![Wye configuration]({% link i/wye.svg %}) |$R1\colon$ <span id='displayR1' style="font-size: 1.1em">\_\_\_\_</span> $\Omega$ <br><br>$R2\colon$ <span id='displayR2' style="font-size: 1.1em">\_\_\_\_</span> $\Omega$ <br><br>$R3\colon$ <span id='displayR3' style="font-size: 1.1em">\_\_\_\_</span> $\Omega$   |
{:.noborder }



<hr>

### Wye to Delta Calculator

$Ra = \dfrac{R1\,R2 + R2\,R3 + R3\,R1}{R1}$

$Rb = \dfrac{R1\,R2 + R2\,R3 + R3\,R1}{R2}$

$Rc = \dfrac{R1\,R2 + R2\,R3 + R3\,R1}{R3}$

<script>
function wye2delta() {
  var valR1 = parseFloat(document.getElementById("valueR1").value);
  var valR2 = parseFloat(document.getElementById("valueR2").value);
  var valR3 = parseFloat(document.getElementById("valueR3").value);
  var Ra = (valR1 * valR2 + valR2 * valR3 + valR3 * valR1)  / valR1;
  document.getElementById('displayRa').innerHTML = Ra.toFixed(2); 
  var Rb = (valR1 * valR2 + valR2 * valR3 + valR3 * valR1)  / valR2;
  document.getElementById('displayRb').innerHTML = Rb.toFixed(2);
  var Rc = (valR1 * valR2 + valR2 * valR3 + valR3 * valR1)  / valR3;
  document.getElementById('displayRc').innerHTML = Rc.toFixed(2);
}
</script>
|![Wye configuration]({% link i/wye.svg %}) |$R1\colon$ <input type="text" id="valueR1" name="R1" value="1" size="8" style="text-align:right;font-size:1.1em;"> $\Omega$ <br><br>$R2\colon$ <input type="text" id="valueR2" name="R2" value="1" size="8" style="text-align:right;font-size:1.1em;"> $\Omega$ <br><br>$R3\colon$ <input type="text" id="valueR3" name="R3" value="1" size="8" style="text-align:right;font-size:1.1em;"> $\Omega$ |
{:.noborder }


<input type="button" style="padding: 10px; background-color: #e8e8e8; border-radius: 10px; font-size: 1em" name="Submit" value=" wye to delta " onclick="wye2delta()"> 

| ![Delta configuration]({% link i/delta.svg %}) |$Ra\colon$ <span id='displayRa' style="font-size: 1.1em">\_\_\_\_</span> $\Omega$ <br><br>$Rb\colon$ <span id='displayRb' style="font-size: 1.1em">\_\_\_\_</span> $\Omega$ <br><br>$Rc\colon$ <span id='displayRc' style="font-size: 1.1em">\_\_\_\_</span> $\Omega$   |
{:.noborder }



