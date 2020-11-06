
const Ticket = require("../model/ticket")
const globalHelber = require("../helber/globalHelber.js")


const ticketsController = (function(){

    const obj = {};

    /**
     * Functions
     */


    obj.addNewTicket = async function (req, res, next){



        const {someVariable} = req.body; // TODO, this is undefined.


        // example to use Global helber.
        const myName = globalHelber.getMyName("Emad");


        try{


            // example to how can use helber functions.
            const time = obj.getTime();
    
            const someResponse = {key : "may key", value: "my value", time : time, helberMessage : myName};


            const ticket = new Ticket();

            await ticket.save(); // TODO, this will get Error.


            return obj.successRespone(res, someResponse, "the ticket is inserted successfully!");



        } catch (err) {

            obj.errorRespone(res, err, "the ticket is not inserted!");

        }

    }

    obj.getTimeForTesting = function (req, res, next){

        const time = obj.getTime();


        try{


            obj.successRespone(res, time, "this is the time, just example for testing :)");


        } catch (err) {
            
            obj.errorRespone(res, err, "thare is no time faund :(");

        }

    }







    /**
     * Helper
    */

    obj.getTime = function (){

        return new Date();

    }

    /**
     * set success Response to client.
     * @param {object} response 
     * @param {object} data 
     * @param {string} message 
     */
    obj.successRespone = function(res, data, message){

        /**
         * kann here add you for handels your response
         * before sendet it to clinte
         */
         res.json({result: "success", log: { data: data, message: message}});
    }


    /**
     * set error Response to client.
     * @param {object} response
     * @param {object} error 
     * @param {string} message 
     */
    obj.errorRespone = function(res, error, message){

        /**
         * can here add handels for response
         * before sendet it to clinte
         */
        return res.status(400).json({result: "error", log: { data: error.toString(), message: message}});
    }



    return obj;

})();


module.exports = ticketsController;