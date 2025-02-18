export default function InputBox({ type = "number", label, value, onChange }) {
  return (
    <div>
      <label>{label}</label>
      <input type={type} value={value} onChange={onChange}></input>
    </div>
  );
}
