import React from 'react';
import Section from './Fullpage_video';

export default {
  title: 'Components/Section',
  component: Section,
};

const Template = (args) => <Section {...args} />;

export const Default = Template.bind({});
Default.args = {
  videoSrc: 'https://youtu.be/ZmaGhUTwdUY?si=5vE5C97J6KJqp7UTs', // Aquí colocas la URL del video desde internet
  children: <h1 className="text-4xl font-bold">¡Hola, mundo!</h1>,
};
