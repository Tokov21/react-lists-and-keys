export default function PhoneList(props) {
  return (
    <div>
      <h4>Список контактов</h4>
      <ul>{props.children}</ul>
    </div>
  );
}
