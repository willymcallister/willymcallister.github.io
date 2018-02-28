---
layout: article
title:  "LC natural response - derivation"
author: Willy McAllister
comments: true
---

We derive the natural response  of the inductor-capacitor, $\text{LC}$, circuit. 

>This is where sine waves are born! 

![](https://ka-perseus-images.s3.amazonaws.com/e11e853050cfcb3b21fb71159ee18f39f490f1f2.svg){: .centered :}{: height="180px" :}

#### Preparation
{:.no_toc}

This article goes step-by-step through the solution to a second-order differential equation. I don't assume you have previous experience with this type of equation. Sal has videos on [second-order equations](https://www.khanacademy.org/math/differential-equations/second-order-differential-equations/linear-homogeneous-2nd-order/v/2nd-order-linear-homogeneous-differential-equations-1), too. 

Also check out first-order differential equations solved step-by-step in [RC natural response]({{ site.baseurl }}{% link _articles/rc-natural-response-derivation.md %}) and [RL natural response]({{ site.baseurl }}{% link _articles/rl-natural-response.md %}). Sal has many videos on [first-order differential equations](https://www.khanacademy.org/math/ap-calculus-ab/ab-diff-equations/ab-diff-eq-intro/v/differential-equation-introduction).

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

---

### Where we're headed
{:.no_toc}

The natural response of an $\text{LC}$ circuit is described by this homogeneous second-order differential equation, 

$\text L \,\dfrac{d^2 \,i}{d \,t^2} + \dfrac{1}{\text C}i = 0$

The solution for the current is, 

$i(t)=\sqrt{\dfrac{\text C}{\text L}}\,\text V_0\sin \omega_\circ t$

Where $\omega_\circ =\sqrt{\dfrac{1}{\text{LC}}}$ is the *natural frequency* and $\text V_0$ is the starting voltage on the capacitor.

---

### Second-order systems

We look at a circuit with two energy-storage elements and no resistor. Circuits with two storage elements are *second-order systems*, because they produce equations with second derivatives.

This article covers the $\text{LC}$ circuit, one of the last two circuits we will solve with full differential equation treatment. The last will be the $\text{RLC}$. The mathematics of differential equations keeps getting harder. Fortunately, after we are done with the $\text{LC}$ and $\text{RLC}$, we learn a really nice shortcut to make our lives simpler. That's the subject of the AC Analysis section.

We stick with differential equations instead of going straight to the shortcut because I want to show you where sine waves come from in electronics. Sine waves emerge from the solution to second-order equations. Sine waves are *the* building block for *all* other types of signals. 

Second-order systems are the first systems that rock back and forth in time, or *oscillate*. The classic example of a mechanical second-order system is a clock with a pendulum. In electronics, the classic second-order system is the $\text{LC}$ circuit.

## Natural response

We want to find the *natural response* of the $\text{LC}$ circuit. The natural response is what a circuit does when there is no external driving force. Natural response is always an important part of  the total response of a circuit. 

To get going on a precise answer for the natural response, let's set up the circuit with some initial energy. The components are labeled with careful attention to the [sign convention for passive components](w/a/ee-sign-convention).  The inductor has an initial current of $0\,\text A$ because the switch starts in the open position. We assume the capacitor has an initial voltage before the switch closes, $v_{\text C} =-\text V_0$. (Notice how $v_\text C$ has its $+$ sign at the bottom.) We let the switch close at $t = 0$.

![](https://ka-perseus-images.s3.amazonaws.com/9e161675df34dae6db77f7357ca96a963e429de5.svg){: .centered :}{: height="180px" :}

As with every circuit analysis, we begin by writing one of Kirchhoff's Laws. In this case, we'll go with Kirchhoff's Voltage Law (KVL) around the loop, starting at the lower left and going around clockwise. 

$v_{\text{L}}+v_{\text{}C} = 0$

$\text L\,\dfrac{di}{dt} + \dfrac{1}{\text C}\,\displaystyle\int i \,dt = 0$

This KVL equation contains an integral, which is awkward to deal with. The way to get rid of an integral (also known as an anti-derivative) is to take its derivative.  We take the derivative of every term in the equation. 

$\dfrac{d}{dt} \left ( \,\text L\,\dfrac{di}{dt} + \dfrac{1}{\text C}\,\displaystyle\int i \,dt\, \right ) = \dfrac{d}{dt}\,0$

This gives us the  second derivative of the $\text L$ term, gets rid of the integral in the $1/\text C$ term, and still leaves us with $0$ on the right side.

$\text L \,\dfrac{d^2i}{dt^2} + \dfrac{1}{\text C}\,i = 0$

The equation is tidier if the first term has no coefficient, so we divide through by $\text L$. This second-order differential equation captures the essence of our circuit. 

$\dfrac{d^2i}{dt^2} + \dfrac{1}{\text{LC}}\,i = 0$

### Propose a solution

When we solved the first-order $\text{RC}$ and $\text{RL}$ circuits, we guessed at an exponential solution for $i(t)$. Guessing works with second-order equations, too. Our second-order equation has similar requirements: we want the function and its derivatives to look like each other so they can all add up to $0$. The exponential function fits the description. We propose an exponential function with some adjustable parameters,

$i(t) = Ke^{st}$

$K$ is an amplitude factor that scales the current big or small.  

$s$ is up in the exponent sitting next to time $t$. Since exponents don't have dimensions, $s$ has to have units of $1/t$, which is also known as *frequency*. Since we are solving a natural response, $s$ is called the *natural frequency*. 

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

$Ke^{st}(s^2 +  \dfrac{1}{\text{LC}}) = 0$

How many ways can we make this equation true?

$K=0$ is pretty boring. $0=0$, who cares?

$e^{st}$ never becomes zero for a finite amount of time.

That leaves the interesting solution when the ($s+1/\text{LC)}$ term equals $0$, 

$s^2+ \dfrac{1}{\text{LC}} = 0$

This equation is called the *characteristic equation* of our circuit. 

We want to find the *roots* of the characteristic equation (the value(s) of $s$ that make left side equal zero).

$s^2 = - \dfrac{1}{\text{LC}}$

Whoa, look what's about to happen. We're about to take the square root of a negative number. We are about to create an imaginary number. 

$s$ has two possible values,

$s_1 = +j\,\sqrt{\dfrac{1}{\text{LC}}}$

$s_2 = -j\,\sqrt{\dfrac{1}{\text{LC}}}$

>Electrical engineers use $j$ for the imaginary unit, $\sqrt{-1}$, since we already use $i$ for current. 

As a shorthand, we give a name to the square root term,

$\omega_\circ = \sqrt{\dfrac{1}{\text{LC}}}$

{% capture summary %}What is the curvy w symbol?{% endcapture %}  
{% capture details %}  
$\omega$ is the lowercase Greek letter omega. It is commonly used as the variable name for radian frequency (frequency measured in radians per second). 

The angle of a full circle is $360^{\circ}$ or $2\pi$ radians. An angle of $1$ radian is $360^{\circ}/2\pi \approx 57.6^{\circ}$.

Whenever we talk about the *natural frequency* or *resonant frequency*, it is often called $\omega_{\circ}$, pronounced, "omega naught." *Naught* is an old-timey English word for $0$. 
{% endcapture %}{% include details.html %}

The roots of the characteristic equation can be expressed in terms of $\omega_\text o$ as,

$s_1 = +j\,\omega_\circ$

$s_2 = -j\,\omega_\circ$

The  $\text{LC}$ circuit produces two complex natural frequencies, $s_1$ and $s_2$. And one of the natural frequencies is negative. So curious. This will turn out to be very interesting. 

Either $s_1$ or $s_2$ by itself is a root of the equation. For our proposed solution we allow the possibility of both natural frequencies, $s_1$ and $s_2$. So we write a general solution as a linear combination of two terms, with two adjustable $K$ constants. 

$i = K_1e^{+j\,\omega_\circ t} + K_2e^{-j\,\omega_\circ t}$

At this point your head might be spinning, "Complex exponents? Negative frequency? Is this really happening?" The answer is, yes. So please hang in there while we work with these expressions.

## Euler's identities

To work with these complex exponents, we resort to a very important identity. 

Using [Maclaurin series expansions](w/v/euler-s-formula-and-euler-s-identity) for $e^{jx}$, $\sin jx$, and $\cos jx$, it is possible to derive *Euler's identities*,

$e^{+jx} = \cos x + j\sin x$

$e^{-jx} = \cos x - j\sin x$

In the linked video, any time Sal says $i$, we say $j$. 

Euler's identities let us turn the strange $e^{imaginary}$ thing to a normal complex number. The real and imaginary parts include a cosine or sine function. That means both the real and imaginary components are somewhere in the range $-1$ to $+1$.

## Use Euler's identities

We use Euler's identities to work on our proposed solution, 

$i = K_1e^{+j\,\omega_\circ t} + K_2e^{-j\,\omega_\circ t}$

$i = K_1(\cos \omega_\circ t + j\sin \omega_\circ t) + K_2(\cos \omega_\circ t - j\sin \omega_\circ t)$

Multiply through the constants,

$i = K_1\cos \omega_\circ t + jK_1\sin \omega_\circ t + K_2\cos \omega_\circ t - jK_2\sin \omega_\circ t\,,$

and gather the cosine terms and sine terms together,

$i = (K_1+K_2)\cos \omega_\circ t + j(K_1-K_2)\sin \omega_\circ t$

We don't know $K_1$ or $K_2$, or their sum or difference. It's okay to replace the unknown $K$'s with different unknown $A$'s, just to make things appear a bit simpler. 

If we let $A_1 = (K_1 + K_2)$, and $A_2 = j(K_1-K_2$), then,

$i = A_1\cos \omega_\circ t + A_2\sin \omega_\circ t$

We used Euler's identities to turn the complex exponentials into a sum of sine and cosine functions. This is the very first time in electronics we see sine or cosine with time as the argument. Sine or cosine functions of time are referred to as *sinusoidal waveforms*. 

Notice how $A_2$ (defined as $j(K_1-K_2)$) includes $j$. So $j$ no longer appears in the proposed solution.

## Test the proposed solution

Next, we check our proposed solution by plugging it into the second-order differential equation. If we can come up with values for the constants that make the differential equation true, the proposed solution is a winner. 

### Figure out the initial conditions

The initial conditions needed for a second-order circuit are a little more involved than for a first-order circuit.

When we did this for first-order circuits, $\text{RC}$ or $\text{RL}$, we had to know a single value, a starting current or voltage. With a second-order $\text{LC}$ circuit, we need to know *two* things: the current *and* the derivative of the current when the switch closes. 

Here are the circuit conditions at $t = 0^-$, just before the switch closes,

![](https://ka-perseus-images.s3.amazonaws.com/d4bcc8430e1306080aea87b05cf0f99578a5c287.svg){: .centered :}{: height="180px" :}

Let's write down everything we know about $t=0^-$,

* The switch is open, so  $i(0^-) = 0$.

* The starting capacitor voltage is specified: $v_\text C(0^-)=-\text V_0$. 

The moment just after the switch closes is called $t=0^+$. The initial conditions we need to find are $i(0^+)$ and $di/dt(0^+)$. 

Next, we have to get across the switch closing, from $t=0^-$ to $t=0^+$. Does the current and voltage stay the same? Do they jump to a new value? We know some properties of inductors and capacitors that will help us figure this out,

* Current in an inductor cannot change instantly, so  

$i(0^+)=i(0^-)=0$

* Voltage across a capacitor cannot change instantly, so  

$v(0^+)=v(0^-)=\text V_0$

(After the switch closes there is only one $v$, so we'll just call it $v$ from now on.)

![](https://ka-perseus-images.s3.amazonaws.com/07a1c12c2029434c9cd73c4cc8426f2e9f9cfb89.svg){: .centered :}{: height="180px" :}

<p class="caption">Circuit conditions just after the switch closes, at $t=0^+$. There is now just one voltage, $v = v_\text L = -v_\text C$. The initial voltage on the capacitor is $v=\text V_0$.</p>

Now we have $i(0^+) = 0$, but we don't know $di/dt(0^+)$, yet. Where can we get this derivative? Hmmm, how about from the inductor's $i$-$v$ equation? 

$v = \text L\,\dfrac{di}{dt}$

$\dfrac{di}{dt}(0^+) = \dfrac{1}{\text L}\,v(0^+)$

$\dfrac{di}{dt}(0^+) = \dfrac{1}{\text L}\,\text V_0$

This give us our second initial condition. It tells us the moment after the switch closes, the current in the inductor starts changing with a slope of $\text V_0/\text L$ amperes every second. 

Summary of the initial conditions,

$i(0^+)=0$

$\dfrac{di}{dt}(0^+) = \dfrac{1}{\text L}\,\text V_0$

### Use the initial conditions to find $A_1$ and $A_2$

We use our initial conditions to solve for the constants. Let's plug the first initial condition, $i=0$ at $t=0^+$, into the proposed solution and see where it takes us,

$i(t) = A_1\cos \omega_\circ t + A_2\sin \omega_\circ t$

$0 = A_1\cos (\omega_\circ \cdot 0) + A_2\sin (\omega_\circ \cdot 0)$

$0 = A_1\cos 0 + A_2\sin 0$

$0 = A_1 \cdot 1 + A_2 \cdot 0$

$0 = A_1$

$A_1$ is $0$, so the proposed cosine term drops out of the solution. Our proposed solution now looks like,

$i = A_2\sin \omega_\circ t$

Now we go after $A_2$ using the second initial condition. We know, 

$\dfrac{di}{dt}(0^+) = \dfrac{1}{\text L}\,\text V_0$

We have to plug this into something, so take the derivative of the proposed $i(t)$,

$\dfrac{di}{dt} = \dfrac{d}{dt}(A_2 \sin \omega_\circ t)$

$\dfrac{di}{dt} = \omega_\circ A_2\cos \omega_\circ t$

Evaluating this at $t=0$,

$\dfrac{1}{\text L}\,\text V_0 = \omega_\circ A_2\cos(\omega_\circ \cdot 0)$

$\dfrac{1}{\text L}\,\text V_0 =  \omega_\circ A_2\cdot 1$

$A_2 = \dfrac{1}{\omega_\circ \text L}\,\text V_0$

We can expand $\omega_\circ$ back into $\text L$ and $\text C$ to get,

{% capture summary %}show the algebra{% endcapture %}  
{% capture details %}  

$A_2 = \dfrac{1}{\omega_\circ \text L}\,\text V_0,\qquad$ $\omega_\circ = \sqrt{\dfrac{1}{\text{LC}}}$

$A_2 = \dfrac{1}{\sqrt{\dfrac{1}{\text{LC}}}\,\text L}\,\text V_0$ 

$A_2 = \dfrac{1}{\sqrt{\dfrac{1}{\text{LC}}\text L^2}}\,\text V_0$ 

$A_2 = \dfrac{1}{\sqrt{\dfrac{1}{\cancel{\text L}\text{C}}\text L^{\cancel 2}}}\,\text V_0$ 

$A_2 = \dfrac{1}{\sqrt{\dfrac{\text L}{\text{C}}}}\,\text V_0$  
{% endcapture %}{% include details.html %}

$A_2 = \sqrt{\dfrac{\text C}{\text{L}}}\,\text V_0$ 

And finally, after a lot of hard work, the $\text{LC}$ natural response current is,

$i = \sqrt{\dfrac{\text C}{\text L}}\,\text V_0 \sin \omega_\circ t$

The current is a sine wave with radian frequency $\omega_\circ$ and an amplitude determined by the starting voltage and the component values.

## Example

To demonstrate what the solution looks like, let's assign real values to the components, $\text L=1$ henry and $\text C = 1/4$ farad. And let the starting voltage on the capacitor be $10\,\text V$,

![](https://ka-perseus-images.s3.amazonaws.com/0e3e866cab333778923b3bb8e5f4f9e99e66b7da.svg){: .centered :}{: height="180px" :}

The natural frequency $\omega_\circ$ is,

$\omega_\circ = \sqrt{\dfrac{1}{\text{LC}}} = \sqrt{\dfrac{1}{1\cdot 1/4}} = 2\,\text{radians/second}$

The current as a function of time is,

$i = \sqrt{\dfrac{\text C}{\text L}}\,\text V_0 \sin \omega_\circ t$

$i = \sqrt{\dfrac{\text 1/4}{1}}\,10 \sin \omega_\circ t$

$i = 5 \sin 2 t$

The current starts flowing the moment the switch closes,

![LC natural response current]({{ site.baseurl }}{% link i/lc_natural_response_current.svg %}){: .centered :}

When the switch closes the current takes off in a sine wave that continues forever. There is no resistor in this ideal circuit, so the energy never dissipates. In a real-world circuit there would be small resistances that eventually dissipate the energy.

### Frequency

The natural frequency of the sine wave is $\omega_{\circ} = 2 \,\text{radians}/\text{sec}$. We can convert from radians per second to cycles per second, (also known as hertz, or $\text{Hz}$). One full cycle of a sine function corresponds to $2\pi$ radians. We use the symbol $f$ for cycles per second. The conversion is,

$\omega = 2\pi f$

The natural frequency of the example circuit in cycles per second, hertz, $\text{Hz}$, is,

$f = \dfrac{2\,\text{radians/sec}}{2\pi} = \dfrac{1}{\pi}\,\text{Hz,}$ 

The *period* of the cycle is the reciprocal of the frequency, $P = 1/f$. The current completes a full cycle every $P = 1/f = \pi$ seconds.

### Look back at the initial conditions

We can look near the origin to see how the initial conditions appear in the solution. The sine wave starts at the origin, $i=0$. Notice how the slope of the sine wave near the origin matches the slope of the straight black line, $i=10\,\text A/\text{sec}$. 

![LC natural response current close-up]({{ site.baseurl }}{% link i/lc_natural_response_current_closeup.svg %}){: .centered :}

## Voltage

At this point we know the current. If you want to keep going, try to find the voltage. 

**Find an expression for $v(t)$ after the switch closes.**

Probably the quickest route is to use the inductor $i$-$v$ equation. Then solve for $v$ in terms of $di/dt$. 

$v =$ \_\_\_\_\_\_\_\_

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
We know the current is $i = 5\sin 2t$.

We can find $v$ with the inductor $i$-$v$ equation,

$v = \text L \,\dfrac{di}{dt}$

$v = 1\,\text H \cdot\dfrac{d}{dt} (5\sin 2t)$

$v = 5 \cdot 2\,\cos 2t$

$v = 10\,\cos 2t$

![LC natural response voltage]({{ site.baseurl }}{% link i/lc_natural_response_voltage.svg %}){: .centered :}

Notice how $v(t)$ nicely matches up with the initial $\text V_0 = 10\,\text V$ at $t = 0$.
{% endcapture %}{% include details.html %}

Here is a plot of current and voltage together. They are sinusoid waveforms with the same frequency. Current is a sine wave, and voltage is a cosine wave.

![LC natural response current and voltage]({{ site.baseurl }}{% link i/lc_natural_response_both.svg %}){: .centered :}


## Summary
{:.no_toc}

We derived the natural response of an $\text{LC}$ circuit by first creating this homogeneous second-order differential equation, 

$\dfrac{d^2}{d \,t^2}i + \dfrac{1}{\text{LC}}i = 0$

We assumed a solution of the form $Ke^{st}$, which gave us the *characteristic equation* for the circuit,

$s^2 + \dfrac{1}{\text{LC}}=0$

When we found the roots of the characteristic equation we ran into a *very* strange expression, $e^{j\omega_\circ t}$, an exponential with a complex exponent. We reached deep into our bag of tricks and pulled out,

Euler's identities,

$e^{+jx} = \cos x + j\sin x$  

$e^{-jx} = \cos x - j\sin x$

These identities let us express the complex exponential as a combination of sine and cosine functions.

Then we found the initial conditions. A second-order system requires us to find an initial $i$ and an initial $di/dt$. 

We found a function for $i(t)$ that satisfied the differential equation,

$i(t) = \sqrt{\dfrac{\text C}{\text L}}\,\text V_0 \sin \omega_\circ t$

$\omega_\circ \equiv \sqrt{\dfrac{1}{\text{LC}}}$ is the *natural frequency* of the $\text{LC}$ circuit.

 $\text V_0$ is the starting voltage on the capacitor. 

(This solution is applies when the starting current in the inductor is $0$.)
