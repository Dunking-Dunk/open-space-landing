import React from "react";
import P1Slide from "./slide/p1_slide";
import P2Slide from "./slide/p2_slide";
import HighlightText from './HighlightText';

const Features = () => {
    return (
        <>
            <div className="w-[80%] m-auto mt-40 mb-32 max-mobile:mt-14 max-mobile:mb-20">
                <HighlightText className="text-white text-4xl font-semibold mb-8 text-center">
                    Discover Openspace
                </HighlightText>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FeatureCard
                        title="Open-Source Hub"
                        description="Openspace is REC's dedicated platform for open-source enthusiasts. Discover, showcase, and contribute to projects that matter."
                    />
                    <FeatureCard
                        title="Project Exploration"
                        description="Browse through a diverse range of GitHub projects within our college community. Connect with peers, share ideas, and collaborate based on your interests and skills."
                    />
                    <FeatureCard
                        title="Contribution Leaderboard"
                        description="Watch your impact grow! Our dynamic leaderboard ranks contributors based on their activity, encouraging continuous engagement and friendly competition."
                    />
                    <FeatureCard
                        title="Learning Opportunities"
                        description="Enhance your skills through workshops on open-source development, developer journeys, and industry insights. Perfect for all skill levels, from beginners to experts."
                    />
                    <FeatureCard
                        title="Project Advancement"
                        description="Take your projects to the next level. Get support to launch and advance your initiatives, fostering innovation and growth within our community."
                    />

                </div>

            </div>
            <P1Slide />
            <P2Slide />
        </>
    );
};

const FeatureCard = ({ title, description }) => {
    return (
        <div className="bg-[#ffffff0d] p-6 rounded-lg border border-[#ffffff30]">
            <h3 className="text-white text-2xl font-semibold mb-4">{title}</h3>
            <p className="text-white text-base">{description}</p>
        </div>
    );
};

export default Features;