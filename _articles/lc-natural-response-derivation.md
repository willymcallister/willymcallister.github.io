---
layout: article
title:  "LC natural response - derivation"
author: Willy McAllister
comments: true
---

UNDER CONSTRUCTION

We derive the natural response  of the inductor-capacitor, $\\\\text\{LC\}$, circuit . \\n\\n[[
\f1 \uc0\u9731 
\f0  image 4]]\\n\\n*This is where sine waves are born.*\\n\\n\\n\\n",\
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
        "content": "---\\n\\n### Background\\n\\nThis article walks you step-by-step through the solution to a $2$nd-order differential equation. I don't assume you have previous experience with this type of equation. Sal has videos on [2nd-order equations](w/v/2nd-order-linear-homogeneous-differential-equations-1), too. $1$st-order differential equations are solved step-by-step in the articles on [$\\\\underline\{\\\\text\{RC\}\}$](w/a/ee-rc-natural-response) and [$\\\\underline\{\\\\text\{RL\}\}$](w/a/ee-rl-natural-response) natural response. You can also check out Sal's videos on [1st-order differential equations](v/differential-equation-introduction).\\n\\n---\\n\\n### What we're building to\\n\\nThe natural response of an $\\\\text\{LC\}$ circuit is described by this homogeneous second-order differential equation: \\n\\n$\\\\text L \\\\,\\\\dfrac\{d^2 \\\\,i\}\{d \\\\,t^2\} + \\\\dfrac\{1\}\{\\\\text C\}i = 0$\\n\\nThe solution for the current is: \\n\\n$i(t)=\\\\sqrt\{\\\\dfrac\{\\\\text C\}\{\\\\text L\}\}\\\\,\\\\text V_0\\\\sin \\\\omega_\\\\circ t$\\n\\nWhere $\\\\omega_\\\\circ =\\\\sqrt\{\\\\dfrac\{1\}\{\\\\text\{LC\}\}\}$ is the *natural frequency* of the $\\\\text\{LC\}$ circuit and $\\\\text V_0$ is the starting voltage on the capacitor.\\n\\nIn electrical engineering, we use the letter $j$ as the $\\\\sqrt\{-1\}$.  \\n (The letter $i$ is already taken for current.)\\n\\n---\\n",\
        "images": \{\},\
        "widgets": \{\}\
    \},\
    \{\
        "content": "## Introduction\\n\\n### First-order systems\\n\\n[[
\f1 \uc0\u9731 
\f0  image 6]]\\nUp to now we've looked at first-order circuits, [$\\\\underline\{\\\\text\{RC\}\}$](w/a/ee-rc-natural-response) and [$\\\\underline\{\\\\text\{RL\}\}$](w/a/ee-rl-natural-response), that have one energy-storage element, $\\\\text\{C\}$ or $\\\\text\{L\}$. The natural response of first-order circuits has an exponential shape that \\"slumps\\" to its final value. The energy in its storage element is dissipated by the resistor.\\n\\n",\
        "images": \{\},\
        "widgets": \{\
            "image 6": \{\
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
                    "caption": "Natural response of an $\\\\text\{RC\}$ circuit, described by a $1$st-order differential equation."\
                \},\
                "version": \{\
                    "major": 0,\
                    "minor": 0\
                \}\
            \}\
        \}\
    \},\
    \{\
        "content": "### Second-order systems\\n\\nNow we look at a circuit with two energy-storage elements and no resistor. Circuits with two storage elements are *second-order systems*, because they produce equations with second derivatives.\\n\\nThis article covers the $\\\\text\{LC\}$ circuit, one of the last two circuits we will solve with full differential equation treatment. The last circuit to get this treatment is the $\\\\text\{RLC\}$ (in the next article). The mathematics of differential equations keeps getting harder. Fortunately, after we are done with the $\\\\text\{LC\}$ and $\\\\text\{RLC\}$, we learn a really nice shortcut to make our lives simpler.\\n\\nWe stick with differential equations instead of going straight to the shortcut because I want to show you where sine waves come from in electronics. Sine waves emerge from the solution to second-order equations. Sine waves are important. They are *the* building block for *all* other types of signals. \\n\\nSecond-order systems are the first systems that rock back and forth in time, or *oscillate*. The classic example of a mechanical second-order system is a clock with a pendulum. In electronics, the classic second-order system is the $\\\\text\{LC\}$ circuit.\\n",\
        "images": \{\},\
        "widgets": \{\}\
    \},\
    \{\
        "content": "## Natural response\\n\\nWe want to find the *natural response* of the $\\\\text\{LC\}$ circuit. The natural response is what a circuit does when there is no external driving force. Natural response is always an important part of  the total response of a circuit. \\n",\
        "images": \{\},\
        "widgets": \{\}\
    \},\
    \{\
        "content": "## Natural response of a $2$nd-order circuit\\n\\nTo get going on a precise answer for the natural response, let's set up the circuit with some initial energy. The components are labeled with careful attention to the [sign convention for passive components](w/a/ee-sign-convention).  The inductor has an initial current of $0\\\\,\\\\text A$ because the switch starts in the open position. We assume the capacitor has an initial voltage before the switch closes, $v_\{\\\\text C\} =-\\\\text V_0$. (\\nNotice how $v_\\\\text C$ has its $+$ sign at the bottom.) We let the switch close at $t=0$.\\n\\n\\n[[
\f1 \uc0\u9731 
\f0  image 10]]\\n\\nAs with every circuit analysis, we begin by writing one of Kirchhoff's Laws. In this case, we'll go with Kirchhoff's Voltage Law (KVL) around the loop, starting at the lower left and going around clockwise. \\n\\n$v_\{\\\\text\{L\}\}+v_\{\\\\text\{\}C\} = 0$\\n\\n$\\\\text L\\\\,\\\\dfrac\{di\}\{dt\} + \\\\dfrac\{1\}\{\\\\text C\}\\\\,\\\\displaystyle\\\\int i \\\\,dt = 0$\\n\\nThis KVL equation contains an integral, which is awkward to deal with. The way to get rid of an integral (also known as an anti-derivative) is to take its derivative.  We take the derivative of every term in the equation. \\n\\n$\\\\dfrac\{d\}\{dt\} \\\\left ( \\\\,\\\\text L\\\\,\\\\dfrac\{di\}\{dt\} + \\\\dfrac\{1\}\{\\\\text C\}\\\\,\\\\displaystyle\\\\int i \\\\,dt\\\\, \\\\right ) = \\\\dfrac\{d\}\{dt\}\\\\,0$\\n\\nThis gives us the  second derivative of the $\\\\text L$ term, gets rid of the integral in the $1/\\\\text C$ term, and still leaves us with $0$ on the right side.\\n\\n$\\\\text L \\\\,\\\\dfrac\{d^2i\}\{dt^2\} + \\\\dfrac\{1\}\{\\\\text C\}\\\\,i = 0$\\n\\nThe equation is tidier if the first term has no coefficient, so we divide through by $\\\\text L$. This second-order differential equation captures the essence of our circuit. \\n\\n$\\\\dfrac\{d^2i\}\{dt^2\} + \\\\dfrac\{1\}\{\\\\text\{LC\}\}\\\\,i = 0$\\n\\n",\
        "images": \{\},\
        "widgets": \{\
            "image 10": \{\
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
                        136\
                    ],\
                    "backgroundImage": \{\
                        "url": "https://ka-perseus-images.s3.amazonaws.com/9e161675df34dae6db77f7357ca96a963e429de5.svg",\
                        "width": 300,\
                        "height": 136\
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
        "content": "### Propose a solution\\n\\nWhen we solved the first-order $\\\\text\{RC\}$ and $\\\\text\{RL\}$ circuits, we guessed at an exponential solution for $i(t)$. Guessing works with second-order equations, too. Our second-order equation has similar requirements: we want the function and its derivatives to look like each other so they can all add up to $0$. The exponential function fits the description. We propose an exponential function with some adjustable parameters:\\n\\n$i(t) = Ke^\{st\}$\\n\\n$K$ is an amplitude factor that scales the current big or small.  \\n \\n$s$ is up in the exponent sitting next to time $t$. Since exponents don't have dimensions, $s$ has to have units of $1/t$, which is also known as *frequency*. Since we are solving a natural response, $s$ is called the *natural frequency*. \\n\\nNow we substitute our proposed function into the differential equation and check to see if it makes the equation true.\\n\\n$\\\\dfrac\{d^2 \\\\,i\}\{d \\\\,t^2\} + \\\\dfrac\{1\}\{\\\\text\{LC\}\}i = 0$\\n\\n$\\\\dfrac\{d^2\}\{d \\\\,t^2\}(Ke^\{st\})+  \\\\dfrac\{1\}\{\\\\text\{LC\}\}(Ke^\{st\}) = 0$\\n\\nLet's work on the first term by taking two derivatives. The first derivative is:\\n\\n$\\\\dfrac\{d\}\{dt\}(Ke^\{st\}) = sKe^\{st\}$\\n\\nAnd now the second derivative:\\n\\n$\\\\dfrac\{d^2\}\{d \\\\,t^2\}(Ke^\{st\}) = \\\\dfrac\{d\}\{dt\}(sKe^\{st\})  = s^2Ke^\{st\}$\\n\\nWe plug our new second derivative back into the equation:\\n\\n$s^2Ke^\{st\} +  \\\\dfrac\{1\}\{\\\\text\{LC\}\}Ke^\{st\} = 0$\\n\\nAnd do some factoring to pull $Ke^\{st\}$ to the side:\\n\\n$Ke^\{st\}(s^2 +  \\\\dfrac\{1\}\{\\\\text\{LC\}\}) = 0$\\n\\nHow many ways can we make this equation true?\\n\\n$K=0$ is pretty boring. $0=0$, who cares?\\n\\n$e^\{st\}$ never becomes zero for a finite amount of time. ",\
        "images": \{\},\
        "widgets": \{\}\
    \},\
    \{\
        "content": "That leaves the interesting solution when the ($s+1/\\\\text\{LC)\}$ term equals $0$: \\n\\n$s^2+ \\\\dfrac\{1\}\{\\\\text\{LC\}\} = 0$\\n\\nThis equation is called the *characteristic equation* of our circuit. \\nWe want to find the *roots* of the characteristic equation (the value(s) of $s$ that make left side equal zero).\\n\\n$s^2 = - \\\\dfrac\{1\}\{\\\\text\{LC\}\}$\\n\\nWhoa, look what's about to happen. We're about to take the square root of a negative number. We are about to generate an imaginary number. \\n\\n$s$ has two possible values:\\n\\n$s_1 = +j\\\\,\\\\sqrt\{\\\\dfrac\{1\}\{\\\\text\{LC\}\}\}$\\n\\n$s_2 = -j\\\\,\\\\sqrt\{\\\\dfrac\{1\}\{\\\\text\{LC\}\}\}$\\n\\n\\nElectrical engineers use the letter $j$ to indicate the imaginary unit, $\\\\sqrt\{-1\}$, since we already use $i$ for current. \\n\\nAs a shorthand, we give a name to the square root term:\\n\\n$\\\\omega_\\\\circ = \\\\sqrt\{\\\\dfrac\{1\}\{\\\\text\{LC\}\}\}$\\n\\n\\n\\n[[
\f1 \uc0\u9731 
\f0  explanation 5]]\\n\\nThe roots of the characteristic equation can be expressed in terms of $\\\\omega_\\\\text o$ as:\\n\\n$s_1 = +j\\\\,\\\\omega_\\\\circ$\\n\\n$s_2 = -j\\\\,\\\\omega_\\\\circ$\\n\\nHow about that! The  $\\\\text\{LC\}$ circuit produces two complex natural frequencies, $s_1$ and $s_2$. And one of the natural frequencies is negative. So curious. This will turn out to be very interesting. \\n\\nEither $s_1$ or $s_2$ by itself is a root of the equation. For our proposed solution we allow the possibility of both natural frequencies, $s_1$ and $s_2$. So we write a general solution as a linear combination of two terms, with two adjustable $K$ constants. \\n\\n$i(t) = K_1e^\{\\\\large\{\\\\raise\{0.2em\}\{ \\\\,+j\\\\,\\\\omega_\\\\circ t\}\}\} + K_2e^\{\\\\large\{\\\\raise\{0.2em\}\{ \\\\,-j\\\\,\\\\omega_\\\\circ t\}\}\}$\\n\\nAt this point you might be thinking, \\"Complex exponents? Negative frequency? Is this really happening?\\" The answer is, yes. So please hang in there while we work with these expressions.\\n\\n",\
        "images": \{\},\
        "widgets": \{\
            "explanation 5": \{\
                "type": "explanation",\
                "alignment": "default",\
                "static": false,\
                "graded": true,\
                "options": \{\
                    "static": false,\
                    "showPrompt": "What is the curvy w symbol?",\
                    "hidePrompt": "hide",\
                    "explanation": "$\\\\omega$ is the lowercase Greek character omega. $\\\\omega$ is commonly used as the variable name for frequency measured in radians per second. The angle of a full circle is $360^\{\\\\circ\}$ or $2\\\\pi$ radians. An angle of $1$ radian is $360^\{\\\\circ\}/2\\\\pi \\\\approx 57.6^\{\\\\circ\}$. Whenever you see $\\\\omega$, think \\"radians per second.\\" \\n\\nWhen we talk about the *natural frequency* or *resonant frequency*, it is often called $\\\\omega_\{\\\\circ\}$, pronounced, \\"omega naught.\\"",\
                    "widgets": \{\}\
                \},\
                "version": \{\
                    "major": 0,\
                    "minor": 0\
                \}\
            \}\
        \}\
    \},\
    \{\
        "content": "## Euler's identities\\n\\nTo work with these complex exponents, we resort to an important identity. \\n\\nUsing [Maclaurin series expansions](w/v/euler-s-formula-and-euler-s-identity) for $e^\{jx\}$, $\\\\sin jx$, and $\\\\cos jx$, it is possible to derive these *Euler identities*:\\n\\n$e^\{+jx\} = \\\\cos x + j\\\\sin x$\\n\\n$e^\{-jx\} = \\\\cos x - j\\\\sin x$\\n\\nIn the linked video, anytime Sal says $i$, we will say $j$. \\n\\nThese identities let us turn the strange $e^\{imaginary\}$ thing to a normal complex number. The real and imaginary parts come from a cosine or sine function, so both the real and imaginary components are somewhere in the range $-1 $ to $+1$.\\n\\n## Use Euler's identities\\n\\nWe can use Euler's identities in our proposed solution. \\n\\n$i(t) = K_1e^\{\\\\large\{\\\\raise\{0.2em\}\{ \\\\,+j\\\\,\\\\omega_\\\\circ t\}\}\} + K_2e^\{\\\\large\{\\\\raise\{0.2em\}\{ \\\\,-j\\\\,\\\\omega_\\\\circ t\}\}\}$\\n\\n$i(t) = K_1(\\\\cos \\\\omega_\\\\circ t + j\\\\sin \\\\omega_\\\\circ t) + K_2(\\\\cos \\\\omega_\\\\circ t - j\\\\sin \\\\omega_\\\\circ t)$\\n\\nMultiply through the constants:\\n\\n$i(t) = K_1\\\\cos \\\\omega_\\\\circ t + jK_1\\\\sin \\\\omega_\\\\circ t + K_2\\\\cos \\\\omega_\\\\circ t - jK_2\\\\sin \\\\omega_\\\\circ t\\\\,,$\\n\\nand gather the cosine terms and sine terms together:\\n\\n\\n$i(t) = (K_1+K_2)\\\\cos \\\\omega_\\\\circ t + j(K_1-K_2)\\\\sin \\\\omega_\\\\circ t$\\n\\nWe don't know $K_1$ or $K_2$, or their sum or difference. It seems perfectly ok to replace the unknown $K$'s with different unknown $A$'s, just to make things appear a bit simpler. \\n\\nIf we let $A_1 = (K_1 + K_2)$, and $A_2 = j(K_1-K_2$), then $i(t)$ is:\\n\\n$i(t) = A_1\\\\cos \\\\omega_\\\\circ t + A_2\\\\sin \\\\omega_\\\\circ t$\\n\\nWe used Euler's identities to rearrange the complex exponentials into a sum of trig functions. This equation is the very first time in electronics we see a sine or cosine as a function of time (a *sinusoidal waveform*). \\n\\n(Notice how we defined $A_2$ to include $j(K_1-K_2)$, so $j$ no longer directly appears in the proposed solution.)\\n",\
        "images": \{\},\
        "widgets": \{\}\
    \},\
    \{\
        "content": "## Test the proposed solution\\n\\nNext, we check our proposed solution by plugging it into the second-order differential equation. If we can come up with values for the constants that make the differential equation true, the proposed solution is a winner. \\n\\n### Figure out the initial conditions\\n\\nThe initial conditions needed for a second-order circuit are a little more involved than for a first-order circuit.\\nWhen we did this for first-order circuits, $\\\\text\{RC\}$ or $\\\\text\{RL\}$, we had to know a single value, a starting current or voltage. With a second-order $\\\\text\{LC\}$ circuit, we need to know *two* things: the current *and* the derivative of the current when the switch closes. \\n\\n[[
\f1 \uc0\u9731 
\f0  image 13]]\\n\\nWe write down everything we know about $t=0^-$ (the moment just before the switch closes):\\n \\n* The switch is open, so  $i(0^-) = 0$\\n* The starting capacitor voltage is specified: $v_\\\\text C(0^-)=-\\\\text V_0$. \\n\\nIf $t=0^+$ is the moment just after the switch closes, our goal is to find $i(0^+)$ and $di/dt(0^+)$.\\n\\nWe know some properties of inductors and capacitors that will take us from $t=0^-$ to $t=0^+$:\\n\\n* Inductor current cannot change instantly, so  \\n$i(0^+)=i(0^-)=0$\\n* Capacitor voltage cannot change instantly, so  \\n$v(0^+)=v(0^-)=\\\\text V_0$\\n\\n(After the switch closes there is only one $v$, so we'll just call it $v$ from now on.)\\n\\n[[
\f1 \uc0\u9731 
\f0  image 16]]\\n\\n\\n\\nNow we have $i(0^+)$, but not $di/dt(0^+)$, yet. Where can we get this derivative? How about from the inductor's $i$-$v$ equation? \\n\\n$v = \\\\text L\\\\,\\\\dfrac\{di\}\{dt\}$\\n\\n$\\\\dfrac\{di\}\{dt\}(0^+) = \\\\dfrac\{1\}\{\\\\text L\}\\\\,v(0^+)$\\n\\n$\\\\dfrac\{di\}\{dt\}(0^+) = \\\\dfrac\{1\}\{\\\\text L\}\\\\,\\\\text V_0$\\n\\nNow we have our second initial condition. This says the moment just after the switch closes, the current in the inductor starts changing with a slope of $\\\\text V_0/\\\\text L$ amperes every second. \\n\\n### Summary of the initial conditions\\n\\n$i(0^+)=0$\\n\\n$\\\\dfrac\{di\}\{dt\}(0^+) = \\\\dfrac\{1\}\{\\\\text L\}\\\\,\\\\text V_0$\\n\\n",\
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
                        136\
                    ],\
                    "backgroundImage": \{\
                        "url": "https://ka-perseus-images.s3.amazonaws.com/d4bcc8430e1306080aea87b05cf0f99578a5c287.svg",\
                        "width": 300,\
                        "height": 136\
                    \},\
                    "labels": [],\
                    "alt": "",\
                    "caption": "Circuit conditions just before the switch closes, at $t=0^-$."\
                \},\
                "version": \{\
                    "major": 0,\
                    "minor": 0\
                \}\
            \},\
            "image 16": \{\
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
                        "url": "https://ka-perseus-images.s3.amazonaws.com/07a1c12c2029434c9cd73c4cc8426f2e9f9cfb89.svg",\
                        "width": 300,\
                        "height": 137\
                    \},\
                    "labels": [],\
                    "alt": "",\
                    "caption": "Circuit conditions just after the switch closes, at $t=0^+$. There is now just one voltage, $v = v_\\\\text L = -v_\\\\text C$. The initial voltage on the capacitor is $v=+\\\\text V_0$."\
                \},\
                "version": \{\
                    "major": 0,\
                    "minor": 0\
                \}\
            \}\
        \}\
    \},\
    \{\
        "content": "### Use the initial conditions to find $A_1$ and $A_2$\\n\\nWe use our initial conditions one at a time to solve for the constants. The first initial condition is $i=0$ at $t=0^+$. Let's plug it into the proposed solution and see where it takes us:\\n\\n$i(t) = A_1\\\\cos \\\\omega_\\\\circ t + A_2\\\\sin \\\\omega_\\\\circ t$\\n\\n$0 = A_1\\\\cos (\\\\omega_\\\\circ \\\\cdot 0) + A_2\\\\sin (\\\\omega_\\\\circ \\\\cdot 0)$\\n\\n$0 = A_1\\\\cos 0 + A_2\\\\sin 0$  \\n\\n$\\\\begin\{array\}\{r\}\\n1 \\\\\\\\\\n0=A_1\\\\cancel\{\\\\cos 0\}\\n\\\\end\{array\}\\n\\\\begin\{array\}\{r\}\\n0 \\\\\\\\\\n+ \\\\,A_2 \\\\cancel\{\\\\sin 0\}\\n\\\\end\{array\}$\\n\\n$0 = A_1$\\n\\n$A_1$ is $0$, so the proposed cosine term drops out of the solution. Our proposed solution now looks like:\\n\\n$i(t) = A_2\\\\sin \\\\omega_\\\\circ t$\\n\\n\\nNow we go after $A_2$ using the second initial condition. The derivative of $i$ at $t=0^+$ is: \\n\\n$\\\\dfrac\{di\}\{dt\}(0^+) = \\\\dfrac\{1\}\{\\\\text L\}\\\\,\\\\text V_0$\\n\\nTake the derivative of the proposed $i(t)$:\\n\\n$\\\\dfrac\{di\}\{dt\} = \\\\dfrac\{d\}\{dt\}(A_2 \\\\sin \\\\omega_\\\\circ t)$\\n\\n$\\\\dfrac\{di\}\{dt\} = \\\\omega_\\\\circ A_2\\\\cos \\\\omega_\\\\circ t$\\n\\nEvaluating this expression at $t=0$:\\n\\n$\\\\dfrac\{1\}\{\\\\text L\}\\\\,\\\\text V_0 = \\\\omega_\\\\circ A_2\\\\cos(\\\\omega_\\\\circ \\\\cdot 0)$\\n\\n$\\\\dfrac\{1\}\{\\\\text L\}\\\\,\\\\text V_0 =  \\\\omega_\\\\circ A_2\\\\cdot 1$\\n\\n\\n$A_2 = \\\\dfrac\{1\}\{\\\\omega_\\\\circ \\\\text L\}\\\\,\\\\text V_0$\\n\\nWe can expand $\\\\omega_\\\\circ$  into $\\\\text L$ and $\\\\text C$ to get:\\n[[
\f1 \uc0\u9731 
\f0  explanation 1]]\\n\\n$A_2 = \\\\sqrt\{\\\\dfrac\{\\\\text C\}\{\\\\text\{L\}\}\}\\\\,\\\\text V_0$ \\n\\nAnd finally, after a lot of hard work, the solution for the current is:\\n\\n$\\\\large i(t) = \\\\sqrt\{\\\\dfrac\{\\\\text C\}\{\\\\text L\}\}\\\\,\\\\text V_0 \\\\sin \\\\omega_\\\\circ t$",\
        "images": \{\},\
        "widgets": \{\
            "explanation 1": \{\
                "type": "explanation",\
                "alignment": "default",\
                "static": false,\
                "graded": true,\
                "options": \{\
                    "static": false,\
                    "showPrompt": "show me the algebra",\
                    "hidePrompt": "hide algebra",\
                    "explanation": "$\\\\omega_\\\\circ = \\\\sqrt\{\\\\dfrac\{1\}\{\\\\text\{LC\}\}\}$\\n\\n$A_2 = \\\\dfrac\{1\}\{\\\\sqrt\{\\\\dfrac\{1\}\{\\\\text\{LC\}\}\}\\\\,\\\\text L\}\\\\,\\\\text V_0$ \\n\\n$A_2 = \\\\dfrac\{1\}\{\\\\sqrt\{\\\\dfrac\{1\}\{\\\\text\{LC\}\}\\\\text L^2\}\}\\\\,\\\\text V_0$ \\n\\n$A_2 = \\\\dfrac\{1\}\{\\\\sqrt\{\\\\dfrac\{1\}\{\\\\cancel\{\\\\text L\}\\\\text\{C\}\}\\\\text L^\{\\\\cancel 2\}\}\}\\\\,\\\\text V_0$ \\n\\n$A_2 = \\\\dfrac\{1\}\{\\\\sqrt\{\\\\dfrac\{\\\\text L\}\{\\\\text\{C\}\}\}\}\\\\,\\\\text V_0$ \\n",\
                    "widgets": \{\}\
                \},\
                "version": \{\
                    "major": 0,\
                    "minor": 0\
                \}\
            \}\
        \}\
    \},\
    \{\
        "content": "## Real component values\\n\\nTo demonstrate what the solution looks like, we assign component values $\\\\text L=1$ henry and $\\\\text C = 1/4$ farad, and a starting voltage on the capacitor of $10\\\\,\\\\text V$.\\n\\n\\n[[
\f1 \uc0\u9731 
\f0  image 8]]\\n\\nThe natural frequency, $\\\\omega_\\\\circ$ is:\\n\\n$\\\\omega_\\\\circ = \\\\sqrt\{\\\\dfrac\{1\}\{\\\\text\{LC\}\}\} = \\\\sqrt\{\\\\dfrac\{1\}\{1\\\\cdot 1/4\}\} = 2\\\\,\\\\text\{radians/second\}$\\n\\nThe current as a function of time is:\\n\\n$i(t) = \\\\sqrt\{\\\\dfrac\{\\\\text C\}\{\\\\text L\}\}\\\\,\\\\text V_0 \\\\sin \\\\omega_\\\\circ t = \\\\sqrt\{\\\\dfrac\{\\\\text 1/4\}\{1\}\}\\\\,10 \\\\sin \\\\omega_\\\\circ t$\\n\\n$i(t) = 5 \\\\sin 2 t$\\n\\nThe current starts up the moment the switch closes:\\n\\n[[
\f1 \uc0\u9731 
\f0  image 3]]\\n\\nThe current takes off in a sine wave pattern that continues forever. (There is no resistor in this ideal circuit, so the energy never dissipates. In a real-world circuit there would be small resistances that eventually dissipate the energy.)\\n\\nThe natural frequency of the sine wave is $\\\\omega_\{\\\\circ\} = 2 \\\\,\\\\text\{radians\}/\\\\text\{sec\}$. We can convert from radians per second to cycles per second, (also known as hertz, or $\\\\text\{Hz\}$) knowing that $1$ full cycle of a sine function corresponds to $2\\\\pi$ radians. We usually use the symbol $f$ for cycles per second The conversion is:\\n\\n$\\\\omega = 2\\\\pi f$\\n\\nThe natural frequency of the circuit in cycles per second, hertz, $\\\\text\{Hz\}$, is:\\n\\n$f = \\\\dfrac\{2\\\\,\\\\text\{radians/sec\}\}\{2\\\\pi\} = \\\\dfrac\{1\}\{\\\\pi\}\\\\,\\\\text\{Hz,\}$ \\n\\nor equivalently, the current completes a full cycle every $\\\\pi$ seconds.\\n\\n### A quick look back at the initial conditions\\n\\nWe can look in close to the origin to see how the solution accounted for the initial conditions. The sine wave starts at the origin, $i=0$. And notice how the slope of the blue sine wave near the origin matches the slope of the straight black line, $i=10\\\\,\\\\text A/\\\\text\{sec\}$. \\n\\n[[
\f1 \uc0\u9731 
\f0  image 4]]\\n",\
        "images": \{\},\
        "widgets": \{\
            "image 8": \{\
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
                        136\
                    ],\
                    "backgroundImage": \{\
                        "url": "https://ka-perseus-images.s3.amazonaws.com/0e3e866cab333778923b3bb8e5f4f9e99e66b7da.svg",\
                        "width": 300,\
                        "height": 136\
                    \},\
                    "labels": [],\
                    "alt": "",\
                    "caption": ""\
                \},\
                "version": \{\
                    "major": 0,\
                    "minor": 0\
                \}\
            \},\
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
                        425,\
                        425\
                    ],\
                    "backgroundImage": \{\
                        "url": "web+graphie://ka-perseus-graphie.s3.amazonaws.com/4fc5770243e2cc9c16a48b64adafd615f463c73f",\
                        "width": 425,\
                        "height": 425\
                    \},\
                    "labels": [],\
                    "alt": "",\
                    "caption": ""\
                \},\
                "version": \{\
                    "major": 0,\
                    "minor": 0\
                \}\
            \},\
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
                        425,\
                        425\
                    ],\
                    "backgroundImage": \{\
                        "url": "web+graphie://ka-perseus-graphie.s3.amazonaws.com/e7957ce9f2960f6311571e38b351794abf3ea67f",\
                        "width": 425,\
                        "height": 425\
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
        "content": "## Voltage, $v(t)$\\n\\nAt this point we have solved the current. If you want to press on a little further, have a go at solving for the voltage, $v(t)$. \\n\\n**Find an expression for $v(t)$ after the switch closes.**\\n\\nProbably the quickest route is to use the inductor $i$-$v$ equation to solve for $v$ in terms of $di/dt$. \\n\\n[[
\f1 \uc0\u9731 
\f0  graded-group 1]]\\n\\n[[
\f1 \uc0\u9731 
\f0  explanation 1]]",\
        "images": \{\},\
        "widgets": \{\
            "graded-group 1": \{\
                "type": "graded-group",\
                "alignment": "default",\
                "static": false,\
                "graded": true,\
                "options": \{\
                    "title": "",\
                    "hasHint": false,\
                    "content": "$v(t) = \\\\quad$[[
\f1 \uc0\u9731 
\f0  expression 1]]",\
                    "images": \{\},\
                    "widgets": \{\
                        "expression 1": \{\
                            "type": "expression",\
                            "alignment": "default",\
                            "static": false,\
                            "graded": true,\
                            "options": \{\
                                "answerForms": [\
                                    \{\
                                        "value": "10\\\\cos2t",\
                                        "form": false,\
                                        "simplify": false,\
                                        "considered": "correct",\
                                        "key": 0\
                                    \}\
                                ],\
                                "buttonSets": [\
                                    "basic"\
                                ],\
                                "functions": [\
                                    "f",\
                                    "g",\
                                    "h"\
                                ],\
                                "times": false\
                            \},\
                            "version": \{\
                                "major": 1,\
                                "minor": 0\
                            \}\
                        \}\
                    \},\
                    "hint": false\
                \},\
                "version": \{\
                    "major": 0,\
                    "minor": 0\
                \}\
            \},\
            "explanation 1": \{\
                "type": "explanation",\
                "alignment": "default",\
                "static": false,\
                "graded": true,\
                "options": \{\
                    "static": false,\
                    "showPrompt": "Show Answer",\
                    "hidePrompt": "Hide Answer",\
                    "explanation": "The current is: $\\\\quad i(t) = 5\\\\sin 2t$\\n\\nThe inductor $i$-$v$ equation gives $v$ in terms of $i$.\\n\\n$v = \\\\text L \\\\,\\\\dfrac\{di\}\{dt\}$\\n\\n$v = 1\\\\,\\\\text H \\\\cdot\\\\dfrac\{d\}\{dt\} (5\\\\sin 2t)$\\n\\n$v = 5 \\\\cdot 2\\\\,\\\\cos 2t$\\n\\n$v(t) = 10\\\\,\\\\cos 2t$\\n\\n\\n[[
\f1 \uc0\u9731 
\f0  image 1]]",\
                    "widgets": \{\
                        "image 1": \{\
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
                                    440,\
                                    440\
                                ],\
                                "backgroundImage": \{\
                                    "url": "web+graphie://ka-perseus-graphie.s3.amazonaws.com/a04a055105b8b557745affdfa346bc247ed70c46",\
                                    "width": 440,\
                                    "height": 440\
                                \},\
                                "labels": [],\
                                "alt": "",\
                                "caption": ""\
                            \},\
                            "type": "image",\
                            "version": \{\
                                "major": 0,\
                                "minor": 0\
                            \},\
                            "graded": true,\
                            "alignment": "block",\
                            "static": false\
                        \}\
                    \}\
                \},\
                "version": \{\
                    "major": 0,\
                    "minor": 0\
                \}\
            \}\
        \}\
    \},\
    \{\
        "content": "## Summary\\n\\nWe derived the natural response of an $\\\\text\{LC\}$ circuit by first creating this homogeneous second-order differential equation: \\n\\n$\\\\dfrac\{d^2 \\\\,i\}\{d \\\\,t^2\} + \\\\dfrac\{1\}\{\\\\text\{LC\}\}i = 0$\\n\\nThen we assumed a solution of the form $Ke^\{st\}$, which gave us the *characteristic equation* for the circuit:\\n\\n$s^2 + \\\\dfrac\{1\}\{\\\\text\{LC\}\}=0$\\n\\nWhen computing the roots of the characteristic equation we ran head on into a *very* strange expression: $e^\{j\\\\omega_\\\\circ t\}$, an exponential with complex exponent. We reached deep into our bag of tricks and pulled out:\\n\\nEuler's identities\\n\\n$e^\{+jx\} = \\\\cos x + j\\\\sin x$  \\n$e^\{-jx\} = \\\\cos x - j\\\\sin x$\\n\\nThese identities let us express the complex exponential as a combination of sine and cosine functions. (In electrical engineering, we use the letter $j$ as the name for $\\\\sqrt\{-1\}.$)\\n\\nThen we looked carefully at the circuit to find the initial conditions. For a second-order system, we found an initial $i$ and an initial $di/dt$. \\n\\nWe found a function for $i(t)$ that satisfied the differential equation:\\n\\n$i(t) = \\\\sqrt\{\\\\dfrac\{\\\\text C\}\{\\\\text L\}\}\\\\,\\\\text V_0 \\\\sin \\\\omega_\\\\circ t$\\n\\n$\\\\omega_\\\\circ \\\\equiv \\\\sqrt\{\\\\dfrac\{1\}\{\\\\text\{LC\}\}\}$ is the *natural frequency* of the $\\\\text\{LC\}$ circuit.\\n\\n $\\\\text V_0$ is the starting voltage on the capacitor. \\n\\n(This solution is applies when the starting current in the inductor is $0$.)\\n\\n\\n",\
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