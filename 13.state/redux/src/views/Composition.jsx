import { Checkbox } from 'antd'
import { useState } from 'react'

function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  )
}

function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">Добро пожаловать</h1>
      <p className="Dialog-message">
        Спасибо, что посетили наш космический корабль!
      </p>
    </FancyBorder>
  )
}

function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">{props.title}</h1>
      <p className="Dialog-message">{props.message}</p>
    </FancyBorder>
  )
}

function WelcomeDialog2() {
  return (
    <Dialog
      title="Добро пожаловать"
      message="Спасибо, что посетили наш космический корабль!"
    />
  )
}

function CheckboxText(props) {
  const { helpText, ...checkboxProps } = props
  return (
    <>
      <Checkbox {...checkboxProps} />
      <div className="text-sm mt-2">{helpText}</div>
    </>
  )
}

export function CompositionExample() {
  const [checked, setChecked] = useState(true)
  const onChange = (e) => {
    console.log('checked = ', e.target.checked)
    setChecked(e.target.checked)
  }

  return (
    <>
      <CheckboxText
        checked={checked}
        helpText="helpText - Composition"
        onChange={onChange}
      >
        Checkbox Label
      </CheckboxText>
    </>
  )
}
