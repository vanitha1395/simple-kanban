# simple-kanban

## Introduction
A simple functional kanban board developed using angular js.
Enabling the capability to create tasks, toward To Do and then move tasks between.

## Instructions to run the program

### To start simple-server based on json-server

> cd simple-server
> npm install
> json-server --watch db.json --port 3000

### To start kanban front-end application

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

