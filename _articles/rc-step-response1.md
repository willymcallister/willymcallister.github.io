---
layout: article
title:  "RC step response1"
author: Willy McAllister
comments: true
---

When something changes in a circuit, the voltages and currents adjust to the new conditions. If the change is an abrupt step the response is called the *step response*. 

![RC step response circuit]({% link i/rc_step1.svg %}){: .centered :}

The $\text{RC}$ step response is *the most important* analog circuit. In analog systems it is the building block for filters and signal processing. It sets the speed limit for how fast digital system run---happening billions of times a second inside computers and other digital devices. 

Before diving into the step response derivation you may want to review two articles, [RC natural response - intuition]({% link _articles/rc-natural-response-intuition.md %}), and [RC natural response - derivation]({% link _articles/rc-natural-response-derivation.md %}). To gain an intuitive understanding for this circuit see [RC step response - intuition]({% link _articles/rc-step-response-intuition.md %}). There is a fair amount of new vocabulary introduced in this derivation. Relax and let it soak in slowly. 

Written by Willy McAllister. 

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

### Where we're headed 
{:.no_toc}

The step response of an $\text R\text C$ circuit is,

$v(t) = \text V_\text S + (\text V_0 - \text V_\text S)\,e^{-t/\text{RC}}$
 
where $v(t)$ is the voltage on the capacitor, $\text V_0$ is the beginning voltage of the step, and $\text V_\text S$ is the ending voltage of the step. 

----

Apply an abrupt step to a resistor-capacitor $(\text{RC})$ circuit and watch the voltage across the capacitor. A step input is a common way to give a circuit a little "kick" to see what it does. The step response tells us quite a lot about the properties of the $\text{RC}$ circuit.

This is the circuit we will study,

![RC step response circuit]({% link i/rc_step1a.svg %}){: height="150px" :}{: .centered }

The input is an abrupt voltage step that starts at $\text V_0$ and instantly jumps to $\text V_{\text S}$ at $t = 0$.  
We want to find the voltage on the capacitor, $\goldC{v(t)}$, as a function of time. 

{% capture summary %}instantaneous step{% endcapture %}  
{% capture details %}  
A step function is a mathematical idea. The voltage has only two values, $\text V_0$ and $\text V_{\text S}$. There are no in-between values. When we draw a step with an orange vertical line at $t = 0$ it's simply a graphical connection between the top and bottom horizontal lines. The vertical line isn't meant to suggest intermediate voltage values exist at $t = 0$. 

Technically, the step function does not meet the definition of a mathematical function, since there's this discontinuous weirdness at $t=0$. You will see how we deal with that when we determine the initial conditions.   

In the real world step functions always have some finite slope. We still call it a step if the slope is really steep relative to the response of the $\text{RC}$ circuit. It's close enough to an ideal step if it looks like a step on the time scale we are interested in.  
{% endcapture %}{% include details.html %} 

It is awkward to express a mathematical model of a step source. There is an equivalent way to draw this circuit. We change the source to a constant voltage $\text V_{\text S}$ and add a switch to cause the step. The initial voltage, $\text V_0$, is placed directly on the capacitor,

![Alternative RC step response derivation circuit]({% link i/rc_step_alt1.svg %}){: height="180px" :}{: .centered :}

The starting voltage on the capacitor is the *initial condition*, also called the *boundary condition*. The moment of flipping the switch establishes a boundary.

{% capture summary %}How did $\text V_0$ get there?{% endcapture %}  
{% capture details %}  
If you just have to know how the initial charge got onto $\text C$, here's a circuit that does that,

![RC step circuit initialized to V0]({% link i/rc_step_alt1a.svg %}){: .centered :}{: height="160px" :}

Both switches are thrown at the exact same moment. The switch on the right opens, and the one on the left closes at $t = 0$. Prior to $t = 0$ the voltage source on the right charges the capacitor up to $\text V_0$.
{% endcapture %}{% include details.html %} 

## Model the circuit

We start by modeling the circuit with [Kirchhoff's Current Law]({% link _articles/kirchhoffs-current-law.md %}) for the two currents flowing *out* of the top right node, then replace each current with the proper $i$-$v$ expression,

<p>
$\begin{array}{cccc}
i_\text R & + & i_\text C &=  0 \\
\\
\dfrac{v - \text V_\text S}{\text R} & + & \text C\,\dfrac{dv}{dt}&= 0
\end{array}$
</p>

Rearrange the terms a little to format it like a differential equation. Collect the $v$ terms on the left side and put the non-$v$ terms on the right side. We like to have a coefficient of $1$ on the $dv/dt$ term,

$\dfrac{v}{\text R} - \dfrac{\text V_\text S}{\text R} + \text C\,\dfrac{dv}{dt} = 0$

$\text C\,\dfrac{dv}{dt} + \dfrac{v}{\text R}  = \dfrac{\text V_\text S}{\text R}$

$\dfrac{dv}{dt} + \dfrac{v}{\text{RC}} = \dfrac{\text V_\text S}{\text{RC}}\qquad$ with initial condition: $v(0) = \text V_0$

This is the differential equation we have to solve. 

## It is hard to solve

There's an important difference between this equation and the one we derived for the $\text{RC}$ natural response shown here,

$\dfrac{dv}{dt} + \dfrac{v}{\text{RC}} = 0\qquad$  with initial condition: $v(0) = \text V_0$

There was no voltage source for the natural response circuit, and the right side of the differential equation is $0$. The natural response equation is *homogeneous*. That means all terms involve the independent variable $v$ or derivatives of $v$. 

For the step response we got a non-zero number on the right side, 

$\dfrac{dv}{dt} + \dfrac{v}{\text{RC}} = \dfrac{\text V_\text S}{\text{RC}}\qquad$ with initial condition: $v(0) = \text V_0$

The term on the right, $\dfrac{\text V_\text S}{\text{RC}}$, is not related to $v$ or a derivative of $v$. Because of this, this equation is *non-homogeneous*. 

Solving a non-homogeneous differential equation is not the simplest thing in the world. In fact it is usually a pain in the neck. Fortunately, this non-homogeneous equation is solvable without too much torture. Lucky us.

The electrical reason the step response is challenging is because of the two energy sources. Energy comes from 1. the input voltage source and 2. the initial charge on the capacitor. The trouble is the two energy sources have no relationship to each other. This complicates the problem and makes it difficult to solve all at once. 

As usual, when a problem involves two energy sources engineers wonder if superposition can somehow be applied. **This is NOT a classical EE superposition (different energy sources), it is a differential equation theory. We are taking a "math route" to the answer**

## Solve a driven circuit

We find the step function using the method of *homogeneous and particular solutions*, based on a non-obvious theory of differential equations, stated here without proof, 

>The total solution to a non-homogeneous differential equation can be found by the sum of the **general** solution of the circuit's natural response with **any particular** response (found without regard for the initial conditions), followed by applying the initial conditions to resolve unknown constants.

This is a pretty bold theory to state without proof. It is central to finding the step response. For the moment please take it on faith. [Here]({% link _articles/differential-equations.md %}) is my attempt to explain. If you have taken a differential equation class, what we are doing is called the [method of undetermined coefficients](https://www.khanacademy.org/math/differential-equations/second-order-differential-equations#undetermined-coefficients). 

In mathematical vocabulary the the theory says,

Complete solution = homogeneous solution + particular solution 

$v_c = v_h + v_p\qquad$ subject to initial conditions

The subscripts $c$, $h$, and $p$ stand for complete solution, homogeneous solution, and a particular solution. 

In circuit vocabulary the notation becomes,

Complete response = Natural response (zero input) + forced response (zero state)

$v_{tot} = v_n + v_f\qquad$ subject to initial conditions

where $tot$, $n$, and $f$ stand for total response, natural response, and the forced response. 

**NOTE: These are not exactly the same thing according to Felipe Ribas.** 

The theory allows us to pick *any* particular response---we could choose any of the myriad solutions described by the general solution. However... Ingenious part: We hunt for exactly one particular response, one that is relatively easy to find and has a nice real-world significance. Somewhere in the family of curves represented by the general solution you always find *the one* particular response that corresponds to the long-term steady-state behavior of the circuit---the place the circuit ends up after the natural response dies out. You might say the forced response is one particular particular response. 

{% capture details %}
What is meant by,  
"Somewhere in the family of curves represented by the general solution you can always find the one particular response that corresponds to the the long-term behavior of the circuit."?

Here's an example of what I'm talking about. This is the general solution to the [$\text{RC}$ natural response]({% link _articles/rc-natural-response-derivation.md %}#general-solution),

$v = K\,e^{-t/\text{RC}}$

Let's look at what the general solution represents. The general solution is an infinite family of functions that all make the differential equation true. We plot this equation with different values of $K$. Here are a few of them,

{% include d3/rc_natural_response_general_p.html %}
The family of particular solutions represented by the general solution. 
{: .caption :}

The natural response has no forcing function. The only energy in the system is the initial charge on the capacitor. After a long time that initial energy dissipates and the voltage approaches $0$. So the long-term steady-state response for any value of $K$ is $v = 0$. 

Find the particular response that's a straight line along the time axis, the line $v = 0$ (bold orange). This particular response is interesting---out of all possible particular responses this one matches the steady-state response at all times, not just after a long time. (It is the particular solution we would choose if the initial voltage $\text V_0$ happened to be $0$.)

The point of this example is to show how the long-term steady-state response appears somewhere in the general solution. We will use this little nugget in a little while.

When we drive the RC circuit with a step function the steady-state response is no longer zero---it will be some other value.
{% endcapture %}
{% capture summary %}example{% endcapture %}{% include details.html %} 

## Strategy

The steps to solve a driven circuit,

1. Find the general form of the natural response. Do this by suppressing the driven input (set the input to $0$). Ignore the initial conditions for now.
2. Find the forced response. The forced response is the one particular solution that looks like a scaled version of the input forcing function.  Keep ignoring the initial conditions. (Sometimes the proposed solution might need to include the input function *plus* its derivatives.)
3. Superimpose (add) the natural response to the forced response to get the total response.
4. Last, apply the initial conditions to the total response and resolve the unknown constants.  

Holding off the initial conditions until this last step allows the natural and forced response to blend together to create the transition from initial state to steady state.

{% capture summary %}so many terms{% endcapture %}  
{% capture details %}  
There are so many terms used in math and engineering related to this type of differential equation. Don't try to memorize all this.

* Natural response is the *homogeneous solution* or the *force-free solution* or the *complementary solution* (because it complements the particular solution). In control systems you might see it called the *free response*.

* Forced response is a *particular solution* chosen from the general solution. Not just any particular solution but the one specifically derived from the the long term behavior of the circuit, the *steady-state response*.

* Total response is also called the *complete solution*.

Even more,

Our differential equation is a mouthful, it is a   
*non-homogeneous first-order constant-coefficient ordinary differential equation*.

What does all this mean?

* *Homogeneous* means the equation contains $v$ and derivatives of $v$, and nothing else. The natural response equation is homogeneous.
* *Non-homogeneous* or *inhomogeneous* means there is some term that's not $v$ or one of its derivatives. Our step response differential equation includes a $\text V_{\text S}$ term not related to $v$, so it is non-homogeneous. 
* *First-order* means the highest derivative is the first derivative $dv/dt$. If there was a second derivative, $dv^2/d^2v$, it would be a *second-order* equation. $\text{LC}$ and $\text{RLC}$ circuits produces second-order equations.
* *Constant coefficient* means the values of the components $\text R$ and $\text C$ are constant and do not change as time goes by. This is also referred to as *time invariant*. You may see a system described by the acronym LTI for *linear time invariant*. LTI means if you run the circuit today and tomorrow with the same initial conditions it will do the same thing both days. It's a nice property.
* *Ordinary* means there is just one independent variable, $t$.  
{% endcapture %}{% include details.html %} 

Let's work our strategy and see what happens.

## Natural response

To find $v_n$, the natural response, we suppress (turn off, set to zero) the input,

{% capture image %}rc_step4a.svg{% endcapture %} 
{% capture alt %}RC step with input suppressed{% endcapture %}
{% capture height %}180px{% endcapture %}
{% capture caption %}Find the natural response with the input suppressed. To suppress a voltage source, replace it with a short. (For more on suppressing sources see [Superposition]({% link _articles/superposition.md %}#suppress-the-inputs).){% endcapture %} 
{% include image_centered_with_caption.html %}

We already worked through the [$\text{RC}$ natural response]({% link _articles/rc-natural-response-derivation.md %}) in great detail. We quickly repeat the derivation here. 

Write a [KCL]({% link _articles/kirchhoffs-current-law.md %}) equation for the upper right node. Then model the two passive components by their $i$-$v$ equations,

<p>
$\begin{array}{cccc}
i_\text C & + & i_\text R &=  0 \\
\\
\text C\,\dfrac{dv}{dt} & + & \dfrac{v_n}{\text R}&= 0
\end{array}$
</p>

to get this differential equation, 

$\dfrac{dv_n}{dt} + \dfrac{v_n}{\text{RC}} = 0$

Notice: When we suppress the input, the right side of the differential equation comes out $0$, so it is a *homogeneous* differential equation.

Propose a solution in the form of an exponential with two adjustable parameters, $K_n$ and $s$,

$v_n = K_n\,e^{st}$

Test the proposed solution to see if it makes the differential equation true. Plug $v_n$ into the homogeneous equation,

$\dfrac{d}{dt}K_n\,e^{st} + \dfrac{1}{\text{RC}}K_n\,e^{st} = 0$

Perform the derivative in the first term, 

$sK_n\,e^{st} + \dfrac{1}{\text{RC}}K_n\,e^{st} = 0$

The common $K_n\,e^{st}$ term can be factored out,

$K_n\,e^{st}\,\left (s + \dfrac{1}{\text{RC}} \right ) = 0$

To make this equation true, one of the three terms in the product on the left side has to be $0$. We could set $K_n$ to $0$, which means there was no initial energy stored in the capacitor. Or, the term $e^{st}$ becomes zero if $s$ is negative and we wait for $t$ to go to infinity. (All natural responses approach $0$ if you wait long enough.) Something interesting happens if we make the third term $0$,

$s + \dfrac{1}{\text{RC}} = 0$

This is the *characteristic equation* of the $\text{RC}$ natural response. Solve the characteristic equation for $s$ (find the roots of the characteristic equation).

$s=-\dfrac{1}{\text{RC}}$

Put this value of $s$ back into the proposed solution. This gives us the *general form* of the natural response for $t > 0$,

$v_n = K_n\,e^{-t/\text{RC}}$

{% include d3/rc_natural_response_general.html %}
General solution to the $\text{RC}$ natural response. $v_n = K_n\, e^{-t/\text{RC}}$  
{: .caption :}

This general solution is an infinite family of curves based on all possible values of $K_n$. The natural response is an exponential curve whose rate of descent is determined by the product $\text{RC}$. If you set $t = 0$ the equation tells you $K_n$ corresponds to the voltage at $t = 0$. We hold off figuring out a specific value of $K_n$ until after we assemble the total response.

## Forced response 

The superposition theory says we win with *any* particular solution to the differential equation. However, we won't go for *any* particular solution, but rather for a special one, the  particular solution that corresponds to the long-term steady-state of the circuit. It gets a special name, the *forced response*.

For this step we return to the original non-homogeneous equation,

$\dfrac{dv}{dt} + \dfrac{v}{\text{RC}} = \dfrac{\text V_\text S}{\text{RC}}$

{% capture details %}
When I first studied non-homogeneous equations I got depressed when the original equation showed up again. What's with all this special superposition theory and natural response if we still have to solve the original hard equation? The key that unlocks the treasure: This time we get to ignore the initial condition while finding the forced response. That cracks the door open and keeps us from going crazy. 

Think back to when we derived the natural response. The solution had to make the differential equation happy *and* had to satisfy the initial conditions. That's not the case for the forced response---we apply for the initial condition *after* we do the superposition.

{% endcapture %}
{% capture summary %}What? This again? You said this was really hard! {% endcapture %}{% include details.html %}

Look at the equation and make an intelligent guess at a voltage function that might solve it. 

Whatever $v$ is, if we hope to make both sides equal it has to bear some resemblance to the function on the right side---so let's propose a solution that looks like the right side. Since the right side is a constant we propose a yet-to-be-determined[^1] arbitrary constant,

[^1]: *yet-to-be-determined* --- Definition: do not know or have not decided; will in the future.

$v_f = K_f$

Pop this into the non-homogeneous equation and see if this $v_f$ makes the equation true,

$\dfrac{d}{dt} K_f + \dfrac{K_f}{\text{RC}} \stackrel{?}{=} \dfrac{\text V_\text S}{\text{RC}}$

In the first term, the derivative of a constant is always $0$,

$0 + \dfrac{K_f}{\text{RC}} \stackrel{?}{=} \dfrac{\text V_\text S}{\text{RC}}$

The equation comes true when what? When,

$K_f = \text V_\text S$

This resolves the arbitrary constant $K_f$, which means we did what the superposition theory said, we found a *particular solution* for $v_f$,

$v_f = \text V_\text S$ 

{% include d3/rc_step_forced_response.html %}
A particular solution for the $\text{RC}$ step is $v_f(t) = \text V_\text S$, also known as the forced response.
{: .caption :}

We call this particular response the *forced response* because our proposed solution was derived from the *forced input*.

#### Things to notice about the forced response
{:.no_toc}

Notice: The particular solution turned out to be similar to the forcing input. That is why engineers give this particular solution a special name---the *forced response*.

Notice: The forced response is exactly the input step. That doesn't always happen for every forced input, but it did this time. 

Notice: The force response solves the equation but completely misses the initial condition, $v(0) = \text V_0$. That's okay. The natural response will take care of that when we do the superposition.
  
Notice: While the forced response is plotted for all time after $t=0$ you can't observe it with an oscilloscope. The same holds for the natural response component. When we do the upcoming superposition to find the total response we *can* observe that with an oscilloscope.

{% capture details %}  
What if you guess a forced response and it doesn't work? Let's see what that looks like. Here's an example of a guess that doesn't work. 

Suppose you guess the solution is a constant $\times$ time, $v_f = K_f\,t$.  
When you plug $v_f$ into the differential equation,

$\dfrac{d}{dt}K_f\,t + \dfrac{K_f\,t}{\text{RC}} = \dfrac{\text V_\text S}{\text{RC}}$

You get, 

$K_f + \dfrac{K_f\,t}{\text{RC}} = \dfrac{\text V_\text S}{\text{RC}}$

When you solve this for $K_f$ no amount of algebra will get rid of the $t$ term. This means $K_f$ depends on time, so it's not constant. That's a fail for this proposed solution.  
{% endcapture %}
{% capture summary %}What happens if the guess is wrong?{% endcapture %}  
{% include details.html %} 

## Add natural and forced

The total response is the superimposition (sum) of the natural and forced responses,

<p>
$\begin{array}{cccc}
v_{tot} = & v_n &+& v_f \\
\\
v_{tot} = & K_n\,e^{-t/\text{RC}} &+& \text V_\text S
\end{array}$
</p>

This equation represents the *general* solution to the step response because it has one remaining undetermined constant. The general solution is the infinite family of all possible particular solutions,

{% include d3/rc_step_response_general.html %}
General solution to the $\text{RC}$ step response. $v_{tot} = K_n\, e^{-t/\text{RC}} + \text V_\text S$
{: .caption :}

Look at the plot and find the particular solution that is a horizontal straight line at $v = \text V_\text S$ (hint: the fifth one from the top). That's the particular solution we found above---we named it the forced response. 

## Apply the initial conditions

Now, finally, we apply the initial conditions to figure out the remaining unknown $K_n$.

We know the voltage at a particular point in time: At $t = 0$ the voltage is $\text V_0$, the initial voltage on the capacitor. We find a $K_n$ such that the *total* response---not just the natural response---matches this boundary condition. 

In the total response expression set $t$ to $0$ and replace $v_{tot}$ with $\text V_0$,

$\text V_0 = K_n\,e^{-0/\text{RC}} + \text V_\text S$

The exponential expression becomes $1$ and we are left with,

$\text V_0 = K_n + \text V_\text S$

Solving for $K_n$,

$K_n = \text V_0 - \text V_\text S$

## Step response

Replace $K_n$ in the total response and we have the step response we've been looking for,

$\boxed{v_{tot} = (\text V_0 - \text V_\text S)\,e^{-t/\text{RC}} + \text V_\text S}$

The total response looks like this,

{% include d3/rc_step_response_total.html %}
The $\text{RC}$ step total response. $v_{tot} = (\text V_0 - \text V_\text S)\,e^{-t/\text{RC}} + \text V_\text S$
{: .caption :}

We've done it! This is the response of an $\text{RC}$ network to a step voltage.

What did $K_n$ turn out to be? $K_n$ is the difference between the starting and ending voltages, $\text V_0 - \text V_\text S$, which is just the right value to flip the natural response term over if needed and make it fit perfectly between start and end.

## No charge on the capacitor
{:.no_toc}

If the capacitor starts with no initial charge then $\text V_0 = 0$, and the total response expression gets a little simpler,

$v_{tot} = (0 - \text V_\text S)\,e^{-t/\text{RC}} + \text V_\text S$

$v_{tot} = - \text V_\text S\,e^{-t/\text{RC}} + \text V_\text S$

or

$\boxed{v_{tot} = \text V_\text S \left (1 - e^{-t/\text{RC}}\right )}$

{% include d3/rc_step_response_total0.html %}
If the capacitor voltage starts at $0$ the RC step total response is $v_{tot} = \text V_\text S \, \left (1 - e^{-t/\text{RC}}\right )$.
{: .caption :}

## What to remember

You don't need to memorize the equation for the step response, but you should remember what happens, 
* The voltage starts at some initial value prior to the step, $\text V_0$. 
* When the step arrives the voltage heads toward the destination voltage, $\text V_\text S$, rising (or falling) with a smooth *exponential* shape controlled by the time constant, $\text{RC}$. 
* The output approaches $\text V_\text S$, the steady-state value forced by the input.

## Concept check

Suppose the input voltage makes another step in the downward direction a little later, from $\text V_{\text S}$ back down to $\text V_0$. Assume the original $\text V_0 = 2\,\text V$ and $\text V_{\text S} = 6\,\text V$. 

Let $\text R = 3\,\text K\Omega$, $\text C = 0.4\,\mu\text F$.

**How does the capacitor voltage respond?** 

Hint: Reverse the roles of the high and low voltages, so you can think of it this way,  
$\text V_0$ (starting voltage) $= 6\,\text V$ and $\text V_{\text S}$ (ending voltage) $= 2\,\text V$.

$v(t) = $  \_\_\_\_\_\_\__ 

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
The moment of interest is the downward step, so reassign $t=0$ to be the time of the downward step. By repositioning $t=0$ we can use the step response expression above. 

$v(t) = \text V_\text S + (\text V_0 - \text V_\text S)\,e^{-t/\text{RC}}$

$v(t) = 2 + (6 - 2)\,e^{-t/(3\,\text k \,\cdot \, 0.4 \,\mu)}$

$v(t) = 2 + 4\,e^{-t/1.2\,\text{msec}}$  
{% endcapture %}{% include details.html %} 

## Simulation model

To explore further, run this [simulation model](https://spinningnumbers.org/circuit-sandbox/index.html?value=%5B%5B%22w%22%2C%5B264%2C64%2C264%2C88%5D%5D%2C%5B%22v%22%2C%5B104%2C88%2C0%5D%2C%7B%22name%22%3A%22Vs%22%2C%22value%22%3A%22step(2%2C6%2C1m%2C1n)%22%2C%22_json_%22%3A1%7D%2C%5B%221%22%2C%220%22%5D%5D%2C%5B%22r%22%2C%5B168%2C64%2C7%5D%2C%7B%22name%22%3A%22R%22%2C%22r%22%3A%223000%22%2C%22_json_%22%3A2%7D%2C%5B%221%22%2C%222%22%5D%5D%2C%5B%22w%22%2C%5B104%2C136%2C104%2C152%5D%5D%2C%5B%22w%22%2C%5B264%2C152%2C264%2C136%5D%5D%2C%5B%22w%22%2C%5B168%2C64%2C104%2C64%5D%5D%2C%5B%22g%22%2C%5B192%2C152%2C0%5D%2C%7B%22_json_%22%3A6%7D%2C%5B%220%22%5D%5D%2C%5B%22w%22%2C%5B104%2C152%2C192%2C152%5D%5D%2C%5B%22w%22%2C%5B264%2C152%2C192%2C152%5D%5D%2C%5B%22s%22%2C%5B264%2C64%2C0%5D%2C%7B%22color%22%3A%22cyan%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A9%7D%2C%5B%222%22%5D%5D%2C%5B%22w%22%2C%5B104%2C88%2C104%2C64%5D%5D%2C%5B%22c%22%2C%5B264%2C88%2C0%5D%2C%7B%22name%22%3A%22C%22%2C%22c%22%3A%220.4u%22%2C%22_json_%22%3A11%7D%2C%5B%222%22%2C%220%22%5D%5D%2C%5B%22w%22%2C%5B216%2C64%2C264%2C64%5D%5D%2C%5B%22s%22%2C%5B104%2C64%2C0%5D%2C%7B%22color%22%3A%22red%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A13%7D%2C%5B%221%22%5D%5D%2C%5B%22view%22%2C60.428%2C29.1336%2C3.0517578125%2C%2250%22%2C%2210%22%2C%221G%22%2Cnull%2C%22100%22%2C%220.009%22%2C%221000%22%5D%5D) in a new browser tab.

* Click on **DC** in the top menu bar to perform a static DC analysis. What is the initial voltage on the capacitor? 
* Click on **TRAN** to run a transient analysis (voltage versus time). See the $\text{RC}$ step response for voltage and current. What are the starting and ending voltages of the step input (red)? What is the final voltage on the capacitor (cyan)?
* Double click on the voltage source. Change the start and end voltages and see what happens. What happens if the start voltage is higher than the end voltage?
* Add a current probe anywhere in the loop and give it a distinct color. **TRAN** again. What is the current at the start and end? Describe what happens in between.
* Change the voltage source from **step** to **square**. Reset the low and high voltages to 2V and 6V. Set the frequency to $50\,\text{Hz}$. Change the **TRAN** time to $29\,\text{msec}$. Compare the down step to an up step. What is different? What is the same?
* Change the square wave frequency to $200\,\text{Hz}$ and **TRAN** again. Describe what happens. 
* Zoom out the schematic page and build a copy of the circuit next to the original. Try different values for $\text R$ and $\text C$ in the new circuit. Add a voltage probe to the new circuit. Simulate and compare both voltages on the same graph.

## Summary
{:.no_toc}

We solved an $\text{RC}$ network driven by a step voltage. We used Kirchhoff's Current Law to create a non-homogeneous differential equation representing the circuit. In differential equation vocabulary we superimposed the homogeneous solution with a particular solution. In engineering vocabulary we superimposed the natural response with the forced response. 

* The *natural response* is what the circuit does with its initial energy, with the input suppressed. The natural response always fades to $0$.

* The *forced response* is the engineering name for the particular response corresponding to the long-term steady-state circuit response.

* The *total response* is the *natural response* plus the *forced response*. 

The step response of an $\text R\text C$ network is,

$v = \text V_\text S + (\text V_0 - \text V_\text S)\,e^{-t/\text{RC}}$
 
where $\text V_\text S$ is the step voltage and $\text V_0$ is the starting voltage on the capacitor.

If the capacitor voltage starts at $0$ the step response expression is a bit simpler,

$v = \text V_\text S \, \left (1 - e^{-t/\text{RC}}\right )$

----
## Appendix - Separable differential equation

It is possible to solve this non-homogeneous differential equation directly, without using the principle of superposition and without guessing an exponential solution. 

$\dfrac{dv}{dt} + \dfrac{v}{\text{RC}} = \dfrac{\text V_\text S}{\text{RC}}$ 

This turns out to be a *separable* differential equation. If you learned this technique in a differential equations class you can solve both the $\text{RC}$ and $\text{RL}$ steps function with this method.

A differential equation is separable if you can sort all the voltage terms, $v$'s and $dv$'s, into a product on one side and sort the time terms, $dt$'s, into a product on the other side. That happens with this equation.

This isn't the usual way to teach this circuit because the method doesn't generalize to other forcing inputs, and it does not provide insight into the natural and forced components of the solution.

![RC step response circuit]({% link i/rc_step1.svg %}){: .centered :}

The non-homogeneous differential equation is,

$\dfrac{dv}{dt} + \dfrac{v}{\text{RC}} = \dfrac{\text V_\text S}{\text{RC}}\qquad$ with initial condition: $v(0) = \text V_0$

Rearrange terms to isolate the derivative,

$\dfrac{dv}{dt} = -\dfrac{v - \text V_\text S}{\text{RC}}$

Rearrange again to separate the $v$ and $dv$ terms to one side and $dt$ term to the other,

$\dfrac{dv}{v - \text V_\text S} = - \dfrac{dt}{\text{RC}}$

Integrate both sides and apply the initial condition,

<p>
$\begin{aligned}
\displaystyle \int_{\text V_0}^{v(t)}{\dfrac{dv}{v - \text V_\text S}} &= - \int_0^t{\dfrac{dt}{\text{RC}}} \\
\\
\ln(v - \text V_\text S) \,\bigg \vert_{V_0}^{v(t)} &= - \dfrac{t}{\text{RC}}\,\bigg \vert_0^{t} \\
\\
\ln(v(t) - \text V_\text S) - \ln(\text V_0 - \text V_\text S) &= -\dfrac{t}{\text{RC}} + 0 \\
\\
\ln \dfrac{v(t) - \text V_\text S}{\text V_0 - \text V_\text S} &= -\dfrac{t}{\text{RC}}
\end{aligned}$
</p>

Clear the natural log by taking the exponential of both sides,

$\dfrac{v(t) - \text V_\text S}{\text V_0 - \text V_\text S} = e^{-t/\text{RC}}$

Rearrange to isolate $v(t)$ on the left side,

$v(t) - \text V_\text S = (\text V_0 - \text V_\text S) e^{-t/\text{RC}}$

And we get the same result we came up with in the main article,

$v(t) = \text V_\text S + (\text V_0 - \text V_\text S)\,e^{-t/\text{RC}}$

Sal has a sequence of videos where he covers this type of [separable differential equation](https://www.khanacademy.org/math/ap-calculus-ab/ab-diff-equations/ab-separable-eq/v/separable-differential-equations-introduction). He does a [worked example](https://www.khanacademy.org/math/differential-equations/first-order-differential-equations/exponential-models-diff-eq/v/modeling-population-with-simple-differential-equation) to solve a population growth problem.

The derivation in this appendix is from Alexander and Sadiku, *Fundamentals of Electric Circuits*, 5th Edition, p. 274.

----
Footnotes:
