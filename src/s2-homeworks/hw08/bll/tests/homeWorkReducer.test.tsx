import React from 'react'
import { homeWorkReducer } from '../homeWorkReducer'
import { UserType } from '../../HW8'

let initialState: UserType[]

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Владилен', age: 31},
        {_id: 1, name: 'Евгений', age: 42},
        {_id: 2, name: 'Дмитрий', age: 15},
        {_id: 3, name: 'Игорь', age: 17},
        {_id: 4, name: 'Анна', age: 11},
        {_id: 5, name: 'Че Гевара', age: 124},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, {
        type: 'sort',
        payload: 'up',
    })

    expect(newState[0]._id).toBe(4)
    expect(newState[5]._id).toBe(5)

})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, {
        type: 'sort',
        payload: 'down',
    })

    expect(newState[0]._id).toBe(5)
    expect(newState[5]._id).toBe(4)
})

test('check age 18', () => {
    const newState = homeWorkReducer(initialState, {
        type: 'check',
        payload: 18,
    })

    expect(newState.length).toBe(3)
})
