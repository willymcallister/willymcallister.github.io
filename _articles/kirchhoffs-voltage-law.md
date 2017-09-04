---
layout: article
title:  "Kirchhoff's Voltage Law"
author: Willy McAllister
comments: true
---

Kirchhoff's Laws for current and voltage are at the heart of circuit analysis. With these two laws, plus the $i$-$v$ equations like Ohm's Law for resistors, we have the basic tool set we need to analyze circuits.

This article talks about Kirchhoff's Voltage Law, also known as KVL. 

You should be familiar with the definitions of [node, distributed node, branch, and loop]({{ site.baseurl }}{% link _articles/circuit-terminology.md %}). 

KVL is the companion of [Kirchhoff's Current Law]({{ site.baseurl }}{% link _articles/kirchhoffs-current-law.md %}). 

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

### Where we're headed 
{:.no_toc}

Kirchhoff's Voltage Law for voltages around a loop,

$\large\displaystyle \sum_n v_n = 0$

----

## Voltage around a loop

Our example circuit has four resistors and a voltage source. We will solve this from scratch using Ohm's Law. Then we look at the result and make some observations. 

The first step in solving this circuit is to figure out the current. Then we will find the voltages across each individual resistor.

![Example circuit](https://ka-perseus-images.s3.amazonaws.com/efc81d92860a31695ca50439588a03c4657f70e6.svg){: .centered :}

We recognize this as a series circuit. There is only one current flowing, $\blueD i$, through all five elements. To find $i$, the four series resistors can be reduced to a single equivalent resistor:

$R_{series} = 100 + 200 + 300 + 400 = 1000\,\Omega$

Using Ohm's Law, the current is:

$i = \dfrac{V}{R_{series}} = \dfrac{20\,\text V}{1000\,\Omega} = 0.020\,\text A = 20 \,\text{mA}$

Now we know the current. Next we find the voltages across the four resistors. Go back to the original schematic and add voltage labels to all five elements: 

![](https://ka-perseus-images.s3.amazonaws.com/2c4987a0ba27eb7ed7c5b363d9fc6609f12cc105.svg){: .centered :}

Apply Ohm's Law four times to find the voltage across each resistor:

$v_{\text{R}} \,\,= i\,\text R$  
$v_{\text{R1}} = 20\,\text{mA} \cdot 100\,\Omega = +2\,\text{V}$  
$v_{\text{R2}} = 20\,\text{mA} \cdot 200\,\Omega = +4\,\text{V}$  
$v_{\text{R3}} = 20\,\text{mA} \cdot 300\,\Omega = +6\,\text{V}$  
$v_{\text{R4}} = 20\,\text{mA} \cdot 400\,\Omega = +8\,\text{V}$

The circuit is now solved. We know the current and all voltages.  

We can write the voltages for the resistors and the source on the schematic. These five voltages are referred to as *element voltages*. (The circuit nodes get names, $\greenE{\text a}$ to $\greenE{\text e}$, so we can talk about them.)

![](https://ka-perseus-images.s3.amazonaws.com/ffdd00057828a3dd41a6ed563b2da30a22add4bd.svg){: .centered :}

Let's do a quick check. Add up the voltages across the resistors, 

$2\,\text{V} + 4\,\text{V} + 6\,\text{V} + 8\,\text{V} = 20 \,\text V$

The individual resistor voltages add up to the source voltage. This makes sense, and confirms our calculations.

### Procedure: Adding element voltages around a loop

Now we add up voltages again, using a slightly different procedure: by "going around the loop." There's no new science here, we are just rearranging the same computation.

**Step 1.** Pick a starting node. 

**Step 2.** Pick a direction to travel around the loop (clockwise or counterclockwise).

**Step 3.** Walk around the loop.

Include element voltages in a growing sum according to these rules:  

* When you encounter a new element, look at the voltage sign as you enter the element.
* If the sign is $+$, then there will be a voltage *drop* going through the element. *Subtract* the element voltage. 
* If the sign is $-$, then there will be a voltage *rise* going through the element. *Add* the element voltage. 

<details>
<summary>hint</summary>
<p>It actually helps to imagine a tiny version of yourself standing at the starting node and walking around the circuit from element to element.</p>
</details>

<details>
<summary>alternative rule</summary>
<p>Some textbooks teach a different sign rule for walking the loop. The rule is equivalent to the one above, and gives exactly the same answer. </p>

<p>When you encounter a new element, look at the voltage sign as you enter the element.</p>  

<ul>
<li>If the sign is $+$, add the element voltage.</li> 
<li>If the sign is $-$, subtract the element voltage.</li>
</ul> 

<p>This rule does not have the idea of voltage rise/drop, but may be simpler to remember. You can choose how you want to think about it. The key thing is to be consistent when you apply your chosen rule.</p>
</details>

**Step 4.** Continue around the loop until you reach the starting point, including element voltages all the way around.

### Using the loop procedure

Let's follow the procedure step-by-step. 

**Step 1.** Start at the lower left at node $\greenE{\text a}$.

**Step 2.** Walk clockwise. 

![](https://ka-perseus-images.s3.amazonaws.com/ffdd00057828a3dd41a6ed563b2da30a22add4bd.svg){: .centered :}

**Step 3.** The first element we come to is the voltage source. The first voltage sign we encounter is a $-$ minus sign, so there is going to be a voltage *rise* going through this element. Consulting the procedure step 3., we initialize the loop sum by *adding* the source voltage,  

$+20\,\text V \,...$

The next element we encounter is the $100\,\Omega$ resistor. Its nearest voltage sign is $+$. Consult the procedure again: this time we *subtract* the element voltage from the growing sum,

$+ 20\,\text V - 2\,\text V \,...$

Next is the $200\,\Omega$ resistor, and again we encounter a $+$ sign, so we subtract this voltage,

$+ 20\,\text V - 2\,\text V - 4\,\text V \,...$

We complete the loop with the addition of two more resistor voltages,

$+ 20\,\text V - 2\,\text V - 4\,\text V - 6\,\text V \,...$

$+ 20\,\text V - 2\,\text V - 4\,\text V - 6\,\text V - 8\,\text V$

(Check the circuit diagram, make sure I got the last two $-$ signs right.)

**Step 4.** Done. We made it back home to node $\greenE{\text a}$. What does this add up to?  

$+ 20\,\text V - 2\,\text V - 4\,\text V - 6\,\text V - 8\,\text V = 0$

The sum of voltages going around the loop is $0$. We started and ended at the same node, so it makes sense that the starting and ending voltage are the same. On your "walk" you climb up voltage rises and dropped down voltage drops. By the time you get back to where you started, they all cancel out. This happens because electric force is *conservative*. That means there is no gain or loss of energy if you return to the same place you started. It's like hiking up and down a mountain and ending up back at your campsite at the end of the day. Your total change of elevation for the day is $0$. 

We'll do another example, this time with variable names instead of numerical values. The following familiar schematic is labeled with voltages and node names. Look carefully, the voltage polarities are rearranged in a way you might not expect. All the arrows point in the same direction around the loop. This will reveal a cool property of loops.

![](https://ka-perseus-images.s3.amazonaws.com/f281164686f22113542f59584a3fbbfec0f271be.svg){: .centered :}

Let's take another walk around the loop, adding up voltages as we go. Our starting point is node $\greenE{\text a}$ in the lower left corner. Our walk goes clockwise around the loop (an arbitrary choice, either way works). Starting at node $\greenE{\text a}$, going up, we first encounter a minus sign on the voltage source, which says there is going to be a voltage *rise* of $v_{ab}$ volts going through the voltage source. Because it is a voltage rise, this element voltage gets a $+$ sign when we include it in the loop sum,

$+v_{\text{ab}} \, ...$

Continue around the loop from node $\greenE{\text b}$ to $\greenE{\text c}$ to $\greenE{\text d}$ to $\greenE{\text e}$, and finish back home at node $\greenE{\text a}$. Append resistor voltages to the loop sum along the way. The polarity labels on all the resistors are arranged so we always encounter a $-$ sign as we first approach each resistor. So the resistor voltages all go into the loop sum with a $+$ sign. The final loop sum looks like this:

$+v_{\text{ab}} + v_{\text{R1}} + v_{\text{R2}} + v_{\text{R3}} + v_{\text{R4}}$

What does this add up to? Let's reason it out. 

The loop starts and ends at the same node, so the starting and ending voltages are identical. We went around the loop, adding voltages, and we end up back at the same voltage. The only way that could be true is if all the voltages add up to zero,

$v_{\text{ab}} + v_{\text{R1}} + v_{\text{R2}} + v_{\text{R3}} + v_{\text{R4}} = 0$

<details>
<summary>What happens if you go around the loop the other way?</summary>
<p>In the two examples above, we walked the loop in the clockwise direction. On your own, do this example again but walk in the opposite direction (counterclockwise).</p>
<details>
<summary>hint</summary>
<p>Walking counterclockwise, when you encounter each element, you will come to a $+$ sign first. Check the "adding voltages around a loop" procedure above to see how to include each element voltage in the growing loop sum.</p>
</details>
<details>
<summary>show answer</summary>
<p>Each element voltage gets a $-$ sign in the loop sum. </p>

<p>$ -v_{\text{R4}} - v_{\text{R3}} - v_{\text{R2}} - v_{\text{R1}} - v_{\text{ab}}  = 0$</p>

<p>Extra fun: Notice we can factor and reorder this expression so it looks just like the clockwise equation,</p>

<p>$ - (v_{\text{R4}} + v_{\text{R3}} + v_{\text{R2}} + v_{\text{R1}} + v_{\text{ab}})  = 0$</p>

<p>$v_{\text{ab}} + v_{\text{R1}} + v_{\text{R2}} + v_{\text{R3}} + v_{\text{R4}} = 0$</p>

<p>In the end, it does not matter which way you walk around the loop.</p>
</details>
</details>

This observation about voltages around a loop always adding up to zero is nicely captured as Kirchhoff's Voltage Law.

## Kirchhoff's Voltage Law

**The sum of voltages around a loop is zero.**

$\large\displaystyle \sum_n v_n = 0$

The index $n$ counts the element voltages around the loop.

<details>
<summary>What is that funny zig-zag symbol?</summary>
<p>The $\sum$ symbol is the Greek letter capital Sigma. In mathematical notation it is the <em>summation</em> operation. It adds up a series of related quantities. The expression,</p>

<p>$v_1 + v_2 + v_3 + v_4 = 0$</p>

<p>can be written compactly as</p>

<p>$\displaystyle \sum_{n=1}^{n=4} v_n = 0$</p>

<p>Index $n$ goes from the lower limit $n=1$ to the upper limit $n=4$, stepping by $1$.</p>
</details>

You can say Kirchhoff's Voltage Law another way,

**The sum of voltage rises equals the sum of voltage drops around a loop.**

$\large \displaystyle \sum v_{rise} = \sum v_{drop}$

Kirchhoff's Voltage Law has some nice properties:

* You can trace a loop starting from *any* node. From any starting point, the voltages add up to zero, as long as you go all the way around. 
* You can go in either direction, clockwise or counterclockwise. KVL still works. 
* If a circuit has multiple loops, KVL is true for every loop.

<details>
<summary>Are you saying the voltages are all positive?</summary>
<p>You may wonder: How can the voltages all be positive if KVL says they add up to zero? The voltage polarity signs are just <em>reference directions</em>. If a voltage is named $v_1$, that's a variable name. It doesn't imply $v_1$ is a positive number. It can have a positive or negative value. By the time you finish the analysis, one or more of the voltages around every loop will be negative. You don't have to have the voltage polarities "right" at the very beginning. The signs of the actual voltages sort themselves out during the calculations.</p>
</details>

## Kirchhoff's Voltage Law - concept check

problem 1  
**What is $v_{\text R3}$?**  

Pro Tip: Check the first voltage sign as you arrive at each element during your walk around the loop. 

![Problem 1 loop](https://ka-perseus-images.s3.amazonaws.com/5abe032a381c51901584ea8315f489a45528332a.svg)

$v_{\text R3} = $ \_\_\_\_\_ $\text V$

<details>
<summary>show answer</summary>
<p>$v_{\text R3} = +6\,\text V$</p>
<p>Use Kirchoff's Voltage Law to solve this problem.</p>

<p>$\displaystyle \sum_n v_n = 0$</p>

<p>Pick a node to start from. Node $\text A$ is as good as any. We will walk clockwise around the loop. </p>

<p>The voltage arrows are all jumbled up. They don't all point in the same direction going around the loop. So as we write this next equation, we will be <em>very careful</em> to pay close attention to the voltage polarity of each element. Consult the <em>Procedure: adding element voltages around a loop</em> to remind yourself which voltage arrow direction gets which sign.</p>

<p>$+15 + (-5) + (-3) + (-v_{\text{R3}}) + (-1) = 0$</p>

<p>Getting the signs right is the hard part. It's <em>the</em> essential skill when using Kirchhoff's Laws. </p>

<p>$+15 -5 -3 + (-1) = v_{\text{R3}} $</p>

<p>$v_{\text{R3}} = +6 \,\text V$</p>

<p>Check the voltage arrow for $\text R3$. It is pointing up, from node $\greenE{\text e}$ towards node $\greenE{\text d}$. The positive result for $v_{\text{R3}}$ means node $\greenE{\text d}$ is $6$ volts higher than node $\greenE{\text e}$.</p>

<p>More practice: Do this problem again, but walk around the loop in the opposite direction and construct a different KVL equation. You should get the same answer.</p>
</details>

## Advanced: Kirchhoff's Laws are derived from Maxwell's Equations

Kirchhoff's Laws are actually approximations derived from Maxwell's Equations for electromagnetism. Kirchhoff's Laws apply when the size of the components in a circuit are much smaller than the wavelength of the signals passing through the circuit. This simplification applies to just about every circuits you will come across in your beginning studies of electrical engineering.

If you would like to learn more about this derivation, good references are,

>"Foundations of Analog and Digital Electronic Circuits", by Anant Agarwal and Jeffery H. Lang, Elsevier Inc, 2005, Appendix 2A.

>"The Design of CMOS Radio-Frequency Integrated Circuits, 2nd Edition, by Thomas H. Lee, Cambridge University Press, Chapter 6, Distributed Systems.

## Summary
{:.no_toc}

We how have two new friends,

Kirchhoff's Current Law for currents at a node,

$\large\displaystyle \sum_n i_n = 0$

Kirchhoff's Voltage Law for voltages around a loop,

$\large\displaystyle \sum_n v_n = 0$

Our new friends sometimes go by their initials, KCL and KVL.

It's important to pay close attention to voltage and current signs if you want correct answers. This can be a tedious process. It requires attention to detail. It is a core skill of every good electrical engineer.

