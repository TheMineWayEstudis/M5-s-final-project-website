import { Carousel } from 'antd';

export default function MainScreenCarousel() {
    const contentStyle: React.CSSProperties = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: 'linear-gradient(90deg, rgba(0,21,41,1) 0%, rgba(23,189,159,1) 50%, rgba(0,21,41,1) 100%)',
    };

    return (
        <Carousel autoplay>
            <div>
                <h1 style={contentStyle}>1</h1>
            </div>
            <div>
                <h3 style={contentStyle}>2</h3>
            </div>
        </Carousel>
    );
}