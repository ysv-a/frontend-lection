import { ThemeProvider } from './Theme/ThemeContext'
import { ThemeButton } from './Theme/ThemeButton'
import { ThemeToolbar } from './Theme/ThemeToolbar'
import { UserProvider } from './User/UserContext'
import { UserProfile } from './User/UserProfile'
import { UserHello } from './User/UserHello'

export function UseContextExample() {
  return (
    <>
      <ThemeProvider>
        <ThemeToolbar />
        <div className="flex gap-5">
          <ThemeButton text="Primary Button" />
          <ThemeButton text="Disabled Button" disabled />
        </div>
        <UserProvider userId={1}>
          <UserProfile />
          <UserHello />
        </UserProvider>
      </ThemeProvider>
    </>
  )
}
