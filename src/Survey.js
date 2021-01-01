// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Button from './Button.js';
import Radio from './Radio.js';
import Countdown from './Countdown.js';
import SurveyAnswer from "./SurveyAnswer.js";

class SurveyPage extends React.Component {
   constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
   }

   handleChange(event) {
      this.props.onChange({
         name: this.props.name,
         value: event.target.value
      });
   }

   render() {
      const radios = this.props.choices.map((value, index) =>
         <Radio id={this.props.name + String(index)} key={index} name={this.props.name} value={value} onChange={(e) => this.handleChange(e)} />
      );

      return (
         <div>
            <form onSubmit={this.handleSubmit}>
               <p>{this.props.title}</p>
               {radios}
               {/* also possible: <textarea value={this.state.value} onChange={this.handleChange} /> */}
            </form>
            <br />
         </div>
      );
   }
};

class Survey extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         running: false,
         ended: false,
         answers: this.props.input.questions.map((q) => { return { name: q.name, title: q.title, correct: q.correctAnswer, a: "" }; })
      };
   }

   begin() {
      this.setState({ running: true });
      this.setState({ ended: false });
   }

   handleTimeout() {
      this.setState({ running: false });
      this.setState({ ended: true });
   }

   handleValueChange(event) {
      const tmp = this.state.answers.map((v) => {
         if (v.name === event.name)
            return { name: v.name, title: v.title, correct: v.correct, a: event.value };
         return v;
      });
      this.setState({ answers: tmp });
   }

   render() {
      let content = [];

      //! \todo find a better solution to handle states and pages
      if (this.state.running === true) {
         content.push(<Countdown timeout={() => this.handleTimeout()} />);
         const qs = this.props.input.questions.map((q) => <SurveyPage
            key={q.name}
            name={q.name}
            title={q.title}
            choices={q.choices}
            onChange={(e) => this.handleValueChange(e)} />);
         content.push(qs);
      }
      if (this.state.ended === true) {
         content = this.state.answers.map((v) => <SurveyAnswer answer={v.a} title={v.title} correct={v.correct} />);
      }
      if (this.state.running === false) {
         content.push(<Button value="begin survey" onClick={() => this.begin()} />);
      }

      return (
         <div className="Survey">
            <h2>Survey</h2>
            <h1>{this.props.input.title}</h1>
            <div>{content}</div>
         </div>
      );
   }
}

export default Survey;