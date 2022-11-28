import { useState } from 'react'
import { FormCheckbox, FormField, FormSelect } from './FormComponents'

const INITIAL_STATE = {
  firstName: 'John',
  lastName: 'Smith',
  age: 21,
  choice: 2,
  check: false,
}

export function FormPage() {
  const [state, setState] = useState(INITIAL_STATE)

  function testChangeOptun(e) {
    setState({ ...state, choice: e })
  }

  return (
    <div>
      <div className="grid grid-cols-2 gap-5">
        <FormField
          name="firstName"
          label="First name"
          value={state.firstName}
          onChange={(firstName) => setState({ ...state, firstName })}
        />
        <FormField
          name="lastName"
          label="Last name"
          value={state.lastName}
          onChange={(lastName) => setState({ ...state, lastName })}
        />
        <FormField
          name="age"
          label="Age"
          type="number"
          value={state.age}
          onChange={(age) => setState({ ...state, age })}
        />
        <FormCheckbox
          name="check"
          label="Check"
          value={state.check}
          onChange={(check) => setState({ ...state, check })}
        />
        <FormSelect
          options={[
            { id: 1, name: 'sosat' },
            { id: 2, name: 'sosat2' },
          ]}
          name="option"
          label="Option"
          value={state.choice}
          onChange={testChangeOptun}
        />
      </div>
      <pre className="mt-5">
        {state.firstName} <br />
        {state.lastName} <br />
        {state.age} <br />
        {state.choice} <br />
        {state.check ? 1 : 0} <br />
      </pre>
    </div>
  )
}
