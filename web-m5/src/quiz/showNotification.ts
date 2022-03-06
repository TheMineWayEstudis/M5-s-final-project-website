import { MailOutlined } from "@ant-design/icons";
import { notification } from "antd";

export default function showNotification(): void {
    notification.info({
        message: "Hay un Joel a 3km de tí y te envía un mensaje",
        description: "Joel del pasado te envía un mensaje. Visita la página /message y lee el contenido.",
        duration: 9999999,
        icon: <MailOutlined />,
    });
}