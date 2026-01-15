import React from 'react'
import { cn } from '../../utils/cn'

export interface FigureProps extends React.HTMLAttributes<HTMLElement> {}

const Figure = React.forwardRef<HTMLElement, FigureProps>(
  ({ className, ...props }, ref) => (
    <figure ref={ref} className={cn('pl-figure', className)} {...props} />
  )
)
Figure.displayName = 'Figure'

export interface FigureCaptionProps
  extends React.HTMLAttributes<HTMLElement> {}

const FigureCaption = React.forwardRef<HTMLElement, FigureCaptionProps>(
  ({ className, ...props }, ref) => (
    <figcaption
      ref={ref}
      className={cn('pl-figure-caption', className)}
      {...props}
    />
  )
)
FigureCaption.displayName = 'FigureCaption'

export { Figure, FigureCaption }
