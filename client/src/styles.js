import { makeStyles } from '@material-ui/core/styles';

// Creating custom styles using the makeStyles hook from Material-UI
// This allows us to define the styles for different components of the application
export default makeStyles(() => ({
  // Styling for the AppBar component, which serves as the header section
  appBar: {
    borderRadius: 15, // Rounded corners for the AppBar to create a soft and modern look
    margin: '30px 0', // Adding margin to the top and bottom to create spacing around the AppBar
    display: 'flex', // Using flexbox for layout management
    flexDirection: 'row', // Arranging child elements (title and image) in a horizontal row
    justifyContent: 'center', // Centering the children horizontally within the AppBar
    alignItems: 'center', // Vertically aligning the children to the center
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Adding a subtle shadow effect to create depth
    padding: '10px', // Adding some padding to the AppBar for internal spacing
  },
  
  // Styling for the heading (title) inside the AppBar
  heading: {
    color: 'rgba(0, 183, 255, 1)', // Setting the text color to a bright cyan blue for the title
    fontSize: '2.5rem', // Increasing the font size to make the title more prominent
    fontWeight: 'bold', // Making the title bold for emphasis
    textTransform: 'uppercase', // Converting the title to uppercase for a more formal and structured appearance
    letterSpacing: '2px', // Adding some letter spacing to improve the readability of the title
  },

  // Styling for the image inside the AppBar (e.g., logo or icon)
  image: {
    marginLeft: '15px', // Adding margin to the left to create spacing between the image and the title
    height: '50px', // Setting the height of the image to maintain consistent sizing within the header
    width: 'auto', // Automatically adjusting the width of the image to maintain aspect ratio
    borderRadius: '8px', // Adding slight rounded corners to the image for a softer appearance
    transition: 'transform 0.3s ease-in-out', // Adding a smooth transition effect for any transformations (e.g., hover effects)
    '&:hover': {
      transform: 'scale(1.1)', // Adding a zoom effect when the image is hovered over to make it interactive
    },
  },
}));
