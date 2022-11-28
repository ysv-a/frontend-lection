import { useState } from 'react'

function Block({ renderContent, selectedId }) {
  return <div>{renderContent(selectedId)}</div>
}

export default function TabSwitcher({ tabIds, getHeader, renderContent }) {
  const [selectedId, setSelectedId] = useState(tabIds[0])
  return (
    <>
      {tabIds.map((tabId) => (
        <button
          className="p-2 m-1 bg-gray-500 text-white text-lg"
          key={tabId}
          onClick={() => setSelectedId(tabId)}
        >
          {getHeader(tabId)}
        </button>
      ))}
      <hr />
      <div className="border-2 p-5">
        <h3>{getHeader(selectedId)}</h3>
        <Block
          key={selectedId}
          renderContent={renderContent}
          selectedId={selectedId}
        />
      </div>
    </>
  )
}
