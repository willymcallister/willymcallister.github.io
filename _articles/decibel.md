---
layout: article
title:  "Decibel"
author: Willy McAllister
comments: true
---

The *decibel* $(\text{dB})$ unit measures the ratio between two quantities. That means the decibel is a relative measurement. Its main application is to measure the ratio of power. 

The definition of a decibel can be modified to measure the ratio of voltages or currents. 

The decibel uses base-$10$ logarithms. To brush up on your logarithms, pay [Sal](https://www.khanacademy.org/math/algebra2/exponential-and-logarithmic-functions) a visit.

Written by Willy McAllister.

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

### Where we're headed 
{:.no_toc}

Gain in $\text{dB} = 10 \log_{10}\dfrac{p_1}{p_0}$ for a power ratio.

Gain in $\text{dB} = 20 \log_{10}\dfrac{v_1}{v_0}$ for a voltage ratio.

We use the second definition for anything proportional to the square root of power---voltage, current, sound intensity, etc.

A negative $\text{dB}$ value corresponds to gain less than $1$. 

----

## Back story

To understand the decibel it helps to know where it came from. Why is there a $\log$? why is there a $10$? If you want, hop over this part and go to the [definition](#definition) section.

The decibel was invented by engineers at the Bell Telephone Co. in the 1920's (now AT&T). Bell engineers wanted to express how much power was gained in an amplifier or how much power was lost driving a phone signal down a long copper transmission line. 

![Send a signal down a telephone land line]({{ site.baseurl }}{% link i/decibel1.svg %}){: .centered :}

Low-power phone signal $p_0$ is amplified by $A_1$ to higher power $p_1$ and sent down transmission line $T_1$. Over distance the signal power diminishes down to $p_2$. It has to be amplified again by $A_2$ restoring it to higher power $p_3$ to continue the trip. This process happens over and over again for a long-distance phone call.
{: .caption :}

Just making up numbers, suppose the incoming signal is $p_0 = 1 \,\text{mW}$. We want to drive the land line with a $p_1 = 1\,\text W$ signal. Amplifier $A_1$ provides the necessary gain. The signal travels down the long transmission line and loses almost all of its energy into the resistance of the line. Miles or kilometers away the signal has attenuated down to $p_2 = 0.01\,\text{mW}$ (*attenuate* means *loss*). Amplifier $A_2$ receives the signal and boosts it back up again to $p_3$.

We want to measure gain and attenuation with numbers. The first thing we might try is a simple ratio. The power before and after the first amplifier is, 

$A_1 = \dfrac{p_1}{p_0} = \dfrac{1}{0.001} = 1000$

The term on the bottom, $p_0$, is the *reference* value. We are comparing the term on top, $p_1$, to the reference value.

The power attenuation down the line is,

$T_1 = \dfrac{p_2}{p_1} = \dfrac{0.00001}{1} = 1/10{,}000$

This works fine. However, the numbers involved can be very big and very small. Writing big and small numbers is error-prone if you miscount the zeros. 

A good way to compress a wide number range is to take its logarithm. (This is the convenient feature of scientific notation with the exponent of $10$.) Let's try that with power ratios. Bell engineers defined a new unit called the $\text{bel}$ named after their company founder, Alexander Graham Bell. A bel is the logarithm of the ratio, abbreviated $\text B$,

power gain in $\text{bel} = \log_{10}\dfrac{p_1}{p_0}$

We can express the amplifier power gain in bels,

$A_1 = \log_{10}\dfrac{p_1}{p_0} = \log_{10}\dfrac{1}{0.001} = \log_{10} 1000 = +3\,\text{bel} = 3\,\text B$

The attenuation of the transmission line in bels is,

$T_1 = \log_{10}\dfrac{p_2}{p_1} = \log_{10}\dfrac{0.00001}{1} = \log_{10}1/10{,}000 = -4\,\text B$

Attenuation has a negative $\text{bel}$ value after taking the logarithm. Ratios less than $1$ come out with a negative sign in bels.

If the terms in the ratio happen to be the same then you get zero bel,

$\log_{10}\dfrac{p}{p} = \log_{10} 1 = 0\,\text B$

So far so good. We have a compact notation. But there's a small irritation when the ratio of power is small. For aesthetic purposes, we would like our units to be greater than $1$ most of the time. If you have a power ratio of $2:1$ the gain in bels is,

$\log_{10} \dfrac{2}{1} = \log_{10} 2 = 0.301\,\text{bel}$

This means the bel unit is inconveniently large. Bell engineers said, "We want the number to be a little bigger. What the heck. We'll divide the bel by $10$ and call it a *deci*-bel and multiply the answer by ten so it means the same thing." $1\,\text{bel} = 10\,\text{decibel}$. As long as you are making up a unit, you might as well make it a unit you want.

{% capture summary %}*deci-*{% endcapture %}  
{% capture details %}  
The prefix *deci-* comes from the Latin word *decimus* for one tenth. It is also the name of our number system, the *decimal* system. Decibel means literally *one-tenth bel*.  
{% endcapture %}{% include details.html %}

## Definition

This practical chain of reasoning lead Bell engineers to define the decibel we use today, abbreviated $\text{dB}$,

$\boxed{\text{Gain in }\text{dB} = 10 \log_{10}\dfrac{p_1}{p_0}}$
{: .colorbox :}

Notice the decibel is a dimensionless quantity. It's not $\text{dB}$ of watts, it's just $\text{dB}$.

## Example 1
{:.no_toc}

**Express a power ratio of $2:1$ in decibels.**

From the definition of decibel,

gain in $\text{dB} = 10 \log_{10} \dfrac{2}{1} = 10 \log_{10} 2 = 3.01\,\text{dB}$.

Use your calculator to compute the log or tell Google: ```10*log10(2)```   
or use the [power ratio to dB calculator](#power-ratio-to-db).

Now flip the power ratio to $1:2$ and figure out what that means in decibels,

gain in $\text{dB} = 10 \log_{10} \dfrac{1}{2} = 10 \log_{10} 0.5 = -3.01\,\text{dB}$

By the way, these are good $\text{dB}$ values to memorize,  
Twice the power is $+3\,\text{dB}$. Half the power is $-3\,\text{dB}$.

## Example 2
{:.no_toc}

Let $p_1 = 2\,\text W$ and the reference value $p_0 = 0.02\,\text W$.

**What is the power ratio in decibels?**

Hint: Use your calculator to compute the log, or enter ```10*log10(2/0.02)``` into Google.

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
gain in $\text{dB} = 10 \log_{10}\dfrac{p_1}{p_0}$

gain in $\text{dB} = 10 \log_{10}\dfrac{2}{0.02}$

gain in $\text{dB} = 10 \log_{10} 100$

gain in $\text{dB} = 10 \cdot 2$

gain in $\text{dB} = 20\,\text{dB}$
{% endcapture %}{% include details.html %}

Extra credit: What is the decibel measure if you reverse $p_0$ and $p_1$? 

More extra credit: What is the decibel measure if $p_0 = p_1$? 

## Example 3
{:.no_toc}

Now we go the other way. I tell you the power gain in decibels is $15\,\text{dB}$,

**What is the ratio of the two powers?**

Hint: Work the logarithm backwards to find the ratio. 

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
We know the $\text{dB}$ and we're asked to find $\dfrac{p_1}{p_0}$.

gain in $\text{dB} = 10 \log_{10}\dfrac{p_1}{p_0}$

$15\,\text{dB} = 10 \log_{10}\dfrac{p_1}{p_0}$

$15\,\text{dB}/10 = \log_{10}\dfrac{p_1}{p_0}$

Raise each side up to be a power of $10$,

$10^{15\,\text{dB}/10} = 10^{\log_{10}p_1/p_0}$

On the right side, the "$10$-to-the" and the log function cancel each other, leaving behind the argument of the log,

$10^{1.5} = \dfrac{p_1}{p_0}$

$\dfrac{p_1}{p_0} = 31.62$

A gain of $15\,\text{dB}$ represents a power ratio of $31.62:1$.

In general, to go from $\text{dB}$ to power ratio,

$\boxed{\dfrac{p_1}{p_0} = 10^{\text{dB}/10}}$
{: .colorbox :}
{% endcapture %}{% include details.html %}

## Comparing voltages using decibels

There's one more finesse. What happens if we try to measure voltage gain in dB? If we define this carefully, we might even be able to compare voltage $\text{dB}$'s with power $\text{dB}$'s directly. 

The first thing you might try is the same definition of decibel,

gain in $\text{dB} \stackrel{?}{=} 10 \log_{10}\dfrac{v_1}{v_0}$

This definition has the same features as power decibels, with a nice compression and reasonable range. But, if you compute $\text{dB}$'s using the power and voltage of the same signal, they don't match. 

{% capture summary %}show me the problem{% endcapture %}  
{% capture details %}  
![50 ohms with 1 volt]({{ site.baseurl }}{% link i/decibel2.svg %}) Set up a $50\,\Omega$ resistor with $1\,\text V$ across it. 

The power in the resistor is $p = v^2/\text R = 1^2/50 = 0.020 = 20\,\text{mW}$

![50 ohms with 2 volt]({{ site.baseurl }}{% link i/decibel3.svg %}) Then change the voltage to $2\,\text V$. 

The power goes up to $p = v^2/\text R = 2^2/50 = 0.080 = 80\,\text{mW}$ 

**Compute the gain in voltage and power with the proposed definition of voltage $\text{dB}$.**

voltage gain in $\text{dB} \stackrel{?}{=} 10 \log_{10}\dfrac{v_1}{v_0} = 10 \log_{10}\dfrac{2\,\text V}{1\,\text V} = 3\,\text{dB}$

power gain in $\text{dB} = 10 \log_{10}\dfrac{p_1}{p_0} = 10 \log_{10}\dfrac{80\,\text{mW}}{20\,\text{mW}} = 6\,\text{dB}$

The two calculations are different by a factor of two. We can't directly compare voltage decibels to power decibels unless we use a conversion factor. With this definition of voltage $\text{dB}$'s we would have to remember "kinds" of $\text{dB}$, like voltage decibels and power decibels. That's lame. We can do better.
{% endcapture %}{% include details.html %}

What do we have to do to get the same decibel value for power and voltage? Voltage and power have a specific relationship. The power in a signal is $p = i\,v$. If the voltage appears across a resistor we use Ohm's Law to express power in terms of voltage,

$p = i\,v = \dfrac{v}{\text R}\cdot v = \dfrac{v^2}{\text R}$

Power $p$ is proportional to voltage squared $v^2$. Power and voltage have a square relationship. If you say it backwards, they have a square-root relationship. 

Write the definition of decibel using $v^2/\text{R}$,

$10 \log_{10}\dfrac{p_1}{p_0} = 10 \log_{10}\dfrac{v_1^2/\text R_1}{v_0^2/\text R_0}$

Let's assume the resistors have the same value. That makes them cancel out. (This is an important assumption. We'll talk about this again.)

$10 \log_{10}\dfrac{p_1}{p_0} = 10 \log_{10}\dfrac{v_1^2}{v_0^2} = 10 \log_{10} \left (\dfrac{v_1}{v_0}\right )^2$

It is possible to simplify the $v^2$ term using the [power property of logarithms](https://www.khanacademy.org/math/algebra2/exponential-and-logarithmic-functions/properties-of-logarithms/v/logarithm-of-a-power). The power property says if you have an exponent, $y$, inside a logarithm you can move it out in front of the log,

$\log_{10} x^y = y \log_{10} x\qquad$ power property of logarithms

We do this to the $v^2$ fraction,

$10 \log_{10}\dfrac{v_1^2}{v_0^2} = 2 \cdot 10 \log_{10}\dfrac{v_1}{v_0}$

The leading $10$  turns into a $20$ and gives us the definition of a decibel when taking the ratio of voltages (or any other quantity proportional to the square root of power),

$\boxed{\text{Gain in } \text{dB} = 20 \log_{10}\dfrac{v_1}{v_0}}$
{: .colorbox :}

It may seem goofy to have a second definition for the decibel, but we need it to get a consistent meaning for $\text{dB}$.

## Example 4
{:.no_toc}

Now we redo the calculation from up above in the "show me the problem" hint. This time using the proper definition of decibel for voltage ratios.

![50 ohms with 1 volt]({{ site.baseurl }}{% link i/decibel2.svg %}) Set up a $50\,\Omega$ resistor with $1\,\text V$ across it. 

The power in the resistor is $p = v^2/\text R = 1^2/50 = 0.020 = 20\,\text{mW}$

![50 ohms with 2 volt]({{ site.baseurl }}{% link i/decibel3.svg %}) Then change the voltage to $2\,\text V$. 

The power goes up to $p = v^2/\text R = 2^2/50 = 0.080 = 80\,\text{mW}$ 

**Compute the gain in voltage and power with the revised definition of $\text{dB}$ for voltage.**

voltage gain in $\text{dB} \stackrel{!}{=} 20 \log_{10}\dfrac{v_1}{v_0} = 20 \log_{10}\dfrac{2\,\text V}{1\,\text V} = 6\,\text{dB}$

power gain in $\text{dB} = 10 \log_{10}\dfrac{p_1}{p_0} = 10 \log_{10}\dfrac{80\,\text{mW}}{20\,\text{mW}} = 6\,\text{dB}$

The two calculations give the same answer when we use the proper definition of decibel for voltage ratios. We did better.

## Example 5
{:.no_toc}

**Express a voltage ratio of $2:1$ in decibels.**

From the definition of decibel,

gain in $\text{dB} = 20 \log_{10} \dfrac{2}{1} = 20 \log_{10} 2 = 6.02\,\text{dB}$.

Use your calculator to compute the log or tell Google: ```20*log10(2)```  
or use the [voltage ratio to dB calculator](#voltage-ratio-to-db).

## Example 6
{:.no_toc}

Now we go the other way with voltage ratios. I tell you the gain in decibels is $3\,\text{dB}$,

**What is the ratio of the two voltages?**

Hint: This is the same derivation we did in Example 3, but with the definition of decibels for voltage ratios. 

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
We know the $\text{dB}$ and we're asked to find $\dfrac{v_1}{v_0}$.

gain in $\text{dB} = 20 \log_{10}\dfrac{v_1}{v_0}$

$3\,\text{dB} = 20 \log_{10}\dfrac{v_1}{v_0}$

$3\,\text{dB}/20 = \log_{10}\dfrac{v_1}{v_0}$

Raise each side up to be a power of $10$,

$10^{3\,\text{dB}/20} = 10^{\log_{10}v_1/v_0}$

On the right side, the "$10$-to-the" and the log cancel each other, leaving behind the argument of the log,

$10^{3/20} = \dfrac{v_1}{v_0}$

$\dfrac{v_1}{v_0} = 1.4125$

A gain of $3\,\text{dB}$ represents a voltage ratio of $1.41:1$. 

Compare this voltage ratio to the the power ratio we worked out in Example 1.

In general, to go from $\text{dB}$ to voltage ratio,

$\boxed{\dfrac{v_1}{v_0} = 10^{\text{dB}/20}}$
{: .colorbox :}
{% endcapture %}{% include details.html %}

## Example 7
{:.no_toc}

The gain of an amplifier is $100\,\text{dB}$.

**What is the ratio of the output voltage to input voltage?**

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
$\dfrac{v_{out}}{v_{in}} = 10^{\text{dB}/20}$

$\dfrac{v_{out}}{v_{in}} = 10^{100/20}$

$\dfrac{v_{out}}{v_{in}} = 10^5$

$\dfrac{v_{out}}{v_{in}} = 100{,}000$

Modern opamp chips achieve this level of gain.
{% endcapture %}{% include details.html %}

## Review the assumption about resistance

When we defined decibels for voltage ratios we assumed the two resistors in 

$10 \log_{10}\dfrac{v_1^2/\text R_1}{v_0^2/\text R_0}$ had the same value. Let's talk about when that's a good assumption.

This assumption is easy to meet if the top and bottom voltages are the same point in the circuit. There's just one resistor to worry about. For example, if you look at the voltage output of a filter and you want to compare low-frequency response to high-frequency response, they are measured at the same physical node, so $\text R$ is the same. 

If the voltages are not measured at the same point then the assumption works if the two points have the same resistance. An example is an amplifier with an input resistance of $50\,\Omega$ driving a load of $50\,\Omega$. You get an accurate $\text{dB}$ reading for the gain of the amplifier when two different $\text R$'s have the same value.

The assumption is not met if the resistance at two points is different. In spite of this, it is quite common for engineers to present voltage ratios in $\text{dB}$ even if the resistors are not the same. The number you get is an accurate reflection of the voltage gain, but you have to be cautious if comparing it to other $\text{dB}$ derived from power. They are not the same animal.


## Where do you see dB units? 

$\text{dB}$ units are commonly used to measure 
* gain of amplifiers
* attenuation of filters
* signal to noise ratio (SNR)

Amplifier: An amplifier can be characterized in terms of $\text{dB}$ of gain. If the voltage gain of an amplifier is $v_o/v_i = 100$, that's equivalent to a gain of $40\,\text{dB}$. (Try it in the [voltage ratio to dB calculator](#voltage-ratio-to-db).)

Filter: $\text{dB}$ is used to characterize analog and digital filters. When you simulate a filter the magnitude scale is almost always presented in $\text{dB}$. SPICE and Circuit Sandbox use $\text{dB}$ on the vertical scale of AC magnitude plots. Open this [circuit model](https://spinningnumbers.org/circuit-sandbox/index.html?value=%5B%5B%22w%22%2C%5B264%2C80%2C264%2C72%5D%5D%2C%5B%22w%22%2C%5B264%2C64%2C264%2C72%5D%5D%2C%5B%22w%22%2C%5B272%2C72%2C264%2C72%5D%5D%2C%5B%22w%22%2C%5B152%2C136%2C208%2C136%5D%5D%2C%5B%22w%22%2C%5B264%2C136%2C208%2C136%5D%5D%2C%5B%22g%22%2C%5B208%2C136%2C0%5D%2C%7B%22_json_%22%3A5%7D%2C%5B%220%22%5D%5D%2C%5B%22w%22%2C%5B152%2C128%2C152%2C136%5D%5D%2C%5B%22w%22%2C%5B264%2C128%2C264%2C136%5D%5D%2C%5B%22w%22%2C%5B264%2C64%2C256%2C64%5D%5D%2C%5B%22w%22%2C%5B232%2C64%2C240%2C64%5D%5D%2C%5B%22a%22%2C%5B240%2C64%2C0%5D%2C%7B%22color%22%3A%22magenta%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A10%7D%2C%5B%222%22%2C%22Vout%22%5D%5D%2C%5B%22L%22%2C%5B272%2C72%2C0%5D%2C%7B%22label%22%3A%22Vout%22%2C%22_json_%22%3A11%7D%2C%5B%22Vout%22%5D%5D%2C%5B%22v%22%2C%5B152%2C80%2C0%5D%2C%7B%22name%22%3A%22Vin%22%2C%22value%22%3A%22step(0%2C1%2C0%2C1n)%22%2C%22_json_%22%3A12%7D%2C%5B%221%22%2C%220%22%5D%5D%2C%5B%22r%22%2C%5B232%2C64%2C1%5D%2C%7B%22name%22%3A%22R1%22%2C%22r%22%3A%221k%22%2C%22_json_%22%3A13%7D%2C%5B%222%22%2C%221%22%5D%5D%2C%5B%22c%22%2C%5B264%2C80%2C0%5D%2C%7B%22name%22%3A%22C1%22%2C%22c%22%3A%221u%22%2C%22_json_%22%3A14%7D%2C%5B%22Vout%22%2C%220%22%5D%5D%2C%5B%22w%22%2C%5B152%2C80%2C152%2C64%5D%5D%2C%5B%22w%22%2C%5B152%2C64%2C184%2C64%5D%5D%2C%5B%22s%22%2C%5B264%2C64%2C0%5D%2C%7B%22color%22%3A%22cyan%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A17%7D%2C%5B%22Vout%22%5D%5D%2C%5B%22view%22%2C84.428%2C21.1336%2C3.0517578125%2C%2250%22%2C%2210%22%2C%221M%22%2C%22Vin%22%2C%22100%22%2C%226m%22%2C%221000%22%5D%5D){:target="_blank"} to see an example. Run an AC simulation. On the magnitude plot hold the mouse near $4\,\text{kHz}$ on the frequency scale. The filter response is $-35.965\,\text{dB}$ at that frequency. Use the [dB to voltage ratio calculator](#db-to-voltage-ratio) to find out how small the output is relative to the input at $4\,\text{kHz}$.

SNR: Electronic systems always have background noise. Noise can be a faint hiss caused by electrons striking atoms, or it can be caused outside interference from other electrical sources. It is common to compare the power of the intended signal to the power of the noise, expressing the *signal-to-noise ratio* (SNR) in decibels. A high-en stereo system with undetectable background noise has high SNR. A really bad scratchy phone connection you can hardly understand has low SNR.

## Relative to watt?

If you've been following along you know the decibel is a relative measure. It always involves a ratio of two numbers. What happens if you come across a $\text{dB}$ reading for one number? The text will make it sound as if there is an absolute decibel scale. But there is not. It means one of the numbers is missing, and it is always the reference value that's unstated.

When this happens there is a reference value hiding somewhere in the vicinity. Sometimes the reference value is supposed to be "understood" because of the context. If you are not an insider in a specific technical field you have to look around the article or ask someone or see if Google can tell you.

Often the reference is tucked into the decibel unit with an extra letter added to $\text{dB}$,

$\text{dBm}$ --- The "m" suffix means the reference value is $1\,\text{mW}$.

$\text{dBV}$ --- The "V" suffix means the reference value is $1\,\text{V}$.

There is no consistency to this, and there's a whole alphabet soup of suffixes. A lot of them are listed on the Wikipedia page for the [decibel](https://en.wikipedia.org/wiki/Decibel#List_of_suffixes_in_alphabetical_order). It's unfortunate, but using decibels sometimes forces you do extra work to find the reference.

## dB calculators

Here are some simple calculators for the four boxed decibel equations.

#### Power ratio to dB

<script>
function power2dB() {
  var val1 = parseFloat(document.getElementById("value1p").value);
  var val0 = parseFloat(document.getElementById("value0p").value);
  var ansD = document.getElementById("answerdBp");
  var dB = 10 * Math.log10(val1 / val0);
  ansD.value = dB.toFixed(2); 
}
</script>

<input type="text" id="value1p" name="p1" value="2" style="text-align:right;"> $p_1$  
<input type="text" id="value0p" name="p0" value="1" style="text-align:right;"> $p_0$  
<input type="button" style="padding: 5px; background-color: #e8e8e8; border-radius: 10px;" name="Submit" value=" to dB " onclick="power2dB()"> $= 10\,\log{p_1 / p_0}$  
<input type="text" id="answerdBp" name="answerdBp" value="" style="text-align:right;"> $\text{dB}$

#### Voltage ratio to dB

<script language="javascript">
function rootPower2dB() {
  var val1 = parseFloat(document.getElementById("value1v").value);
  var val0 = parseFloat(document.getElementById("value0v").value);
  var ansD = document.getElementById("answerdBv");
  var dB = 20 * Math.log10(val1 / val0);
  ansD.value = dB.toFixed(2); 
}
</script>

<input type="text" id="value1v" name="v1" value="2" style="text-align:right;"> $v_1$   
<input type="text" id="value0v" name="v0" value="1" style="text-align:right;"> $v_0$  
<input type="button" style="padding: 5px; background-color: #e8e8e8; border-radius: 10px;" name="Submit" value=" to dB " onclick="rootPower2dB()"> $= 20\,\log{v_1 / v_0}$  
<input type="text" id="answerdBv" name="answerdBv" value="" style="text-align:right;"> $\text{dB}$

#### db to power ratio

<script>
function dB2powerGain() {
  var val1 = parseFloat(document.getElementById("valuedBp").value);
  var ansD = document.getElementById("answerp");
  var pGain = Math.pow(10,val1/10);
  ansD.value = pGain.toPrecision(3); 
}
</script>
<input type="submit" style="display: none" />
<input type="text" id="valuedBp" name="dB" value="3" style="text-align:right;"> $\text{dB}$   
<input type="button" style="padding: 5px; background-color: #e8e8e8; border-radius: 10px;" name="Submit" value=" to ratio " onclick="dB2powerGain()"> $= 10^{\text{dB}/10}$  
<input type="text" id="answerp" name="answerp" value="" style="text-align:right;"> $p_1/p_0$

#### dB to voltage ratio

<script>
function dB2voltageGain() {
  var val1 = parseFloat(document.getElementById("valuedBv").value);
  var ansD = document.getElementById("answerv");
  var vGain = Math.pow(10,val1/20);
  ansD.value = vGain.toPrecision(3);
}
</script>

<input type="text" id="valuedBv" name="dB" value="3" style="text-align:right;"> $\text{dB}$   
<input type="button" style="padding: 5px; background-color: #e8e8e8; border-radius: 10px;" name="Submit" value=" to ratio " onclick="dB2voltageGain()"> $= 10^{\text{dB}/20}$  
<input type="text" id="answerv" name="answerv" value="" style="text-align:right;"> $v_1/v_0$

## dB charts

My intuition for the decibel scale isn't so good. I have a better feel for power and voltage ratios. When I'm working with decibels I print out a dB chart and pin it up near my work area. You can generate your own dB chart in Excel. Here are Excel formulas for converting to and from dB. 

```
=10*LOG10(Z3)       convert power ratio in cell Z3 to dB
=POWER(10,(B3/10))  convert dB in cell B3 to power ratio

=20*LOG10(Y3)       convert voltage ratio in cell Y3 to dB
=POWER(10,(B3/20))  convert dB in cell B3 to voltage ratio
```

Here's a sample of my [Excel spreadsheet]({{ site.baseurl }}{% link assets/decibel-chart.xlsx %}) that uses these formulas.

![Sample decibel chart]({{ site.baseurl }}{% link i/decibel-chart.png %}){: height="600px" :}{: .centered :}

## Summary
{:.no_toc}

There are two definitions of the decibel, depending on if you are comparing power terms or root-power terms (voltage or current).

Gain in $\text{dB} = 10\,\log{\dfrac{p_1}{p_0}} \,\text{dB}$ for comparing power.

Gain in $\text{dB} = 20\,\log{\dfrac{v_1}{v_0}} \,\text{dB}$ for comparing root-power terms.

By having two definitions for $\text{dB}$ we directly compare power ratios and voltage ratios when they are expressed in decibels. 

To use the decibel you need to understand a few things,

* The decibel a logarithmic measurement. In particular $\log_{10}$.
* The decibel is a ratio. A ratio has a top and a bottom term. You have to know both.
* The terms in the ratio can be either,
    - two power terms
    - two *root-power* terms (like two voltages or two currents)
* The two terms have to have the same units---you don't mix units.
* The decibel is dimensionless. 
