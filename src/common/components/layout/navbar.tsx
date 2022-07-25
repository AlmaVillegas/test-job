import { AppBar, Toolbar, Typography } from "@mui/material"
import { memo } from "react"
import { Images } from "../../../constants"

const Navbar: React.FC = () => {
  return (
    <AppBar position="absolute" color="primary" enableColorOnDark>
      <Toolbar>
        {/* <Avatar src={Images.logo} alt="Logo React" /> */}
        <img src={Images.logo} alt="Logo React" width={30} height={30} />
        <Typography variant="h6" component="h6" sx={{ flexGrow: 1, ml: 2 }}>
          Health Overwiew
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default memo(Navbar)
