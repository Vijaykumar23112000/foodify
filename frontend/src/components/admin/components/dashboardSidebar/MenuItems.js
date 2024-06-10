import ShopTwoIcon from '@mui/icons-material/ShopTwo';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import CategoryIcon from '@mui/icons-material/Category';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import EventIcon from '@mui/icons-material/Event';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LogoutIcon from '@mui/icons-material/Logout';

export const menu = [
    { title: "Dashboard", icon: <DashboardIcon />, path: "/" },
    { title: "Orders", icon: <ShoppingBagIcon />, path: "/orders" },
    { title: "Menu", icon: <ShopTwoIcon />, path: "/menu" },
    { title: "Food Category", icon: <CategoryIcon />, path: "/category" },
    { title: "Ingredients", icon: <FastfoodIcon />, path: "/ingredients" },
    { title: "Events", icon: <EventIcon />, path: "/events" },
    { title: "Restaurant Details", icon: <AdminPanelSettingsIcon />, path: "/details" },
    { title: "Logout", icon: <LogoutIcon />, path: "/" },
]