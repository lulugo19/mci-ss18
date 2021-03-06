# Hierarchical Task Analysis

## Description

Our Top Level User Tasks decomposed in smaller, hierarchical tasks/subtasks and actions a user currently performs/will 
perform using the current system based on paper sheets/our application. 

We made graphs for both, the current state (application based on paper sheets) and our target state (automated application)
of how tasks are done.

We found that using the Hierarchical Task Analysis outside of it's supposed use case (only modelling the current state of
how tasks are done) was very insightful for us, because it allowed us to specify plans, which helps us to model state (e.g.
transponder not available, borrower has no permission), conditions (e.g. only if borrower has permission he can borrow a 
transponder, else the gatekeeper resents the request) and descisions (e.g. borrower decides to use his/her Multica as
identification), which should make it easier to implement the different tasks/subtasks in a safe and useful manner later 
in the development proccess.




## 0. Borrow transponder


### Current state

<img src="../../static/hta-graphs/lend_transponder_cur/lend_transponder_cur.svg">

**Plan 0.3.1 current:** do 0.1-0.2. If you choose to identify with your Multica do 0.3.1 and continue with 0.4.
  
**Plan 0.3.2 current:** do 0.1-0.2. If you choose to identify with your ID do 0.3.2 and continue with 0.4.


### Target state

<img src="../../static/hta-graphs/lend_transponder/lend_transponder.svg">

**Plan 0.3.1 target:** do 0.1-0.2. If you choose to identify with your Multica do 0.3.1 and continue with 0.4.
  
**Plan 0.3.2 target:** do 0.1-0.2. If you choose to identify with your ID do 0.3.2 and continue with 0.4.


### Description

The main task a borrower does. He/she wants to use this system to gain access to a room he/she has permission to
use. 





## 1. Give/remove permission


### Current state

<img src="../../static/hta-graphs/give_remove_permission_cur/give_remove_permission_cur.svg">


### Target state

<img src="../../static/hta-graphs/give_remove_permission/give_remove_permission.svg">

**Plan 1.3/4 target:** do 1.1-1.2. If you wnat to give permssion do either 1.3 or 1.4. Continue with 1.6.1 
  and after that 1.7.

**Plan 1.5 target:** do 1.1-1.2. If you want to remove permission do 1.5 and continue with 1.6.2.
  

### Description

If a person in charge of a room or transponder wants to give/take permission to/from a borrower he/she
has to complete this task. 




## 2. Verify borrower's permission


### Current state

<img src="../../static/hta-graphs/verify_lenders_permission_cur/verify_lenders_permission_cur.svg">

**Plan 2.3.1 current:** do 2.1-2.3. If transponder is available continue with 2.4.

**Plan 2.3.2 current:** do 2.1-2.3. If transponder is not available do 2.5.

**Plan 2.4.1 current:** do 2.1-2.3. If the borrower uses his Multica as identification do 2.4.1 and continue with 2.6.
  
**Plan 2.4.2 current:** do 2.1-2.3. If the borrower uses his ID as identification do 2.4.2 and continue with 2.6.


### Target state

<img src="../../static/hta-graphs/verify_lenders_permission/verify_lenders_permission.svg">

**Plan 2.5.1 target:** do 2.1-2.5. If transponder is available continue with 2.6.
  
**Plan 2.5.2 target:** do 2.1-2.5. If transponder is not available do 2.7.
  
**Plan 2.6.1 target:** do 2.1-2.5. If the borrower uses his Multica as identification do 2.6.1 and continue with 2.8.
  
**Plan 2.6.2 target:** do 2.1-2.5. If the borrower uses his ID as identification do 2.6.2 and continue with 2.8.


### Description

This task is done by a member of the gatekeeping staff. 
It basically runs parallel to the borrower's task "0. borrow transponder".

**Only for target state:**

Since one of our main goals is to keep the university's property safe,
this task of verification is utterly important. We can not allow that somebody
permissionless, unverified or without the system's/the person in charge of the room's 
knowledge gains access to a room.

This is the reason why every borrowing process gets protocolled, so we can always 
keep track of who has and has had a transponder. Now, if some damage gets reported, we always
know who had access during the aproximate time period the damage was done.

We want to automate every task as much as possible and make the task for
every user as seamless as possible, too, so we thought it would be easiest if we
would introduce NFC (Near-Field Communication) to this particular task.

We want a NFC-reading device connected to the workstation the gatekeeper uses,
which we can access with our application running on this workstation.
Now, if the gatekeeper hands out the transponder, he/she just has to hold it 
against the NFC-reading device and our app knows which transponder was just
lent. If the borrower used his Multica to identify himself he used the
same NFC-reading device, so our app can combine these two information and
we know which user borrowed the transponder. The gatekeeper doesn't has to
make interactions with our application interface that could lead to errors,
for example giving out a different transponder than the one selected in the
application.

If the borrower used his ID for identification, the gatekeeper presses a
button on his interface which tells the app who is the borrower. After that
he holds the transponder against the NFC-reading device and the the app
knows which transponder was lent. 

We think this is easier, faster and safer than the gatekeeper having to always 
manually specify the transponder in his application interface opened in 
his browser.




## 3. Check for avaiable transponder


### Current state

<img src="../../static/hta-graphs/cfat_cur/cfat_cur.svg">

**Plan 3.2 current:** do 3.1. Continue with asking for the room number (3.2.1) or the transponder's 
  number (3.2.1).

**Plan 3.3 current:** do 3.1-3.2. If transponder is available continue with 3.3, else terminate task.


### Target state

<img src="../../static/hta-graphs/cfat/cfat.svg">

**Plan 3.4 target:** do 3.1-3.3. If transponder is available continue with 3.4, else continue with 3.5.


### Description

A borrower can check if his desired transponder or a transponder to his desired room is available. 
While this task is very crucial for our target state application, in our current state it only
resembles a subset of task 0. borrow transponder.




## 4. Check if I have permission to room/transponder


### Current state

<img src="../../static/hta-graphs/cptrpt_cur/cptrpt_cur.svg">


### Target state

<img src="../../static/hta-graphs/cptrpt/cptrpt.svg">


### Description

While, again (like task 3. check for available transponder), this task is not very reasonable
in our current state application, it will simplify the users' interaction in our target state
application hugely. In our current state, this would again be a subset of task 0. borrow transponder
and would require two parties (the gatekeeper and the borrower) to interact with each other and
the system.

In our target state application the borrower only has to use his smartphone and can check, before
having to go to the gatekeepers' office, if he has permission or not (e.g. if he asked for permission
(task 5) beforhand and now wants to know if the person in charge of the room has granted it).




## 5. Ask for permission


### Current state

<img src="../../static/hta-graphs/ask_for_permission_cur/ask_for_permission_cur.svg">

**Plan 5.1/2 current:** do 5.1 or 5.2. Continue with 5.3. 

**Plan 5.3.1 current:** do 5.1/5.2. If permission is granted continue with 5.3.1.

**Plan 5.3.2 current:** do 5.1/5.2. If permission is refused continue with 5.3.2.


### Target state

<img src="../../static/hta-graphs/ask_for_permission/ask_for_permission.svg">

**Plan 5.5.1 target:** do 5.1-5.4. If permission is granted continue with 5.5.1.

**Plan 5.5.2 target:** do 5.1-5.4. If permission is refused continue with 5.5.2.


### Description

A borrower can ask for permission. The person in charge of this room or transponder can either 
grant (would continue with task 1. give/remove permission) or refuse. 




## Conclusion

The Hierarchical Task Analysis gave us a great entry point and some insights to how 
our application could be structured (it's components, interfaces, hardware, technologies, etc.).




## Revision

- Added descriptions and a conclusion

- Added tasks 3 - 5

- Added current state 
