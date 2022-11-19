export default interface FilterItem<
  T extends string | number,
  U extends { [key: string]: any } | undefined = undefined,
> {
  value: T;
  label: string;
  params?: U;
}
