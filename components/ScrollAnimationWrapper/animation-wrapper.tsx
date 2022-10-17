import { motion, MotionStyle, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

type AnimationWrapperProps = {
    children: React.ReactNode,
    type?: 'horizontal-slide-in'|'fade-in', //Fade in is default
    performOnce?: boolean,
}

export const ScrollAnimationWrapper: React.FC<AnimationWrapperProps> = ({ children, type, performOnce }) => {
    const ref = useRef(null);
    const whileInView = useInView(ref, { once: performOnce ? true : false });

    const fadeInAnimation: MotionStyle = {
        opacity: whileInView ? 1 : 0,
        translateY: whileInView ? 0 : "none",
        transition: "all 0.5s ease-in 0.5s"
    }

    const horizontalSlideInAnimation: MotionStyle = {
        transform: whileInView ? "none" : "translateX(-200px)",
        opacity: whileInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
    }
    
    return(
        <motion.div 
            style={type === "horizontal-slide-in" ? horizontalSlideInAnimation : fadeInAnimation}
            ref={ref}>
            {children}
        </motion.div>
    )
}