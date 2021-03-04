---
layout: article
title:  "Logic"
author: Willy McAllister
comments: true
---

Digital electronics is based on the ancient philosophy of *logic*. 

Logical variables are two-valued, or *binary*---either true or false. 

Logic variables are combined with a short list of *operators*---AND, OR, and NOT. 

We represent logic several ways---with equations, symbols, and truth tables.

Written by Willy McAllister.

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

## Background 

Logic is a branch of philosophy. In 300 BCE the philosophers Plato and Aristotle sat around with their buddies and asked questions about truth. They tried to prove a series of statements were either true or false,

Arnie likes round things.   
Apples are round.  
Therefore Arnie likes apples. 

All squares are rectangles.  
All rectangles have four sides.  
Therefore all squares have four sides.

Philosophers studied the nuances of true and false. They organized logic into categories and entertained each other with logic puzzles. This went on for hundreds of years.

In the mid-1800's English mathematician George Boole demonstrated how logic could be described with just three terms, AND, OR, and NOT, and he described logic with mathematical notation. He invented an unusual logic system we now call Boolean algebra. People found this interesting, but for the next hundred years it was viewed only as a philosopher's amusement. 

In 1934, an MIT student named [Claude Shannon](https://en.wikipedia.org/wiki/Claude_Shannon) spent a summer at Bell Telephone Laboratories as a student intern. His job was to babysit a complicated analog computer called a [differential analyzer](https://en.wikipedia.org/wiki/Differential_analyser). He had taken a philosophy class at MIT and learned about Boole's logic. While watching the machine work for hours on end, Shannon made the connection between logic and electrical circuits. That realization is a key moment in the history of the digital world we live in today.

## Boolean logic

Now we define the abstract notions of Boolean Logic. Don't worry how circuits actually do this. We'll get to that soon.

### Variables

In Boole's system a *logical variable* is allowed to have two values, TRUE or FALSE, abbreviated as T and F. We often indicate TRUE with the symbol 1 and false with 0. Don't think of 1 and 0 as numbers---yet---just think of them as two distinct symbols that are easy to tell apart.

{% capture summary %}Some variables are Boolean, some are not.{% endcapture %}
{% capture details %}  
Not everything can be modeled as a Boolean variable. For example,

"What day is it?"

is not TRUE or FALSE because it has seven possible answers (Sunday, Monday, Tuesday, Wednesday ...). However, if we ask a slightly different question,

"Is today Friday?"

this can be modeled as a Boolean variable because the answer to this question is either TRUE or FALSE.
{% endcapture %}{% include details.html %} 

### Operators

A *logical operator* combines logic variables and produces another. There are three operators: AND, OR, and NOT. 

#### The AND operation
{:.no_toc}

The output of AND is true if *all* of its inputs are true. 

Joe will get an good grade if he completes the work and writes his name on the page.  
Joe completed the work.  
Joe forgot to write his name.   
Did Joe get a good grade?

The way the problem statement is written suggests the AND operator. Begin by defining some logic variables,  
A = Did Joe complete the work?   
B = Did Joe write his name at the top?   
C = Did Joe get a good grade? 

Work out the values of the variables,  
A is TRUE.  
B is FALSE.    
C is FALSE because A AND B are not *both true*.

We can write the problem as a Boolean equation,

A $\cdot$ B = C $\qquad$ where the $\cdot$ symbol is one way to indicate AND.

This crisp little equation captures the entire meaning of the problem.

The AND operator can be indicated several ways in equations and programming languages,  

AB $\qquad$ A $\cdot$ B  $\qquad$ A & B  $\qquad$ A && B  $\qquad$ A $\land$ B 

We can also draw the AND function with a logic symbol,

![A AND B equals C]({% link i/logic_AND.svg %}){: .centered }

#### The OR operation
{:.no_toc}

The output of OR is true if *any* of its inputs are true. 

Lilly goes to the library on Tuesday or if it is raining.  
It is raining.  
It is Wednesday.  
Does Lily go to the library?

The problem statement suggests the OR operator. It also suggests these logic variables,  

A = Is it raining?   
B = Is is Tuesday?  
C = Does Lily go to the library?

A is TRUE.
B is FALSE.  
Therefore C is TRUE because *at least one* input is TRUE. 

We write this in equation form,

A + B = C $\qquad$ where the + symbol is one way to indicate OR.

You will see the OR operator indicated like this in equations and programming languages,

A $+$ B $\qquad$ A \|\| B  $\qquad$ A $\lor$ B  

We can draw the problem with the logic symbol for OR,

![A OR B equals C]({% link i/logic_OR.svg %}){: .centered }

#### The NOT operation
{:.no_toc}

The NOT operator works on a single input. The output is the opposite of the input. 

If A is TRUE, then NOT A is FALSE.  
If A is FALSE, then NOT A is TRUE.

It's as simple as that.

The NOT operation is referred to as *logical inversion* or *negation*. An electronic circuit that performs inversion is called an *inverter*.

You will see several different notations for the NOT operator,

$-$A $\qquad$ A$-$  $\qquad$ ~A  $\qquad$ <span class="oline">A</span>

The last one is pronounced A *bar*.

Variable names might indicate negation with n, N, *, or ! as a prefix or suffix,

nReset $\qquad$ resetN $\qquad$ reset* $\qquad$ reset!

The last one is pronounced reset *bang!* just for fun.

The symbol for an inverter introduces the *bubble* notation,

![A NOT equals A-bar]({% link i/logic_NOT.svg %}){: .centered }

The triangle shape is there so the bubble has something to attach to. The triangle is not the logic function. All the action is in the bubble.

If the input happens to be inverted, like <span class="oline">A</span>, you might want to draw the bubble on the input side of the triangle, so the bubble is on the  same side as <span class="oline">A</span>,

![NOT A-bar equals A]({% link i/logic_NOT_demorgan.svg %}){: .centered }

Both variations of the inverter symbol mean exactly the same thing. The logic input variable is inverted going through the gate. You will see why this is a good idea when we study bubble matching and logical *assertion*. 

#### The XOR operation
{:.no_toc}

The *exclusive OR* (XOR) is a variation of the OR operation. The output is true if *either but not both* of the inputs are true. Here's an example of exclusive OR in a sentence,

I would like either the pie or the cake. 

This means: I will have pie or I will have cake but I won't have both. The key word is *either*. That's what tells you the OR is the exclusive flavor. The XOR is important when we add binary numbers.

In textbooks or in writing the XOR function is a plus sign in a circle, $A \oplus B$. Most programming languages don't have a symbol for XOR---you call a library function or assemble the operation from other operators. The language C++ uses the ^ carat symbol for bitwise-XOR. You will see this in Arduino code.

The symbol for XOR is a variation on the OR symbol,

![A XOR B equals C]({% link i/logic_XOR.svg %}){: .centered }

That's the four symbols for the basic gates. We will learn a bunch more soon.

### Truth table

A *truth table* is another way to understand the logic operations. It is common to use the 1/0 notation, 1 = true, 0 = false. Again, don't think of 1 and 0 as numbers, yet. They are just two symbols easy to tell apart. A truth table lists all possible variations of the inputs and the outcome in the last column. 

The truth table for AND looks like this,

![Truth table for the AND function]({% link i/logic_tt_AND.svg %}){: .centered :}

This truth table has four rows because that's how many distinct combinations of A and B there are. (Two input variables have $2^2=4$ combinations. Three variables would have $2^3=8$ possible combinations.) For a second, think about the 1's and 0's as numbers. Notice how similar the AND function is to multiplication. That is where the notation for AND comes from, AB or A$\cdot$B. 

The truth table for OR looks like this,

![Truth table for the OR function]({% link i/logic_tt_OR.svg %}){: .centered :}

The OR function sort of resembles addition---but not quite. That's why the written form of OR is A+B.  

And the XOR truth table---the only difference is the last row,

![Truth table for the XOR function]({% link i/logic_tt_XOR.svg %}){: .centered :}

The XOR operation is closer to a true addition. It's main job in digital systems is doing the add operation.

I bet you can write out the truth table for NOT. It has two rows.

## Concept check

**Write logic equations representing these thoughts,**

Sid saw a seagull and a seesaw. 

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
Let A = seagull, B = seesaw, and C = what Sid sees. 

C = A $\cdot$ B.
{% endcapture %}{% include details.html %} 

Mary went to the store to buy apples and bananas.

Burt wants either an iPhone or a Samsung phone. 

I don't ride a bicycle. What do I ride? 

You write with a pen or a pencil. 

{% capture summary %}show answers{% endcapture %}  
{% capture details %}  
Mary bought = apples $\cdot$ bananas

Burt wants = iPhone $\oplus$ Samsung

I ride = <span class="oline">bicycle</span>

You write with = pen + pencil
{% endcapture %}{% include details.html %} 

**Create a truth table with three logical inputs.**

hint: How many rows does a 3-input truth table have?  

**Then fill in columns for the output of 3-input AND and OR.**

{% capture summary %}show answer{% endcapture %}  
{% capture details %}
3-input truth table 
![3-input truth table]({% link i/logic_tt_8row.svg %}){: .centered }

Pro tip: You want to be able to write out the input rows of a truth table really fast. Look at this truth table and find a pattern for each column that you can memorize. For example, the C column alternates 0 and 1. What pattern do you see for the A and B columns?
{% endcapture %}{% include details.html %} 

**What is the equation represented by this logic diagram?**

![a simple logic function]({% link i/logic6.svg %}){: .centered :}

{% capture summary %}show answer{% endcapture %}  
{% capture details %}
D = AB + <span class="oline">reset</span>

Extra credit: Create a truth table for this function. The 8 input rows are the same as before, with column headings A, B, reset. The output is D.
{% endcapture %}{% include details.html %} 

## Summary
{:.no_toc}

The logic operations are AND, OR, NOT (and XOR). 

In digital they mean exactly the same as their regular English meanings. 

A truth table is a convenient way to list out the result of an operator.

We haven't shown how to create these logic functions with electronic circuits, but that comes soon.

## References

["A Mind At Play --- How Claude Shannon Invented the Information Age"](https://www.amazon.com/Mind-Play-Shannon-Invented-Information/dp/1476766681), Jimmy Soni and Rob Goldman, 2017. This is a biography about one of the most influential engineers of the 20th century. You may not have heard of him, but I guarantee he has had an influence on your life.

[A Mathematical Theory of Communication - original paper](https://math.harvard.edu/~ctm/home/text/others/shannon/entropy/entropy.pdf), Claude E. Shannon, *Bell Systems Technical Journal*, Vol. 27, pp. 379–423, 623–656, July and October, 1948. This groundbreaking paper created the field of Information Theory. The term *bit* appears in print for the very first time near the end of page 1.

[A mathematical theory of communication - Khan Academy video](https://www.khanacademy.org/computing/computer-science/informationtheory/moderninfotheory/v/a-mathematical-theory-of-communication) demonstrates the information redundancy in English.
