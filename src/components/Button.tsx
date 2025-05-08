interface Props {
    customStyles?: string;
    buttonText: string;
    clickHandler: any;
}

export const Button = (props: Props) => {
    const {customStyles, buttonText, clickHandler} = {...props};

    return (
        <div onClick={clickHandler ?? clickHandler()} 
            className={`border border-border rounded-full py-4 px-12 flex items-center justify-center cursor-pointer w-fit bg-black text-white ${customStyles}`} 
        > 
            {buttonText} 
        </div>
    );
}