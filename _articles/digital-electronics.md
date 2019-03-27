---
layout: article
title:  "Digital electronics"
author: Willy McAllister
comments: true
---

Digital design is based these fundamental concepts,

* Simplicity
* Abstraction
* Discipline
* Intent

Written by Willy McAllister.

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

## Simplicity

Digital information is represented by two states. The two states go by a lot of names: true/false, 1/0, yes/no, on/off. The key idea is two states---not one, not three, not more---two. We use all of these names at different times. (There is also a state called *don't know* or *don't care* that we get to later.)

There are three ways to combine states, using the operators AND, OR, and NOT.  
You can count XOR (exclusive OR) as a 4th operator. This is what logic *gates* do.

The method for reasoning about logic is called *Boolean algebra*. Boolean algebra is how we express our digital thoughts.

You will learn how to build electronic circuits with two states. The states are represented by two distinct voltage levels. (We could design circuits with more than two voltage levels, but they are never as reliable as two-state circuits. Simplicity wins.) 

Simplicity allows designers to exercise extraordinary creativity. Like how writers use $26$ characters of the alphabet to capture all of human thought. 

## Abstraction

*Abstraction* means a lot of things. An abstract painting represents an idea rather than a thing. An abstract idea might be unclear or a fuzzy high-level concept. In digital electronics abstraction refers to precise layers of ideas. Abstraction encapsulates something complicated and presents it as a single idea. Abstraction is what lets us create and manage systems of immense complexity.

You already know abstraction even if you don't call it that,

Writing. There are 26 letters in the alphabet. We group letters together into words. "Words" is the first level of abstraction. When you look at the word "alphabet" you don't think, "There is 8 letters in a row." Instead, you see 1 recognizable word. Words are grouped into sentences, sentences into paragraphs, then chapters, and then a book. You know what to do with a book because you are familiar with the levels of abstraction. When you open a book you know how to operate it. You concentrate on how the author presents an interesting never-before seen idea. 

Cars. Cars have thousands of parts. Each part has a job to do. Tires push on the road, windows stop the wind, gears connect the engine to the wheels. Individual parts are organized in layers of abstraction: the drive train, steering system, interior, electrical system, etc. The final layer of abstraction is a "car." A car is a layer cake of abstractions. By presenting a car this way to you successfully get where you are going without thinking about all x-thousand parts. 

There are two critical features of the car abstraction,

* A whole lot of parts are reduced to one word, like *engine*. Abstraction is a way to manage complexity by grouping.
* To drive a car you have to be trained. Part of that means you learn about the abstraction layers of a car. Once you are trained---you get your license---the abstraction is so effective you *concentrate on what you want to do*. Your eyes and mind don't focus on how the car works, but on your objective---arriving safely where you want to go. An occasional glance at the instrument panel is all you needed to know the car is okay. Abstraction simplifies complicated things.

## Layers of abstraction

Digital systems are layer upon layer of abstraction,

* Physical
  * Matter
  * Transistors
* Circuit
  * Digital circuit
  * [RC step response](/t/topic-natural-and-forced-response.html#rc-step-response), [RLC step response](/t/topic-natural-and-forced-response.html#rlc)
  * Integrated circuit
* Logic
  * Boolean algebra, deMorgan's theorem
  * Meaning: numbers, letters, and commands
  * Functions (flip-flops, adders, counters)
  * Operations (arithmetic, memory, registers)
* Digital system design
  * Making a digital system "run" 
  * Computer architecture
* Firmware and software

The physical and circuit layers are fairly involved topics that take focused study. But starting with the Logic abstraction layer most ideas are relatively simple.

## Discipline

Discipline refers to your ability to stick to a set of digital design principles. You force yourself to suppress creativity in certain aspects of design, and in return, your designs can be easily understood by others, AND, best of all, you reduce the number of errors in your design. There are zillions of ways to throw around transistors and logic gates, but you should learn good quality design patterns and stick to them. 

Some of the ideas are simple,

* Signals should flow from left to right.
* Put inputs on the left and top, and outputs on the right and bottom.

Some of the ideas are not so simple,

* Create signal names that reflect your *intent*. 
* Use DeMorgan equivalent symbols to reflect your *intent*. (This is my all-time favorite digital discipline.)

We will come across several more principles as we go along.

## Intent

The whole purpose of digital design is to communicate what your circuit is supposed to do. The goal is to capture your *design intent*. Your want your drawings or code to clearly capture your design intent. 

It is not hard to create an obscure design that works perfectly. But, if it is not clear how it works to others (or to yourself a few weeks from now), it is a poor design. A poor design is brittle, it breaks when changed. A poor design is almost impossible to transfer to another person and its very hard to include it in a larger design.

You want your design intent to leap off the page. If it does not, keep redrawing or rewriting it until it does. In the process you will discover errors of logic and intent that were not apparent in the original.

## Learning strategy

As you study digital electronics your goal is to 
* learn the relatively simple ideas 
* build up the layers of abstraction in your head

The following articles describe digital ideas simply. It may seem terse, but I prefer to think of them as concise. Simple ideas should have simple explanations, don't you think? 

When I studied digital electronics in college a wise person, my TA (teaching assistant), said the goal is to fill your head with a "trash bin" of digital ideas and pull them back out as you need them. We begin in the middle of the hierarchy with logic. Then we'll go back and figure out how to get electronics to do logic.

## Summary
{:.no_toc}

Simplicity and abstraction are pillars of digital design.
