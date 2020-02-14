import React from 'react';

export const Select = (props: any) => {
    const htmlFor =  `${props.label}-${Math.random()}`

  return (
      <div>
          <label htmlFor={htmlFor}>{props.label}</label>
          <select 
          id={htmlFor}
          value={props.value}
          onChange={props.onChange}>
              {props.options.map((option: any, index : any)=>{
                  return (
                      <option
                        value={option.value}
                        key={option.value + index}
                        >
                          {option.text}
                      </option>
                  )
              })}

          </select>
      </div>
  )
}