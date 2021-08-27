# Getting Started server with JSON-server

1. yarn global add json-server
2. move to ./server folder
3. Start json server with following command: json-server --watch db.json --port 5000

# Start project with yarn 

1. Move to the root project folder
2. Run yarn start

# Solution description

I had the task of implementing the change of status table. And for that purpose I used the following additional libraries:

1. Axios - to interact with the Rest API
2. Material-UI - for customize components.

## The structure of the project is as follows:

- common folder which contains common entities for all components;
- component folder witch contains components of application
- hooks folder witch contains reusable hooks of application

## The structure of the components folder

- component-name.component.tsx
- component-name.interface.ts
- component-name.styles.ts
- component-name.constants.ts
- index.ts 

This structure allows us not to confuse the logic of the component with styles or make it unwieldy. 
I made the logic to get the staff into a separate hook so that it was isolated, and it could be supplemented and replayed in the future.
I used the React composition to separate the components so that these individual components could be replayed and the code cleaned.