/*
get template: https://spreadsheets.google.com/feeds/list/$YOURCODE/od6/public/values?alt=json
var $YOURCODE = your code from url (between spreadsheets/d/ and /edit#gid=0) }
*/
export default function() {
	return fetch('https://spreadsheets.google.com/feeds/list/1hk5iB5KF-3rNLVknOKayWkQtWVZIu2gZcmBo08hXpcM/od6/public/values?alt=json')
	.then(response => response.json())
}
