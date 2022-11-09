import { Meta, Story } from '@storybook/react';
import App from './App';

export default {
    title : "App",
    component: App
} as Meta<typeof App>


export const Default = () => <App />