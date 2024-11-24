import {useState, useEffect} from 'react'
import HeartbeatButton from '~/UI/Button'

export function Popup() {
  const USERNAME_EXAMPLE = 'bozzhik'
  const [username, setUsername] = useState<string>(USERNAME_EXAMPLE)
  const [isExampleUsername, setIsExampleUsername] = useState<boolean>(true)

  useEffect(() => {
    chrome.storage.sync.get(['username'], (result) => {
      if (result.username) {
        setUsername(result.username)
        setIsExampleUsername(false)
      }
    })

    chrome.storage.sync.get(null, (items) => {
      console.log('Stored items:', items)
    })
  }, [])

  const buttonUrl = `https://github.com/${username}?tab=stars`
  const buttonText = isExampleUsername ? 'Example of GitHub Stars' : 'Your GitHub Stars'

  return (
    <main className="flex flex-col items-center gap-5 p-5 pt-4">
      <div className="flex flex-col items-center gap-0.5">
        <h1 className="text-3xl font-semibold text-primary text-center tracking-tight [text-shadow:_0_0px_10px_rgb(254_255_2_/_45%)]">Github Stars Collection</h1>
        <p className="text-base font-normal text-center">Keep your stars organized.</p>
      </div>

      <HeartbeatButton to={buttonUrl} className="w-full" text={buttonText} />
    </main>
  )
}
