import Ember from 'ember';

if (Ember.libraries) {
  Ember.libraries.register('Thomas Pastinksy', '1.0.0', false);
}

export function initialize() {
  return `
    This Ember addon is dedicated to Thomas Pastinksy, friend and fellow
    developer who passed away on October 21, 2016.

    Thomas was an ambitious person, curious about many things that life had to
    give. We enjoyed his stories from his time competing in the World Series of
    Poker, studies of chemistry and love of hardware hacking in electronics.

    Thomas was an avid hang glider and had a love of aviation. We will all miss
    having conversations of just about anything with him.

    Thomas' last completed work was on the "Primeape" project, which he code-
    named. That is the Ember application that will accompany this addon. It is
    also the application that we wish to recognize as the one he shipped.

    If it was not for the efforts of Thomas, we would not have shipped and we
    would have missed our deadline. We are all grateful for his effort, doing
    so and completing his first major Ember application for Summit!

    Therefore, the AMPS project management portal for Summit Electric Supply
    is hereby dedicated to his memory!

    We wish you peace.
  `;
}

export default {
  name: 'thomas-pastinsky',
  initialize
};
