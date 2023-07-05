export default function PlayerSpawner(props: { name: string; wallet: string }) {
  const randomPosition = {
    top: Math.floor(Math.random() * 90) + "vh",
    left: Math.floor(Math.random() * 90) + "vw",
  };

  const randomDuration = Math.floor(Math.random() * 6 + 2) + "s"; // Random duration between 2s and 8s

  return (
    <div
      className={`${randomPosition} relative floating-element z-10 bg-black w-auto`}
      style={{
        ...randomPosition,
        animationDuration: randomDuration,
      }}
    >
      <p>{props.name}</p>
    </div>
  );
}
