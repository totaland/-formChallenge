import React from 'react';
import useFormState from '../form/useFormState';
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons'
import { Box, Image, Text, ListItem, ListIcon, List } from '@chakra-ui/react'
import man from '../../image/man.png'

function DisplayResult() {
	const {state} = useFormState()
	const { firstName, lastName, email, phone, streetNumber, streetName, streetType, suburb, postCode} = state.values
	return (
		<div>
			<Box p={4} display={{ md: 'flex' }}>
				<Box flexShrink={0}>
					<Image
						borderRadius="lg"
						width={{ md: 40 }}
						src={man}
						alt="Man Portrait"
					/>
				</Box>
				<Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
					<List spacing={3}>
						<ListItem>
							<Text
								fontWeight="bold"
								textTransform="uppercase"
								fontSize="lg"
								letterSpacing="wide"
								color="teal.600"
							>
								{firstName} {lastName}
							</Text>
						</ListItem>
						<ListItem>
							<ListIcon as={EmailIcon} color="green.500" />
							{email}
						</ListItem>
						<ListItem>
							<ListIcon as={PhoneIcon} color="green.500" />
							{phone}
						</ListItem>
						<ListItem>
							<Text mt={2} color="gray.500">
								{streetNumber} {streetName} {streetType} {suburb} {postCode}
							</Text>
						</ListItem>
					</List>
				</Box>
			</Box>
		</div>
	);
}

export default DisplayResult;