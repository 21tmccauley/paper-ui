import React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '../../utils/cn'

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div'
    return (
      <Comp
        ref={ref}
        className={cn('pl-container', className)}
        {...props}
      />
    )
  }
)
Container.displayName = 'Container'

export { Container }

