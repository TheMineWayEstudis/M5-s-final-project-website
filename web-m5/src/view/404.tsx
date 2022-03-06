import { Button, Result } from 'antd';
import React, { useState } from 'react'

export default function Error404() {
    const [rickrolled, setRickrolled] = useState<boolean>(false);

    if(rickrolled) return (
        <div
            style={{textAlign: 'center'}}
        >
            <iframe width={1200} height={600} src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    );

    return (
        <>
            <Result
                title="Page not found"
                status='404'
                subTitle='The requested page was not found.'
                extra={[
                    // Oh my, it's rickroll time
                    <Button type='primary' onClick={() => setRickrolled(true)}>Maybe you wanted to go here</Button>
                ]}
                
            />
        </>
    );
}