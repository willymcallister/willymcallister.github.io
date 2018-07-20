---
layout: article
title:  "Electric field"
author: Willy McAllister
comments: true
---

Under construction.

Coulomb's Law describes forces acting at a distance between two charges. We can reformulate the problem by breaking it into two distinct steps, using the concept of an *electric field*.

* Think of one charge as producing an *electric field* everywhere in space. 
* The force on another charge introduced into the electric field of the first, is caused by the electric field *at the location* of the introduced charge.

Written by Willy McAllister. 

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

If all charges are static, you get exactly the same answers with electric field as you do using Coulomb's Law. So, is this going to be just an exercise in clever notation? No. The electric field concept comes into its own when charges are allowed to move relative to each other. Experiments show that only by considering the electric field as a property of space that propagates at a finite speed (the speed of light), can we account for the observed forces on charges in relative motion. The electric field concept is also essential for understanding a self-propagating electromagnetic wave such as light. The electric field concept gives us a way to describe how starlight travels through vast distances of empty space to reach our eyes.

If the idea of force "acting at a distance" in Coulomb's Law seems troublesome, perhaps the idea of force caused by an electric field eases your discomfort somewhat. On the other hand, you might also question if an electric field is any more "real". The reality of an electric field is a topic for philosophers and physicists. In any case, real or not, the notion of an electric field turns out to be really useful for predicting what happens to charge. 

We ease into electric fields by starting with static charges, to get practice with the method of analysis.

## Electric field

The electric field $\vec E$ is a vector quantity. It has magnitude and direction. The electric field exists at every point in space. That's the reason it is called a *field*. 

The electric field at a location indicates the force that *would* act on a unit positive test charge *if* placed at that location.

The electric field is related to the electric force that acts on an arbitrary charge $q$ by,

$\vec E = \dfrac{\vec F}{q}$

The dimensions of electric field are newtons/coulomb, $\text{N/C}$. 

We can express the electric force in terms of electric field,

$\vec F = q\vec E$

For a positive $q$, the electric field vector points in the same direction as the force vector.

The equation for electric field is similar to Coulomb's Law. We assign one of the $q$'s in the numerator of Coulomb's Law to play the role of *test charge*. The other charge(s) in the numerator, $q_i$, create the electric field we want to study.

$\text{Coulomb's Law: }\qquad\vec F = \dfrac{1}{4\pi\epsilon_0}\,\dfrac{q\, q_i}{r^2}\,\hat r_i \qquad\text{newtons}$

$\text{Electric field: }\,\,\,\,\vec E = \dfrac{\vec F}{q} = \dfrac{1}{4\pi\epsilon_0}\,\,\,\,\dfrac{q_i}{r^2}\,\hat r_i \qquad\text{newtons/coulomb}$

Where $ \,\hat{r_i}$ are unit vectors indicating the line between each $q_i$ and $q$.

## How to think about electric field

The electric field is normalized electric force. Electric field is the force experienced by a test charge that has a value of $+1$.

One way to visualize the electric field (this is my mental model): imagined small positive test charge glued to the end of an imaginary stick. (Be sure your imaginary stick doesn't conduct, like wood or plastic). Explore the electric field by holding your test charge in various locations. The test charge will be pushed or pulled by the surrounding charge. The force the test charge experiences (both magnitude and direction), divided by the value of the small test charge, is the electric field vector at that location. Even if you take away the test charge, there is still an electric field at that location.  

            "explanation 2": {\
                "type": "explanation",\
                "alignment": "default",\
                "static": false,\
                "graded": true,\
                "options": {\
                    "static": false,\
                    "showPrompt": "why is the test charge positive?",\
                    "hidePrompt": "hide",\
                    "explanation": "The conventional test charge for measuring electric field is $+q$, so it resembles a proton. If you like, you may also perform this thought experiment with an electron. Since the test electron has a negative charge, the resulting force is in the opposite direction of the electric field vector.


## Electric field near an isolated point charge

The electric field around a single isolated point charge, $q_i$, is given by, 

$\vec E = \dfrac{1}{4\pi\epsilon_0}\,\dfrac{\text q_i}{r^2}\,\hat r_i$

The electric field direction points straight away from a positive point charge, and straight at a negative point charge. The magnitude of the electric field falls off as $1/r^2$ going away from the point charge.

![](https://ka-perseus-images.s3.amazonaws.com/6db3d4851432e3cded684cd6748f779fea347f52.svg)


## Electric field near multiple point charges

If we have multiple charges scattered about, we express the electric field by summing the fields from each individual $q_i$,

$\displaystyle \vec E = \dfrac{1}{4\pi\epsilon_0}\sum_i\dfrac{\text q_i}{r^2} \,\hat{r_i}$

The summation is performed as a vector sum. 

## Electric field near distributed charge

If charges are smeared out in a continuous distribution, the summation evolves into an integral.

$\displaystyle \vec E = \dfrac{1}{4\pi\epsilon_0}\int\dfrac{\text dq}{r^2} \,\hat{r}$

Where $r$ is the distance between $\text dq$ and the location of interest, while $\hat r$ reminds us the direction of the force is in a direct line between $\text dq$ and the location of interest. We will see examples of this integral in two upcoming articles.

The discussion above defines the electric field. There isn't any new physics, we've just defined some new terms. Now we're ready to move on and use the electric field formulation to analyze two common real-world geometries: the line of charge, and the plane of charge.


## Reference
{:.no_toc}

Kip, A. H. (1969), *Fundamentals of Electricity and Magnetism* (2nd edition, McGraw-Hill)