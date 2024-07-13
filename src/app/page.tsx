/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";

import React from 'react';

import { Heading, Text, Flex, Button, Grid, Icon } from '@/once-ui/components';
import Link from 'next/link';

export default function Home() {
	return (
		<Flex
			fillWidth
			flex={1}
			direction="column"
			alignItems="center"
			paddingTop="l"
			paddingX="l">
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
					// background="accent-medium"
					// border="neutral-medium"
					// borderStyle="solid-1"
					// radius="l"
					paddingX="24"
					paddingY="8"
					marginBottom="xs"
					alignItems='center'
					justifyContent='center'
					>
					<Heading
						variant="display-strong-s"
						onBackground="neutral-strong">
						What is FreeGazans?
					</Heading>
				</Flex>
				<Flex
					style={{zIndex: '1', width: '95%'}}
					position="relative"
					background="accent-medium"
					border="neutral-medium"
					borderStyle="solid-1"
					radius="l"
					paddingX="24"
					paddingY="16"
					marginBottom="xs">
					<Text
						onBackground="neutral-medium">
						As the bombs rain down, Gazans are desperately trying to evacuate through the only escape route i.e. the Rafah border crossing. Although
						it is now closed, once open again, the Egyptians are charging our brothers and sisters $5000 per person just to cross through. FreeGazans was created
						to have a centralised place to find the gofundme or other donation links of vetted individuals and families in Gaza. Links have been sourced directly 
						from the individuals who can be contacted via LinkedIn.
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
						{/* <Flex
							position="relative"
							fillWidth
							paddingY="xs"
							paddingX="xl">
							<Flex
								style={{ top: '15%', left: '50%', transform: 'translateX(-50%) translateY(-50%) rotate(30deg)', backgroundImage: 'radial-gradient(ellipse, var(--brand-background-strong) 0%, rgba(0,0,0,0) 75%' }}
								position="absolute"
								width={20}
								height={12}></Flex>
							<Flex
								style={{ top: '15%', left: '38%', transform: 'translateX(-50%) translateY(-50%) rotate(60deg)', backgroundImage: 'radial-gradient(ellipse, var(--brand-background-strong) 0%, rgba(0,0,0,0) 50%)' }}
								position="absolute"
								width={24}
								height={42}></Flex>
							<img
								style={{ height:'4rem', position:'relative' }}
								src="images/logo.svg"
								alt="logo" />
						</Flex> */}
						<Flex
							position="relative"
							fillWidth
							direction="column"
							gap="24"
							>
							<Heading
								variant="display-strong-s"
								onBackground="neutral-strong"
								style={{color: 'red'}}>
								Read their stories.<br/> Donate to their cause.<br/> Share Share Share.
							</Heading>
							<Button
								style={{ marginBottom: 'var(--static-space-20)' }}
								suffixIcon="chevronRight"
								variant="secondary">
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
						fillWidth
						>
						<Link
							style={{ border: '1px solid var(--neutral-border-medium)', borderRadius: 25, padding: 'var(--responsive-space-l)', marginBottom: 10}}
							href="https://www.gofundme.com/f/eid-aladha-donations-for-the-alkabariti-family-of-gaza">
							<Flex
								fillWidth
								direction="column"
								paddingY="8"
								gap="8">
								<Flex
									fillWidth
									alignItems="center"
									gap="12">
									<Text
										onBackground="neutral-strong"
										variant="body-strong-m">
										Sabrin Alkabariti
									</Text>
									<Icon
										size="s"
										name="arrowUpRight"/>
								</Flex>
								<Text
									onBackground="neutral-weak"
									variant="body-default-s">
									👉 Sabrin lives in Gaza with her parents and four siblings - Ahmed, Mahmoud, Mohamed and Hanin. Since the start of the genocide and the destruction of their home, they have had to move seven times. After seeking refuge in Rafah, they had to flee the Israeli assault and are all now living in a single tent in Khan Younis.
								</Text>
							</Flex>
						</Link>
						<Link
							style={{ border: '1px solid var(--neutral-border-medium)', borderRadius: 25, padding: 'var(--responsive-space-l)', marginBottom: 10}}
							href="https://gofund.me/e1e1b340">
							<Flex
								fillWidth
								direction="column"
								paddingY="8"
								gap="8">
								<Flex
									fillWidth
									alignItems="center"
									gap="12">
									<Text
										onBackground="neutral-strong"
										variant="body-strong-m">
										Iyad R. Manaa
									</Text>
									<Icon
										size="s"
										name="arrowUpRight"/>
								</Flex>
								<Text
									onBackground="neutral-weak"
									variant="body-default-s">
									👉 Iyad his family have lost their apartment and all their personal belongings when the building where they lived for 10 years was destroyed by the IOF. They moved first to Rafah and then to Deir Al-Balah, still displaced and homeless without access to water and food. Click to read their story.
								</Text>
							</Flex>
						</Link><Link
							style={{ border: '1px solid var(--neutral-border-medium)', borderRadius: 25, padding: 'var(--responsive-space-l)', marginBottom: 10}}
							href="https://gofund.me/2b217b63">
							<Flex
								fillWidth
								direction="column"
								paddingY="8"
								gap="8">
								<Flex
									fillWidth
									alignItems="center"
									gap="12">
									<Text
										onBackground="neutral-strong"
										variant="body-strong-m">
										Ibrahim Ahmad
									</Text>
									<Icon
										size="s"
										name="arrowUpRight"/>
								</Flex>
								<Text
									onBackground="neutral-weak"
									variant="body-default-s">
									👉 Ibrahim, his wife, and mom are facing starvation and lack of water in central Gaza. Their only hope is to flee Gaza when Rafah Crossing reopens. The bribe to cross to the border is 5000£ and they can only count on us to pay that shameful amount. 
								</Text>
							</Flex>
						</Link><Link
							style={{ border: '1px solid var(--neutral-border-medium)', borderRadius: 25, padding: 'var(--responsive-space-l)', marginBottom: 10}}
							href="https://gofund.me/59eef690">
							<Flex
								fillWidth
								direction="column"
								paddingY="8"
								gap="8">
								<Flex
									fillWidth
									alignItems="center"
									gap="12">
									<Text
										onBackground="neutral-strong"
										variant="body-strong-m">
										Abdul Rahman Alsalibi
									</Text>
									<Icon
										size="s"
										name="arrowUpRight"/>
								</Flex>
								<Text
									onBackground="neutral-weak"
									variant="body-default-s">
									👉 Abdarhman's family. Since the beginning of the conflict this family have already been displaced 7 (seven!!!!) times. Her sister needs immediate medical attention and his brother wants to rebuild the family bakery destroyed by the IOF. Please, read about their campaign here.
								</Text>
							</Flex>
						</Link><Link
							style={{ border: '1px solid var(--neutral-border-medium)', borderRadius: 25, padding: 'var(--responsive-space-l)', marginBottom: 10}}
							href="https://www.gofundme.com/f/help-abdarhman-family-survive-the-genocide">
							<Flex
								fillWidth
								direction="column"
								paddingY="8"
								gap="8">
								<Flex
									fillWidth
									alignItems="center"
									gap="12">
									<Text
										onBackground="neutral-strong"
										variant="body-strong-m">
										Yasmin Riyad
									</Text>
									<Icon
										size="s"
										name="arrowUpRight"/>
								</Flex>
								<Text
									onBackground="neutral-weak"
									variant="body-default-s">
									👉 Please support Yasmin and Islam and as many Palestinians you can by donating or sharing their gofundme. These are the people you see being killed and wounded by the US and “Israel” on your screens. Support them please.
								</Text>
							</Flex>
						</Link>
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
					© 2024 Once UI, MIT License
				</Text>
				<Flex
					gap="12">
					<Button
						href="https://github.com/once-ui-system/nextjs-starter"
						prefixIcon="github"
						size="s"
						variant="tertiary">
						GitHub
					</Button>
					<Button
						href="https://discord.com/invite/5EyAQ4eNdS"
						prefixIcon="discord"
						size="s"
						variant="tertiary">
						Discord
					</Button>
				</Flex>
			</Flex>
		</Flex>
	);
}
