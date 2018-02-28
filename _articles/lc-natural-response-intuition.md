---
layout: article
title:  "LC natural response - intuition"
author: Willy McAllister
comments: true
---

We develop an intuition for the natural response  of the inductor-capacitor $(\text\{LC\})$ circuit. 
 
![LC circuit](https://ka-perseus-images.s3.amazonaws.com/e11e853050cfcb3b21fb71159ee18f39f490f1f2.svg){: .centered :}{: height="180px" :}

Circuits with two energy storage elements (capacitors or inductors) are called *second-order systems*. The voltage and current rock back-and-forth, or *oscillate*. Second-order systems are where sine waves come from in analog circuits. 

After you have a good mental image of what's going on, the next article is a formal derivation of the [LC natural response]({{ site.baseurl }}{% link _articles/lc-natural-response-derivation.md %}).

Written by Willy McAllister.

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

---

## First-order systems

Up to now we've looked at first-order circuits like the [RC natural response]({{ site.baseurl }}{% link _articles/rc-natural-response-derivation.md %}) and the [RL natural response]({{ site.baseurl }}{% link _articles/rl-natural-response.md %}). These have a single energy-storage element, one $\text\{C\}$ or $\text\{L\}$. The natural response of first-order circuits has an exponential shape that "slumps" to its final value. The original stored energy is eventually dissipated by the resistor.

![RC natural response plot]({{ site.baseurl }}{% link i/rc_natural_response_voltage.svg %}){: .centered :}

<p class="caption">The $\text{RC}$ natural response is described by a first-order differential equation.</p>

## Second-order systems

Now we look at a circuit with two ideal energy-storage elements and no resistor. Circuits with two storage elements are *second-order systems* because they produce equations with second derivatives.

Second-order systems are the simplest systems that rock back and forth in time, or *oscillate*. The classic mechanical second-order system is a pendulum. You provide some initial energy by pulling the pendulum to the side. When you let it go it oscillates back and forth. In electronics, the classic oscillating system is the $\text\{LC\}$ circuit.

## Predict the natural response

![](https://ka-perseus-images.s3.amazonaws.com/d5c107bac0b68aca65c7ac4e6a328a7662fe1267.svg){: .centered :}{: height="180px" :}

<p class="caption">Circuit conditions just before the switch closes.</p>

Let's say the capacitor has an initial voltage, which means it is storing some charge, $q$. We assume there is no initial current in the inductor (and therefore, no current in the capacitor, either). What is going to happen when the switch closes and we let this circuit do "whatever it wants"? We are going to reason through this by tracking what happens to the charge, $q$. 

The amount of $q$ is set by the product of the initial voltage on the capacitor and the value of the capacitor, $q=\text C\,v$. $q$ does not change during the natural response. Starting out, all the charge is sitting still on the capacitor.

Now we release the circuit by closing the switch to let it do its "natural" thing.

The inductor starts with $0$ current. All of a sudden it "sees" the initial voltage, $v = \text V_0$. This voltage will  generate a  rising current in the inductor, and it starts storing energy in its surrounding magnetic field. 

Where does that current (flowing charge) come from? It comes from the capacitor, of course. 

Over at the capacitor, current flows out away from the top plate, shown in blue below. Current flows through the inductor and around to the bottom capacitor plate. As charge leaves the top plate, that means $q$ is going down. $q=\text C\,v$ tells us $v$ has to be going down, as shown in orange. 

![LC natural response intuition 1]({{ site.baseurl }}{% link i/lc_natural_response_intuition1.svg %}){: .centered :}

<p class="caption">A little after closing the switch, current is rising and voltage is falling.</p>

Eventually, we reach a state where the charge on the top plate is the same as the bottom plate. The voltage across the capacitor therefore falls to $0$.

Over at the inductor there is a current flowing, even though the voltage is $0$, because the energy stored in the inductor's magnetic field keeps the current flowing. (Current does not abruptly drop to $0$ when the voltage reaches $0$.)  
![LC natural response intuition 2]({{ site.baseurl }}{% link i/lc_natural_response_intuition2.svg %}){: .centered :}

<p class="caption">The voltage eventually falls to $0$ (the amount of charge on the top and bottom capacitor plates is the same). At the same time, the current in the inductor reaches a peak value. That current continues to pump charge onto the bottom plate of the capacitor.</p>

The inductor current continues to move charge from the top plate of the capacitor to the bottom. Now there is more positive charge on the bottom plate than the top, so the voltage actually reverses sign and becomes negative.

As charge builds up on the bottom plate, it repels against the arrival of new charge from the inductor current (electrostatic repulsion). The inductor current bends over and starts to drop back towards $0$. 

![LC natural response intuition 3]({{ site.baseurl }}{% link i/lc_natural_response_intuition3.svg %}){: .centered :}

<p class="caption">The inductor continues heaping positive charge on the bottom plate of the capacitor, so the voltage goes negative.</p>

After a little while, the voltage reaches a peak negative value when *all* the charge has flowed to the bottom plate. The voltage will be the negative of whatever the capacitor started at. Charge stops moving for a brief moment, so the current crosses $0$. 

![LC natural response intuition 4]({{ site.baseurl }}{% link i/lc_natural_response_intuition4.svg %}){: .centered :}

<p class="caption">After all the available charge has flowed to the bottom plate,  the voltage reaches its negative peak, and the current falls to $0$.</p>

The previous image is almost identical to where we started. The current is back to zero, and the voltage is at a peak value. The peak happens to be the negative of where we started. We can go back to the start of the story and tell it again just the same, except with charge moving from the bottom plate of the capacitor back to the top. Here's the end result after one full cycle,

![LC natural response intuition 5]({{ site.baseurl }}{% link i/lc_natural_response_intuition5.svg %}){: .centered :}

<p class="caption">The second half of the cycle is the same as the first, but with charge moving from the bottom plate of the capacitor back to the top plate.</p>

The rate of oscillation (the frequency), is determined by the value of $\text L$ and $\text C$. We will discover how that works when we do the formal derivation of the $\text{LC}$ natural response in the next article.

## Mechanical analogy: pendulum

A swinging pendulum is a mechanical analog for an $\text{LC}$ circuit. 

![](https://ka-perseus-images.s3.amazonaws.com/2ba6d9e0b647d88fd3ee97b5b60af4051110e382.svg){: .centered :}{: height="300px" :}

*Voltage $v(t)$ is the analog of the position.* We measure position of the pendulum as it moves away from the center point. The distance is $0$, $(\goldD v=0)$, when the pendulum is hanging straight down, and goes to $\goldD v=+\text V_0$ or $-\text V_0$ at either extreme position. 

*Current $i(t)$ is the analog of velocity.* The pendulum moves its fastest at the mid-point $(\blueD i=\text I_\{max\})$. It is motionless, $(\blueD i=0)$, for an instant at either end of its swing.  

The initial voltage of $+\text V_0$ corresponds to how much we pull the pendulum to the right before letting go. 

Letting go of the pendulum corresponds to closing the switch. What happens next is the natural response. If the pivot point is frictionless and there is no air resistance, the pendulum swings forever.

The $\text\{LC\}$ circuit (and the pendulum) trade voltage and current back and forth in a sine wave pattern. Both voltage and current are sine waves, and we can see a timing difference of $1/4$ of a cycle between them.

## Summary
{:.no_toc}

We explored an intuitive description of the natural response of an $\text\{LC\}$ circuit (a second-order system). Both the voltage and current have a sine wave pattern.