# West Buy Carousel
The West Buy carousel is a responsive microservice that serves as a component in
a western-themed product page cloned after Best Buy's e-commerce site.

The "People Also Bought" carousel renders previews of multiple items within the
same product category as the primary item being viewed, and the "Most Viewed Items"
carousel renders the top ten items viewed on West Buy.  Both carousels function
independently of one another.  

The carousel is styled using the CSS-in-JS styled-components library.  The animations
are rendered using CSS transforms.

![alt text](https://raw.githubusercontent.com/nmalesa/carousel/master/dist/assets/westbuy-carousel.gif "West Buy Carousel")

## Full West Buy Application
West Buy employs service-oriented architecture, combining five microservices into
one application.  Additionally, the team created a components library for a stars
graphic that was rendered across multiple services via a proxy server.

![alt text](https://raw.githubusercontent.com/nmalesa/carousel/master/dist/assets/WestBuy.gif "West Buy Product Page")

### Related Microservices
* [Accordion Drawers](https://github.com/HRATX-45-FEC-West-Buy/accordion-drawers)
* [Image Display](https://github.com/HRATX-45-FEC-West-Buy/Image-Feature)
* [Navigation Bar](https://github.com/HRATX-45-FEC-West-Buy/Navbar)
* [Product Information](https://github.com/HRATX-45-FEC-West-Buy/product-info)

## Stack
<table>
  <tr>
    <th>Front End</th>
    <th>Back End</th>
    <th>Deployment</th>
  </tr>
  <tr>
    <td><img src="https://github.com/hratx-blue-ocean/Alcove/blob/master/client/dist/assets/stack_images/react.png" alt="React"></td>
    <td><img src="https://github.com/hratx-blue-ocean/Alcove/blob/master/client/dist/assets/stack_images/nodejs.png" alt="Node.js" style="width:60%"></td>
    <td>AWS RDS PLACEHOLDER</td>
  </tr>
  <tr>
    <td><img src="https://raw.githubusercontent.com/nmalesa/carousel/master/dist/assets/styled-components.jpg" alt="styled-components"></td>
    <td><img src="https://github.com/hratx-blue-ocean/Alcove/blob/master/client/dist/assets/stack_images/expressjs.png" alt="Express"></td>
    <td>AWS S3 PLACEHOLDER</td>
  </tr>
  <tr>
    <td></td>
    <td><img src="https://raw.githubusercontent.com/nmalesa/carousel/master/dist/assets/mysql.png" alt="MySQL"></td>
    <td></td>
  </tr>
</table>

## Getting Started

### Development:
1. Install the required dependencies:
```
npm install
```
2. Initiate the server listening on either specified port or port 3000 (default):
```
npm run server_start
```
3.  Run webpack:
```
npm run start-oh
```

### Deployment:
1. Compress the webpack file prior to uploading it into an AWS S3 bucket for deployment
with the additional microservices via the proxy server:
```
npm run build
```

## West Buy Team
[Jonathan Diaz](https://github.com/JCDiaz1201), [Natalia Malesa](https://github.com/nmalesa), [David Silva](https://github.com/davidsilva2841), [Collin Snyder](https://github.com/Collin-Snyder), [Ish Tahir](https://github.com/ishtahir)
