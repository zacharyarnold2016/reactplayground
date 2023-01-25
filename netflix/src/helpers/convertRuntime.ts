export const convertRuntime = (runtime: number) => {
  const hours: number = Math.round((runtime as number) / 60);
  const minutes: number = (runtime as number) % 60;
  const time: string = `${hours}h${minutes}min`;
  return time;
};
