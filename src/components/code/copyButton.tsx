import * as React from "react"

export const CopyButton = ({ content }) => {
  const [text, setText] = React.useState("Copy")

  return (
    <button
      className="code-copy-button"
      onClick={() => {
        navigator.clipboard.writeText(content)
        setText("Copied!")
        setTimeout(() => {
          setText("Copy")
        }, 1000)
      }}
    >
      {text}
    </button>
  )
}
