import { About } from "../components/About"
import { SocialLinks } from "../components/SocialLinks"
import { YoutubeVideo } from "../components/YoutubeVideo"

export const Home = () =>{
    return(
    <div>
        <About />
        <YoutubeVideo id="yHoI0n2VxMU" />
        <YoutubeVideo id="KX-GHRH69Ec" />

        <SocialLinks />
    </div>  
    )
}