import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'

export const metadata: Metadata = {
    title: 'Happy Birthday Abi',
    description: 'A special birthday gift',
}

export default function Feb3Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <ThemeProvider
            enableSystem={false}
            attribute="class"
            storageKey="theme"
            defaultTheme="light"
            forcedTheme="light"
        >
            {children}
        </ThemeProvider>
    )
}
