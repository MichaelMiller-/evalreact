import { render, screen } from '@testing-library/react';
import Survey from './Survey';

const mockjson = {
  title: "American History",
  questions: [
     {
        type: "radiogroup",
        name: "civilwar",
        title: "When was the Civil War?",
        choices: [
           "1750-1800", "1800-1850", "1850-1900", "1900-1950", "after 1950"
        ],
        factor_1: 1,
        factor_2: 2,
        factor_3: 1,
        correctAnswer: "1850-1900"
     },
     {
        type: "radiogroup",
        name: "libertyordeath",
        title: "Who said 'Give me liberty or give me death?'",
        choices: [
           "John Hancock", "James Madison", "Patrick Henry", "Samuel Adams"
        ],
        factor_1: 3,
        factor_2: 2,
        factor_3: 3,
        correctAnswer: "Patrick Henry"
     },
     {
        type: "radiogroup",
        name: "magnacarta",
        title: "What is the Magna Carta?",
        choices: [
           "The foundation of the British parliamentary system", "The Great Seal of the monarchs of England", "The French Declaration of the Rights of Man", "The charter signed by the Pilgrims on the Mayflower"
        ],
        factor_1: 1,
        factor_2: 1,
        factor_3: 1,
        correctAnswer: "The foundation of the British parliamentary system"
     }
  ]
};

test('renders a survey', () => {
  const { container, getByText } = render(<Survey input={mockjson} />)
  expect(getByText('Survey')).toBeInTheDocument()
});
