# Hierarchical Task Analysis

[[ description here ]]

## 0. lend transponder

**graph in ../../static/hta-graphs/lend_transponder**

**Plan 0.3.1:** do 0.1-0.2. If you choose to identify with your Multica do 0.3.1 and continue with 0.4.
  
**Plan 0.3.2:** do 0.1-0.2. If you choose to identify with your ID do 0.3.2 and continue with 0.4.

### Description

The main task a lender does. He/she wants to use this system to gain access to a room he/she has permission to
use. 

## 1. give/remove permission

**graph in ../../static/hta-graphs/give_remove_permission**

**Plan 1.4.1:** do 1.1-1.3. If you want to give permission do 1.4.1 and continue with 1.5.
  
**Plan 1.4.2:** do 1.1-1.3. If you want to remove permission do 1.4.2 and continue with 1.5.

### Description

[[ description here ]]

## 2. verify lender's permission

**graph in ../../static/hta-graphs/verify_lenders_permission**

**Plan 2.5.1:** do 2.1-2.5. If transponder is available continue with 2.6.
  
**Plan 2.5.2:** do 2.1-2.5. If transponder is not available do 2.7.
  
**Plan 2.6.1:** do 2.1-2.5. If the lender uses his Multica as identification do 2.6.1 and continue with 2.8.
  
**Plan 2.6.2:** do 2.1-2.5. If the lender uses his ID as identification do 2.6.2 and continue with 2.8.

### Description

!!!!! NOT DONE !!!!!
This task is done by a member of the gatekeeping staff. 
It basically runs parallel to the lender's task "0. lend transponder".

Since one of our main goals is to keep the university's property safe,
this task of verification is utterly important. We can not allow that somebody
not allowed, unverified or without the system's/the person in charge of the room's 
knowledge gains access.

This is the reason why every lending process gets protocolled, so we can always 
keep track of who has a transponder. Now, if some damage gets reported, we always
know who had access during the time period the damage was done.

We want to automate every task as much as possible and make the task for
every user as seamless as possible, so we thought it would be easiest if we
would introduce NFC (Near-Field Communication) to this particular task.

We want a NFC-reading device connected to the workstation the gatekeeper uses,
which we can access with our application running on this workstation.
Now, if the gatekeeper hands out the transponder, he/she just has to hold it 
against the NFC-reading device and our app knows which transponder was just
lent. If the lender used his Multica to identify himself he used the
same NFC-reading device, so our app can combine these two information and
we know which user lent the transponder. The gatekeeper doesn't have to
do anything.

If the lender used his ID for identification, the gatekeeper presses a
button on his interface which tells the app who is the lender. After that
he holds the transponder against the NFC-reading device and the the app
knows which transponder was lent. 

We think this is easier and faster than the gatekeeper having to always 
manually

After this, when the user signs on the tablet device, our app can comb

[[ description here ]]

[[ conclusion here ]]
