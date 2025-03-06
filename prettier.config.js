module.exports = {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false, // 使用 Tab 縮排
  semi: false, // 分號
  singleQuote: true, // 單引號
  quoteProps: 'as-needed', // Object 的 key 僅在必要时用引號
  trailingComma: 'all', // 末尾使用逗號
  bracketSpacing: true, // 大括號內 首尾需要空白 { title: 'Opshell' }
  bracketSameLine: true,
  arrowParens: 'always', // 箭頭函數，只有一个參數的时候，也需要括號
  proseWrap: 'preserve', // 預設斷行
  htmlWhitespaceSensitivity: 'css', // 根據 CSS 設定決定 html 要不要斷行
  endOfLine: 'lf', // 換行符號使用lf
}
