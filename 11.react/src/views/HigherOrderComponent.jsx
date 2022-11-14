import { useState } from 'react'
import { Checkbox } from 'antd'

const withLoggingOnClick = (Component) => {
  return (props) => {
    const onClick = () => {
      console.log('Log on click something')
      props.onClick()
    }

    return <Component {...props} onClick={onClick} />
  }
}

const withLoggingOnClickWithParams = (Component, params) => {
  return (props) => {
    const onClick = () => {
      console.log('Log on click: ', params.text)
      props.onClick()
    }

    return <Component {...props} onClick={onClick} />
  }
}

const withLoggingOnClickWithProps = (Component) => {
  return (props) => {
    const { custom, ...buttonProps } = props
    const onClick = () => {
      console.log('Log on click: ', custom)
      props.onClick()
    }

    return <Component {...buttonProps} onClick={onClick} />
  }
}

export const SimpleButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="p-3 m-5 bg-red-700 text-white text-2xl"
    >
      {children}
    </button>
  )
}

const ButtonWithLoggingOnClick = withLoggingOnClick(SimpleButton)
const ButtonWithLoggingOnClickWithParams = withLoggingOnClickWithParams(
  SimpleButton,
  { text: 'button component' },
)
const ButtonWithLoggingOnClickWithPops =
  withLoggingOnClickWithProps(SimpleButton)

export function HigherOrderComponent() {
  const [counter, setCounter] = useState(1)
  return (
    <>
      <SimpleButton onClick={() => setCounter(counter + 1)}>
        Click SimpleButton - {counter}
      </SimpleButton>
      <ButtonWithLoggingOnClick onClick={() => setCounter(counter + 1)}>
        Click ButtonWithLoggingOnClick - {counter}
      </ButtonWithLoggingOnClick>
      <ButtonWithLoggingOnClickWithParams
        onClick={() => setCounter(counter + 1)}
      >
        Click ButtonWithLoggingOnClickWithParams - {counter}
      </ButtonWithLoggingOnClickWithParams>

      <ButtonWithLoggingOnClickWithPops
        custom="custom-text-log"
        onClick={() => setCounter(counter + 1)}
      >
        Click ButtonWithLoggingOnClickWithPops - {counter}
      </ButtonWithLoggingOnClickWithPops>
    </>
  )
}

// function checkboxWithText(Component) {
//   return (props) => {
//     const { helpText, ...checkboxProps } = props
//     return (
//       <>
//         <Component {...checkboxProps} />
//         {props.checked && <div className="text-sm mt-2">{helpText}</div>}
//       </>
//     )
//   }
// }

// const CheckboxText = checkboxWithText(Checkbox)

// export function HigherOrderComponent() {
//   const [checked, setChecked] = useState(true)
//   const onChange = (e) => {
//     console.log('checked = ', e.target.checked)
//     setChecked(e.target.checked)
//   }

//   return (
//     <>
//       <CheckboxText
//         checked={checked}
//         helpText="help Text help Texthelp Texthelp Text"
//         onChange={onChange}
//       >
//         Checkbox Label
//       </CheckboxText>
//     </>
//   )
// }
