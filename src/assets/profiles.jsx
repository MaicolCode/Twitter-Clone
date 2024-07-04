import { useState } from "react";
export function Profiles({ name }) {
  let [stateAct, stateBef] = useState({
    state: "Seguir",
    background: "#1a1a1a",
    color: "white",
  });

  const userName = name

  function state() {
    if (stateAct.state == "Seguir") {
      stateBef(
        (stateAct = {
          state: "Siguiendo",
          background: "white",
          color: "#1a1a1a",
          class: "cambio",
        })
      );
    }else {
      stateBef(
        (stateAct = { state: "Seguir", background: "#1a1a1a", color: "white" })
      );
    }
  }
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        alignItems: "center",
        marginTop: 10,
      }}>
      <section style={{ display: "flex", alignItems: "center" }}>
        <img
          alt={name}
          src={`https://unavatar.io/${name}`}
          style={{ width: 60, height: 60, borderRadius: 100 }}
        />
        <section style={{ lineHeight: 0.5, marginInlineStart: 10 }}>
          <h2>{userName}</h2>
          <h4>@{name}</h4>
        </section>
      </section>
      <section style={{ marginInlineStart: "5%" }}>
        <button
          style={{ minWidth: "auto", height: 50, borderRadius: 50 }}
          className={stateAct.class}
          onClick={state}>
          <span className={"msgFollowing"}>{stateAct.state}</span>
          <span className={"msgRemove"}>Dejar de seguir</span>
        </button>
      </section>
    </div>
  );
}
