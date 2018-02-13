---
layout: article
title:  "LC natural response - intuition"
author: Willy McAllister
comments: true
---

UNDER CONSTRUCTION

We develop an intuition for the natural response  of the inductor-capacitor, $\\\\text\{LC\}$, circuit. \\n\\n[[
\f1 \uc0\u9731 
\f0  image 4]]\\n\\nAfter we get a good mental image of what's going on, the next article is a formal derivation of the [$\\\\underline\{\\\\text\{LC\}\}$](w/a/ee-lc-natural-response-derivation) natural response.",\
        "images": \{\},\
        "widgets": \{\
            "image 4": \{\
                "type": "image",\
                "alignment": "block",\
                "static": false,\
                "graded": true,\
                "options": \{\
                    "static": false,\
                    "title": "",\
                    "range": [\
                        [\
                            0,\
                            10\
                        ],\
                        [\
                            0,\
                            10\
                        ]\
                    ],\
                    "box": [\
                        185,\
                        150\
                    ],\
                    "backgroundImage": \{\
                        "url": "https://ka-perseus-images.s3.amazonaws.com/e11e853050cfcb3b21fb71159ee18f39f490f1f2.svg",\
                        "width": 185,\
                        "height": 150\
                    \},\
                    "labels": [],\
                    "alt": "",\
                    "caption": ""\
                \},\
                "version": \{\
                    "major": 0,\
                    "minor": 0\
                \}\
            \}\
        \}\
    \},\
    \{\
        "content": "---\\n\\n###What we're building to\\n\\nCircuits with two energy storage elements (capacitors or inductors) are called *second-order systems*. In second-order systems, the voltages and currents rock back-and-forth, or *oscillate*. This article is an intuitive description of how this happens.  \\n\\nSecond-order systems are the source of sine waves in electronic circuits. \\n\\n---",\
        "images": \{\},\
        "widgets": \{\}\
    \},\
    \{\
        "content": "## First-order systems\\n\\nUp to now we've looked at first-order circuits, [$\\\\underline\{\\\\text\{RC\}\}$](w/a/ee-rc-natural-response) and [$\\\\underline\{\\\\text\{RL\}\}$](w/a/ee-rl-natural-response), that have one energy-storage element, $\\\\text\{C\}$ or $\\\\text\{L\}$. The natural response of first-order circuits has an exponential shape that \\"slumps\\" to its final value. The energy in its storage element is dissipated by the resistor.\\n\\n[[
\f1 \uc0\u9731 
\f0  image 7]]",\
        "images": \{\},\
        "widgets": \{\
            "image 7": \{\
                "type": "image",\
                "alignment": "block",\
                "static": false,\
                "graded": true,\
                "options": \{\
                    "static": false,\
                    "title": "",\
                    "range": [\
                        [\
                            0,\
                            10\
                        ],\
                        [\
                            0,\
                            10\
                        ]\
                    ],\
                    "box": [\
                        225,\
                        225\
                    ],\
                    "backgroundImage": \{\
                        "url": "web+graphie://ka-perseus-graphie.s3.amazonaws.com/1c981e9e08057bb40b2fb59e0092bccd046a16be",\
                        "width": 225,\
                        "height": 225\
                    \},\
                    "labels": [],\
                    "alt": "",\
                    "caption": " $\\\\text\{RC\}$ natural response, described by a $1$st-order differential equation."\
                \},\
                "version": \{\
                    "major": 0,\
                    "minor": 0\
                \}\
            \}\
        \}\
    \},\
    \{\
        "content": "## Second-order systems\\n\\nNow we look at a circuit with two energy-storage elements and no resistor. Circuits with two storage elements are *second-order systems*, because they produce equations with second derivatives.\\n\\nSecond-order systems are the first systems that rock back and forth in time, or *oscillate*. The classic example of a mechanical second-order system is a clock with a pendulum. In electronics, the classic system is the $\\\\text\{LC\}$ circuit.\\n\\nWe want to find the *natural response* of this circuit. This is what a circuit does when there is no external driving force. Natural response is always an important part of  the total response of a circuit. ",\
        "images": \{\},\
        "widgets": \{\}\
    \},\
    \{\
        "content": "## Predict the natural response\\n\\n[[
\f1 \uc0\u9731 
\f0  image 13]]\\n\\nLet's say the capacitor has an initial voltage, which means it is storing some charge, $q$. We assume there is no initial current in the inductor (and therefore, no current in the capacitor, either). What is going to happen when the switch closes and we let this circuit do \\"whatever it wants\\"? We are going to reason through this by tracking what happens to the charge, $q$. \\n\\nThe amount of $q$ is set by the product of the initial voltage on the capacitor and the value of the capacitor, $q=\\\\text C\\\\,v$. $q$ does not change during the natural response. Starting out, all the charge is sitting still on the capacitor.\\n\\nNow we release the circuit by closing the switch to let it do its \\"natural\\" thing.\\n\\nThe inductor starts with $0$ current. All of a sudden it \\"sees\\" the initial voltage, $v = \\\\text V_0$. This voltage will  generate a  rising current in the inductor, and it starts storing energy in its surrounding magnetic field. \\n\\nWhere does that current (flowing charge) come from? It comes from the capacitor, of course. \\n\\nOver at the capacitor, current flows out from the top plate, goes through the inductor and goes around to the bottom capacitor plate. If $q$ is going down, then $q=\\\\text C\\\\,v$ tells us $v$ has to be going down, too. \\n\\n[[
\f1 \uc0\u9731 
\f0  image 9]]\\n\\nEventually, we reach a state where the charge on the top plate is the same as the bottom plate. The voltage across the capacitor therefore falls to $0$.\\n\\nOver at the inductor there is a current flowing, even though the voltage is $0$, because the energy stored in the inductor's magnetic field keeps the current flowing. (Current does not abruptly drop to $0$ when the voltage reaches $0$.)  \\n\\n[[
\f1 \uc0\u9731 
\f0  image 11]]\\n\\n",\
        "images": \{\},\
        "widgets": \{\
            "image 13": \{\
                "type": "image",\
                "alignment": "block",\
                "static": false,\
                "graded": true,\
                "options": \{\
                    "static": false,\
                    "title": "",\
                    "range": [\
                        [\
                            0,\
                            10\
                        ],\
                        [\
                            0,\
                            10\
                        ]\
                    ],\
                    "box": [\
                        300,\
                        137\
                    ],\
                    "backgroundImage": \{\
                        "url": "https://ka-perseus-images.s3.amazonaws.com/d5c107bac0b68aca65c7ac4e6a328a7662fe1267.svg",\
                        "width": 300,\
                        "height": 137\
                    \},\
                    "labels": [],\
                    "alt": "",\
                    "caption": "Circuit conditions just before the switch closes."\
                \},\
                "version": \{\
                    "major": 0,\
                    "minor": 0\
                \}\
            \},\
            "image 9": \{\
                "type": "image",\
                "alignment": "block",\
                "static": false,\
                "graded": true,\
                "options": \{\
                    "static": false,\
                    "title": "",\
                    "range": [\
                        [\
                            0,\
                            10\
                        ],\
                        [\
                            0,\
                            10\
                        ]\
                    ],\
                    "box": [\
                        340,\
                        340\
                    ],\
                    "backgroundImage": \{\
                        "url": "web+graphie://ka-perseus-graphie.s3.amazonaws.com/54673d500697685afeb2ba7df1c9d91ca1184685",\
                        "width": 340,\
                        "height": 340\
                    \},\
                    "labels": [],\
                    "alt": "",\
                    "caption": "A little after closing the switch, current is rising and voltage is falling."\
                \},\
                "version": \{\
                    "major": 0,\
                    "minor": 0\
                \}\
            \},\
            "image 11": \{\
                "type": "image",\
                "alignment": "block",\
                "static": false,\
                "graded": true,\
                "options": \{\
                    "static": false,\
                    "title": "",\
                    "range": [\
                        [\
                            0,\
                            10\
                        ],\
                        [\
                            0,\
                            10\
                        ]\
                    ],\
                    "box": [\
                        340,\
                        340\
                    ],\
                    "backgroundImage": \{\
                        "url": "web+graphie://ka-perseus-graphie.s3.amazonaws.com/95f17d0d82ede692b2801832729e2852af5c00d5",\
                        "width": 340,\
                        "height": 340\
                    \},\
                    "labels": [],\
                    "alt": "",\
                    "caption": "The voltage eventually falls to $0$ (the amount of charge on the top and bottom capacitor plates is the same). At the same time, the current in the inductor reaches a peak value. That current continues to pump charge onto the bottom plate of the capacitor. "\
                \},\
                "version": \{\
                    "major": 0,\
                    "minor": 0\
                \}\
            \}\
        \}\
    \},\
    \{\
        "content": "The inductor current continues to move charge from the top plate of the capacitor to the bottom. Now there is more positive charge on the bottom plate than the top, so the voltage actually reverses sign and becomes negative.\\n\\nAs charge builds up on the bottom plate, it repels against the arrival of new charge from the inductor current (electrostatic repulsion). The inductor current bends over and starts to drop back towards $0$. \\n\\n[[
\f1 \uc0\u9731 
\f0  image 13]]\\n\\nAfter a little while, the voltage will reach a peak negative value when *all* the charge has flowed to the bottom plate. The voltage will be the negative of whatever the capacitor started at. Charge stops moving for a brief moment, so the current crosses $0$. \\n\\n[[
\f1 \uc0\u9731 
\f0  image 14]]\\n\\nThe previous image is almost identical to where we started. The current is back to zero, and the voltage is at a peak value. The peak happens to be the negative of where we started. We can go back to the start of the story and tell it again just the same, except with charge moving from the bottom plate of the capacitor back to the top. Here's the end result after one full cycle:\\n\\n[[
\f1 \uc0\u9731 
\f0  image 15]]\\n\\nThe rate of oscillation (the frequency), is determined by the value of $\\\\text L$ and $\\\\text C$. We will discover how that works when we do the formal derivation of the $\\\\text\{LC\}$ natural response in the next article.",\
        "images": \{\},\
        "widgets": \{\
            "image 13": \{\
                "type": "image",\
                "alignment": "block",\
                "static": false,\
                "graded": true,\
                "options": \{\
                    "static": false,\
                    "title": "",\
                    "range": [\
                        [\
                            0,\
                            10\
                        ],\
                        [\
                            0,\
                            10\
                        ]\
                    ],\
                    "box": [\
                        340,\
                        340\
                    ],\
                    "backgroundImage": \{\
                        "url": "web+graphie://ka-perseus-graphie.s3.amazonaws.com/665945e1929d522245f4fa35ec2745d38c71171c",\
                        "width": 340,\
                        "height": 340\
                    \},\
                    "labels": [],\
                    "alt": "",\
                    "caption": "The inductor continues heaping positive charge on the bottom plate of the capacitor, so the voltage goes negative. "\
                \},\
                "version": \{\
                    "major": 0,\
                    "minor": 0\
                \}\
            \},\
            "image 14": \{\
                "type": "image",\
                "alignment": "block",\
                "static": false,\
                "graded": true,\
                "options": \{\
                    "static": false,\
                    "title": "",\
                    "range": [\
                        [\
                            0,\
                            10\
                        ],\
                        [\
                            0,\
                            10\
                        ]\
                    ],\
                    "box": [\
                        340,\
                        340\
                    ],\
                    "backgroundImage": \{\
                        "url": "web+graphie://ka-perseus-graphie.s3.amazonaws.com/56e573838dbe36c942c96c10fa3433ce4ea77aed",\
                        "width": 340,\
                        "height": 340\
                    \},\
                    "labels": [],\
                    "alt": "",\
                    "caption": "After all the available charge has flowed to the bottom plate,  the voltage reaches its negative peak, and the current falls to $0$."\
                \},\
                "version": \{\
                    "major": 0,\
                    "minor": 0\
                \}\
            \},\
            "image 15": \{\
                "type": "image",\
                "alignment": "block",\
                "static": false,\
                "graded": true,\
                "options": \{\
                    "static": false,\
                    "title": "",\
                    "range": [\
                        [\
                            0,\
                            10\
                        ],\
                        [\
                            0,\
                            10\
                        ]\
                    ],\
                    "box": [\
                        340,\
                        340\
                    ],\
                    "backgroundImage": \{\
                        "url": "web+graphie://ka-perseus-graphie.s3.amazonaws.com/18be8c5dc9c61b0e6f8a40a03924c7436671bb82",\
                        "width": 340,\
                        "height": 340\
                    \},\
                    "labels": [],\
                    "alt": "",\
                    "caption": "The second half of the cycle is the same as the first, but with charge moving from the bottom plate of the capacitor back to the top plate. "\
                \},\
                "version": \{\
                    "major": 0,\
                    "minor": 0\
                \}\
            \}\
        \}\
    \},\
    \{\
        "content": "## Mechanical analogy: pendulum\\n\\nA swinging pendulum is a mechanical analog for an $\\\\text\{LC\}$ circuit. \\n\\n[[
\f1 \uc0\u9731 
\f0  image 3]]\\n\\n*Voltage $v(t)$ is the analog of the position.* We measure position of the pendulum as it moves away from the center point. The distance is $0$, $(\\\\goldD v=0)$, when the pendulum is hanging straight down, and goes to $\\\\goldD v=+\\\\text V_0$ or $-\\\\text V_0$ at either extreme position. \\n\\n*Current $i(t)$ is the analog of velocity.* The pendulum moves its fastest at the mid-point $(\\\\blueD i=\\\\text I_\{max\})$. It is motionless, $(\\\\blueD i=0)$, for an instant at either end of its swing.  \\n\\nThe initial voltage of $+\\\\text V_0$ corresponds to how much we pull the pendulum to the right before letting go. \\n\\nLetting go of the pendulum corresponds to closing the switch. What happens next is the natural response. If the pivot point is frictionless and there is no air resistance, the pendulum swings forever.\\n\\nThe $\\\\text\{LC\}$ circuit (and the pendulum) trade voltage and current back and forth in a sine wave pattern. Both voltage and current are sine waves, and we can see a timing difference of $1/4$ of a cycle between them.",\
        "images": \{\},\
        "widgets": \{\
            "image 3": \{\
                "type": "image",\
                "alignment": "block",\
                "static": false,\
                "graded": true,\
                "options": \{\
                    "static": false,\
                    "title": "",\
                    "range": [\
                        [\
                            0,\
                            10\
                        ],\
                        [\
                            0,\
                            10\
                        ]\
                    ],\
                    "box": [\
                        147,\
                        150\
                    ],\
                    "backgroundImage": \{\
                        "url": "https://ka-perseus-images.s3.amazonaws.com/2ba6d9e0b647d88fd3ee97b5b60af4051110e382.svg",\
                        "width": 147,\
                        "height": 150\
                    \},\
                    "labels": [],\
                    "alt": "",\
                    "caption": ""\
                \},\
                "version": \{\
                    "major": 0,\
                    "minor": 0\
                \}\
            \}\
        \}\
    \},\
    \{\
        "content": "## Summary\\n\\nWe explored an intuitive description of the natural response of an $\\\\text\{LC\}$ circuit (a second-order system). Both the voltage and current have a sine wave pattern with time. \\n",\
        "images": \{\},\
        "widgets": \{\}\
    \},\
    \{\
        "content": "[[
\f1 \uc0\u9731 
\f0  explanation 1]]",\
        "images": \{\},\
        "widgets": \{\
            "explanation 1": \{\
                "type": "explanation",\
                "alignment": "default",\
                "static": false,\
                "graded": true,\
                "options": \{\
                    "static": false,\
                    "showPrompt": "Copyright notice",\
                    "hidePrompt": "hide",\
                    "explanation": "This article is licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).",\
                    "widgets": \{\}\
                \},\
                "version": \{\
                    "major": 0,\
                    "minor": 0\
                \}\
            \}\
        \}\
    \}\
]}