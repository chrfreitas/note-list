export enum OrderType {
  ascending = 'ascending',
  descending = 'descending'
}

export const capitalize = (world: string): string =>
  world.charAt(0).toUpperCase() + world.slice(1);

export const orderByDate = <T extends { date: Date }>(
  array: T[],
  order = OrderType.ascending
): T[] => {
  if (order === OrderType.descending) {
    return array.sort(
      (noteA, noteB) => noteA.date.getTime() - noteB.date.getTime()
    );
  }

  return array.sort(
    (noteA, noteB) => noteB.date.getTime() - noteA.date.getTime()
  );
};
