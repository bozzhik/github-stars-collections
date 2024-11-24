import {useState, useEffect} from 'react'

export const Popup = () => {
  // const [count, setCount] = useState(0)
  // const link = 'https://github.com/guocaoyi/create-chrome-ext'

  // const minus = () => {
  //   if (count > 0) setCount(count - 1)
  // }

  // const add = () => setCount(count + 1)

  // useEffect(() => {
  //   chrome.storage.sync.get(['count'], (result) => {
  //     setCount(result.count || 0)
  //   })
  // }, [])

  // useEffect(() => {
  //   chrome.storage.sync.set({count})
  //   chrome.runtime.sendMessage({type: 'COUNT', count})
  // }, [count])

  const textShadow = '[text-shadow:_0_0px_10px_rgb(254_255_2_/_45%)]'

  return (
    <main className="flex flex-col items-center p-5 pt-4">
      <div className="flex flex-col items-center gap-0.5">
        <h1 className={`text-3xl font-semibold text-primary text-center tracking-tight ${textShadow}`}>Github Stars Collection</h1>
        <p className="text-base font-normal text-center">Keep your stars organized.</p>
      </div>
    </main>
  )
}

export default Popup
