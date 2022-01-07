export type CounterAction = 
    | {type: 'increaseBy', payload: { value:number }}
    | {type: 'reset'}


//Action Creators
//https://read.reduxbook.com/markdown/part1/04-action-creators.html

export const doReset = ():CounterAction => {
    return {
        type: 'reset'
    }
}

export const doIncreaseBy = (value:number):CounterAction => {
    return {
        type: 'increaseBy',
        payload: { value }
    }
}
