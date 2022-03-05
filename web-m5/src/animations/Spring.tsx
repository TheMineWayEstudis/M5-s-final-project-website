import { motion } from "framer-motion";

type Props = {
    children: JSX.Element | JSX.Element[];
}

export default function Spring(props: Props) {
    return (
        <motion.div
            animate={{x: 100}}
            transition={{type: 'spring', stiffness: 100}}
        >
            {props.children}
        </motion.div>
    )
}