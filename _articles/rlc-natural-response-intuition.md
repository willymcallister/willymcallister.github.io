---
layout: article
title:  "RLC natural response - intuition"
author: Willy McAllister
comments: true
---

UNDER CONSTRUCTION

The resistor-inductor-capacitor circuit $\text{RLC}$ circuit is the monarch of analog circuits. It is representative of real life circuits we actually build, since every real circuit has some finite resistance, inductance, and capacitance. This circuit has a rich and complex behavior with application in many areas of engineering.

![](https://ka-perseus-images.s3.amazonaws.com/7bf2a85a2432376373d66e4a86fe015fdb5f5570.svg){: .centered :}

In this article we take an intuitive look at the natural response of an $\text{RLC}$. Then we do a formal mathematical derivation in two follow-on articles.

Written by Willy McAllister.

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

### Where we're headed 
{:.no_toc}
 
The $\text{RLC}$ is the electrical analog of a swinging pendulum with friction. 

To gain an intuition for the $\text{RLC}$ we think about how charge moves over time. Charge sloshes back and forth from one plate of the capacitor to the other, passing through the inductor and resistor in both directions. Each oscillation is a little lower because energy is lost to heat in the resistor.

---

## Predict the natural response

![](https://ka-perseus-images.s3.amazonaws.com/a32d1f3b5d1523eb38f5199042d5423734cb484b.svg){: .centered :}

<p class="caption">The circuit for the  $\text{RLC}$ natural response.  The switch starts open and there is an initial voltage $\text V_0$ on the capacitor.</p>

This prediction is similar what we did for the [LC natural response](http://spinningnumbers.org/a/lc-natural-response-intuition.html). This time we include a small resistor (a few ohms) to make it more representative of real life circuits.

Let's say the capacitor has an initial voltage $\text V_0$, so it is storing some charge, $q$. Assume the charge came from some external circuit, not shown. Because the switch is open, there is no current in the inductor, and no current in the capacitor or resistor, either. So the charge just sits on the capacitor with no place else to go. 

The amount of $q$ is set by the product of the initial voltage on the capacitor and the value of the capacitor, $q=\text C\,v_\text C$. Starting out, all the charge is sitting on the capacitor. We can track where it is by observing the voltage on the capacitor.

### Charge on the capacitor

What does it mean when we say "charge on the capacitor"? It means we create a charge separation. Electrons are a lot easier to move around than protons, so that's what we work with. To get a charge separation we take some electrons away from the top plate, to create an electron deficit, and place them on the bottom plate, to create an electron excess. 

When $\text V_0$ is a positive number, electrons are missing from the top plate. That's equivalent to saying there is positive charge on the top plate. Whenever we say "there's $+q$ on the top plate," we really mean "there's a deficit of electrons on the top plate."

Charge excesses and charge deficits attract each other. The attraction is what makes charge move. In our case, negative charge (excess electrons) on the bottom plate are attracted to the "positive charge" (electron deficit) on the top plate. Electrons can't travel through the capacitor's insulator, but they can reach the top plate via the resistor and inductor when the switch closes. 

The charge will slosh around for a while (more on that below). By the end of the natural response, the charge separation will go away. The once-separated charges will have found each other and become neutral. The electrons do not vanish, but the charge *separation* goes away. 

As we work through our prediction, we track what happens to $+q$. We know the same amount of $-q$ is actually moving in the opposite direction. Try to imagine the motion of the positive charge in your mind as we go through this discussion.

### Close the switch

What will happen when the switch closes and we let the circuit do "whatever it wants"? That behavior is called the *natural response*. We reason through this by following what happens to the charge, $q$. 

The inductor starts out with $0$ current and $0$ volts. The resistor also has $0$ current, so by Ohm's Law, there is $0$ volts across the resistor. 

The closed switch all of a sudden provides a closed path for the $+$ charge on the top plate to search out the $-$ charge on the bottom plate.

![](https://ka-perseus-images.s3.amazonaws.com/c603cd86d591948dd4fba50318ba2f1cefebe594.svg){: .centered :}

All of a sudden the inductor and resistor together "see" the capacitor voltage, $v_\text C = \text V_0$. This voltage will  create a current in the inductor and resistor. Where does that current come from? It comes from the charge on the capacitor, of course. The charge is pulled by the electric force of attraction towards the opposite charge on the other plate.

The resistor now has a current flowing through it, and Ohm's Law tells us there will be a voltage drop across $\text R$. We assumed $\text R$ was small, so the voltage drop will be small, too. Nevertheless, the resistor does get a little warm as it dissipates a little bit of power. 

The inductor has a current, so it starts storing energy in its surrounding magnetic field. That energy will come back out of the magnetic field in a moment. (The voltage across the inductor is a little bit lower than $v_\text C$ due to the small voltage drop across the resistor.)

Over at the capacitor, current flows out of the top plate, goes through the resistor, through the inductor, and around to the bottom capacitor plate. If $q$ is going down, then $q=\text C\,v$ tells us $v_\text C$ has to be going down, too. 

web+graphie://ka-perseus-graphie.s3.amazonaws.com/0f07d674cb65a2b784ab83c79fd2f71226409e26 {: .centered :}

<p class="caption">A little after closing the switch, inductor current is rising and capacitor voltage is falling.</p>

Eventually, the amount of charge on the top plate is the same as the bottom plate. The voltage across the capacitor therefore falls to $0$.

Meanwhile, over at the inductor there is still a current flowing. Wait! How could there be a current if the inductor voltage is $0$? The energy in the inductor's magnetic field keeps the current flowing, that's why. When you have a current in an inductor it tends to keep going. It's like when you spin a bicycle wheel. It's inertia keeps it going even if you try to stop it with your hand.

web+graphie://ka-perseus-graphie.s3.amazonaws.com/ccd290c160a84f7896d73de45546cdf4041013ef {: .centered :}

<p class="caption">The voltage eventually falls to $0$ (the amount of charge on the top and bottom capacitor plates is the same). At the same time, the current in the inductor reaches a peak value. That current continues to pump charge onto the bottom plate of the capacitor.</p>

Even after the voltage falls to $0$, the inductor current continues to move charge from the top plate of the capacitor to the bottom. Now there is more positive charge on the bottom plate than the top, so the voltage actually reverses sign and becomes negative.

As charge builds up on the bottom plate, it repels against the arrival of new charge from the inductor current (electrostatic repulsion). The inductor current bends over and starts to drop back towards $0$. 

web+graphie://ka-perseus-graphie.s3.amazonaws.com/542736546b541fb572a6110142301d18b8c9ee51 {: .centered :}

<p class="caption">As the inductor continues heaping positive charge on the bottom plate of the capacitor, the capacitor voltage goes negative.</p>

After a little while, the voltage will reach a peak negative value. The voltage will be negative, and a little bit less than the original $v_\text C(0)$ where the capacitor started. Remember the resistor? It is draining energy from the circuit, so the peak negative voltage isn't quite as high as the starting point. Charge stops moving for a brief moment when the voltage peaks out, so the current falls to $0$. 

web+graphie://ka-perseus-graphie.s3.amazonaws.com/4fcc21b550a59e3b8c5e5ccb20089e0c46cce0a8 {: .centered :}

<p class="caption">After the available charge has flowed to the bottom plate,  the voltage reaches its negative peak, and the current falls to $0$.</p>

The previous image is nearly the same as where we started. The current is back to zero, and the voltage is at a (slightly lower) peak value. We can go back to the start of the story and tell it again just the same, except with charge moving from the bottom plate of the capacitor back to the top. Here's the end result after one full cycle,

web+graphie://ka-perseus-graphie.s3.amazonaws.com/a8de1e6e2e38dea080a109ae0ee32ca849c43646 {: .centered :}

<p class="caption">The second half of the cycle is similar to the first, but with charge moving from the bottom plate of the capacitor back to the top plate. By the time of the second voltage peak, the charge has moved through the resistor two times, so the peak is lower than the starting point.</p>

At the end of one cycle we are back where we started, but with some energy removed from the system. The charge will continue to slosh back and forth between the top and bottom capacitor plates, losing a little energy each time, until the system eventually comes to rest.

web+graphie://ka-perseus-graphie.s3.amazonaws.com/cb10fc6a9488ff8259064f04c877a7e32fae385b {: .centered :}

<p class="caption">As time goes on, the height of the oscillations decays until all the energy is dissipated in the resistor an everything comes to a stop.</p>

## Mechanical analog

The $\text{LC}$ circuit is analogous to a mechanical oscillator, the frictionless [swinging pendulum](https://www.khanacademy.org/science/physics/mechanical-waves-and-sound/harmonic-motion/v/pendulum). The $\text{RLC}$ circuit has a similar mechanical analog, The addition of the resistor to the $\text{RLC}$ is equivalent to adding air resistance to make the pendulum dissipate energy and slow to a halt.

As a pendulum swings back and forth, friction due to air resistance dissipates energy, and each swing gets shorter and shorter until the pendulum finally stops moving. If air resistance is low, the pendulum swings for a long time before it stops. If it is very high, the pendulum makes just one slow drop to the bottom center and stops. At one precise value, the pendulum will fall to the bottom center as fast as it can, without overshooting and coming back.

![](https://ka-perseus-images.s3.amazonaws.com/7096c1bfc06a0eeab18dab76b5240aa8218721c9.svg){: .centered :}

Our  $\text{RLC}$ circuit will display the same kinds of behavior as its current and voltage swing back and forth. (Another good mechanical analog is a weight hanging from a spring. If you pull the weight down and let it go, its up-and-down motion is similar to the pendulum's back-and-forth.)

### Adding friction

Do you remember we assumed the resistor was relatively small? A small resistance allows the system to swing back and forth for a while. What do you think will happen if the resistor is larger? (Hint: how long would a pendulum swing if there was more friction in the bearing?) Heck, the friction might be so great the pendulum doesn't even swing back and forth even one time, it just slumps down to the bottom and stops. 

In the next two articles we will discover precisely how the $\text{RLC}$ works when we do a formal derivation of the natural response. We'll be able to predict the oscillation frequency, and will see how quickly the signal fades away.

## Summary
{:.no_toc}

We followed the charge moving around in an $\text{RLC}$ circuit over time. We started with a charge on the capacitor and closed the switch. The charge flowed back and forth from one plate of the capacitor to the other, passing through the inductor and resistor in both directions. 

As the current passes through the inductor, it stores energy in the magnetic field surrounding the inductor. That energy returns to the circuit by pushing charge along. Each cycle of oscillation is a little lower than the previous, because of the energy lost as the moving charge heats up the resistor.

The swinging pendulum is a mechanical analog of the $\text{RLC}$ electrical circuit. It helps you envision what is happening in the circuit.
