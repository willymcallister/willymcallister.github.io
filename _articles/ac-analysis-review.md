---
layout: article
title:  "AC Analysis high-level review"
author: Willy McAllister
comments: true
---

The AC analysis section is filled with new concepts and challenging theory. Why did we introduce and fall in love with this odd-looking $e^{j\omega t}$ term? Here is a high-level review of why we do AC analysis this way.

1. Circuits with L and C have a natural response modeled by differential equations.  

2. The solutions to these equations are exponential functions. That's why we love exponentials. They are the solution to problems we care about.

3. In the real world a large number of signals resemble sine waves (talking, music, vibration). Our typical objective is to amplify those signals and put them through filters to modify their frequency content. 

4. We apply sines to the input an amplifier or filter. We want to know what the R's, L's, and C's (modeled as a differential equation) do to the signal. The answer is a natural response plus a forced response. We studied natural plus forced response in [RC step response](/a/rc-step-response.html). 

5. By the miracle of [Euler's formula](../v/ac-analysis-eulers-formula.html) (or [here](/a/lc-natural-response-derivation.html#eulers-identities)) we know how to represent sine and cosine as the sum of two exponential terms. Those exponentials happen to have imaginary exponents, which makes them totally weird, but it makes the math totally work. The reason the math works is because the forced input (a sine wave rendered as two exponentials) has the same general shape as the natural response. This happens to be one of the few forced differential equations we know how to solve.

6. In general, differential equations are very hard or even impossible to solve analytically. We can find solutions for the forced RC, RL, and RLC as long as we restrict the forcing input to an exponential. This solution is so valuable and so rare we do everything possible to preserve it. That included restricting ourselves to fixed value of R, L, and C (constant coefficients), and applying only exponential inputs.

7. The assumption of exponential inputs isn't as restrictive as you might think. Sine waves can be combined to create other signals that don't look like sines, like square waves. See for example Sal's video sequence on the [Fourier series](https://www.khanacademy.org/science/electrical-engineering/ee-signals) where he creates a square wave by adding sines together. The Fourier transform and Laplace transform are other mathematical tools for processing signals. In AC analysis we focus on how sines go through systems---knowing that, we construct how other signals will, too.

That is why we pick $e^{j\omega t}$ for our assumed input. When the input is an exponential we know how to solve the differential equation, and we know how to reconstruct a sine wave. That's the winning combination at the heart of AC analysis.

After we settled on sines (in the form of complex exponentials) as our input we developed the idea of impedance. Impedance is a generalization of the concept of resistance, where we assume the signals are sines and we compute the ratio of voltage to current in R, L, and C. The impedance of a resistor is the same at all frequencies. The impedance of L and C changes with frequency. $\text Z_\text L$ goes up as frequency goes up; $\text Z_\text C$ goes down as frequency goes up.

We made a useful observation when we applied the two parts of a sine, $e^{+j\omega t}$ and $e^{-j\omega t}$, to R, L, and C circuits. The outputs that emerge from the circuit turned out to be complex conjugates of each other (same real part, opposite imaginary parts). If we do the analysis with one exponential input, we automatically know how the other one will turn out. Half the work. Nice. 

