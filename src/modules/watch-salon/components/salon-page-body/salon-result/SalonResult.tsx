import { Grid } from "@mui/material";
import RecipeReviewCard from "../salon-info/SalonInfoCard";

const SalonResult = () => {
    return (
      <Grid container direction="row" style={{display: "flex",
      justifyContent: "space-between"}}>
        <RecipeReviewCard/>
        <RecipeReviewCard/>
        <RecipeReviewCard/>
        <RecipeReviewCard/>
        <RecipeReviewCard/>
        <RecipeReviewCard/>
        <RecipeReviewCard/>
        <RecipeReviewCard/>
        <RecipeReviewCard/>
        <RecipeReviewCard/>
      </Grid>
        
    )
}

export default SalonResult