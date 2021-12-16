export const checkIsExisting = (currentItems, newItem) => {
    const itemFound = currentItems.find(item => item.id === newItem.id)
    return itemFound
}