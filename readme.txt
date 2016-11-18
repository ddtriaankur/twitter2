
Initialising Server
	//
	start the application with passing just only two value through the command line
	-a <Account name>       of which you want the tweets from 
	-t <Number of tweets>   you wanted in return

INSTALLATION::

How to get OAUTH Reg Keys 
	1. Visit :: https://apps.twitter.com
	2. Create a new app. 
	3. Get the mentioned keys:: 
			Consumer keys, Consumer Secret, Access Token and Access Token Secret 

Installing Twitter App
1. Run in the current drive using command Promt: 
	npm install			

Example commands
	1. node app -a elonmusk -t 20	
	2. Save it in a new File
		node app -a elonmusk-t 20 > filename.txt
	3. Copy to clipboard
		node app -a elonmusk-t 20 | clip
