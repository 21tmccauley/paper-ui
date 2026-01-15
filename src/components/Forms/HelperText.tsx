import React from 'react'
import { cn } from '../../utils/cn'

export interface HelperTextProps extends React.HTMLAttributes<HTMLSpanElement> {}

const HelperText = React.forwardRef<HTMLSpanElement, HelperTextProps>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn('pl-helper-text', className)}
      {...props}
    />
  )
)
HelperText.displayName = 'HelperText'

export { HelperText }

