import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

const Label = React.forwardRef&lt;
  React.ElementRef&lt;typeof LabelPrimitive.Root&gt;,
  React.ComponentPropsWithoutRef&lt;typeof LabelPrimitive.Root&gt; &amp;
    VariantProps&lt;typeof labelVariants&gt;
&gt;(({ className, ...props }, ref) =&gt; (
  &lt;LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  /&gt;
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }