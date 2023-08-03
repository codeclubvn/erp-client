import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonColors, ButtonProps, ButtonSizes } from '.'
import { Plus, User } from 'lucide-react'

const meta: Meta<ButtonProps> = {
    title: 'components/Button',
    component: Button,
    tags: ['autodocs'],
    args: {
        size: 'base',
        color: 'primary',
        disabled: false,
    },
    argTypes: {
        size: {
            control: 'select',
            options: ['xs', 'sm', 'base', 'lg', 'xl'],
        },
        color: {
            control: 'select',
            options: ['primary', 'dark', 'gray', 'white', 'green', 'red'],
        },
    },
}

type Story = StoryObj<typeof Button>

export const Default: Story = {
    render: (_props) => (
        <Button {...props} onClick={() => {}}>
            Default
        </Button>
    ),
}
export const Color: Story = {
    render: (_props) => (
        <div className="flex gap-4">
            {ButtonColors.map((color) => (
                <Button {...props} color={color} onClick={() => {}}>
                    Default
                </Button>
            ))}
        </div>
    ),
}

export const Size: Story = {
    render: (_props) => (
        <div className="flex gap-4">
            {ButtonSizes.map((size) => (
                <Button {...props} size={size} onClick={() => {}}>
                    Default
                </Button>
            ))}
        </div>
    ),
}

export const Outlined: Story = {
    render: (_props) => (
        <div className="flex gap-4">
            {ButtonColors.map((color) => (
                <Button {...props} outlined color={color} onClick={() => {}}>
                    Default
                </Button>
            ))}
        </div>
    ),
}

export const Async: Story = {
    render: (_props) => (
        <Button
            {...props}
            onClick={async () => {
                console.log('clicked')
                await fetch('https://jsonplaceholder.typicode.com/todos/1')
            }}
        >
            Async
        </Button>
    ),
}

export const Loading: Story = {
    render: (_props) => (
        <div className="flex gap-4">
            <Button {...props} outlined loading>
                Loading
            </Button>
            <Button {...props} loading>
                Loading
            </Button>
        </div>
    ),
}

export const Disabled: Story = {
    render: (_props) => (
        <div className="flex gap-4">
            {ButtonColors.map((color) => (
                <Button {...props} color={color} onClick={() => {}} disabled>
                    Default
                </Button>
            ))}
        </div>
    ),
}

export const Icon: Story = {
    render: (_props) => (
        <div className="flex gap-4">
            <Button onClick={() => {}} startDecorator={<User />} {...props}>
                Icon
            </Button>
            <Button onClick={() => {}} {...props} endDecorator={<Plus />}>
                Icon
            </Button>
            <Button
                onClick={() => {}}
                {...props}
                startDecorator={<User />}
                endDecorator={<Plus />}
            >
                Icon
            </Button>
            <Button
                onClick={() => {}}
                startDecorator={<User />}
                {...props}
                outlined
            >
                Icon
            </Button>
            <Button
                onClick={() => {}}
                {...props}
                endDecorator={<Plus />}
                outlined
            >
                Icon
            </Button>
            <Button
                onClick={() => {}}
                {...props}
                startDecorator={<User />}
                endDecorator={<Plus />}
                outlined
            >
                Icon
            </Button>
        </div>
    ),
}

export default meta
