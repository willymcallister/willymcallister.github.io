---
layout: article
title:  Circuit sandbox
author: Willy McAllister
comments: true
---

A simulator for experimenting with circuits.

Run Circuit sandbox [in English](http://spinningnumbers.org/circuit-sandbox/index.html) on a laptop screen, or with a smaller screen for [mobile](http://spinningnumbers.org/circuit-sandbox/index-mobile.html).

Ejecutar [Circuit sandbox](http://spinningnumbers.org/circuit-sandbox/index-es.html) en español.

>Want to help translate Circuit Sandbox into other languages? [It’s easy!](#translation)

----

#### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

---- 

## Playing in the sandbox

To create a circuit, drag components from the parts bin on the right, onto the schematic diagram.

![Circuit sandbox screenshot]({{ site.baseurl }}{% link i/42screenshot.png %})

Sample output: A *transient* analysis is a plot of voltage vs. time.

![Transient analysis screenshot]({{ site.baseurl }}{% link i/42transient_analysis.png %})


## Getting started

Drag components from the parts bin onto the main screen.

Add wires by dragging between components connection points (small circles).

Tap on the Rotate R&#x2935;  icon or type  **"r"** on the keyboard to rotate a component.

Tap on $\large \times$ or type BACKSPACE to delete a component.

Double-tap on a component to change its properties, like resistance value.

Add a ground symbol (triangle shape at the top of the parts bin).

Add voltage or current probes to the nodes you want to plot.

Select DC, AC, or TRAN from the menu to simulate the circuit.

If you have a touch device (tablet or smart phone):

* One finger selects components or drags a selection rectangle 
* Two fingers pan the schematic window

<details>
<summary> How to build the circuit shown above </summary>

<p>To create the RC circuit shown above, follow these steps starting from a blank schematic.</p>

<ul>
<li> Add components (a voltage source, resistor, and capacitor). Click on a component in the parts bin on the right, then click on the schematic. Or, you can mouse down on a component in the bin and drag it to the schematic.</li>
<li> Select the resistor by clicking on it. It will turn green. While it is selected, hit the **"r"** key on the keyboard to make it rotate to horizontal. You can also click on the R&#x2935;  icon. Rotate several times to see what happens.</li>
<li> Position components on the page by dragging them around.</li>
<li> Add wires by dragging between the connection points on the components. If you make a mistake, hit the backspace/delete key on your keyboard to delete whatever is selected, or click on the $\large \times$ icon.</li>
<li> Specify a ground node by dragging the ground symbol from the parts bin (the triangle with a stick) and connect it to the bottom of the voltage source.</li>
<li> Adjust the component properties. Double-click on the voltage source and change its type to "step". Give it a name if you want. In the same way, change the resistor value to $1$k, and the capacitor value to $1$u. The k and u suffixes are short for $10^{+3}$ and $10^{-6}$.</li>
<li> Add a voltage probe to the top node of the capacitor. (The thing in the parts bin that looks like a voltmeter probe.) This is the voltage we will plot.</li>
<li> Select an analysis to perform. For this example, let's do a transient analysis. Click TRAN in the menu. Set the stop time to $10$m. The m stands for $10^{-3}$ so we will simulate for $10$ milliseconds.</li>
<li> Click OK. The simulation is performed and a plot should appear.</li>
</ul>

<p>Here is a complete RC circuit schematic. Copy and paste this entire URL into a browser. </p>

<div class="highlighter-rouge">
<pre class="highlight">
<code>http://spinningnumbers.org/circuit-sandbox/?value=[["v",[152,80,0],{"name":"vin","value":"step(0,1,0,1n)","_json_":0},["2","0"]],["r",[232,64,1],{"name":"R1","r":"1k","_json_":1},["1","2"]],["c",[264,80,0],{"name":"C1","c":"1u","_json_":2},["1","0"]],["w",[152,80,152,64]],["w",[152,64,184,64]],["w",[232,64,264,64]],["w",[264,64,264,80]],["g",[208,128,0],{"_json_":7},["0"]],["w",[152,128,208,128]],["w",[264,128,208,128]],["s",[264,64,0],{"color":"cyan","offset":"0","_json_":10},["1"]],["view",110.6424,32.20688,3.814697265625,"50","10","1G",null,"100","10m","1000"]]</code>
</pre>
</div>
</details>

## Actions 

**Add a component**: Tap on a part in the parts bin, then tap on the schematic to add.

**Add a wire**: Wires start at connection points (open circles). Touch on a connection to start a wire, drag, and release.

**Select**: Drag a rectangle to select components. Shift-click to include another component (desktop only).

**Move**: Touch and drag to a new location.

**Delete**: Tap to select, then tap the $\large \times$ icon or hit BACKSPACE on the keyboard.

**Rotate/Reflect**: Tap to select, then tap on the Rotate icon or type the letter "**r**" to rotate 90. Repeat for more rotations and reflections (8 total).

**Properties**: Double-tap on a component to change its properties like resistance or voltage.

**Numeric suffixes**: Numbers may be entered using engineering notation:

    T    10^12          m   10^-3 
    G    10^9           u   10^-6 
    M    10^6           n   10^-9 
    k    10^3           p   10^-12
                        f   10^-15 

example: $1000$ can be entered as $1\text k$

## On-screen controls 

|:-------------|:----------------------------------------------------------:|
| Scroll/Pan   | ![Scroll/pan]({{ site.baseurl }}{% link i/42scroll_controls.png %}){:height="40px"}| 
| Zoom         | ![Zoom]({{ site.baseurl }}{% link i/42zoom_controls.png %}){:height="80px"}  |
| Rotate       | ![Rotate]({{ site.baseurl }}{% link i/42rotate_control.png %}){:height="40px"} | 
| Delete       | ![Delete]({{ site.baseurl }}{% link i/42delete_control.png %}){:height="40px"} |

## Menu

**Help**: Display the Actions information shown above. 

**Grid**: Toggle the background grid on and off.

**Open netlist**: Open a saved netlist.

**Shared link**: Displays a link you can copy for sharing your circuit with others.

**Save netlist**: Save the current netlist. See System information below for how this works on different platforms.

**Cut/Copy/Paste** The usual edit functions.  

> Mac shortcuts: &#8984;-X, &#8984;-C, &#8984;-V  
> PC shortcuts: ctl-X, ctl-C, ctl-V

**Delete**: Delete the selected components.

**DC**:  Find the DC voltages and currents, also called the *operating point*.

**AC**: Sweep the AC frequency, plot voltage or current vs. frequency.

**TRAN**: Transient response. Find the time response, plot voltage or current vs. time.

## Device models

The simulator has simple models for semiconductor devices and an operational amplifier, with just a few adjustable parameters. For more sophisticated simulations, check out the other circuit simulator resources mentioned below. 

The default diode saturation current is $\text I_\text s = 1.0\times 10^{-14} \text A$. The diode's *area* parameter scales up the saturation current to $a \times \text I_\text s$. 

## System information

The circuit sandbox works best on a desktop or laptop computer where you have plenty of viewing area. You can also use it on a tablet. (It works on smart phone, too, but the experience is a bit awkward because the screen is so small.) It should work seamlessly in most modern browsers under Windows, Mac, and Linux. If you experience problems, please let me know.

### Desktop/laptop

The save function saves a circuit text file (JSON format) to the Download folder on your computer.  The open function retrieves a circuit text file from anywhere you choose in your computer's file system. If you want to keep your work, be sure to save your circuit before leaving the web page. Your circuit is never transferred from your computer to a web server.

The downloaded netlist file is named *ckt.txt*. (text file, JSON, JavaScript Object Notation).

### Tablet 

The simulator has a touch interface. On a tablet you can save *one* circuit file. When you save a circuit, it is tucked into a memory area inside your browser. When you open the saved circuit, the circuit file is retrieved from browser memory. If you want to keep your work, be sure to save before leaving the web page.

### Other mobile devices

The simulator works on a smart phone, but the display is a bit small for drawing schematics. You can pan the screen by touching down two fingers at once and dragging the window. You can save and load a single circuit file, the same as for a tablet.

## Translation

If you would like to help translate the Circuit Sandbox into other languages, that would be great! Translate about 170 terms and short phrases in [this text file](https://github.com/willymcallister/circuit-sandbox/blob/master/js/en-US.js) from English to the new language. Here is an example of the translation to [Spanish](https://github.com/willymcallister/circuit-sandbox/blob/master/js/es.js). 

If you are fluent in English and another language, especially the technical terms used in the simulator, I could really use your help. Translate the file, test it with a modified version of this [index.html](https://github.com/willymcallister/circuit-sandbox/blob/master/index.html). Modify this line: 

`<script type="text/javascript" src="js/en-US.js"></script>`  
to   
`<script type="text/javascript" src="js/YOURLANG.js"></script>` 

Then compress the file and email it to me at the address in the footer. 

The Circuit Sandbox has been translated into

* English, en-US.js
* Spanish, es.js

## The circuit sandbox was created at MIT

The Circuit Sandbox simulator was created at MIT by Professor Chris Terman in 2011, and was used by the very first massively-open-online class (MOOC), MIT 6.002x. MIT transferred Circuit Sandbox to [EdX](www.edx.org) in 2012. I made further improvements to the simulator interface while at Khan Academy in 2016 and since then.

Circuit Sandbox is *not* a version of SPICE. It is its own interpretation of a circuit simulator. It includes schematic capture and a circuit simulation engine. The simulator is 100% Javascript and does not require installation. All you have to do is click on the link and the simulator opens, ready to run.

## Other circuit simulators

The granddaddy of all circuit simulation programs is SPICE (Simulation Program with Integrated Circuit Emphasis). This program was created at the University of California, Berkeley in the 1970's. It was originally written in FORTRAN and has always been in the public domain. 

The input to SPICE is a plain-text circuit description (the SPICE netlist). SPICE is the workhorse of the electronics industry because it supports sophisticated models for semiconductor devices (diodes and many types of transistors). 

Many people have written front-end interfaces to SPICE that allow designers to create SPICE netlists by drawing schematics. The SPICE netlist is submitted to SPICE for simulation. The results are retrieved from SPICE and plotted.  Many of these packages can be found by searching the web for "circuit simulator." 

An excellent version of SPICE is available from [Linear Technology](http://www.linear.com/), a semiconductor manufacturing company in Milpitas, California. The program is called [LTspice](http://www.linear.com/designtools/software/#LTspice). LTspice runs on Windows, Macintosh, and Linux machines with Windows emulation. It is free to download and use." Note: Linear Technologies was purchased by [Analog Devices](www.analog.com) in 2017. The links to LTSpice may be changed in the future.

## Acknowledgments

© 2017-18 Willy McAllister, © 2016 Khan Academy, Inc., © 2012 EdX,  © 2011 MIT EECS

Khan Academy makes its software available under the [MIT License](https://opensource.org/licenses/MIT).  

This circuit simulator is part of the EdX Platform, licensed under the 
[GNU AFFERO GENERAL PUBLIC LICENSE](https://github.com/edx/edx-platform/blob/master/LICENSE)
Version 3, 19 November 2007. More information at [EdX licensing](https://open.edx.org/open-edx-licensing).

#### Libraries

The simulator uses two open-source libraries,  

[Download.js](http://danml.com/download.html) is licensed under the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/), attributed to "dandavis". No changes were made. Download.js allows to circuit files to be downloaded to the client computer.

[Hammer.js](http://hammerjs.github.io/) is available under the [MIT License](https://github.com/hammerjs/hammer.js/blob/master/LICENSE.md). No changes were made. Hammer.js provides touch functionality, in particular, the double-tap function for touch interfaces.

This version of the circuit sandbox simulator includes additions by Willy McAllister, EE Content Fellow at Khan Academy during 2016,

* Save/Load netlist with a sharable link
* Touch sensitivity for tablets and smart phone
* Language extensions

