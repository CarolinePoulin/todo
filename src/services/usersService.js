class UsersService {
    url = "https://vue-todo-a5b4cf.can.canonic.dev/api/users/signupWithPassword";
    accessToken = "637aa7d3e0a20b0008881c3c-b5e5c8af-dec1-40c2-ae81-071a662e96cb"

    async signupUser(email, password) {
        try {
            const response = await fetch(`${this.url}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": this.accessToken,
                },
                body: JSON.stringify({email, password, username: email})
            });

            if (!response.ok) throw new Error(response.statusText);

            const json = await response.json();

            if (json.data.success) {
                const {token} = json.data;
                localStorage.setItem("token", token);
            }

            return json;

        } catch (e) {
            console.error(e)
        }
    }

    async loginUser(email, password) {
        try {
            const response = await fetch(`${this.url}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": this.accessToken,
                },
                body: JSON.stringify({email, password, username: email})
            });

            if (!response.ok) throw new Error(response.statusText);

            const json = await response.json();

            if (json.data.success) {
                const {token} = json.data;
                localStorage.setItem("token", token);
            }

            return json;

        } catch (e) {
            console.error(e)
        }
    }

    async authUser() {
        try {
            const token = localStorage.getItem("token");

            if (!token) throw new Error("No user token available");

            const response = await fetch(`${this.url}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": this.accessToken,
                },
                body: JSON.stringify({token})
            });

            if (!response.ok) throw new Error(response.statusText);

            const json = await response.json();

            if (json.data.success) {
                const {token} = json.data;
                localStorage.setItem("token", token);
            }

            return json;

        } catch (e) {
            console.error(e)
        }
    }

}

export default UsersService;