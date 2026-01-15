import React from 'react'
import { cn } from '../../utils/cn'

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: 'p' | 'span' | 'div'
  muted?: boolean
}

const Text = React.forwardRef<HTMLElement, TextProps>(
  ({ className, as = 'p', muted = false, ...props }, ref) => {
    const Comp = as as React.ElementType
    return (
      <Comp
        ref={ref as React.Ref<HTMLElement>}
        className={cn('pl-text', muted && 'pl-text-muted', className)}
        {...props}
      />
    )
  }
)
Text.displayName = 'Text'

export { Text }

