fetch('https://spreadsheets.google.com/feeds/list/1hk5iB5KF-3rNLVknOKayWkQtWVZIu2gZcmBo08hXpcM/od6/public/values?alt=json')
.then(response => response.json())
.then(data => {
	let array = []
	data.feed.entry.forEach(item => {
		array.push({
			name: item['gsx$какзвать'].$t,
			email: item['gsx$мыло'].$t,
			country: item['gsx$местожительства'].$t
		})
	})
	console.log(array)
})