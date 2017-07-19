---
layout: article
title:  "Simplifying resistor networks"
author: Willy McAllister
comments: true
youtubeID: pUzHSQa6lko
---

Complicated resistor networks can be simplified by identifying series and parallel resistors within the context of a larger circuit. This article describes a systematic way to simplify a resistor network.

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

## Simplify a resistor network

Here is the example circuit we will work through together,

![Example circuit](https://ka-perseus-images.s3.amazonaws.com/16b4aecbaae9e2a5e0b50fc70ace724f471ad0c0.svg)

We see a voltage source connected to a resistor network. The two little circles near the left end represent the "ports" of the resistor network. 

**Problem statement: Figure out how much current, $i$, the voltage source is required to supply to the resistor network.**

The answer is not immediately obvious, but we have some tools at our disposal: We know how to compute the equivalent resistance of series and parallel resistors. With these tools we can simplify the resistor network until the problem becomes easy to solve.

At this point, have a go at answering the problem posed above. After you give it a try, continue reading to see the solution unfold.

<details>
<summary>Review series and parallel resistors</summary>
<p>If you would like to refresh your understanding of series and parallel resistors, see,</p>

<p><a href="http://spinningnumbers.org/a/series-resistors.html">Resistors in series</a></p>

<p><a href="http://spinningnumbers.org/a/parallel-resistors.html">Resistors in parallel</a></p>
</details>

## Strategy for simplifying a resistor network

Here's a general strategy we'll be following to simplify any resistor network.

* Begin as far away as possible from the circuit location in question. 
* Identify and replace series or parallel resistor combinations with their equivalent resistor. 
* Continue, moving along until a single equivalent resistor represents the entire resistor network.

## Step-by-step solution to the example

The original question asked about the current from the voltage source. So the "location in question" is near the voltage source on the far left end of the circuit. Therefore, we start the simplification process way over on the far right, and work our way back towards the source.

Simplifying a circuit is a process of many small steps. Consider a small chunk of circuit, simplify, and then move to the next chunk. Tip: Redraw the schematic after every step so you don't miss an opportunity to simplify. 

**Step 1.** The shaded resistors, $2\,\Omega$ and $8\,\Omega$, are in series. 

![Step 1.](https://ka-perseus-images.s3.amazonaws.com/5042cdc7bc995912caf0ea2f132eb83af0584923.svg)

Looking into the shaded area from the perspective of the arrows, the two series resistors are equivalent to a single resistor with resistance of \_\_\_\_\_\_ $\Omega$.

<details>
<summary>hint</summary>
<p>These two resistors are in series, so we <em>add</em> their two resistances to get the equivalent series resistance.</p>
</details>
<details>
<summary>show answer</summary>
<p>$2\,\Omega + 8\,\Omega = 10 \,\Omega$</p>
</details>

The two resistors can be replaced by their equivalent resistance:

![](https://ka-perseus-images.s3.amazonaws.com/a011e4f1af3cb40d95367439ba709c7f78c97d7d.svg)

**Key insight:**  From outside the shaded box, the two original series resistors and the equivalent resistor are indistinguishable from each other. The exact same current and voltage exist in both versions.


**Step 2.** We now find two $10\,\Omega$ resistors in parallel at the new far right of the circuit.

![Step 2](https://ka-perseus-images.s3.amazonaws.com/28925dbe7ccd9dffd24f2086143f1ebd1a03cf4e.svg)

These two resistors can be replaced by their parallel combination.

The resulting equivalent resistor is: \_\_\_\_\_\_ $\Omega$.

<details>
<summary>show answer</summary>
<p>$10\,\Omega\, ||\,10\,\Omega = \dfrac{10\cdot 10}{10 + 10}=5\,\Omega$</p>
<p>The $||$ notation means "in parallel with". </p>
</details>

Again, looking into the shaded box from the left, the current and voltage with the equivalent resistor is still indistinguishable from the entire original. 

![](https://ka-perseus-images.s3.amazonaws.com/fa1929867e4a355e2c2ad438f90622e0ae0e68dd.svg)
  
**Step 3.** Can you see a pattern emerging? We are working through the schematic from right to left, simplifying and redrawing as we go. Next up we find two series resistors, $1\,\Omega$ and $5\,\Omega$. 

![Step 3](https://ka-perseus-images.s3.amazonaws.com/8ba70c7994c93c4c0cb03cd53b6266a95a771431.svg)

These series resistors can be replaced by an equivalent resistance of: \_\_\_\_\_\_ $\Omega$.

<details>
<summary>show answer</summary>
<p>$1\,\Omega + 5\,\Omega = 6\,\Omega$</p>
</details>

![](https://ka-perseus-images.s3.amazonaws.com/71f42f318965d64a38d5dcaeac109da4dfe79acc.svg)

**Step 4.** This step is a bit more challenging. We have three resistors in parallel. 

![](https://ka-perseus-images.s3.amazonaws.com/61fea11e6ae526a4f9e57595120d0c8365e9880f.svg)

These three resistors can be replaced by their parallel combination. 

The resulting equivalent resistor is: \_\_\_\_\_\_ $\Omega$.

<details>
<summary>hint</summary>
<p>Because we have three resistors in parallel, use the full parallel resistor equation,</p>

<p>$\dfrac{1}{\text R_{\text{parallel}}} = \dfrac{1}{\text{R1}} +\dfrac{1}{\text{R2}} + \dfrac{1}{\text{R3}}$</p>
</details>

<details>
<summary>show answer</summary>
<p>$\dfrac{1}{\text R_{\text{parallel}}} = \left (\dfrac{1}{12\,\Omega} +\dfrac{1}{4\,\Omega} + \dfrac{1}{6\,\Omega}\right ) = \left (\dfrac{1}{12} +\dfrac{3}{12} + \dfrac{2}{12} \right )= \dfrac{1}{2}$</p>

<p>So the equivalent resistance is the reciprocal of $\dfrac{1}{2}$, or $2\,\Omega$.</p>
<p><img src="https://ka-perseus-images.s3.amazonaws.com/8ec84cd8faa55a88bf16140618e7da49f331da4a.svg"></p>
</details>

**Step 5.** We are down to the last two series resistors,

![Step 5](https://ka-perseus-images.s3.amazonaws.com/76544d66c589b76cc1cb645aacfa42ccbef6fbed.svg)

You can do this one in your head:

![](https://ka-perseus-images.s3.amazonaws.com/28fcf2f6022e685a74a4e188e5f17fb446117272.svg)

We are left with a single $3\,\Omega$ resistor. As far as the voltage source can tell, this one resistor is equivalent to the entire resistor network. 

To answer the question: The voltage source is required to supply a current of,

$i = \dfrac{\text V}{3\,\Omega}$

You started with $7$ resistors and simplified down to $1$, a significant reduction in complexity. Well done. 

Not all simplifications make it down to a single resistor at the end. (The circuit may not be made entirely of resistors.) But always take the opportunity to simplify if the chance is presented.

## Reflection

**Key idea:** The strategy for simplification is to *start at a point in the circuit farthest away from the component of interest*. 

In this example, we were asked about the current load on the voltage source on the far left, so we started at the far right end of the circuit and worked our way "backwards" to the left. 

Working in this "backwards" direction may initially feel awkward, given that many of us have an ingrained habit of reading from left to right. It is common in electronics to begin analysis starting at the output end of a circuit (which usually appears on the right side of the page) and work back to the input. Our left-to-right reading bias can get in the way. You can tell you are "turning into an engineer" when you get comfortable working in this backwards direction.

#### Just for fun   
Here is an animation of the circuit simplification,

<p>
<div class="videowrapper">
    <iframe frameBorder="0" width="{{site.data.video.width}}" height="{{site.data.video.height}}" src="https://www.youtube.com/embed/{{page.youtubeID}}{{site.data.video.youtubeOptions}};" allowfullscreen></iframe> 
</div>
</p>

## Exceptions

Certain resistor configurations cannot be simplified using the strategy described above. We treat those as a special case. Examples are described in the next article on [Delta Wye Transformation]({{ site.baseurl }}{% link _articles/delta-wye-resistor-networks.md %})).
