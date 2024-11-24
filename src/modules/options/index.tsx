import React from 'react'
import ReactDOM from 'react-dom/client'

import {Options} from '~~/options/Options'
import '@/globals.css'

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <Options />
  </React.StrictMode>,
)
