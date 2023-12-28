import {Payment, PaymentMethod} from "../dto/payment.type";

export class DebitCardPayment implements PaymentMethod {
    payment: Payment;

    constructor(payment : Payment) {
        this.payment = payment;
    }

    charge(): Payment {
        console.log("Charging with debit card");
        return this.payment;
    }


}