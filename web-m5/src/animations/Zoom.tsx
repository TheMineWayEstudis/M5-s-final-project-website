import { motion } from "framer-motion";

type Props = {
    children: JSX.Element | JSX.Element[];
}

export default function Zoom(props: Props) {
    return (
        <motion.div
            initial={{scale: 0}}
            transition={{duration: 0.5}}
            animate={{scale: 1}}
        >
            {props.children}
        </motion.div>
    );
}