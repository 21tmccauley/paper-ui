import React from 'react'
import { cn } from '../../utils/cn'

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn('pl-textarea', className)}
      {...props}
    />
  )
)
Textarea.displayName = 'Textarea'

export { Textarea }

