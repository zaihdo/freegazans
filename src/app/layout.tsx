"use client";
import { Flex } from '@/once-ui/components';
import { Inter } from 'next/font/google';
import { ThemeProvider, useTheme } from './ThemeContext';

const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin'],
    display: 'swap',
});

import "@/once-ui/tokens/scheme.css";
import "@/once-ui/tokens/theme.css";
import "@/once-ui/tokens/layout.css";
import "@/once-ui/tokens/border.css";
import "@/once-ui/tokens/elevation.css";
import "@/once-ui/tokens/typography.css";

import "@/once-ui/styles/spacing.css";
import "@/once-ui/styles/border.css";
import "@/once-ui/styles/color.css";
import "@/once-ui/styles/background.css";
import "@/once-ui/styles/typography.scss";
import "@/once-ui/styles/global.scss";
import "@/once-ui/styles/layout.css";

function RootLayoutContent({ children }: Readonly<{ children: React.ReactNode }>) {
    const { theme } = useTheme();
    return (
        <html
            style={{ height: '100%', background: 'var(--page-background)' }}
            data-theme={theme}
            data-brand="moss"
            data-accent="moss"
            data-neutral="gray"
            data-border="playful"
            lang="en"
            className={`${inter.variable}`}
            suppressHydrationWarning={true}>
            <head>
                <title>Free Gazans | Read, Donate, Share</title>
            </head>
            <body
                suppressHydrationWarning={true}
                style={{ display: 'flex', height: '100%', width: '100%', margin: "0", padding: "0" }}>
                <Flex
                    flex={1}
                    direction="column">
                    {children}
                </Flex>
            </body>
        </html>
    );
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ThemeProvider>
            <RootLayoutContent>{children}</RootLayoutContent>
        </ThemeProvider>
    );
}
