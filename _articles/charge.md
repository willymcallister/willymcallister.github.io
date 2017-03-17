---
layout: article
title:  "Charge"
author: Willy McAllister
comments: true
youtubeID: HpipBkRMm8U

---

# Draft

Electricity begins with the concepts of *electric force* and *charge*. 

* Will be replaced with the ToC
{:toc}

----

### Where we're headed 
{:.no_toc}

* A good way to understand charge is to follow its historical development. You will learn why the idea of charge came about, and how historical twists created some oddities that we still get to deal with as electrical engineers. 

* We explain the existence of an electric force by saying that objects have *charge*. We don't know why this force exists, but we can describe it and harness it for our own needs.

* There are two types of charge. Ben Franklin gave us the names we use for charge. He called the two types Plus and Minus. The same (like) charges repel each other, and different (unlike) charges attract each other.

* Charles Augustin de Coulomb worked out how the electric force works. His experiment showed that the size of the electric force is proportional to the product of the two charges involved $(q_1, q_2)$, and inversely proportional to the square of the distance between the charges. This is called Coulomb's Law.

    $F_e \propto \dfrac{q_1 \, q_2}{r^2}$

* The smallest unit of charge exists in two sub-atomic particles, the electron $(-)$ and the proton $(+)$. The amount of charge is identical, with opposite signs. The assignment of $-$ and $+$ traces its history back to Ben Franklin, based on experiments he did 150 years prior to the discovery of the electron.

* You can specify a specific amount of charge in two ways, in units of coulombs or as a number of electron charges. 

* The international standard unit for an amount of charge is the coulomb. The standard defines $1 \,\text{coulomb} =$ the amount of charge that moves past a point when the current is $1\,\text{ampere}$. 

* The charge on an electron, $e^-$, is this tiny number of coulombs: $0.00000000000000000016021766208$ coulombs. We can write this in scientific notation more simply: $e^- = 1.602 \times 10^{-19}$ coulombs. Turning this around, we can express a coulomb in terms of the charged contained in some number  of electrons, $e^-$. One coulomb is the combined charge of $6.24 \times 10^{18}$ electrons.


----

## Amber

I want to start at the very beginning, like 5000 years ago. For the moment, pretend you never heard the words charge or electricity, and forget you know anything about atoms. 

Around 5000 years ago, the Egyptians knew that if you touched an eel it could give you a shock. They didn't know why it happened, but they used to tell sick people to touch eels to make them feel better. This very first practical application of electricity was in medicine.

Back in those days, the Greeks made jewelry out of a pretty stone called amber. Amber isn't really a stone, it is fossilized resin from trees. Resin is a goopy substance trees make as a defense mechanism to fight off insects and cover wounds like when a branch gets broken. When this goopy stuff drips from the tree it might eventually turn into a solid and get the name amber. Amber is basically nature's version of plastic.

![ant in amber]({{ site.baseurl }}{% link i/0-5ant_in_amber.jpg %}){: .centered }

So Egyptian or Greek aristocrats wearing their amber jewelry would pet their cats. They noticed light things like feathers or their own hair were attracted to the amber. Today we have a fancy official word for it, the *triboelectric effect*. "Tribo-" is the Greek word for "rub", so you can call it the ["rubbing-electric" effect]({{ site.baseurl }}{% link _videos/triboelectric-effect.md %}).

You can create the same effect by running a plastic comb your dry hair or rubbing a balloon on your sweater.

The Greek word for amber is ἤ λ ε κ τ ρ ο ν. 

| ἤ | λ | ε | κ | τ | ρ | ο | ν |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| eta | lambda | epsilon | kappa | tau | rho | omicron | nu |
| e | l | e | k | t | r | o | n |
{: .zebra }

I bet you can guess what we use this word for. 

## Making sense of electric force

So we have these observations of nature: rubbing cats or balloons. We observe this wierd force, sometimes attraction, sometimes repulsion, depending on what was rubbed against what. So from the very beginning we could tell there were two kinds of electric force, attraction and repulsion. Wierdest of all, it seems like the force acts at a distance: The two objects don't have to be touching, but yet we see this obvious pushing or pulling force between them. This is super strange (and super fascinating). 

<details>
<summary>Is rubbing cats the same as magnetism?</summary>
<p>This rubbing force seems kind of like magnetism, which has the same <em>force at a distance</em> property. But electric force has to come from a different place. Magnetism is a property of certain kinds of rocks called lodestones (a rock that contains iron). This electric force comes from the friction between amber and cat and has nothing to do with iron.

Later in your study of electrical engineering or physics, you will learn that electricity and magnetism are very closely related and intertwined. When these ideas come together it's called *electromagnetism*, which is responsible for light and radio waves. 
</p>
</details>

The best explanation anyone has come up with (so far) to explain what's happening is: Physical objects (matter) displaying this electric force do this because they possess a property called **charge**. 

<details>
<summary>What is a "property" of matter? 
</summary>
<p>Matter has a number of properties: its mass, color, volume, squishyness. These properties are not little things that are inside the matter, they are asects of the matter itself. When an object attracts or repels other nearby objects we say it is because it has the property of *charge*. Charge is not some little tiny piece of stuff tucked inside atomic particles, it is a property of those particles.
</p>
</details>

## Ben Franklin

In 1752 1750? Ben Franklin nearly killed himself while flying a kite in a thunderstorm. He showed that lightning was indeed made of electricity (he could tell it gave off sparks.)

Great! Now we know why there is electric force. It's because objects have charge. Next question: what is charge? Uhh...

To this day, we have no idea why this rub-the-cat electric force exists, just like we don't know why gravity exists. It just does. We don't even know if charge is real, or just some story we made up to make us feel less dumb. And the whole "acting at a distance" thing never made anyone happy. Fortunately, we are certain this force exists, that's for sure, and we've come up with a good way to describe it (Coulomb's Law). Best of all, we've come up with all sorts of cool things we can do with it. That is what electrcial engineers do. We make useful stuff because we understand the effects of charge and electric force. Electrical engineers can't explain the "why's" any better than physicists or philosoplers, but we are especially good at building things that exploit the ideas of charge and electric force.

## Charles Augustin de Coulomb

Even if we can't explain *why* there is electric force, we can describe *what it does*. The first person to do a good job of that was French physicist [Charles Augustin de Coulomb](https://en.wikipedia.org/wiki/Charles-Augustin_de_Coulomb), in 1784. (The electron was discovered in 1897 by [J.J. Thomson](https://en.wikipedia.org/wiki/Electron#Discovery), so Coulomb was working with the idea of charge without knowing about electrons or protons or even atoms) a century before this was worked out. Imagine how mind-bending this was.)

Coulomb invented a very sensitive instrument to measure electric force. His *tortion balance* was based on twisting a fine wire. It could measure the attraction or repulsion of charged objects based on how much the for caused the wire to twist. Remember, he didn't know about electrons, so his reasoning had to be somewhat abstract. One object had "some charge" and was attracted to another object with "some charge". He could not measure how much charge an object had, but he was quite smart about being able to accurately create charged bodies. For example, you start with two balloons with no charge. You can tell they are uncharged because they don't attract or repel anything. Now charge up one balloon by rubbing it on your sweater. It now has some charge, let's call it $q$ charge. ($Q$ or $q$ is the variable name Coulomb used for charge, and we still do today.) Now, if you touch the charged balloon to the uncharged balloon, they will share $q$ between them. You end up with two balloons each charged the same, $q/2$. Now you can do experiments with $q/2$ balloons plus other uncharged balloons. 

Charging objects like this, Coulomb demonstrated that the force is proportional to the amount of charge on each object and is inversely proportional to the square of the distance between them $(1/r^2)$. We call that Coulomb's Law. We go into a lot more detail in [this article](https://www.khanacademy.org/science/electrical-engineering/ee-electrostatics/ee-electric-force-and-electric-field/a/ee-electric-force).

The point of this story is that Coulomb accurately described the electric force without knowing about electrons, and without knowing how to measure charge other than precise ratios. What a smart guy. 

Check out this fantastic 1959 educational video where Professor Eric Rogers from Princeton University demonstrates electric force. Watch how he transferrs charge from his "charging arrangement" machine to one balloon and shares that charge with another.

<div class="video-frame">
    <iframe frameBorder="0" width="{{site.data.video.width}}" height="{{site.data.video.height}}" src="https://www.youtube.com/embed/{{page.youtubeID}}{{youtubeOptions}}" allowfullscreen></iframe> 
</div>

##Electron

The smallest unit of charge exists in two sub-atomic particles, the electron $(-)$ and the proton $(+)$. The amount of charge is identical, with opposite signs. The mass of electron and proton differ by $1000\times$, but their charge is identical. Nature made it that way. 

A very noticeable thing about electric force is that it is large, far greater than the force of gravity. Unlike gravity, however, there are two types of electric charge. Opposite types of charge attract, and like types of charge repel. Gravity has only one type: it only attracts, never repels.


## Coulomb
from KA learner ccmiint
First lets look at the coulomb then we will look at the ampere. Because electrons are so small and it would be difficult to measure individually, we have put 6.28 billion billion electrons into a unit called a coulomb. I like to think of it as a gallon of water. There are a lot of individual water molecules in a gallon, and you could imagine it would be impossible to measure water by molecules. So a gallon is just a convenient, and a standard measurement of all those billions of individual water molecules just like the coulomb is for electrons. And the ampere is a rate which is equal to 1 coulomb per second or 6.28 billion billion electrons moving past a point per second. So in terms of water, one gallon of water moving past a point per second.

* The charge on an electron is a tiny unwieldy number. $0.00000000000000000016021766208$ coulombs. Rather than writing all those zeros—and getting it wrong most of the time—we can use scientific notation to write the number more simply: $1.6021766208 \times 10^{-19}$ coulombs. 

<p>
<details>
<summary> What is a coulomb?</summary>
<p>The <strong>coulomb</strong> is the Système International d'Unités (SI) unit for an amount of charge. $1$ coulomb of charge flows past a point in a wire in one second when the current in the wire is $1$ ampere.
$1 \,\text{coulomb} = 1 \,\text{ampere flowing for} \, 1 \,\text{second}$</p>

<p>In terms of electrons, $e^-$, one coulomb is the combined charge of $6.24 \times 10^{18}$ electrons.
</p>
</details>
</p>


Photo credit: ant in amber: https://commons.wikimedia.org/wiki/File:An_ant_in_amber.jpg

Video credit: https://archive.org/details/coulombs_law