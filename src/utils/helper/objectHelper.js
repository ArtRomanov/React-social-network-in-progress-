export const updateObjectInArray = (item, userId,objPropName, task) => {
    return item.map( u => {
        if (u[objPropName] === userId) {
            return {...u, ...task}
        }
        return u
})
}
