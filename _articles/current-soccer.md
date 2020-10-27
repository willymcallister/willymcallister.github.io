---
layout: article
title:  "Soccer current"
author: Willy McAllister
comments: true
---

Visualize electric current with an analogy to soccer players.

Written by Willy McAllister.

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

## Soccer teams

Two soccer teams are playing a match. One wears red, one wears blue. At the beginning of the second half, the teams exchange ends of the field.

Before the second half starts, each team gathers near the goal they defended in the first half. Then the referee blows his whistle and directs them to change ends of the field to get ready for the second half. 

You stand at the side of the field next to the half line. As you look down the half line you see blue players moving one way and red players moving the other way. You observe all the players crossing the half line. That is a *current* of players. You count players as they cross the line. A blue player crossing the line counts 1, and a red player counts 1, even though the red player is moving the other way. All players count when figuring out current. 

By the time the teams have taken their new side, all 22 players have changed sides. Suppose it took 10 seconds for all the players to cross the half line. During the time they are crossing over the current would be 22 players per 10 seconds or 2.2 players per second. After all 22 players cross the line the current you measure at the half line is 0. 

## Unit of soccer current --- the collina

Let's create a new unit for soccer current. We'll call it a *collina* in honor of referee [Pierluigi Collina](https://en.wikipedia.org/wiki/Pierluigi_Collina). We define 1 collina to be 1 soccer team / minute flowing past an arbitrary point. 

What was our soccer current measured in collinas? 

$1\,\text{collina} = 1 \,\text{team/minute} = 11 \,\text{players/minute}$

We have $22$ players in $10$ seconds. What's that in $\text{collinas}$? First, convert seconds to minutes,

$22 \,\dfrac{\text{players}}{10 \,\text{seconds}} \times 60 \,\dfrac{\text{seconds}}{\text{minute}} = 132 \,\dfrac{\text{players}}{\text{minute}}$

Then convert to collinas,

$132\,\dfrac{\text{players}}{\text{minute}} \raisebox{-0.25em}{\Large \,/ }\normalsize \,\dfrac{11\,\text{players/minute}}{\text{collina}} = 12 \,\text{collina}$

The soccer current in our example is $12 \,\text{collina}$.

This analogy is a pretty silly but it illustrates how to measure unlike players/charges moving in opposite directions.

## Attract and repel

There's one thing we can add to our analogy to make it more like electric current. 

You know the main property of electric charges: like charges repel, and unlike charges attract. Our soccer players don't do that. In fact they probably do the opposite. Players are friends with other players on their own team, and don't hang out with players from the other team. Charges do the opposite.

Let's make up a rule to make soccer players more like charges,

* Players *don't like* players on their own team. They stay apart (repel). 
* Players *like* players on the other team. They hang out together (attract).

Let's do some thought experiments.

First, imagine there is one team on the field. What happens when the referee toots his whistle to change ends of the field? They all start trotting down the field and at the same time move away from each other. Some players end up near both sidelines. Other players space out all across the field. 

Second, put both teams on the field, but no referee. If there is no referee to boss them around what would happen? Both teams would spread out across the field. Players move away from their teammates and go hang out with someone on the other team. You would see pairs of players spread out all over the field. If they were charges, they would be paired. Every $+$ finds a $-$ and becomes neutral.

Now the referee shows up. He blows his whistle and shouts, "I mean it! Go to your respective ends!" The referee is the voltage in this analogy. He's the pressure that makes players/charges move. The players end their chit-chat and move off in the direction they are told. Along the way a red player might come near a blue player and they have a little interaction, but the referee expects players to keep moving. 

![Manchester (red) vs. Chelsea (Blue)]({% link i/manchester-chelsea.jpg %}){: .centered }

Manchester United's Wayne Rooney and Chelsea's Didier Drogba have a chat. (FA Cup Final 2007 - Photo by Neal Simpson - EMPICS/PA Images via Getty Images)
{: .caption :}

If you can envision this movement in your head then you have a good idea of what current looks like in a wire at the atomic level.

## Uphill both ways

Why does something move? Why does anything move? When you think about it from an energy standpoint, things move because they spontaneously go from a state of high energy to a state of lower energy. 

If you plot energy on a vertical axis, a particle moves "downhill" on the plot, that is, toward a state of lower energy. That's why it is easier for you to walk down a real hill compared to walking up. And it takes less effort to drop a book compared to picking one up. Chemists make plots like this to describe chemical reactions. When something bursts into flames or explodes that chemical reaction moves downhill rapidly.

When charges move they do so because they "want" to move to a state of lower energy. If you place an electron near a positive charge and let it go, it moves toward the positive charge. That direction is "downhill" from the viewpoint of the electron. If you hold the electron still and let go of the plus charge, it moves toward the electron. Moving in that direction is downhill from the perspective of the plus charge. 

So which way is downhill for electric charge? It's downhill both ways! Electrons have one view of downhill, and at the same time positive charges have the opposite view. This is strange to think about. We never experience downhill both ways in our everyday life. There are no special mountain ranges that are easier to walk up. But for electric charges, it's how things are. 

## Energy diagrams

We don't often draw energy diagrams in beginning electronics. It's hard to draw two downhills on a single graph. If positive charge rolls down the page then electrons roll up the page (up is downhill for an electron). Too weird. 

In the video on [visualizing voltage]({% link _videos/voltage.md %}) I draw a mountain as an energy diagram. I'm careful to only mention electrons rolling down the mountain and avoided talking about positive charge spontaneously rolling uphill. 

![Voltage is analogous to elevation]({% link i/basic_voltage_analogy.svg %}){: .centered }{: height="200px" :}

The gravity analogy for voltage is fine for talking about one type of charge, but struggles if you include both.

When you study semiconductors we use energy diagrams to understand how they work. That's a fairly advanced topic. By that time you will be deep enough into electronics that you can deal with two downhills. 
