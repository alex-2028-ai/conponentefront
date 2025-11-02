import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button'
import './auth.css'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        // Aquí iría la llamada real al backend
        console.log('Login simulated', { email, password })
        alert('Inicio de sesión simulado')
    }

    return (
        <div className="auth-page">
            <div className="auth-card">
                <h2>Iniciar sesión</h2>
                <form className="auth-form" onSubmit={handleSubmit}>
                    <div className="field">
                        <label className="auth-label">Email</label>
                        <input
                            className="auth-input"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="tucorreo@ejemplo.com"
                            required
                        />
                    </div>
                    <div className="field">
                        <label className="auth-label">Contraseña</label>
                        <input
                            className="auth-input"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            required
                        />
                    </div>
                    <div className="form-actions">
                        <Button type="submit" className="btn-primary">Entrar</Button>
                    </div>
                </form>

                <p className="auth-footer">
                    ¿No tienes cuenta? <Link to="/register">Regístrate</Link>
                </p>
            </div>
        </div>
    )
}
