import { DotContainer } from "./styles";
export type DotProps = {
  horiozntalPosition: number;
  verticalPosition: number;
  background?: string
};
export function Dot({ horiozntalPosition, verticalPosition, background }: DotProps) {
  return (
    <DotContainer
      background={background}
      horiozntalPosition={horiozntalPosition}
      verticalPosition={verticalPosition}
    />
  );
}
