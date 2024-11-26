import WhatshotIcon from "@mui/icons-material/Whatshot";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import {FaMusic} from "react-icons/fa6";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import {MdLiveTv} from "react-icons/md";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import {FaTrophy} from "react-icons/fa";
import {MdCastForEducation} from "react-icons/md";
import DiamondIcon from "@mui/icons-material/Diamond";
import {MdOutlinePodcasts} from "react-icons/md";
import {useNavigate} from "react-router-dom";
export function AsideBox2() {
    const navigator = useNavigate();
    const sideBarSecondBox = [
        {
            title: "Trending",
            logo: <WhatshotIcon />,
        },
        {
            title: "Shopping",
            logo: <LocalMallIcon />,
        },
        {
            title: "Music",
            logo: <FaMusic />,
        },
        {
            title: "Movies",
            logo: <MovieFilterIcon />,
        },
        {
            title: "Live",
            logo: <MdLiveTv />,
        },
        {
            title: "Gaming",
            logo: <SportsEsportsIcon />,
        },
        {
            title: "News",
            logo: <NewspaperIcon />,
        },
        {
            title: "Sports",
            logo: <FaTrophy />,
        },
        {
            title: "Courses",
            logo: <MdCastForEducation />,
        },
        {
            title: "Fashion & Beauty",
            logo: <DiamondIcon />,
        },
        {
            title: "Podcasts",
            logo: <MdOutlinePodcasts />,
        },
    ];
    return (
        <div className="w-full z-0">
            <div className="border-b-2 border-slate-800 pb-4">
                {sideBarSecondBox.map((item) => {
                    return (
                        <div className="pt-1 pb-1 flex items-center hover:bg-slate-800 w-full rounded-md justify-center space-x-2">
                            <div className="w-6 text-white flex items-center justify-center">{item.logo}</div>
                            <div className="basis-36">
                                <h1
                                    className="cursor-pointer text-md text-white"
                                    onClick={() => navigator(`/${item.title}`)}
                                >
                                    {item.title}
                                </h1>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
