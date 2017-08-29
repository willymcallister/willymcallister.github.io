---
layout: article
title:  "Delta-Wye resistor networks"
author: Willy McAllister
comments: true
---

Sometimes when you are simplifying a resistor network, you get stuck. Some resistor networks cannot be simplified using the usual series and parallel combinations. This situation can often be handled by trying the $\Delta - \text Y$ *transformation*, or 'Delta-Wye' transformation. 

Written by Willy McAllister.

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

The names *Delta* and *Wye* come from the shape of the schematics, which resemble letters. The transformation allows you to replace three resistors in a $\Delta$ configuration by three resistors in a $\text Y$ configuration, and the other way around. 

![Delta and Wye configurations](https://ka-perseus-images.s3.amazonaws.com/801966b0b8e1e43a390d1975a0bdee3d3b59259f.svg){: .centered }

The $\Delta - \text Y$ drawing style emphasizes these are 3-terminal configurations. Something to notice is the different number of nodes in the two configurations. $\Delta$ has three nodes, while $\text Y$ has four nodes (one extra in the center).

The configurations can be redrawn to square up the resistors. This is called a $\pi - \text T$ configuration,

![pi and T configurations](https://ka-perseus-images.s3.amazonaws.com/a88345766c62854d2c426c1c8f034f3ca7767e01.svg){: .centered }

The $\pi - \text T$ style is what you might find in a typical schematic. The transformation equations apply to $\pi - \text T$ as well.

You may also hear the $\text Y$ configuration called a *star*.

## Transformations

For the transformation to be valid, the resistance between each pair of terminals must be the same before and after. 

![Delta and Wye configuration with labels.](https://ka-perseus-images.s3.amazonaws.com/05cc24f20113bc6937dec9b8e85ee09e032d2a66.svg){: .centered }

<p class="caption ">Diagram 1 $- \,\Delta$ and $\text Y$ configurations, with labels.</p>

It is possible to write three simultaneous equations to capture this constraint. 

Consider terminals $x$ and $y$. Assume terminal $z$ isn't connected to anything, so the current in $\text R3$ is $0$. We can make this assumption because we know resistors are [linear]({{ site.baseurl }}{% link _articles/linearity.md %}) devices and we can apply the principle of [superposition]({{ site.baseurl }}{% link _articles/superposition.md %}). (If you haven't studied linearity and superposition yet, please trust me for now that the assumption is a good one.) 

In the $\Delta$ configuration, the resistance between  $x$ and $y$ is $Rc$ in parallel with $Ra +Rb$. On the $\text Y$ side, the resistance between $x$ and $y$ is the series combination $R1+R2$ (because we assumed terminal $z$ isn't connected to anything, so $\text R1$ and $\text R2$ carry the same current and can be considered in series). 

We set these equal to each other to get the first of three simultaneous equations,

$R1+R2 = \dfrac{Rc\,(Ra+Rb)}{Rc+(Ra+Rb)}$

We can write two similar expressions for the other two pairs of terminals. Notice the $\Delta$ resistors have letter names, $(Ra$, etc.$)$ and the $\text Y$ resistors have number names, $(R1$, etc.$)$.

After solving the simultaneous equations (not shown), we get the equations to transform either network into the other.

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

Let's derive the $\text Y$ equivalent by using the $\Delta \rightarrow \text Y$ equations.

$R1 = \dfrac{Rb\,Rc}{Ra + Rb + Rc} = \dfrac{3 \cdot 3}{3 + 3 + 3} = 1\,\Omega$

$R2 = \dfrac{Ra\,Rc}{Ra + Rb + Rc} = \dfrac{3 \cdot 3}{3 + 3 + 3} = 1\,\Omega$

$R3 = \dfrac{Ra\,Rb}{Ra + Rb + Rc} = \dfrac{3 \cdot 3}{3 + 3 + 3} = 1\,\Omega$

![](https://ka-perseus-images.s3.amazonaws.com/c6789351f8a5107cacd2c0010b937032f073ac73.svg)

Going in the other direction, from $\text Y \rightarrow\Delta$, looks like this,

$Ra = \dfrac{R1\,R2 + R2\,R3 + R3\,R1}{R1}  = \dfrac{1\cdot1 + 1\cdot1 + 1\cdot1}{1} = 3\,\Omega$

$Rb = \dfrac{R1\,R2 + R2\,R3 + R3\,R1}{R2}  = \dfrac{1\cdot1 + 1\cdot1 + 1\cdot1}{1} = 3\,\Omega$

$Rc = \dfrac{R1\,R2 + R2\,R3 + R3\,R1}{R3}  = \dfrac{1\cdot1 + 1\cdot1 + 1\cdot1}{1} = 3\,\Omega$

## Example 2 - less tidy

Now for an example that's a little less tidy. Let's find the equivalent resistance between the top and bottom terminals.

![](https://ka-perseus-images.s3.amazonaws.com/5d6b711e0f765ad7e88a6d18b39bf20850ac8e18.svg){: .centered }

Try as we might, there are no resistors in series or in parallel. But we are not stuck. First, let's redraw the schematic to emphasize we have two $\Delta$ connections stacked one on top of the other. 

![](https://ka-perseus-images.s3.amazonaws.com/ed2ef2bdcfab1d6c66ae3bc17629a2c783d3ec64.svg){: .centered }

Now select one of the $\Delta$'s to convert to a $\text Y$. We will perform a $\Delta \rightarrow \text Y$ transformation and see if it breaks the logjam, opening up other opportunities for simplification. 
We go to work on the bottom $\Delta$ (an arbitrary choice). 

*Very carefully* label the resistors and nodes. To get the right answers from the transformation equations, it is critical to keep the resistor names and node names straight. $Rc$ must connect between nodes $x$ and $y$, and so on for the other resistors. Refer to *Diagram* *1* above for the labeling convention.

![](https://ka-perseus-images.s3.amazonaws.com/a656d249bff7a459daa9df0ebcb2c9b84f318f6d.svg){: .centered }

When we perform the transform on the lower $\Delta$, the three black $\Delta$ resistors will be replaced by three new gray $\text Y$ resistors, like this:

![](https://ka-perseus-images.s3.amazonaws.com/b0c3af9ae2f46f3efa5620d14b6886971eeac777.svg){: .centered }

See if you can perform the transform yourself before peeking ahead at the answer. Double check to be sure you select the right set of transform equations.

**Compute new resistor values to convert the $\Delta$ to a $\text Y$**  
**Draw the complete circuit.**  

<details>
<summary>Show the Delta to Y transformation.</summary>
<p>Apply the transformation equations for $\Delta \rightarrow \text Y$.</p>
<p>
$R1 = \dfrac{Rb\,Rc}{Ra + Rb + Rc} = \dfrac{5\cdot 3}{4 + 5 + 3} = \dfrac{15}{12}= 1.25\,\Omega$</p>

<p>$R2 = \dfrac{Ra\,Rc}{Ra + Rb + Rc} = \dfrac{4\cdot 3}{4 + 5 + 3} = \dfrac{12}{12}= 1\,\Omega$</p>

<p>$R3 = \dfrac{Ra\,Rb}{Ra + Rb + Rc}= \dfrac{4\cdot 5}{4 + 5 + 3} = \dfrac{20}{12}= 1.66\,\Omega$
</p>

<p>Now substitute the equivalent $\text Y$ network in place of the $\Delta$ resistors. Make sure the $\text Y$ resistor names connect between the proper node names. Refer to <em>Diagram 1</em> above for the labeling convention.</p>

<p>And voilà! Here's our circuit with the substituted $\text Y$ resistors in place of the bottom $\Delta$. The circuit now has series and parallel resistors where there were none before. </p>

<p class="centered">
<img src="https://ka-perseus-images.s3.amazonaws.com/f4a19d613dccddb714e8ca1e8ba002dccc7e628d.svg">
</p>

</details>

Here's the transformed schematic redrawn to square up the symbols into a familiar style.

<details>
<summary>Show the completed circuit.</summary>
<img src="https://ka-perseus-images.s3.amazonaws.com/8b336f68ba2a02ea0c5a9b25b4eb91c0e041bead.svg">
</details>

Now we continue simplification using series and parallel resistor combinations until we get down to a single resistor between the terminals, just as we did before in the article on Resistor Network Simplification.

On the left branch, $3.125 + 1.25 = 4.375 \,\Omega$  
On the right branch, $4 + 1 = 5\,\Omega$

![](https://ka-perseus-images.s3.amazonaws.com/17c405dba966e5cfeecb4c98cd4b5cfe7e4b1ee0.svg){: .centered }

The two parallel resistors combine as 

$4.375\,\|\|\, 5 = \dfrac{4.375 \cdot 5}{4.375 + 5} = 2.33\,\Omega$  

And we finish by adding the last two series resistors together,

$R_{equivalent} = 2.33 + 1.66 = 4\,\Omega$

 ![](https://ka-perseus-images.s3.amazonaws.com/0d5b884ea84fd26f90545a69649f014388074063.svg){: .centered }

## Summary
{:.no_toc}

$\Delta - \text Y$ transformations are another tool in your bag of tricks for simplifying circuits prior to detailed analysis.

You don't need to memorize the transformation equations. If the need arises, you can look them up.

For the curious: A full derivation of the transform equations is in this [article]({{ site.baseurl }}{% link _articles/delta-wye-derivations.md %}).



