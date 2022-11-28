function generateTheme() {
  const primaryColor = getRandomColor()
  return {
    primaryColor,
    secondaryColor: primaryColor + '33',
  }
}

export function generateThemes(count) {
  const themes = []
  for (let i = 0; i < count; i++) {
    themes.push(generateTheme())
  }
  return themes
}

function getRandomValue() {
  const numVal = Math.round(100 + Math.random() * 100)
  const stringVal = numVal.toString(16)
  return stringVal.length < 2 ? '0' + stringVal : stringVal
}

export function getRandomColor() {
  const r = getRandomValue()
  const g = getRandomValue()
  const b = getRandomValue()
  return `#${r}${g}${b}`
}
