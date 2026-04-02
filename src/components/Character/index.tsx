import Scene from "./Scene";

const CharacterModel = () => {
  return (
    <div
      style={{
        position: "fixed",
        left: "50%",
        top: 0,
        transform: "translateX(-50%)",
        width: "100%",   // 🔥 IMPORTANT
        height: "100vh",
        zIndex: 10,
        pointerEvents: "none",
      }}
    >
      <Scene />
    </div>
  );
};

export default CharacterModel;