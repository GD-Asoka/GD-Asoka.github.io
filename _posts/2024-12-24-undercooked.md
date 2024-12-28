---
title: Undercooked
layout: post
background: https://cdna.artstation.com/p/assets/images/images/008/555/002/large/antoine-collignon-bigger.jpg
subtitle: AI Design
artist: artstation.com/antoinecollignon
---

Undercooked was a student project in which I worked as the AI designer and programmer. The gameplay was inspired by overcooked. The twist in this game is the addition of an (enemy?) AI masterchef, paying homage to one of my favorite TV chefs - Gordon Ramsey. Players must make the recipe shown on screen, without making any mistakes. If chef Ramsey catches you making one, he will stop in your tracks for a few seconds, giving your opponent time to score more points. You can also mess with your opponent by messing up their recipe and even stealing their food if they're not paying attention!
<figure>
  <img src="/img/TCoSP.png" alt="Tutorial" width="800">
  <figcaption>Tutorial Level</figcaption>
</figure>
For Ramsey's AI, I created a behavior tree in Unity using C#. The advantage of using a behavior tree over a state machine is how it can used for more complex AI behavior, but with simpler code. The base scripts however are more complicated to create compared to enums, but once you have the scripts for the Selector, Sequence, Task and Check nodes, you are good to go. It is also much more optimal to prioritize one behavior over another.
<p>
For comedic effect, I scoured the internet for hilarious voice lines from Ramsey from the millions of shows he's been on, from Hell's Kitchen to MasterChef. And of course, I had to censor most of them! If he cathches you making a mistake, he will stop you and yell at you for a few seconds, then his AI will go on cooldown for some time.
</p>
<p>
 <a href="https://tomblack.itch.io/chroniclesofstickypete" target="_blank">Please try out the game here!</a>
 </p>
 <p>
 <a href="https://docs.google.com/document/d/1Ut-r1nERe2-Njsdsv3ahboaLMFccejxzuX55LbY6WnA/edit?tab=t.0#heading=h.ttg9rgu8m2bj" target="_blank">Check out the Game Design Document here!</a>
 </p>