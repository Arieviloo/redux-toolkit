import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {up, down} from './../slices/counterSlices'


export default function Counter() {
  const counter = useSelector(state => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>
        <span>Counter:{counter}</span>
      <div>
        <button
          onClick={() => dispatch(up())}
        >
          UP
        </button>
        <button
          onClick={() => dispatch(down())}
        >
          DOWN
        </button>
      </div>
    </div>
  )
 
}