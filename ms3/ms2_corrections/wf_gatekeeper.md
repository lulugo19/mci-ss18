## Gatekeeper interface

**[ interface here]**

## Description

This interface is for lending transponders. After the login screen the gatekeeper can see
the page for lending a transponder. If a borrower comes and wants to borrow a transponder,
the gatekeeper uses the searchbar "Borrower" to search for the borrower's name, username or 
matrikelnumber. The gatekeeper will see a dropdown view under the searchbar containing
borrowers that match the current searchbar content (e.g. Google search).

The gatekeeper can click on one entry and will see every permission the borrower has under "Results".

Alternatively the borrower uses his Multica for authorization he can press it to the NFC-Reader (cmp. 
Hierarchical Task Analysis) and the "Borrower" searchbar automatically fills with the right name.

Then he/she uses the "Room/Transponder" searchbar providing the system with the information
which room/transponder the borrower wants to access, which further reduces the entries in "Results".
Then the gatekeeper can choose one transponder from this "Results"-list (provided one transponder is 
available). 

After the gatekeeper has verified the borrower the borrower signs digitally (on a tablet device, etc.)
and confirms, which will trigger a popup on the gatekeepers interface telling the gatekeeper to
hold the chosen transponder to the NFC-Reader. Done that, another popup opens with either a 
confirmation or an error (the gatekeeper has a wrong transponder).

Furthermore the gatekeeper can see all lent transponders (3rd frame from the top), so he knows,
before closing the campus, if anyone forgot to return a transponder.
