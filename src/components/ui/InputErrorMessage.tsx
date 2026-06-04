interface IProps {
  msg?: string;
  key?: string;
}
const InputErrorMessage = ({ msg }: IProps) => {
  return msg ? (
    <span className="block text-red-700 text-sm pt-2">{msg}</span>
  ) : null;
};

export default InputErrorMessage;
