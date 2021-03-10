import creatItems from './createDom'
import sheetsApi from './sheetsApi'
import filter from './filters'

sheetsApi()
.then(data => {
	const {arraySheetItems, arrayProperty} = getArrayFromData(data.feed.entry)
	creatItems(arraySheetItems, arrayProperty)
	filter(arraySheetItems, arrayProperty)
})

function getArrayFromData(data) {
	return {
		arraySheetItems: data,
		arrayProperty: Object.getOwnPropertyNames(data[1]).filter(item => item.includes('$')),
	}
}