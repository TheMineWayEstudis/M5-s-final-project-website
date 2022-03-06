import { MailOutlined } from "@ant-design/icons";
import { Button, notification } from "antd";
import isMessageVisible from "./isMessageVisible";

export default function showNotification() {

    if(!isMessageVisible()) return;

    notification.info({
        message: "Hay un Joel a 3km de tí y te envía un mensaje",
        description: (
            <>
                <p>Joel del pasado te envía un mensaje. Visita /message para leer el mensaje.</p>
            </>
        ),
        duration: 9999999,
        placement: 'bottomRight',
        icon: <MailOutlined/>
    });
}