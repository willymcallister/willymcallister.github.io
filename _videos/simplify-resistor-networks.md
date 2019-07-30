---
layout: video
title:  "Simplify resistor networks"
author: Willy McAllister
youtubeID: tnYQ_tQmYrM
comments: true
--- 

Here's a systematic approach to simplify a complicated resistor network by looking for series and parallel resistor patterns. 

Created by Willy McAllister.

---

[Simulation model](https://spinningnumbers.org/circuit-sandbox/index.html?value=%5B%5B%22w%22%2C%5B248%2C56%2C192%2C56%5D%5D%2C%5B%22w%22%2C%5B160%2C56%2C192%2C56%5D%5D%2C%5B%22w%22%2C%5B192%2C80%2C192%2C56%5D%5D%2C%5B%22w%22%2C%5B272%2C56%2C248%2C56%5D%5D%2C%5B%22w%22%2C%5B248%2C80%2C248%2C56%5D%5D%2C%5B%22w%22%2C%5B360%2C56%2C336%2C56%5D%5D%2C%5B%22w%22%2C%5B320%2C56%2C336%2C56%5D%5D%2C%5B%22w%22%2C%5B336%2C80%2C336%2C56%5D%5D%2C%5B%22w%22%2C%5B424%2C56%2C424%2C80%5D%5D%2C%5B%22w%22%2C%5B408%2C56%2C424%2C56%5D%5D%2C%5B%22w%22%2C%5B96%2C56%2C112%2C56%5D%5D%2C%5B%22w%22%2C%5B72%2C56%2C80%2C56%5D%5D%2C%5B%22w%22%2C%5B72%2C80%2C72%2C56%5D%5D%2C%5B%22g%22%2C%5B72%2C144%2C0%5D%2C%7B%22_json_%22%3A13%7D%2C%5B%220%22%5D%5D%2C%5B%22a%22%2C%5B80%2C56%2C0%5D%2C%7B%22color%22%3A%22magenta%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A14%7D%2C%5B%221%22%2C%222%22%5D%5D%2C%5B%22r%22%2C%5B192%2C80%2C0%5D%2C%7B%22name%22%3A%22R2%22%2C%22r%22%3A%2212%22%2C%22_json_%22%3A15%7D%2C%5B%223%22%2C%220%22%5D%5D%2C%5B%22r%22%2C%5B424%2C80%2C0%5D%2C%7B%22name%22%3A%22R7%22%2C%22r%22%3A%228%22%2C%22_json_%22%3A16%7D%2C%5B%225%22%2C%220%22%5D%5D%2C%5B%22r%22%2C%5B408%2C56%2C1%5D%2C%7B%22name%22%3A%22R6%22%2C%22r%22%3A%222%22%2C%22_json_%22%3A17%7D%2C%5B%225%22%2C%224%22%5D%5D%2C%5B%22r%22%2C%5B336%2C80%2C0%5D%2C%7B%22name%22%3A%22R5%22%2C%22r%22%3A%2210%22%2C%22_json_%22%3A18%7D%2C%5B%224%22%2C%220%22%5D%5D%2C%5B%22r%22%2C%5B320%2C56%2C1%5D%2C%7B%22name%22%3A%22R4%22%2C%22r%22%3A%221%22%2C%22_json_%22%3A19%7D%2C%5B%224%22%2C%223%22%5D%5D%2C%5B%22r%22%2C%5B248%2C80%2C0%5D%2C%7B%22name%22%3A%22R3%22%2C%22r%22%3A%224%22%2C%22_json_%22%3A20%7D%2C%5B%223%22%2C%220%22%5D%5D%2C%5B%22r%22%2C%5B160%2C56%2C1%5D%2C%7B%22name%22%3A%22R1%22%2C%22r%22%3A%221%22%2C%22_json_%22%3A21%7D%2C%5B%223%22%2C%222%22%5D%5D%2C%5B%22v%22%2C%5B72%2C80%2C0%5D%2C%7B%22name%22%3A%22V%22%2C%22value%22%3A%22dc(3)%22%2C%22_json_%22%3A22%7D%2C%5B%221%22%2C%220%22%5D%5D%2C%5B%22w%22%2C%5B72%2C128%2C72%2C144%5D%5D%2C%5B%22w%22%2C%5B424%2C144%2C424%2C128%5D%5D%2C%5B%22w%22%2C%5B336%2C128%2C336%2C144%5D%5D%2C%5B%22w%22%2C%5B424%2C144%2C336%2C144%5D%5D%2C%5B%22w%22%2C%5B248%2C128%2C248%2C144%5D%5D%2C%5B%22w%22%2C%5B336%2C144%2C248%2C144%5D%5D%2C%5B%22w%22%2C%5B192%2C128%2C192%2C144%5D%5D%2C%5B%22w%22%2C%5B72%2C144%2C192%2C144%5D%5D%2C%5B%22w%22%2C%5B248%2C144%2C192%2C144%5D%5D%2C%5B%22view%22%2C-11.5%2C-42.7%2C1.5625%2C%2250%22%2C%2210%22%2C%221G%22%2Cnull%2C%22100%22%2C%220.01%22%2C%221000%22%5D%5D)

* This circuit has the voltage source set to 3V.
* Compute the equivalent resistance, R_equiv, of the resistor network.
* Compute the current provided by the voltage source.
* Click on **DC** to run a simulation.
* Compare your answer to the simulation.

* Challenge: Build a circuit down lower on the page with a 3V source and a single R_equiv. Add a current probe (arrow). Click on **DC** to measure the current. Is it the same as the complicated circuit? It should be.

See also this article on how to [simplify resistor networks]({{ site.baseurl }}{% link _articles/simplify-resistor-networks.md %}).
