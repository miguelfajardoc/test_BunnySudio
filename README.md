# test_BunnySudio
This proyect are compos by an API, created in django (see bunny_api) and a frontent view created in react (see my_app).

## API
The project is about a User model, that contains a number of tasks.
The api was created with django rest-framework.

### How to test it

Actually, the appi can be tested with develop mode following this steps: 
1. Clone this repo
2. Install the modules required in Pipfile. 
3. Make the migrations with $ python3 manage.py makemigrations and $python4 manage.py migrate
4. run the server with $python3 manage.py startserver

### Endpoints:
The api suports the following endpoints:

1.    admin/ ------       "to easily create new instances
2.    users/ ------       "GET  all the users (with his respective tasks) and POST new users" 
3.    users/<int:pk>/ ----   "GET a sigle user by his id, PUT and PATCH to actualice, and DELETE this user"
4.    tasks/       ----     "GET  all the tasks (with his respective tasks) and POST new tasks"
5.    tasks/<int:pk>/  ---- "GET a sigle task by his id, PUT and PATCH to actualice, and DELETE this task"

## my_app:
This app use the previous api to dinamicly changue the data of the users and the task.

