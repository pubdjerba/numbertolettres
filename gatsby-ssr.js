/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

import React from "react"
import RootElement from "./src/components/root-element"

export const wrapRootElement = ({ element }) => {
  return <RootElement>{element}</RootElement>
}
export const onRenderBody = ({ setHtmlAttributes }) => {
  return setHtmlAttributes({ lang: `fr` })
}
