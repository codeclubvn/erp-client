import type { Meta, StoryObj } from '@storybook/react'
import { CardDemo, CardDemoProps } from '.'

const meta: Meta<CardDemoProps> = {
    title: 'components/CardDemo',
    component: CardDemo,
    tags: ['autodocs'],
    args: {},
    argTypes: {},
}

type Story = StoryObj<typeof CardDemo>

export const Default: Story = {
    render: (props) => <CardDemo>Default</CardDemo>,
}

export const Custom: Story = {
    render: (props) => (
        <div>
            <CardDemo className="bg-red-200">Background Red</CardDemo>
        </div>
    ),
}

export default meta
