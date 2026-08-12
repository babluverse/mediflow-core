import { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

function Login() {
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Real API connection comes in Phase 2.7
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <Card className="w-full max-w-sm">
        <h1 className="text-2xl font-bold text-white mb-1">
          {isRegister ? 'Create Account' : 'Welcome Back'}
        </h1>
        <p className="text-white/50 text-sm mb-6">
          {isRegister ? 'Sign up to book your first token' : 'Login to continue to MediFlow'}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {isRegister && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-navy border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-teal"
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-navy border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-teal"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-navy border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-teal"
          />

          <Button type="submit" variant="primary">
            {isRegister ? 'Sign Up' : 'Login'}
          </Button>
        </form>

        <p className="text-white/50 text-sm text-center mt-4">
          {isRegister ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button
            onClick={() => setIsRegister(!isRegister)}
            className="text-teal-light font-semibold"
          >
            {isRegister ? 'Login' : 'Sign Up'}
          </button>
        </p>
      </Card>
    </div>
  );
}

export default Login;