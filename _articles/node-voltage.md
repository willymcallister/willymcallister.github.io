---
layout: article
title:  "Node voltage method"
author: Willy McAllister
comments: true
---

The Node Voltage Method is one of the well-organized methods for analyzing a circuit. It is based on [Kirchhoff's Current Law]({{ site.baseurl }}{% link _articles/kirchhoffs-current-law.md %}). Node Voltage is the method embedded inside the popular circuit simulator, SPICE.

Written by Willy McAllister.

----

### Contents
{: .no_toc :}

* Will be replaced with the ToC
{: toc :}

----

### Where we're headed 
{: .no_toc :}

**Node voltage method**  
* Assign a reference node (ground).
* Assign node voltage names to the remaining nodes.
* Solve the easy nodes, the ones connected to ground through a voltage source.
* Write Kirchhoff's Current Law at each node using node voltages.
* Solve the resulting system of equations to find the node voltages.
* Find the currents using Ohm's Law.

We work through two example circuits with this method. We also figure out how to handle the special case of a floating voltage source (called a *supernode*).

----

## The circuit analysis challenge

"Solving a circuit" means figuring out all the voltages and currents in the circuit. At the start you don't know anything. Every circuit element has an unknown voltage and unknown current. 

A circuit with $E$ elements has $E$ unknown voltages and $E$ unknown currents. Solving the circuit requires $2E$ independent equations, which we have to create and solve. Where do these equations come from? 

* Half of them come from individual element $i$-$v$ equations (like Ohm's Law). 
* The rest come from the circuit connection pattern (captured by KCL or KVL).

No matter what procedure you use to solve a circuit, there is no getting around the requirement to create and solve $2E$ simultaneous equations. This can be a lot of work, but there are ways to organize the effort to make it very efficient. 

The Node Voltage Method is one of two very efficient procedures we have for solving circuits. The other is the [Mesh Current Method]({{ site.baseurl }}{% link _articles/mesh-current.md %}). The Node Voltage Method is not mysterious new math or science. It is simply a procedure for creating the $2E$ equations. 

We demonstrate the Node Voltage Method with this circuit,

![Node voltage circuit]({{ site.baseurl }}{% link i/node_voltage0.svg %}){: .centered :}

## Prepare the schematic

Every circuit analysis starts by finding and naming the nodes. Then select one of the nodes to be the *reference node*. The reference node is also called the *ground node*. The potential of the ground node is defined to be $0\,\text V$. 

![Node voltage circuit]({{ site.baseurl }}{% link i/node_voltage1.svg %}){: .centered :}

I picked node $\greenD c$ to be the reference node, as shown by the little triangle symbol. Node $\greenD c$ is a good choice because it has lots of connections and the two sources are directly connected.

## Definition: node voltage

To use the Node Voltage Method we need a new term: *node voltage*. A node voltage is the potential difference measured between the reference node and another node in the circuit. Up to now, we've talked about the voltage across the terminals of a single element. This is called an *element voltage* (or a *branch voltage*). The concepts are similar but not identical.

The example circuit has two node voltages, labeled $\goldD{v_a}$ and $\goldD{v_b}$.

![Node voltages labeled]({{ site.baseurl }}{% link i/node_voltage2.svg %}){: .centered :} 

Node voltage arrows start at the reference node and arc up to a circuit node. A node voltage might span across several elements, not just one.

## Element voltage from node voltages

How do you derive an element voltage from node voltages? The element voltage is the difference between the two node voltages on either side.

Let's find the element voltage for the $20\,\Omega$ resistor. The element voltage is the difference between the two node voltages on either side of the resistor. The element voltage can be written with the terms in either order,

$v_{\text{R}20} = v_a - v_b\qquad$ or $\qquad v_{\text{R}20} = v_b - v_a$

We make our choice depending on which way we want the current arrow to point.

## Control the current arrow

Node voltages let you control the direction of the current arrow!

The element voltage across the $20\,\Omega$ resistor can be written with either $v_a$ or $v_b$ in the first position in the difference. The voltage we write first is considered the more positive and gets the $+$ voltage polarity sign. This choice determines the direction of the current arrow when we apply the [sign convention for passive components]({{ site.baseurl }}{% link _articles/sign-convention.md %}). The current arrow points into the resistor terminal with the positive voltage polarity.

![Current arrow controlled by node voltages]({{ site.baseurl }}{% link i/node_voltage8.svg %}){: .centered :}

Above left, $v_a$ is considered the more positive voltage so it appears in the first position of the difference. The voltage arrow points toward node $a$ and the current arrow points in from node $a$.
{: .caption :}

Above right, $v_b$ is considered the more positive voltage so it is now in the first position of the difference. The voltage arrow flips to point toward node $b$ and the current arrow points in from node $b$.
{: .caption :}

We use this new skill to control the direction of the current arrow in the KCL equation we're about to write in the forth step of the Node Voltage Method.

{% capture summary %}sometimes element voltage = node voltage{% endcapture %}  
{% capture details %}    
If a circuit element is connected directly to ground then its node voltage is the same as its element voltage. For example, look at the $6\,\Omega$ resistor, $5\,\Omega$ resistor, and current source. They are all connected to the reference node and to node $b$. The node voltage *and* the element voltage for all three is $v_b$.  
{% endcapture %}{% include details.html %} 

## Node Voltage Method

The Node Voltage Method is this sequence of steps,

* Assign a reference node (ground).
* Assign node voltage names to the remaining nodes.
* Solve the easy nodes, the ones connected to ground through a voltage source.
* Write Kirchhoff's Current Law at each node using node voltages.
* Solve the resulting system of equations to find the node voltages.
* Find the currents you want using Ohm's Law.

### Assign a reference node

We already did this above, but let's do it again. Our example circuit has three nodes, $\greenD a$, $\greenD b$, and $\greenD c$. Node $\greenD c$ has a lot of connections, $4$, and it connects directly to both sources. This makes it a good candidate to play the role of reference node. Node $\greenD c$ has been marked with the ground symbol (triangle) so everyone knows our choice for reference node.

![Node voltages labeled]({{ site.baseurl }}{% link i/node_voltage3.svg %}){: .centered :}

### Assign node voltage names

Our circuit has $N = 3$ nodes. After picking a reference node that leaves $N-1 = 2$ node voltages that need names. We call them $v_a$ and $v_b$. 

> Note: There is an obvious opportunity here to simplify the two parallel resistors, $6\,\Omega$ with $5\,\Omega$. I won't do that because I want to focus on the steps of the Node Voltage Method.

### Solve the easy nodes

Are there any easy nodes? There's a voltage source connected directly between node $\greenD a$ and the reference node $\greenD c$. That makes $\greenD a$ an easy node. We know right away voltage $v_a = 140\,\text V$.

![Easy node solved]({{ site.baseurl }}{% link i/node_voltage4.svg %}){: .centered :}

{% capture summary %}Is node $b$ easy?{% endcapture %}  
{% capture details %}  
Node $b$ looks like it might be easy because it is connected to the reference node through a source. But it's not. That's because it is a current source, not a voltage source. A current source doesn't tell you its voltage---you have to figure that out from everything else in the circuit.   
{% endcapture %}{% include details.html %}

### Write Kirchhoff's Current Law for the remaining nodes

The next step is to write KCL equations for the remaining nodes. For us, that's just node $b$. First, draw current arrows on the four branches of node $b$. 

![Add current arrows to node b]({{ site.baseurl }}{% link i/node_voltage4-1c.svg %}){: .centered :}

{% capture summary %}how did I pick the arrow directions?{% endcapture %}  
{% capture details %}  
I chose arrow directions based on what I anticipate the positive current directions will turn out to be. I can do that because I've done these kinds of problems a lot of times. You shouldn't worry about choosing a "right" direction for the arrows. The math will give you the answers with any arrow directions.

Notice two arrows point into the node and two arrows point out of the node. That determines the $+$ and $-$ signs in the KCL equation.
{% endcapture %}{% include details.html %} 

The KCL equation for node $b$ is,

$+i_{20\Omega} - i_{6\Omega} - i_{5\Omega} + \text I_{18\text A} = 0$

Now work out the currents flowing in and out of node $b$. 

>Essential skill - Scribble on the schematic!    
The challenging part of writing KCL equations is getting the signs right. Scribble on the schematic. A lot. Draw voltage signs and current arrows to help you get the signs right in the KCL equation. 

![Individual currents]({{ site.baseurl }}{% link i/node_voltage4-1b.svg %}){: .centered :}

Each current term in a KCL equation can be written as an *element* voltage (not a node voltage) divided by a resistance value. 

The element voltage of the $20\,\Omega$ resistor is $v_a - v_b$, with $v_a$ as the leading term. I picked $v_a$ as the leading term to make the current arrow point to the right, flowing into node $b$.  

Using Ohm's Law, the current flowing into node $b$ from the $20\,\Omega$ resistor is $+\dfrac{(v_a - v_b)}{20}$.

For the $6\,\Omega$ and $5\,\Omega$ resistors the currents are $\dfrac{(v_b - 0)}{6}$ and $\dfrac{(v_b - 0)}{5}$. 

I picked $v_b$ as the leading term in the difference to make the current arrows point down. These currents go into the KCL equation with a negative sign because their current arrows point away from the node. 

The current source is driving its current into node $b$: $\text I_{18} = 18\,\text A$.

We now rewrite the KCL equation for node $b$, 

$+\dfrac{(v_a - v_b)}{20} - \dfrac{v_b}{6} - \dfrac{v_b}{5} + 18 = 0$

If we solve this equation we will find $v_b$ (since we already know $v_a$). 

The essence of the Node Voltage Method is how we came up with the $20\,\Omega$ resistor term. If you understand this, you get the method.

>Essential skill - Do Ohm's Law in your head as you write KCL.    
As you practice with the Node Voltage method you will be able to write each term of the KCL equation by doing Ohm's Law in your head. You write the current in terms of the difference of node voltages divided by resistance. You choose the order of the difference based on the direction you want the current arrow to point.  

### Solve the node voltages

Our system of equations happens to be just one equation. Let's solve it to find $v_b$,

$+\dfrac{140}{20} - \dfrac{v_b}{20} - \dfrac{v_b}{6} - \dfrac{v_b}{5} = -18$

$ - \dfrac{v_b}{20} - \dfrac{v_b}{6} - \dfrac{v_b}{5} = -18 - 7$

$ \left (- \dfrac{3}{60} - \dfrac{10}{60} - \dfrac{12}{60} \right ) \, v_b = -25$

$ v_b = -25 \, \left (- \dfrac{60}{25} \right )$

$v_b  = 60 \,\text V$

We have both node voltages, $v_a = 140\,\text V$ and $v_b = 60\,\text V$.

### Find the unknown currents using Ohm's Law

Now we can find the unknown currents using Ohm's Law,

$i_{20\,\Omega} = \dfrac{(v_a-v_b)}{20} = \dfrac{(140-60)}{20} = 4\,\text A$

$i_{6\,\Omega} = \dfrac{v_b}{6} = \dfrac{60}{6} = 10\,\text A\quad$ This current flows down through the resistor.

$i_{5\,\Omega} = \dfrac{v_b}{5} = \dfrac{60}{5} = 12\,\text A\quad$ This current flows down as well.

Ta daaa! The circuit is solved.

You can confirm the answer by [simulating](https://spinningnumbers.org/circuit-sandbox/index.html?value=%5B%5B%22w%22%2C%5B216%2C152%2C240%2C152%5D%5D%2C%5B%22w%22%2C%5B264%2C152%2C240%2C152%5D%5D%2C%5B%22w%22%2C%5B264%2C40%2C216%2C40%5D%5D%2C%5B%22a%22%2C%5B312%2C64%2C3%5D%2C%7B%22color%22%3A%22magenta%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A3%7D%2C%5B%226%22%2C%221%22%5D%5D%2C%5B%22s%22%2C%5B312%2C40%2C0%5D%2C%7B%22color%22%3A%22cyan%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A4%7D%2C%5B%221%22%5D%5D%2C%5B%22w%22%2C%5B216%2C152%2C240%2C152%5D%5D%2C%5B%22w%22%2C%5B264%2C152%2C240%2C152%5D%5D%2C%5B%22g%22%2C%5B240%2C152%2C0%5D%2C%7B%22_json_%22%3A7%7D%2C%5B%220%22%5D%5D%2C%5B%22w%22%2C%5B264%2C40%2C216%2C40%5D%5D%2C%5B%22w%22%2C%5B312%2C40%2C264%2C40%5D%5D%2C%5B%22w%22%2C%5B88%2C40%2C112%2C40%5D%5D%2C%5B%22w%22%2C%5B312%2C152%2C264%2C152%5D%5D%2C%5B%22w%22%2C%5B88%2C120%2C88%2C152%5D%5D%2C%5B%22r%22%2C%5B112%2C40%2C3%5D%2C%7B%22name%22%3A%22R1%22%2C%22r%22%3A%2220%22%2C%22_json_%22%3A13%7D%2C%5B%225%22%2C%222%22%5D%5D%2C%5B%22r%22%2C%5B264%2C72%2C0%5D%2C%7B%22name%22%3A%22R3%22%2C%22r%22%3A%225%22%2C%22_json_%22%3A14%7D%2C%5B%224%22%2C%220%22%5D%5D%2C%5B%22r%22%2C%5B216%2C72%2C0%5D%2C%7B%22name%22%3A%22R2%22%2C%22r%22%3A%226%22%2C%22_json_%22%3A15%7D%2C%5B%223%22%2C%220%22%5D%5D%2C%5B%22i%22%2C%5B312%2C120%2C6%5D%2C%7B%22name%22%3A%22%22%2C%22value%22%3A%22dc(18)%22%2C%22_json_%22%3A16%7D%2C%5B%220%22%2C%226%22%5D%5D%2C%5B%22v%22%2C%5B88%2C72%2C0%5D%2C%7B%22name%22%3A%22%22%2C%22value%22%3A%22dc(140)%22%2C%22_json_%22%3A17%7D%2C%5B%225%22%2C%220%22%5D%5D%2C%5B%22w%22%2C%5B312%2C152%2C312%2C120%5D%5D%2C%5B%22w%22%2C%5B88%2C152%2C216%2C152%5D%5D%2C%5B%22w%22%2C%5B88%2C40%2C88%2C72%5D%5D%2C%5B%22w%22%2C%5B312%2C40%2C312%2C48%5D%5D%2C%5B%22w%22%2C%5B312%2C64%2C312%2C72%5D%5D%2C%5B%22a%22%2C%5B264%2C48%2C1%5D%2C%7B%22color%22%3A%22magenta%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A23%7D%2C%5B%221%22%2C%224%22%5D%5D%2C%5B%22w%22%2C%5B264%2C40%2C264%2C48%5D%5D%2C%5B%22w%22%2C%5B264%2C72%2C264%2C64%5D%5D%2C%5B%22a%22%2C%5B216%2C48%2C1%5D%2C%7B%22color%22%3A%22magenta%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A26%7D%2C%5B%221%22%2C%223%22%5D%5D%2C%5B%22w%22%2C%5B216%2C40%2C216%2C48%5D%5D%2C%5B%22w%22%2C%5B216%2C72%2C216%2C64%5D%5D%2C%5B%22w%22%2C%5B264%2C120%2C264%2C152%5D%5D%2C%5B%22w%22%2C%5B216%2C120%2C216%2C152%5D%5D%2C%5B%22a%22%2C%5B176%2C40%2C0%5D%2C%7B%22color%22%3A%22magenta%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A31%7D%2C%5B%222%22%2C%221%22%5D%5D%2C%5B%22w%22%2C%5B216%2C40%2C192%2C40%5D%5D%2C%5B%22w%22%2C%5B160%2C40%2C176%2C40%5D%5D%2C%5B%22view%22%2C43.66%2C-1.7079999999999984%2C2.44140625%2C%2250%22%2C%2210%22%2C%221G%22%2Cnull%2C%22100%22%2C%220.01%22%2C%221000%22%5D%5D). Open the link in another tab. Click on **DC** to perform a DC analysis. Do a quick mental addition to confirm KCL at node $b$. Do the currents add up to zero?

The Node Voltage Method is pretty cool. Without too much effort, we came up with one equation in one unknown, $v_b$. When we solved this same circuit in a previous article with the improvised application of the fundamental laws, we had to manage $10$ equations with $10$ unknowns. The Node Voltage Method has a built-in efficiency that manages this complexity. 

{% capture summary %}Is the Node Voltage Method magic?{% endcapture %}  
{% capture details %}  
Going through this Node Voltage Method seemed like a lot less work than creating, managing, and solving a system of $2E$ independent equations with $2E$ unknown voltages and currents. Is this some sort of magic?

No, there is no magic. The Node Voltage Method is simply a cleverly organized way to approach the same $2E$ equations. The main innovations are,

* We are confident we can do Ohm's Law in our heads while writing the KCL equations. Being this quick with Ohm's Law makes it seem like half of the independent equations are no big deal. We used Ohm's Law near the end to find the resistor currents. This didn't seem like much of a chore, either.
* Using the concept of *node voltage* instead of element voltage is a brilliant move that basically annotates KVL equations right on the schematic, so we don't have to write KVL equations.
* A few node voltages might have easy solutions, the nodes connected to a voltage source whose other terminal is ground. This typically knocks out one or two equations.
* What remains to solve are the KCL equations at the non-easy nodes.  
{% endcapture %}{% include details.html %} 

{% capture summary %}How do the required KVL equations "go away"?{% endcapture %}  
{% capture details %}  
With the Node Voltage Method, we don't even bother to write down the KVL equations that are always part of the $2E$ collection. Let's write them anyway and see why.

Our circuit has three meshes, in the left, middle, and right 'windows' of the schematic.

![Example circuit with meshes highlighted]({{ site.baseurl }}{% link i/node_voltage5.svg %}){: .centered :}

KVL for the left mesh,

$+140 - (140 - v_b) - v_b = 0$

This left mesh equation really illustrates the point of node voltages. We express the voltage across the $20\,\Omega$ resistor in terms of node voltages instead of its own element voltage. With this notation, the equation collapses to $0 = 0$.

KVL for the middle mesh,

$+v_b - v_b = 0$

KVL for the right mesh,

$+v_b - v_b = 0$

All three mesh equations reduce to $0 = 0$ and basically drop out of the procedure. This is what your textbook means if it says something like, "With the Node Voltage Method, the KVL equations are written implicitly on the schematic."  
{% endcapture %}{% include details.html %} 

## Guided example

**Solve this circuit using the Node Voltage Method.** 

![Guided example circuit]({{ site.baseurl }}{% link i/node_voltage9.svg %}){: .centered :}

If you want to work this problem on your own, go for it! Copy this schematic and work through the steps of the Node Voltage Method listed above. Even if you don't carry the computation all the way through, I encourage you to at least do the steps up to writing the KCL's.

**Assign a reference node.**  

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
![Add the reference node symbol]({{ site.baseurl }}{% link i/node_voltage10.svg %}){: .centered :}

The node at the bottom of the schematic is a good choice for the reference node, because it has many connections ($3$) and it connect to the negative terminal of the voltage source.  
{% endcapture %}{% include details.html %} 

**Assign node voltage names to the remaining nodes.**  

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
![Name the nodes]({{ site.baseurl }}{% link i/node_voltage11.svg %}){: .centered :}
There are three other nodes besides the reference node. I named them $\greenD a$, $\greenD b$, and $\greenD c$, with the corresponding node voltages, $\goldD{v_a}$, $\goldD{v_b}$, and $\goldD{v_c}$.
{% endcapture %}{% include details.html %} 

**Solve the easy nodes first.**

{% capture summary %}show answer{% endcapture %}  
{% capture details %}
![Name the nodes]({{ site.baseurl }}{% link i/node_voltage12.svg %}){: .centered :}

Node $\greenD a$ is an easy node because it connects to a voltage source whose other terminal is ground. We find the voltage by inspection, $v_a = 75\,\text V$.  
{% endcapture %}{% include details.html %} 

**Prepare to write Kirchhoff's Current law for each node. Scribble current arrows and voltage terms on the schematic. (Do Ohm's Law in your head.)**

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
Before writing KCL, it is good practice to scribble notes on the schematic to establish the direction of the current arrows. First I set up the current arrows so I can sum the currents going *into* a node. Then I write Ohm's Law expressions $(i = v/\text R)$ with node voltages,

![Name the nodes]({{ site.baseurl }}{% link i/node_voltage7.svg %}){: .centered :}

Take a good look at the numerators. Notice how the order of the voltage terms is based on the direction of the current arrow. This is the key skill of the Node Voltage Method.

Notice out how the current in the $10\,\Omega$ resistor is specified two different ways by exchanging the voltage terms. 
{% endcapture %}{% include details.html %} 

**Write Kirchhoff's Current Law for each node.**  

{% capture summary %}show answer{% endcapture %}  
{% capture details %}
Node $b$ $\qquad+\dfrac{v_a - v_b}{25} - \dfrac{v_b}{50} + \dfrac{v_c - v_b}{10} = 0$

Node $c$ $\qquad+\dfrac{v_a - v_c}{100} + \dfrac{v_b-v_c}{10} - \dfrac{v_c }{25} = 0$  
{% endcapture %}{% include details.html %} 

**Solve the resulting system of equations for the node voltages.**  

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
Solve the system of equations and find the two unknown node voltages any way you know how. I will use [elimination by multiply and add](https://www.khanacademy.org/math/algebra/systems-of-linear-equations/equivalent-systems-of-equations/a/elimination-method-review).

First, tidy up by gathering like terms together. Move the known $v_a$ terms to the right side,

$\text{Node }b$ $\qquad-\dfrac{v_b}{25} - \dfrac{v_b}{50} - \dfrac{ v_b}{10} + \dfrac{v_c}{10} = -\dfrac{v_a}{25}$

$\text{Node }c$ $\qquad+\dfrac{v_b}{10} - \dfrac{v_c}{100} - \dfrac{v_c}{10} - \dfrac{v_c }{25} = -\dfrac{v_a}{100}$

Simplify to get a system of two equations in two unknowns,

$\text{Node }b$ $\qquad-\dfrac{8}{50} v_b + \dfrac{1}{10}v_c = -\dfrac{75}{25} = -3$

$\text{Node }c$ $\qquad+\dfrac{1}{10}v_b - \dfrac{15}{100} v_c = -\dfrac{75}{100} = -\dfrac{3}{4}$

To eliminate $v_c$, multiply the first equation by $\small\dfrac{15}{10}$ and add it to the other equation,

<p>
$\begin{aligned}
&\text{Node }b &\dfrac{15}{10} \times \biggl [ -\dfrac{8}{50} v_b + \dfrac{1}{10}v_c  &  =  -3 \ \ \biggr ] \\
\\
&\text{Node }c &+\biggl [ +\dfrac{1}{10}v_b - \dfrac{15}{100} v_c  &  = -\dfrac{3}{4} \ \biggr ]
\end{aligned}$
</p>

Multiply through. The $v_c$ terms cancel. Add the equations,

<p>$\begin{aligned}
&\text{Node }b & \biggl [-\dfrac{15 \cdot 8}{10 \cdot 50}\,v_b + \cancel{\dfrac{15\cdot 1}{10 \cdot 10}\,v_c}  &  = -\dfrac{15 \cdot 3}{10 \cdot 1} \ \biggr ] \\
\\
&\text{Node }c &+ \biggl [ +\dfrac{1}{10}v_b - \cancel{\dfrac{15}{100} v_c}  & =  \,-\dfrac{3}{4} \ \ \biggr ] \\
\\
&\text{Sum} &\left ( \dfrac{-15 \cdot 8}{500} + \dfrac{1}{10} \right ) \, v_b & = -\dfrac{45}{10}-\dfrac{3}{4} \\
\\
&&\dfrac{-120 + 50}{500}\,v_b &= -\dfrac{90}{20}-\dfrac{15}{20} \\
\\
&&-\dfrac{70}{500}\,v_b &= -\dfrac{105}{20} \\
\\
&&v_b &= -\dfrac{105}{20}\cdot -\dfrac{500}{70} \\
\\
&&v_b &= +37.5\,\text V
\end{aligned}$
</p>

We've isolated and solved for $v_b$. Now plug our new $v_b$ into either of the original KCL equations to find $v_c$. I will use the equation for node $c$,

<p>$\begin{aligned}  
&\text{Node }c &+\dfrac{1}{10}\,v_b - \dfrac{15}{100} v_c &= -\dfrac{3}{4} \\
\\
&&+\dfrac{1}{10}\,37.5 - \dfrac{15}{100} v_c  &= -\dfrac{3}{4} \\
\\
&&-\dfrac{15}{100} v_c  &= -0.75 - 3.75 \\
\\
&&v_c &= -4.5\cdot -\dfrac{100}{15} \\
\\
&&v_c &= +30\,\text V  
\end{aligned}$
</p>
{% endcapture %}{% include details.html %} 

**Solve any currents you want to know using Ohm's Law.**  

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
<p>$\begin{aligned}  
&i_{ab\,25\Omega} = \dfrac{75 - 37.5}{25} &&= 1.5\,\text A &&\text{current arrow points to the right.} \\
\\
&i_{bg\,50\Omega} = \dfrac{37.5}{50} &&= 0.75\,\text A &&\text{current arrow points down.} \\
\\
&i_{bc\,10\Omega} = \dfrac{37.5-30}{10} &&= 0.75\,\text A &&\text{current arrow points to the right.} \\
\\
&i_{ac\,100\Omega} = \dfrac{75-30}{100} &&= 0.45\,\text A &&\text{current arrow points to the right.} \\
\\
&i_{cg\,25\Omega} = \dfrac{30}{25} &&= 1.2\,\text A &&\text{current arrow points down.}
\end{aligned}$
</p>

As a bonus, the current provided by the voltage source is,

$i_v = i_{100\Omega}+i_{ab\,25\Omega} = 0.45\,\text A + 1.5\,\text A = 1.95\,\text A$

The solved circuit looks like this,

![Solved circuit]({{ site.baseurl }}{% link i/node_voltage13.svg %}){: .centered :}
{% endcapture %}{% include details.html %} 

### Simulation model

You can confirm your answer by simulating the [guided example](https://spinningnumbers.org/circuit-sandbox/index.html?value=%5B%5B%22w%22%2C%5B192%2C24%2C120%2C24%5D%5D%2C%5B%22w%22%2C%5B96%2C24%2C104%2C24%5D%5D%2C%5B%22a%22%2C%5B104%2C24%2C6%5D%2C%7B%22color%22%3A%22magenta%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A2%7D%2C%5B%226%22%2C%228%22%5D%5D%2C%5B%22w%22%2C%5B96%2C64%2C104%2C64%5D%5D%2C%5B%22w%22%2C%5B144%2C64%2C120%2C64%5D%5D%2C%5B%22a%22%2C%5B104%2C64%2C0%5D%2C%7B%22color%22%3A%22magenta%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A5%7D%2C%5B%226%22%2C%227%22%5D%5D%2C%5B%22w%22%2C%5B96%2C96%2C96%2C64%5D%5D%2C%5B%22w%22%2C%5B96%2C24%2C96%2C64%5D%5D%2C%5B%22w%22%2C%5B328%2C168%2C216%2C168%5D%5D%2C%5B%22w%22%2C%5B328%2C24%2C240%2C24%5D%5D%2C%5B%22g%22%2C%5B96%2C168%2C0%5D%2C%7B%22_json_%22%3A10%7D%2C%5B%220%22%5D%5D%2C%5B%22w%22%2C%5B328%2C24%2C328%2C64%5D%5D%2C%5B%22w%22%2C%5B240%2C64%2C216%2C64%5D%5D%2C%5B%22w%22%2C%5B192%2C64%2C216%2C64%5D%5D%2C%5B%22w%22%2C%5B328%2C168%2C328%2C144%5D%5D%2C%5B%22w%22%2C%5B216%2C168%2C216%2C144%5D%5D%2C%5B%22w%22%2C%5B96%2C168%2C216%2C168%5D%5D%2C%5B%22w%22%2C%5B96%2C144%2C96%2C168%5D%5D%2C%5B%22r%22%2C%5B240%2C24%2C1%5D%2C%7B%22name%22%3A%22R3%22%2C%22r%22%3A%22100%22%2C%22_json_%22%3A18%7D%2C%5B%224%22%2C%228%22%5D%5D%2C%5B%22r%22%2C%5B328%2C96%2C0%5D%2C%7B%22name%22%3A%22R5%22%2C%22r%22%3A%2225%22%2C%22_json_%22%3A19%7D%2C%5B%223%22%2C%220%22%5D%5D%2C%5B%22r%22%2C%5B216%2C96%2C0%5D%2C%7B%22name%22%3A%22R4%22%2C%22r%22%3A%2250%22%2C%22_json_%22%3A20%7D%2C%5B%221%22%2C%220%22%5D%5D%2C%5B%22r%22%2C%5B288%2C64%2C1%5D%2C%7B%22name%22%3A%22R2%22%2C%22r%22%3A%2210%22%2C%22_json_%22%3A21%7D%2C%5B%225%22%2C%222%22%5D%5D%2C%5B%22r%22%2C%5B192%2C64%2C1%5D%2C%7B%22name%22%3A%22R1%22%2C%22r%22%3A%2225%22%2C%22_json_%22%3A22%7D%2C%5B%222%22%2C%227%22%5D%5D%2C%5B%22v%22%2C%5B96%2C96%2C0%5D%2C%7B%22name%22%3A%22V%22%2C%22value%22%3A%22dc(75)%22%2C%22_json_%22%3A23%7D%2C%5B%226%22%2C%220%22%5D%5D%2C%5B%22a%22%2C%5B304%2C64%2C0%5D%2C%7B%22color%22%3A%22magenta%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A24%7D%2C%5B%225%22%2C%224%22%5D%5D%2C%5B%22w%22%2C%5B328%2C64%2C320%2C64%5D%5D%2C%5B%22w%22%2C%5B288%2C64%2C304%2C64%5D%5D%2C%5B%22a%22%2C%5B328%2C80%2C1%5D%2C%7B%22color%22%3A%22magenta%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A27%7D%2C%5B%224%22%2C%223%22%5D%5D%2C%5B%22w%22%2C%5B328%2C64%2C328%2C80%5D%5D%2C%5B%22a%22%2C%5B216%2C80%2C1%5D%2C%7B%22color%22%3A%22magenta%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A29%7D%2C%5B%222%22%2C%221%22%5D%5D%2C%5B%22w%22%2C%5B216%2C64%2C216%2C80%5D%5D%2C%5B%22view%22%2C3.6999999999999886%2C-17.260000000000005%2C1.953125%2C%2250%22%2C%2210%22%2C%221G%22%2Cnull%2C%22100%22%2C%220.01%22%2C%221000%22%5D%5D). Open the link, and click on **DC** in the to menu to perform a DC analysis.

## A twist - floating voltage source

Sometimes you come across a circuit where a voltage source does not have either of its terminals connected to the reference node. A source like this is said to be *floating*. A floating source is a problem for the Node Voltage Method, but it is not too big of a challenge.

![Floating voltage source]({{ site.baseurl }}{% link i/node_voltage14.svg %}){: .centered :}

Battery $\text V_2$ is floating because neither terminal is connected to ground.
{: .caption :}

Let's use the Node Voltage Method and see what happens, 

* The reference node has been selected and marked with the ground symbol. 
* The other three nodes have been named and assigned node voltages, $\goldD{v_a}$, $\goldD{v_b}$ and $\goldD{v_c}$. 
* Node $a$ is an easy node, since it is connected to battery $\text V1$ and then to ground. We immediately know $\goldD{v_a = \text V_1}$. 
* The next step is to write a KCL equation for node $b$. This is the sum of the currents flowing _into_ node $b$,

<p>
$\begin{matrix}
   i_{\text R2} & + & i_{\text R_3} & + & i_{\text V_2} & = 0 \\
   \\
   \dfrac{(v_a - v_b)}{\text R2} & - & \dfrac{v_b}{\text R3} & + & i_{\text V_2}? & = 0
\end{matrix}$
    </p>

Uh oh. We have to somehow figure out the current in the floating battery, $i_{\text V_2}$. But a battery doesn't tell us what its own current is. The defining equation for the battery is $v = \text V$. There is no mention of current. There is no $i$ involved. So what do we do?

At this point we have to break away from the standard script for Node Voltage Method, and resort to our own creativity. It is okay to do this. Remember the Node Voltage script is nothing more than an efficient way to create simultaneous equations. The floating battery is giving us a little trouble, so we're going to do a little improvising. Here's the circuit again,

![Floating voltage source]({{ site.baseurl }}{% link i/node_voltage15.svg %}){: .centered :}

We make two observations,

* The voltage at node $c$ has a rigid relationship to the voltage at node $b$. 
$v_c = v_b + \text V_2$.  
Let's add this equation to our system of equations. 

* The current in battery $\text V_2$ is identical to the current in resistor $\text R1$. This gives us a way to figure out $\blueD{i_{\text V_2}}$.

$i_{\text V_2} = i_{\text R_1} = \dfrac{\text V_1 - v_c}{\text R1}$ 

 We can express $v_c$ in terms of $v_b$,

$i_{\text V_2} = \dfrac{\text V_1 - (v_b + \text V_2)}{\text R1}$

Now we can go back and finish up the KCL equation for node $b$, 

$\dfrac{(v_a - v_b)}{\text R2} - \dfrac{v_b}{\text R3} + \dfrac{\text V_1 - (v_b + \text V_2)}{\text R1} = 0$

This equation is a little more complicated than usual, but it is still just one equation in one unknown, $v_b$. Once we solve for $v_b$, we use our extra equation to immediately get $v_c$.

$v_c = v_b + \text V_2$
 
Done! We have the three node voltages. In this floating battery example, we had one easy node, one KCL equation, and one equation representing the interlocked nodes of the floating battery.

If you want to find currents, proceed with Ohm's Law as we did earlier. 

>The floating voltage source is a favorite for teachers to put on tests to see how you respond to an unexpected circuit configuration. We got through the difficulty by being observant and remembering that it is alright to come up with your own extra equation if needed. 

### Supernode

This pair of constrained floating nodes is called a *supernode*. We resorted to our creativity to work through the puzzle. Some textbooks add extra formal steps to the Node Voltage Method to account for a supernode. But I like to keep the steps simple and allow myself to mess around and come up with an extra constraint equation when needed. 

## Summary
{: .no_toc :}

The Node Voltage Method is one of two efficient methods of solving a circuit.

**Node voltage method**  
* Assign a reference node (ground).
* Assign node voltage names to the remaining nodes.
* Solve the easy nodes, the ones connected to ground through a voltage source.
* Write Kirchhoff's Current Law at each node using node voltages.
* Solve the resulting system of equations to find the node voltages.
* Find the currents using Ohm's Law.

If the circuit includes a floating voltage source, use your wits to come up with an extra equation to account for the unknown current in the voltage source.
