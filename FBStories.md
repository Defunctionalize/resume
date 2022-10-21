### Describe the project you're most proud of
2 million tickets / 6 team members / projected 1.1 million -> 15 million per year with misroutes also below expectation
* What exactly was YOUR role in that project?
roadmapping AND implementation of critical features including model design and training, and production infra

###  Tell me about a conflict with a coworker / coworker was difficult to work with
*  How did you resolve the conflict?  Who else did you involve in the discussion?
We set a secondary meeting to solicit stakeholders of each team that had contractors
 and I spent the first half of the meeting championing kubernetes and its ultimate value to the organization

### Tell me about a piece of feedback you gave to a manager or peer / disagreement with manager
120 plus team members, 12 apps onboarded with 300 more in the wings
requirements given explicitly, no persona mapping.  projected to take longer than phase 2 and would likely complicate other phase 2 goals
I said for us to really contain our scope, its vital for us to understand our personas and what they need
 along with the features as planned
in this case we avoided a complex prediction model by recognizing that the primary beneficiary primarily needed a solution
to improve their response time, which we were able to accomplish with simple pattern matching using a kmeans clustered

* How did this affect future projects at your company?
* How did you measure who was right?

### Tell me about a mistake you made

* what would you have done in the future, what was the outcome


###  Tell me about a project that was over your head
* what other teams did it impact?


###  Why Facebook?



#### Describe a disagreement you had with your manager and how was it resolved
Phase one of a large scale effort of 120 plus team members with stakeholders throughout the company had just been completed
the project was an application monitoring and service health dashboard which gave red/amber/green status for each line of business,
which could then be drilled down on to find red/amber/green for each service and each region all the way down to the component level.
I was brought into a team for a phase 2 where we could use historical information to predict future outages.
We were given a set of feature specifications and I was asked to set up milestones for how we would achieve them.

I appreciated the effort in trying to provide as much information and specificity as possible in a handoff, but
this was, in my opinion, the wrong way to kick off an ML project.  In the kickoff meeting with stakeholders, after being presented this
I immediately asked to see how this tied in with our customer personae.  It turned out no formal persona analysis
had been done yet for the project.  I made a mental note and waited until the end of the deck to state my concerns, because I didnt want to solicit a conflict.
During meeting the owner expressed the strong desire to be frugal about how we achieved our machine learning goals, which I made a mental note of.

When it came time for interaction, the way I phrased it was to first congratulate them on having achieved a proof of value in phase 1 so quickly.
phase 2 could become complicated, and the way we could bypass that complexity is to understand our customers.
If we determined exactly who was using our product and what they wanted, there's a good chance we could make them happy
without model based machine learning and therefore without the sizeable cost of training, as well as the cost of complexity to the system.
 I asked the team's owner and top stakeholders to set up a meeting with me and 


it essentially turned out that our main stakeholder in machine learning was the ops team, for whom the most important
value was restoring service quickly.  We determined that simply enriching support tickets with resolutions of past failures
would be sufficient to greatly enhance their satisfaction, so the team started our mission with simple k means clustering
failure types into categories and matching failure states to previous resolutions.

The outcome of all this was the owner saw the value of formal persona mapping as a north star for project success
and we agreed to establish persona mapping as a standard for machine learning programs that would kick off in the future





#### Tell me about a difficult Problem you faced and how you solved it
**_`during the pandemic we experienced a 10x surge`_** in ticket volume and our accuracy dropped dramatically,
my job was to figure out why and implement a fix
I discovered that the model faced a cold start problem with new queues that were added as teams reorganized,
so **_`I upweighted the importance of examples of new queues`_**, proportional to their frequency since they had first been introduced.
in other words - plus a 15 day cutoff for frequency confidence

#### Describe a situation when you made a mistake, and what you learned from it.
* trying to link things with built in systems
* not retraining against recency caused challenging to diagnose performance degradation

#### Project that was failing that I turned around
* gitlab


#### Can you tell me about how you've grown people in your team?
* linux systems coaching

#### upward feedback or disagreement
* many shaped pegs same shaped hole
* gitlab in kubernetes [near end only]
* 

#### strengths
_**`Im an all rounder`**_ - I have experience in software, architecture, data science, and product - this lets me move quickly as I can anticipate
the needs of the company and execute on implementation myself, resulting in fewer rounds of iteration to achieve value.  case in point,
we***` were looking for ways to improve the models outcome (measured in f1), I knew that 25% of our tickets were not in english`***.  My intuition was that we would train better if we translated to english first.
I knew that we had an internal translation service (with no batch endpoint) in the company that we preferred for cost reasons.
_**`I was able to build a multithreaded python application`**_ to translate our training dataset and retrain the model on my own - resulting in a**` 35% boost in accuracy for non english`** tickets.


#### weaknesses
    