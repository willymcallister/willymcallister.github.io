---
layout: article
title:  "Three point charges - worked examples"
author: Willy McAllister
comments: true
---

We use Coulomb's Law to compute the force on a charge from two nearby charges. 

Written by Willy McAllister. 

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

----

### Where we're headed 
{:.no_toc}


----

When you have more than two point charges pushing and pulling on each other, you figure out the force between pairs of charges, and add them up with vector addition. If you have three charges, you may think the presence of the third charge in the neighborhood might modify or disturb the the force between the other two. Nope, that does not happen. All the forces are independent, and they combine together by superposition.

If you have $N$ different point charges surrounding a test charge $q_0$, you add up all the force vectors,

$\displaystyle \bold{\vec F_N} = \sum_{n=1}^N \dfrac{1}{4\pi\epsilon_0}\dfrac{q_0\,q_n}{r_{0n}}\,\bold{\hat r_n}$

$\epsilon_0 = 8.85 \times 10^{-12}$ coulomb$^2/$newton-meter$^2$

$\dfrac{1}{4\pi\epsilon_0} = 9 \times 10^{9}$ newton-meter$^2$/coulomb$^2$

The first example has three charges arranged in a simple geometry. We'll do this simple one first to show how forces add. Then we'll do a second example with a more challenging geometry.

## Example 1 force between three point charges



## Example 2 force between three point charges

We set up three charges on the vertices of a $30 ^{\circ}-60 ^{\circ}-90 ^{\circ}$ triangle. $q_2$, with the dark outline, is our test charge.

![](https://ka-perseus-images.s3.amazonaws.com/f8c19c97810654848c2ef972b7acbb55b115a33c.svg){: .centered :}

Now assign some values to the charges (coulombs) and spacing (meters),

![](https://ka-perseus-images.s3.amazonaws.com/04dd09d7cb02f4fdeab0b998f5bb89c092eb1f5f.svg){: .centered :}

#### Find the force (magnitude and direction) on $q_2$, the $+3 \,\text C$ charge.

Compute the force between each pair of charges. In this example there are two force vectors to think about, {$q_0$ to $q_2$}, and {$q_1$ to $q_2$}. The individual force vectors are on a direct line between the charge pairs.

![](https://ka-perseus-images.s3.amazonaws.com/5aa9b72d556aa9534d4798ecae70bf1ab6a701ba.svg){: .centered :}

We'll use $K$ as the proportionality constant. Apply Coulomb's Law to compute the force. 

>When we do Coulomb's Law problems, it is a good idea to manage the magnitude of the force and its angle/direction separately. 

The magnitudes of the forces are,

$F = K \,\dfrac{q_0\, q_1}{r^2} $

$\blueD{F_{02} = K \dfrac{4 \cdot 3}{(\sqrt{3})^2} =  K \cdot 4\qquad}$force on $q_2$ from $q_0$ (repels)

$\greenD{F_{12} = K \dfrac{1 \cdot 3}{( \,\,1\,\, )^2} = K \cdot 3\qquad}$force on $q_2$ from $q_1$ (attracts)

We have solved the magnitudes of the pairwise forces.  
The final step is to perform a vector sum to get the magnitude and direction of the final force vector.

![](https://ka-perseus-images.s3.amazonaws.com/485962c9850a31690a3f483af48c5a921991688e.svg){: .centered :}

The force vectors form the sides of a 3-4-5 right triangle.  
The magnitude of the resultant force is,

$F_2 = K \cdot \sqrt{3^2 + 4^2} = K \cdot 5$

Figure out angle $\angle \vec F_2$ by counting degrees from horizontal, starting at $q_0$ (the $4\,C$ charge),

Interior angles of our two triangles,

![](https://ka-perseus-images.s3.amazonaws.com/59e34fb546cc24ddcbc83c8d8a7fe42b7ee68df8.svg){: .centered :}

The angles of the 3-4-5 triangle come from,  $\arcsin( 4 / 5 ) = 53.13 ^{\circ}$  and $\arcsin( 3 / 5 ) = 36.86 ^{\circ}$ 

Merging the triangles together shows how the angles combine (blue arrows):

![](https://ka-perseus-images.s3.amazonaws.com/d7308b3a9b8ef04fc061b1ef5ca674680c03ac00.svg){: .centered :}

The $30^{\circ}$ angle gets a negative sign because it is rotating clockwise, while the $36.9^{\circ}$ angle adds with a positive sign because it is rotating counterclockwise.  

$\angle \vec F_2 = -30 ^{\circ} + 36.9 ^{\circ} = +6.9  ^{\circ}$

Combining the magnitude and angle, the force $\vec F_2$ on $q_2$ in newtons is, 

$\vec{F_2} = K \cdot 5 \,\angle \,6.9^{\circ}$

$\vec{F_2} = (9 \times 10^9) \cdot 5 \,\angle \,6.9^{\circ}$

$\large \vec{F_2} = 4.5 \times 10^{10} \,\angle \,6.9^{\circ}\,\text{newtons}$

The angles of the 3-4-5 triangle come from,  $\arcsin( 4 / 5 ) = 53.13 ^{\circ}$  and $\arcsin( 3 / 5 ) = 36.86 ^{\circ}$ 

Merging the triangles together shows how the angles combine (blue arrows):

The $30^{\circ}$ angle gets a negative sign because it is rotating clockwise, while the $36.9^{\circ}$ angle adds with a positive sign because it is rotating counterclockwise.

![](https://ka-perseus-images.s3.amazonaws.com/fd76671ef942c357c79769fbfa43da97f0afff57.svg){: .centered :}

Some things to notice about the solution: 

* The numerator is the product of the test charge and the total charge on the line, which makes sense. 
* The denominator has the form $\text{distance}^2$, created by a combination of distance to the near end and far end of the line. The $a(a+L)$ form of the denominator emerges from the particular geometry of this example.
* If the point charge $q$ moves very far away from the line, $L$ becomes insignificant compared to $a$, and the denominator approaches $a^2$. So at great distance, the line starts to resemble a far-off point charge, and as one would hope, the equation approaches Coulomb's Law for two point charges.

We'll do a few more electrostatics problems with simple charge geometries. After that, the math gets really involved, so the common strategy with complex geometries becomes: break down the geometry into simpler versions we already know how to do, then merge the answers.

## Strategies for applying Coulomb's Law

Coulomb's Law is a good choice for situations with point charges and/or simple symmetric geometries like lines or spheres of charge. 

Since Coulomb's Law is based on pairwise forces between charges, when faced with multiple (more than two) point charges, 

1. Work out the forces between each pair of charges. 
2. Finish with a vector addition to merge the pairwise forces into a single resultant force.

For a situation with distributed charge, creatively model the distributed charge as a collection of point charges,

1. Invent a little $\text dQ$ representing an infinitesimal charge within the region of distributed charge. 
2. Work out the forces pairwise between the point charge and each little $\text dQ$.
3.  Sum up the forces with an integral. This is a vector sum to get the resultant force.

### Related

[Adding vectors](https://www.khanacademy.org/math/precalculus/vectors-precalc/vector-addition-subtraction/v/adding-vectors)

### References

Kip, A. H. (1969), *Fundamentals of Electricity and Magnetism* (2nd edition, McGraw-Hill)

