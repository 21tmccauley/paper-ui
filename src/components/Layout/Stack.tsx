import React from 'react'
import { cn } from '../../utils/cn'

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: 'column' | 'row'
  gap?: number | string
}

const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ className, direction = 'column', gap, style, ...props }, ref) => {
    const stackStyle: React.CSSProperties = {
      ...style,
      ...(gap ? { '--pl-stack-gap': typeof gap === 'number' ? `${gap}px` : gap } : {}),
    }

    return (
      <div
        ref={ref}
        className={cn(
          'pl-stack',
          direction === 'row' && 'pl-stack-row',
          className
        )}
        style={stackStyle}
        {...props}
      />
    )
  }
)
Stack.displayName = 'Stack'

export { Stack }

