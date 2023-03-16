import { createServer, Response } from "miragejs"
if (window.server) {
    server.shutdown()
}

window.server = createServer({
    routes() {
        this.get("/api/user/1", () => {
            return {
                data: {
                    user_id: 1,
                    card_info: {
                        card_holder: "Ajaykumar Rajasekaran",
                        card_number: "5647 3411 2413 2020",
                        thru: "12/20",
                        cvv: "456",
                        pin: "4453",
                        available_balance: 40000
                    },
                    weekly_limit:40000,
                    amount_spent:34000,
                    weeklyLimitEnabled:true
                }
            }
        })


        this.post('/api/user/1/weklylimittoggle', (schema, request) => {
            const data = JSON.parse(request.requestBody);
            
            if( typeof(data.weeklyLimitEnabled) === 'boolean' ) {
                return new Response(200,{},data);
            } 
            else{
                return new Response(400, { some: 'header' }, { errors: [ 'name cannot be blank'] });
            }
        });

        
        this.post('/api/user/1/setweeklylimit', (schema, request) => {
            const data = JSON.parse(request.requestBody);
                return new Response(200,{},data);
            
        });



        this.get("/api/user/1/monthly-expense", () => {
            return {
                data: [{ "month": "Dec", "expense": 6000 }, { "month": "Jan", "expense": 8000 }, { "month": "Feb", "expense": 12000 }, { "month": "Mar", "expense": 4000 }]
            }
        })

    },

})
