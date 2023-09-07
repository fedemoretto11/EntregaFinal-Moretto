# Super Music Changuito

This project is a fully functional e-commerce application that was developed during the React JS course offered by CoderHouse and led by the instructor Horacio Gutierrez. It is a complete React adaptation of my final project, originally built for the [vanilla JavaScript course.](https://github.com/fedemoretto11/SuperMusicChanguito)


## Live Demo

![](https://github.com/fedemoretto11/PreEntrega2-Moretto/blob/develop/super-music-changuito.gif)


## Getting Started

These instructions will give you a copy of the project up and running on
your local machine for development and testing purposes. See deployment
for notes on deploying the project on a live system.

### Clone and Run the Project

Follow these step-by-step examples to set up your development environment:

1. Clone the project

        git clone https://github.com/fedemoretto11/EntregaFinal-Moretto

2. Navigate to the project folder

        cd EntregaFinal-Moretto

3. Install dependencies

        npm install

4. Run the project on your environment

        npm start


## Technologies used

  - React JS
  - React Router
  - Sass
  - Sonner
  - Firebase
  - Tailwind CSS
  - MercadoLibre API


## Author

  - **Federico Moretto**
    [fedemoretto11](https://github.com/fedemoretto11)


## Additional info

In the `database` directory, you will find a file named `migrations.jsx`. This file serves several purposes:

  - `importData`: This function is responsible for importing product data from the Mercado Libre API.
  - `addDescription`: This function is used to import the descriptions of each product. This is necessary because the API has a separate entry point for descriptions.
  - `addToFirestore`: This function is responsible for sending the information to the Firestore database.


## License

This project is the result of individual work completed during the React JS course. As such, external contributions will not be accepted.