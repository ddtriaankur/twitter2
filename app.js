console.log('Application is started running');
var Twit = require('twit');
var keys = require ('./keys'); 
var T = new Twit(keys);
commandLineArgs = require('command-line-args');

var cli = commandLineArgs([
	{name: 'Account', alias: 'a', type: String },
	{name: "Tweets", alias: 't', type: Number  }
]);
var options = cli.parse();
var condition = !(('Account' in options) && ('Tweets' in options));
if(condition) {
	console.log(cli.getUsage({
		title: "Usage",
		description: "Enter the Account and total number of tweets you wanted. "
	}));
	process.exit();
}else {
	var params = {screen_name: options.Account, count: options.Tweets, exclude_replies: false, include_rts: false} 
}

// T.get('statuses/user_timeline', params, function (err, data){
// var value = data;
// for (var i = 0; i<data.length ; i++){	
// 	value = data[i].text;
// 	console.log(`Tweet number ${i} ${value}`);
// }
// 	console.log("bye bye");
// });

T.get('statuses/user_timeline', params, display);

function display(err, data){
	var value = data;
	for (var i = 0; i<data.length ; i++){	
		value = data[i].text;
		console.log(` ${i}-->    ${value}`);
		}
			console.log(`bye bye Ankur`);
}









