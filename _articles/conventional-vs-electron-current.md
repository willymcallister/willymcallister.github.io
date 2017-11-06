---
layout: article
title:  "Conventional vs. electron current"
author: Willy McAllister
comments: true
---

One of the most confusing ideas for beginning electrical engineers is *conventional current*. This topic gets the greatest number of questions and it causes the most frustration when starting to learn about circuits. To new students this idea seems to be either a cruel practical joke or some kind of colossal mistake caused by engineering laziness. It's not. 

Written by Willy McAllister.

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

---- 

## Typical question from a motivated learner

>Early on \[in class\] it was explained that there are two theories \[for current\]: conventional theory and electron theory. Conventional theory is the original belief that electricity flows from the positive side to the negative side of a battery. Electron theory is the opposite of that and what is explained in this video ([Current]({{ site.baseurl }}{% link _videos/current.md %})). I was also told that electron theory was proved the correct out of the two; however, conventional theory is still the one used because "it works". 

>I don't understand though why when conventional theory was proved incorrect, it is still being used. It's a source of great confusion for me. Is it because the \[engineering\] world is just too lazy to make the transition from a false theory to a correct one? 

## Conventional current is not a "kind" of current

Conventional current is not an alternative "theory" for current. It is just a shared way of talking about current direction. 

The definition of current is short and simple, 

>Current is the movement of charge.

This simple definition gets interesting because electricity is two types of charge, and they move in opposite directions. If negative charge moves right, then positive charge would be move left.  

This "two types" property isn't something we come across in everyday life. For example, there is only one type of mass, and if we have two masses they are always attracted to each other, never repelled. Electricity isn't like everyday life. 

Another twist: The instruments we use to measure current (ammeters) can't tell the difference between current caused by positive charge moving one way from negative charge moving the other way. An ammeter can only report a single number when it measures current, so it gives us one number for the combined amount of positive and negative charge moving around (see the [definition of current]({{ site.baseurl }}{% link _articles/basic-quantities.md %}#current)). 

We have to make a choice about which way to indicate current direction (the sign of the number on the ammeter display). The convention (the habit) we use to indicate current direction is to say positive current is the direction positive charges move. We use this definition even if no positive charge is on the move. With this convention, the current arrow points in the direction negative charges (electrons) *come from*. 

The term "conventional current" sounds like it may be a new type of current. It would probably generate less confusion if we always said the longer "conventional current direction" with emphasis on *direction*. Whenever you see "conventional current" it is referring to the definition of current *direction*.

## Other conventions for direction

We know current in wires is carried by negatively charged electrons. Even so, we still use the convention for current direction when we talk about wires. The conventional current direction is not "false" or "incorrect" for wires. It's just a habit, like our habit of holding maps with North at the top. North at the top isn't right or wrong, it's just a habit that everybody knows. We could all put South at the top, but we don't. The conventional direction for holding maps is North at the top.

Another convention is the way sailors identify the direction of the wind. If you are a brand new sailor and the Old Swab tells you, "Arrr matey, it's a West wind a'blowin today.", you might think the wind is blowing towards the west. You say, "Oh, the west wind will blow the ship farther west by lunchtime." That's a perfectly reasonable thing to conclude if you are sailing for the very first time. But the old swab says to you, "No, matey, the sailor's convention for wind direction is to say where the wind is *blowing from*." A West wind blows *from* the west, towards the east. 

A this point you might have one of two reactions, "Oh my! You're saying there are two kinds of wind! I'm so confused! Why do you use the wrong one?". Or you could say, "Oh, thanks for telling me, Old Swab. I'll see if I can get used to that convention for wind direction. A west wind means we will have lunch farther east from here." 

## Advice

Rather than getting stuck trying to ponder what this all means, my advice is to move ahead and learn about Ohm's Law and resistor circuits. Ohm's Law is based on the conventional current direction. You can use Ohm's Law to do resistor problems and get the right answer for voltage and current. Your answers will match what you measure with a multimeter. At the beginning, you can also envision how electrons move through a circuit. After just a few problems you will start to focus on conventional current direction and you will think less and less about electron current, I promise.

## How did we get here?

This somewhat quirky definition arises from some coincidences.
* The electron (our favorite conducting particle) has a negative sign.
* We use arithmetic signs to name charge.
* Ammeters report a single number for current.

How the electron got its negative sign $(-)$: This is Ben Franklin's contribution. Around the time of his kite/key/lightning experiment he published a theory of electricity that said electricity was a single invisible fluid. If you rubbed fur and a glass rod together, one of them gained electric fluid and the other lost or lacked fluid. This led to naming the two charges $+$ and $-$. The electron was discovered $150$ years later. Folks went back and figured out the fluid-lacking material wasn't lacking anything, it actually had excess electrons. That's how the electron got its minus sign.

Buried within the electron's minus sign is another coincidence. Franklin gave the names "plus" and "minus" to the two types of charge. Those names make it seem like arithmetic is going on. It's not a bad idea. Using names from arithmetic serves us well when we see how charges combine. Opposite charges come together to give you something neutral (something that seems like it has "zero" charge). That seems arithmeticky. 

But we have lots of examples of opposites that are not based on arithmetic. On/off, up/down, North/South (like magnets), red(go)/green(stop), left/right, or even vitreous (glass-like)/resinous (amber-like). It is easy to jumble up the notion of arithmetic $+$ and $-$ charge names with $+$ and $-$ current *direction*. They are similar but not exactly the same thing.

Consider this thought experiment: If Franklin had picked "red" and "green" for the two types of charge, in school you would be taught, "Current is made up of red and green charges moving in opposite directions. Current gets a positive sign in the direction the red charge moves. In wires, only green charge is moving, but we still point the current arrow the way red charge would move." Would there be less anxiety surrounding the definition of current direction if we had chosen something besides arithmetic symbols for naming charge.  I think so. What do you think? 

Scientists assign a single number to the movement of charge, since we only get a single number from an ammeter. It would be nice if ammeters told us, "$10\,\text{mA}$ of negative charge is going that way and $1 \,\text{mA}$ of positive charge is going the other way for a total of $11\,\text{mA}$." But they don't. You just get $11\,\text{mA}$ and the rest is up to you to figure out.

The habit since forever is to track the movement of positive charge. Electrons happen to be negative and that's what moves in most electronic circuits. Does it matter? Should we point the current arrow where negative charge is going, or redefine the charge on an electron to $+$? It's possible, but... Naa. 

This little quirk only bugs two groups of people: new learners for a week or two, and crabby old engineers who like to complain about everything.

## Franklin's gift

I think Franklin's "mistake" is no mistake at all. It's actually a gift to every engineer and student. It means we really get to understand and appreciate the nature of charge and current.    
