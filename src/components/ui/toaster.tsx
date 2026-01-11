import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    &lt;ToastProvider&gt;
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          &lt;Toast key={id} {...props}&gt;
            &lt;div className="grid gap-1"&gt;
              {title &amp;&amp; &lt;ToastTitle&gt;{title}&lt;/ToastTitle&gt;}
              {description &amp;&amp; (
                &lt;ToastDescription&gt;{description}&lt;/ToastDescription&gt;
              )}
            &lt;/div&gt;
            {action}
            &lt;ToastClose /&gt;
          &lt;/Toast&gt;
        )
      })}
      &lt;ToastViewport /&gt;
    &lt;/ToastProvider&gt;
  )
}