import HeartbeatButton from '~/UI/Button'

export function Popup() {
  const textShadow = '[text-shadow:_0_0px_10px_rgb(254_255_2_/_45%)]'

  return (
    <main className="flex flex-col items-center gap-5 p-5 pt-4">
      <div className="flex flex-col items-center gap-0.5">
        <h1 className={`text-3xl font-semibold text-primary text-center tracking-tight ${textShadow}`}>Github Stars Collection</h1>
        <p className="text-base font-normal text-center">Keep your stars organized.</p>
      </div>

      <HeartbeatButton to="" className="w-full" text="Go to Github Stars" />
    </main>
  )
}
