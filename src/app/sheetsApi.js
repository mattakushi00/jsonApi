/*
get template: https://spreadsheets.google.com/feeds/list/$YOURCODE/od6/public/values?alt=json
var $YOURCODE = your code from url (between spreadsheets/d/ and /edit#gid=0) }
*/
export default function() {
	const listSheets = {
		testSheets: '1hk5iB5KF-3rNLVknOKayWkQtWVZIu2gZcmBo08hXpcM',
		yourCode: '1A-Go8MVblUB7NXeErhvY7ELKtPUnI0KgolXPfiO0mWA',
	}

	return fetch(`https://spreadsheets.google.com/feeds/list/${listSheets.testSheets}/od6/public/values?alt=json`)
	.then(response => response.json())
}
