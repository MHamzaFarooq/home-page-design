import BlueSVG from "@/assets/BlueSVG";
import GreenSVG from "@/assets/GreenSVG";
import RedSVG from "@/assets/RedSVG";

export const cards = [
    {
        total: 18,
        title: "Users",
        positiveValue: 17,
        negativeValue: 1,
        svgComp: <GreenSVG />,
        isActive : true,
    },
    {
        total: 38,
        title: "Users",
        positiveValue: 32,
        negativeValue: 6,
        svgComp: <BlueSVG />,
        isActive : false

    },
    {
        total: 19,
        title: "Users",
        positiveValue: 18,
        negativeValue: 1,
        svgComp: <RedSVG />,
        isActive : true,


    }
]