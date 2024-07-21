/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";

import React from 'react';
import { Heading, Text, Flex, Button } from '@/once-ui/components';
import Image from 'next/image';
import Link from 'next/link';
import LinkGrid from '../../components/LinkGrid';
import Logo from '../../components/Logo';

export default function Home() {
    return (
        <Flex
            style={{ overflow: 'hidden' }}
            fillWidth
            direction="column"
            alignItems="center"
            minHeight={1}
            flex={1}
            as="section"
            maxWidth={64}>
            <Flex
                position='relative'
                paddingX="2"
                paddingY="16"
                marginBottom="xs"
                justifyContent='space-evenly'
                alignItems='center'
                border="neutral-medium"
                borderStyle="solid-1"
                fillWidth
                >
                <Flex
                paddingX="8"
                paddingY="2"
                alignItems='center'
                justifyContent='center'
                background="brand-strong"
                border="neutral-medium"
                borderStyle="solid-1"
                radius="xs-8">
                <Logo></Logo>
                </Flex>
                <Flex
                    // style={{ zIndex: '1', width: '95%' }}
                    // position="relative"
                    // paddingX="24"
                    // paddingY="8"
                    // marginBottom="xs"
                    // alignItems='center'
                    // justifyContent='center'
                    >
                    <Heading
                        variant="display-strong-s"
                        onBackground="neutral-strong">
                        Free Gazans
                    </Heading>
                </Flex>
            </Flex>
            <Flex
                fillWidth
                position="relative"
                background="surface"
                border="neutral-medium"
                borderStyle="solid-1"
                radius="xl-8"
                paddingX="24"
                paddingY="16"
                marginBottom="xs">
                <Text
                    variant='body-default-m'
                    onBackground='accent-medium'>
                    As the bombs rain down, Gazans are desperately trying to evacuate through the only escape route i.e. the Rafah border crossing. Although
                    it is now closed, once open again, the Egyptians are charging our brothers and sisters $5000 per person just to cross through. FreeGazans was created
                    to have a centralised place to find the gofundme or other donation links of vetted individuals and families in Gaza. Links have been sourced directly
                    from the individuals.
                </Text>
            </Flex>
            <Flex
                fillWidth
                fillHeight
                as="main"
                padding="m"
                direction="column"
                gap="s">
                <Flex
                    fillWidth
                    mobileDirection="row"
                    gap="1">
                    <Flex
                        position="relative"
                        fillWidth
                        direction="column"
                        gap="24">
                        <Text
                            variant="display-default-xs"
                            onBackground="neutral-strong">
                            <Text style={{ color: '#01b760' }}>Read their stories.</Text><br /><Text style={{ color: '#d83838' }}>Donate to the cause.</Text><br /><Text color="#fff">Share Share Share.</Text>
                        </Text>
                        <Button
                            style={{ marginBottom: 'var(--static-space-20)' }}
                            suffixIcon="chevronRight"
                            variant="tertiary">
                            <Link href="https://techforpalestine.org/projects/">
                                View more projects here
                            </Link>
                        </Button>
                    </Flex>
                </Flex>
                <LinkGrid />
            </Flex>
        </Flex>
    );
}
