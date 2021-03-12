export default function () {
	const $table__header = document.querySelector('.table__header')
	const $table__list = document.querySelector('.table__list')
	const $arraySorts = document.querySelectorAll('.table__sort')
	const $arrayTableItems = document.querySelectorAll('.list__item')

	$table__header.addEventListener('click', (e) => {
		e.preventDefault()

		if (e.target.classList.contains('table__sort')) {
			let arr = []

			$arrayTableItems.forEach(item => arr.push(item))
			$arraySorts.forEach((sort__item, sort__index) => {
				if (sort__item === e.target) {
					e.target.classList.toggle('sorted')
					e.target.classList.add('active')
					e.target.textContent = 'V'
					getSortArray(e.target, arr, sort__index)
				}
				else {
					sort__item.classList.remove('active')
					sort__item.classList.remove('sorted')
				}
				sort__item.textContent = sort__item.classList.contains('active') ? 'V' : 'sort'
			})
			$arrayTableItems.forEach(item => item.remove())
			arr.forEach(item => $table__list.appendChild(item))
		}
	})

	function getSortArray(target, array, index) {
		array.sort((a, b) => {
			let itemA = target.classList.contains('sorted') ? a.childNodes[index].textContent : b.childNodes[index].textContent
			let itemB = target.classList.contains('sorted') ? b.childNodes[index].textContent : a.childNodes[index].textContent
			return Number(itemA) ? itemA - itemB : itemA.toLowerCase().localeCompare(itemB)
		})
	}
}
