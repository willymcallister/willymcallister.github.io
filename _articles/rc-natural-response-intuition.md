---
layout: article
title:  "RC natural response - intuition"
author: Willy McAllister
comments: true
---

The Resistor-Capacitor $(\text{RC})$ circuit is one of the first interesting circuits we can create. This is the first circuit we come across that changes with time. This article gives you an intuitive understanding of how the $\text{RC}$ works. The formal derivation is in the next article, [RC natural response - derivation]({{ site.baseurl }}{% link _articles/rc-natural-response-derivation.md %}). 

![RC natural response circuit]({{ site.baseurl }}{% link i/rc_natural_response0c.svg %}){: .centered :}{: height="160px"}

Understanding what this circuit does is essential to understanding electronic systems. To develop a precise answer requires methods from calculus. We use [derivatives](https://www.khanacademy.org/math/calculus-home/taking-derivatives-calc) to describe how the $\text{RC}$ circuit works. 

Written by Willy McAllister. 

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

We want to understand the *natural response* of this circuit. 

![RC natural response circuit]({{ site.baseurl }}{% link i/rc_natural_response0.svg %}){: .centered :}{: height="180px"}

We place an initial charge on the capacitor. This will cause a voltage $\text V_0$ to appear according to $q = \text C\,v$. Then we step back and watch what the voltage does 'naturally.' Whatever happens is called the *natural response*.

## Intuition - predict what happens

We explore this circuit. It's job is to place an initial charge on the capacitor and then let go.

![RC natural response circuit with switch]({{ site.baseurl }}{% link i/rc_natural_response1.svg %}){: .centered :}{: height="200px"}

The switch starts in the down position as shown, connecting the resistor in parallel with the capacitor. We want to know what happens to $\goldD{v_\text C}$, the capacitor voltage, when we flip the switch back and forth. 

<details>
<summary>giving names to voltages and currents</summary>
<p>A common way to name voltages and currents is to use lower-case names for values that change with time, $v$ or $i(t)$. We use upper-case names to suggest constant values, $\text V$ or $\text I$. For example, a battery or power supply voltage might begin with an uppercase letter like $\text{VDD}$, or $\text V_{\text{BAT}}$. The capital $\text V$ reminds us the voltage doesn't change. This naming convention is not guaranteed for every schematic you come across, but it is a helpful practice.</p>
</details>

We'll think about these questions one at a time, 

**What is $v_\text C$, the voltage across the capacitor...**  
* **before the switch flips up?**
* **after the switch flips up?** 
* **after the switch flips back down?**

### Before the switch flips up

We begin by figuring out the *initial state* of the circuit, before anything changes. With the switch in the down position we draw the following equivalent circuit. $v_{in}$ is $0$ volts, and the left end of $\text R$ is connected to the bottom of $\text C$.

![RC natural response circuit with switch down]({{ site.baseurl }}{% link i/rc_natural_response2.svg %}){: .centered :}{: height="200px"}

Let's assume for the moment the circuit has been sitting in this state for a long time, so any charge that may have been stored on the capacitor in the past has long since drained away through the resistor, leaving no charge on the capacitor, $q_\text C = 0$. From this we know the voltage across the capacitor must be $0$ volts, because $v_\text C = q / \text C = 0 / \text C = 0$.

Since the capacitor has $0$ volts across it, so must the resistor, so the current through $\text R$ must be $0$. Everything is $0$, current and voltage. We say the circuit is *in steady state* or *quiescent* or *at an equilibrium*. This answers the first question, "What is the voltage across $\text C$ before the switch flips."

### After the switch flips up

Now flip the switch up. Voltage $v_{in}$ becomes $\text V_{\text{BAT}}$, and something is about to change.

![RC natural response circuit with switch up]({{ site.baseurl }}{% link i/rc_natural_response3.svg %}){: .centered :}{: height="200px"}

Current begins flowing out of the positive terminal of the battery, through $\text R$ and $\text C$. Charge accumulates on the capacitor. The accumulating charge generates a rising voltage across the capacitor ($v_\text C = q / \text C$). This time where voltage $v_\text C$ is changing is called a *transient* period. 

What keeps $v_\text C$ from rising forever? Charge accumulates on the capacitor until $v_\text C$ rises to the same value as the battery voltage, until $v_\text C = \text V_{\text{BAT}}$. At that point, the voltage across the resistor is $0$ volts, so current in the resistor stops flowing (Ohm's Law). 

That also means  current (charge) stops piling up on the capacitor. The amount of charge on the capacitor stops changing. Therefore, the capacitor voltage becomes constant at $v_\text c=\text V_{\text{BAT}}$. At this point, nothing is changing, and the transient period has come to an end.

We've answered the second question. After the switch flips up and after a transient period comes to an end, the circuit assumes a new steady state with $v_{\text C} = \text V_{\text{BAT}}$. It stays in this state until something comes along to disturb its bliss. 

### After the switch flips back down

Now we'll flip the switch again, returning it back to the negative terminal of the battery ($v_{in}=0$). What happens? 

![RC natural response circuit with switch down]({{ site.baseurl }}{% link i/rc_natural_response2.svg %}){: .centered :}{: height="200px"}

This is the same circuit we started with, but this time $\text C$ has some charge. The left end of $\text R$ is at $0\,\text{volts}$ and the right end is at $\text V_{\text{BAT}}\,\text{volts}$. This voltage across the resistor terminals means a current starts to flow at the moment the switch flips down. The charge needed to cause this current comes from the capacitor. 

Charge continues to flow out of the capacitor and through the resistor until all the charge originally stored in $\text C$ is gone. $v_\text C$ gradually falls from $\text V_{\text{BAT}}$ down to zero volts. The voltage difference across $\text R$ also falls to zero and the current stops. 

The circuit has now returned to its original equilibrium state. This answers the third question, "What is the voltage across $\text C$ after the switch flips back down?" 

## Summary 

Using just our intuition, we figured out the capacitor voltage starts at $0$ volts, rises to $\text V_{\text{BAT}}$, and then goes back to $0$ volts again. 

Saying the same thing another way, $v_\text C$ starts at an initial steady state, goes through a transient period to a new steady state, and then through a second transient back to its original state. 

We know the exact starting and ending voltage of each transient. Not bad for intuition, but ... What do we not know? 

We don't know how long the transients last or their exact shape. 

It's time to break out some calculus to get a precise and useful solution. We do that in the article that follows, [RC natural response - derivation]({{ site.baseurl }}{% link _articles/rc-natural-response-derivation.md %}).

