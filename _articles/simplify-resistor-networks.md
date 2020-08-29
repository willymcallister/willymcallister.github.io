---
layout: article
title:  "Simplify resistor networks"
author: Willy McAllister
comments: true
youtubeID: pUzHSQa6lko
---

Complicated resistor networks can be simplified by finding series and parallel resistor combinations within the context of the larger circuit. 

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

Here is the example circuit we will work through together,

![Example circuit]({{ site.baseurl }}{% link i/simplifying1.svg %})

We see a voltage source connected to a resistor network. The two little circles near the left end represent the *port* of the resistor network. 

**Figure out how much current $(i)$ the voltage source is required to supply to the resistor network.**

The answer is not immediately obvious. But, we have some tools at our disposal: We know how to compute the equivalent resistance of series resistors and parallel resistors. With these tools we can simplify the resistor network until the problem becomes easy to answer.

At this point, have a go at answering the problem yourself. After giving it a try, continue reading to see the solution unfold.

Refresh your understanding of [series resistors]({{ site.baseurl }}{% link _articles/series-resistors.md %}) and [parallel resistors]({{ site.baseurl }}{% link _articles/parallel-resistors.md %}).

## Strategy

Here's a general strategy to simplify any resistor network,

* Begin as far away as possible from the circuit location in question. 
* Identify and replace series or parallel resistor combinations with their equivalent resistor. 
* Continue, moving along until a single equivalent resistor represents the entire resistor network.

## Step-by-step solution to the example

The original question asked about the current from the voltage source. So the "location in question" is near the voltage source on the far left end of the circuit. Therefore, we start the simplification process way over on the far right, and work our way back toward the source.

Simplifying a circuit is a process of many small steps. Consider a small chunk of circuit, simplify, and then move to the next chunk. Tip: Redraw the schematic after every step so you don't miss an opportunity to simplify. 

**Step 1.** The shaded resistors, $2\,\Omega$ and $8\,\Omega$, are in series. 

![Step 1.]({{ site.baseurl }}{% link i/simplifying2.svg %})

Looking into the shaded area from the perspective of the arrows, the two series resistors are equivalent to a single resistor with resistance of \_\_\_\_\_\_ $\Omega$.

<details>
<summary>hint</summary>
<p>These two resistors are in series, so we <em>add</em> their two resistances to get the equivalent series resistance.</p>
</details>
<details>
<summary>show answer</summary>
<p>$2\,\Omega + 8\,\Omega = 10 \,\Omega$</p>
</details>

The two resistors can be replaced by their equivalent resistance,

![Step 1. equivalent resistor]({{ site.baseurl }}{% link i/simplifying3.svg %})

**Key insight:**  From outside the shaded box, the two original series resistors and the equivalent resistor are indistinguishable from each other. The exact same current and voltage exist in both versions.

**Step 2.** We now find two $10\,\Omega$ resistors in parallel at the new far right of the circuit.

![Step 2.]({{ site.baseurl }}{% link i/simplifying4.svg %})

These two resistors can be replaced by their parallel combination.

The resulting equivalent resistor is: \_\_\_\_\_\_ $\Omega$.

<details>
<summary>show answer</summary>
<p>$10\,\Omega \parallel 10\,\Omega = \dfrac{10\cdot 10}{10 + 10}=5\,\Omega$</p>
<p>The $\parallel$ notation means "in parallel with". </p>
</details>

Again, looking into the shaded box from the left, the current and voltage with the equivalent $5\,\Omega$ resistor is still indistinguishable from the entire original. 
  
![Step 2. equivalent resistor]({{ site.baseurl }}{% link i/simplifying5.svg %})

**Step 3.** Can you see a pattern emerging? We are working through the schematic from right to left, simplifying and redrawing as we go. Next up we find two series resistors, $1\,\Omega$ and $5\,\Omega$. 

![Step 3.]({{ site.baseurl }}{% link i/simplifying7.svg %})

These series resistors can be replaced by an equivalent resistance of: \_\_\_\_\_\_ $\Omega$.

<details>
<summary>show answer</summary>
<p>$1\,\Omega + 5\,\Omega = 6\,\Omega$</p>
</details>

![Step 3. equivalent resistor]({{ site.baseurl }}{% link i/simplifying8.svg %})

**Step 4.** This step is a bit more challenging. We have three resistors in parallel. 

![Step 4.]({{ site.baseurl }}{% link i/simplifying9.svg %})

These three resistors can be replaced by their parallel combination. 

The resulting equivalent resistor is: \_\_\_\_\_\_ $\Omega$.

<details>
<summary>hint</summary>
<p>Because we have three resistors in parallel, use the full parallel resistor equation,</p>

<p>$\dfrac{1}{\text R_{\text{parallel}}} = \dfrac{1}{\text{R1}} +\dfrac{1}{\text{R2}} + \dfrac{1}{\text{R3}}$</p>
</details>

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
$\dfrac{1}{\text R_{\text{parallel}}} = \left (\dfrac{1}{12\,\Omega} +\dfrac{1}{4\,\Omega} + \dfrac{1}{6\,\Omega}\right ) = \left (\dfrac{1}{12} +\dfrac{3}{12} + \dfrac{2}{12} \right )= \dfrac{1}{2}$

So the equivalent resistance is the reciprocal of $\dfrac{1}{2}$, or $2\,\Omega$.
![Step 4. equivalent resistor]({{ site.baseurl }}{% link i/simplifying10.svg %})
{% endcapture %}{% include details.html %}


**Step 5.** We are down to the last two series resistors,

![Step 5.]({{ site.baseurl }}{% link i/simplifying11.svg %})

You can do this one in your head,

![Step 5. final equivalent resistor]({{ site.baseurl }}{% link i/simplifying12.svg %})

We are left with a single $3\,\Omega$ resistor. As far as the voltage source can tell, this one resistor is equivalent to the entire resistor network. 

To answer the question: The voltage source is required to supply a current of,

$i = \dfrac{\text V}{3\,\Omega}$

You started with $7$ resistors and simplified down to $1$, a significant reduction in complexity. Well done. 

Not all simplifications make it down to a single resistor at the end. (The circuit may not be made entirely of resistors.) But always take the opportunity to simplify if the chance is presented.

Just for fun, here's an animation of the simplification process,

{% include embed-video.html %}

## Exceptions

Certain resistor configurations cannot be simplified using the strategy described above. We treat those as a special case. Examples are described in the next article on [Delta Wye Transformation]({{ site.baseurl }}{% link _articles/delta-wye-resistor-networks.md %})).

## Summary
{:.no_toc}

**Key idea:** The strategy for simplification is to *start at a point in the circuit farthest away from the component of interest*. 

In this example, we were asked about the current load on the voltage source on the far left, so we started at the far right end of the circuit and worked our way "backwards" to the left. 

Working in this "backwards" direction may initially feel awkward, given that many of us have an ingrained habit of reading from left to right. It is common in electronics to begin analysis starting at the output end of a circuit (which usually appears on the right side of the page) and work back to the input. Our left-to-right reading bias can get in the way. You can tell you are "turning into an engineer" when you get comfortable working in this backwards direction.
