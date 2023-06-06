import React from "react";
import './BaseLayout.css';
import { Title } from "../components/Title/Title";
import { StepsLayout } from "./StepsLayout";
import { useMachine } from "@xstate/react";
import { Footer } from "../components/Footer/Footer";
import  orderingMachine  from "../Machines/orderingMachine";

export const BaseLayout = () => {
  const [state, send] = useMachine(orderingMachine);

  console.log('nuestra maquina', state.value, state.context);

  return( <div className="BaseLayout">
    <Title/>
    <div className="Steps__container">
      <StepsLayout state={ state } send={ send }/>
    </div>
  </div> )
}