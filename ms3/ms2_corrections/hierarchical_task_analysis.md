# Hierarchical Task Analysis

## Description

Our Top Level User Tasks decomposed in smaller, hierarchical tasks/subtasks and actions a user will perform
using our application. Furthermore it allows us to specify plans, which helps us to model state (e.g. transponder
not available, lender has no permission), conditions (e.g. only if lender has permission he can lend a transponder,
else the gatekeeper resents the request) and descisions (e.g. lender decides to use his/her Multica as identification),
which should make it easier to implement the different tasks/subtasks in a safe and useful manner later in the
development proccess.

## 0. Lend transponder

**graph in ../../static/hta-graphs/lend_transponder**

**Plan 0.3.1:** do 0.1-0.2. If you choose to identify with your Multica do 0.3.1 and continue with 0.4.
  
**Plan 0.3.2:** do 0.1-0.2. If you choose to identify with your ID do 0.3.2 and continue with 0.4.

### Description

The main task a lender does. He/she wants to use this system to gain access to a room he/she has permission to
use. 

## 1. Give/remove permission

**graph in ../../static/hta-graphs/give_remove_permission**

**Plan 1.4.1:** do 1.1-1.3. If you want to give permission do 1.4.1 and continue with 1.5.
  
**Plan 1.4.2:** do 1.1-1.3. If you want to remove permission do 1.4.2 and continue with 1.5.

### Description

If a person in charge of a room or transponder wants to give/take permission to/from a lender he/she
has to complete this task. 

## 2. Verify lender's permission

**graph in ../../static/hta-graphs/verify_lenders_permission**

**Plan 2.5.1:** do 2.1-2.5. If transponder is available continue with 2.6.
  
**Plan 2.5.2:** do 2.1-2.5. If transponder is not available do 2.7.
  
**Plan 2.6.1:** do 2.1-2.5. If the lender uses his Multica as identification do 2.6.1 and continue with 2.8.
  
**Plan 2.6.2:** do 2.1-2.5. If the lender uses his ID as identification do 2.6.2 and continue with 2.8.

### Description

This task is done by a member of the gatekeeping staff. 
It basically runs parallel to the lender's task "0. lend transponder".

Since one of our main goals is to keep the university's property safe,
this task of verification is utterly important. We can not allow that somebody
permissionless, unverified or without the system's/the person in charge of the room's 
knowledge gains access to a room.

This is the reason why every lending process gets protocolled, so we can always 
keep track of who has and has had a transponder. Now, if some damage gets reported, we always
know who had access during the aproximate time period the damage was done.

We want to automate every task as much as possible and make the task for
every user as seamless as possible, too, so we thought it would be easiest if we
would introduce NFC (Near-Field Communication) to this particular task.

We want a NFC-reading device connected to the workstation the gatekeeper uses,
which we can access with our application running on this workstation.
Now, if the gatekeeper hands out the transponder, he/she just has to hold it 
against the NFC-reading device and our app knows which transponder was just
lent. If the lender used his Multica to identify himself he used the
same NFC-reading device, so our app can combine these two information and
we know which user lent the transponder. The gatekeeper doesn't has to
make interactions with our application interface that could lead to errors,
for example giving out a different transponder than the one selected in the
application.

If the lender used his ID for identification, the gatekeeper presses a
button on his interface which tells the app who is the lender. After that
he holds the transponder against the NFC-reading device and the the app
knows which transponder was lent. 

We think this is easier, faster and safer than the gatekeeper having to always 
manually specify the transponder in his application interface opened in 
his browser.

## 3. Check for avaiable transponder

**graph in ../../static/hta-graphs/cfat**

**Plan 3.4:** do 3.1-3.3. If transponder is available continue with 3.4, else continue with 3.5.

### Description

A lender can check if his desired transponder or a transponder to his desired
room is available using our mobile application. The lender can look up his
permissions and filter them. Since our system knows all the time if a transponder
is available or not, it can give the lender this information.

## 4. Check if I have permission to room/transponder

**graph in ../../static/hta-graphs/cptrpt**

### Description

In case a lender wants to check if he has permission to a room or transponder. 
Furthermore he can see when his permisson expires.

## 5. Ask for permission

**graph in ../../static/hta-graphs/ask_for_permission**

**Plan 5.5.1:** do 5.1-5.4. If permission is granted continue with 5.5.1.

**Plan 5.5.2:** do 5.1-5.4. If permission is refused continue with 5.5.2.

### Description

A lender can use our application for making permission requests. That means he/she can 
look up a room or transponder and ask for a permission, which the person in charge
of this room or transponder can either grant or refuse. Either way the lender gets informed
by our application about whether the request is granted or refused.


## Conclusion

The Hierarchical Task Analysis gave us a great entry point and some insights to how 
our application could be structured (it's components, interfaces, hardware, technologies, etc.).

## Revision

- Added descriptions and a conclusion

- Added tasks 3 - 5.

