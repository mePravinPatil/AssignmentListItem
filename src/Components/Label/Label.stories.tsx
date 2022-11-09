import { Meta, Story } from '@storybook/react';
import Label from './Label';

export default {
    title : "Label",
    component: Label
} as Meta<typeof Label>


export const Default = () => <Label title="List Item Title" subtitle="List Item Title subtitle"/>