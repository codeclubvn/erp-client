import type { Meta, StoryObj } from '@storybook/react'

import { Card, CardProps } from '../../components/Card'
import { Button } from '../../components'
import { DashboardCard } from '../../screens/HomePage/components'

const chart = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="45"
        viewBox="0 0 60 45"
        fill="none"
    >
        <rect y="12" width="12" height="33" rx="2" fill="#FFC13A" />
        <rect x="16" y="23" width="12" height="22" rx="2" fill="#FFC13A" />
        <rect x="32" width="12" height="45" rx="2" fill="#FFC13A" />
        <rect x="48" y="33" width="12" height="12" rx="2" fill="#FFC13A" />
    </svg>
)

const cardMeta: Meta<CardProps> = {
    title: 'components/Card',
    component: Card,
    tags: ['autodocs'],
    args: {
        className: 'bg-white',
        children: 'This is a card :D',
    },
    argTypes: {},
}

type Story = StoryObj<typeof Card>

export const Default: Story = {
    render: (props) => <Card {...props}>{props.children}</Card>,
}

export const DashboardCardTemplate: Story = {
    render: (props) => (
        <DashboardCard
            {...props}
            data-dashboard-card
            title="Doanh thu tháng hiện tại"
            titleStyle="base"
            price="7,350,000"
            priceStyle="base"
            percentStyle="percentLow"
            desc="Doanh thu"
            percentValue="1,29%"
            chart={chart}
        />
    ),
}

export const Custom: Story = {
    render: (props) => (
        <div className="flex h-fit">
            <Card data-simple-card className="h-fit bg-red-200">
                Background Red
            </Card>

            <Card data-card_with_btn className="mx-4 space-y-2">
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
            </Card>
        </div>
    ),
}

export default cardMeta
