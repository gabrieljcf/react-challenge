import { BtnLarge } from "./styles";
export type ButtonType = 'success' | 'alert' | 'danger'
type ButtonProps = {
  children: string;
  type?: ButtonType
  handleClick: (event: React.MouseEvent) => void;
};

export function Button({ children, handleClick, type }: ButtonProps) {
  return <BtnLarge onClick={handleClick} buttonType={type}>{children}</BtnLarge>;
}
