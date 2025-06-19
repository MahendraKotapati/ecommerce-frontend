import { Button } from "@/utils/components-shadcn/ui/button"
import { Address, AddressErrors } from "./Address"
import { Payment, PaymentInfo, PaymentInfoErrors } from "./Payment"
import { Header } from "../Home/Header"
import { Footer } from "../Footer"
import { Summary } from "./Summary"
import { useReducer, useState } from "react";
import { useRouter } from "next/router"

const addressInitialState: Address = { firstName: '', lastName: '', streetAddress: '', city: '', state: '', country: 'United States', zipCode: '' };
const addressErrorsInitialState: AddressErrors  = { firstName: false, lastName: false, streetAddress: false, city: false, state: false, country: false, zipCode: false };

const paymentInfoInitialState: PaymentInfo = {cardNumber: '', expiryDate: '', secretCode: '', nameOncard: ''};
const paymentErrorsInfoInitialState: PaymentInfoErrors = {cardNumber: false, expiryDate: false, secretCode: false, nameOncard: false};


const paymentInfoReducer = (state: PaymentInfo, action: {type: string, data: string}): PaymentInfo => {
    switch (action.type) {
        case 'cardNumber': 
            return {...state, cardNumber: action.data};
        case 'expiryDate':
            return {...state,  expiryDate: action.data};
        case 'secretCode':
            return {...state, secretCode: action.data};
        case 'nameOncard':
            return {...state, nameOncard: action.data};

        default: 
            return state;
    }
}

const paymentInfoErrorReducer = (state: PaymentInfoErrors, action: {type: string, data: boolean}) => {
    switch (action.type) {
        case 'cardNumber': 
            return {...state, cardNumber: action.data};
        case 'expiryDate':
            return {...state,  expiryDate: action.data};
        case 'secretCode':
            return {...state, secretCode: action.data};
        case 'nameOncard':
            return {...state, nameOncard: action.data};

        default: 
            return state;
    }
}

export const Checkout = () => {

    const addressErrorsReducer = (state: AddressErrors, action: {type: string, data: boolean}) => {
        switch (action.type) {
            case 'firstName':
                return {...state, firstName: action.data};
            case 'lastName':
                return {...state, lastName: action.data};
            case 'streetAddress':
                return {...state, streetAddress: action.data};
            case 'city':
                return {...state, city: action.data};
            case 'state':
                return {...state, state: action.data};
            case 'country':
                return {...state, country: action.data};
            case 'zipCode':
                return {...state, zipCode: action.data};
    
            default: 
                return state;
        }
    }

    const [deliveryAddressErrors, deliveryAddressErrorsDispatch] = useReducer(addressErrorsReducer, addressErrorsInitialState); 
    const [billingAddressErrors, billingAddressErrorsDispatch] = useReducer(addressErrorsReducer, addressErrorsInitialState); 
    const [paymentInfoErrors, paymentInfoErrorsDispatch] = useReducer(paymentInfoErrorReducer, paymentErrorsInfoInitialState); 

    const addressReducer = (state: Address, action: {type: string, data: string}) => {
        switch (action.type) {
            case 'firstName': 
                return {...state, firstName: action.data};
            case 'lastName':
                return {...state, lastName: action.data};
            case 'streetAddress':
                return {...state, streetAddress: action.data};
            case 'city':
                return {...state, city: action.data};
            case 'state':
                return {...state, state: action.data};
            case 'country':
                return {...state, country: action.data};
            case 'zipCode':
                return {...state, zipCode: action.data};
    
            default: 
                return state;
        }
    }

    const [deliveryAddress, deliveryAddressDispatch] = useReducer(addressReducer, addressInitialState); 
    const [billingAddress, billingAddressDispatch] = useReducer(addressReducer, addressInitialState); 
    const [paymentInfo, paymentInfoDispatch] = useReducer(paymentInfoReducer, paymentInfoInitialState); 

    const [showBillingAddress, setShowBillingAddress] = useState(false);
    const router = useRouter();

    const handleBillingAddressCheckbox = (isChecked: boolean) => {
        if (isChecked) {
            setShowBillingAddress(false);
        } else {
            setShowBillingAddress(true);
        }
    };


    const goToPage = (url: string) => {
        router.push(url);
    }

    const isDeliveryAddresValid = () => {
        let isValid = true;
        const pinCodeRegex = /^\d{5}(-\d{4})?$/; // US pin code validation

        if (!deliveryAddress.firstName) {
            deliveryAddressErrorsDispatch({type: 'firstName', data: true});  
            isValid = false;
        } else {
            deliveryAddressErrorsDispatch({type: 'firstName', data: false});
        }

        if (!deliveryAddress.lastName) {
            deliveryAddressErrorsDispatch({type: 'lastName', data: true});
            isValid = false;
        } else {
            deliveryAddressErrorsDispatch({type: 'lastName', data: false});
        }

        if (!deliveryAddress.streetAddress) {
            deliveryAddressErrorsDispatch({type: 'streetAddress', data: true});
            isValid = false;
        } else {
            deliveryAddressErrorsDispatch({type: 'streetAddress', data: false});
        }

        if (!deliveryAddress.city) {
            deliveryAddressErrorsDispatch({type: 'city', data: true});
            isValid = false;
        } else {
            deliveryAddressErrorsDispatch({type: 'city', data: false});
        }

        if (!deliveryAddress.state) {
            deliveryAddressErrorsDispatch({type: 'state', data: true});
            isValid = false;
        } else {
            deliveryAddressErrorsDispatch({type: 'state', data: false});
        }

        if (!deliveryAddress.country) {
            deliveryAddressErrorsDispatch({type: 'country', data: true});
            isValid = false;
        } else {
            deliveryAddressErrorsDispatch({type: 'country', data: false});
        }

        if (!deliveryAddress.zipCode || !pinCodeRegex.test(deliveryAddress.zipCode)) {
            deliveryAddressErrorsDispatch({type: 'zipCode', data: true});
            isValid = false;
        } else {
            deliveryAddressErrorsDispatch({type: 'zipCode', data: false});
        }

        return isValid;
    }

    const isBillingAddresValid = () => {
        let isValid = true;
        const pinCodeRegex = /^\d{5}(-\d{4})?$/; // US pin code validation

        if (!billingAddress.firstName) {
            billingAddressErrorsDispatch({type: 'firstName', data: true});  
            isValid = false;
        } else {
            billingAddressErrorsDispatch({type: 'firstName', data: false});  
        }

        if (!billingAddress.lastName) {
            billingAddressErrorsDispatch({type: 'lastName', data: true});
            isValid = false;
        } else {
            billingAddressErrorsDispatch({type: 'lastName', data: false});
        }

        if (!billingAddress.streetAddress) {
            billingAddressErrorsDispatch({type: 'streetAddress', data: true});
            isValid = false;
        } else {
            billingAddressErrorsDispatch({type: 'streetAddress', data: false});
        }

        if (!billingAddress.city) {
            billingAddressErrorsDispatch({type: 'city', data: true});
            isValid = false;
        } else {
            billingAddressErrorsDispatch({type: 'city', data: false});
        }

        if (!billingAddress.state) {
            billingAddressErrorsDispatch({type: 'state', data: true});
            isValid = false;
        } else {
            billingAddressErrorsDispatch({type: 'state', data: false});
        }

        if (!billingAddress.country) {
            billingAddressErrorsDispatch({type: 'country', data: true});
            isValid = false;
        } else {
            billingAddressErrorsDispatch({type: 'country', data: false});
        }

        if (!billingAddress.zipCode || !pinCodeRegex.test(billingAddress.zipCode)) {
            billingAddressErrorsDispatch({type: 'zipCode', data: true});
            isValid = false;
        } else {
            billingAddressErrorsDispatch({type: 'zipCode', data: false});
        }
        return isValid;
    }

    const isPaymentInfoValid = () => {
        let isValid = true;

        if (!paymentInfo.cardNumber) {
            paymentInfoErrorsDispatch({type: 'cardNumber', data: true});  
            isValid = false;
        } else {
            paymentInfoErrorsDispatch({type: 'cardNumber', data: false});
        }
        if (!paymentInfo.expiryDate) {
            paymentInfoErrorsDispatch({type: 'expiryDate', data: true});  
            isValid = false;
        } else {
            const expiryDate = paymentInfo.expiryDate.split('/');
            if (parseInt(expiryDate[0]) > 12 || parseInt(expiryDate[1]) > 31) {
                paymentInfoErrorsDispatch({type: 'expiryDate', data: true});  
                isValid = false;
            }
            else {
                paymentInfoErrorsDispatch({type: 'expiryDate', data: false});
            }
        }

        if (!paymentInfo.secretCode || !(paymentInfo.secretCode.length == 3 || paymentInfo.secretCode.length == 4)) {
            paymentInfoErrorsDispatch({type: 'secretCode', data: true});  
            isValid = false;
        } else {
            paymentInfoErrorsDispatch({type: 'secretCode', data: false});
        }

        if (!paymentInfo.nameOncard) {
            paymentInfoErrorsDispatch({type: 'nameOncard', data: true});  
            isValid = false;
        } else {
            paymentInfoErrorsDispatch({type: 'nameOncard', data: false});  
        }

        return isValid;
    }

    const placeOrderHandler = () => {
        const deliveryAddressValid = isDeliveryAddresValid();
        const billingAddressValid = showBillingAddress ? isBillingAddresValid() : true;
        const paymentInfoValid = isPaymentInfoValid();

        if (!deliveryAddressValid || !billingAddressValid || !paymentInfoValid) {
            return;
        }

        goToPage("/thankyou");   
    }

    return (
        <>
        <div className="mx-[100px] mt-4 flex flex-col mb-18">
            <Header basicHeader={false} customStyles="!py-3 !px-0" />
            <p className="text-4xl font-semibold mb-3 mt-6"> Checkout </p>
            <div className="flex gap-6">
                <div className="w-7/12 flex flex-col gap-6">
                    <div className="flex flex-col gap-4 border border-border rounded-[20px] p-5 bg-[#f8f8f8]"> 
                        <Address  title="Delivery Address" 
                                address={deliveryAddress}
                                addressDispatch={deliveryAddressDispatch} 
                                errors={deliveryAddressErrors}
                        />
                    </div>
                    <Payment 
                        billingAddress={billingAddress}
                        addressDispatch={billingAddressDispatch} 
                        billingAddressErrors={billingAddressErrors} 
                        paymentInfoErrors={paymentInfoErrors}  

                        paymentInfo={paymentInfo}
                        paymentInfoDispatch={paymentInfoDispatch}

                        showBillingAddress={showBillingAddress}
                        handleBillingAddressCheckbox={handleBillingAddressCheckbox}
                    />
                </div>
                <Summary placeOrderHandler={placeOrderHandler}></Summary>
            </div>
        </div>
        <Footer />
        </>
    )
}