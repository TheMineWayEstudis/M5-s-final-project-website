import { motion } from "framer-motion";

type Props = {
    children: JSX.Element | JSX.Element[];
    delay?: number;
}

export default function Spring(props: Props) {
    return (
        <motion.div
            animate={{x: 100}}
            transition={{type: 'spring', stiffness: 100, delay: props.delay ?? 0}}
        >
            {props.children}
        </motion.div>
    )
}