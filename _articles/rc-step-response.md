---
layout: article
title:  "RC step response"
author: Willy McAllister
comments: true
---

When something changes in a circuit, like a switch closes, the voltages and currents adjust to the new conditions. If the change is an abrupt step the response is called the *step response*. An step is a common way to give a circuit a little "kick" to see what it does. It tells us quite a lot about the properties of the circuit.

We apply an abrupt step in voltage to a resistor-capacitor $(\text{RC})$ circuit and watch what happens to the voltage across the capacitor, $\goldC{v(t)}$. 

![](https://ka-perseus-images.s3.amazonaws.com/6e0d45edf50d5a38379352c45938a80b181eb0e5.svg){: .centered :}{: height="200px"} 

This type of step response happens billions of times per second inside all digital devices. 

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
 
Where $\text V_\text S$ is the height of the input step, and $\text V_0$ is the initial voltage on the capacitor. 

We introduce the method of *forced plus natural response* to solve the non-homogeneous differential equation that models the $\text R\text C$ circuit.

----

Here's the circuit we are going to study,

![](https://ka-perseus-images.s3.amazonaws.com/6e0d45edf50d5a38379352c45938a80b181eb0e5.svg){: .centered :}{: height="200px"} 

The input is an abrupt voltage step from $0$ to $\text V_{\text S}$. We want to find the voltage on the capacitor, $v$ as a function of time. 

### Initial state

We always start by looking at what happens before the switch closes. 

Before the switch is closed, $t<0$, the schematic tells us an initial voltage exists on the capacitor: $v(0) = \text V_0$. 

![](https://ka-perseus-images.s3.amazonaws.com/71c5042d22b054bf42119221bd33e670407dce43.svg){: .centered :}{: height="200px"} 

We know the current in the circuit is $i = 0$ because the switch is open. These are the *initial conditions* of the circuit.

### Final state

Next we jump to way after the step and figure out where the circuit finishes up after a long time. 

If we close the switch at $t=0$, current will start flowing around the now-completed circuit. Current will continue to flow as long as there is a voltage difference across the resistor.

![](https://ka-perseus-images.s3.amazonaws.com/79fb31e5beb86051571f7d907e4feea98a54d5b7.svg){: .centered :}{: height="200px"} 

At some point in the future, the capacitor voltage, $v$, will become the same as the source voltage, $\text V_\text S$. When this happens, the voltage across the resistor, $\text V_\text S -v$, will be $0$, and current will fall to $i = 0$. This is the *final state* of the circuit. 

Summary: The circuit starts with no current, and ends with no current, but the voltage and current do something inbetween start and end. 

### Transient period

Finally, we look at what happens inbetween the switch closing and a long time from now.

Between the initial state and the final state the current and voltage adjust to new conditions imposed by the voltage source. This is called the *transient period*, when things are changing. The change $v$ makes during this time is the *transient response* of the $\text{RC}$ circuit. In our example, the switch closing event applies a voltage step to the $\text{RC}$ circuit, so  this is also called the *step response*.  

We will use our knowledge of the initial and final states, plus what we know about $\text R$ and $\text C$, to come up with a precise understanding of the transient response.

## Formal derivation of the $\text{RC}$ step response

To start the analysis of this circuit, we write a current equation for the top right node using [Kirchhoff's Current Law]({{ site.baseurl }}{% link _articles/kirchhoffs-current-law.md %}). We sum the currents flowing out of the node,

![](https://ka-perseus-images.s3.amazonaws.com/c761d3e699c3ebc62c3b6030718df97c962035fb.svg){: .centered :}{: height="200px"} 

<p>$\begin{array}{lccc}
&i_\text R && + && i_\text C &=  0 \\
\\
&\dfrac{v - \text V_\text S}{\text R} && + && \text C\,\dfrac{dv}{dt}&= 0
\end{array}$
</p>

We rearrange the terms a little to format it like a differential equation,

$\dfrac{v}{\text R} - \dfrac{\text V_\text S}{\text R} + \text C\,\dfrac{dv}{dt} = 0$

$\text C\,\dfrac{dv}{dt} + \dfrac{v}{\text R}  = \dfrac{\text V_\text S}{\text R}$

$\dfrac{dv}{dt} + \dfrac{v}{\text{RC}} = \dfrac{\text V_\text S}{\text{RC}}$ 

initial condition:$\quad v(0) = \text V_0$

This is the differential equation we have to solve. The right side has this term: $\text V_\text S/\text{RC}$. This is not $v$ or a derivative of $v$. Because of this, we say the equation is *non-homogeneous*.

Solving a non-homogeneous differential equation is not the simplest thing in the world, so we will come up with a strategy.

## Strategy: forced response plus natural response

The two complications (input signal and initial conditions) make solving a non-homogeneous equation somewhat of a chore, the math can be tricky. Our strategy, as usual, is to break the problem into parts.  We separate the larger problem into two simpler problems by teasing apart the *forced* and *natural* response. Solving the forced and natural responses separately is simpler than going head-on at the non-homogeneous equation.

What is *forced response*? The forced response is where the output (the voltage on the capacitor) is going to end up in the long run after all stored energy eventually dissipates. The forced response does this by ignoring the presence of energy storage elements (in this case, it ignores the capacitor and its initial voltage). 

The forced response can't tell us what happens at the beginning when the switch closes, or during the transition to the final state, because it ignores the stored energy. For that, we need the natural response.

The *natural response* tells us what the circuit does as its internal stored energy (the initial voltage on the capacitor) is allowed to dissipate. It does this by ignoring the forcing input (the voltage step caused by the switch closing). The "destination" of the natural response is always zero voltage and zero current. 

In the end, we combine the forced and natural responses to get the full story. The forced response impresses its will on the natural response and gives it a destination different from zero. This gives us the *total response*.

## Forced plus natural is superposition

The forced response considers the external inputs.  
The natural response considers the internal initial conditions.  
We get the *total response* by summing the two.  
This is the principle of [superposition]({{ site.baseurl }}{% link _articles/superposition.md %}) in action.

<p>
$\begin{array}{c l c c}
&& \underline{\text{Initial conditions}}& \underline{\text{Inputs}} \\
& \text{forced response} & 0 & {in(t)} \\
+ &\text{natural response} & \text{i.c.'s} & 0 \\
= &\overline{\text{total response}\phantom{xxx}} & \text{i.c.'s} & {in(t)}
\end{array}$
</p>

$v_t = v_f + v_n$

(The subscripts $t$, $f$, and $n$ stand for total, forced, and natural responses.)

<details>
<summary>Other names for the same thing</summary>
<p>Mathematicians use these terms. You may see them in a linear algebra class.</p>

<p>$\begin{array}{c l c c}
   && \underline{\text{Initial conditions}}& \underline{\text{Inputs}} \\
  & \text{particular solution} & 0 & {in(t)} \\
+  &\text{homogeneous solution} & \text{i.c.'s} & 0 \\
= & \overline{\text{complete solution}\phantom{xxx}} & \text{i.c.'s} & {in(t)}
\end{array}$
</p>

<p>The homogeneous solution can also be called the <em>complementary</em> solution.</p> 
## Formal

<p>More jargon,</p>
<p>Our differential equation is a <br> <em>non-homogeneous first-order constant-coefficient ordinary differential equation</em>. <br>What a mouthful.</p> 

<ul>
<li>Homogeneous means the equation contains $v$ and derivatives of $v$, and nothing else.</li>
<li>Non-homogeneous means there is some term that's not $v$ or its derivatives. The equation for the driven $\text{RC}$ circuit has a $\text V_{\text S} term.</li> 
<li>First-order means the highest derivative is the first derivative $dv/dt$.</li>
<li>Constant coefficient means the values of the components $(\text{R, C, etc.})$ are constant and do not change as time goes by.</li> 
<li>Ordinary means there is just one independent variable, $v$.</li>
</ul>
</details> 

## Solving a driven circuit

The steps for solving a circuit driven by an external source are,

* Set the initial conditions to $0$ and solve the forced response. 
* Set the input to $0$, and solve the natural response.
* Add the forced response to the natural response to get the total response.
* Use the initial conditions to resolve any constants. 

### Forced response of the RC circuit

 The forced response, $\goldD{v_f(t)}$, is the part of the total response caused directly by the input, while assuming the initial conditions are all $0$. We forget about the initial conditions for the moment, and search for a solution to the non-homogeneous differential equation. The solution for the forced response is usually a scaled version of the input. 

![](https://ka-perseus-images.s3.amazonaws.com/9f7c7b59a74999142269dd5c51b583d7e2f2e00a.svg){: .centered :}{: height="200px"} 

Prior to $t=0$ we know the forced response is zero, because the voltage source is disconnected from the resistor and capacitor.

For $t>0$ the equation is:

$\dfrac{dv_f}{dt} + \dfrac{v_f}{\text{RC}} = \dfrac{\text V_\text S}{\text{RC}}$

Our approach is to guess at a solution for the forced response, $v_f$, and try it out. For the forced response, a good guess is something that resembles the input. Since the input is a constant for $t>0$, let's guess the forced response is also a constant:

$v_{f} = K_f$

Plug this into the differential equation for $t>0$ to see what happens:

$\dfrac{dK_f}{dt} + \dfrac{K_f}{\text{RC}} = \dfrac{\text V_\text S}{\text{RC}}$

The leading derivative term is $0$, leaving us with:

$\dfrac{K_f}{\text{RC}} = \dfrac{\text V_\text S}{\text{RC}}$

So the forced differential equation becomes true if:

$v_{f} = K_f = \text V_\text S$

This is our forced response,

web+graphie://ka-perseus-graphie.s3.amazonaws.com/76ff3305c41df3ca5945d4065bba79f44abbb2fc

(It looks exactly like the input. That doesn't always happen.)

### Natural response of the RC circuit

Now we solve the natural response. (You can review the derivation in detail in [RC natural response](w/a/ee-rc-natural-response).) For the natural response, we suppress (turn off, set to zero) the input and solve just the circuit itself.

![](https://ka-perseus-images.s3.amazonaws.com/dee62d832b9e3b62844f6eef4497a1af9da6f9e3.svg){: .centered :}{: height="200px"} 

Turning off the input means replacing the voltage source with a short. When we suppress the inputs, the right side of the original non-homogeneous differential equation becomes $0$, turning it into a *homogeneous* differential equation. (We know how to solve these.)

$\dfrac{dv_n}{dt} + \dfrac{v_n}{\text{RC}} = 0$

We propose a solution for $v_n$ in the form of an exponential with two adjustable parameters, and try it out.

$v_n = K_n\,e^{st}$

This plugs into the homogeneous  differential equation. 

$sK_ne^{st} + \dfrac{1}{\text{RC}}K_ne^{st} = 0$

We can factor out the common $K_ne^{st}$ term:

$K_ne^{st}\,\left (s + \dfrac{1}{\text{RC}} \right ) = 0$

If $K_n$ and $e^{st}$ are finite, $K_ne^{st}$ never becomes $0$.  If either of them does become $0$, the answer is boring. However, we get a non-trivial solution if:

$s + \dfrac{1}{\text{RC}} = 0$

This is called the *characteristic equation* of the $\text{RC}$ system. We will see a lot more of these in the future.

$s=-\dfrac{1}{\text{RC}}$

This gives us the natural response:

$v_n = K_ne^{-t/\text{RC}}$

web+graphie://ka-perseus-graphie.s3.amazonaws.com/53f5fb3220cde76f01b9bfc318b08db8aa7a8816

Doing this homogeneous equation thing allowed us to come up with $s$ and a natural response. The natural response is a property of just the $\text{RC}$ circuit, and isn't all tangled up with some input function. We still have to figure out $K_n$. We'll do that in a moment, as part of the total response.

## Total response = forced + natural response

The forced response took into account the input signal.  
The natural response took into account the internal initial conditions.  
Now we merge them to get the total response, which accounts for both.  

$v_t = v_f + v_n$

$v_t = \text V_\text S + K_ne^{-t/\text{RC}}$

### Use the initial conditions to find $K_n$

This is the point where we use the initial conditions to figure out $K_n$. We know the total response at time $t=0$ has to be $v_t = \text V_0$. (The *total* response, not just the natural response.)  Let's plug what we know about $t=0$ into the total response equation:

$\text V_0 = \text V_\text S + K_ne^{-0/\text{RC}}$

The exponential expression turns into $1$, and we are left with:

$\text V_0 = \text V_\text S + K_n$

$K_n = \text V_0 - \text V_\text S$

### Assemble the total response

Now we put $\text V_0 - \text V_\text S$ into the total response and get:

$v_t = \text V_\text S + (\text V_0 - \text V_\text S)e^{-t/\text{RC}}$

web+graphie://ka-perseus-graphie.s3.amazonaws.com/28dd690df5d6d29cb71b36616a766756afdfcdb9

And that's it. This is the total response to a voltage step for a series $\text{RC}$ combination.

If the capacitor had no initial voltage, $v(0) = 0$, then the equation for the total response is:

$v_t = \text V_\text S - \text V_\text S\,e^{-t/\text{RC}}$

or

$v_t = \text V_\text S \, \left (1 - e^{-t/\text{RC}}\right )$

"web+graphie://ka-perseus-graphie.s3.amazonaws.com/0866f4834cad5647d1d5fb5a98fb90118d7456e8

## Closing remarks

The natural response ignores the input and tells us what the isolated circuit will do as its stored energy is allowed to dissipate. The destination of a natural response is always zero. 

The forced response ignores the energy stored in the circuit and tells us where the output voltage is going to end up in the long run, long after all the initial stored energy dissipates.

The forced response gives the natural response a new destination. In our example, the new destination was $\text V_\text S$.

## Summary
{:.no_toc}

We talked about how to solve a resistor-capacitor circuit with a driving voltage. We used Kirchhoff's Current Law to create a differential equation representing the circuit. Then we solved it by the method of *forced and natural response*. 

* The *forced response* is what the circuit does with the sources turned on, but with the initial conditions set to zero.

* The *natural response* is what the circuit does including the initial conditions, but with the input suppressed.

* The *total response* is the sum of the  *forced response* plus the *natural response*. These responses can be combined using the principle of superposition. 

total response = forced response + natural response

For a series $\text R\text C$ network, the step response is:

$v = \text V_\text S + (\text V_0 - \text V_\text S)\,e^{-t/\text{RC}}$
 
$\text V_\text S$ is the step voltage and $\text V_0$ is the initial voltage on the capacitor.
