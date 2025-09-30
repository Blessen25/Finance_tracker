import './styles.css';
import type { MaincontainerProps } from '../interface';

const MainContainer:React.FC<MaincontainerProps> = (Props) => {

    return (

        <>
        <div className={`w-100 cstm_flex flex_j-center flex_a-center ${Props.mainClass}`}>
            <div className={`container_cstm padding_cstm ${Props.containerClass}`}>
                {Props.children}
            </div>
        </div>
        </>
    )
}

export default MainContainer