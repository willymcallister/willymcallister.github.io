---
layout: article
title:  "RC step response"
author: Willy McAllister
comments: true
---

When something changes in a circuit, the voltages and currents adjust to the new conditions. If the change is an abrupt step the response is called the *step response*.

We apply an abrupt step in voltage to a resistor-capacitor $(\text{RC})$ circuit and watch what happens to the voltage across the capacitor, $\goldC{v(t)}$. 

![RC step response circuit]({{ site.baseurl }}{% link i/rc_step1.svg %}){: .centered :}

This step response happens billions of times every second inside all digital devices. That means this is the most important analog circuit in all of digital electronics.

We introduce the method of *forced plus natural response* to solve the challenging "non-homogeneous" differential equation that models the $\text R\text C$ step circuit. 

Before diving into the step response you may want to review [RC natural response - intuition]({{ site.baseurl }}{% link _articles/rc-natural-response-intuition.md %}) and [RC natural response - derivation]({{ site.baseurl }}{% link _articles/rc-natural-response-derivation.md %}).

Written by Willy McAllister. 

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

### Where we're headed 
{:.no_toc}

The *step response* of an $\text R\text C$ circuit is,

$v(t) = \text V_\text S + (\text V_0 - \text V_\text S)\,e^{-t/\text{RC}}$
 
Where $\text V_\text S$ is the height of the input step, and $\text V_0$ is the starting voltage on the capacitor. 

This basically says the voltage starts at its starting value, $\text V_0$, and ends at its ending value, $\text V_\text S$. In between, the voltage has an exponential shape with a time constant of $\text{RC}$. 

----

A step input is a common way to give a circuit a little "kick" to see what it does. It tells us quite a lot about the properties of the circuit.

Here's the circuit we are going to study,

![RC step response circuit]({{ site.baseurl }}{% link i/rc_step1a.svg %}){: .centered }

The input is an abrupt voltage step starting at $\text V_0$ and instantly jumps up to $\text V_{\text S}$ at $t = 0$. We want to find the voltage on the capacitor, $\goldC{v(t)}$, as a function of time. 

<details>
<summary>the step is instantaneous</summary>
<p>A step is an ideal mathematical idea that doesn't exist in the real world. The voltage has only two values, $\text V_0$ and $\text V_{\text S}$. There are no in-between values. When we draw a step with a vertical orange line at $t = 0$ it's simply a graphical connection between the top and bottom horizontal lines. The vertical line isn't meant to suggest intermediate voltage values exist at $t = 0$.</p>
<p>In the real world, there will always be some finite slope. We still call it a step if the slope is really steep relative to the response of the $\text{RC}$ circuit. It's close enough to an ideal step if it looks like a step on the time scale we are interested in. </p>
</details>

## Intuition
### Initial state

As always, we start by looking at the state of the circuit before anything happens. 

Prior to $t = 0$ the voltage source provides a constant voltage of $\text V_0$. In the distant past, charge flowed onto the capacitor plates and the capacitor voltage rose. Eventually, the voltage across the resistor, $\text V_0 -v$, became $0$ and current stopped flowing. 

The *initial state* of the circuit is $i(0) = 0$ and $v(0) = \text V_0$.

### Transient period

After the step the circuit makes its adjustments. The time between the initial state and the final state is called the *transient period*. The adjustment the circuit makes is called the *transient response*. Since our input is a step, it is also called the *step response*. 

We've studied an $\text{RC}$ circuit before when we worked out the [natural response]({{ site.baseurl }}{% link _videos/rc-natural-response-intuition.md %}). We learned the $\text{RC}$ natural response has a distinctive exponential shape. When we drive the circuit with a step we can anticipate $i(t)$ and $v(t)$ will have some resemblance to the natural response. 

The *transient period* will probably be some kind of gentle curve.

### Final state

Now jump much later in time to waaaay after the step. The input voltage has been at $\text V_\text S$ for a looong time. Let's figure out where the voltage and current finish up. Current has been flowing around the circuit. More and more charge appears on the capacitor, causing its voltage to rise.

At some point the rising capacitor voltage, $v$, becomes the same as $\text V_\text S$. When this happens, the voltage across the resistor, $\text V_\text S -v$, becomes $0$. Think about Ohm's Law when voltage is zero. There's no longer a reason for current to flow, so it stops. 

The *final state* of the circuit is $i(\infty) = 0$ and $v(\infty) = \text V_\text S$. 

### Intuition summary 

![Intuitive step response plot ]({{ site.baseurl }}{% link i/rc_step_intuition.svg %}){: .centered :}

The voltage starts at an initial value and ends at the step voltage forced by the input. Between the initial and final states, the voltage and current make some sort of interesting transition (three possibilities shown). The circuit starts with no current and ends with no current. In between, some sort of current flows from the source onto the capacitor.

Next, we come up with a precise understanding of the transient response.

## Formal derivation of the $\text{RC}$ step response

![RC step response derivation circuit]({{ site.baseurl }}{% link i/rc_step2a.svg %}){: .centered }

There is another equivalent way to draw this circuit. We change the voltage source to a constant $\text V_{\text S}$ and put in a switch to cause the step. The initial voltage is placed directly on the capacitor,

![Alternative RC step response derivation circuit]({{ site.baseurl }}{% link i/rc_step_alt1.svg %}){: height="180px" :}{: .centered :}

This version of the circuit is a better match to the math coming up since the initial condition, $v(0) = \text V_0$, is more obvious. 

<details>
<summary>how does $\text V_0$ get there?</summary>
<p>I just want you to believe I can put some charge on the capacitor to generate $\text V_0$. If you just have to know, here's a circuit that can do that,</p>

<p><img src="/i/rc_step_alt1a.svg" alt="RC step circuit initialized to V0" style="height:160px;"></p>
<p>Both switches are thrown at the exact same moment. The one on the right opens, and the one on the left closes at $t = 0$.</p>
</details>

We model the circuit by writing an equation for the currents flowing *out* of the top right node using [Kirchhoff's Current Law]({{ site.baseurl }}{% link _articles/kirchhoffs-current-law.md %}),

<p>$\begin{array}{cccc}
 i_\text R && + && i_\text C &=  0 \\
\\
\dfrac{v - \text V_\text S}{\text R} && + && \text C\,\dfrac{dv}{dt}&= 0
\end{array}$
</p>

Let's rearrange the terms a little to format it like a differential equation,

$\dfrac{v}{\text R} - \dfrac{\text V_\text S}{\text R} + \text C\,\dfrac{dv}{dt} = 0$

$\text C\,\dfrac{dv}{dt} + \dfrac{v}{\text R}  = \dfrac{\text V_\text S}{\text R}$

$\dfrac{dv}{dt} + \dfrac{v}{\text{RC}} = \dfrac{\text V_\text S}{\text{RC}}\qquad$ initial condition: $v(0) = \text V_0$

This is the differential equation we have to solve. 

### Why is it so hard to solve?

There's an important difference between this equation and the one we derived for natural response. The right side is $\text V_\text S/\text{RC}$ instead of $0$. $\text V_\text S/\text{RC}$ is not related to $v$ or a derivative of $v$. Because of this, we say this equation is *non-homogeneous*. Solving a non-homogeneous differential equation is not the simplest thing in the world. In fact it is a pain in the neck. 

The reason it's hard to solve is because there are two sources of energy. The input signal and the internal energy stored in the capacitor, and they both show up in the differential equation. The trouble is they have no relationship to each other. The input signal can be anything. This lack of a relationship makes the problem too complicated to solve all at once.  

Our strategy, as usual, is to break the problem into parts. We are going to break the circuit into two simpler circuits. One version will ignore the stored energy, and the other version will ignore the input energy. Then we'll use [superposition]({{ site.baseurl }}{% link _articles/superposition.md %}) to assemble the two circuits back into one.

### Forced response plus natural response

We now describe a strategy you may not have seen before. We separate the hard problem into two simpler problems by teasing apart the *forced response* and the *natural response*. Solving the forced response and natural response separately will lead us to an answer much quicker than attacking the non-homogeneous equation head on.

What is the *forced response*? The input forces the output to go somewhere. In our case, it's where the capacitor voltage ends up in the long run (after all internal energy is allowed to dissipate). The "destination" of the forced response depends on the input forcing function. When we think about the forced response we ignore the internal stored energy. 

What is the *natural response*? The natural response tells us what the circuit does "naturally" as its internal energy dissipates. The "destination" of the natural response is to die away to nothing. Zero voltage and zero current. When we think about the natural response we ignore the input signal. 

Using superposition, we combine (add) the forced and natural responses to get the full story, called the *total response*. The forced response impresses its will on the circuit while the natural response tells us what happens as the system travels to the final state. The forced response causes the natural response to have a destination different from zero.

### Superposition

Why can we do this? How can we justify this strategy? It works because of [superposition]({{ site.baseurl }}{% link _articles/superposition.md %}). Whenever you have a circuit with two energy sources, like two batteries, or an input source plus some internal energy, the possibility of using superposition should pop into your head.

Superposition works on any circuit composed of linear components (resistors, capacitors, inductors), driven by an ideal source. This *forced plus natural* strategy is a great example of superposition in action. 

$v_t = v_f + v_n$

The subscripts $t$, $f$, $n$ stand for total, forced, and natural responses.  

<p>
$\begin{array}{c l c c}
&& \underline{\text{Initial conditions}}& \underline{\text{Inputs}} \\
& v_f \,\text{forced response} & 0 & {in(t)} \\
+ &v_n \,\text{natural response} & \text{i.c.'s} & 0 \\
= &\overline{v_t \,\text{total response}\phantom{xxx}} & \text{i.c.'s} & {in(t)}
\end{array}$
</p>

Internally stored energy is referred to as the *initial conditions*, or i.c.'s.

<details>
<summary>math vocab</summary>
<p>Mathematicians use the following terms. You may see them in linear algebra class.</p>

<p>$\begin{array}{c l c c}
   && \underline{\text{Initial conditions}}& \underline{\text{Inputs}} \\
  & \text{particular solution} & 0 & {in(t)} \\
+  &\text{homogeneous solution} & \text{i.c.'s} & 0 \\
= & \overline{\text{complete solution}\phantom{xxx}} & \text{i.c.'s} & {in(t)}
\end{array}$
</p>

<p>The homogeneous solution can also be called the <em>complementary</em> solution.</p> 
<p>More math jargon,</p>
<p>Our differential equation is a mouthful, <br> <em>non-homogeneous first-order constant-coefficient ordinary differential equation</em>.</p>
<ul>
<li>*Homogeneous* means the equation contains $v$ and derivatives of $v$, and nothing else. Specifically, there is no constant term.</li>
<li>*Non-homogeneous* means there is some term that's not $v$ or one of its derivatives. Our equation has a $\text V_{\text S}$ term not related to $v$.</li> 
<li>*First-order* means the highest derivative is the first derivative $dv/dt$.</li>
<li>*Constant coefficient* means the values of the components $(\text{R, C})$ are constant and do not change as time goes by.</li> 
<li>*Ordinary* means there is just one independent variable, $t$.</li>
</ul>
</details> 

### Solving a driven circuit

The steps for solving a circuit driven by an external input are,

* Solve the forced response with the initial conditions set to $0$.
* Solve the natural response with the input to $0$.
* Add the forced response to the natural response to get the total response.
* Use the initial conditions to resolve any unknown constants. 

### Forced response

For the forced response, $\goldC{v_f(t)}$, we want to find any solution to the differential equation, and we don't have to pay attention to the initial condition at the beginning of the step. That's the key to finding the forced response without going crazy. It’s the same as saying we are looking for the final state, long after the original stored energy has dissipated.

![Forced response circuit]({{ site.baseurl }}{% link i/rc_step3.svg %}){: .centered :}{: height="180px" :}

The forced response often looks like the input plus its derivatives. It usually ends up with the same shape as the input scaled by some factor. 

Take a guess at a solution and try it out: Since the input is a constant after the switch closes let's guess the forced response is also a constant,

$v_{f} = K_f$ where $K_f$ is some number.

Plug this proposed solution into the differential equation and see what happens,

$\dfrac{dK_f}{dt} + \dfrac{K_f}{\text{RC}} = \dfrac{\text V_\text S}{\text{RC}}$

The leading term is the derivative of a constant, so it becomes $0$. That leaves us with,

$\dfrac{K_f}{\text{RC}} = \dfrac{\text V_\text S}{\text{RC}}$

So the forced differential equation is true if,

$v_{f} = K_f = \text V_\text S$

The forced response for a step input looks like this,

![Forced response plot]({{ site.baseurl }}{% link i/rc_step_forced_response.svg %}){: .centered :}

The forced response happens to look exactly like the input. (That doesn't always happen.) Notice how the force response solves the equation but completely misses the initial condition, $v(0) = \text V_0$. That's ok. The natural response will take care of that. The forced response tells us after a long time the capacitor voltage will be $\text V_{\text S}$.

In this plot and the others following I'm using a voltage step with $V_0 = 2\,\text V$ and $\text V_{\text S} = 6\,\text V$. 

<details>
<summary>What happens if the guess is wrong?</summary>
<p>What does it look like if you guess at a solution and it doesn't work?</p>

<p>You guess at a solution, like $v(t) = K\text{(something)}$. 
Then you test it by plugging it into the differential equation.
Your guess works if you can solve for the $K$ constant and it actually turns out to be a constant.</p>

<p>As an example, suppose you guessed a solution $v(t) = K\cdot t$ (instead of $v(t) = K)$. When you plug v(t) into the differential equation,</p>

<p>$\dfrac{dKt}{dt} + \dfrac{Kt}{\text{RC}} = \dfrac{\text V_\text S}{\text{RC}}$</p>

<p>You get,</p> 

<p>$K + Kt = V/\text{RC}$</p>

<p>When you go to solve this for $K$ you can't get rid of that time term. This says $K$ depends on time, so it's not constant. That's a fail for this proposed solution.</p>
</details>

### Natural response

Now we solve the natural response. (We worked through the full derivation in [RC natural response - derivation]({{ site.baseurl }}{% link _articles/rc-natural-response-derivation.md %}). The derivation below is pretty quick.) For the natural response we use the initial conditions but suppress (turn off, set to zero) the input.

![Step response natural response circuit]({{ site.baseurl }}{% link i/rc_step4.svg %}){: .centered :}{: height="180px" :}

Turning off the input means replacing the voltage source with a short. The voltage across a short is $0$. (If the input comes from a current source, we would replace it with an open circuit. For more on suppressing sources see [Superposition]({{ site.baseurl }}{% link _articles/superposition.md %}).) 

When we suppress the input, the right side of the original non-homogeneous differential equation becomes $0$, turning it into a *homogeneous* differential equation. (Yay, we know how to solve these.)

$\dfrac{dv_n}{dt} + \dfrac{v_n}{\text{RC}} = 0$

We propose a solution for $v_n$ in the form of an exponential with two adjustable parameters,

$v_n = K_n\,e^{st}$

This plugs into the homogeneous differential equation, 

$sK_n\,e^{st} + \dfrac{1}{\text{RC}}K_n\,e^{st} = 0$

We factor out the common $K_n\,e^{st}$ term,

$K_n\,e^{st}\,\left (s + \dfrac{1}{\text{RC}} \right ) = 0$

If $K_n$ and $e^{st}$ are finite, $K_n\,e^{st}$ never becomes $0$.  If either of them does become $0$, the answer is boring. However, we get a non-trivial solution if,

$s + \dfrac{1}{\text{RC}} = 0$

This is called the *characteristic equation* of the $\text{RC}$ system. We will see a lot more of these in the future. Solve the characteristic equation for $s$, (this is also called "find the roots of the characteristic equation").

$s=-\dfrac{1}{\text{RC}}$

This gives us the general form of the natural response,

$v_n = K_n\,e^{-t/\text{RC}}$

![Natural response plot general form]({{ site.baseurl }}{% link i/rc_step_natural_response_Kn.svg %}){: .centered :}

The natural response is an exponential curve whose speed of descent is determined by the product $\text{RC}$. We still have to figure out the specific value of $K_n$. We'll do that in a moment, as part of the total response.

### Total response

The forced response took into account the input signal.  
The natural response took into account the initial conditions.  
Now we merge them to get the total response, accounting for both,

$v_t = v_f + v_n$

$v_t = \text V_\text S + K_n\,e^{-t/\text{RC}}$

#### Use the initial conditions to find $K_n$
{:.no_toc}

This is the point where we use the initial conditions to figure out $K_n$. We have to know what the voltage is supposed to be at some point in time. At $t = 0$ we know the voltage has to be $v_t = \text V_0$. (The *total* response voltage, not just the natural response.)  Let's make $t = 0$ and replace $v_t$ with $\text V_0$ in the total response equation,

$\text V_0 = \text V_\text S + K_n\,e^{-0/\text{RC}}$

The exponential expression turns into $1$, and we are left with,

$\text V_0 = \text V_\text S + K_n$

Which gives us $K_n$,

$K_n = \text V_0 - \text V_\text S$

We replace $K_n$ with $\text V_0 - \text V_\text S$ to give us the step response we've been looking for,

$v_t = \text V_\text S + (\text V_0 - \text V_\text S)\,e^{-t/\text{RC}}$

$v_t$ looks like this,

![Total response plot ]({{ site.baseurl }}{% link i/rc_step_total_response1.svg %}){: .centered :}

And we've done it! This is the total response of an $\text{RC}$ network to a voltage step.

#### Starting from $0$
{:.no_toc}

If the capacitor starts with no initial charge, $v(0) = 0$, the total response expression is a little simpler,

$v_t = \text V_\text S + (0 - \text V_\text S)\,e^{-t/\text{RC}} = \text V_\text S - \text V_\text S\,e^{-t/\text{RC}}$

or

$v_t = \text V_\text S \, \left (1 - e^{-t/\text{RC}}\right )$

![Total response with V0 = 0 ]({{ site.baseurl }}{% link i/rc_step_total_response2.svg %}){: .centered :}

## Informed intuition

You don't need to memorize the equation for step response. You know what happens, 
* The output starts at some value before the step. 
* When the step arrives, the output voltage head towards the destination, rising (or falling) with a smooth *exponential* shape controlled by the time constant $\text{RC}$. 
* The output finishes at some new value.

This is the analog circuit all computer hardware designers deeply understand. It sets the speed limit for how fast a digital system can run. The resistor comes from the driving gate plus the wiring. The capacitance comes from the wiring plus the input pin of driven gate.

## Concept check

Suppose the input voltage makes another step in the downward direction a little later, from $\text V_{\text S}$ back down to $\text V_0$. 

Assume $\text V_0 = 2\,\text V$ and $\text V_{\text S} = 6\,\text V$. Let $\text R = 3\,\text K\Omega$, $\text C = 0.4\,\mu\text F$.

**How does the capacitor voltage respond?**

$v(t) = $  \_\_\_\_\_\_\__ 

<details>
<summary>show answer</summary>
<p>The moment of interest is the downward step, so reassign $t=0$ to be the time of the downward step. By repositioning $t=0$ we can use the step response expression above. The roles of the high and low voltages are reversed, so you can think of it this way,</p>

<p>$\text V_0$ (starting voltage) $= 6\,\text V$ and $\text V_{\text S}$ (ending voltage) $= 2\,\text V$.</p>

<p>$v(t) = \text V_\text S + (\text V_0 - \text V_\text S)\,e^{-t/\text{RC}}$
</p>

<p>$v(t) = 2 + (6 - 2)\,e^{-t/(3\,\text k \,\cdot \, 0.4 \,\mu)}$</p>

<p>$v(t) = 2 + 4\,e^{-t/1.2\,\text{msec}}$</p>
</details>

## Simulation model

To explore further, run this [simulation model](https://spinningnumbers.org/circuit-sandbox/index.html?value=[["v",[104,88,0],{"name":"Vs","value":"step(2,6,1m,1n)","_json_":0},["3","0"]],["r",[168,64,7],{"name":"R","r":"3000","_json_":1},["3","2"]],["w",[104,136,104,152]],["w",[264,152,264,136]],["w",[168,64,104,64]],["g",[192,152,0],{"_json_":5},["0"]],["w",[104,152,192,152]],["w",[264,152,192,152]],["s",[264,64,0],{"color":"cyan","offset":"0","_json_":8},["2"]],["w",[104,88,104,64]],["c",[264,88,0],{"name":"C","c":"0.4u","_json_":10},["1","0"]],["a",[264,72,1],{"color":"magenta","offset":"0","_json_":11},["2","1"]],["w",[216,64,264,64]],["w",[264,64,264,72]],["view",60.428,29.1336,3.0517578125,"50","10","1G",null,"100","0.009","1000"]]) of the circuit.

* Click on **DC** in the top menu bar to perform a static DC analysis. What is the initial voltage on the capacitor? What is the initial current?
* Click on **TRAN** to run a transient analysis (voltage versus time). See the $\text{RC}$ step response for voltage and current. 
* Double click on the voltage source. Change the start and end voltages and see what happens. What happens if the start voltage is higher than the end voltage?
* Change the voltage source from a step to a square wave with a frequency of $50\,\text{Hz}$. **TRAN** again for $50\,\text{msec}$. Compare and contrast a down step to an up step. What is different? What is the same?
* Change the square wave frequency to $200\,\text{Hz}$ and simulate for $25\,\text{msec}$. What happens? Does the voltage get all the way up to $\text V_\text S$? 
* Zoom out the schematic page and build a copy of the circuit right next to the original. Try different values for $\text R$ and $\text C$ in the new circuit. Put probes on the two voltages (delete the current probe). Simulate and compare both voltages on the same graph.

## Summary
{:.no_toc}

We solved a resistor-capacitor network driven by a step voltage. We used Kirchhoff's Current Law to create a differential equation representing the circuit. Then we solved it by superposition using the method of *forced plus natural response*. 

* The *forced response* is what the circuit does in response to the input, with the initial conditions set to zero.

* The *natural response* is what the circuit does with its initial conditions, with the input suppressed.

* The *total response* is the  *forced response* plus the *natural response*. 

![RC step response circuit]({{ site.baseurl }}{% link i/rc_step1a.svg %}){: .centered }

The step response of an $\text R\text C$ network is,

$v(t) = \text V_\text S + (\text V_0 - \text V_\text S)\,e^{-t/\text{RC}}$
 
$\text V_\text S$ is the step voltage and $\text V_0$ is the voltage the capacitor starts with.

![Total response plot ]({{ site.baseurl }}{% link i/rc_step_total_response1.svg %}){: .centered :}
