const $filters = document.querySelector('.filters')
const $buttonClear = document.querySelector('.filters__clear')

$buttonClear.addEventListener('click', (e) => {
	e.preventDefault()
	$filters.childNodes.forEach(item => {
		if (item.tagName === 'INPUT') {
			item.value = ''
		}
	})
})

