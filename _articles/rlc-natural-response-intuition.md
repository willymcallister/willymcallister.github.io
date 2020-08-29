---
layout: article
title:  "RLC natural response - intuition"
author: Willy McAllister
comments: true
---

The resistor-inductor-capacitor $\text{RLC}$ circuit is the popular kid of analog circuits. It is found in real life circuits we actually build, since every real circuit has finite resistance, inductance, and capacitance. It has a rich and complex behavior with application in many areas of engineering.

![RLC circuit basic setup]({{ site.baseurl }}{% link i/rlc_natural_response18.svg %}){: .centered :}

In this article we take an intuitive look at the natural response of an $\text{RLC}$. Then we do the formal math in two follow-on articles, RLC natural response [derivation]({{ site.baseurl }}{% link _articles/rlc-natural-response-derivation.md %}) and [variations]({{ site.baseurl }}{% link _articles/rlc-natural-response-variations.md %}).

Written by Willy McAllister.

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

### Where we're headed 
{:.no_toc}
 
We follow charge as it moves through the $\text{RLC}$ circuit over time. Charge sloshes back and forth from one plate of the capacitor to the other, passing through the inductor and resistor in both directions. Each oscillation is a little lower because energy is lost to heat in the resistor.

The mechanical analog of the $\text{RLC}$ is a swinging pendulum with friction. 

---

## Setup

This prediction is similar what we did for the [LC natural response](https://spinningnumbers.org/a/lc-natural-response-intuition.html). This time we include a small resistor (a few ohms) to make it more representative of real life circuits.

![RLC circuit initial setup]({{ site.baseurl }}{% link i/rlc_natural_response_intuition0.svg %}){: .centered :}

$\text{RLC}$ natural response. The switch is open and there is an initial voltage $\text V_0$ on the capacitor.
{: .caption :}

Let's say the capacitor has an initial voltage $\text V_0$. That means it is storing some charge, $q = \text C\,\text V_0$. Focus on $+q$, the positive charge sitting on the top plate of the capacitor. We will follow that as it moves around the circuit.

The switch is open, so there is no current in the inductor, and no current in the capacitor or resistor, either. As long as the switch is open, the charge just sits on the capacitor with no place to go. 

{% capture summary %}Charge on a capacitor{% endcapture %}  
{% capture details %}  
What does it mean when we say "charge on the capacitor"? It means we create a charge separation. Electrons are a lot easier to move around than protons, so that's what we work with. To get a charge separation we take some electrons away from the top plate, to create an electron deficit, and place them on the bottom plate, to create an electron excess. Batteries and other voltage sources are capable of doing that.

When $\text V_0$ is a positive number, some electrons are missing from the top plate. That's equivalent to saying there is positive charge on the top plate. Whenever we say, "There's $+q$ on the top plate," we really mean "there's a deficit of electrons on the top plate." It's the same for excess charge on the bottom plate. "There's $-q$ on the bottom plate."

As we work through our prediction, we track what happens to $+q$. We know the same amount of $-q$ is moving in the opposite direction, but we can ignore that and just follow $+q$. Try to track the motion of the "positive charge" in your mind as we go through this discussion.

By the end of the natural response, the charge separation will vanish. The positive and negative charges will  find each other, pair up, and become neutral. The electrons do not vanish, but the charge *separation* does. 
{% endcapture %}{% include details.html %} 

This discussion gets complicated because we follow multiple things at once, capacitor voltage and inductor current, not to mention our little resistor friend. Hang in there. 

## Natural response - follow the charge

What happens when the switch closes and we let the circuit do "whatever it wants"? This behavior is called the *natural response*. Follow the charge! 

Close the switch. $+q$ on the top plate has a closed path to move toward the bottom plate.

![Charge has a path from the top plate to the bottom plate]({{ site.baseurl }}{% link i/rlc_natural_response_intuition0a.svg %}){: .centered :}

The switch closes and suddenly the inductor and resistor in series "see" the capacitor voltage, $v_\text C = \text V_0$. This creates a current in the resistor, $i=v/\text R$, and a current slope in the inductor, $di/dt = v/\text L$. The charge for the current comes from the capacitor, of course.

We assumed $\text R$ was small, so its voltage drop will be small, too. Nevertheless, the resistor does get a little warm and dissipates a little bit of power in the form of heat. The energy lost to heat comes from the energy of the moving charge. A little bit of that charge is de-energized and does not make it all the way over to the bottom of the capacitor.

The inductor has a current, so it starts storing energy in its surrounding magnetic field. That energy will come back into the circuit in a moment.

Over at the capacitor, charge flows out of the top plate, goes around through the resistor, through the inductor, and onto the bottom capacitor plate. As $q$ goes down, $q=\text Cv_\text C$ tells us $v_\text C$ has to be go down, too. 

![RLC circuit intuition 1]({{ site.baseurl }}{% link i/rlc_natural_response_intuition1.svg %}){: .centered :}

A little after closing the switch, inductor current is rising and capacitor voltage is falling.
{: .caption :}

Eventually, the amount of charge on the bottom plate equals the charge on the top plate, so the voltage across the capacitor falls to $0$.

Meanwhile, over at the inductor, current is still flowing. How can there be current if the voltage is $0$? Because the stored energy in the inductor's magnetic field keeps the current going. It's like when you spin a bicycle wheel. The inertia stored in the spinning wheel keeps it going even if you attempt to stop it suddenly. The magnetic field does the same thing for an inductor.

![RLC circuit intuition 2]({{ site.baseurl }}{% link i/rlc_natural_response_intuition2.svg %}){: .centered :}

The capacitor voltage falls to $0$ when the top and bottom plate have the same charge. The current reaches a peak value at about the same time and continues to pump charge onto the bottom plate of the capacitor.
{: .caption :}

As the voltage falls below $0$ the current continues to pump charge from the top plate to the bottom. Now the bottom plate has more charge than the top, so the voltage goes negative.

![RLC circuit intuition 3]({{ site.baseurl }}{% link i/rlc_natural_response_intuition3.svg %}){: .centered :}

As the inductor current continues heaping positive charge on the bottom plate of the capacitor, the capacitor voltage goes negative.
{: .caption :}

After a while, all the charge has moved to the bottom plate. The voltage reaches its peak negative value. The peak negative voltage is a little bit less than the original $v_\text C(0)$. Remember the resistor? Any time there's a current it is dissipating energy, so the peak negative voltage isn't quite as high as the starting point. 

When the voltage reaches its negative peak charge stops moving for a brief moment and the current becomes $0$. Remember being on a playground swing? When you reach the highest point from the ground you stop just for a moment.

![RLC circuit intuition 4]({{ site.baseurl }}{% link i/rlc_natural_response_intuition4.svg %}){: .centered :}

After the available charge has flowed to the bottom plate,  the voltage reaches its negative peak, and the current falls to $0$.
{: .caption :}

The previous image is nearly the same as where we started. The current is back to zero, and the voltage is at a (slightly lower) peak value. We can go back to the start of the story and tell it again just the same, except with charge moving from the bottom plate of the capacitor back to the top. Here's the result after one full cycle,

![RLC circuit intuition 5]({{ site.baseurl }}{% link i/rlc_natural_response_intuition5.svg %}){: .centered :}

The second half of the cycle is like the first, but charge moves from the bottom plate of the capacitor back to the top. At the second positive voltage peak charge has moved through the resistor two times, so the peak is even lower than before.
{: .caption :}

At the end of one cycle we are back where we started, but with some energy removed from the system. The process continues. Charge continues to slosh back and forth between the top and bottom plates, losing a little energy each time, until the system eventually comes to rest.

![RLC circuit intuition 6]({{ site.baseurl }}{% link i/rlc_natural_response_intuition6.svg %}){: .centered :}

As time goes on, the height of the oscillation decays until all the energy is dissipated in the resistor and everything comes to a stop.
{: .caption :}

## Mechanical analog

The $\text{RLC}$ circuit has mechanical analog, a pendulum with friction. The addition of the resistor to the $\text{RLC}$ is equivalent to adding friction. Friction causes the pendulum to dissipate energy and slowly come to a halt.

As a pendulum swings back and forth, friction from both air resistance and the pivot point dissipates energy. Each swing gets shorter and shorter until the pendulum finally stops moving. If friction is low, the pendulum swings for a long time before it stops (under damped). If friction is very high, the pendulum makes just one slow drop to the bottom center and stops (over damped). At one precise value, the pendulum will fall to the bottom center as fast as possible, without overshooting and coming back (critically damped). 

![RLC pendulum analog]({{ site.baseurl }}{% link i/rlc_natural_response_intuition7.svg %}){: .centered :}

Check out this [video](https://www.youtube.com/watch?v=99ZE2RGwqSM) of a pendulum with different amounts of friction.

Our  $\text{RLC}$ circuit will display the same kinds of behavior as its current and voltage swing back and forth. (Another good mechanical analog is a weight hanging from a spring. If you pull the weight down and let it go, its up-and-down motion is similar to the pendulum's back-and-forth.)

In the next two articles we will discover precisely how the $\text{RLC}$ works when we do a formal derivation of the natural response. We'll be able to predict the oscillation frequency, and will see how quickly the signal fades away.

## Summary
{:.no_toc}

We followed the charge moving around in an $\text{RLC}$ circuit over time. We started with a charge on the capacitor and closed the switch. The charge flowed back and forth from one plate of the capacitor to the other, passing through the inductor and resistor in both directions. 

As the current passes through the inductor, it stores energy in the magnetic field surrounding the inductor. That energy returns to the circuit by pushing charge along. Each cycle of oscillation is a little lower than the previous, because of the energy lost as the moving charge heats up the resistor.

The swinging pendulum is a mechanical analog of the $\text{RLC}$ electrical circuit. It helps you envision what is happening in the circuit.
