import React from "react"
import { Typography, Box, Grid, Button } from "@mui/material"
import { Modal, Drawer } from "@mui/material"
import { Logout } from "@mui/icons-material"

export const Header = () => {
  const [open, setOpen] = React.useState(false)
  return (
    <>
      <Box className="hero">
        <Box className="hero_dao">
          <Box className="logo">
            <Typography variant="string">
              Dao <span style={{ opacity: "0.5" }}>Dapp.</span>
            </Typography>
          </Box>
          <Typography variant="string" className="dao_showcase">
            Decentralized Autonomous Organization
          </Typography>
          <Box className="options">
            <Box>
              <Typography color={"#aec1c5"} fontSize="1.2rem">
                Options
              </Typography>
              <Grid container spacing={0} width="25rem" marginY={"0.5rem"}>
                <Grid item>
                  <Button href="#contribute" xs={6} className="options-nav">
                    Contribute
                  </Button>
                  <Button href="#redeem" xs={6} className="options-nav">
                    redeem shares
                  </Button>
                </Grid>
                <Grid item>
                  <Button href="#transfer" xs={6} className="options-nav">
                    transfer shares
                  </Button>
                  <Button href="#proposals" xs={6} className="options-nav">
                    proposals
                  </Button>
                </Grid>
              </Grid>
              <Typography color={"#aec1c5"} fontSize="1rem">
                <span style={{ color: "#fcbd7a" }}>#</span> Wallet Balance: {0}{" "}
                cUSD
              </Typography>
              <Typography color={"#aec1c5"} fontSize="1rem">
                <span style={{ color: "#fcbd7a" }}>#</span> Shares: {0}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <div
        className={`menu ${open && "active"}`}
        onClick={() => {
          open === false ? setOpen(true) : setOpen(false)
        }}
      >
        <Typography variant="button" color={"#fcbd7a"} mr="0.5rem">
          menu
        </Typography>
        <div>
          <div className="one">
            <div className="menu-dots"></div>
            <div className="menu-dots"></div>
          </div>
          <div className="two">
            <div className="menu-dots"></div>
            <div className="menu-dots"></div>
          </div>
        </div>
      </div>
      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box sx={{ display: "flex", flexDirection: "column", padding: "3rem" }}>
          <Button href="#contribute">Contribute</Button>
          <Button href="#redeem">redeem shares</Button>
          <Button href="#transfer">transfer shares</Button>
          <Button href="#proposals">proposals</Button>
          <Button startIcon={<Logout />} variant={"contained"}>
            disconnect
          </Button>
        </Box>
      </Drawer>
    </>
  )
}
