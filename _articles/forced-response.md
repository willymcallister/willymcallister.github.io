---
layout: article
title:  "Forced response"
author: Willy McAllister
comments: true
---

The *forced response* is not an easy concept. In the academic world prominent authors define this term different ways. I wasn't aware of dual definitions until recently---I always thought there was just one definition of forced response, the one I was taught in school. Then a KA learner pointed out the other definition and threw me for a loop. I decided to roam the web and review multiple text books and write down both perspectives so I could learn the difference, and share it with you.

Resources:

[RC natural response -  intuition]({% link _articles/rc-natural-response-intuition.md %})  
[RC natural response - derivation]({% link _articles/rc-natural-response-derivation.md %})  
[RC step response - intuition]({% link _articles/rc-step-response-intuition.md %})  
[RC step response - derivation]({% link _articles/rc-step-response1.md %})  

Written by Willy McAllister. 

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

### Where we're headed 
{:.no_toc}

* The forced response can be defined two ways.
* If you are talking to someone about forced response and you sense a disconnect it may be because of different electronics backgrounds.
* Few engineers are aware there are two definitions. Most students don't buy two expensive textbooks on the same topic, so we never run across the other definition.
* None of this matters for the final answer, the total response---the one you observe with an oscilloscope. It comes out the same. You can be confident in your answer with either definition. 
* What does matter is the process you use to find the forced response. There is also a small difference in how you represent the natural response.

Not surprisingly, I prefer one definition over the other, and I will let you know why. I use that definition to derive the [RC step response]({% link _articles/rc-step-response1.md %}).

----

## Definitions

Forced response can be defined two ways,

1. Forced response is the circuit's final steady state, caused by the forcing input.
2. Forced response is the circuit's response when the initial conditions are set to $0$.

These two relatively modern well-known textbooks represent both sides. Both of these books have trained many electrical engineers,

{% capture image %}Agarwal_Lang_textbook.jpg{% endcapture %} 
{% capture alt %}Agarwal and Lang, Foundations of Analog and Digital Electronic Circuits{% endcapture %}  
{% capture height %}200px{% endcapture %}  
{% capture description %} 
[Agarwal and Lang](https://www.amazon.com/Foundations-Electronic-Circuits-Kaufmann-Architecture/dp/1558607358), *Foundations of Analog and Digital Electronic Circuits*, p. 506. 
{% endcapture %}{% include image_left_with_text.html %}

{% capture image %}Alexander_Sadiku_textbook.jpg{% endcapture %} 
{% capture alt %}Alexander and Sadiku, Fundamentals of Electronic Circuits{% endcapture %}  
{% capture height %}240px{% endcapture %}  
{% capture description %} 
[Alexander and Sadiku](https://www.amazon.com/Fundamentals-Electric-Circuits-Matthew-Sadiku-ebook/dp/B008K9U418), *Fundamentals of Electric Circuits*, 5th Edition, p. 275.
{% endcapture %}{% include image_left_with_text.html %}

## Agarwal and Lang

The authors derive the step response using this definition of forced response,

**Forced response: The circuit’s final steady state, caused by the forcing input.**

This is my personal favorite and it's how I derive the forced response in detail in [this]({% link _articles/rc-step-response1.md %}) article. The method is based on this mathematical theory of non-homogeneous differential equations,

>The total solution to a non-homogeneous differential equation can be found by the sum of the **general** solution of the circuit's natural response with **any particular** response (found without regard for the initial conditions), followed by applying the initial conditions to resolve unknown constants.

Find the *general* form of the natural response (the form with $K_n$ as the arbitrary constant),

$v_n = K_n\,e^{st}$

Then find a specific particular solution, the one that represents the long term steady-state response of the circuit. This particular particular solution is easy to find compared to others. We give it the name *forced response*. The forced response is the step voltage,

$v_f = \text V_\text S$ 

Add $v_n + v_f$ to get the total response in general form,

$v_{tot} = K_n\,e^{-t/\text{RC}} + \text V_\text S$

We've held off applying the initial condition until now. It's finally time to apply it to the *total* response. This resolves $K_n$ and gives us the answer,

$v(0) = \text V_0$

$v_{tot} = (\text V_0 - \text V_\text S)\,e^{-t/\text{RC}} + \text V_\text S$

{% include d3/rc_step_response_Agarwal.html %}
The total response (middle) is the sum of natural plus forced: $(\text V_0 - \text V_\text S)\,e^{-t/\text{RC}} + \text V_\text S$
{: .caption :}

With this definition the natural response is a scaled version of the $\text{RC}$ natural response you are used to---the one that starts at $\text V_0$ and ends at $0$. It may look a little goofy hanging down below the time axis, but it's just scaled/flipped to make it blend perfectly between the initial condition and the final voltage.

This is my preferred way to define the forced response. I like the clear difference between the transient portion and the steady-state portion. 

At Khan Academy we would say this is the *mathy* way to solve the problem. Critics say this gets you to a correct answer but without the physical insight into what is happening. Adherents say pshaw I can handle that---besides, this method generalizes to non-constant forcing functions like ramps or sine waves.

## Alexander and Sadiku 

The authors find the step response three ways. Initially by [separation of variables]({% link _articles/rc-step-response1.md %}#appendix---separable-differential-equation), then by [superposition]({% link _articles/superposition.md %}) which is described here, and finally by the [mathy](#agarwal-and-lang) method shown above. The superposition method leads to this definition of forced response,

**Forced response: What the circuit does when the initial conditions are set to $0$.**

We find the step response by the traditional superposition method. The first thing to notice is there are two sources of energy: 1. the input source, and 2. energy stored in the capacitor. We break the problem into two simpler sub-circuits. One ignores the input energy and the other ignores the stored energy. Then we superimpose (add) the two individual solutions to get the total solution.

{% capture image %}rc_step_superposition_natural.svg{% endcapture %} 
{% capture alt %}Superposition sub-circuit for natural response{% endcapture %}
{% capture height %}180px{% endcapture %}  
{% capture caption %}Superposition sub-circuit for the natural response with input suppressed.{% endcapture %} 
{% include image_left_with_caption.html %}
{% capture image %}rc_step_superposition_forced.svg{% endcapture %} 
{% capture alt %}Superposition sub-circuit for forced response{% endcapture %}
{% capture height %}180px{% endcapture %}  
{% capture caption %}Superposition sub-circuit to find the forced response with initial condition suppressed.{% endcapture %} 
{% include image_left_with_caption.html %}

The natural response sub-circuit has an initial voltage on the capacitor, $v_n(0) = \text V_0$ and the input suppressed (turned off). We model the circuit  with this homogeneous differential equation,

$\dfrac{dv_n}{dt} + \dfrac 1 {\text{RC}} \, v_n = 0$

The solution is the traditional $\text{RC}$ [natural response]({% link _articles/rc-natural-response-derivation.md %}),

$v_n = \text V_0\,e^{-t/\text{RC}}$

To find the forced response we restore the input source and suppress the initial conditions, $\text V_0 = 0$. This sub-circuit is modeled by the same non-homogeneous equation we developed for the step response, this time with $0$ initial condition, 

$\dfrac{dv_f}{dt} + \dfrac{v_f}{\text{RC}} = \dfrac{\text V_\text S}{\text{RC}}\qquad$ with initial condition: $v_f(0) = 0$

This is the original difficult non-homogeneous equation. So now what? 

Alexander and Sadiku assume the student has taken a class in differential equations. They find $v_{tot}$, the total step response with the method of [separable differential equations]({% link _articles/rc-step-response1.md %}#appendix---separable-differential-equation),

$v_{tot} = (\text V_0 - \text V_\text S)\,e^{-t/\text{RC}} + \text V_\text S$

If you replace $\text V_0$ with $0$ you get this voltage function,

$v_f = -\text V_\text S\,e^{-t/\text{RC}} + \text V_\text S$

$v_f$ is defined to be the *forced response*. With this definition the forced response has a steady-state portion *and* a transient portion.

The total response can be described as the superposition of natural plus forced, 

$v_{tot} = v_n + v_f$

$v_{tot} = \text V_0\,e^{-t/\text{RC}} -\text V_\text S\,e^{-t/\text{RC}} + \text V_\text S$

$v_{tot} = (\text V_0 - \text V_\text S)\,e^{-t/\text{RC}} + \text V_\text S$

{% include d3/rc_step_response_Sadiku.html %}
The total response (top) is the sum of natural plus forced: $v_{tot} = (\text V_0 - \text V_\text S)\,e^{-t/\text{RC}} + \text V_\text S$
{: .caption :}

## Summary
{:.no_toc}

There are three ways to solve the step response, 
* By the method of [separable differential equations]({% link _articles/rc-step-response1.md %}#appendix---separable-differential-equation). This method requires you understand what a separable equation is. It works dandy for the step response, but it does not generalize to other forms of forcing input (ramp or sinusoid). With this method you don't decompose into natural and forced---you get the total response in one step.

* By the mathy [method of undetermined coefficients](https://www.khanacademy.org/math/differential-equations/second-order-differential-equations#undetermined-coefficients) where we find and transient response and add it to the steady-state response. The transient response is a scaled version of the natural response. We give the steady-state response the name *forced response*. I prefer this method. It generalizes to other forcing inputs.

|Total response |=|transient response<br>temporary part<br>natural response|+|steady-state response<br>permanent part<br>forced response|
{:.noborder }

* By the method of [superposition]({% link _articles/superposition.md %}) where we split to the circuit based on the sources of energy, the input energy and the internal stored energy. The *forced response* is defined to be what the circuit does when the internal stored energy is set to $0$. This forced response has a transient part and a steady-state part. Finding the forced response requires some fancy footwork, either by using the separable equation method or coming up with a "correction" term (see Ribas in References) to find the transient portion. This is not my favorite technique for finding step response, but it is certainly a valid way to think about it.

|Total response |=|stored energy<br>natural response<br>temporary part|+|input energy<br>forced response<br>temporary + permanent part|
{:.noborder }

## References

Using [separable differential equation]({% link _articles/rc-step-response1.md %}#appendix---separable-differential-equation) to find the RC step response.

Science Direct [Forced response](https://www.sciencedirect.com/topics/computer-science/forced-response) is defined as the steady-state response, see Figure 2–6.

[MIT Signals and Systems lecture notes](http://web.mit.edu/16.unified/www/FALL/signalssystems/Lecture16_17.pdf) --- Forced response is the particular steady-state response that resembles the input, see slide 5. See also [MIT Transient Analysis of First Order RC and RL circuits lecture notes](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-071j-introduction-to-electronics-signals-and-measurement-spring-2006/lecture-notes/transient1_rl_rc.pdf) for a similar definition on page 8.

Stack Exchange question [Difference between natural response and forced response?](https://electronics.stackexchange.com/questions/93061/difference-between-natural-response-and-forced-response) --- See the answer by Felipe Ribas. The forced response is defined as the system's response to an external stimulus with zero initial conditions. The forced response is found using an 'adjustment factor' (another exponential term) to "correct" the natural response.

And finally my thanks to Khan Academy learner [Cal Colson](https://www.khanacademy.org/profile/kaid_1203884218835960459097935/discussion) whose question posted on my RC Step Response article launched this little research project. This is how I learned about the Ribas essay.
