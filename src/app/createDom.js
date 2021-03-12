export default function (arrayItem, arrayProp) {
	const $list = document.querySelector('.list')
	const $table__header = document.querySelector('.table__header')
	const $filters = document.querySelector('.filters__list')
	let $items

	arrayProp.forEach((prop, index) => {
		$filters.insertAdjacentHTML('beforeend', `<input type="text" placeholder="${arrayProp[index].slice(4)}" name="${arrayProp[index]}" class="filters__item">`)
	})

	arrayProp.forEach((prop, index) => {
		$table__header.insertAdjacentHTML('beforeend', `<div class="table__title"><span class="table__value">${arrayProp[index].slice(4)}</span><button class="table__sort" data-prop="${arrayProp[index]}">sort</button></div>`)
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