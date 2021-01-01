export default function Radio(props) {
   return (
      <div>
         <input type="radio" id={props.id} name={props.name} value={props.value} onChange={props.onChange}></input>
         <label htmlFor={props.id}>{props.value}</label>
      </div>
   );
}