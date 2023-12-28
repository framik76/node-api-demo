import {describe, test} from "@jest/globals";
import {PaymentService} from "../../src/service/payment.service";

describe('test payment', () => {
    let paymentService: PaymentService;

    beforeEach(() => {
        paymentService = new PaymentService();
    })

    test('with credit card', () => {
        const ret = paymentService.payWithCreditCard();
        expect(ret.type).toBe("CreditCard")
    })

    test('with debit card', () => {
        const ret = paymentService.payWithDebitCard();
        expect(ret.type).toBe("DebitCard")
    })
});