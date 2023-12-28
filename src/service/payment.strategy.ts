import {Payment, PaymentMethod} from "../dto/payment.type";

export class PaymentStrategy {
    strategy: PaymentMethod;

    constructor(strategy: PaymentMethod) {
        this.strategy = strategy;
    }

    charge(): Payment {
        return this.strategy.charge();
    }
}