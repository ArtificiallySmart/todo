import { v4 as uuidv4 } from 'uuid';

export default {
    props: {

    },
    data() {
        return {
            todoList: [],
            todoInput: ''
        }
    },
    mounted() {
        this.getTodoList(),
            this.todoInput = document.getElementById('todoInput')
    },
    methods: {
        getTodoList: function () { this.todoList = JSON.parse(localStorage.getItem('todoList')) || [] },
        storeTodoList: function () { localStorage.setItem('todoList', JSON.stringify(this.todoList)) },
        addTodo: function () {
            if (this.todoInput.value === '') return;
            this.todoList.push({ id: uuidv4(), task: this.todoInput.value, complete: false })
            this.todoInput.value = null
            this.storeTodoList();
        },
        clearTodos: function () {
            this.todoList = this.todoList.filter(todo => todo.complete === false);
            this.storeTodoList();
        }
    },
    template: /*html*/`
    <div class="card" id="dragTodo">
            <div class="card-header">
                <h3>To Do:</h3>
            </div>
            <div class="card-body">

                <div v-for="(todo, index) in todoList" :key="index" class="form-check">
                    <input class="form-check-input" type="checkbox" :id="todo.id" v-model="todo.complete" @change="storeTodoList">
                    <label class="form-check-label" :for="todo.id">{{todo.task}}</label>
                </div>

                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="todoInput" placeholder="New task" value="">
                    <label for="floatingInput">New task</label>
                </div>

                    <div>
                        <button class="btn btn-primary" id="addTodo" @click="addTodo">Add to Do</button>
                        <button class="btn btn-primary" id="clearTodos" @click="clearTodos">Delete completed to do's</button>
                    </div>
                

                    
            </div>
                
        </div>
  `
}
