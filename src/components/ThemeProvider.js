import React from 'react'
import {ThemeProvider} from 'react-bootstrap'

export default function AppThemeProvider(props) {
    const {children} = props
  return (
    <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs"
    >
     {children}
    </ThemeProvider>
  )
}
