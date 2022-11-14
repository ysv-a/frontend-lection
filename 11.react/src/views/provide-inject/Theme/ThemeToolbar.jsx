import { useThemeContext } from './ThemeContext'
import { ThemeOption } from './ThemeOption'

export function ThemeToolbar() {
  const [contextState, setThemeIndex] = useThemeContext()
  const { themes, themeIndex } = contextState

  return (
    <div className="flex gap-3 mb-5">
      {themes.map((theme, index) => (
        <ThemeOption
          theme={theme}
          key={index}
          selected={index === themeIndex}
          onSelect={() => setThemeIndex(index)}
        />
      ))}
    </div>
  )
}
