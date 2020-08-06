/**
 * interface partConfig {
 *     partName: string
 *     fistPartOfDir: string
 *     sortNames: string[]
 *     sorts: <{
 *         [index: string]: string
 *     }[]>[]
 * }
 */

function transfrom(partConfig) {
    const { 
        partName,
        fistPartOfDir,
        sortNames,
        sorts
    } = partConfig

    const createBaseLink = sortItem => {
        const key = Object.keys(sortItem)[0]

        return {
            text: sortItem[key],
            link: `/${fistPartOfDir}-${key}/1-index`
        }
    }
    
    // {
    //     text: '后端', 
    //     items: [
    //         {
    //             text: '语言',
    //             items: [
    //                 { text: 'GO', link: '/b-houduan-go/1-base-data' },
    //                 ......
    //             ]
    //         },
    //         ......
    //     ]
    // }
    return {
        text: partName,
        items: sortNames.map((sortName, index) => ({
            text: sortName,
            items: sorts[index].map(createBaseLink)
        }))
    }
}

module.exports = {
    transfrom
}