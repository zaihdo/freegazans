/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";

import React from 'react';
import { Heading, Text, Flex, Button, Grid, Icon } from '@/once-ui/components';
import Link from 'next/link';
import { useTheme } from './ThemeContext';
import peopleData from './peopleData';
import LinkCard from './LinkCard';

export default function Home() {
	const { theme, toggleTheme } = useTheme();

	return (
		<Flex
			fillWidth
			flex={1}
			direction="column"
			alignItems="center"
			paddingTop="l"
			paddingX="l">
			<Flex
				style={{ position: 'relative', width: '100%' }}>
				<Button
					onClick={toggleTheme}
					style={{
						position: 'absolute',
						top: '16px',
						right: '16px',
						zIndex: 1000
					}}>
					Switch to {theme === 'dark' ? 'light' : 'dark'} mode
				</Button>
			</Flex>
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
					style={{zIndex: '1', width: '95%'}}
					position="relative"
					paddingX="24"
					paddingY="8"
					marginBottom="xs"
					alignItems='center'
					justifyContent='center'>
					<Heading
						variant="display-strong-l"
						onBackground="neutral-strong">
						Free Gazans
					</Heading>
				</Flex>
				<Flex
					style={{zIndex: '1', width: '95%'}}
					position="relative"
					background="surface"
					border="neutral-medium"
					borderStyle="solid-1"
					radius="xl-8"
					paddingX="24"
					paddingY="16"
					marginBottom="xs">
					<Text
						onSolid='accent-weak'>
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
							<Heading
								variant="display-default-xs"
								onBackground="neutral-strong">
								<Text style={{color: '#01b760'}}>Read their stories.</Text><br/><Text style={{color: '#d83838'}}>Donate to the cause.</Text><br/><Text color="#fff">Share Share Share.</Text>
							</Heading>
							<Button
								style={{ marginBottom: 'var(--static-space-20)' }}
								suffixIcon="chevronRight"
								variant="tertiary">
								<Link
									href="https://techforpalestine.org/projects/">
									View more projects here
								</Link>
							</Button>
						</Flex>
					</Flex>
					<Grid
            columns="repeat(1, 1fr)"
            tabletColumns="1col"
            mobileColumns="1col"
            fillWidth>
            {peopleData.map((person, index) => (
              <LinkCard
                key={index}
                name={person.name}
                description={person.description}
                link={person.link}
              />
            ))}
          </Grid>
				</Flex>
			</Flex>
			<Flex
				fillWidth
				justifyContent="space-between"
				style={{ borderTop: '1px solid var(--neutral-border-medium)' }}
				as="footer"
				paddingX="l"
				paddingY="m">
				<Text
					onBackground="neutral-weak">
					Built with love for the people of Gaza with <Link href="https://www.once-ui.com/">OnceUI</Link>
				</Text>
				<Flex
					gap="12">
					<Button
						href="https://www.linkedin.com/in/zaidhimran/"
						prefixIcon="linkedin"
						size="s"
						variant="tertiary">
						LinkedIn
					</Button>
				</Flex>
			</Flex>
		</Flex>
	);
}
