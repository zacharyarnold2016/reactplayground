export const imgFallback = ({ currentTarget }: any) => {
  currentTarget.onerror = null;
  currentTarget.src = "https://picsum.photos/500/750";
};
