import { Input } from "@/utils/components-shadcn/ui/input";
import { Label } from "@/utils/components-shadcn/ui/label";
import { Address, AddressErrors, errorStyles, inputStyles } from "./Address";
import { Checkbox } from "@/utils/components-shadcn/ui/checkbox";
import { useState } from "react";

interface Props {
    billingAddress: Address;
    addressDispatch: any;
    billingAddressErrors: AddressErrors;

    paymentInfoErrors: PaymentInfoErrors;

    paymentInfo: PaymentInfo;
    paymentInfoDispatch: any;

    showBillingAddress: boolean;
    handleBillingAddressCheckbox: any;
}

export interface PaymentInfoErrors {
    cardNumber: boolean;
    expiryDate: boolean;
    secretCode: boolean;
    nameOncard: boolean;
}

export interface PaymentInfo {
    cardNumber: string;
    expiryDate: string;
    secretCode: string;
    nameOncard: string;
}

export const Payment  = (props: Props) => {
    const {paymentInfo, paymentInfoDispatch, paymentInfoErrors, showBillingAddress, handleBillingAddressCheckbox, billingAddress} = {...props};

    const inputChangeHandler = (type: string, data: string) => {

        let updatedData = data.trim();
        if (type == 'cardNumber') {
            updatedData = updatedData.replace(/\D/g, ""); // keep only digits;
            if (updatedData.length > 16) {
                return;
            }
            updatedData = updatedData.replace(/(.{4})/g, "$1 ").trim(); // add space for 4 numbers
        } else if (type == 'expiryDate') {
            updatedData = updatedData.replace(/\D/g, ""); // keep only digits;
            if (updatedData.length > 4) {
                return;
            }
            updatedData = (updatedData.length > 2) ?  `${updatedData.slice(0, 2)}/${updatedData.slice(2, 4)}` : updatedData;
        } else if (type == 'secretCode') {
            updatedData = updatedData.replace(/\D/g, "");
             
            if (updatedData.length > 4) {
                return ;
            }
        }

        props.paymentInfoDispatch({type, data: updatedData });
    }

    return (
        <div className="flex flex-col gap-4 border border-border rounded-[20px] p-5 bg-[#f8f8f8]">
            <p className="text-2xl font-semibold"> Payment </p>
            <div>
                <Label htmlFor="CardNumber" className="mb-1.5">Card Number</Label>
                <Input type="text" id="CardNumber" 
                        value={paymentInfo.cardNumber}
                        onChange={(e) => inputChangeHandler('cardNumber', e.target.value)} placeholder="Card Number" className={inputStyles(paymentInfoErrors.cardNumber)} 
                />
                {paymentInfoErrors.cardNumber && <p className={errorStyles}>Card Number is Invalid </p>}
            </div>

            <div className="flex gap-3">
                <div>
                    <Label htmlFor="Expiry" className="mb-1.5">Expiry Date (MM/YY)</Label>
                    <Input type="text" id="Expiry" value={paymentInfo.expiryDate} onChange={(e) => inputChangeHandler('expiryDate', e.target.value)} placeholder="Expiry Date" className={inputStyles(paymentInfoErrors.expiryDate)} />
                    {paymentInfoErrors.expiryDate && <p className={errorStyles}>Expiry Date is Invalid </p>}
                </div>
                <div>
                    <Label htmlFor="Security Code" className="mb-1.5">Security Code</Label>
                    <Input type="password" id="SecurityCode" value={paymentInfo.secretCode} onChange={(e) => inputChangeHandler('secretCode', e.target.value)}  placeholder="Security Code" className={inputStyles(paymentInfoErrors.secretCode)} />
                    {paymentInfoErrors.secretCode && <p className={errorStyles}>Security Code is Invalid </p>}
                </div>
            </div>
            <div>
                <Label htmlFor="Name on Card" className="mb-1.5">Name on Card</Label>
                <Input type="text" id="NameonCard" onChange={(e) => inputChangeHandler('nameOncard', e.target.value)}   placeholder="Name on Card" className={inputStyles(paymentInfoErrors.nameOncard)} />
                {paymentInfoErrors.nameOncard && <p className={errorStyles}>Name on Card is Invalid </p>}
            </div>

            <div className="flex gap-3">
                <Checkbox id="billingAddressCheckBox" className={inputStyles(false)} defaultChecked onCheckedChange={handleBillingAddressCheckbox} />
                <Label htmlFor="billingAddressCheckBox"> Use shipping address as billing address </Label>
            </div>

            {showBillingAddress &&
                <div className="mt-4 flex flex-col gap-4">  
                    <Address title="Billing address" 
                        address={billingAddress}
                        addressDispatch={props.addressDispatch}
                        errors={props.billingAddressErrors}
                     /> 
                </div>
            }
        </div>
    );
}