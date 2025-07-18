import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const videos = ["video1.mp4", "video2.mp4", "video3.mp4", "video4.mp4"];

const content = [
    "Every dish is a tribute to authenticity — carefully crafted by our chefs with premium ingredients and deep-rooted tradition.",
    "Witness the precision and passion behind every meal, from the chopping board to the final garnish — it's culinary artistry in motion.",
    "Step into the rhythm of our kitchen, where flavors are bold, aromas are rich, and every second is filled with intention.",
    "This is more than food — it’s a curated experience of taste, culture, and handcrafted excellence, served fresh from our heart to your plate."
];

export default function KitchenSplitSlider() {
    const [current, setCurrent] = useState(0);
    const videoRef = useRef(null);


    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        video.src = videos[current];
        video.load();

        const playAfterCanPlay = () => {
            video.play().catch(() => {
            });
        };

        video.addEventListener("canplay", playAfterCanPlay);

        const handleEnded = () => {
            setCurrent((prev) => (prev + 1) % videos.length);
        };

        video.addEventListener("ended", handleEnded);

        return () => {
            video.removeEventListener("canplay", playAfterCanPlay);
            video.removeEventListener("ended", handleEnded);
        };
    }, [current]);


    return (
        <div className="vdo-Container">
            {/* Video Section */}
            <div className="vdo-holder">
                <motion.video className="Vdo-component"
                    ref={videoRef}
                    muted
                    autoPlay
                    playsInline
                    controls={false}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                />
            </div>

            {/* Text Section */}
            <div className="Text-component">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="Vdo-content">
                            <h2 className="vdo-heading">
                                Live Kitchen
                            </h2>
                            <p className="vdo-para" >{content[current]}</p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
