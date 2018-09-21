---
layout: article
title:  "Conventional vs. electron current"
author: Willy McAllister
comments: true
---

One of the most confusing ideas for beginning electrical engineers is *conventional current*. This topic gets the greatest number of questions and it causes the most frustration when starting to learn about circuits. To new students this idea might seem like a practical joke or some kind of colossal mistake caused by engineering laziness. It's not. 

![Current flow]({{ site.baseurl }}{% link i/conventional_current1.svg %}){: .centered :}

Written by Willy McAllister.

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

---- 

## Typical question from a motivated learner

>Early on in class it was explained that there are two theories for current: conventional theory and electron theory. Conventional theory is the original belief that electricity flows from the positive side to the negative side of a battery. 
>
>Electron theory is the opposite of that and what is explained in this video ([Current]({{ site.baseurl }}{% link _videos/current.md %})). I was also told that electron theory was proved the correct out of the two; however, conventional theory is still the one used because "it works". 
>
>I don't understand though why when conventional theory was proved incorrect, it is still being used. It's a source of great confusion for me. Is it because the engineering world is just too lazy to make the transition from a false theory to a correct one? 

## Current

The definition of current is short and simple --- Current is the movement of charge.

What makes this simple definition so interesting is there are two types of charge. The two types move in opposite directions when placed in a potential field. If negative charge moves right then positive charge moves left. A current can be made of one type of charge moving in one direction, or two types moving in opposite directions at the same time. 
 
This "two types" property is unusual. It isn't something we come across in everyday life. There is only one type of mass. Two masses are always attracted to each other. Gravity never repels. Electricity is different. It isn't like everyday life. 

## Current direction

This "moving both ways at the same time" property creates a puzzle. It means we have to make a choice about how to indicate the direction of current. Things are moving both ways at the same time. There are two choices,

* Point the current arrow in the direction the positive charge moves.
* Point the current arrow in the direction the negative charge moves.

Which one would you adopt?

The convention to indicate current direction is the first choice: positive current is the direction positive charge moves. We use this definition even if no positive charge is in the vicinity. With this convention, the current arrow points in the direction negative charge *comes from*. 

## Conventional current is not a "kind" of current

Conventional current is not an alternative kind of current. It is a way to talk about current *direction*. 

The term "conventional current" makes it sound like a new type of current---like a current made of protons or something. It is not. In wires the current is always carried by electrons. 

We know current in wires is carried by negatively charged electrons. Even so, we still use conventional current direction when dealing with current in wires. Conventional current direction is not "false" or "incorrect" for wires. It's just a habit.

It generates less confusion if you always say the longer "conventional current direction" with emphasis on *direction*. Whenever you hear or read "conventional current" it refers to a convention for *direction*.

## Ammeter

The instruments we use to measure current---an ammeter---can't tell the difference between positive charge moving one way from negative charge moving the other way. An ammeter reports a single number when it measures current. It presents one number for the combined amount of positive and negative charge moving around (see the [definition of current]({{ site.baseurl }}{% link _articles/basic-quantities.md %}#current)). It displays a positive sign when conventional current (the direction positive charge would flow) flows into the red lead and out the black lead.

![Current flow]({{ site.baseurl }}{% link i/conventional_current2.svg %}){: .centered :}
<p class="caption">The blue arrow indicates the conventional current direction in both cases.<br>$\quad\text{a.}\, 1\,\text{mA}$ flows into the red lead. The meter reads a positive current.<br>$\quad\text{b.}\, 1\,\text{mA}$ flows into the black lead. The meter reads a negative current.<br>Electrons flow in the opposite direction in both cases.</p>


## Military veterans

We listed a second alternative for defining current direction. Some military electronic training programs (for example the U.S. Navy [NEETS](https://www.hnsa.org/resources/manuals-documents/2575-2/) program in the 1960's) define current as the direction of electron motion. If you participated in electronics training in the military you may have come across this convention. If that's the case, this article must be driving you crazy.

We don't use the electron current convention at Spinning Numbers. We follow the SI convention for current direction, which is defined in terms of positive charge.

## Other conventions for direction

There are other conventions that remind me of what we're talking about here.

It's our habit to hold maps with North at the top. North at the top isn't right or wrong, it's just a habit that everybody knows. We could all put South or East at the top, but we don't. The conventional direction for maps is North at the top.

Another convention is how sailors identify the direction of the wind. If you are a brand new sailor and Old Swab tells you, "Arrr matey, it's a West wind a'blow'n today.", you might think the wind is blowing towards the west. You say, "Oh, the west wind will blow the ship farther west." That's a perfectly reasonable thing to conclude if this is your very first time at sea. But Old Swab says, "No, matey, the sailor's convention for wind direction is to say where the wind is *a'blow'n' from*. A West wind blows *from* the west, towards the east." 

A this point you might have one of two reactions, "Oh my! You're saying there are two kinds of wind! I'm so confused!" Or you could say, "Aye sir, Old Swab." says ye. I'll use that convention for wind direction from now on. A west wind means we will have lunch farther east from here."

## How did it get like this?

This quirky situation comes from some historical coincidences.

* The electron (our favorite conducting particle) has a negative sign.
* We named charges with arithmetic signs.

How did the electron get its negative sign? This is Ben Franklin's contribution. Around the time of his kite/key/lightning experiment the main theory was that electricity was a mixture of two invisible fluids (since there are two types of charge). Franklin published a theory saying electricity was a single invisible fluid. His reasoning was if you rubbed a glass rod with fur, one of them gained electric fluid and the other lost or lacked fluid. Gaining and lacking led him to name the two charges $+$ and $-$. The electron was discovered $150$ years later. Folks eventually figured out the electric fluid-lacking material wasn't actually lacking anything, it had gained electrons. That's how the electron got its minus sign.

Buried within the electron's minus sign is another coincidence. Franklin gave the names "plus" and "minus" to the two types of charge. Those names make it seem like arithmetic is going on. It's not a bad idea. Using names from arithmetic serves us well when we see how charges combine. Opposite charges come together to give you something neutral (something that seems like it has "zero" charge). That seems arithmeticky. 

But it didn't have to be that way. There lots of opposites not based on arithmetic signs. On/off, up/down, North/South (like magnets), red/green (for stop/go), left/right, or even vitreous (glass-like) versus resinous (amber-like). By naming charge $+$ and $-$ and jumbling that up with the $+$ and $-$ directions in a wire there are lots of signs flying around. No wonder it's confusing.

Suppose Franklin had picked "red" and "green" for the two types of charge. In school you would be taught, "Current is red and green charge moving in opposite directions. Give current a positive sign in the direction the red charge moves. In wires, only green charge is moving, but you still point the current arrow the way red charge would move." Now we don't have a stew of arithmetic signs. Would there be less anxiety about the definition of current direction? I think yes. What do you think? 

In the end, electrons happen to be negative and electrons are what moves in most electronic circuits. Should we change the current arrow to point where negative charge is going, and redefine the charge on an electron to $+$? It's possible, but... Naa. 

This little quirk only bugs two groups of people: new learners for about a week, and crabby engineers who like to complain about everything.

I think Franklin's "mistake" is no mistake at all. It's actually a gift to every engineer and student. It means we really get to---have to---understand and appreciate charge and current.  

## Advice

Rather than getting stuck trying to ponder what this all means, my advice is to move ahead and learn about Ohm's Law and resistor circuits. Ohm's Law is based on the conventional current direction. You use Ohm's Law to do resistor problems and get the right answer for voltage and current. Your answers will match what you measure with a multimeter. At the beginning, you can also picture in your mind how electrons move through a circuit. After a few problems you will start to focus on conventional current direction and you will think less and less about electron current, I promise.  
