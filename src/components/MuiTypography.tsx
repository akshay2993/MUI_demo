import { Fragment } from "react"
import { Typography } from "@mui/material"

const MuiTypography = () => {
  return (
    <Fragment>
      <Typography variant="h1">Heading h1</Typography>
      <Typography variant="h2">Heading h2</Typography>
      <Typography variant="h3">Heading h3</Typography>
      <Typography variant="h4">Heading h4</Typography>
      <Typography variant="h5" component="h1">
        Heading h5
      </Typography>
      <Typography variant="h6" gutterBottom>
        Heading h6
      </Typography>

      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2" gutterBottom>
        Subtitle 2
      </Typography>

      <Typography variant="body1" gutterBottom>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt porro eos
        consequatur quo ut doloremque? Reiciendis, reprehenderit consequatur
        labore sit odit voluptatum odio maxime accusamus officia porro illo est
        quidem. Exercitationem ipsam iure repellendus rem libero sapiente. Iusto
        earum, voluptatum distinctio quibusdam error temporibus modi eligendi
        consequuntur quam optio officia quos voluptatibus provident dignissimos
        pariatur ratione? Inventore laborum doloremque numquam.
      </Typography>
      <Typography variant="body2" gutterBottom>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt porro eos
        consequatur quo ut doloremque? Reiciendis, reprehenderit consequatur
        labore sit odit voluptatum odio maxime accusamus officia porro illo est
        quidem. Exercitationem ipsam iure repellendus rem libero sapiente. Iusto
        earum, voluptatum distinctio quibusdam error temporibus modi eligendi
        consequuntur quam optio officia quos voluptatibus provident dignissimos
        pariatur ratione? Inventore laborum doloremque numquam.
      </Typography>
    </Fragment>
  );
}
export default MuiTypography