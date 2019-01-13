---
layout: article
title:  "Soccer current"
author: Willy McAllister
comments: true
---

Visualizing electric current with an analogy.

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

You stand at the side of the field next at the half line. As you look down the half line you see blue players moving one way and red players moving the other way. You observe all the players crossing the half line. That is a *current* of players. You count players as they cross the line. A blue player crossing the line counts 1, and a red player counts 1, even though the red player is moving the other way. All players count when figuring out current. 

By the time the teams have taken their new side, all 22 players have changed sides. Suppose it took 10 seconds for all the players to cross the half line. During the time they are crossing over the current would be 22 players per 10 seconds or 2.2 players per second. After all 22 players cross the line the current you measure at the half line is 0. 

## Unit of soccer current --- the collina

Let's create a new unit for soccer current. We'll call it a *collina* in honor of referee [Pierluigi Collina](https://en.wikipedia.org/wiki/Pierluigi_Collina). We define 1 collina to be 1 soccer team / minute flowing past an arbitrary point. 

What was our soccer current measured in collinas?

1 collina = 1 team/minute = 11 players/minute

If we have 22 players in 10 seconds what's that in collinas? 

22 players / 10 seconds * 60 seconds/minute = 132 players/minute

132 players/minute / 11 players/minute/collina = 12 collina

The soccer current in our example is 12 collina.

This analogy is a pretty silly but it illustrates how to measure unlike players/charges moving in opposite directions.

## Attract and repel

In our analogy the players are acting the part of the charges. There's one thing we can add to our analogy to make it more like electric current. 

You now the main property of electric charges: like charges repel, and unlike charges attract. Our soccer players don't do that. In fact they probably do the opposite. Players on the blue team are friends with other blue players, and don't hang out with red players from the other team, and the other way around for the red team.

Let's make up a rule to make soccer players more like charges,

* Players *don't like* players on their own team. They stay apart (repel). 
* Players *do like* players on the other team. They hang out and chat (attract).

First, imagine there is just one team on the field. What would it look like when the referee tells them to change ends of the field? They all start trotting down the field, and at the same time they move away from each other. You end up with a lot of players walking down both sidelines, and only a few going down the middle of the field. (This happens in electric current. Electrons mostly travel along the outer diameter of a wire. It is called the *skin effect*.)

Second, put both teams on the field. If there is no referee to boss them around what would happen? Both teams would spread out across the field. Players would move away from their own teammates and go hang out with someone on the other team. You would see pairs of players spread out all over the field. 

When the referee has had enough of this he blows his whistle and shouts, "I mean it! Go to your respective ends!" The referee is the voltage in this analogy. He's the pressure that makes charges move. The players end their chit-chat and move off in the right direction. Along the way a red player might come near a blue player and they have a little interaction, but the referee expects players to keep moving, so they separate and keep going. 

![Manchester (red) vs. Chelsea (Blue)]({{ site.baseurl }}{% link i/manchester-chelsea.jpg %}){: .centered }
<p class="caption">FA Cup Final 2007 - Manchester United's Wayne Rooney (r) and Chelsea's Didier Drogba have a chat. (Photo by Neal Simpson - EMPICS/PA Images via Getty Images)
</p>

If you can envision this movement in your head then you have a good idea of what current looks like in a wire at the atomic level.

## Uphill both ways

Why does something move? Why does anything move? When you think about it from an energy standpoint, things move because they spontaneously go to a state of lower energy. 

If you plot energy on a vertical axis, a particle moves "downhill" on the plot, that is, toward a state of lower energy. That's why it is easier for you to walk down a real hill compared to walking up. And it takes less effort to drop a book compared to picking one up. Chemists make plots like this to describe chemical reactions. When something bursts into flames that is a rapid move downhill.

When we see charges move, they do so because they "want" to move to a state of lower energy. If you place an electron near a positive charge and let it go, it moves toward the plus charge. That direction is "downhill" from the viewpoint of the electron. If you hold the electron still and let go of the plus charge, it moves toward the electron. Moving in that direction is downhill from the perspective of the plus charge. 

So which way is downhill for electric charge? It's downhill both ways! Electrons have one view of downhill, and at the same time, positive charges have the opposite view. This is totally strange to think about because we never experience downhill both ways in our everyday life, but for electric charges it's how things are. 

## Energy diagrams

We don't often draw energy diagrams in beginning electronics because it's hard to draw opposite downhills on a single graph. On an energy graph if positive charge rolls down the page then electrons roll up the page (up is down for an electron). Too weird. 

In the article on [Voltage]({{ site.baseurl }}{% link _videos/voltage.md %}) I drew a mountain as an energy diagram. I was careful to only talk about electrons rolling down the mountain and made no mention of positive charge rolling uphill. That is something the analogy to gravity cannot represent.

When you study semiconductors we explain how they work with energy diagrams. By that time you will be deep enough into electronics that you can deal with two downhills. 
