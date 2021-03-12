import sheetsApi from './sheetsApi'
import creatItems from './createDom'
import filter from './filters'
import sort from './sort'

sheetsApi()
.then(data => {
	const {arraySheetItems, arrayProperty} = getArrayFromData(data.feed.entry)
	creatItems(arraySheetItems, arrayProperty)
	filter(arraySheetItems, arrayProperty)
	sort()
})

function getArrayFromData(data) {
	return {
		arraySheetItems: data,
		arrayProperty: Object.getOwnPropertyNames(data[1]).filter(item => item.includes('$')),
	}
}