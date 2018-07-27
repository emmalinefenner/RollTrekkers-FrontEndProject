# CodeLou_FrontEnd

## Description
```
A brief description of your project

My project is a webpage for a travel agency that exists within the world(s) of Dungeons and Dragons and that type of fantasy role-playing: RollTrekkers. This company would provide skilled individuals to fill out an adventuring party and guide the customer in their fantastical and destiny fulfilling journey. 
There are links to three different kind of adventures to choose from, but this connecting page is only a placeholder and does not contain much content or functionality other than returning to main page. 
In the Book Now section, there is a “haggle” button that opens a modal. This allows the customer to choose their “skill” and add a modifier to haggle for a better price than 20 gold per person per week. JQuery runs this exchange.
```


## Custom CSS Classes
```
The class(es) I created are:

1.	logo
..sets font-size and padding of the logo in navbar 

2. rollTrekkers
..sets font for logo and RollTrekkers Difference section

3.	main-text – change to “overlay”
..sets absolute position of text on top of the carousel and the top image in city.html

4. flex
..sets display:flex and centers contained items both vertically and horizontally

5. chooseAdv
..sets font for Adventure Section

6.	section
..sets a padding-top to compensate for the fixed navbar and adds padding-bottom to each separate section on main page: Adventure, Rolltrekkers Difference, and Book Now

7.	heading
..sets font-size for headings in Adventure, RollTrekkers Difference

8.	thumbnail 
..sets relative position and display for images in Adventure section. Works with caption class to have images with text over them.

9. oval
..sets border radius to have oval images. In Adventure section.

10.	caption
..sets absolute position and size of text overlaying images. In Adventure section and ********may not be anywhere else

11. boldLine
..sets background color, height, and margin-top to hr tag to create a thick line. Located in Book Now section.

12.	socialThumb
..sets width and margin of social media site thumbnail links in footer

```


## Custom JavaScript Functions
```
The JavaScript functions I created are:

1. Dropdown Background-color Function:

..changes navbar background-color to opaque when menu drops down to aid in ease of viewing nav items.

2. the Haggle Function: 

..I did not explicitly name the function. I left it as an anonymous function in the click event, as it is specific and would not be used in another situation. 

..This function retrieves inputs for a Modifier(optional) and an Offer(mandatory). The Modifier is checked to be less than 10, which is a normal high modifier. The offer is checked to be not less than 10 gold, which is unacceptable to the company. 

..When the inputs are satisfactory, the submit button simulates the rolling of a 20-sided die for both the customer and the Company. The Modifier is added to the customer’s roll, and if this is greater than the Company’s, a deal is reached. If not, no deal.

..The response messages are returned in a modified Bootstrap alert which has its html inserted by the function.

3. Clear Alert Function:

..clears the alert div if the haggle modal is closed without closing the alert.


```
