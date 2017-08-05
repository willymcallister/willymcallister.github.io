---
layout: article
title:  "RLC natural response - derivation"
author: Willy McAllister
comments: true
---

We take a deep look at the natural response of a resistor-inductor-capacitor circuit $(\text{RLC)}$. This is the last circuit we'll analyze with the full differential equation treatment.

![](https://ka-perseus-images.s3.amazonaws.com/7bf2a85a2432376373d66e4a86fe015fdb5f5570.svg){: .centered :}

The $\text{RLC}$ circuit is representative of real life circuits we actually build, since every real circuit has some finite resistance, inductance, and capacitance. This circuit has a rich and complex behavior that shows up in many areas of electrical engineering.

Written by Willy McAllister.

----

### Contents
{: .no_toc :}

* Will be replaced with the ToC
{: toc :}

----

### Where we're headed 
{: .no_toc :}
 
The $\text{RLC}$ circuit can be modeled with a $2$nd-order linear differential equation, with current $i$ is the independent variable,

$\text L \,\dfrac{d^2i}{dt^2} + \text R\,\dfrac{di}{dt} + \dfrac{1}{\text C}\,i = 0$

The resulting characteristic equation is,

$s^2 + \dfrac{\text R}{\text L}s + \dfrac{1}{\text{LC}} = 0$

We find the roots of the characteristic equation using the quadratic formula,

$s=\dfrac{-\text R \pm\sqrt{\text R^2-4\text L/\text C}}{2\text L}$

It is common to write $s$ a little simpler by substituting variables $\alpha$ and $\omega_o$, like this,

Let $\quad \alpha = \dfrac{\text R}{2\text L}\quad$ and $\quad\omega_o = \dfrac{1}{\sqrt{\text{LC}}}$

Then $\quad s=-\alpha \pm\,\sqrt{\alpha^2 - \omega_o^2}$

$\alpha$ is called the *damping factor* and $\omega_o$ is called the *resonant frequency*. 

The article concludes with a worked example with specific component values. We discover what the current and voltages look like.

-----

## Our strategy

We follow the same line of reasoning we used when we worked on the second-order [LC](https://www.khanacademy.org/science/electrical-engineering/ee-circuit-analysis-topic/ee-natural-and-forced-response/a/ee-lc-natural-response) circuit in an earlier article. 

1. Create a second-order differential equation based on the $i$-$v$ equations for $\text R$, $\text L$, and $\text C$. Use Kirchhoff's Voltage Law (sum of voltages around a loop) to assemble the equation.
2. Make an informed guess at a solution.  
As usual, our guess will be an exponential function of the form $Ke^{st}$.
3. Insert the proposed solution into the differential equation. Do a little algebra to factor out the exponential terms and leave us with a *characteristic equation* in the variable $s$.
4. Find the roots of the characteristic equation. This time we will need to use the quadratic formula to solve for the roots. 
5. Find the constants by accounting for the initial conditions.
6. Celebrate the solution!

## Model the circuit with a differential equation

Here's a picture of the circuit just before the switch is closed,

![RLC circuit with switch](https://ka-perseus-images.s3.amazonaws.com/99217d4c168201dee2981cdc58ac25591ed035cd.svg){: .centered :}

<p class="caption">Circuit conditions just before the switch closes: The current $i$ is $0$ everywhere, and the capacitor is charged up to some initial voltage $\text V_0$.</p>

<details>
<summary>assigning voltage and current polarity</summary>
<p>There's a bit of cleverness going on where I assign the voltage and current direction. I looked ahead a little in the analysis and arranged the voltage polarities to get some positive signs where I want them. This is for aesthetic value. At the same time as I'm being artsy, it is important to respect the sign convention for passive components. </p>

<p>Capacitor voltage: I want the capacitor to start out with a positive charge on the top plate, which means the positive sign for $v_\text C$ is also the top plate. The natural response will start out with a positive voltage hump.</p>

<p>Inductor current: When the switch closes, the initial surge of current flows from the capacitor over to the inductor, in a counter-clockwise direction. I want this initial current surge to have a positive sign. The direction of $i$ is chosen to flow into the inductor from the top. I think this makes the natural response current plot looks nicer. </p>

<p>Inductor voltage: The sign convention for the passive inductor tells me to assign $v_\text L$ with the positive voltage sign at the top. </p>

<p>Resistor voltage: The resistor voltage has no artistic contribution, so it can be assigned to match either the capacitor or the inductor. I happened to match it to the capacitor, but you could do it either way.</p>
 
<p><img src="https://ka-perseus-images.s3.amazonaws.com/47b668a658a71c1017573fdb061342d59449ffde.svg"></p>
<p class="caption">The voltage and current assignment used in this article. $v_\text C$ is positive on the top plate of the capacitor. Both $v_\text R$ and $v_\text C$ will have $-$ signs in the clockwise KVL equation.</p>

<p>Respecting the passive sign convention: The artistic voltage polarity I picked for $v_\text C$ (positive at the top) conflicts with the direction of $i$ in terms of the passive sign convention. Current $i$ flows up out of the $+$ capacitor instead of down into the $+$ terminal as the sign convention requires. I will account for that backwards current when I write the $i$-$v$ equation for the capacitor, by slipping in a $-$ sign in front of $i$.</p>

<p>The current through the resistor has the same issue as the capacitor, it's backwards from the passive sign convention. I will handle it the same way when I write Ohm's law for the resistor, by including a $-$ sign in front of $i$.</p>

<p>Notice how I achieved my artistic intent <em>and</em> respected the passive sign convention.</p>

<p>Most textbooks write the upcoming integro-differential equation without this long explanation. You have to work out the signs yourself. I thought it would be helpful walk through it in detail.</p>
</details>

Now we let close the switch, and the circuit looks like this, 

![](https://ka-perseus-images.s3.amazonaws.com/c8e0745d7b51408f829a37fe91108e3268542d01.svg){: .centered :}
<p class="caption">Circuit conditions just after the switch closes. We have to figure out the current and voltage at $t=0^+$.</p>

We can write $i$-$v$ equations for each individual element,  

$v_\text L = \text L\, \dfrac{di}{dt}$

$v_\text R = - i\,\text R$

$v_\text C = \dfrac{1}{\text C}\,\displaystyle \int{-i \,dt}$

The individual elements are connected together, and we represent that by writing Kirchhoff's Voltage Law (KVL). Let's start in the lower left corner and sum voltages around the loop going clockwise. The inductor has a voltage rise, while the resistor and capacitor have voltage drops.

$+v_{\text L} - v_{\text R} - v_{\text C} = 0$

We can substitute each $v$ term with the corresponding $i$-$v$ relationship,

$\text L \,\dfrac{di}{dt} + \text R\,i + \dfrac{1}{\text C}\,\displaystyle \int{i \,dt} = 0$

If we wanted to, we could attack this equation and try to solve it. However, the integral term is awkward to deal with and this approach is a pain in the neck. We can retire the integral by taking the derivative of the entire equation.

$\dfrac{d}{dt}\left [\,\text L \,\dfrac{di}{dt} + \text R\,i + \dfrac{1}{\text C}\,\displaystyle \int{i \,dt} = 0 \,\right]$

This gives us the following equation with a second derivative term, a first derivative term, and a plain $i$ term, all still equal to $0$. 

$\text L \,\dfrac{d^2i}{dt^2} + \text R\,\dfrac{di}{dt} + \dfrac{1}{\text C}\,i = 0$

This is called a *homogeneous second-order ordinary differential equation*. 

It is *homogeneous* because every term is related to $i$ and its derivatives.  
It is *second order* because the highest derivative is a second derivative.  
It is ordinary because there is only one independent variable (no partial derivatives). 

Now we set about solving our differential equation.

## Propose a solution

Just like we did with previous natural response problems ([RC](https://www.khanacademy.org/science/electrical-engineering/ee-circuit-analysis-topic/ee-natural-and-forced-response/a/ee-rc-natural-response),  [RL](https://www.khanacademy.org/science/electrical-engineering/ee-circuit-analysis-topic/ee-natural-and-forced-response/a/ee-rl-natural-response), [LC](https://www.khanacademy.org/science/electrical-engineering/ee-circuit-analysis-topic/ee-natural-and-forced-response/a/ee-lc-natural-response)), we assume a solution with an exponential form,

$i(t) = Ke^{st}$

$K$ is an adjustable parameter representing the amplitude of the current.

$s$ is up in the exponent next to $t$, so it must represent some kind of frequency ($s$ has to have units of $1/t$). We call $s$ the *natural frequency*. This is the same $s$ that shows up in Laplace Transforms.

An exponential function has the wondrous property that its derivatives look a lot like the original function. When a differential equation has multiple derivatives showing up, it's really nice when all the derivatives have a strong family resemblance. 

## Try the proposed solution

Next, we substitute the proposed solution into the differential equation. If the equation turns out to be true, then our proposed solution is a winner.

$\text L \,\dfrac{d^2}{dt^2}Ke^{st} + \text R\,\dfrac{d}{dt}Ke^{st} + \dfrac{1}{\text C}Ke^{st} = 0$

First, let's go to work on the two terms that contain derivatives. The middle term has a first derivative,

$\text R\,\dfrac{d}{dt}Ke^{st} = s\text{R}Ke^{st}$

The leading term has a second derivative, so we take the derivative of $\text Ke^{st}$ two times,

$\dfrac{d}{dt}Ke^{st}= sKe^{st}$

$\dfrac{d}{dt}sKe^{st}= s^2Ke^{st}$

and the leading term becomes,

$\text L \dfrac{d^2}{dt^2}Ke^{st} = s^2\text LKe^{st}$

Now we can plug our new derivatives back into the differential equation, 

$s^2\text LKe^{st} + s\text RKe^{st} + \dfrac{1}{\text C}\,Ke^{st} = 0$

And factor out the common $Ke^{st}$ terms,

$Ke^{st}\left (s^2\text L + s\text R + \dfrac{1}{\text C}\right ) = 0$

This is what our differential equation has turned into when we assume the current is $i(t) = Ke^{st}$.

## Make the differential equation true

Now let's figure out how many ways we can make this equation true.

We could set $K$ equal to $0$. That means $i = 0$ and we are putting nothing into the circuit and getting nothing out. $K = 0$ is pretty boring.  

The term $e^{st}$ never becomes $0$ unless $s$ is negative and we wait until $t$ goes to $\infty$. That's a long time. Waiting for $e^{st}$ to go to zero is pretty boring, too. 

That leaves us with one interesting way to make the equation true: if the term with all the $s$'s is zero. This is called the *characteristic equation* of the $\text{LRC}$ circuit,

$s^2\text L + s\text R + \dfrac{1}{\text C} = 0$

### Find the roots of the characteristic equation

Let's find values of $s$ that make the characteristic equation true. If we can make the characteristic equation true, then the differential equation becomes true, and our proposed solution is a winner. 

We need to find the *roots* of the characteristic equation. We have exactly the right tool to do this, the quadratic formula. For any quadratic equation of the form,

$ax^2 + bx + c = 0$

the roots are,

$x=\dfrac{-b \pm\sqrt{b^2-4ac}}{2a}$

Now look back at the characteristic equation and match up the circuit component values to $a$, $b$, and $c$, 

$a = \text L$, $b = \text R$, and $c = 1/\text{C}$

and the roots of the characteristic equation become,

$s=\dfrac{-\text R \pm\sqrt{\text R^2-4\text L/\text C}}{2\text L}$

We have solved for $s$, the natural frequency. 

### $\alpha$ and $\omega$ notation

We need to break this down a little more to get a feeling for what this solution means. We can make the notation a little more compact by replacing parts of the expression with two new made-up variables, $\alpha$ and $\omega_o$. 

$\alpha = \dfrac{\text R}{2\text L}\quad$ and $\quad\omega_o = \dfrac{1}{\sqrt{\text{LC}}}$

Let's go back and rewrite the characteristic equation this way $($dividing through by $\text L)$,

$s^2 + \dfrac{\text R}{\text L}s + \dfrac{1}{\text{LC}} = 0$

If we use $\alpha$ and $\omega_o$ notation, the characteristic equation becomes,

$s^2 + 2\alpha \,s + \omega_o^2 = 0$

We can also go back to where we used the quadratic formula and mash the $2\text L$ denominator up into each term of the numerator, 

$s=-\dfrac{\text R}{2\text L} \pm\sqrt{\left(\dfrac{\text R}{2\text L}\right)^2-\left(\dfrac{4\text L/\text C}{4\text L^2}\right)}$

The second term under the square root has a bunch of cancellation and reduces to,

$\left(\dfrac{4\text L/\text C}{4\text L^2}\right) = \dfrac{1}{\text{LC}}$

And we can write $s$ in terms of $\alpha$ and $\omega_o$ as,

$s=-\alpha \pm\,\sqrt{\alpha^2 - \omega_o^2}$

What are $s$, $\alpha$, and $\omega$? We know $s$ must be some sort of frequency because it appears in the exponent next to $t$ (so it has to have units of $1/t$, which is the unit of frequency). That means the two terms making up $s$ are also some sort of frequency. 

* $s$ is called the *natural frequency*.
* $\alpha$ is called the *damping factor*. It will end up determining how quickly the overall signal fades to zero.  
* $\omega_o$ is called the *resonant frequency*. It will determine how fast the system swings back and forth. This is the same resonant frequency we found when we studied the $\text{LC}$ natural response. 

### Proposed solution, upgraded

The quadratic formula gives us two solutions for $s$, becaues of the $\pm$ term in the quadratic formula. We'll call these $s_1$ and $s_2$. We need to account for both of these, so we are going to update our proposed solution to be a linear combination (the superposition) of two separate exponential terms, now with four adjustable parameters,

$i = K_1 e^{s_1t} + K_2 e^{s_2t}$

where $s_1$ and $s_2$ are natural frequencies, and $K_1$ and $K_2$ are amplitude terms. We'll see why this extra twist is needed in the upcoming Example circuit.

# Worked example 

At this point makes sense to do a specific example with actual component values to see how one particular solution plays out. Here is our example circuit,

![RLC natural response example circuit](https://ka-perseus-images.s3.amazonaws.com/252e4fdf7032e7c2763aa9adc92c281b55c60d0c.svg){: .centered :}
<p class="caption">$\text{RLC}$ natural response example. The capacitor has an initial voltage of $10$ volts. There is no current flowing in the inductor in the moments prior to when the switch closes.</p>

The general differential equation for the $\text{RLC}$ circuit is

$\text L \,\dfrac{d^2i}{dt^2} + \text R\,\dfrac{di}{dt} + \dfrac{1}{\text C}i = 0$

With real component values it becomes,

$1 \,\dfrac{d^2i}{dt^2} + 2\,\dfrac{di}{dt} + 5i = 0$

As we always do, substitute in an assumed solution of the form $i(t) = Ke^{st}$

$1\,s^2\,Ke^{st} + 2\,s\,Ke^{st} + 5\,Ke^{st} = 0$

and factor out the common $Ke^{st}$ terms,

$Ke^{st}\left (s^2 + 2s + 5\right ) = 0$

giving us this characteristic equation,

$s^2 + 2s + 5 = 0$

We find the roots of the characteristic equation using the quadratic formula,

$s=\dfrac{-\text R \pm\sqrt{\text R^2-4\text L/\text C}}{2\text L}$

With real component values,

$s=\dfrac{-2 \pm\sqrt{2^2-4\cdot1\cdot5}}{2}$

$s = \dfrac{-2 \pm \sqrt{4-20}}{2}$

$s = -1 \pm \dfrac{\sqrt{-16}}{2}$

$s = -1 \pm j2$

We get a complex answer, just as we did with the $\text{LC}$ natural response, only this time there's something new, the complex answer includes both a real part and an imaginary part.

(Electrical engineers use the letter $j$ for the imaginary $\sqrt{-1}$, since we use $i$ as the symbol for current.)

Finding the roots of the characteristic equation gives us two potential answers for $s$, so we write the proposed solution $i(t)$ as the superposition of two different exponential terms,

$i = K_1 e^{(-1+j2)t} + K_2 e^{(-1-j2)t}$

The terms in the exponents are complex conjugates. They have the same real part, and the imaginary parts have opposite signs. 

Let's fuss around with the way this is written. We can tease apart the real and imaginary parts of the exponents,

$i = K_1 e^{-1t}e^{+j2t} + K_2 e^{-1t}e^{-j2t},$

and factor out the common $e^{-1t}$ term,

$i = e^{-t}\left (K_1 e^{+j2t} + K_2 e^{-j2t}\right )$

Notice how the real part of $s$ came through the factoring process to give us the leading term, a decaying exponential, $e^{-t}$.

The terms in the parentheses are a sum of two imaginary exponentials where the exponents are complex conjugates. This looks just like what we saw in the $\text{LC}$ natural response. As we did then, we call on Euler's formula to help us with these terms. 

## Euler's formula

Using [Maclaurin series expansions](https://www.khanacademy.org/math/calculus-home/series-calc/maclaurin-taylor-calc/v/euler-s-formula-and-euler-s-identity) for $e^{jx}$, $\sin jx$, and $\cos jx$, it is possible to derive *Euler's formula,*

$e^{+jx} = \cos x + j\sin x$

and

$e^{-jx} = \cos x - j\sin x$

In the linked video, whenever Sal says $i$, we say $j$. 

We take advantage of Euler's formula to turn $e^{j\,something}$ into a normal complex number. 

## Use Euler's formula

We can use Euler's formula to transform this sum,

$K_1e^{+j2t} + K_2e^{-j2t}$

into this sum,

$K_1(\cos 2t + j\sin 2t) + K_2(\cos 2t - j\sin 2t).$

Multiply through the constants $K_1$ and $K_2$,

$K_1\cos 2t + jK_1\sin 2t + K_2\cos 2t - jK_2\sin 2t\,,$

and gather the cosine terms and sine terms,

$(K_1+K_2)\cos 2t + j(K_1-K_2)\sin 2t$

This is looking a bit complicated. Without messing up the equation, we can simplify how this appears if we replace the unknown $K$'s with different unknown $A$'s. Let $A_1 = (K_1 + K_2)$, and $A_2 = j(K_1-K_2$). 

The previous expression becomes,

$A_1\cos 2t + A_2\sin 2t$

And now stuff this back into our proposed solution,

$i = e^{-t}(A_1\cos 2t + A_2\sin 2t)$

Swapping $\A$'s for $K$'s may seem bogus, but it's okay to do. If we didn't know $K$ we might as well not know $A$. It makes no difference.

So far so good. We started guessing a proposed solution for $i(t)$ based on exponentials. When we solved the characteristic equation, the exponentials turned out to have complex exponents. We used Euler's formula to convert the complex exponentials into ordinary-looking complex numbers that happen to have sine and cosine terms.

The last thing we have to find is $A_1$ and $A_2$. We will do that using the initial conditions, once we figure out what those initial conditions are.

## Find the initial conditions

For a second-order equation, it turns out you need *two* initial conditions to get a complete solution: one for the independent variable, $i$,  and another for its first derivative, $di/dt$.

If we can figure out $i$ and $di/dt$ at some specific time, that will let us find $A_1$ and $A_2$.

Finding the initial conditions for $\text{RLC}$ is pretty much the same as for the [LC](https://www.khanacademy.org/science/electrical-engineering/ee-circuit-analysis-topic/ee-natural-and-forced-response/a/ee-lc-natural-response) circuit. We just have account for the resistor.

Here's what we know about $t=0^-$ (the time right before the switch closes),

![Worked example initial conditions](https://ka-perseus-images.s3.amazonaws.com/a3385b63ef2cfc53687154817b8d78bf1ed531fd.svg){: .centered :}
<p class="caption">Circuit conditions in the moments just before the switch closes. At $t=0^-$ the current is $0$ and the initial voltage on the capacitor is $v_{\text C}=\text 10\,\text V$.</p>

* The switch is open, so  $i(0^-) = 0$
* The starting capacitor voltage is specified to be $v_\text C(0^-) = \text V_0$ 

Now advance time to $t=0^+$, the moment just *after* the switch closes. Our goal is to find $i(0^+)$ and $di/dt(0^+)$. 
We know some properties of inductors and capacitors that tell us what happens,

* Inductor current does not change instantly, so  $i(0^+)=i(0^-)=0$
* Capacitor voltage does not change instantly, so  $v_{\text C}(0^+)=v_{\text C}(0^-)= \text V_0$

Whenever there is a switch closing, an inductor preserves its current, and a capacitor preserves its voltage. This is true for that brief moment right after the switch closes. After that, the current and voltage are free to change.

![Worked example after switch closes](https://ka-perseus-images.s3.amazonaws.com/252e4fdf7032e7c2763aa9adc92c281b55c60d0c.svg){: .centered :}
<p class="caption">Circuit conditions just after the switch closes. At $t=0^+$ the current $i(0^+) = 0$ and $v_\text C(0^+) = 10 \,\text V$.</p>

Now we know the first initial condition, $i(0^+) = 0$.

We also know something about voltage, $v_\text C(0^+) = 10 \,\text V$. However, we don't yet have our second initial condition, $di/dt(0^+)$. Let's go after it.

Any time I see $di/dt$ it makes me think of the inductor $i$-$v$ equation, $v = \text L \, di/dt$. If we can figure out the voltage across the inductor, that will lead us to $di/dt$. Let's look at the circuit schematic and see if we can derive the inductor voltage. 

Kirchhoff's Voltage Law around the $\text{RLC}$ loop is,

$+v_\text L - v_\text R - v_\text C = 0$

We know the voltage across the capacitor is $v_\text  C =\text V_0$. What's the voltage across the resistor, $v_{\text R}$? Since $i(0^+) = 0$ everywhere around the loop, the voltage across the resistor has to be $0$. Neat trick, eh? Let's fill in the KVL equation with these values,

$v_{\text L} - 0 - \text V_0 = 0$

And now we know the voltage across the inductor at $t=0^+$,

$v_{\text L} = \text V_0$

The inductor starts at the same voltage as the capacitor. Now we can derive $di/dt(0^+)$ using the inductor $i$-$v$ equation, 

$v_{\text L}(0^+) = \text L\,\dfrac{di}{dt}(0^+)$

$10 = 1\,\dfrac{di}{dt}(0^+)$

$\dfrac{di}{dt}(0^+) = 10\,\text A/\text{sec}$ 

This is our second initial condition. The moment just after the switch closes, the current in the inductor has an initial slope of $10$ amperes per second. 

## Find constants $A_1$ and $A_2$ using the initial conditions

As a reminder, our proposed solution is,

$i = e^{-t}(A_1\cos 2t + A_2\sin 2t)$

and our two initial conditions are,

$i(0^+)=0$

$\dfrac{di}{dt}(0^+) = 10$

Let's evaluate the proposed solution at time $t=0^+$ and see if it isolates one of the $A$'s. Insert $t=0$ and $i=0$ into the proposed solution,

$0 = e^{-0}(A_1\cos 2\cdot 0 + A_2\sin 2 \cdot 0)$

$0 = 1\,(A_1\cos 0 + A_2\sin 0)$

$0 = (A_1\cdot 1 + A_2 \cdot 0)$

$A_1 = 0$

$A_1$ turns out to be $0$, causing the cosine term to drop out of the proposed solution,

$i = A_2 \,e^{-t} \sin 2t$

Now let's chase down $A_2$. We do that using the second initial condition. The second initial conditions is based on the derivative $di/dt$. Where do you think we could find such a thing? How about taking the derivative of the proposed solution? That sounds promising.  

The proposed solution is the product of two functions, so to take its derivative we use the product rule, 

$\left (f \, g \right )\' = f\' \, g + f \, g\' \qquad$ the product rule

Identify the two parts of the product and their derivatives,

$f = A_2\,e^{-t} \qquad\quad g = \sin 2t$

$f\' = -A_2\,e^{-t}\qquad g\' = 2\cos 2t$

Assemble the parts according to the product rule,

$di/dt = -A_2\,e^{-t} \sin 2t + A_2\,e^{-t}\,2\cos 2t$

$di/dt = A_2 \,e^{-t} (2\cos2t - \sin 2t)$

Evaluate this at $t = 0$, inserting the second initial condition in place of $di/dt$,

$10 = A_2 \, e^0 \,2\cos 0 - \sin 0$

$10 = A_2 \cdot 1 \cdot 2 - 0$

$A_2 = 5$

$A_2$ is the last step in our journey to find the current. Replace $A_2$ with $5$ in the proposed solution and finally, after a lot of hard work, the solution for the $\text{RLC}$ natural response current is,

$ i = 5 e^{-t} \sin 2 t$

## Plot the current

Let's take a look at $i$ to appreciate what we have. The graph of $i$ as a function of time is,

![RLC current waveform]({{ site.baseurl }}{% link i/rlc_current.svg %}){: .centered :}
<p class="caption">Natural response of an $\text{RLC}$ circuit, $\text R=2\,\Omega$, $\text L = 1\,\text H$, and $\text C = \dfrac{1}{5}\,\text F$. <br>The faint curves plot $\pm \,5e^{-t}$, the envelope of the decaying sine wave.</p>

When the switch closes, the current takes a big surge upwards and resembles the first hump of a sine wave. The wave quickly fades away after a few swings because the energy in the system rapidly dissipates as heat as charge flows through the resistor.

The role of "friction" in this example is played by the resistor. It represents a fairly high rate of energy dissipation. The current visibly changes sign only two times before settling to near zero.

This example is called an *underdamped* solution. We will introduce this descriptive term in the next section.

## Solve the voltages

![](https://ka-perseus-images.s3.amazonaws.com/252e4fdf7032e7c2763aa9adc92c281b55c60d0c.svg){: .centered :}

Now that we know the natural response of the current, we can find the natural response of the three component voltages.

### Resistor voltage
{: .no_toc :}

Ohm's Law tells us the resistor voltage: $($remember there's a $-$ sign because $i$ is backwards relative to $v_\text R)$

$v_\text R = -i\,\text R$ 

$v_\text R = -5 e^{-t} \sin 2 t \cdot 2\,\Omega$

$v_\text R = -10 e^{-t} \sin 2 t$

### Inductor voltage
{: .no_toc :}

The inductor voltage emerges from the inductor $i$-$v$ equation,

$v_\text L = \text L \,\dfrac{di}{dt}$

$v_\text L = 1\cdot \dfrac{d}{dt}(5 e^{-t}\sin2t)$

$v_\text L = -5e^{-t} (\sin 2t - 2\cos 2t)$

<details>
<summary>show all the steps of the derivative</summary>
<p>This is the same derivative we did above when going after $A_2$. We want the derivative of the product of two functions. Apply the product rule for derivatives, </p>

<p>$\left (f \, g \right )' = f' \, g + f \, g'$</p>

<p>$f = 5\,e^{-t} \qquad\quad g = \sin 2t$</p>

<p>$f' = -5\,e^{-t}\qquad g' = 2\cos 2t$</p>

<p>$\left (f \cdot g \right )' = -5e^{-t} \sin 2t + 5\,e^{-t}\,2\cos 2t$</p>
</details>

### Capacitor voltage
{: .no_toc :}

How do you find the voltage on a capacitor? We use the integral form of the capacitor $i$-$v$ equation $($with an extra $-$ sign because $i$ is reversed relative to $v_\text C)$,

$v_\text C = \dfrac{1}{\text C}\,\displaystyle \int -i\, dt\qquad$

$v_\text C = \dfrac{1}{\small{1/5}}\, \displaystyle \int -5e^{-t}\sin 2t\, dt$

$v_\text C = 5e^{-t} (\sin 2t + 2\cos 2t)$

<details>
<summary>show all the steps of the integration</summary>
<p>$v_\text C = -25\displaystyle \int e^{-t}\sin 2t\, dt$</p>

<p>$\dfrac{v_\text C}{-25} = \displaystyle \int e^{-t}\sin 2t\, dt$</p>

<p>We will solve the integral on the right, and account for the $-25$ at the end.</p>

<p>The integral is the product of two functions. To solve this, we use integration by parts. It will turn out we use integration by parts two times.</p>

<p>$\displaystyle\int f' g = fg - \int f g'$</p>

<p>$f' = e^{-t} \qquad\,\,\,\, g = \sin 2t$  <br>
$f = -e^{-t} \qquad g' = 2 \cos 2t$</p>

<p>$\displaystyle \int e^{-t} \sin2t \,dt = -e^{-t}\sin2t - \int-e^{-t}2\cos2t\,dt$</p>

<p>The integral on the far right is another product of functions, so we apply integration by parts a second time,</p>

<p>$f' = -e^{-t} \qquad g = 2\cos 2t$  <br>
$f = e^{-t} \qquad\,\,\,\,\, g' = -4 \sin 2t$</p>

<p>$\displaystyle \int e^{-t} \sin2t \,dt= -e^{-t}\sin2t - \left [e^{-t}2\cos2t - \displaystyle \int e^{-t}(-4\sin2t)\,dt \right ]$</p>

<p>$\displaystyle \int e^{-t} \sin2t \,dt= -e^{-t}\sin2t -e^{-t}2\cos2t - 4\displaystyle \int e^{-t}\sin2t\,dt$</p>

<p>Notice how the integral on the left side appears again over on the end of right side. Let's merge those two terms on the left side,</p>

<p>$\displaystyle \int5 e^{-t} \sin2t \,dt = -e^{-t}\sin2t -e^{-t}2\cos2t$</p>

<p>$\displaystyle \int e^{-t} \sin2t \,dt = \dfrac{1}{5} \left (-e^{-t}\sin2t -e^{-t}2\cos2t \right )$</p>

<p>Referring back to our starting integral, the term on the left is equal to $\dfrac{v_\text C}{-25}$.</p>

<p>$\dfrac{v_\text C}{-25} = \displaystyle \int e^{-t} \sin2t \,dt = \dfrac{1}{5} \left (-e^{-t}\sin2t -e^{-t}2\cos2t \right )$</p>

<p>The result is (including the obligatory constant),</p>

<p>$v_\text C= 5e^{-t}(\sin2t + 2\cos2t) + C$</p>

<p>We can deal with the constant by evaluating the equation at a time when we know $v_\text C$. A good time to pick is $t=0$ because that's when we know $v_\text C = +10\,\text V$.</p>

<p>$+10\,\text V = 5 e^{-0}(\sin 2\cdot 0 + 2 \cos 2\cdot 0) + C$</p>

<p>$+10\,\text V = 5 \cdot 1 \cdot(0 + 2 \cdot 1) + C$</p>

<p>$C = 0$</p>
</details>

<details>
<summary>another way to find the capacitor voltage using KVL</summary>
<p>Finding the capacitor voltage, $v_\text C$, is a pretty involved process. That is not an easy integral. There's another approach to finding the capacitor voltage. Since we already figured out the resistor and inductor voltages, we can use Kirchhoff's Voltage Law (KVL) to find the capacitor voltage.</p>

<p>KVL around the loop, starting from the bottom left,</p>

<p>$v_\text L - v_\text R - v_\text C = 0$ </p>

<p>$v_\text C = v_\text L - v_\text R$</p>

<p>Now fill in the voltages we know,</p>

<p>$v_\text L = -5e^{-t} (\sin 2t - 2\cos 2t)$  <br>
   $v_\text R = -10 e^{-t} \sin 2 t$</p>

<p>$v_\text C = -5e^{-t} (\sin 2t - 2\cos 2t) -(-10 e^{-t} \sin 2 t)$</p>

<p>Combining the like terms gives us $v_\text C$,</p>

<p>$v_\text C = 5e^{-t}(\sin 2t + 2\cos 2t)$</p>

<p>It's reassuring the answer is the same as we found by integration. This KVL method worked because we knew all the other voltages. This might not always be the case, so there might be times when you have to do the integration. Who doesn't enjoy a nice integration by parts every now and then?</p>
</details>

## Plot the voltages

I don't fully understand a waveform until I see a picture of it. Here are all three voltages plotted together,

![RLC voltage waveforms]({{ site.baseurl }}{% link i/rlc_voltages.svg %}){: .centered :}
<p class="caption">Natural response voltages $vR, vL, vC$ for $\text R=2\,\Omega$, $\text L = 1\,\text H$, and $\text C = \dfrac{1}{5}\,\text F$.</p>

Talk it through:  
* The capacitor voltage starts at $10\,\text V$ as it should, and rapidly moves down towards and through zero as its charge flows through the inductor and back onto the other plate of the capacitor. 
* The inductor voltage makes a sharp positive jump from $0$ to $10\,\text V$ when the switch closes. Remember how we figured this out when working on the two initial conditions? The inductor voltage is positive while the current is increasing and becomes negative just after $0.5$ seconds. This coincides with the current reaching its peak (look back at the current plot). When the current rolls over to a negative slope, the inductor voltage is negative. 
* The resistor voltage goes along for the ride, doing its Ohm's Law thing the whole time. The resistor voltage is a scaled version of the current. The area under the resistor curve represents energy being dissipated and lost from the system, which is why everything settles back to zero after only two swings.

## RLC circuit model

Circuit sandbox model of the [RLC natural response circuit](http://spinningnumbers.org/circuit-sandbox/index.html?value=[["l",[136,48,0],{"name":"L","l":"1","_json_":0},["4","7"]],["r",[224,24,1],{"name":"R","r":"2","_json_":1},["2","1"]],["c",[272,48,0],{"name":"C","c":"0.2","_json_":2},["2","0"]],["n",[176,136,3],{"name":"SW1","WL":"10000","_json_":3},["7","3","0"]],["w",[136,136,176,136]],["w",[224,136,272,136]],["w",[136,24,176,24]],["v",[320,160,0],{"name":"SW2-ctl","value":"step(0,20,5u,1n)","_json_":7},["6","0"]],["g",[320,208,0],{"_json_":8},["0"]],["v",[392,48,0],{"name":"Vo","value":"dc(10)","_json_":9},["5","0"]],["w",[392,48,392,24]],["g",[392,112,0],{"_json_":11},["0"]],["p",[296,24,3],{"name":"SW2","WL":"10000","_json_":12},["2","6","5"]],["a",[136,32,1],{"color":"black","offset":"0","_json_":13},["1","4"]],["w",[136,24,136,32]],["w",[392,24,344,24]],["v",[200,160,4],{"name":"SW1-ctl","value":"step(0,20,10m,1n)","_json_":16},["3","0"]],["g",[200,208,0],{"_json_":17},["0"]],["w",[272,48,272,24]],["w",[296,24,272,24]],["w",[224,24,272,24]],["w",[272,136,272,96]],["w",[136,136,136,96]],["w",[392,112,392,96]],["w",[320,48,320,160]],["s",[272,24,0],{"color":"cyan","offset":"0","_json_":25},["2"]],["g",[272,136,0],{"_json_":26},["0"]],["s",[136,24,0],{"color":"magenta","offset":"0","_json_":27},["1"]],["view",12,-28.19999999999999,1.5625,"50","10","1G",null,"100","6","1000"]]).

Switches initialize the capacitor voltage and start the natural response. The switches are made of very wide (very low resistance) MOSFET transistors, SW1 and SW2. The switching transistors are controlled by the two voltage sources, SW1-ctl and SW2-ctl.

Click on TRAN in the menu to perform a transient analysis.  
The two colored voltage probes show $v_\text C$ in aqua and $v_\text L$ in magenta. The current, $i$, is shown in black as measured by the little arrowhead in the upper left above the inductor.

Explore: Change the component values up and down and see how the simulation changes.

## Summary
{: .no_toc :}

The $\text{RLC}$ natural response circuit is the electronic equivalent of a swinging pendulum with friction. 
The circuit can be modeled by this $2$nd-order linear differential equation,

$\text L \,\dfrac{d^2i}{dt^2} + \text R\,\dfrac{di}{dt} + \dfrac{1}{\text C}\,i = 0$

The resulting characteristic equation is,

$s^2 + \dfrac{\text R}{\text L}s + \dfrac{1}{\text{LC}} = 0$

We solved for the roots of the characteristic equation using the quadratic formula,

$s=\dfrac{-\text R \pm\sqrt{\text R^2-4\text L/\text C}}{2\text L}$

By substituting variables $\alpha$ and $\omega_o$ we wrote $s$ a little simpler as,

$s = -\alpha \pm\,\sqrt{\alpha^2 - \omega_o^2}$

where

$\quad \alpha = \dfrac{\text R}{2\text L}\quad$ and $\quad\omega_o = \dfrac{1}{\sqrt{\text{LC}}}$

We solved an example circuit whose component values produced a current and voltages that swing back and forth a few times and eventually die out. 

The roots of the characteristic equation can be real or complex numbers, depending on the relative size of $\alpha$ and $\omega_o$. In the next article, we will describe the three forms of the solution,

* overdamped, $\alpha > \omega_0$, leads to the sum of two decaying exponentials
* critically damped, $\alpha = \omega_0$, leads to $t\cdot$ decaying exponential 
* underdamped, $\alpha < \omega_0$, leads to a decaying sine
