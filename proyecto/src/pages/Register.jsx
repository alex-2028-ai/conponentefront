import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button'
import './auth.css'

export default function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        // Aquí iría la llamada real al backend para crear el usuario
        console.log('Register simulated', { name, email, password })
        alert('Registro simulado')
    }

    return (
        <div className="auth-page">
            <div className="auth-card">
                <h2>Registro</h2>
                <form className="auth-form" onSubmit={handleSubmit}>
                    <div className="field">
                        <label className="auth-label">Nombre</label>
                        <input
                            className="auth-input"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Tu nombre"
                            required
                        />
                    </div>
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
                        <Button type="submit" className="btn-primary">Crear cuenta</Button>
                    </div>
                </form>

                <p className="auth-footer">
                    ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
                </p>
            </div>
        </div>
    )
}
