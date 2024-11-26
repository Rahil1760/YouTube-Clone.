import React from "react";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
export const FrontPageButtons = () => {
    const navigator = useNavigate();
    const buttons = [
        "All",
        "Gaming",
        "Music",
        "AI",
        "Live",
        "Algorithm",
        "Thriller",
        "Javascript",
        "Mixes",
        "Podcast",
        "Movies",
    ];
    return (
        <div className="flex space-x-4 justify-center">
            {buttons.map((button) => {
                return (
                    <Button variant="outlined" size="small" onClick={() => navigator(`/${button}`)}>
                        {button}
                    </Button>
                );
            })}
        </div>
    );
};
