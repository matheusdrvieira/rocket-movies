import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [data, setData] = useState({});
    async function signIn({ email, password, name }) {

        try {
            const response = await api.post("/sessions", { email, password, name })
            const { user, token } = response.data;

            localStorage.setItem("@rocketMovies:user", JSON.stringify(user));
            localStorage.setItem("@rocketMovies:token", token);

            api.defaults.headers.common["authorization"] = `Bearer ${token}`;
            setData({ user, token });
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Nao foi possivel entrar.");
            }
        }
    }

    function signOut() {
        localStorage.removeItem("@rocketMovies:token");
        localStorage.removeItem("@rocketMovies:user");

        setData({});
    }

    async function updateProfile({ user, avatarFile }) {
        try {
            if (avatarFile) {
                const fileUploadForm = new FormData();
                fileUploadForm.append("avatar", avatarFile);

                const response = await api.patch("/users/avatar", fileUploadForm);
                user.avatar = response.data.avatar;
            }

            await api.put("/users", user);
            localStorage.setItem("@rocketMovies:user", JSON.stringify(user));

            setData({ user, token: data.token })
            alert("Perfil atualizado")
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Nao foi possivel atualizar o perfil.");
            }
        }

    }

    useEffect(() => {
        const token = localStorage.getItem("@rocketMovies:token");
        const user = localStorage.getItem("@rocketMovies:user");

        if (user && token) {
            api.defaults.headers.common["authorization"] = `Bearer ${token}`;

            setData({
                user: JSON.parse(user),
                token
            });
        }
    }, []);

    return (
        <AuthContext.Provider value={{
            signIn,
            signOut,
            updateProfile,
            user: data.user
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };