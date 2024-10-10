import { CheckCircle, SealCheck, Star } from "@phosphor-icons/react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const DEFAULT_DESCRIPTION = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut metus diam."

export enum BlockColor {
    Red,
    Green,
    Pink,
    Orange,
    Blue,
    Purple,
}

export interface BlockProps {
    color: BlockColor;
    title: string;
    category: string;
    score: number;
    mark: number;
    description?: string;

}

export default function Block({ title, category, color, mark, score, description = DEFAULT_DESCRIPTION }: BlockProps) {
    return (
        <div
            className={twMerge(
                "flex flex-1 rounded-xl",
                clsx({
                    "heropattern-topography-rose-500": color == BlockColor.Red,
                    "heropattern-topography-green-500": color == BlockColor.Green,
                    "heropattern-topography-pink-500": color == BlockColor.Pink,
                    "heropattern-topography-orange-500": color == BlockColor.Orange,
                    "heropattern-topography-blue-500": color == BlockColor.Blue,
                    "heropattern-topography-purple-500": color == BlockColor.Purple,

                }),
                clsx({
                    "bg-red-400": color == BlockColor.Red,
                    "bg-green-400": color == BlockColor.Green,
                    "bg-pink-400": color == BlockColor.Pink,
                    "bg-orange-400": color == BlockColor.Orange,
                    "bg-blue-400": color == BlockColor.Blue,
                    "bg-purple-400": color == BlockColor.Purple,
                })
            )}
        >
            <div className="flex flex-col justify-between p-4">
                <div className="flex justify-between">
                    <p className="text-white font-semibold text-xl">{category}</p>
                    <SealCheck size="40" weight="fill" color="white" />
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <p className="text-white font-bold text-xl">{title}</p>
                        <p className="text-white line-clamp-2">{description}</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex items-center gap-1">
                            <Star size="20" color="white" weight="fill" />
                            <p className="text-white">{score.toFixed(1)}</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <CheckCircle size="20" color="white" weight="fill" />
                            <p className="text-white">{mark}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
