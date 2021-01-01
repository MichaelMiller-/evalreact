import { render } from '@testing-library/react';
import SurveyAnswer from "./SurveyAnswer.js";

test('render a wrong servey answer', () => {
   const { getByText } = render(<SurveyAnswer answer="1" correct="2" title="title" />)
   expect(getByText('title')).toBeInTheDocument()
   //! \todo
   // expect(getByText('1 - wrong')).toBeInTheDocument()
});

test('render a wrong servey answer with no answer', () => {
   const { getByText } = render(<SurveyAnswer answer="" correct="2" title="title" />)
   expect(getByText('title')).toBeInTheDocument()
   //! \todo
   // expect(getByText('not submitted - wrong')).toBeInTheDocument()
});

test('render a correct servey answer', () => {
   const { getByText } = render(<SurveyAnswer answer="1" correct="1" title="title" />)
   expect(getByText('title')).toBeInTheDocument()
   //! \todo
});
