import React from 'react'
import upIcon from '../../../../icons/up-arrow_icon.svg'
import downIcon from '../../../../icons/down-arrow_icon.svg'
import noneIcon from '../../../../icons/none-arrow_icon.svg'

// добавить в проект иконки и импортировать
// const downIcon = iconDown
// const upIcon = iconUp
// const noneIcon = '[--]'

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент,
    // sort: (click) => down (click) => up (click) => '' (click) => down ...


    if (sort === down) return up
    if (sort === up) return ''
    return down
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            {/*сделать иконку*/}
            <img
                id={id + '-icon-' + sort}
                src={icon}
                style={{width: '15px', height: '15px', marginLeft: '5px'}}
                alt={id + '-icon-' + sort}
            />

            {/*{icon} /!*а это убрать*!/*/}
        </span>
    )
}

export default SuperSort
