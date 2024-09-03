# simple-kanban

## Introduction
A simple functional kanban board developed using angular js.
Enabling the capability to create tasks, toward To Do and then move tasks between.

## Instructions to run the program

### To start simple-server based on json-server

> npm install
> json-server --watch simple-server/db.json --port 3000

### To start kanban front-end application
> Open a new terminal
> cd kanban-app
> npm install

### Run the application as below
> ng serve

## Design
![
    High level design/component overview
](<Project Kanban design.jpg>)


## Features implemented:
* Kanban board with 4 columns (ToDo, In Progress, Review and Done)
* Drag and Drop capability
* Task creation capability
* Delete tasks using delete button
* Adding story points to stories.

## Known limitations:
* Edit feature not working(Not implemented)
* Improve styling for add-task text-boxes
* Newly added tasks into board are not possible to move or delete due to json-server error

