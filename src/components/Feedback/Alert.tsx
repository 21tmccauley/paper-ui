import React from 'react'
import { cn } from '../../utils/cn'

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'info' | 'success' | 'warning' | 'danger'
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = 'info', ...props }, ref) => (
    <div
      ref={ref}
      className={cn('pl-alert', `pl-alert-${variant}`, className)}
      {...props}
    />
  )
)
Alert.displayName = 'Alert'

export { Alert }

