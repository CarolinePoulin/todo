class TodosService {
    url = "https://vue-todo-a5b4cf.can.canonic.dev/api/todos";
    accessToken = "637aa7d3e0a20b0008881c3c-b5e5c8af-dec1-40c2-ae81-071a662e96cb"

    async getTodos(userid) {
        try {
            const response = await fetch(`${this.url}/all/${userid}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": this.accessToken,
                },
            });

            if (!response.ok) throw new Error(response.statusText);

            return await response.json();
        } catch (e) {
            console.error(e)
        }
    }

    async getTodo(id) {
        try {
            const response = await fetch(`${this.url}/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": this.accessToken,
                },
            });

            if (!response.ok) throw new Error(response.statusText);

            return await response.json();
        } catch (e) {
            console.error(e)
        }
    }

    async updateTodo(id, todo) {
        try {
            const response = await fetch(`${this.url}/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": this.accessToken,
                },
                body: JSON.stringify({_id: id, input: todo})
            });

            if (!response.ok) throw new Error(response.statusText);

            return await response.json();
        } catch (e) {
            console.error(e)
        }
    }

    async deleteTodo(id) {
        try {
            const response = await fetch(`${this.url}/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": this.accessToken,
                },
            });

            if (!response.ok) throw new Error(response.statusText);

            return await response.json();
        } catch (e) {
            console.error(e)
        }
    }

    async createTodo(id, todo) {
        try {
            const response = await fetch(`${this.url}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": this.accessToken,
                },
                body: JSON.stringify({input: todo})
            });

            if (!response.ok) throw new Error(response.statusText);

            return await response.json();
        } catch (e) {
            console.error(e)
        }
    }

}

export default TodosService;