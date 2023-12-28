import {CreditCardPayment} from "./creditcard.payment";
import {PaymentStrategy} from "./payment.strategy";
import {DebitCardPayment} from "./debitcard.payment";

export class PaymentService {
    payWithCreditCard = () => {
        const creditCardPayment = new CreditCardPayment ({
            clientId: '1',
            amount: 10,
            type: "CreditCard"
        });
        const paymentStrategy = new PaymentStrategy (creditCardPayment);
        return paymentStrategy.charge();
    }

    payWithDebitCard = () => {
        const debitCardPayment = new DebitCardPayment({
            clientId: '1',
            amount: 10,
            type: "DebitCard"
        });
        const paymentStrategy = new PaymentStrategy (debitCardPayment);
        return paymentStrategy.charge();
    }

}
