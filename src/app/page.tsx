/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";

import React from 'react';
import { Flex } from '@/once-ui/components';
import Header from '../components/Header';
import Home from '../pages/Home/page';
import Footer from '../components/Footer';

export default function Index() {
    return (
        <Flex
            fillWidth
            direction="column"
            alignItems="center"
            paddingX="s">
            <Header />
            <Home />
            <Footer />
        </Flex>
    );
}
