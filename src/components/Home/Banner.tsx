import styles from "./Banner.module.css";


const BRANDS = ["prada-logo", "ck-logo", "gucci-logo", "vercase-logo", "zara-logo"];

export const Banner = () => {
    return (
    <>
        <div>
            <img src="/banner.png" style={{width: "100%"}}></img>
        </div>
        <div className={styles.brand_container}>
            {BRANDS.map((brandLogo) => {
                return <img key={brandLogo} src={"/" + brandLogo + ".svg"} alt="Logo" />   
            })}
        </div>
    </>
    )
}