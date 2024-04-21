/**
 * A button component.
 * @param props The properties for the button.
 * @param props.text The text to display on the button.
 * @returns The rendered button component.
 */
export function Button(props: { text: string }): JSX.Element {
  return <button>{props.text}</button>;
}
