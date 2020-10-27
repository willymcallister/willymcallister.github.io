---
layout: article
title:  "Impedance vs resistance"
author: Willy McAllister
comments: true
---

**What's the difference between resistance and impedance?**

Impedance and resistance are similar ideas. Both represent how a component opposes or fights against the flow of current. 

*Resistance* is a measure of voltage divided by resistance in a resistor.

*Impedance* is the generalized notion of voltage divided by current for any component. 

![Voltage and current in R, C, and L]({% link i/sign_convention_for_passives.svg %}){: .centered }

Manchester United's Wayne Rooney and Chelsea's Didier Drogba have a chat. (FA Cup Final 2007 - Photo by Neal Simpson - EMPICS/PA Images via Getty Images)
{: .caption :}

For the specific case of a resistor, the ratio of voltage to current is called *resistance* instead of impedance. For inductors and capacitors, we use the term *impedance*, but it has the same general meaning: the ratio of voltage to current.

Impedance equations look a lot like Ohm's Law for resistors. The traditional variable used for impedance is $Z$. Ohm’s Law is the first equation,

$v_\text R = i_\text R \, Z_\text R\qquad$ usually written $\qquad v = i \,\text R$

$v_\text L = i_\text L \, Z_\text L$

$v_\text C = i_\text C \, Z_\text C$

## Properties of impedance

There is a built-in assumption when talking about impedance---the current and voltage are sine waves.

### Magnitude

For a resistor the magnitude of $\text R$ is the same for any voltage, any current, and any frequency. $\|Z_\text R \| = \text R$

For inductors and capacitors it is more interesting---the magnitude of $Z$ depends on the frequency of the sine wave being applied (an extra feature a resistor does not have).

For an inductor, the magnitude of $Z_\text L$ *increases* as frequency $f$ goes up,  
$\|Z_\text L \| = 2\pi f \text L$  
An inductor has a high impedance at high frequency.

For a capacitor, the magnitude of $Z_\text C$  goes *down* as frequency $f$ goes up,  
$\| Z_\text C\| = \dfrac{1}{2\pi f \text C}$  
A capacitor has low impedance at high frequency. In fact, at a high enough frequency a capacitor is essentially a short circuit.

### Phase

The term *phase* refers to the difference in time-delay of two sine waves. For example, if you draw sine and cosine on the same plot, they don't overlap---they are *out of phase* by $90^\circ$. 

For linear components (R, L, C), if you apply a sine wave voltage, the current is also a sine wave. If you apply a sine wave current, the voltage is a sine wave. 

For resistors the voltage and current always overlap perfectly---they are *in phase*, the phase angle between $v$ and $i$ is $0^\circ$.

For inductors and capacitors the voltage and current *do not* overlap---they are *out of phase* by $90^\circ$, just like sine and cosine are out of phase. The *lead* or *lag* in phase is different for L and C. More details here: [Eli the Ice Man](https://spinningnumbers.org/v/ac-analysis-eli-ice-man.html).

### Summary 

Impedance is the general notion of the ratio of voltage to current. Resistance is the impedance of a resistor.