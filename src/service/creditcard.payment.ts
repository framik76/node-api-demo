import {Payment, PaymentMethod} from "../dto/payment.type";

export class CreditCardPayment implements PaymentMethod {
    payment: Payment;

    constructor(payment: Payment) {
        this.payment = payment;
    }

    charge(): Payment {
        console.log("Charging with credit card");
        return this.payment;
    }
}