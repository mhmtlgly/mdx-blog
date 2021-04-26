import * as React from "react"

function getAnchor(text: string) {
  return text.toLowerCase().replace(/ /g, "-")
}

export const HeadingTwo = ({ children }) => {
  const anchor = getAnchor(children)
  return <h2 id={anchor}>{children}</h2>
}
