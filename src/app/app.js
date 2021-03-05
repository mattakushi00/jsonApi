import creatItems from './createDom'
import sheetsApi from './sheetsApi'

sheetsApi()
.then(data => {
	const {arraySheetItems, arrayProperty} = getArrayFromData(data.feed.entry)
	creatItems('list__item', arraySheetItems, arrayProperty)
})

function getArrayFromData(data) {
	return {
		arraySheetItems: data,
		arrayProperty: Object.getOwnPropertyNames(data[1]).filter(item => item.includes('$')),
	}
}