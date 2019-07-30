---
layout: video
title:  "Parallel resistors (3)"
author: Willy McAllister
youtubeID: S0AJZjt0sEg
comments: true
--- 

Special case for just two resistors in parallel,  
* When two resistors are in parallel, the equivalent resistance is the product of the two resistors divided by their sum. 

* When the two resistors have the same value, the equivalent parallel resistance is exactly half of the original resistance. 

Created by Willy McAllister.

----

[Parallel resistors simulation model](https://spinningnumbers.org/circuit-sandbox/index.html?value=%5B%5B%22w%22%2C%5B416%2C48%2C384%2C48%5D%5D%2C%5B%22w%22%2C%5B336%2C48%2C368%2C48%5D%5D%2C%5B%22a%22%2C%5B368%2C48%2C0%5D%2C%7B%22color%22%3A%22magenta%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A2%7D%2C%5B%225%22%2C%226%22%5D%5D%2C%5B%22w%22%2C%5B416%2C144%2C376%2C144%5D%5D%2C%5B%22w%22%2C%5B336%2C144%2C376%2C144%5D%5D%2C%5B%22g%22%2C%5B376%2C144%2C0%5D%2C%7B%22_json_%22%3A5%7D%2C%5B%220%22%5D%5D%2C%5B%22w%22%2C%5B416%2C144%2C416%2C120%5D%5D%2C%5B%22w%22%2C%5B336%2C120%2C336%2C144%5D%5D%2C%5B%22w%22%2C%5B416%2C48%2C416%2C72%5D%5D%2C%5B%22w%22%2C%5B336%2C72%2C336%2C48%5D%5D%2C%5B%22r%22%2C%5B416%2C72%2C0%5D%2C%7B%22name%22%3A%22Requiv%22%2C%22r%22%3A%22800%22%2C%22_json_%22%3A10%7D%2C%5B%226%22%2C%220%22%5D%5D%2C%5B%22v%22%2C%5B336%2C72%2C0%5D%2C%7B%22name%22%3A%22V2%22%2C%22value%22%3A%22dc(1)%22%2C%22_json_%22%3A11%7D%2C%5B%225%22%2C%220%22%5D%5D%2C%5B%22w%22%2C%5B200%2C48%2C168%2C48%5D%5D%2C%5B%22w%22%2C%5B112%2C48%2C152%2C48%5D%5D%2C%5B%22a%22%2C%5B152%2C48%2C0%5D%2C%7B%22color%22%3A%22magenta%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A14%7D%2C%5B%221%22%2C%224%22%5D%5D%2C%5B%22w%22%2C%5B264%2C48%2C264%2C56%5D%5D%2C%5B%22a%22%2C%5B264%2C56%2C1%5D%2C%7B%22color%22%3A%22magenta%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A16%7D%2C%5B%224%22%2C%223%22%5D%5D%2C%5B%22w%22%2C%5B200%2C48%2C200%2C56%5D%5D%2C%5B%22a%22%2C%5B200%2C56%2C1%5D%2C%7B%22color%22%3A%22magenta%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A18%7D%2C%5B%224%22%2C%222%22%5D%5D%2C%5B%22g%22%2C%5B200%2C144%2C0%5D%2C%7B%22_json_%22%3A19%7D%2C%5B%220%22%5D%5D%2C%5B%22w%22%2C%5B112%2C144%2C112%2C120%5D%5D%2C%5B%22w%22%2C%5B200%2C144%2C112%2C144%5D%5D%2C%5B%22w%22%2C%5B200%2C144%2C200%2C120%5D%5D%2C%5B%22w%22%2C%5B264%2C144%2C200%2C144%5D%5D%2C%5B%22w%22%2C%5B264%2C120%2C264%2C144%5D%5D%2C%5B%22w%22%2C%5B200%2C48%2C264%2C48%5D%5D%2C%5B%22w%22%2C%5B112%2C72%2C112%2C48%5D%5D%2C%5B%22r%22%2C%5B264%2C72%2C0%5D%2C%7B%22name%22%3A%22R2%22%2C%22r%22%3A%224k%22%2C%22_json_%22%3A27%7D%2C%5B%223%22%2C%220%22%5D%5D%2C%5B%22r%22%2C%5B200%2C72%2C0%5D%2C%7B%22name%22%3A%22R1%22%2C%22r%22%3A%221k%22%2C%22_json_%22%3A28%7D%2C%5B%222%22%2C%220%22%5D%5D%2C%5B%22v%22%2C%5B112%2C72%2C0%5D%2C%7B%22name%22%3A%22V1%22%2C%22value%22%3A%22dc(1)%22%2C%22_json_%22%3A29%7D%2C%5B%221%22%2C%220%22%5D%5D%2C%5B%22view%22%2C55.7%2C-15.76%2C1.953125%2C%2250%22%2C%2210%22%2C%221G%22%2Cnull%2C%22100%22%2C%220.01%22%2C%221000%22%5D%5D)

* Compute the equivalent parallel resistor using the formula from this video, 

$\qquad\text R_\text{equiv} = \dfrac{\text R1\,\text R2}{\text R1 + \text R2}$

* Find the current in the equivalent resistor, 

$\qquad i = \text V1/\text R_\text{equiv}$

* Click on **DC** to see what the simulator thinks. Compare your answers.

* Make the two resistors the same value.
* Compute the equivalent parallel resistor in your head. Change $\text R_\text{equiv}$ to that value.
* Compute the current in the equivalent resistor in your head.
* Click on **DC** to simulate. Compare your answers. 