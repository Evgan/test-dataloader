let lastId = 0

export default function (prefix = 'id') {
    lastId += 1
    return `${prefix}${lastId}`
}

export const getUniqueKey = () => Math.random().toString(36).substr(2, 9)
