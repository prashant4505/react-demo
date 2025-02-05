import { AppBar, Toolbar, Typography, Button, Container, TextField, Card, CardContent, Backdrop, CircularProgress, Accordion, AccordionSummary, AccordionActions, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from 'react';

const Material = () => {
    const [open, setOpen] = React.useState(false);
        const handleClose = () => {
            setOpen(false);
        };
        const handleOpen = () => {
            setOpen(true);
        };
    return(
        <div>
            {/* Navbar */}
            <AppBar position="static">
                <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>Material UI Practice</Typography>
                <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>

            <Container sx={{ mt: 4 }}>
                {/* Text Field */}
                <TextField label="Enter Name" variant="outlined" fullWidth sx={{ mb: 2 }} />

                {/* Card */}
                <Card>
                <CardContent>
                    <Typography variant="h5">Material UI Card</Typography>
                    <Typography>This is an example of using Material UI Card.</Typography>
                </CardContent>
                </Card>
            </Container>

            <Button onClick={handleOpen}>Show backdrop</Button>
            <Backdrop
                sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
                open={open}
                onClick={handleClose}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                >
                <Typography component="span">Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
                >
                <Typography component="span">Accordion 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
                >
                <Typography component="span">Accordion Actions</Typography>
                </AccordionSummary>
                <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
                <AccordionActions>
                <Button>Cancel</Button>
                <Button>Agree</Button>
                </AccordionActions>
            </Accordion>
        </div>
    );
}

export default Material;