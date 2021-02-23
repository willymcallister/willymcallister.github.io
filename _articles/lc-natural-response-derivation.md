---
layout: article
title:  "LC natural response - derivation"
author: Willy McAllister
comments: true
---

We derive the natural response  of the inductor-capacitor, $\text{LC}$, circuit. 

This is where sine waves are born! 

![LC natural response circuit]({{ site.baseurl }}{% link i/lc_natural_response0.svg %}){: .centered :}{: height="180px" :}

This article goes step-by-step through the solution to a second-order differential equation. I don't assume you have previous experience with this type of equation. Sal has videos on [second-order equations](https://www.khanacademy.org/math/differential-equations/second-order-differential-equations/linear-homogeneous-2nd-order/v/2nd-order-linear-homogeneous-differential-equations-1), too. 

Also check out first-order differential equations solved step-by-step in [RC natural response]({{ site.baseurl }}{% link _articles/rc-natural-response-derivation.md %}) and [RL natural response]({{ site.baseurl }}{% link _articles/rl-natural-response.md %}). Sal has many videos on [first-order differential equations](https://www.khanacademy.org/math/ap-calculus-ab/ab-diff-equations/ab-diff-eq-intro/v/differential-equation-introduction).

Written by Willy McAllister.


----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

---

### Where we're headed
{:.no_toc}

The natural response of an $\text{LC}$ circuit is modeled by a homogeneous second-order differential equation, 

$\text L \,\dfrac{d^2}{d t^2}i + \dfrac{1}{\text C}i = 0$

or in prime notation as,

$\text L \,i^{\prime \prime} + \dfrac{1}{\text C}i = 0$

The solutions for current and voltage are, 

$i(t)=\sqrt{\dfrac{\text C}{\text L}}\,\text V_0\sin \omega_\circ t$

$v(t) = \text V_0 \cos \omega_\circ t$

Where $\text V_0$ is the starting voltage on the capacitor, and

$\omega_\circ =\sqrt{\dfrac{1}{\text{LC}}}$ is the natural frequency.


---

### Second-order systems

We look at a circuit with two energy-storage elements and no resistor. Circuits with two storage elements are *second-order systems*, because they produce equations with second derivatives.

Second-order systems are the first systems that rock back and forth in time, or *oscillate*. The classic example of a mechanical second-order system is a clock with a pendulum. In electronics, the classic second-order system is the $\text{LC}$ circuit.

The $\text{LC}$ circuit is one of the last two circuits we will solve with the full differential equation treatment. The last will be the [$\text{RLC}$]({{ site.baseurl }}{% link _articles/rlc-natural-response-derivation.md %}). Solving differential equations keeps getting harder. Fortunately, after we are done with the $\text{LC}$ and $\text{RLC}$, we learn a really nice shortcut to make our lives simpler. That's the subject of the AC Analysis section.

We study the differential equation method instead of going straight to the shortcut because it shows you where sine waves come from in electronics. Sine waves emerge from the solution to second-order equations. Sine waves are *the* building block for *all* other types of signals. 

## Strategy

We want to find the *natural response* of the $\text{LC}$ circuit. The natural response is what a circuit does when it has internal energy and there is no external driving force. Natural response is always an important part of the total response of a circuit. 

The strategy for solving this circuit is as follows,

1. Use the $i$-$v$ equations for $\text L$ and $\text C$ to write a Kirchhoff's Voltage Law equation.
2. Take the derivative of the equation to eliminate the integral, giving us a second-order differential equation.
3. Make an informed guess at a solution (a function that makes the equation true). Our guess (as usual) will be an exponential function, $Ke^{st}$.
4. Insert the proposed solution into the differential equation. 
5. Factor the equation to reveal a *characteristic equation* in the variable $s$.
6. Find the roots of the characteristic equation.
7. Deal with the imaginary exponents using Euler's Identities. 
8. Find the constants using the initial conditions. 
9. Solve the current and voltage.

## Differential equation

To get going on a precise answer for the natural response let's set up the circuit with some initial energy. The initial energy will take the form of a charge placed on the capacitor, which generates a voltage. (I could have chosen to start with an initial current in the inductor, but I didn't.)

The components are labeled with careful attention to the [sign convention for passive components]({{ site.baseurl }}{% link _articles/sign-convention.md %}). The capacitor voltage has its positive terminal at the bottom, so $i$ flows into the $+$ terminal as the sign convention requires.

![LC natural response circuit before switch]({{ site.baseurl }}{% link i/lc_natural_response1.svg %}){: .centered :}{: height="200px" :}

The switch starts out open, so the initial inductor current is $0\,\text A$. The capacitor starts with an initial charge sufficient to generate a voltage $v_{\text C} =-\text V_0$. 

We close the switch closes at $t = 0$. What happens? As with every circuit analysis, we begin by writing one of Kirchhoff's Laws. In this case, we'll use Kirchhoff's Voltage Law (KVL) around the loop, starting at the lower left corner, going clockwise. 

$v_{\text{L}}+v_{\text C} = 0$

Use the appropriate $i$-$v$ expression for each voltage. We use the derivative form of $i$-$v$ for the inductor, and the integral form for the capacitor,

$\left (\text L\,\dfrac{di}{dt}\right ) + \left (\dfrac{1}{\text C}\displaystyle\int i \,dt + K \right ) = 0$

$K$ is the constant of integration for the $v_\text C$ term.

This equation has an integral and it's awkward to deal with. To get rid of an integral in an equation you take the derivative of the whole equation, one term at a time,

$\dfrac{d}{dt} \left ( \,\text L\,\dfrac{di}{dt} + \dfrac{1}{\text C}\,\displaystyle\int i \,dt + K\, \right ) = \dfrac{d}{dt}\,0$

The $\text L$ term becomes a second derivative. In the capacitor term the derivative of the integral of $i\,dt$ is just $i$, and the derivative of $K$ is $0$ so it vanishes. On the right side the derivative of $0$ is $0$.

$\text L \,\dfrac{d^2i}{dt^2} + \dfrac{1}{\text C}\,i = 0$

The equation is prettier if the first term has no coefficient, so we divide through by $\text L$,

$\dfrac{d^2i}{dt^2} + \dfrac{1}{\text{LC}}\,i = 0$

This second-order differential equation models our $\text{LC}$ circuit. 

## Propose a solution

Now we have to solve the differential equation. When we solved the first-order $\text{RC}$ and $\text{RL}$ circuits we guessed at an exponential solution. Guessing works with second-order equations, too. Our second-order equation has similar requirements: we're looking for a function and its derivatives that look like each other, so they have a chance to add up to $0$ at all times. The function that fits this description is the *exponential*. 

We propose an exponential function with some adjustable parameters. Let (guess) the current has this form,

$i(t) = Ke^{st}$

$K$ is an amplitude factor that scales the current big or small.  

$s$ is in the exponent sitting next to time $t$. Since exponents don't have dimensions, $s$ has to have units of $1/t$, which is also known as *frequency*. Since we are solving a natural response, $s$ is called the *natural frequency*. 

## Plug in the proposed solution

Now we substitute our proposed function into the differential equation and check to see if it makes the equation true.

$\dfrac{d^2 \,i}{d \,t^2} + \dfrac{1}{\text{LC}}i = 0$

$\dfrac{d^2}{d \,t^2}(Ke^{st})+  \dfrac{1}{\text{LC}}(Ke^{st}) = 0$

Let's work on the first term by taking two derivatives. The first derivative is,

$\dfrac{d}{dt}(Ke^{st}) = sKe^{st}$

And now the second derivative,

$\dfrac{d^2}{d \,t^2}(Ke^{st}) = \dfrac{d}{dt}(sKe^{st})  = s^2Ke^{st}$

We plug our new second derivative back into the equation,

$s^2Ke^{st} +  \dfrac{1}{\text{LC}}Ke^{st} = 0$

And do some factoring to pull $Ke^{st}$ to the side,

$Ke^{st} \left (s^2 +  \dfrac{1}{\text{LC}} \right ) = 0$

## Characteristic equation

How many ways can we make this equation true?

$K=0$ is pretty boring. $0=0$. Nothing in, nothing out. Who cares?

$e^{st} = 0$ if we wait an infinite amount of time. Who has that long?

That leaves the interesting solution when the last term equals $0$, 

$s^2+ \dfrac{1}{\text{LC}} = 0$

This equation is called the *characteristic equation* of our circuit. 

We want to find the *roots* of the characteristic equation (the value(s) of $s$ that make left side equal zero).

$s^2 = - \dfrac{1}{\text{LC}}$

Whoa, look what's about to happen. We're about to take the square root of a negative number. We are about to create an imaginary number! 

$s$ has two possible values,

$s_1 = +j\,\sqrt{\dfrac{1}{\text{LC}}}$

$s_2 = -j\,\sqrt{\dfrac{1}{\text{LC}}}$

{% capture summary %}j{% endcapture %}  
{% capture details %}  
Electrical engineers use $j$ for the imaginary unit, $\sqrt{-1}$, since we already use $i$ for current.  
{% endcapture %}{% include details.html %} 

As a shorthand, we give a name to the square root term,

$\omega_\circ = \sqrt{\dfrac{1}{\text{LC}}}$

{% capture summary %}$\omega_{\circ}${% endcapture %}  
{% capture details %}  
$\omega$ is the lowercase Greek letter omega. It is commonly used as the variable name for radian frequency (frequency measured in radians per second). 

The angle of a full circle is $360^{\circ}$ or $2\pi$ radians. An angle of $1$ radian is $360^{\circ}/2\pi \approx 57.6^{\circ}$.

Whenever we talk about the *natural frequency* or *resonant frequency*, it is often called $\omega_{\circ}$, pronounced, "omega naught." *Naught* is an old-timey English word for $0$. 
{% endcapture %}{% include details.html %}

The roots of the characteristic equation can be expressed in terms of $\omega_\text o$ as,

$s_1 = +j\,\omega_\circ$

$s_2 = -j\,\omega_\circ$

This is telling us the  $\text{LC}$ circuit produces two complex natural frequencies, $s_1$ and $s_2$. And one of them is negative. So curious. This will turn out to be very interesting. 

Either $s_1$ or $s_2$ by itself is a root of the equation. For our proposed solution we allow the possibility that both natural frequencies, $s_1$ and $s_2$ can exist at the same time. So we write a general solution as a linear combination of the two, with two adjustable $K$ constants. 

$i = K_1e^{+j\,\omega_\circ t} + K_2e^{-j\,\omega_\circ t}$

At this point your head might be spinning, "Complex exponents? Negative frequency? Is this really happening?" The answer is, yes. Please hang in there as we work with these expressions.

## Euler's identities

To work with these complex exponents, we resort to a very important identity. 

Using [Maclaurin series expansions](w/v/euler-s-formula-and-euler-s-identity) for $e^{jx}$, $\sin jx$, and $\cos jx$, it is possible to derive *Euler's identities*,

$e^{+jx} = \cos x + j\sin x$  
$e^{-jx} = \cos x - j\sin x$

In the linked video, any time Sal says $i$, we say $j$. For now I would like you to believe these identities are true. We talk about this a lot more in AC Analysis.

Euler's identities let us turn the strange $e^{imaginary}$ thing to a normal complex number. The real and imaginary parts include a cosine or sine function. No big deal. All that means is the real and imaginary components are somewhere in the range $-1$ to $+1$.

## Use Euler's identities
{:.no_toc}

We use Euler's identities to work on our proposed solution, 

$i = K_1e^{+j\,\omega_\circ t} + K_2e^{-j\,\omega_\circ t}$

$i = K_1(\cos \omega_\circ t + j\sin \omega_\circ t) + K_2(\cos \omega_\circ t - j\sin \omega_\circ t)$

Multiply through the constants,

$i = K_1\cos \omega_\circ t + jK_1\sin \omega_\circ t + K_2\cos \omega_\circ t - jK_2\sin \omega_\circ t\,,$

and gather the cosine terms and sine terms together,

$i = (K_1+K_2)\cos \omega_\circ t + j(K_1-K_2)\sin \omega_\circ t$

We don't know $K_1$ or $K_2$, or their sum or difference. It's okay to replace the unknown $K$'s with different unknown $A$'s, just to make things appear a bit simpler. 

If we let $A_1 = (K_1 + K_2)$, and $A_2 = j(K_1-K_2$), the proposed solution becomes,

$i = A_1\cos \omega_\circ t + A_2\sin \omega_\circ t$

Notice how $A_2$, defined as $j(K_1-K_2)$, includes $j$. So $j$ no longer appears in the proposed solution.

This is the first time in electronics we see sine and cosine as a function of time. These are referred to as *sinusoidal waveforms*. 

## Test the proposed solution

Next, we check our proposed solution by plugging it into the second-order differential equation. If we can come up with values for the constants that make the differential equation true then the proposed solution is a winner. 

### Find the initial conditions

Initial conditions for a second-order circuit are more involved than for a first-order circuit.

When we did this for first-order circuits, $\text{RC}$ or $\text{RL}$, we needed a single value, either a starting voltage or current. For a second-order $\text{LC}$ circuit, we need to know *two* things the moment after the switch closes: the current *and* the derivative of the current, $i(0^+)$ and $di/dt(0^+)$. 

Here are the circuit conditions at $t = 0^-$, just before the switch closes,

![LC natural response circuit before switch]({{ site.baseurl }}{% link i/lc_natural_response1.svg %}){: .centered :}{: height="200px" :}

Let's write down everything we know about $t=0^-$,

* The switch is open, so  $i(0^-) = 0$.

* The starting capacitor voltage is specified: $v_\text C(0^-)=-\text V_0$. 

The moment just after the switch closes is called $t=0^+$. We have to carefully bridge across the infinitesimal time from $t=0^-$ to $t=0^+$. This is a major event in the life of the circuit. 

After the switch closes there is only one voltage, so we'll just call it $v$ from now on.

![LC natural response circuit after switch]({{ site.baseurl }}{% link i/lc_natural_response2.svg %}){: .centered :}{: height="200px" :}

The switch is closed. There is now just one voltage, $v = v_\text L = -v_\text C$. The initial voltage on the capacitor is $v = \text V_0$.
{: .caption :}

What happens to current and voltage? Do they stay the same? Do they jump to new values? We know some properties of inductors and capacitors to help us figure this out,

* Current in an inductor cannot change instantly, so  

$i(0^+)=i(0^-)=0$

* Voltage across a capacitor cannot change instantly, so  

$v(0^+)=v(0^-)=\text V_0$

The initial conditions we need to find are $i(0^+)$ and $di/dt(0^+)$. This gives us $i(0^+) = 0$, but we don't know $di/dt(0^+)$, yet. Where can we get the derivative of current? Hmmm, how about from the inductor's $i$-$v$ equation? 

$v = \text L\,\dfrac{di}{dt}$

Solve for $di/dt$,

$\dfrac{di}{dt} = \dfrac{v}{\text L}$

$\dfrac{di}{dt}(0^+) = \dfrac{v(0^+)}{\text L}$

$\dfrac{di}{dt}(0^+) = \dfrac{\text V_0}{\text L}$

This is our second initial condition. The moment after the switch closes the voltage on the capacitor is connected to the inductor. The current in the inductor starts changing with a slope of $\text V_0/\text L$ amperes every second. 

Summary of the initial conditions,

$i(0^+)=0$

$\dfrac{di}{dt}(0^+) = \dfrac{\text V_0}{\text L}$

### Use the initial conditions to find the constants

We use our initial conditions to solve for the constants, $A_1$ and $A_2$. Let's plug the first initial condition, $i=0$ at $t=0^+$, into the proposed solution and see where it takes us,

$i(t) = A_1\cos \omega_\circ t + A_2\sin \omega_\circ t$

$0 = A_1\cos (\omega_\circ \cdot 0) + A_2\sin (\omega_\circ \cdot 0)$

$0 = A_1\cos 0 + A_2\sin 0$

$0 = A_1 \cdot 1 + A_2 \cdot 0$

$0 = A_1$

$A_1$ is $0$, so the proposed cosine term drops out of the solution. Our proposed solution now looks like,

$i = A_2\sin \omega_\circ t$

Now we go after $A_2$ using the second initial condition. We know, 

$\dfrac{di}{dt}(0^+) = \dfrac{\text V_0}{\text L}$

We need to plug this into something. Let's take the derivative of the proposed $i(t)$,

$\dfrac{di}{dt} = \dfrac{d}{dt}(A_2 \sin \omega_\circ t)$

$\dfrac{di}{dt} = \omega_\circ A_2\cos \omega_\circ t$

Evaluating this at $t=0$,

$\dfrac{\text V_0}{\text L} = \omega_\circ A_2\cos(\omega_\circ \cdot 0) = \omega_\circ A_2\cos 0$

$\dfrac{\text V_0}{\text L} =  \omega_\circ A_2\cdot 1$

$A_2 = \dfrac{\text V_0}{\omega_\circ \text L}$

If we expand $\omega_\circ$ back into $\text L$ and $\text C$ we get,

$A_2 = \sqrt{\dfrac{\text C}{\text{L}}}\,\text V_0$ 

{% capture summary %}show the expansion{% endcapture %}  
{% capture details %}  

$A_2 = \dfrac{\text V_0}{\omega_\circ \text L}\,,\qquad$ $\omega_\circ = \sqrt{\dfrac{1}{\text{LC}}}$

$A_2 = \dfrac{\text V_0}{\sqrt{\dfrac{1}{\text{LC}}}\,\text L}$ 

$A_2 = \dfrac{\text V_0}{\sqrt{\dfrac{1}{\text{LC}}\text L^2}}$ 

$A_2 = \dfrac{\text V_0}{\sqrt{\dfrac{1}{\cancel{\text L}\text{C}}\text L^{\cancel 2}}}$ 

$A_2 = \dfrac{\text V_0}{\sqrt{\dfrac{\text L}{\text{C}}}}$ 

$A_2 = \sqrt{\dfrac{\text C}{\text{L}}}\,\text V_0$ 

{% endcapture %}{% include details.html %}

## Current

And finally, after a lot of hard work, the $\text{LC}$ natural response current is,

$\boxed{i = \sqrt{\dfrac{\text C}{\text L}}\,\text V_0 \sin \omega_\circ t}$
{: .colorbox :}

The current is a sine wave with radian frequency $\omega_\circ$ and an amplitude determined by the starting voltage and the component values.

## Voltage

Now that we know the current, let's find the voltage. This won't take nearly as long. Probably the quickest route is to use the inductor $i$-$v$ equation. Then solve for $v$ in terms of $di/dt$. 

$v = \text L \,\dfrac{di}{dt}$

$v = \text L \, \dfrac{d}{dt} \left ( \sqrt{\dfrac{\text C}{\text L}}\,\text V_0 \sin \omega_\circ t \right )$

$v = \text L \sqrt{\dfrac{\text C}{\text L}}\,\text V_0 \, \omega_\circ \cos \omega_\circ t$

Substitute $\omega_\circ = \sqrt{\dfrac{1}{\text{LC}}}$ for the $\omega_\circ$ out in front of the cosine,

$v = \text L \sqrt{\dfrac{\text C}{\text L}}\,\text V_0 \, \sqrt{\dfrac{1}{\text{LC}}} \cos \omega_\circ t$

Lots of things cancel, leaving us with something quite simple,

$\boxed{v = \text V_0 \cos \omega_\circ t}$
{: .colorbox :}

The radian frequency is determined by $\omega_\circ = \sqrt{\dfrac{1}{\text{LC}}}$.

The amplitude is determined by the starting voltage on the capacitor. 


## Example

To demonstrate what the solution looks like, let's assign real values to the components. Let $\text L=1$ henry and $\text C = 1/4$ farad. Let the starting voltage on the capacitor be $10\,\text V$.

![LC natural response example]({{ site.baseurl }}{% link i/lc_natural_response3.svg %}){: .centered :}{: height="200px" :}

The natural frequency $\omega_\circ$ is,

$\omega_\circ = \sqrt{\dfrac{1}{\text{LC}}} = \sqrt{\dfrac{1}{1\cdot 1/4}} = 2\,\text{radians/second}$

### Current

The current as a function of time is,

$i = \sqrt{\dfrac{\text C}{\text L}}\,\text V_0 \sin \omega_\circ t$

$i = \sqrt{\dfrac{\text 1/4}{1}}\,10 \sin \omega_\circ t$

$i = 5 \sin 2 t$

![LC natural response current]({{ site.baseurl }}{% link i/lc_natural_response_current.svg %}){: .centered :}

When the switch closes the current takes off in a sine wave that continues forever. There is no resistor in this ideal circuit, so the energy never dissipates. In a real-world circuit there would be small resistances that eventually dissipate the energy.

### Frequency

The natural frequency of the sine wave is $\omega_{\circ} = 2 \,\text{radians}/\text{sec}$. We can convert from radians per second to cycles per second. One full cycle of a sine function corresponds to $2\pi$ radians. We use the symbol $f$ for cycles per second. 

The conversion is,

$\omega = 2\pi f$

Cycles per second has an honorary name, hertz, or $\text{Hz}$), named after Heinrich Hertz, the first person to send and detect a radio wave. 

For our example circuit, the natural frequency is,

$f = \dfrac{2\,\text{radians/sec}}{2\pi} = \dfrac{1}{\pi} = 0.318\ldots\,\text{Hz}$ 

The *period* of the cycle is the reciprocal of the frequency, $P = 1/f$. 

The current completes a full cycle every $P = 1/f = \pi = 3.14\ldots$ seconds.

### Look back at the initial conditions

We can look near the origin to see how the initial conditions appear in the solution. The sine wave starts at the origin, $i=0$. Notice how the slope of the sine wave near the origin matches the slope of the straight black line, $i=10\,\text A/\text{sec}$. 

![LC natural response current close-up]({{ site.baseurl }}{% link i/lc_natural_response_current_closeup.svg %}){: .centered :}

### Voltage

At this point we know the current. If you want to keep going, try to find the voltage. 

**Find an expression for $v(t)$ after the switch closes.**

Probably the quickest route is to use the inductor $i$-$v$ equation.

$v =$ \_\_\_\_\_\_\_\_

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
We know the current is $i = 5\sin 2t$.

We can find $v$ with the inductor $i$-$v$ equation,

$v = \text L \,\dfrac{di}{dt}$

$v = 1 \cdot\dfrac{d}{dt} (5\sin 2t)$

$v = 5 \cdot 2\,\cos 2t$

$v = 10\,\cos 2t$

![LC natural response voltage]({{ site.baseurl }}{% link i/lc_natural_response_voltage.svg %}){: .centered :}

Notice how $v(t)$ nicely matches up with the initial $\text V_0 = 10\,\text V$ at $t = 0$.
{% endcapture %}{% include details.html %}

Here is a plot of current and voltage together. They are sinusoid waveforms with the same frequency. Current is a sine wave, and voltage is a cosine.

![LC natural response current and voltage]({{ site.baseurl }}{% link i/lc_natural_response_both.svg %}){: .centered :}

## Simulation model

Try this [LC simulation model](https://spinningnumbers.org/circuit-sandbox/index.html?value=%5B%5B%22w%22%2C%5B136%2C24%2C200%2C24%5D%5D%2C%5B%22w%22%2C%5B272%2C24%2C200%2C24%5D%5D%2C%5B%22s%22%2C%5B200%2C24%2C0%5D%2C%7B%22color%22%3A%22magenta%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A2%7D%2C%5B%223%22%5D%5D%2C%5B%22g%22%2C%5B272%2C136%2C0%5D%2C%7B%22_json_%22%3A3%7D%2C%5B%220%22%5D%5D%2C%5B%22w%22%2C%5B320%2C48%2C320%2C160%5D%5D%2C%5B%22w%22%2C%5B392%2C112%2C392%2C96%5D%5D%2C%5B%22w%22%2C%5B136%2C136%2C136%2C96%5D%5D%2C%5B%22w%22%2C%5B272%2C136%2C272%2C96%5D%5D%2C%5B%22w%22%2C%5B296%2C24%2C272%2C24%5D%5D%2C%5B%22w%22%2C%5B272%2C48%2C272%2C24%5D%5D%2C%5B%22g%22%2C%5B200%2C208%2C0%5D%2C%7B%22_json_%22%3A10%7D%2C%5B%220%22%5D%5D%2C%5B%22v%22%2C%5B200%2C160%2C4%5D%2C%7B%22name%22%3A%22SW1-ctl%22%2C%22value%22%3A%22step(0%2C20%2C10m%2C1n)%22%2C%22_json_%22%3A11%7D%2C%5B%224%22%2C%220%22%5D%5D%2C%5B%22w%22%2C%5B392%2C24%2C344%2C24%5D%5D%2C%5B%22w%22%2C%5B136%2C24%2C136%2C32%5D%5D%2C%5B%22a%22%2C%5B136%2C32%2C1%5D%2C%7B%22color%22%3A%22black%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A14%7D%2C%5B%223%22%2C%222%22%5D%5D%2C%5B%22p%22%2C%5B296%2C24%2C3%5D%2C%7B%22name%22%3A%22SW2%22%2C%22WL%22%3A%2210000%22%2C%22_json_%22%3A15%7D%2C%5B%223%22%2C%225%22%2C%226%22%5D%5D%2C%5B%22g%22%2C%5B392%2C112%2C0%5D%2C%7B%22_json_%22%3A16%7D%2C%5B%220%22%5D%5D%2C%5B%22w%22%2C%5B392%2C48%2C392%2C24%5D%5D%2C%5B%22v%22%2C%5B392%2C48%2C0%5D%2C%7B%22name%22%3A%22Vo%22%2C%22value%22%3A%22dc(10)%22%2C%22_json_%22%3A18%7D%2C%5B%226%22%2C%220%22%5D%5D%2C%5B%22g%22%2C%5B320%2C208%2C0%5D%2C%7B%22_json_%22%3A19%7D%2C%5B%220%22%5D%5D%2C%5B%22v%22%2C%5B320%2C160%2C0%5D%2C%7B%22name%22%3A%22SW2-ctl%22%2C%22value%22%3A%22step(0%2C20%2C5u%2C1n)%22%2C%22_json_%22%3A20%7D%2C%5B%225%22%2C%220%22%5D%5D%2C%5B%22w%22%2C%5B224%2C136%2C272%2C136%5D%5D%2C%5B%22w%22%2C%5B136%2C136%2C176%2C136%5D%5D%2C%5B%22n%22%2C%5B176%2C136%2C3%5D%2C%7B%22name%22%3A%22SW1%22%2C%22WL%22%3A%221000000%22%2C%22_json_%22%3A23%7D%2C%5B%221%22%2C%224%22%2C%220%22%5D%5D%2C%5B%22c%22%2C%5B272%2C48%2C0%5D%2C%7B%22name%22%3A%22C%22%2C%22c%22%3A%220.25%22%2C%22_json_%22%3A24%7D%2C%5B%223%22%2C%220%22%5D%5D%2C%5B%22l%22%2C%5B136%2C48%2C0%5D%2C%7B%22name%22%3A%22L%22%2C%22l%22%3A%221%22%2C%22_json_%22%3A25%7D%2C%5B%222%22%2C%221%22%5D%5D%2C%5B%22view%22%2C12%2C-36.19999999999999%2C1.5625%2C%2250%22%2C%2210%22%2C%221G%22%2Cnull%2C%22100%22%2C%226%22%2C%221000%22%5D%5D){:target="_blank"}. Click on **TRAN** to run a transient simulation. The inductor current is shown in black. The capacitor voltage appears in magenta. If you run the simulation long enough you will see a slow exponential decay. This is caused by the small resistance of SW1, the MOS transistor used as a switch.

Challenge:
* Use the formula above to calculate the radian frequency, $w_\circ$. 
* What is the frequency in Hz? 
* What is the period in seconds? Compare that to the simulation.  
* Design component values to achieve exactly $2\times$ the frequency.  
* Design component values to achieve exactly $2\times$ the period.  

Here is a similar [LC simulation model driven by a current source](https://spinningnumbers.org/circuit-sandbox/index.html?value=%5B%5B%22w%22%2C%5B144%2C144%2C264%2C144%5D%5D%2C%5B%22w%22%2C%5B144%2C104%2C144%2C144%5D%5D%2C%5B%22w%22%2C%5B144%2C32%2C264%2C32%5D%5D%2C%5B%22w%22%2C%5B144%2C56%2C144%2C32%5D%5D%2C%5B%22i%22%2C%5B144%2C104%2C6%5D%2C%7B%22name%22%3A%22Io%22%2C%22value%22%3A%22step(1%2C0%2C200m%2C1n)%22%2C%22_json_%22%3A4%7D%2C%5B%220%22%2C%222%22%5D%5D%2C%5B%22w%22%2C%5B264%2C144%2C400%2C144%5D%5D%2C%5B%22w%22%2C%5B264%2C32%2C328%2C32%5D%5D%2C%5B%22w%22%2C%5B400%2C32%2C328%2C32%5D%5D%2C%5B%22s%22%2C%5B328%2C32%2C0%5D%2C%7B%22color%22%3A%22magenta%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A8%7D%2C%5B%222%22%5D%5D%2C%5B%22g%22%2C%5B400%2C144%2C0%5D%2C%7B%22_json_%22%3A9%7D%2C%5B%220%22%5D%5D%2C%5B%22w%22%2C%5B264%2C144%2C264%2C104%5D%5D%2C%5B%22w%22%2C%5B400%2C144%2C400%2C104%5D%5D%2C%5B%22w%22%2C%5B400%2C56%2C400%2C32%5D%5D%2C%5B%22w%22%2C%5B264%2C32%2C264%2C40%5D%5D%2C%5B%22a%22%2C%5B264%2C40%2C1%5D%2C%7B%22color%22%3A%22black%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A14%7D%2C%5B%222%22%2C%221%22%5D%5D%2C%5B%22c%22%2C%5B400%2C56%2C0%5D%2C%7B%22name%22%3A%22C%22%2C%22c%22%3A%220.25%22%2C%22_json_%22%3A15%7D%2C%5B%222%22%2C%220%22%5D%5D%2C%5B%22l%22%2C%5B264%2C56%2C0%5D%2C%7B%22name%22%3A%22L%22%2C%22l%22%3A%221%22%2C%22_json_%22%3A16%7D%2C%5B%221%22%2C%220%22%5D%5D%2C%5B%22view%22%2C65.19999999999999%2C-34.760000000000005%2C1.953125%2C%2250%22%2C%2210%22%2C%221G%22%2Cnull%2C%22100%22%2C%2260%22%2C%221000%22%5D%5D){:target="_blank"}. This one sets up an initial current in the inductor with a current source. At 0.2 seconds the current source switches off, leaving the circuit to oscillate forever. This way of initializing the circuit does not require MOS transistor switches with their residual resistance.

Challenge:  
* What is the starting voltage? Why? 

## Summary
{:.no_toc}

We derived the natural response of an $\text{LC}$ circuit by first creating this homogeneous second-order differential equation, 

$\dfrac{d^2}{d \,t^2}i + \dfrac{1}{\text{LC}}i = 0$

We assumed a solution of the form $Ke^{st}$, which gave us the *characteristic equation* for the circuit,

$s^2 + \dfrac{1}{\text{LC}}=0$

When we found the roots of the characteristic equation we ran into a *very* strange expression, $e^{j\omega_\circ t}$, an exponential with a complex exponent. We reached into our bag of tricks and pulled out,

Euler's identities,

$e^{+jx} = \cos x + j\sin x$  
$e^{-jx} = \cos x - j\sin x$

These identities let us convert the complex exponential into an ordinary complex number. This is where sine and cosine come into the picture.

Then we found the initial conditions. A second-order system requires an initial $i$ and $\dfrac{di}{dt}$. 

We found a function that satisfied the differential equation,

$i(t) = \sqrt{\dfrac{\text C}{\text L}}\,\text V_0 \sin \omega_\circ t$

$\omega_\circ = \sqrt{\dfrac{1}{\text{LC}}}$ is the *natural frequency* of the $\text{LC}$ circuit.

 $\text V_0$ is the starting voltage on the capacitor.

 We also found the voltage using the inductor's $i$-$v$ equation,

 $v(t) = \text V_0 \cos \omega_\circ t$
 
This solution applies when the starting current in the inductor is assumed to be $0$.
