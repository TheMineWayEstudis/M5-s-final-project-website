import { motion } from "framer-motion";

type Props = {
    children: JSX.Element | JSX.Element[];
    delay?: number;
}

export default function Zoom(props: Props) {
    return (
        <motion.div
            initial={{scale: 0}}
            transition={{duration: 0.5, delay: props.delay ?? 0}}
            animate={{scale: 1}}
        >
            {props.children}
        </motion.div>
    );
}