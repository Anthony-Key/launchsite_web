export default function PlayerSpawner(props: { name: string; wallet: string }) {
  return (
    <div className="absolute z-10 w-40 h-40 bg-white text-black ">
      <p>aa{props.name}</p>
    </div>
  );
}
