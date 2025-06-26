import { SecondaryText, Title } from "@/utils/Typography"
import { BRAND_NAME } from "./Home/Home";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";


const BRAND_INFO = "We have clothes that suits your style and which you’re proud to wear. From women to men.";
const FOOTER_LINKS = [
    {title: "Company", links: ["About", "Features", "Works", "Careers"]},
    {title: "Help", links: ["Customer Support", "Delivery Details", "Terms & Conditions", "Policy"]},
    {title: "FAQ", links: ["Account", "Manage Deliveries", "Orders", "Payments"]}
];
const PAYMENTS_ACCEPTED = ["/visa.svg", "/mastercard.svg", "/paypal.svg", "/apple-pay.svg"];

export const Footer = () => {
    return (
        <div className="bg-[#F0F0F0] px-20 py-15 flex flex-col max-sm:px-4 max-sm:py-10">
            <div className="flex max-sm:flex-col">
                <div className="max-w-[260px] mr-6 flex flex-col max-sm:mb-1">
                    <Title> {BRAND_NAME} </Title>
                    <SecondaryText className="mt-2"> {BRAND_INFO} </SecondaryText>

                    <div className="flex gap-1 mt-auto max-sm:mt-1.5"> 
                        <div className="w-8 h-8 bg-white border border-tertiary rounded-full flex items-center justify-center">
                            <FaInstagram className="h-4 w-4" />
                        </div>
                        <div className="w-8 h-8 bg-white border border-tertiary rounded-full flex items-center justify-center">
                            <FaFacebookF className="h-3.5 w-3.5" />
                        </div>
                        <div className="w-8 h-8 bg-white border border-tertiary rounded-full flex items-center justify-center">
                            <FaTwitter className="h-4 w-4" />
                        </div>
                        <div className="w-8 h-8 bg-white border border-tertiary rounded-full flex items-center justify-center">
                            <FaGithub className="h-4 w-4" />
                        </div>
                    </div>
                </div>
                <div className="flex justify-around grow max-sm:flex-col">
                {
                    FOOTER_LINKS.map((f) => {
                        return (
                            <div key={f.title} className="max-sm:mt-2.5">
                                <p style={{fontSize: 16}}> {f.title} </p>
                                {
                                    f.links.map((link, index) => {
                                        return (<SecondaryText key={index} className="mt-3 max-sm:mt-1"> {link} </SecondaryText>);
                                    })
                                }           
                            </div>
                        )
                    })
                }
                </div>
            </div>
            <hr className="mt-10 text-[#00000019]" />
            <div className="mt-3 flex max-sm:flex-col-reverse max-sm:gap-3 max-sm:items-center">
                <SecondaryText> {"Developed By "} 
                    <a className="text-brand cursor-pointer underline" href="https://www.linkedin.com/in/mahendra-kotapati/">Mahendra Kotapati</a> 
                </SecondaryText>
                <div className="ml-auto flex gap-2 max-sm:ml-0">
                    {PAYMENTS_ACCEPTED.map((icon, index) => {
                        return (
                            <div key={index} className="w-11 h-8 p-1 bg-white border border-tertiary rounded-md flex items-center justify-center">
                                <img src={icon}></img>
                            </div>
                        )
                    })}
                </div>
            </div>
            
        </div>
    )
}