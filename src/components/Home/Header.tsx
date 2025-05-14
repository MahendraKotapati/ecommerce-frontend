import { useRouter } from "next/router";
import styles from "./Header.module.css";
import { BRAND_NAME } from "./Home";

export const Header = () => {

    const navigation = ["Shop", "On Sale", "New Arrivals", "Brands"];
    const router = useRouter();

    const goToHome = () => {
      router.push('/');
    };

    return (
        <div className={styles.header_container}>
            <div className={styles.brand + " cursor-pointer"} onClick={goToHome}>{BRAND_NAME}</div>
            <div className={styles.nav_container}>
                {
                    navigation.map((navTitle) => {
                        return <div key={navTitle} className={styles.nav_title}> {navTitle} </div>;
                    })
                }
            </div>
            <div className="flex items-center bg-gray-100 rounded-full w-[577px] p-2 px-4">
                <img src="./search.svg"></img>
                <input
                    type="text"
                    placeholder="Search for products..."
                    className="bg-transparent outline-none ml-2 text-gray-600 w-full"
                />
            </div>
            
            <div className="flex items-center gap-3 ml-auto">
                <img width={24} height={24} src="./cart.svg"></img>
                <img width={24} height={24} src="./profile.svg"></img>
            </div>
        </div>
    )
}