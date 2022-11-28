import { useCurrentTheme } from '../Theme/ThemeContext'
import { useUserContext } from './UserContext'
import { UserAvatar } from './UserAvatar'

export function UserProfile() {
  const user = useUserContext()
  const { primaryColor } = useCurrentTheme()

  return (
    <div className="flex gap-5 mt-5">
      <UserAvatar />
      <div style={{ color: primaryColor }}>
        <PropsTable title="User Profile" data={user} />
      </div>
    </div>
  )
}

function Entry({ entry }) {
  const [prop, value] = entry
  return (
    <tr>
      <td className="border p-2">{prop}</td>
      <td className="border p-2">
        {typeof value === 'object' ? <PropsTable data={value} /> : value}
      </td>
    </tr>
  )
}

function PropsTable({ title, data }) {
  if (!data) {
    return <></>
  }

  return (
    <table>
      {title && (
        <thead>
          <tr>
            <th colSpan={2}>{title}</th>
          </tr>
        </thead>
      )}
      <tbody>
        {Object.entries(data).map((entry) => (
          <Entry key={entry[0]} entry={entry} />
        ))}
      </tbody>
    </table>
  )
}
