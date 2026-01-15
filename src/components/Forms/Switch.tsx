import React from 'react'
import * as SwitchPrimitive from '@radix-ui/react-switch'
import { cn } from '../../utils/cn'

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitive.Root
    ref={ref}
    className={cn('pl-switch', className)}
    {...props}
  >
    <SwitchPrimitive.Thumb className="pl-switch-thumb" />
  </SwitchPrimitive.Root>
))
Switch.displayName = SwitchPrimitive.Root.displayName

export { Switch }

