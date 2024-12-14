import Button from "./Button"
import BgShape from "../assets/hero-shape.svg"

const PageHeader = ({title, btnText, url, secondaryBtnText, secondaryUrl}) => {
    return (
        <div className="pt-[155px] md:pt-[230px] pb-[120px] relative overflow-hidden">
            <div class="container">
                <img src={BgShape.src} alt="hero bg shape" className="absolute left-0 top-0 max-w-max" />
                <div class="text-left md:text-center md:max-w-[880px] mx-auto relative z-10">
                    <h1 className="text-[38px] md:text-[60px] text-[#F8F8F8] leading-11 font-medium">{ title }</h1>

                    <div class="flex md:justify-center gap-6 mt-8">
                        <Button label={btnText} url={url} style="btn-light" />
                        <Button label={secondaryBtnText} url={secondaryUrl} style="outline" />
                    </div>
                    
                    </div>
                    
            </div>
        
        </div>
    )
}

export default PageHeader