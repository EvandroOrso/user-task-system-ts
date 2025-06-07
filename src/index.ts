// Armazena tarefas
let tasks: Task[] = [];
let taskIdCounter = 0;

// Definição de tipo de usuários
enum UsersType {
    Guest,
    CommonUser,
    Admin
}

// Criação de tipos de status
enum TaskStatus {
    Pending,
    InProgress,
    Complete
}

// Criação de interface para tasks
interface Task {
    id: number,
    title: string,
    description?: string,
    status: TaskStatus,
    author: string
}

// Criação de usuários
abstract class User {
    static users: User[] = [];
    static userCount = 0;

    protected id = User.userCount;
    protected name: string;
    protected userType: UsersType;

    constructor(name: string, userType: UsersType) {
        User.userCount++;
        this.id = User.userCount;
        this.name = name;
        this.userType = userType;
        User.users.push(this);
    }

    getTasks() {
        console.log(tasks);
    }

    createTask(title: string, description?: string) {
        taskIdCounter++;
        const task: Task = {
            id: taskIdCounter,
            title,
            description,
            status: TaskStatus.Pending,
            author: this.name
        };
        tasks.push(task);
    }

    deleteTask(id: number): Task[] | void {
        tasks = tasks.filter(task => task.id !== id);
        return tasks;
    }
}

// Usuário do tipo Admin
class Admin extends User { 

}

// Usuário do tipo Usuário Comum
class CommonUser extends User {
    deleteTask(id: number): Task[] {
        if(tasks[id].author !== this.name) {
            console.log("You can't delete a task that is not yours!");
            return tasks;
        }
        tasks = tasks.filter(task => task.id !== id);
        return tasks;
    }
}

// Usuário do tipo visitante
class Guest extends User {
    createTask(): void {
        console.log("You are a guest so you can't create tasks!");
    }

    deleteTask(id: number) {
        console.log("You are a guest so you can't delete tasks!");
    }
}

/* Exemplo de código:

// Login como usuário comum "Lucas"
const user = new CommonUser("Lucas", UsersType.CommonUser);
user.createTask("Estudar TypeScript", "Ler documentação e praticar exercícios");
user.createTask("Fazer exercícios POO");

// Login como administrador
const admin = new Admin("Admin", UsersType.Admin);
admin.deleteTask(1); // Remove tarefa criada por Lucas

// Login como convidado
const guest = new Guest("Visitante", UsersType.Guest);
guest.deleteTask(2); // Recebe mensagem de permissão negada

*/