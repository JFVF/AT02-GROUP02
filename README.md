# RM-API-Team1
Framework from scratch



WHAT IS IT?
------------

JAJED project based in JavaScript language, 
Is a project oriented to test the different endpoints of RoomManager appplication, 
through its Representational State Transfer(REST) API. 

THE LATEST VERSION
------------------

Details of the latest version can be found in Github repository page: https://github.com/JFVF/RM-API-Team1

ENVIRONMENT
-----------

Microsoft Exchange 2010 SP3

	- Windows Server 2008 R2
	- IIS 7 or latter with compatibility IIS6
	- .NET Framework 3.5
	- .NET Framework 3.5 SP1
	- Active Directory Domain Service (AD DS)
	- DNS

RoomManager

	- Windows Server 2008 R2
	- MongoDB
	- NodeJS
	- RoomManager

REQUIREMENTS
------------

To install the required dependencies for the framework, it is necessary to be in the path of the project, and execute the following command.

npm install

LIBRARIES
---------

The present project uses different libraries to test the different endpoints of RoomManager application.

	- attendee_lib\attendeeLib.js
	- credential_lib\credentialLib.js
	- endpoint_lib\endpointLib.js
	- location_lib\locationLib.js
	- login_lib\loginLib.js
	- meeting_lib\meetingLib.js
	- outOforder_lib\outOfOrderLib.js
	- request_lib\requestLib.js
	- request_lib\requestAutenticationLib.js
	- request_lib\requestTokenLib.js
	- resources_libs\resourceLib.js
	- room_lib\roomLib.js
	- service_lib\serviceLib.js
	- serviceType-lib\serviceTypeLib.js


TESTS
-----

The following tests were implemented to test every endpoint of RoomManager application.

	- Smoke tests.
	- Acceptance tetst.
	- BDT
	- Workflow

CONTACTS
--------

    - If you want to be informed about new code releases, bug fixes,
      security fixes, general news and information about the JAJED project
      check to the GitHub repository
      https://github.com/JFVF/RM-API-Team1.git

CONTRIBUTORS
------------

Current contributors:
 * Aldo Balderrama Vaca (mabalderramav) - https://github.com/mabalderramav
 * Jimmy Romero S. (JimmyRomero) - https://github.com/JimmyRomero
 * Ericka Viraca (ErickaViraca) - https://github.com/ErickaViraca
 * Juana Rodriguez (JuanaRodriguez) - https://github.com/JuanaRodriguez
 * Daysi Claros (DaysiClaros) - https://github.com/DaysiClaros
 
-----------------------------------------------------------------------------------------


# RM-API-Group2


 # Refactor an Existent Project

The objetivo is to evaluate the framework for the purposie of evaluating
quality and idenfiying defects and failures.

## Quality Assessment

	-Maintainability
		-Readability
	-Portability
	-Reusability
	-Extensible
	-Test Independency

### Prerequisites

Microsoft Exchange 2010 SP3

	- Windows Server 2008 R2
	- IIS 7 or latter with compatibility IIS6
	- .NET Framework 3.5
	- .NET Framework 3.5 SP1
	- Active Directory Domain Service (AD DS)
	- DNS

RoomManager

	- Windows Server 2008 R2
	- MongoDB
	- NodeJS
	- RoomManager
	
	(If it necessary, Change datas of 'config.json')

### Installing

To install the required dependencies for the framework, it is necessary to be in the path of the project, and execute the following command.

npm install

## Running the tests

To run each automated test:
*All test:
    npm test
*Smoke test:
    npm smoke
*Acceptance test:
    npm acceptance
*BDT test:
    npm bdt
*Workflow test:
    npm workflow
*Generate xunit-file reports:
    npm reports

### Refactor TESTS

ISSUES

Test Cases	| Passed	| Failed	| Total
Smoke Test	|	18		| 18		| 36
Acceptance	|	15		| 18		| 33
BDT			|	8		| 15		| 23
Workflow	|	2		| 5			| 7
Total		|	43		| 56		| 99

REFACTOR

Test Cases	| Passed	| Failed	| Skipped	| Total
Smoke Test	|	31		|	0		|	5		|	36
Acceptance	|	30		|	0		|	3		|	33
BDT			|	23		|	0		|	0		|	23
Workflow	|	7		|	0		|	0		|	7
Total		|	91		|	0		|	8		|	99


## Deployment

To Deploy project: Jenkins ver.2.47
Using: Build Pipelines Plugin
		junit reports by default

## Authors

	* Maria Rodriguez
	* Jorge Forero
	* David Vallejos
	
## Next Release

* Refactor and fix test using this framework took aprox. 5 day
* To improve and fix methods of the Libraries will be take aprox. One weeks
* To implement more automated smoke test cases will be take aprox. 2 days
* To implement more automated acceptance test cases will be take aprox. 1 days
* To implement more automated BDT test cases will be take aprox. 3 days
* To improve the automated workflow test case will be take aprox. 1 day 