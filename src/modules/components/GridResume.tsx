import * as React from "react";
import { ButtonBase, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

const GridResume: React.FC = (props) => {
  return (
    <Grid item xs={12} sm container>
      <Grid item xs container direction="column" spacing={1}>
        <Grid item xs>
          <Typography gutterBottom variant="subtitle1" component="div">
            Company - Employment type
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Jul-2022 - Present - 10 mos
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lima, Lima, Peru
          </Typography>
          <Typography variant="body2" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            tortor leo, semper sit amet massa nec, bibendum viverra lectus.
            Quisque tortor lacus, convallis sit amet euismod non, viverra ut
            urna. Etiam a tempus turpis. In est augue, ullamcorper vitae quam
            at, viverra semper odio. Vivamus eget mauris elementum, convallis
            nibh nec, posuere eros. Quisque in mauris nisl. Aliquam ut
            sollicitudin eros. Morbi varius sodales mauris in luctus. Nulla
            rutrum at felis in pharetra. Nam vitae rutrum mi, at rutrum tortor.
            In pharetra blandit molestie. Fusce consequat ipsum ac nulla
            viverra, a sagittis ligula consequat. Donec volutpat lacus lectus,
            ut tristique libero ultricies a. Sed vulputate elementum metus,
            condimentum vehicula justo suscipit in. Nullam maximus lacus a erat
            ultricies, a lacinia cras.
          </Typography>
          <Typography variant="body2" gutterBottom>
            Skills: Object-Oriented Programming (OOP)
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default GridResume;
