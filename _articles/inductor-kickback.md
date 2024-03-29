---
layout: article
title:  "Inductor kickback"
author: Willy McAllister
comments: true
---

The inductor is one of the [ideal circuit elements]({{ site.baseurl }}{% link _articles/ideal-elements-and-sources.md %}#inductor). We will look at an inductor connected to a switch. We get help from the two forms of the inductor's $i$-$v$ equation. 

![Inductor kickback circuit]({{ site.baseurl }}{% link i/inductor_kickback0.svg %}){: .centered :}

Written by Willy McAllister.

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

### Where we're headed 
{:.no_toc}

An inductor connected to a switch generates high uncontrolled voltages. We protect nearby components from damaging high voltage by putting a diode in parallel with the inductor. 

---

## Inductor and a switch

We analyze this circuit using both the derivative and integral form of the inductor equation,

![Inductor kickback circuit with labels]({{ site.baseurl }}{% link i/inductor_kickback2.svg %}){: .centered :}

The circuit is a series connection of a $3\,\text V$ voltage source, a $10\,\text{mH}$ inductor, and a push-button switch $(\text{pb})$. The reference node (ground) is the negative terminal of the voltage source. The voltage across the inductor is $v_\text L$, and the voltage across the switch is $v_\text{pb}$. 

We press the pushbutton at $t = 0$ to complete the circuit.

Let's figure out the current $i$ through the inductor. We look closely at each little moment in the life of the circuit. This may seem super detailed---that's what it takes to fully understand what happens.

### Before the switch is pressed
{:.no_toc}

Before the switch is pressed the circuit is open. We know the current is zero, 

$i(t < 0) = 0$

The current is constant, which means the rate of change of current is also zero,

$di/dt = 0$ 

We find the voltage across the inductor with the derivative form of the inductor $i$-$v$ equation,

$v_\text L = \text L \,\dfrac{di}{dt}$

$v_\text L = \text L \cdot 0 = 0\,\text V$

We have $0$ volts across the inductor. That means there must be $3$ volts across the terminals of the open switch, 

$v_{\text{PB}} = 3\,\text V$ 

### Press the switch
{:.no_toc}

We press the pushbutton switch at $t=0$, 

![Inductor kickback circuit with switch closed]({{ site.baseurl }}{% link i/inductor_kickback3.svg %}){: .centered :}

Voltage $v_{\text{pb}}$ instantly goes from $3\,\text V$ to $0\,\text V$. The inductor now has $3\,\text V$ across it, so current begins to flow. What does the current look like? We use the integral form of the inductor $i$-$v$ equation. An inductor's current is the integral of its voltage,

$\displaystyle i(t) = \dfrac1{\text L}\, \int_{\,0}^{\,t} v(x)\,dx + i(0)$

The inductor current is a function of the variable $t$ where $t$ is the total amount of time the switch is held down. Notice $t$ appears as the upper limit of the definite integral. 

{% capture summary %}$v(x)\, dx$ inside the integral looks odd{% endcapture %}  
{% capture details %}  
This integral is usually written as $\displaystyle \int v(t)\,dt$. However, I want to use $t$ as the total time the switch is held down. Variable $x$ plays the role of instantaneous time inside the integral. $x$ is called a *dummy variable of integration*. The reason we need $x$---or any other variable name besides $t$---is because we want variable $t$ to be the upper limit. Watch how $x$ disappears as we evaluate the definite integral. We end up with current as a function of total button-push time, $i(t)$.

If this notation is puzzling refer to how this was done for a [voltage pulse on a capacitor]({{ site.baseurl }}{% link _articles/capacitor-iv-equation-in-action.md %}#during-the-pulse).
{% endcapture %}{% include details.html %}

Let's look at the moment the switch closes. The existing current in the inductor is $i(0) = 0$ and the button has been held down for $t = 0$ time. The instant right after the button is pushed the current is, 

$\displaystyle i(0) = \dfrac1{\text L}\, \int_{\,0}^{\,t=0} v(x)\,dx + 0 = 0$

That tells us the inductor current starts at $0$.

We keep holding the pushbutton down. As long as the switch remains closed $t$ starts getting bigger and the inductor starts integrating (adding up) its voltage. The current starts rising and keeps going up and up, 

$\displaystyle i(t) = \dfrac1{\text L}\, \int_{\,0}^{\,t} v(x)\,dx$

Let's fill in the real values for $\text L$ and $v(x)$. $\text L$ is $10\,\text{mH}$ and $v(x)$ is a constant $3\,\text V$, (remember, $x$ is our dummy variable of integration, representing instantaneous time),

$\displaystyle i(t) = \dfrac1{10\,\text{mH}}\, \int_{\,0}^{\,t} 3\,dx = \dfrac{3\,\text V}{10\,\text{mH}}\, \int_{\,0}^{\,t} dx$

The integral of $dx$ evaluates to just $x$. We evaluate $x$ between the limits $0$ and $t$,

$\displaystyle i(t) = \dfrac{3\text V}{10\,\text{mH}}\,\, x\,\bigg  \|_{\,0}^{\,t}$

$\displaystyle i(t) = \dfrac{3\text V}{10\,\text{mH}}\,\, [ \,t - 0\,]$

$i(t) = \dfrac{3\text V}{10\,\text{mH}}\,\,t$

This is the equation of a line while the switch is pressed. The slope of the line is,

 $\dfrac{3\,\text V}{0.010\,\text H} = 300\,\text{amps/second}$

As long as the switch is held down the current in the inductor increases $300$ amperes every second. That current comes from the ideal voltage source.

![Inductor current ramp]({{ site.baseurl }}{% link i/inductor_in_action_current_ramp.svg %}){: .centered :}

As the current ramps up energy is being stored in the inductor's magnetic field. (The energy does not dissipate as heat like it does with a resistor.)

Here's a [simulation model](https://spinningnumbers.org/circuit-sandbox/index.html?value=%5B%5B%22w%22%2C%5B224%2C120%2C224%2C136%5D%5D%2C%5B%22w%22%2C%5B104%2C120%2C104%2C136%5D%5D%2C%5B%22w%22%2C%5B224%2C56%2C224%2C72%5D%5D%2C%5B%22w%22%2C%5B176%2C56%2C224%2C56%5D%5D%2C%5B%22w%22%2C%5B104%2C72%2C104%2C56%5D%5D%2C%5B%22w%22%2C%5B160%2C56%2C104%2C56%5D%5D%2C%5B%22w%22%2C%5B224%2C136%2C168%2C136%5D%5D%2C%5B%22w%22%2C%5B104%2C136%2C168%2C136%5D%5D%2C%5B%22g%22%2C%5B168%2C136%2C0%5D%2C%7B%22_json_%22%3A8%7D%2C%5B%220%22%5D%5D%2C%5B%22a%22%2C%5B160%2C56%2C0%5D%2C%7B%22color%22%3A%22magenta%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A9%7D%2C%5B%222%22%2C%221%22%5D%5D%2C%5B%22v%22%2C%5B104%2C72%2C0%5D%2C%7B%22name%22%3A%22%22%2C%22value%22%3A%22step(0%2C3%2C0%2C1n)%22%2C%22_json_%22%3A10%7D%2C%5B%222%22%2C%220%22%5D%5D%2C%5B%22l%22%2C%5B224%2C72%2C0%5D%2C%7B%22name%22%3A%22L%22%2C%22l%22%3A%2210m%22%2C%22_json_%22%3A11%7D%2C%5B%221%22%2C%220%22%5D%5D%2C%5B%22view%22%2C55.6424%2C41.70688%2C3.814697265625%2C%2250%22%2C%2210%22%2C%221G%22%2Cnull%2C%22100%22%2C%223%22%2C%221000%22%5D%5D){:target="_blank"} that does the same thing. Click on **TRAN** to perform a transient analysis. The pushbutton switch is modeled as part of the voltage source. The source steps from $0$ to $3\,\text V$ at $t = 0$.

As a specific example, 

**Find the current at $t=0.002$ seconds $(2\,\text{ms})$ after the switch is pushed.**  
Use the equation we derived for $i(t)$. 

{% capture summary %}show answer{% endcapture %}  
{% capture details %}
$i(t) = 300\,t$

The current will rise to $i(0.002) = 300\cdot 0.002 = 0.6\,\text{amps} = 600 \,\text{mA}$. 

In the simulation model go back and change the transient time from $3$ seconds to $0.002$ seconds and perform another **TRAN** simulation.   
{% endcapture %}{% include details.html %}

Now we know what happens when the switch is pushed. We should probably let it go at some point. 

### Release the switch
{:.no_toc}

Let's take our finger off the button at $t=2\,\text{ms}$. The current has reached $600\,\text{mA}$. What happens to the voltage across the inductor? Use the derivative form of the inductor equation,

$v_\text L = \text L\,\dfrac{di}{dt}$

When we release the pushbutton the switch contacts physically separate and we expect the current to instantly change from $600 \,\text{mA}$ to $0\,\text{mA}$ in $0$ time. What does the inductor $i$-$v$ equation say about that? 

$di = -600\,\text{mA}$ and $dt = 0$.

$v_\text L = \text L\,\dfrac{-600\,\text{mA}}{0}= -\infty !$

The inductor equation predicts $v_\text L$ will be infinite! Can that happen? 

In ideal mathematics world, yes---you just write down infinity as the answer. In the real world, no, it cannot. Instantly changing the current in an inductor requires infinite voltage, which isn't available in real life. Real-world inductors do something else.

This refusal to change instantly comes from the magnetic energy stored in the field surrounding the inductor. It leads us to a basic property of inductors,

*The current in an inductor does not (will not) change instantaneously.*

<details>
<summary>inductance is like mass</summary>
<p>Inductance in an electrical system is similar to mass or inertia in a mechanical system. The mass of a car tends to resist changes in velocity. A car cannot stop or start in $0$ time. An inductor is the electrical version of Newton's First Law of Motion (also called the Law of Inertia): A body in motion tends to stay in motion.</p>
</details>

We have a puzzle on our hands. We opened the switch while there was current flowing in the inductor. When the switch opens, what happens to the inductor current?

### What happens in an ideal circuit? 
{:.no_toc}

What a mess. With ideal models we have all the current and voltage we want. But in this situation something breaks the ideal models. We created an impossible fight: The switch says the current has to be zero, and the inductor says the current has to be whatever it was before the switch opened. Zero and not zero at the same time? Huh? Not solvable. We've hit the extremes of our ideal models. It all stems from the divide-by-zero operation. My head hurts.

### What happens in a real-life circuit? 
{:.no_toc}

When the switch opens at $t=2\,\text{ms}$, we expect the current to change from $600\,\text{mA}$ to $0\,\text{mA}$ in $0$ time. Let's not be greedy. Let's say it's okay for the switch to take $1\,\mu\text{sec}$ to go from closed to open. Does that help? The voltage we see across the inductor is,

$v_{\text L} = \text L \,\dfrac{di}{dt}$

$v_\text L = 10\, \text{mH} \cdot\dfrac{600\,\text{mA}}{1\,\mu\text{sec}} = 10\times 10^{-3}\cdot \dfrac{-600\times 10^{-3}}{10^{-6}}$

$v_\text L = -6{,}000 \,\text{volts} \,!$ 

The inductor voltage is still huge. The $+$ terminal of the inductor is fixed at $3$ volts above ground. The $-$ sign on $v_{\text L}$ means the negative terminal of the inductor is $6000$ volts *above* the positive terminal. 

That makes $v_{\text{pb}} = 3 + 6000 = +6003\,\text{volts}$. 

![Inductor kickback high voltage appears]({{ site.baseurl }}{% link i/inductor_kickback4.svg %}){: .centered :}

This is called *inductor kickback* or *flyback*. Does this really happen? Yes it does.

What actually happens is when the switch opens a spark arcs across the air gap between the switch contacts. The energy in the magnetic field is released in a short bright burst of light. 

![Close-up of switch contacts]({{ site.baseurl }}{% link i/inductor_kickback5.svg %}){: .centered :}

In fact, if you want to generate a spark, this is one of the best ways to do it. This is how a spark plug in a car works. It also happens every time you flip off a mechanical light switch in your house.

{% capture summary %}air breakdown{% endcapture %}  
{% capture details %}  
Although air is normally a very good insulator, high voltage can can cause air to break down. When the electric field (volts per meter) is about $3000$ volts across an air gap of $1$ millimeter, air becomes partially conductive. If the voltage is higher, air breaks down completely and becomes conductive. The electric field is so strong it rips electrons away from oxygen and nitrogen molecules and an electrical spark or arc bridges the gap.

![Spark]({{ site.baseurl }}{% link i/inductor_kickback_spark.gif %}){: .centered :}

Wikipedia [Electrical Breakdown](https://en.wikipedia.org/wiki/Electrical_breakdown)
{% endcapture %}{% include details.html %}

In a real-life version of our circuit, the spark starts at around $3000$ volts. The spark lasts as long as it takes for the inductor current to fall to zero. If you have a physically tough switch it can withstand the physical violence of the spark. But, if the switch is fragile (like a transistor used as a switch), there's a good chance the high voltage will destroy it. 

Reviewing the paradox: How can there be an inductor current at the same time as an open switch? Real life resolves the paradox this way: The inductor wins and the open switch loses. The inductor forces current to flow through a spark. The open switch is not actually open during the spark. 

Should you be afraid of inductors? You don't need to be afraid of inductors---but you should give them respect. Inductors are energy storage devices, just like capacitors and batteries. If you release the energy all at once there might be a boom!

## Give inductor current a place to flow

It is strange to think an open circuit can cause problems, but when inductors are involved it can happen. The inductor and switch is a common circuit and you have to worry about this. This section describes how to design around the high voltage spike from an inductor. 

It helps if you are familiar with how a [diode]({{ site.baseurl }}{% link _articles/diode-introduction.md %}) works. A diode conducts current in one direction but not in the opposite direction.

How do we avoid having our circuit destroyed by a high voltage generated by inductor kickback? When we design a circuit with a switched inductor, we think ahead and make sure current always has a place to flow. 

If we place a [diode]({{ site.baseurl }}{% link _articles/diode-introduction.md %}) in parallel with the inductor, it removes the voltage spike in a neat way. 

![Inductor with parallel diode]({{ site.baseurl }}{% link i/inductor_kickback6.svg %}){: .centered :}

Notice the direction the diode is facing, its forward current arrow is pointing up. Current will only flow *up* through the diode.

When the switch is closed, the diode is reverse biased and doesn't conduct.  
When the switch opens, the diode becomes forward biased and provides a path for inductor current. 

Let's go through this step by step. Start with the switch open. Then push it. Then let it go.

### Start with the switch open
{:.no_toc}

With the switch in its initial open position there is $0$ current flowing, and we have $0$ volts across the inductor (and diode). $\goldD{v_{\text{pb}}}$ is $3\,\text V$.

### Close the switch
{:.no_toc}

When the switch is closed, the current flows down through the inductor and switch, same as before when we didn't have the diode,

![Inductor with parallel diode, switch closed]({{ site.baseurl }}{% link i/inductor_kickback7.svg %}){: .centered :}

**With the switch closed, what is the voltage across the diode?** 

$v_{\text{L}} = \,$ \_\_\_\_\_\_ $\,\text V$

<details>
<summary>show answer</summary>
<p>The voltage across the diode is the same as the inductor, $v_{\text L} = 3\,\text V$.</p>
</details>

**Is the diode forward biased or reverse biased?** 

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
The  diode is reverse biased because the cathode is at a higher voltage than the anode.

![Diode with cathode at the top]({{ site.baseurl }}{% link i/inductor_kickback8.svg %}){: .centered :}  
{% endcapture %}{% include details.html %}

**What is the approximate diode current?** 

$i_{\text{diode}}\approx$ \_\_\_\_\_\_$\,\text A$

<details>
<summary>show answer</summary>
<p>When the diode is reverse biased its current is very close to $0$. Since there's no current in the diode, it's as if it isn't even there.</p>
</details> 

### Release the switch
{:.no_toc}

Now we release the push-button switch and the contacts open up. Before, when there was no diode, the open switch caused $v_{\text{pb}}$ to spike up to a huge positive voltage. Now---with the diode---something better happens.

The switch still attempts to create a big $di/dt$ when it opens. Just like when there was no diode, $v_{\text{pb}}$ starts at $0\,\text V$ and starts to kick up to a big positive value. But this time,

**What happens when $v_{\text{pb}}$ rises from $0$ to $3.7$ volts?**  
(Choose all that apply.)

* The diode becomes forward biased.
* The diode starts to conduct.

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
Both. The top of the diode is fixed at $3\,\text V$. When the bottom of the diode gets up to $3.7\,\text V$ it becomes forward biased---the anode is $0.7\text V$ higher than the cathode.

![parallel diode starts to conduct]({{ site.baseurl }}{% link i/inductor_kickback9a.svg %}){: .centered :} 

This is one of those weird cases where a voltage drawn lower on the page is higher than a voltage at the top of the page. 

When the voltage at the anode gets up to the supply voltage---$3$ volts---plus an additional $\sim0.7$ volts *the diode becomes forward biased and it starts to conduct!*
{% endcapture %}{% include details.html %}

The forward biased diode provides a path for the inductor current. When the diode turns on the inductor current turns right and flows *up* through the diode. When it gets through the diode the current turns left and flows back down through the inductor, going in a circle. 

![parallel diode prevents kickback]({{ site.baseurl }}{% link i/inductor_kickback1.svg %}){: .centered :}

The diode provides a path for the inductor current to flow when the switch is opened.

What happens to the voltage? The diode voltage "clamps" $v_{\text{pb}}$, preventing it from getting much higher than the power supply plus $0.7$ volts. $v_{\text{pb}}$ never gets a chance to shoot up to a dangerous high level. This clamping action provides a path for current and prevents the dreaded arc. Everybody is happy. 

The current circles around through the diode and inductor until the real-world resistance of the inductor and diode dissipates the inductor's stored energy as heat. The diode prevents a major inductive voltage spike and protects the surrounding components.

## Simulation models

This kickback effect really happens. Take some time to explore this [simulation model](https://spinningnumbers.org/circuit-sandbox/index.html?value=%5B%5B%22w%22%2C%5B80%2C200%2C232%2C200%5D%5D%2C%5B%22w%22%2C%5B232%2C104%2C232%2C64%5D%5D%2C%5B%22w%22%2C%5B320%2C16%2C232%2C16%5D%5D%2C%5B%22g%22%2C%5B80%2C200%2C0%5D%2C%7B%22_json_%22%3A3%7D%2C%5B%220%22%5D%5D%2C%5B%22v%22%2C%5B232%2C152%2C4%5D%2C%7B%22name%22%3A%22Vpb%22%2C%22value%22%3A%22pulse(0%2C3%2C1u%2C1n%2C1n%2C20u%2C200u)%22%2C%22_json_%22%3A4%7D%2C%5B%22VPB%22%2C%220%22%5D%5D%2C%5B%22n%22%2C%5B280%2C128%2C0%5D%2C%7B%22name%22%3A%22Qpb%22%2C%22WL%22%3A%2220000%22%2C%22Vt%22%3A%220.5%22%2C%22lambda%22%3A%220.05%22%2C%22_json_%22%3A5%7D%2C%5B%22v_pb%22%2C%22VPB%22%2C%220%22%5D%5D%2C%5B%22d%22%2C%5B320%2C64%2C2%5D%2C%7B%22name%22%3A%22%22%2C%22area%22%3A%221%22%2C%22is%22%3A%221.0e-14%22%2C%22Vt%22%3A%220.026%22%2C%22type%22%3A%22normal%22%2C%22_json_%22%3A6%7D%2C%5B%22v_pb%22%2C%221%22%5D%5D%2C%5B%22l%22%2C%5B232%2C16%2C0%5D%2C%7B%22name%22%3A%22%22%2C%22l%22%3A%225m%22%2C%22_json_%22%3A7%7D%2C%5B%221%22%2C%22v_pb%22%5D%5D%2C%5B%22v%22%2C%5B80%2C80%2C0%5D%2C%7B%22name%22%3A%22%22%2C%22value%22%3A%22dc(3)%22%2C%22_json_%22%3A8%7D%2C%5B%221%22%2C%220%22%5D%5D%2C%5B%22w%22%2C%5B280%2C176%2C280%2C200%5D%5D%2C%5B%22w%22%2C%5B280%2C128%2C280%2C104%5D%5D%2C%5B%22w%22%2C%5B280%2C200%2C232%2C200%5D%5D%2C%5B%22w%22%2C%5B256%2C152%2C232%2C152%5D%5D%2C%5B%22w%22%2C%5B80%2C128%2C80%2C200%5D%5D%2C%5B%22w%22%2C%5B232%2C16%2C80%2C16%5D%5D%2C%5B%22w%22%2C%5B80%2C16%2C80%2C80%5D%5D%2C%5B%22w%22%2C%5B320%2C104%2C280%2C104%5D%5D%2C%5B%22L%22%2C%5B320%2C104%2C0%5D%2C%7B%22label%22%3A%22v_pb%22%2C%22_json_%22%3A17%7D%2C%5B%22v_pb%22%5D%5D%2C%5B%22L%22%2C%5B232%2C152%2C2%5D%2C%7B%22label%22%3A%22VPB%22%2C%22_json_%22%3A18%7D%2C%5B%22VPB%22%5D%5D%2C%5B%22s%22%2C%5B232%2C152%2C0%5D%2C%7B%22color%22%3A%22cyan%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A19%7D%2C%5B%22VPB%22%5D%5D%2C%5B%22w%22%2C%5B232%2C104%2C280%2C104%5D%5D%2C%5B%22w%22%2C%5B320%2C104%2C320%2C64%5D%5D%2C%5B%22view%22%2C-54%2C-33.2%2C1.5625%2C%2250%22%2C%2210%22%2C%221G%22%2Cnull%2C%22100%22%2C%22500u%22%2C%221000%22%5D%5D){:target="_blank"} with an inductor and diode. The N-type MOSFET transistor QPB and voltage source VPB play the role of push-button switch.

Try these experiments, 

1. Click on **TRAN** to see how the switch works. 
    * Notice the on/off pattern of the VPB voltage source. This controls the NMOS switch.  
    When VPB is low the switch is open. When VPB is high the switch is closed. 
2. Add a voltage probe to node $v_{\text{pb}}$. Set its color to orange. Run **TRAN** again.
    * $v_\text{pb}$ is the voltage at the bottom of the diode.
3. Delete the cyan probe on VPB to get a clearer view of $v_{\text{pb}}$.
    * What is $v_\text{pb}$ when the switch is closed?  
    * What is the voltage reached by $v_\text{pb}$ when the switch opens?
    * Notice how the voltage stays flat for a while and then returns to $3\,\text V$. During this time current is circulating through the inductor and diode as the inductor energy runs out.
4. Add a current probe (the arrow just below the voltage probe in the tool bin). Rotate the probe so it's pointing up and insert it below the diode. Run **TRAN** again to see the current waveform. Here's a [simulation model with all three probes](https://spinningnumbers.org/circuit-sandbox/index.html?value=%5B%5B%22w%22%2C%5B320%2C112%2C280%2C112%5D%5D%2C%5B%22w%22%2C%5B232%2C112%2C280%2C112%5D%5D%2C%5B%22w%22%2C%5B280%2C128%2C280%2C112%5D%5D%2C%5B%22w%22%2C%5B320%2C88%2C320%2C112%5D%5D%2C%5B%22r%22%2C%5B232%2C64%2C0%5D%2C%7B%22name%22%3A%22%22%2C%22r%22%3A%221%22%2C%22_json_%22%3A4%7D%2C%5B%223%22%2C%22v_pb%22%5D%5D%2C%5B%22w%22%2C%5B320%2C16%2C232%2C16%5D%5D%2C%5B%22g%22%2C%5B128%2C200%2C0%5D%2C%7B%22_json_%22%3A6%7D%2C%5B%220%22%5D%5D%2C%5B%22v%22%2C%5B232%2C152%2C4%5D%2C%7B%22name%22%3A%22VPB%22%2C%22value%22%3A%22pulse(0%2C3%2C1u%2C1n%2C1n%2C20u%2C200u)%22%2C%22_json_%22%3A7%7D%2C%5B%22VPB%22%2C%220%22%5D%5D%2C%5B%22n%22%2C%5B280%2C128%2C0%5D%2C%7B%22name%22%3A%22QPB%22%2C%22WL%22%3A%2220000%22%2C%22Vt%22%3A%220.5%22%2C%22lambda%22%3A%220.05%22%2C%22_json_%22%3A8%7D%2C%5B%22v_pb%22%2C%22VPB%22%2C%220%22%5D%5D%2C%5B%22d%22%2C%5B320%2C64%2C2%5D%2C%7B%22name%22%3A%22%22%2C%22area%22%3A%221%22%2C%22is%22%3A%221.0e-14%22%2C%22Vt%22%3A%220.026%22%2C%22type%22%3A%22normal%22%2C%22_json_%22%3A9%7D%2C%5B%221%22%2C%222%22%5D%5D%2C%5B%22l%22%2C%5B232%2C16%2C0%5D%2C%7B%22name%22%3A%22%22%2C%22l%22%3A%225m%22%2C%22_json_%22%3A10%7D%2C%5B%222%22%2C%223%22%5D%5D%2C%5B%22v%22%2C%5B80%2C80%2C0%5D%2C%7B%22name%22%3A%22%22%2C%22value%22%3A%22dc(3)%22%2C%22_json_%22%3A11%7D%2C%5B%222%22%2C%220%22%5D%5D%2C%5B%22w%22%2C%5B280%2C176%2C280%2C200%5D%5D%2C%5B%22w%22%2C%5B280%2C200%2C232%2C200%5D%5D%2C%5B%22w%22%2C%5B256%2C152%2C232%2C152%5D%5D%2C%5B%22w%22%2C%5B232%2C200%2C128%2C200%5D%5D%2C%5B%22w%22%2C%5B80%2C128%2C80%2C200%5D%5D%2C%5B%22w%22%2C%5B128%2C200%2C80%2C200%5D%5D%2C%5B%22w%22%2C%5B232%2C16%2C80%2C16%5D%5D%2C%5B%22w%22%2C%5B80%2C16%2C80%2C80%5D%5D%2C%5B%22s%22%2C%5B280%2C112%2C0%5D%2C%7B%22color%22%3A%22orange%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A20%7D%2C%5B%22v_pb%22%5D%5D%2C%5B%22L%22%2C%5B320%2C112%2C0%5D%2C%7B%22label%22%3A%22v_pb%22%2C%22_json_%22%3A21%7D%2C%5B%22v_pb%22%5D%5D%2C%5B%22L%22%2C%5B232%2C152%2C2%5D%2C%7B%22label%22%3A%22VPB%22%2C%22_json_%22%3A22%7D%2C%5B%22VPB%22%5D%5D%2C%5B%22s%22%2C%5B232%2C152%2C0%5D%2C%7B%22color%22%3A%22cyan%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A23%7D%2C%5B%22VPB%22%5D%5D%2C%5B%22a%22%2C%5B320%2C88%2C3%5D%2C%7B%22color%22%3A%22magenta%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A24%7D%2C%5B%22v_pb%22%2C%221%22%5D%5D%2C%5B%22w%22%2C%5B320%2C64%2C320%2C72%5D%5D%2C%5B%22view%22%2C-54%2C-33.2%2C1.5625%2C%2250%22%2C%2210%22%2C%221G%22%2Cnull%2C%22100%22%2C%22500u%22%2C%221000%22%5D%5D){:target="_blank"}.
5. The three-probe simulation model includes a resistor in series with the inductor. Mess with its value and see how it changes the time it takes for the current to expend all the stored energy. 
6. Here is a [simulation model without the diode](https://spinningnumbers.org/circuit-sandbox/index.html?value=%5B%5B%22w%22%2C%5B280%2C128%2C280%2C120%5D%5D%2C%5B%22w%22%2C%5B280%2C112%2C280%2C120%5D%5D%2C%5B%22w%22%2C%5B304%2C120%2C280%2C120%5D%5D%2C%5B%22w%22%2C%5B80%2C16%2C280%2C16%5D%5D%2C%5B%22r%22%2C%5B280%2C64%2C0%5D%2C%7B%22r%22%3A%221%22%2C%22_json_%22%3A4%7D%2C%5B%221%22%2C%22v_pb%22%5D%5D%2C%5B%22s%22%2C%5B304%2C120%2C0%5D%2C%7B%22color%22%3A%22orange%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A5%7D%2C%5B%22v_pb%22%5D%5D%2C%5B%22L%22%2C%5B232%2C152%2C2%5D%2C%7B%22label%22%3A%22VPB%22%2C%22_json_%22%3A6%7D%2C%5B%22VPB%22%5D%5D%2C%5B%22L%22%2C%5B304%2C120%2C0%5D%2C%7B%22label%22%3A%22v_pb%22%2C%22_json_%22%3A7%7D%2C%5B%22v_pb%22%5D%5D%2C%5B%22w%22%2C%5B80%2C16%2C80%2C80%5D%5D%2C%5B%22w%22%2C%5B80%2C128%2C80%2C200%5D%5D%2C%5B%22w%22%2C%5B256%2C152%2C232%2C152%5D%5D%2C%5B%22w%22%2C%5B280%2C200%2C232%2C200%5D%5D%2C%5B%22w%22%2C%5B280%2C176%2C280%2C200%5D%5D%2C%5B%22v%22%2C%5B80%2C80%2C0%5D%2C%7B%22name%22%3A%22%22%2C%22value%22%3A%22dc(3)%22%2C%22_json_%22%3A13%7D%2C%5B%222%22%2C%220%22%5D%5D%2C%5B%22l%22%2C%5B280%2C16%2C0%5D%2C%7B%22name%22%3A%22%22%2C%22l%22%3A%225m%22%2C%22_json_%22%3A14%7D%2C%5B%222%22%2C%221%22%5D%5D%2C%5B%22n%22%2C%5B280%2C128%2C0%5D%2C%7B%22name%22%3A%22Qpb%22%2C%22WL%22%3A%2220000%22%2C%22Vt%22%3A%220.5%22%2C%22lambda%22%3A%220.05%22%2C%22_json_%22%3A15%7D%2C%5B%22v_pb%22%2C%22VPB%22%2C%220%22%5D%5D%2C%5B%22v%22%2C%5B232%2C152%2C4%5D%2C%7B%22name%22%3A%22Vpb%22%2C%22value%22%3A%22pulse(0%2C3%2C1u%2C1n%2C1n%2C20u%2C200u)%22%2C%22_json_%22%3A16%7D%2C%5B%22VPB%22%2C%220%22%5D%5D%2C%5B%22g%22%2C%5B80%2C200%2C0%5D%2C%7B%22_json_%22%3A17%7D%2C%5B%220%22%5D%5D%2C%5B%22w%22%2C%5B80%2C200%2C232%2C200%5D%5D%2C%5B%22view%22%2C-54%2C-33.2%2C1.5625%2C%2250%22%2C%2210%22%2C%221G%22%2Cnull%2C%22100%22%2C%22200u%22%2C%221000%22%5D%5D){:target="_blank"}. Run a **TRAN** and be amazed by the peak voltage generated by the inductor. This is a challenging circuit for the simulator---it may take a good portion of a minute to run on a laptop. 

## Summary
{:.no_toc}

The current in an inductor does not change instantaneously.

Be careful making circuits with an inductor. A sudden changed in current, like throwing a switch open, means the derivative of current $di/dt$ can become very large. The inductor equation tells us there can be a large kickback voltage generated across the inductor. 

One way to deal with potentially destructive inductor voltage is to design an alternate path for the current. We showed how to add a clamping diode to provide a current path and limit the inductor voltage to an acceptable value.
