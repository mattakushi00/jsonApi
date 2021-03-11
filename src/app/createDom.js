export default function (arrayItem, arrayProp) {
	const $list = document.querySelector('.list')
	const $filters = document.querySelector('.filters')
	let $items

	arrayProp.forEach((prop, index) => {
		$filters.insertAdjacentHTML('beforeend', `<input type="text" placeholder="${arrayProp[index].slice(4)}" name="${arrayProp[index]}" class="filters__item">`)
	})

	arrayItem.forEach(() => {
		$list.insertAdjacentHTML('beforeend', `<div class="list__item"></div>`)
	})

	$items = document.querySelectorAll('.list__item')

	$items.forEach((item, index) => {
		arrayProp.forEach(prop => {
			item.insertAdjacentHTML('beforeend', `<div class="item__prop">${arrayItem[index][prop].$t}</div>`)
		})
	})
}