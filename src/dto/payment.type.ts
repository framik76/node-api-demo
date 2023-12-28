
export type Payment = {
    clientId: string,
    amount: number,
    type: "CreditCard" | "DebitCard"
}

export interface PaymentMethod {
    charge(): Payment;
}