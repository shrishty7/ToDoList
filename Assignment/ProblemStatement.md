**Problem Statement:**

- Build a ToDo Web Application
- Use **ReactJS** to solve the problem

**Product Features:**

- ToDos listing page with their completion status
- Users can mark any task as completed or incomplete
- Users can delete any task from the list
- Users can add tasks to the list

**Must-have Features:**

- App UI should be similar to the provided UI design (minimal changes are allowed)
- Render all tasks using the API provided or create your own APIs (**extra points for creating your own backend**)
- Web App needs to be hosted on platforms like Netlify, Vercel, etc
- Code must be on Github or BitBucket

**Bonus Features:**

- Allow filtering tasks by “completed or incomplete”
- Having your own backend server ( NodeJS will be preferred)

**Evaluation Criteria:**

- Correctness and completeness of the solution
- Code design and quality
- Visual aesthetics (the UI should be as close as possible to the given design)
- Your understanding of the problem statement
- The problem must be solved within **48 hours** after getting the problem statement

**API sources:**

- ToDos list (GET request): [https://jsonplaceholder.typicode.com/todos](https://jsonplaceholder.typicode.com/todos)
    
    Render only the first 50 tasks
    
- Add new Task (POST request): [https://jsonplaceholder.typicode.com/todos](https://jsonplaceholder.typicode.com/todos)
    
    Demo Body for POST request
    
    ```jsx
    {
        "userId": 100001,
        "id": 10,
        "title": "illo est ratione doloremque quia maiores aut",
        "completed": false
    }
    ```
    
- Delete a task (DELETE request): [https://jsonplaceholder.typicode.com/todos/](https://jsonplaceholder.typicode.com/todos/10):id
- Update the task (PATCH request): [https://jsonplaceholder.typicode.com/todos/](https://jsonplaceholder.typicode.com/todos/10):id
    
    Demo Body for a PATCH request
    
    ```jsx
    {
        "userId": 1,
        "id": 10,
        "title": "illo est ratione doloremque quia maiores aut",
        "completed": false
    }
    ```
    

Note - For more, you can refer to this documentation: [https://jsonplaceholder.typicode.com/](https://jsonplaceholder.typicode.com/)

**UI Screens:**

![To-do list.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6b53167b-806c-4da5-9388-4178aa18cb42/To-do_list.png)

![Color code.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9430473d-a9f7-45f9-9b2d-51400db46dc1/Color_code.png)