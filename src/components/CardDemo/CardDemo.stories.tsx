import type { Meta, StoryObj } from '@storybook/react'
import { CardDemo, CardDemoProps } from '.'
import { Button } from '..'

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
        <div className="space-y-2">
            <CardDemo className="bg-red-200">Background Red</CardDemo>
            <CardDemo className="space-y-2">
                <h1 className="text-lg font-bold">Title</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere quaerat ut culpa. Optio accusantium animi dolore,
                    voluptatum earum ipsa, molestias velit quia iste ratione
                    adipisci. Eaque autem modi omnis neque fugiat vero quas
                    aliquid cumque nulla maxime, inventore necessitatibus
                    possimus harum vitae sint commodi quae quisquam. Harum,
                    placeat? Doloremque, eaque?
                </p>
                <Button onClick={() => console.log('Clicked!')}>Submit</Button>
            </CardDemo>
        </div>
    ),
}

export default meta
