import { createServer, Response } from "miragejs";

let constData = {
  user_id: 1,
  card_info: {
    card_holder: "Ajaykumar Rajasekaran",
    card_number: "5647341124132020",
    thru: "12/20",
    cvv: "456",
    pin: "4453",
    available_balance: 40000,
  },
  weekly_limit: null,
  amount_spent: 34000,
  weeklyLimitEnabled: false,
  denomination:"USD"
};

let transactionData =  [
  { type: "heading", value: "2023-03-17" },
  { type: "item", id: 1, amount: 100, description: "Taxi", transactedAt: "just now" , transactionType:"dr",color:"#FF0000"},
  { type: "item", id: 2, amount: 50, description: "Movie", transactedAt: "10:32 pm",transactionType:"cr", color:"#008000"  },
  { type: "heading", value: "2023-03-16" },
  { type: "item", id: 3, amount: 75, description: "Shopping", transactedAt: "5:08 pm",transactionType:"dr", color:"#FF0000"},
  { type: "item", id: 4, amount: 80, description: "Travel", transactedAt: "10:11 am" ,transactionType:"dr", color:"#FF0000" },
  { type: "heading", value: "2023-03-15" },
  { type: "item", id: 5, amount: 120, description: "Stationary", transactedAt: "12:39 pm", transactionType:"cr",color:"#008000"  },
  { type: "item", id: 6, amount: 60, description: "Groceries", transactedAt: "9:03 am",transactionType:"dr", color:"#FF0000" },
];

if (window.server) {
  server.shutdown();
}

window.server = createServer({
  routes() {
    this.get("/api/user/1", () => {
      return new Response(200, {},{data: constData});
    });

    // this.get("/api/user/1", () => {
    //   return new Response(404, {}, { error: "User not found" });
    // });

    this.post("/api/user/1/weeklylimit", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      const{limitValue,weeklyLimitEnabled} = data.payload
      if (typeof weeklyLimitEnabled === "boolean" && typeof limitValue === "number") {
        constData['weekly_limit'] =  limitValue;
        constData['weeklyLimitEnabled'] =  weeklyLimitEnabled;
        constData['amount_spent'] = 0;
        return new Response(200, {},{data: constData});

      } else {
        return new Response(
          400,
          { some: "header" },
          { errors: ["name cannot be blank"] }
        );
      }
    });

    this.post("/api/user/1/resetWeeklylimit", (schema, request) => {
        constData['weekly_limit'] =  null;
        constData['weeklyLimitEnabled'] =  false;
        constData['amount_spent'] = null;

        return new Response(200, {},{data: constData});
      
     
    });

    this.get("api/user/1/payments",(schema,request)=>{
      return new Response(200, {},{data:transactionData})
    })
  },
});
