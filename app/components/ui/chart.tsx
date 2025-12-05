"use client"

import React from "react"

// Minimal Chart stub to satisfy imports during build. Replace with full implementation as needed.
export const Chart: React.FC<any> = ({ children, ...props }) => {
  return (
    <div {...props}>
      {children}
    </div>
  )
}

export default Chart