import React from 'react';

export default class Countdown extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         running: false,
         // one minute
         //  timerTime: 60000
         //! \todo naming: is more like a 
         // 5 seconds
         timerTime: 8000
      };
   }

   componentDidMount() {
      this.setState({
         running: true,
         timerTime: this.state.timerTime,
      });
      this.timer = setInterval(() => {
         const newTime = this.state.timerTime - 100;
         if (newTime >= 0) {
            this.setState({ timerTime: newTime });
         } else {
            clearInterval(this.timer);
            this.setState({ running: false });
            //! \todo handleEvent
            this.props.timeout();
         }
      }, 100);
   }

   componentWillUnmount() {
      clearInterval(this.timer);
   }
   // adjustTimer = input => {
   //    const { timerTime, timerOn } = this.state;
   //    const max = 216000000;
   //    if (!timerOn) {
   //      if (input === "incHours" && timerTime + 3600000 < max) {
   //        this.setState({ timerTime: timerTime + 3600000 });
   //      } else if (input === "decHours" && timerTime - 3600000 >= 0) {
   //        this.setState({ timerTime: timerTime - 3600000 });
   //      } else if (input === "incMinutes" && timerTime + 60000 < max) {
   //        this.setState({ timerTime: timerTime + 60000 });
   //      } else if (input === "decMinutes" && timerTime - 60000 >= 0) {
   //        this.setState({ timerTime: timerTime - 60000 });
   //      } else if (input === "incSeconds" && timerTime + 1000 < max) {
   //        this.setState({ timerTime: timerTime + 1000 });
   //      } else if (input === "decSeconds" && timerTime - 1000 >= 0) {
   //        this.setState({ timerTime: timerTime - 1000 });
   //      }
   //    }
   //  };

   // startTimer = () => {
   //    this.setState({
   //       running: true,
   //       timerTime: this.state.timerTime,
   //       timerStart: this.state.timerTime
   //    });
   //    this.timer = setInterval(() => {
   //       const newTime = this.state.timerTime - 10;
   //       if (newTime >= 0) {
   //          this.setState({ timerTime: newTime });
   //       } else {
   //          clearInterval(this.timer);
   //          this.setState({ running: false });
   //          alert("Countdown ended");
   //       }
   //    }, 1000);
   // };

   // stopTimer = () => {
   //    clearInterval(this.timer);
   //    this.setState({ running: false });
   // };

   // resetTimer = () => {
   //    if (this.state.running === false) {
   //       this.setState({ timerTime: this.state.timerStart });
   //    }
   // };

   render() {
      const { timerTime } = this.state;
      const seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
      const minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
      const hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);

//       const { timerTime, timerStart, timerOn } = this.state;
// let seconds = ("0" + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
// let minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2);
// let hours = ("0" + Math.floor((timerTime / 3600000) % 60)).slice(-2);

      return (
         <div className="Countdown">
            {hours} : {minutes} : {seconds}
         </div>
      );
   }
}
