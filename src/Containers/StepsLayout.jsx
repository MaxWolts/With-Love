import React from "react";
import "./StepsLayout.css";
import { Welcome } from "../components/Welcome/Welcome";
import { Choose } from "../components/Choose/Choose";
import { Size } from "../components/Size/Size";
import { TypeOrder } from "../components/TypeOrder/TypeOrder";
import { End } from "../components/End/End";

export const StepsLayout = ( { state, send } ) => {
  const renderContent = () => {
    if(state.matches('initial')) return <Welcome send={send}></Welcome>;
    if(state.matches('selection')) return <Choose send={send} drink={state.context.drink} context={state.context}></Choose>;
    if(state.matches('size')) return <Size send={send} ></Size>;
    if(state.matches('orderType')) return <TypeOrder send={send} ></TypeOrder>;
    if(state.matches('end')) return <End send={send} context={state.context}></End>;
    return null;
  }

  return (
    <div className="StepsLayout">
      {renderContent()}
    </div>
  )
};