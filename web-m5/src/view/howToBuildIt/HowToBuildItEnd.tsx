import { Result } from 'antd';
import Zoom from '../../animations/Zoom';

export default function HowToBuildItEnd() {
    return (
        <>
            <Zoom>
                <Result
                    status='success'
                    title='You have ended the installation process'
                />
            </Zoom>
        </>
    );
}