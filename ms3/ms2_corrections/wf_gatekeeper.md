## Gatekeeper interface

**[ interface here]**

## Description

This interface is for lending transponders. After the login screen the gatekeeper can see
the page for lending a transponder. If a lender comes and wants to lend a transponder,
the gatekeeper uses the searchbar "Lender" to search for the lender's name, username or 
matrikelnumber. The gatekeeper will see a dropdown view under the searchbar containing
lenders that match the current searchbar content (e.g. Google search).

The gatekeeper can click on one entry and will see every permission the lender has under "Results".

Alternatively the lender uses his Multica for authorization he can press it to the NFC-Reader (cmp. 
Hierarchical Task Analysis) and the "Lender" searchbar automatically fills with the right name.

Then he/she uses the "Room/Transponder" searchbar providing the system with the information
which room/transponder the lender wants to access, which further reduces the entries in "Results".
Then the gatekeeper can choose one transponder from this "Results"-list (provided one transponder is 
available). 

After the gatekeeper has verified the lender the lender signs digitally (on a tablet device, etc.)
and confirms, which will trigger a popup on the gatekeepers interface telling the gatekeeper to
hold the chosen transponder to the NFC-Reader. Done that, another popup opens with either a 
confirmation or an error (the gatekeeper has a wrong transponder).

Furthermore the gatekeeper can see all lent transponders (3rd frame from the top), so he knows,
before closing the campus, if anyone forgot to return a transponder.
