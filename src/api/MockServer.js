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

if (window.server) {
  server.shutdown();
}

window.server = createServer({
  routes() {
    this.get("/api/user/1", () => {
      return {
        data: constData
      };
    });

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

  },
});
