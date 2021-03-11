export default function (object, arrayProp) {
	const $filters = document.querySelector('.filters')
	const $filters__item = document.querySelectorAll('.filters__item')
	const $list__item = document.querySelectorAll('.list__item')
	const $buttonClear = document.querySelector('.filters__btn_clear')

	$buttonClear.addEventListener('click', (e) => {
		e.preventDefault()
		$filters.childNodes.forEach(item => {
			if (item.tagName === 'INPUT') {
				item.value = ''
				arrayProp.forEach(item => object[item] = '')
			}
		})
		$list__item.forEach(item => item.classList.remove('display__none'))
	})
	console.log(object)
	$filters.addEventListener('input', (e) => {
		if (e.target.classList.contains('filters__item')) {
			$list__item.forEach((item, index__item) => {
				item.classList.remove('display__none')
				item.childNodes.forEach((prop, index__prop) => {
					if (
						(object[index__item][arrayProp[index__prop]].$t.indexOf($filters__item[index__prop].value) === -1) &&
						($filters__item[index__prop].value.length !== 0)
					) {
						item.classList.add('display__none')
					}
				})
			})
		}
	})
}
