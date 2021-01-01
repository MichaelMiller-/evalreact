import check_circle from './Font_Awesome_5_solid_check-circle.svg';
import times_circle from './Font_Awesome_5_solid_times-circle.svg';

export default function SurveyAnswer(props) {
   let formated_answer = props.answer;
   if (props.answer === "")
      formated_answer = "not submitted";

   let ico = times_circle;
   if (props.answer === props.correct)
      ico = check_circle;

   return (
      <div>
         <p className="SurveyAnswer-title">{props.title}</p>
         <p><img src={ico} width="32" height="32"></img>{formated_answer}</p>
      </div>
   );
}
