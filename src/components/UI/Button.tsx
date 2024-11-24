// https://syntaxui.com/components/button/heartbeat-button

import {cn} from '@/lib/utils'

type Props = {
  to: string
  className?: string
  text: string
}

export default function PulseButton({to, className, text}: Props) {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    chrome.tabs.create({url: to})
  }

  return (
    <a href={to} onClick={handleClick} className={cn('px-4 py-1.5 text-lg text-center font-medium text-background rounded-md bg-primary hover:bg-primary/80 duration-300 animate-buttonpulse', className)}>
      {text}
    </a>
  )
}
