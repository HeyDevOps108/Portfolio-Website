import Scene from "./Scene";

const CharacterModel = () => {
  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "45%",
        height: "100vh",
        zIndex: 1,
        pointerEvents: "none",
      }}
    >
      <Scene />
    </div>
  );
};

export default CharacterModel;