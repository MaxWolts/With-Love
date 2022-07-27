import { assign, createMachine } from "xstate";

const orderingMachine = createMachine({
  id: "buy your drink",
  context: {
    drink: "",
    drinkType: "",
    size: "",
    orderType: "",
    error: "",
  },
  initial: "initial",
  states: {
    initial: {
      on: {
        CONTINUE: {
          target:  "selection",
          actions: assign({
            drink: (context, event) => event.drink
          })
        }
      },
    },
    selection: {
      on: {
        NEXT: {
          target: "size",
          actions: assign({
            drinkType: (context, event) => event.drinkType
          })
        },
        BACK: {
          target: "initial",
          actions: assign({
            drink: ""
          })
        },
      },
    },
    size: {
      on: {
        CONTINUE: {
          target: "orderType",
          actions: assign({
            size: (context, event) => event.size
          })
        },
        BACK: {
          target: "selection",
          actions: assign({
            drinkType: ""
          })
        },
      },
    },
    orderType: {
      on: {
        DONE: {
          target: "end",
          actions: assign({
            orderType: (context, event) => event.orderType
          })
        },
        BACK: {
          target: "size",
          actions: assign({
            size: ""
          })
        },
      },
    },
    end: {
      on: {
        FINISH: {
          target: "initial",
          actions: "clearContext"
        },
      },
    }
  },
},
{
  actions: {
    clearContext: assign( ( context ) => {
        context.drink = ""
        context.drinkType = ""
        context.size = ""
        context.orderType = ""
        context.error = ""
      }
    )
  },
  guards: {
    // moreThanOnPassenger: (context) => {
    //   return context.passengers.length > 0
    // },
    // baggageSelected: (context) => {
    //   return context.passengers.map(passenger => passenger.baggage).every((item)=> item!== '')
    // }
  },
});
export default orderingMachine;