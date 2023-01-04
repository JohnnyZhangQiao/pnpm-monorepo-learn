declare type SmallColorUiProps = {
  text: string;
  callback: (url: string) => unknown;
};
declare const SmallColorUi: React.ForwardRefExoticComponent<SmallColorUiProps & React.RefAttributes<HTMLDivElement>>;

export default SmallColorUi;
