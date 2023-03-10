import { WalletProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import {
    GlowWalletAdapter,
    PhantomWalletAdapter,
    SlopeWalletAdapter,
    SolflareWalletAdapter,
    SolletExtensionWalletAdapter,
    SolletWalletAdapter,
    TorusWalletAdapter,
} from '@solana/wallet-adapter-wallets'
import { Navbar } from 'components'
import type { AppProps } from 'next/app'
import { useMemo } from 'react'
import '../styles/globals.scss'
import { theme, ThemeProvider } from '@primer/react'
import deepmerge from 'deepmerge'

function MyApp({ Component, pageProps }: AppProps) {
    const wallets = useMemo(
        () => [
            new PhantomWalletAdapter(),
            new GlowWalletAdapter(),
            new SlopeWalletAdapter(),
            new SolflareWalletAdapter(),
            new TorusWalletAdapter(),
            new SolletWalletAdapter(),
            new SolletExtensionWalletAdapter(),
        ],
        []
    )
    const customTheme = deepmerge(theme, {})

    return (
        // @ts-ignore
        <ThemeProvider theme={customTheme}>
            <WalletProvider wallets={wallets}>
                <WalletModalProvider>
                    <Navbar />
                    <div className='container-xl p-responsive height-full my-11'>
                        <Component {...pageProps} />
                    </div>
                </WalletModalProvider>
            </WalletProvider>
        </ThemeProvider>
    )
}

export default MyApp
