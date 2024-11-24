const META_SELECTOR = "meta[name='user-login']"

export function getGitHubUsername(): string | null {
  const metaTag = document.querySelector<HTMLMetaElement>(META_SELECTOR)
  return metaTag?.content || null
}

export function saveUsernameToStorage(username: string): void {
  chrome.storage.sync.get(['collections'], (result) => {
    const collections: Array<{name: string; repos: string[]}> = result.collections || []
    const data = {username, collections}

    chrome.storage.sync.set(data, () => {
      console.log(`GitHub username "${username}" saved successfully.`)
    })
  })
}
