import React from 'react';
import Link from './Link';
import styled from 'styled-components';

// Helps with alignment
const Stack = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    gap: 16px;
`

// sets defaults for this component's stories
export default {
    component: Link,
    title: 'Link',
};

// TODO: return story
const Template = args => {
    return (
        <Stack>
            <Link {...args} />
            <Link url = "https://www.harrypotter.com" display_name = "HP HQ"/>
        </Stack>
    );
}

// I've pre-defined arguments for our Default story – feel free to edit!
export const Default = Template.bind({});
Default.args = {
    url: 'https://www.google.com',
    display_name: "GO TO GOOGLE"
}