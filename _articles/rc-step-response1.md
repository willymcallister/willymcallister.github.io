---
layout: article
title:  "RC step response1"
author: Willy McAllister
comments: true
---

When something changes in a circuit, the voltages and currents adjust to the new conditions. If the change is an abrupt step the response is called the *step response*.

![RC step response circuit]({% link i/rc_step1.svg %}){: .centered :}

The $\text{RC}$ step response is the most important analog circuit. In digital systems it sets the speed limit for how fast the system can run. It happens billions of times a second in computers and other digital devices. In analog systems it is the basic building block for filters and signal processing.

Before diving into the step response you may want to review two articles, [RC natural response - intuition]({% link _articles/rc-natural-response-intuition.md %}), and [RC natural response - derivation]({% link _articles/rc-natural-response-derivation.md %}). To develop an intuitive understanding for what this circuit does see [RC step response - intuition]({% link _articles/rc-step-response-intuition.md %}).

There is a fair amount of new vocabulary associated introduced in this derivation. Stay relaxed and let it soak in slowly. We use the method of *natural response plus forced response* to solve the challenging *non-homogeneous* differential equation that models the $\text R\text C$ step circuit. 

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

Real world step functions always have some finite slope. We still call it a step if the slope is really steep relative to the response of the $\text{RC}$ circuit. It's close enough to an ideal step if it looks like a step on the time scale we are interested in.  
{% endcapture %}{% include details.html %} 

It is awkward to express a mathematical model of a step source. There is an equivalent way to draw this circuit. We change the source to a constant voltage $\text V_{\text S}$ and add a switch to cause the step. The initial voltage, $\text V_0$, is placed directly on the capacitor,

![Alternative RC step response derivation circuit]({% link i/rc_step_alt1.svg %}){: height="180px" :}{: .centered :}

The starting voltage on the capacitor is the *initial condition*, also called the *boundary condition*. The moment of flipping the switch establishes a boundary.

{% capture summary %}How did $\text V_0$ get there?{% endcapture %}  
{% capture details %}  
If you just have to know how the initial charge got onto $\text C$, here's a circuit that does that,

![RC step circuit initialized to V0]({% link i/rc_step_alt1a.svg %}){: .centered :}{: height="160px" :}

Both switches are thrown at the exact same moment. The one on the right opens, and the one on the left closes at $t = 0$. Prior to $t = 0$ the voltage source on the right charges the capacitor up to $\text V_0$.
{% endcapture %}{% include details.html %} 

We start by modeling the circuit with a [KCL]({% link _articles/kirchhoffs-current-law.md %}) equation for the two currents flowing *out* of the top right node, then replace each current with the proper $i$-$v$ expression,

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

### It is hard to solve

There's an important difference between this equation and the one we derived for the natural response...

$\dfrac{dv}{dt} + \dfrac{v}{\text{RC}} = 0\qquad$  with initial condition: $v(0) = \text V_0$

There was no voltage source for the natural response circuit, and the right side of the differential equation is $0$. The natural response equation is *homogeneous*. That means all terms involve the independent variable $v$ or derivatives of $v$. 

For the step response the right side is a non-zero number, 

$\dfrac{dv}{dt} + \dfrac{v}{\text{RC}} = \dfrac{\text V_\text S}{\text{RC}}\qquad$ with initial condition: $v(0) = \text V_0$

The term on the right side, $\dfrac{\text V_\text S}{\text{RC}}$, is not related to $v$ or a derivative of $v$. Because of this, the equation is *non-homogeneous*. 

Solving a non-homogeneous differential equation is not the simplest thing in the world. In fact it is usually a pain in the neck. Fortunately, this equation is solvable without too much torture. Lucky us.

The electrical reason the step response is challenging is because of the two energy sources. Energy comes from the input voltage source---and---the initial charge on the capacitor. The trouble is the two energy sources have no relationship to each other. This complicates the problem and makes it difficult to solve all at once. 

As usual, when a problem involves two energy sources engineers think about superposition. 

---

### Solve a driven circuit

We find the step function using a non-obvious theory of differential equations, stated here without proof, 

>The total solution to a non-homogeneous differential equation can be found by the superposition (addition) of the circuit's natural response with **any** particular response (found without regard for the initial conditions), followed by using the initial conditions to resolve unknown constants.

This is a pretty bold theory to state without proof. It is central to finding the step response. For the moment please take it on faith. [Here]({% link _articles/differential-equations.md %}) is my attempt to explain.

In mathematical vocabulary the the theory says,

$v_c = v_h + v_p\qquad$ subject to initial conditions

The subscripts $c$, $h$, and $p$ stand for complete solution, homogeneous solution, and particular solution.  

In circuit vocabulary the notation becomes,

$v_{tot} = v_n + v_f\qquad$ subject to some initial conditions

where $t$, $n$, and $f$ stand for total response, natural response, and forced response. 

The theory allows us to pick *any* particular response---we could choose any of the myriad solutions described by the general solution. However... Ingenious part: The particular response we hunt for has a nice real-world significance. Somewhere in the family of curves represented by the general solution you can always find *the one* that corresponds to the long-term steady-state behavior of the circuit---the place the circuit ends up after the natural response dies out. After the natural response dies out the circuit exhibits its *forced response*. You might say the forced response is one particular particular response. 

{% capture details %}
"Somewhere in the family of curves represented by the general solution you can always find *the one* that corresponds to the the long-term behavior of the circuit."

Here's an example of what I'm talking about, from the RC Natural Response. Recall the general solution to the [RC natural response]({% link _articles/rc-natural-response-derivation.md %}#general-solution),

$v(t) = Ke^{-t/\text{RC}}$

{% include d3/rc_natural_response_general_p.html %}

The plot shows the family of particular solutions represented by the general solution to the RC natural response. Every one of them ends up at zero after a long time. 

For the natural response there is no forcing function. The only energy in the system is the initial charge on the capacitor. After a long time that initial energy fully dissipates and the voltage approaches $0$. The long-term *steady-state* response is $v = 0$. 

Find the particular response right in the middle that's a straight line along the time axis. This one is interesting because it matches the long-term steady-state response for all time. It is the particular solution we would choose if the initial voltage $\text V_0$ was $0$.

The point of this example is to show the steady-state or forced response is included in a general solution. If we hold off on evaluating the initial conditions the steady-state solution can be found somewhere as part of the general solution.

When we add a step input to the RC circuit the steady-state response is no longer zero---it will be some other value. Keep reading to find out where the story goes.
{% endcapture %}
{% capture summary %}example{% endcapture %}{% include details.html %} 

### Strategy

The steps to solve a driven circuit,

1. Suppress the driven input (set the input to $0$) and find the general form of the natural response. (The general form is after you solve the characteristic equation but before you use the initial conditions to find the unknown constants.)
2. Ignoring the initial conditions, find a forced response that solves the non-homogeneous differential equation. Specifically, find the particular solution that looks like a scaled version of the input forcing function. (Sometimes you might have to include derivatives of the input function in the proposed solution.)
3. Superimpose (add) the natural response to the forced response to get the total response.
4. Lastly, apply the initial conditions to resolve the unknown constants. (Holding off the initial conditions until this last step allows the natural and forced response to blend together to create the transition from initial state to steady state.)
{% capture summary %}so many terms{% endcapture %}  
{% capture details %}  
There are many different terms used in math, physics, and engineering related to this type of differential equation. Be aware of these, but don't bother to memorize them. 

* Natural response is the *homogeneous solution* or the *force-free solution* or the *complementary solution* (because it complements the particular solution).

* Forced response is a *particular solution* chosen from the general solution. Not just any particular solution, but one specifically derived from the the *steady-state response*.

* Total response is also called the *complete solution*.

Even more,

Our differential equation is a mouthful, it is a   
*non-homogeneous first-order constant-coefficient ordinary differential equation*.

What does all this mean?

* *Homogeneous* means the equation contains $v$ and derivatives of $v$, and nothing else. The natural response equation is homogeneous.
* *Non-homogeneous* or *inhomogeneous* means there is some term that's not $v$ or one of its derivatives. Our step response equation has a $\text V_{\text S}$ term not related to $v$, so it is non-homogeneous. 
* *First-order* means the highest derivative is the first derivative $dv/dt$. If there was a second derivative, $dv^2/d^2v$, it would be a *second-order* equation.
* *Constant coefficient* means the values of the components $(\text{R, C})$ are constant and do not change as time goes by. This is also referred to as *time invariant*. You may see a system described by the acronym LTI for *linear time invariant*. LTI means if you run the circuit today and tomorrow with the same initial conditions it will do the same thing both days. It's a nice property.
* *Ordinary* means there is just one independent variable, $t$.  
{% endcapture %}{% include details.html %} 

### Natural response

To find the natural response $v_n$ we suppress (turn off, set to zero) the input.

{% capture image %}rc_step4a.svg{% endcapture %} 
{% capture alt %}RC step with input suppressed{% endcapture %}
{% capture height %}180px{% endcapture %}
{% capture caption %}Natural response with the input voltage source suppressed.{% endcapture %} 
{% include image_centered_with_caption.html %}

Suppressing or turning off the input means replacing the voltage source with a short. (For more on suppressing sources see [Superposition]({% link _articles/superposition.md %}#suppress-the-inputs).) 

We already worked through the [RC natural response]({% link _articles/rc-natural-response-derivation.md %}) in great detail. We quickly repeat it here. 

Model the two passive components by their $i$-$v$ equations and use [KCL]({% link _articles/kirchhoffs-current-law.md %}) to assemble this differential equation, 

$\dfrac{dv_n}{dt} + \dfrac{v_n}{\text{RC}} = 0$

Notice: With the input suppressed, the right side of the original non-homogeneous differential equation becomes $0$, turning it into a *homogeneous* differential equation.

Propose a solution in the form of an exponential with two adjustable parameters, $K_n$ and $s$,

$v_n = K_n\,e^{st}$

Now test the proposed solution to see if it makes the differential equation true. Plug $v_n$ into the homogeneous equation,

$\dfrac{d}{dt}K_n\,e^{st} + \dfrac{1}{\text{RC}}K_n\,e^{st} = 0$

and perform the derivative in the first term, 

$sK_n\,e^{st} + \dfrac{1}{\text{RC}}K_n\,e^{st} = 0$

The common $K_n\,e^{st}$ term can be factored out,

$K_n\,e^{st}\,\left (s + \dfrac{1}{\text{RC}} \right ) = 0$

To make this equation true, the left side has to become $0$. We could set $K_n$ to $0$, which means there was no initial energy. The term $e^{st}$ becomes zero if $s$ is negative and we let $t$ go to infinity. All natural responses approach $0$ if you wait long enough. 

But what happens before that? In the near term something interesting happens if,

$s + \dfrac{1}{\text{RC}} = 0$

This is the *characteristic equation* of the $\text{RC}$ natural response. Solve the characteristic equation for $s$ (find the roots of the characteristic equation).

$s=-\dfrac{1}{\text{RC}}$

This gives us the *general form* of the natural response for $t > 0$,

$v_n = K_n\,e^{-t/\text{RC}}$

{% include d3/rc_step_natural_response_Kn.html %}

The natural response is an exponential curve whose rate of descent to $0$ is determined by the product $\text{RC}$. This general solution represents an infinite family of curves based on the value of $K_n$. We hold off figuring out a specific value of $K_n$. We'll do that after we assemble the total response.

### Particular response 

For this step we return to the original non-homogeneous equation,

$\dfrac{dv}{dt} + \dfrac{v}{\text{RC}} = \dfrac{\text V_\text S}{\text{RC}}\qquad$ initial condition: *ignored*

What! This again! When I first studied non-homogeneous equations it was depressing to come back to the original equation and be asked to solve it. What's with all this special superposition theory and natural response if we still have to solve the original hard equation? The key that unlocks the treasure: This time we get to ignore the initial condition. That cracks the door open and keeps us from going crazy. 

The superposition theory says we are allowed to find *any* particular solution to the differential equation, paying no heed to the initial capacitor voltage. 

Think back to when we derived the natural response. The proposed function had to make the differential equation happy *and* produce a constant based on the initial conditions. That's not the case now---we will account for the initial condition *after* we do the superposition.

Let's make an intelligent guess at a function that would solve the equation. We have extra flexibility because we don't have to worry about the initial condition. Looking at the equation,

$\dfrac{dv}{dt} + \dfrac{v}{\text{RC}} = \dfrac{\text V_\text S}{\text{RC}}$

Whatever $v$ is, it probably has to bear some resemblance to the function on the right side if we hope to make both sides equal. 

In differential equation class, what we are doing is called the [method of undetermined coefficients](https://www.khanacademy.org/math/differential-equations/second-order-differential-equations#undetermined-coefficients).

Let's propose a solution that looks like the right side. Since the right side is a constant, we propose a constant solution,

$v_f(t) = K_f$

Pop this into the non-homogeneous equation and see if this $v_f(t)$ makes the equation true,

$\dfrac{d}{dt} K_f + \dfrac{K_f}{\text{RC}} \stackrel{?}{=} \dfrac{\text V_\text S}{\text{RC}}$

The derivative of a constant is always $0$,

$0 + \dfrac{K_f}{\text{RC}} \stackrel{?}{=} \dfrac{\text V_\text S}{\text{RC}}$

The equation comes true when,

$K_f = \text V_\text S$

In summary, the *general* solution to the non-homogeneous equation is,

$v_f(t) = K_f$

{% include d3/rc_step_forced_general.html %}
The RC forced general solution, $v(t) = K_f$, before resolving the value of the constant. The general solution is a family of curves that all satisfy the non-homogeneous equation.
{: .caption :}

We get the *particular* solution when we pay attention to the given forcing input,

$v_f(t) = \text V_\text S$ 

Notice the particular solution turned out to be similar to (in fact identical to) the forcing input. That's no accident, since the forcing input is what appears on the right side of the equation. That is why engineers call this particular solution the *forced response*, 

{% include d3/rc_step_forced_response.html %}
The RC forced response, $v(t) = \text V_\text S$, one of the particular solutions selected from the general solution to the non-homogeneous equation.
{: .caption :}

Also notice we settled on this result without accounting for the initial conditions. That comes soon.  




# OLD
It’s the same as saying we are looking for the final state, long after the original stored energy has dissipated.

To find the forced response we suppress (set to zero) the initial conditions. In our case, we remove the charge on the capacitor, so $v_\text C = 0$.

{% capture image %}rc_step3.svg{% endcapture %} 
{% capture alt %}Force response with initial voltage suppressed{% endcapture %}
{% capture height %}150px{% endcapture %} 
{% capture caption %}Force response with the initial voltage suppressed.{% endcapture %}
{% include image_centered_with_caption.html %}

The theory cited above says we can construct a function that solves the non-homogeneous equation if we find the natural response (which we just did) and add it to *any* particular solution. You may be skeptical, but I assure you it is true, and we are about to exploit the theory in an ingenious way. 

Recall, a *particular* solution to a differential equation is one selected from the infinite number of solutions described by the *general* solution. We will select one specific particular solution that is remarkably easy to identify, and we will call it the *forced response* (you will see why this is an appropriate name).

The particular response we have our eye on is the one that resembles the input driving signal. 

PLOT THE GENERAL SOLUTION



The forced response is any solution to the differential equation---we don't have to consider the initial condition. It’s the same as saying we are looking for the steady state solution, long after the original stored energy has dissipated.



The forced response often looks like the input plus its derivatives. It usually ends up with the same shape as the input scaled by some factor. In math class, this is called the *method of undetermined coefficients*.

Take a guess at a solution and try it out: Since the input is a constant after the switch closes let's guess the forced response is also a constant,

$v_{f} = K_f\qquad K_f$ is just some number

As usual, we put the proposed solution into the differential equation and see what happens,

$\dfrac{dv}{dt} + \dfrac{v}{\text{RC}} = \dfrac{\text V_\text S}{\text{RC}}$

$\dfrac{d}{dt}K_f + \dfrac{K_f}{\text{RC}} = \dfrac{\text V_\text S}{\text{RC}}$

The leading term is the derivative of a constant, so it becomes $0$. That leaves us with,

$\dfrac{K_f}{\text{RC}} = \dfrac{\text V_\text S}{\text{RC}}$

So the forced differential equation is true if,

$v_{f} = K_f = \text V_\text S$

The forced response for a step input looks like this,

![Forced response plot]({% link i/rc_step_forced_response.svg %}){: .centered :}

The forced response happens to look exactly like the input. (That doesn't always happen.) Notice how the force response solves the equation but completely misses the initial condition, $v(0) = \text V_0$. That's ok. The natural response will take care of that. The forced response tells us after a long time the capacitor voltage will be $\text V_{\text S}$.

In this plot and the others following I'm using a voltage step with $V_0 = 2\,\text V$ and $\text V_{\text S} = 6\,\text V$. 

{% capture summary %}What happens if the guess turns out wrong?{% endcapture %}  
{% capture details %}  
What does it look like if you guess a solution and it doesn't work?

You guess at a solution, like $v(t) = K\text{(something)}$. 
Then you test it by plugging it into the differential equation.
Your guess works if you can solve for the $K$ constant and it actually turns out to be constant (does not change with time).

Here's an example of a guess that doesn't work. Suppose you guess a solution $v(t) = K\cdot t$ (instead of $v(t) = K)$. When you plug v(t) into the differential equation,

$\dfrac{dKt}{dt} + \dfrac{Kt}{\text{RC}} = \dfrac{\text V_\text S}{\text{RC}}$

You get, 

$K + Kt = V/\text{RC}$

When you go to solve this for $K$ you can't get rid of that time term. This says $K$ depends on time, so it's not constant. That's a fail for this proposed solution.  
{% endcapture %}{% include details.html %} 

### Superposition

The natural response takes into account the initial conditions.  
The forced response takes into account the input signal.  
The total response is the superimposition (addition) of the natural and forced responses.

<p>
$\begin{array}{cccc}
v_{tot} = & v_n &+& v_f \\
\\
v_{tot} = & K_n\,e^{-t/\text{RC}} &+& \text V_\text S
\end{array}$
</p>

#### Apply the initial conditions
{:.no_toc}

Now we use the initial conditions to figure out the one remaining unknown $K_n$. 

We know the voltage at a particular point in time. At $t = 0$ the voltage has to be $\text V_0$, the initial voltage on the capacitor. The *total* response has to be this value, not just the natural response.  

In the total response, set $t = 0$ and replace $v_{tot}$ with $\text V_0$,

$\text V_0 = K_n\,e^{-0/\text{RC}} + \text V_\text S$

The exponential expression becomes $1$ and we are left with,

$\text V_0 = K_n + \text V_\text S$

Solving for $K_n$,

$K_n = \text V_0 - \text V_\text S$

Replace $K_n$ in the total response to get the step response we've been looking for,

$v_{tot} = K_n\,e^{-t/\text{RC}} + \text V_\text S$

$v_{tot} = (\text V_0 - \text V_\text S)\,e^{-t/\text{RC}} + \text V_\text S$

$v_{tot}$ looks like this,

{% include d3/rc_step_total_responset.html %}
The RC step total response, $v_{tot} = (\text V_0 - \text V_\text S)\,e^{-t/\text{RC}} + \text V_\text S$, with the given voltage on the capacitor.
{: .caption :}

And we've done it! This is the total response of an $\text{RC}$ network to a voltage step.

#### Starting with no charge on the capacitor
{:.no_toc}

If the capacitor starts with no initial charge then $v(0) = 0$ and the total response is a little simpler,

$v_{tot} = (0 - \text V_\text S)\,e^{-t/\text{RC}} + \text V_\text S$

$v_{tot} = - \text V_\text S\,e^{-t/\text{RC}} + \text V_\text S$

or

$v_{tot} = \text V_\text S \, \left (1 - e^{-t/\text{RC}}\right )$

{% include d3/rc_step_total_response0.html %}
The RC step total response, $v_{tot} = \text V_\text S \, \left (1 - e^{-t/\text{RC}}\right )$, if the capacitor voltage starts at $0$.
{: .caption :}

## Build your intuition

You don't need to memorize the equation for step response, but you should remember what happens, 
* The voltage starts at some initial value prior to the step. 
* When the step arrives the voltage head towards the destination voltage, rising (or falling) with a smooth *exponential* shape controlled by the time constant $\text{RC}$. 
* The output finishes at the steady-state value forced by the input.

## Concept check

Suppose the input voltage makes another step in the downward direction a little later, from $\text V_{\text S}$ back down to $\text V_0$. 

Assume $\text V_0 = 2\,\text V$ and $\text V_{\text S} = 6\,\text V$. Let $\text R = 3\,\text K\Omega$, $\text C = 0.4\,\mu\text F$.

**How does the capacitor voltage respond?**

$v(t) = $  \_\_\_\_\_\_\__ 

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
The moment of interest is the downward step, so reassign $t=0$ to be the time of the downward step. By repositioning $t=0$ we can use the step response expression above. The roles of the high and low voltages are reversed, so you can think of it this way,

$\text V_0$ (starting voltage) $= 6\,\text V$ and $\text V_{\text S}$ (ending voltage) $= 2\,\text V$.

$v(t) = \text V_\text S + (\text V_0 - \text V_\text S)\,e^{-t/\text{RC}}$

$v(t) = 2 + (6 - 2)\,e^{-t/(3\,\text k \,\cdot \, 0.4 \,\mu)}$

$v(t) = 2 + 4\,e^{-t/1.2\,\text{msec}}$  
{% endcapture %}{% include details.html %} 

## Simulation model

To explore further, run this [simulation model](https://spinningnumbers.org/circuit-sandbox/index.html?value=[["v",[104,88,0],{"name":"Vs","value":"step(2,6,1m,1n)","_json_":0},["3","0"]],["r",[168,64,7],{"name":"R","r":"3000","_json_":1},["3","2"]],["w",[104,136,104,152]],["w",[264,152,264,136]],["w",[168,64,104,64]],["g",[192,152,0],{"_json_":5},["0"]],["w",[104,152,192,152]],["w",[264,152,192,152]],["s",[264,64,0],{"color":"cyan","offset":"0","_json_":8},["2"]],["w",[104,88,104,64]],["c",[264,88,0],{"name":"C","c":"0.4u","_json_":10},["1","0"]],["a",[264,72,1],{"color":"magenta","offset":"0","_json_":11},["2","1"]],["w",[216,64,264,64]],["w",[264,64,264,72]],["view",60.428,29.1336,3.0517578125,"50","10","1G",null,"100","0.009","1000"]]) of the circuit.

* Click on **DC** in the top menu bar to perform a static DC analysis. What is the initial voltage on the capacitor? What is the initial current?
* Click on **TRAN** to run a transient analysis (voltage versus time). See the $\text{RC}$ step response for voltage and current. 
* Double click on the voltage source. Change the start and end voltages and see what happens. What happens if the start voltage is higher than the end voltage?
* Change the voltage source from a step to a square wave with a frequency of $50\,\text{Hz}$. **TRAN** again for $50\,\text{msec}$. Compare and contrast a down step to an up step. What is different? What is the same?
* Change the square wave frequency to $200\,\text{Hz}$ and simulate for $25\,\text{msec}$. What happens? Does the voltage get all the way up to $\text V_\text S$? 
* Zoom out the schematic page and build a copy of the circuit right next to the original. Try different values for $\text R$ and $\text C$ in the new circuit. Put probes on the two voltages (delete the current probe). Simulate and compare both voltages on the same graph.

QQQ A primary difference between the natural response and the forced response is the natural response always decays to zero, whereas the forced response has no such restriction. In fact, the forced response will have the same form as the forcing function as time goes to infinity. 

QQQ Look at the step response solution. Part of the equation is the natural response, the term with $e^{-t}$. That term fades away as time passes, leaving behind only the forced response.

## Summary
{:.no_toc}

We solved a resistor-capacitor network driven by a step voltage. We used Kirchhoff's Current Law to create a differential equation representing the circuit. Then we solved it by superposition using the method of *forced plus natural response*. 

* The *forced response* is what the circuit does in response to the input, with the initial conditions set to zero.

* The *natural response* is what the circuit does with its initial conditions, with the input suppressed.

* The *total response* is the  *forced response* plus the *natural response*. 

![RC step response circuit]({% link i/rc_step1a.svg %}){: .centered }

The step response of an $\text R\text C$ network is,

$v(t) = \text V_\text S + (\text V_0 - \text V_\text S)\,e^{-t/\text{RC}}$
 
$\text V_\text S$ is the step voltage and $\text V_0$ is the voltage the capacitor starts with.

![Total response plot ]({% link i/rc_step_total_response1.svg %}){: .centered :}

## Appendix - separable differential equation

It is possible to solve the $\text{RC}$ step function non-homogeneous differential equation directly, without using the principle of superposition and without guessing an exponential form. 

$\dfrac{dv}{dt} + \dfrac{v}{\text{RC}} = \dfrac{\text V_\text S}{\text{RC}}$ 

This turns out to be a *separable* differential equation. A differential equation is separable if it you can sort all the $v$'s and $dv$'s into a product on one side and sort the $dt$'s into a product on the other side. That's what happens with this equation.

If you covered this technique when you studied differential equations, you can solve both the $\text{RC}$ (and $\text{RL}$) step function differential equations with this method, without guessing a solution.

This isn't the usual way to teach this circuit because the method doesn't generalize to other situations very well, and it does not provide insight into the natural and forced components of the solution.

![RC step response circuit]({% link i/rc_step1.svg %}){: .centered :}

The non-homogeneous differential equation is,

$\dfrac{dv}{dt} + \dfrac{v}{\text{RC}} = \dfrac{\text V_\text S}{\text{RC}}\qquad$ with initial condition: $v(0) = \text V_0$

Rearrange terms to isolate the derivative,

$\dfrac{dv}{dt} = -\dfrac{v - \text V_\text S}{\text{RC}}$

Rearrange again to separate the $v$ and $dv$ terms to one side and $dt$ term to the other,

$\dfrac{dv}{v - \text V_\text S} = - \dfrac{dt}{\text{RC}}$

Integrate both sides and include the initial condition,

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

<small>This derivation is from Alexander and Sadiku, *Fundamentals of Electric Circuits*, 5th Edition, p. 274.</small>
