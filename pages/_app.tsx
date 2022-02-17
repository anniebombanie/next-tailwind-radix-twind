import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar, faCheck, faCircleCheck, faCircleExclamation, faCircleInfo, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import 'twind/shim'

library.add(faStar, faCheck, faCircleCheck, faCircleExclamation, faCircleInfo,  faCircleXmark)
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
