import HouseRoundedIcon from '@mui/icons-material/HouseRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import Groups2RoundedIcon from '@mui/icons-material/Groups2Rounded';
import FolderCopyRoundedIcon from '@mui/icons-material/FolderCopyRounded';
import LiveHelpRoundedIcon from '@mui/icons-material/LiveHelpRounded';
import DuoRoundedIcon from '@mui/icons-material/DuoRounded';

export const SideBarHomeLabel = [
    {
        icon: <HouseRoundedIcon sx={{ color: "black", fontSize: "26px" }} />,
        route: "/",
        label: "Hogar",
    },
    {
        icon: <PeopleAltRoundedIcon sx={{ color: "black", fontSize: "26px" }} />,
        route: "/friends",
        label: "Amigos",
    },
    {
        icon: <Groups2RoundedIcon sx={{ color: "black", fontSize: "26px" }} />,
        route: "/groups",
        label: "Grupos",
    },
    {
        icon: <FolderCopyRoundedIcon sx={{ color: "black", fontSize: "26px" }} />,
        route: "/home-archivo",
        label: "Archivos",
    },
    {
        icon: <LiveHelpRoundedIcon sx={{ color: "black", fontSize: "26px" }} />,
        route: "/home-foro",
        label: "Preguntas",
    },
    {
        icon: <DuoRoundedIcon sx={{ color: "black", fontSize: "26px", }} />,
        route: "/home-meetings",
        label: "Reuniones",
    },
];
export const SideBarArchivoLabel = [
    {
        icon: <FolderCopyRoundedIcon sx={{ color: "black", fontSize: "26px" }} />,
        route: "/home-archivo",
        label: "Archivos",
    },
    {
        icon: <LiveHelpRoundedIcon sx={{ color: "black", fontSize: "26px" }} />,
        route: "/favoritos",
        label: "Favoritos",
    },
    {
        icon: <DuoRoundedIcon sx={{ color: "black", fontSize: "26px", }} />,
        route: "/papelera",
        label: "Papelera",
    },
];
export const SideBarMeetingLabel = [
    {
        icon: <FolderCopyRoundedIcon sx={{ color: "black", fontSize: "26px" }} />,
        route: "/home-archivo",
        label: "ejemplo meet",
    },
   
];
export const SideBarForoLabel = [
    {
        icon: <FolderCopyRoundedIcon sx={{ color: "black", fontSize: "26px" }} />,
        route: "/home-archivo",
        label: "ejemplo foro",
    },
   
];