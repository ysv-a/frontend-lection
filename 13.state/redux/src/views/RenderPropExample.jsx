import TabSwitcher from '../components/TabSwitcher'

const Title = (props) => props.render()

// export function RenderPropExample() {
//   return (
//     <>
//       <Title render={() => <h1>I am a render prop!</h1>} />
//       <Title
//         render={() => (
//           <div>
//             <h1>Hello WORLD</h1>
//           </div>
//         )}
//       />
//       <Title render={() => <h1>I am a render prop!</h1>} />
//       <Title render={() => <h1>I am a render prop!</h1>} />
//     </>
//   )
// }

export function RenderPropExample() {
  return (
    <TabSwitcher
      tabIds={['first', 'second', 'third']}
      getHeader={(tabId) => {
        return tabId[0].toUpperCase() + tabId.slice(1)
      }}
      renderContent={(tabId) => {
        return <p>This is the {tabId} item.</p>
      }}
    />
  )
}
