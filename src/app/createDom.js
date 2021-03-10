export default function (arrayItem, arrayProp) {
	const $list = document.querySelector('.list')
	const $filters = document.querySelector('.filters')

	arrayItem.forEach((obj, index) => {
		$list.insertAdjacentHTML('beforeend', `<div class="list__item"></div>`)
		$filters.insertAdjacentHTML('beforeend', `<input type="text" placeholder="${arrayProp[index].slice(4)}" name="${arrayProp[index]}" class="filters__item">`)
	})
	const $items = document.querySelectorAll('.list__item')

	$items.forEach((item, index) => {
		arrayProp.forEach(prop => {
			item.insertAdjacentHTML('beforeend', `<div class="item__prop">${arrayItem[index][prop].$t}</div>`)
		})
	})
}