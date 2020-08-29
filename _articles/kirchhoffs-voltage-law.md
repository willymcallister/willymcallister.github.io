---
layout: article
title:  "Kirchhoff's Voltage Law"
author: Willy McAllister
comments: true
---

Kirchhoff's Laws for current and voltage are at the heart of circuit analysis. With these two laws, plus the $i$-$v$ equations like Ohm's Law for resistors, we have the basic tool set we need to analyze circuits.

This article covers Kirchhoff's Voltage Law, also known as KVL. KVL is the companion of [Kirchhoff's Current Law]({{ site.baseurl }}{% link _articles/kirchhoffs-current-law.md %}). 

You should be familiar with the definitions of [node, distributed node, branch, and loop]({{ site.baseurl }}{% link _articles/circuit-terminology.md %}). 

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

### Where we're headed 
{:.no_toc}

Kirchhoff's Voltage Law for voltages around a loop,

$\displaystyle \sum_n v_n = 0$

----

## Voltage around a loop

Our example circuit has four resistors and a voltage source. We will solve this from scratch using Ohm's Law. Then we'll look at the result and make some observations. 

The first step in solving this circuit is to figure out the current. Then we will find the voltages across each individual resistor.

![Example circuit]({% link i/kvl1.svg %}){: .centered :}

We recognize this as a series circuit. There is only one current flowing, $\blueD i$, through all five elements. To find $i$, the four series resistors can be reduced to a single equivalent resistor,

$R_{series} = 100 + 200 + 300 + 400 = 1000\,\Omega$

Using Ohm's Law, the current is,

$i = \dfrac{V}{R_{series}} = \dfrac{20\,\text V}{1000\,\Omega} = 0.020\,\text A = 20 \,\text{mA}$

Now we know the current. That let's us find the voltages across the four resistors. Go back to the original schematic and add voltage labels to all five elements, 

![Example circuit with voltage labels]({% link i/kvl2.svg %}){: .centered :} 

Apply Ohm's Law four times to find the voltage across each resistor,

$v_{\text{R}} \,\,= i\,\text R$  
$v_{\text{R1}} = 20\,\text{mA} \cdot 100\,\Omega = +2\,\text{V}$  
$v_{\text{R2}} = 20\,\text{mA} \cdot 200\,\Omega = +4\,\text{V}$  
$v_{\text{R3}} = 20\,\text{mA} \cdot 300\,\Omega = +6\,\text{V}$  
$v_{\text{R4}} = 20\,\text{mA} \cdot 400\,\Omega = +8\,\text{V}$

The circuit is now solved. We know the current and all voltages.  

We can write the voltages for the resistors and the source on the schematic. These five voltages are referred to as *element voltages*. (The circuit nodes get names, $\greenE{a}$ to $\greenE{e}$, so we can talk about them.)

![Example circuit with voltage values]({% link i/kvl3.svg %}){: .centered :} 

Let's do a quick check. Add up the voltages across the resistors, 

$2\,\text{V} + 4\,\text{V} + 6\,\text{V} + 8\,\text{V} = 20 \,\text V$

The individual resistor voltages add up to the source voltage. This makes sense, and it confirms our calculations.

### Loop procedure

Now we add up voltages again, using a slightly different procedure, by "going around the loop." There's no new science here, we are just rearranging the same computation.

Step 1. Pick a starting node. 

Step 2. Pick a direction to travel around the loop (clockwise or counterclockwise).

Step 3. Walk around the loop. Include element voltages in a growing sum. As you encounter each new element, look at the sign of the voltage label as you enter the element.
* If the sign is $+$ there is a voltage *drop* going through the element. *Subtract* the element voltage. 
* If the sign is $-$ there is a voltage *rise* going through the element. *Add* the element voltage. 

Pro tip: It helps to imagine a tiny version of yourself standing at the starting node and walking around the circuit from element to element.

<details>
<summary>alternative rule</summary>
<p>Some textbooks teach a different sign rule for walking the loop. The rule is equivalent to the one above, and gives exactly the same answer. </p>

<p>When you encounter a new element, look at the voltage sign as you enter the element.</p>  

<p><ul>
<li>If the sign is $+$, add the element voltage.</li> 
<li>If the sign is $-$, subtract the element voltage.</li>
</ul>
</p>

<p>This rule does not have the idea of voltage rise/drop, but may be simpler to remember. You can choose how you want to think about it. The key thing is to be consistent when you apply your chosen rule.</p>
</details>

Step 4. Continue around the loop until you reach the starting point, including element voltages all the way around.

### Use the loop procedure

Let's follow the loop procedure step-by-step with the example circuit. 

Step 1. Begin in the lower left, at node $\greenE{a}$.

Step 2. Walk clockwise. 

![Example circuit with voltage values]({% link i/kvl3.svg %}){: .centered :} 

Step 3. The first element we come to is the $20\,\text V$ source. The first voltage sign we encounter is a $-$ minus sign. That tells us there is going to be a voltage *rise* going through this element. So we initialize the loop sum by *adding* the source voltage,  

$+20\,\text V \,...$

The next element we encounter is the $100\,\Omega$ resistor. Its nearest voltage sign is $+$. That tells us there will be a voltage *drop* going through the resistor. We *subtract* the element voltage from the growing sum,

$+ 20\,\text V - 2\,\text V \,...$

Next is the $200\,\Omega$ resistor, and again we encounter a $+$ sign, so we subtract this voltage,

$+ 20\,\text V - 2\,\text V - 4\,\text V \,...$

We complete the loop with the addition of two more resistor voltages,

$+ 20\,\text V - 2\,\text V - 4\,\text V - 6\,\text V \,...$

$+ 20\,\text V - 2\,\text V - 4\,\text V - 6\,\text V - 8\,\text V$

(Check the circuit diagram, make sure I got the last two $-$ signs right.)

Step 4. Done. We made it back home to node $\greenE{a}$. What does this add up to?  

$+ 20\,\text V - 2\,\text V - 4\,\text V - 6\,\text V - 8\,\text V = 0$

The sum of voltages going around the loop is $0$. 

We started and ended at the same node, so it should make sense that the ending voltage is the same as the starting voltage. On your "walk" around the loop you climbed up voltage rises and dropped down voltage drops. By the time you get back to where you started, all the ups and downs cancel out. It's like hiking up and down a mountain and ending up back at your campsite at the end of the day. Your total change of elevation for the day is $0$. 

We'll do another example, with variable names instead of numerical values. The following familiar schematic is labeled with voltages and node names. Look carefully, the voltage polarity signs are arranged in a way you might not expect. All the voltage arrows point in the same direction around the loop. This will reveal a cool property of loops.

![Schematic with all voltage labels pointing the same direction]({% link i/kvl4.svg %}){: .centered :} 

Let's walk around the loop again, adding up voltages as we go. Pick node $\greenE{a}$ in the lower left as the starting point. Walk clockwise around the loop (an arbitrary choice, either way works). Starting at node $\greenE{a}$, going up, we encounter a minus sign on the voltage source. That means there is going to be a voltage *rise* of $+v_{ab}$ going through the voltage source. Because it's a voltage rise, this element voltage gets a $+$ sign in the loop sum,

$+v_{\text{ab}} \, ...$

Continue around the loop from node $\greenE{b}$ to $\greenE{c}$ to $\greenE{d}$ to $\greenE{e}$, and finish back home at node $\greenE{a}$. Append resistor voltages to the growing sum along the way. The polarity labels on the resistors are arranged so we always encounter a $-$ sign as we approach each resistor. So the resistor voltages all go into the loop sum with a $+$ sign. The final loop sum looks like this,

$+v_{\text{ab}} + v_{\text{R1}} + v_{\text{R2}} + v_{\text{R3}} + v_{\text{R4}}$

What does this add up to? Let's reason it out. 

The loop starts and ends at the same node, so the starting and ending voltages are identical. We went around the loop, adding voltages, and we end up back at the same voltage. The only way that could be true is if all the voltages add up to zero,

$v_{\text{ab}} + v_{\text{R1}} + v_{\text{R2}} + v_{\text{R3}} + v_{\text{R4}} = 0$

{% capture summary %}How can positive voltages add up to zero?{% endcapture %}  
{% capture details %}  
How can a bunch of positive voltages add up to zero? The answer is: they are not all positive. The voltage polarity signs you add to the schematic at the beginning of the problem are *reference directions*. A voltage variable named $v_1$ can have a positive or negative value. When you combine the voltage polarity label with the sign of the voltage variable, you end up with the actual voltage. By the time you finish the analysis, one or more of the voltages around every loop will be negative. The voltage polarities you write on the schematic at the beginning don't have to be "right". They can point either way. The voltage signs sort themselves out during the calculation.

This statement may sound like gobbledygook the first time you read it. Eventually the idea will sink in, so be patient if you head is spinning.  
{% endcapture %}{% include details.html %} 

<details>
<summary>What happens if you go around the loop the other way?</summary>
<p>In the two examples above, we walked the loop in the clockwise direction. On your own, do this example again but walk in the opposite direction (counterclockwise).</p>
<details>
<summary>hint</summary>
<p>Walking counterclockwise, when you encounter each element, you will come to a $+$ sign first. Check the rules of the loop procedure above to review how to pick the sign of each element voltage in the growing loop sum.</p>
</details>
<details>
<summary>show answer</summary>
<p>Going counterclockwise, each element voltage goes into the loop sum with a $-$ sign.</p>

<p>$ -v_{\text{R4}} - v_{\text{R3}} - v_{\text{R2}} - v_{\text{R1}} - v_{\text{ab}}  = 0$</p>

<p>We can factor and reorder this expression so it looks just like the clockwise equation,</p>

<p>$ - (v_{\text{R4}} + v_{\text{R3}} + v_{\text{R2}} + v_{\text{R1}} + v_{\text{ab}})  = 0$</p>

<p>$v_{\text{ab}} + v_{\text{R1}} + v_{\text{R2}} + v_{\text{R3}} + v_{\text{R4}} = 0$</p>

<p>It does not matter which way you walk around the loop. You get the same loop equation either way.</p>
</details>
</details>

## Kirchhoff's Voltage Law

This observation about voltages around a loop adding up to zero is nicely captured as Kirchhoff's Voltage Law.

**The sum of voltages around a loop is zero.**

$\large\displaystyle \sum_n v_n = 0$

The index $n$ counts the element voltages around the loop.

{% capture summary %}What is the big zig-zag symbol?{% endcapture %}  
{% capture details %}  
$\sum$ is the Greek letter capital Sigma. In mathematical notation it indicates the <em>summation</em> operation. It is used to sum up a number of related quantities. The expression

$v_1 + v_2 + v_3 + v_4 + v_5 = 0$

can be written compactly as,

$\displaystyle \sum_{n=1}^{n=5} v_n = 0$

It is understood that the index, $n$, runs from lower limit $n=1$ to upper limit $n=5$, stepping by $1$. If the summation symbol doesn't have an index written out, assume the sum includes "all of them". 
{% endcapture %}{% include details.html %} 

You can say Kirchhoff's Voltage Law another way,

**The sum of voltage rises equals the sum of voltage drops around a loop.**

$\large \displaystyle \sum v_{rise} = \sum v_{drop}$

This means the same thing as the first version of the law. It just sorts the terms into two groups, rises and drops.

Kirchhoff's Voltage Law has some nice properties,

* You can trace a loop starting from *any* node. From any starting point, the voltages add up to zero, as long as you go all the way around. 
* You can go in either direction, clockwise or counterclockwise. KVL still works. 
* If a circuit has multiple loops, KVL is true for every loop.

## Concept check

**What is $v_{\text R3}$?**  

![Concept check loop]({% link i/kvl5.svg %})

Tip: Watch out for the voltage arrow directions!

$v_{\text R3} = $ \_\_\_\_\_ $\text V$

<details>
<summary>show answer</summary>
<p>$v_{\text R3} = +6\,\text V$</p>
<p>Use Kirchoff's Voltage Law to solve this problem.</p>

<p>$\displaystyle \sum_n v_n = 0$</p>

<p>Pick a node to start from. Node $\text A$ is as good as any. We will walk clockwise around the loop. </p>

<p>The voltage arrows are all jumbled up. They don't all point in the same direction going around the loop. So as we write this next equation, we will be <em>very careful</em> to pay close attention to the voltage polarity of each element. Consult the <em>loop procedure</em> to remind yourself which voltage arrow direction gets which sign.</p>

<p>$+15 + (-5) + (-3) + (-v_{\text{R3}}) + (-1) = 0$</p>

<p>Getting the signs right is the hard part. It's <em>the</em> essential skill when using Kirchhoff's Laws. </p>

<p>$+15 -5 -3 + (-1) = v_{\text{R3}} $</p>

<p>$v_{\text{R3}} = +6 \,\text V$</p>

<p>Check the voltage arrow for $\text R3$. It is pointing up, from node $\greenE{e}$ toward node $\greenE{d}$. The positive result for $v_{\text{R3}}$ means node $\greenE{d}$ is $6$ volts higher than node $\greenE{e}$.</p>
</details>

More practice: Do this problem again, but walk around the loop in the opposite direction and construct a different KVL equation. You should get the same answer.

## Summary
{:.no_toc}

We how have two new friends,

Kirchhoff's Current Law for currents at a node,

$\large\displaystyle \sum_n i_n = 0$

Kirchhoff's Voltage Law for voltages around a loop,

$\large\displaystyle \sum_n v_n = 0$

Our new friends sometimes go by their initials, KCL and KVL.

It's important to pay close attention to voltage and current signs if you want correct answers. This can be a tedious process. It requires attention to detail. It is a core skill of every good electrical engineer.

## Advanced: Kirchhoff's Laws are derived from Maxwell's Equations

Kirchhoff's Laws are actually approximations derived from Maxwell's Equations for electromagnetism. Kirchhoff's Laws apply when the size of the components in a circuit are much smaller than the wavelength of the signals passing through the circuit. This simplification applies to just about every circuits you will come across in your beginning studies of electrical engineering.

If you would like to learn more about this derivation, good references are,

"Foundations of Analog and Digital Electronic Circuits", by Anant Agarwal and Jeffery H. Lang, Elsevier Inc, 2005, Appendix 2A.

"The Design of CMOS Radio-Frequency Integrated Circuits, 2nd Edition, by Thomas H. Lee, Cambridge University Press, Chapter 6, Distributed Systems.