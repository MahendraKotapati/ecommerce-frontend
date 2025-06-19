import { Input } from "@/utils/components-shadcn/ui/input";
import { Label } from "@/utils/components-shadcn/ui/label";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/utils/components-shadcn/ui/select"
import { US_STATE_LIST } from "@/utils/Constant";

export const inputStyles = (error: boolean) =>  `bg-white border ${error ? 'border-red-600 focus:border-red-600 focus-visible:shadow-none' : 'border-secondary'} shadow-none`;
export const errorStyles = "mt-1.5 ml-1.5 text-xs text-red-600";

interface Props {
    title: string;
    address: Address;
    addressDispatch: any;
    errors: AddressErrors;
}

export interface AddressErrors {
    firstName: boolean;
    lastName: boolean;
    streetAddress: boolean;
    city: boolean;
    state: boolean;
    country: boolean;
    zipCode: boolean;
}

export type Address = {
    firstName: string;
    lastName: string;
    streetAddress: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
}


export const Address = (props: Props) => {

    const {address, errors} = {...props};

    const inputChangeHandler = (type: string, data: string) => {
        let updatedData = data.trim();
        if (type == 'zipCode') {
            updatedData = updatedData.replace(/\D/g, ""); // keep only digits;
            if (updatedData.length > 5)
                return ;
        }
        props.addressDispatch({type, data: updatedData });
    }

    return (
        <>
            <p className="text-xl font-semibold"> {props.title} </p>
            <div className="flex gap-3">
                <div>
                    <Label htmlFor="FirstName" className="mb-1.5">First Name</Label>
                    <Input type="text" id="FirstName" value={address.firstName} onChange={(e) => inputChangeHandler('firstName', e.target.value)} className={inputStyles(errors.firstName)} placeholder="First Name" />
                    {errors.firstName && <p className={errorStyles}>First Name is Invalid </p>}
                </div>
                <div>
                    <Label htmlFor="LastName" className="mb-1.5">Last Name</Label>
                    <Input type="text" id="LastName" value={address.lastName} onChange={(e) => inputChangeHandler('lastName', e.target.value)} placeholder="Last Name" className={inputStyles(errors.lastName)} />
                    {errors.lastName && <p className={errorStyles}>Last Name is Invalid </p>}
                </div>
            </div>

            <div>
                <Label htmlFor="Country" className="mb-1.5">Country</Label>
                <Input type="text" id="Country" placeholder="Country" value={address.country} disabled={true} className={inputStyles(errors.country)} />
                {errors.country && <p className={errorStyles}>Country is Invalid </p>}
            </div>

            <div>
                <Label htmlFor="StreetAddress" className="mb-1.5">Street Address</Label>
                <Input type="text" id="StreetAddress" value={address.streetAddress} onChange={(e) => inputChangeHandler('streetAddress', e.target.value)} placeholder="Street Address" className={inputStyles(errors.streetAddress)} />
                {errors.streetAddress && <p className={errorStyles}>Street Address is Invalid </p>}
            </div>

            <div className="flex gap-3">
                <div>
                    <Label htmlFor="City" className="mb-1.5">City</Label>
                    <Input type="text" id="City" value={address.city} placeholder="City" onChange={(e) => inputChangeHandler('city', e.target.value)} className={inputStyles(errors.city)} />
                    {errors.city && <p className={errorStyles}>City is Invalid </p>}
                </div>

                <div>
                    <Label htmlFor="State" className="mb-1.5">State</Label>
                    <Select onValueChange={(value: string) => inputChangeHandler('state', value)}>
                        <SelectTrigger className={`w-[170px] ${inputStyles(errors.state)}`}>
                            <SelectValue placeholder="State" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                {US_STATE_LIST.map((state: {name: string, code: string}) => {
                                    return (<SelectItem key={state.code} value={state.code}>{state.name}</SelectItem>)
                                })}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    {errors.state && <p className={errorStyles}>State is Invalid </p>}
                </div>

                <div>
                    <Label htmlFor="ZipCode" className="mb-1.5">Zip Code</Label>
                    <Input type="text" id="ZipCode"
                     value={address.zipCode}
                     onChange={(e) => inputChangeHandler('zipCode', e.target.value)} placeholder="Zip Code"  className={inputStyles(errors.zipCode)} />
                    {errors.zipCode && <p className={errorStyles}>Zip Code is Invalid </p>}
                </div>
            </div>
        </>
    );
}