export default (function () {
	return function creatItems(childsClass, arrayItem, arrayProp) {
		const $list = document.querySelector('.list')

		arrayItem.forEach((object, index) => {
			$list.insertAdjacentHTML('beforeend', `<div class="list__item"></div>`)
		})

		const $items = document.querySelectorAll('.list__item')

		$items.forEach((item, index) => {
			arrayProp.forEach(prop => {
				item.insertAdjacentHTML('beforeend', `<div class="item__prop">${arrayItem[index][prop].$t}</div>`)
			})
		})
	}
})()