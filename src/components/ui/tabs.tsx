import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef&lt;
  React.ElementRef&lt;typeof TabsPrimitive.List&gt;,
  React.ComponentPropsWithoutRef&lt;typeof TabsPrimitive.List&gt;
&gt;(({ className, ...props }, ref) =&gt; (
  &lt;TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props}
  /&gt;
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef&lt;
  React.ElementRef&lt;typeof TabsPrimitive.Trigger&gt;,
  React.ComponentPropsWithoutRef&lt;typeof TabsPrimitive.Trigger&gt;
&gt;(({ className, ...props }, ref) =&gt; (
  &lt;TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      className
    )}
    {...props}
  /&gt;
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef&lt;
  React.ElementRef&lt;typeof TabsPrimitive.Content&gt;,
  React.ComponentPropsWithoutRef&lt;typeof TabsPrimitive.Content&gt;
&gt;(({ className, ...props }, ref) =&gt; (
  &lt;TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  /&gt;
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }