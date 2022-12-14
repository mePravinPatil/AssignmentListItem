import { Meta, Story } from '@storybook/react';
import Image from './Image';

export default {
    title : "Image",
    component: Image
} as Meta<typeof Image>


export const Default = () => <Image src='https://images.unsplash.com/photo-1570126618953-d437176e8c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YnVzaW5lc3MlMjBvZmZpY2V8ZW58MHx8MHx8&w=1000&q=80">' alt='First Image' />