import { Story, Meta } from '@storybook/react/types-6-0'
import MediaMatch from '.'

export default {
  title: 'MediaMatch',
  component: MediaMatch
} as Meta

export const Descktop: Story = () => <MediaMatch>OnlyOnDescktop</MediaMatch>

export const Mobile: Story = () => <MediaMatch>OnlyOnDescktop</MediaMatch>

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}
