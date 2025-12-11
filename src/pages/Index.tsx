import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import Icon from '@/components/ui/icon';

type Screen = 'intro' | 'login' | 'register' | '2fa' | 'verify' | 'forgot';

const Index = () => {
  const [screen, setScreen] = useState<Screen>('intro');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');

  const IntroScreen = () => (
    <div className="animate-fade-in">
      <div className="text-center mb-12">
        <h1 
          className="text-6xl font-black mb-6 neon-text glitch tracking-wider" 
          data-text="CYBER AUTH"
        >
          CYBER AUTH
        </h1>
        <p className="text-[rgb(var(--cyber-text-dim))] text-lg tracking-wide">
          СИСТЕМА ЗАЩИЩЕННОЙ АУТЕНТИФИКАЦИИ
        </p>
      </div>

      <div className="grid gap-6 mb-12">
        <div className="p-6 bg-[rgb(var(--cyber-dark-2))] border border-[rgb(var(--cyber-line))] hover:border-[rgb(var(--cyber-red-accent))] transition-all duration-300 hover:neon-border group rounded-xl">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[rgb(var(--cyber-red-dark))] rounded-xl group-hover:animate-glow-pulse">
              <Icon name="Shield" className="w-6 h-6 text-[rgb(var(--cyber-red-bright))]" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-[rgb(var(--cyber-text))]">
                ДВУХФАКТОРНАЯ ЗАЩИТА
              </h3>
              <p className="text-[rgb(var(--cyber-text-dim))] text-sm">
                Максимальный уровень безопасности с подтверждением через код
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 bg-[rgb(var(--cyber-dark-2))] border border-[rgb(var(--cyber-line))] hover:border-[rgb(var(--cyber-red-accent))] transition-all duration-300 hover:neon-border group rounded-xl">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[rgb(var(--cyber-red-dark))] rounded-xl group-hover:animate-glow-pulse">
              <Icon name="Lock" className="w-6 h-6 text-[rgb(var(--cyber-red-bright))]" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-[rgb(var(--cyber-text))]">
                ШИФРОВАНИЕ ДАННЫХ
              </h3>
              <p className="text-[rgb(var(--cyber-text-dim))] text-sm">
                Все данные защищены современными алгоритмами шифрования
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 bg-[rgb(var(--cyber-dark-2))] border border-[rgb(var(--cyber-line))] hover:border-[rgb(var(--cyber-red-accent))] transition-all duration-300 hover:neon-border group rounded-xl">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[rgb(var(--cyber-red-dark))] rounded-xl group-hover:animate-glow-pulse">
              <Icon name="Fingerprint" className="w-6 h-6 text-[rgb(var(--cyber-red-bright))]" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-[rgb(var(--cyber-text))]">
                БИОМЕТРИЯ
              </h3>
              <p className="text-[rgb(var(--cyber-text-dim))] text-sm">
                Поддержка биометрической аутентификации для быстрого доступа
              </p>
            </div>
          </div>
        </div>
      </div>

      <Button
        onClick={() => setScreen('login')}
        className="w-full h-14 text-lg font-bold bg-[rgb(var(--cyber-red-accent))] hover:bg-[rgb(var(--cyber-red-bright))] text-[rgb(var(--cyber-text))] border-2 border-[rgb(var(--cyber-red-bright))] neon-border transition-all duration-300 rounded-xl"
      >
        ВОЙТИ В СИСТЕМУ
      </Button>
    </div>
  );

  const LoginScreen = () => (
    <div className="animate-slide-in">
      <div className="flex items-center gap-3 mb-8">
        <button
          onClick={() => setScreen('intro')}
          className="p-2 hover:bg-[rgb(var(--cyber-dark-2))] rounded-lg transition-colors"
        >
          <Icon name="ChevronLeft" className="w-6 h-6 text-[rgb(var(--cyber-red-accent))]" />
        </button>
        <h2 className="text-3xl font-black neon-text tracking-wider">ВХОД</h2>
      </div>

      <div className="space-y-6 mb-8">
        <div>
          <label className="block text-sm font-bold mb-2 text-[rgb(var(--cyber-text-dim))] tracking-wide">
            EMAIL
          </label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 bg-[rgb(var(--cyber-dark-2))] border-[rgb(var(--cyber-line))] focus:border-[rgb(var(--cyber-red-accent))] text-[rgb(var(--cyber-text))] transition-all duration-300 rounded-lg"
            placeholder="user@cyberauth.net"
          />
        </div>

        <div>
          <label className="block text-sm font-bold mb-2 text-[rgb(var(--cyber-text-dim))] tracking-wide">
            ПАРОЛЬ
          </label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-12 bg-[rgb(var(--cyber-dark-2))] border-[rgb(var(--cyber-line))] focus:border-[rgb(var(--cyber-red-accent))] text-[rgb(var(--cyber-text))] transition-all duration-300 rounded-lg"
            placeholder="••••••••"
          />
        </div>

        <button
          onClick={() => setScreen('forgot')}
          className="text-sm text-[rgb(var(--cyber-red-accent))] hover:text-[rgb(var(--cyber-red-bright))] font-bold transition-colors"
        >
          ЗАБЫЛИ ПАРОЛЬ?
        </button>
      </div>

      <Button
        onClick={() => setScreen('2fa')}
        className="w-full h-14 text-lg font-bold bg-[rgb(var(--cyber-red-accent))] hover:bg-[rgb(var(--cyber-red-bright))] text-[rgb(var(--cyber-text))] border-2 border-[rgb(var(--cyber-red-bright))] neon-border transition-all duration-300 mb-6 rounded-xl"
      >
        ПРОДОЛЖИТЬ
      </Button>

      <div className="text-center">
        <span className="text-[rgb(var(--cyber-text-dim))] text-sm">НЕТ АККАУНТА? </span>
        <button
          onClick={() => setScreen('register')}
          className="text-[rgb(var(--cyber-red-accent))] hover:text-[rgb(var(--cyber-red-bright))] font-bold text-sm transition-colors"
        >
          СОЗДАТЬ
        </button>
      </div>
    </div>
  );

  const RegisterScreen = () => (
    <div className="animate-slide-in">
      <div className="flex items-center gap-3 mb-8">
        <button
          onClick={() => setScreen('intro')}
          className="p-2 hover:bg-[rgb(var(--cyber-dark-2))] rounded-lg transition-colors"
        >
          <Icon name="ChevronLeft" className="w-6 h-6 text-[rgb(var(--cyber-red-accent))]" />
        </button>
        <h2 className="text-3xl font-black neon-text tracking-wider">РЕГИСТРАЦИЯ</h2>
      </div>

      <div className="space-y-6 mb-8">
        <div>
          <label className="block text-sm font-bold mb-2 text-[rgb(var(--cyber-text-dim))] tracking-wide">
            ИМЯ
          </label>
          <Input
            type="text"
            className="h-12 bg-[rgb(var(--cyber-dark-2))] border-[rgb(var(--cyber-line))] focus:border-[rgb(var(--cyber-red-accent))] text-[rgb(var(--cyber-text))] transition-all duration-300 rounded-lg"
            placeholder="Иван Иванов"
          />
        </div>

        <div>
          <label className="block text-sm font-bold mb-2 text-[rgb(var(--cyber-text-dim))] tracking-wide">
            EMAIL
          </label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 bg-[rgb(var(--cyber-dark-2))] border-[rgb(var(--cyber-line))] focus:border-[rgb(var(--cyber-red-accent))] text-[rgb(var(--cyber-text))] transition-all duration-300 rounded-lg"
            placeholder="user@cyberauth.net"
          />
        </div>

        <div>
          <label className="block text-sm font-bold mb-2 text-[rgb(var(--cyber-text-dim))] tracking-wide">
            ПАРОЛЬ
          </label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-12 bg-[rgb(var(--cyber-dark-2))] border-[rgb(var(--cyber-line))] focus:border-[rgb(var(--cyber-red-accent))] text-[rgb(var(--cyber-text))] transition-all duration-300 rounded-lg"
            placeholder="••••••••"
          />
        </div>

        <div>
          <label className="block text-sm font-bold mb-2 text-[rgb(var(--cyber-text-dim))] tracking-wide">
            ПОВТОРИТЕ ПАРОЛЬ
          </label>
          <Input
            type="password"
            className="h-12 bg-[rgb(var(--cyber-dark-2))] border-[rgb(var(--cyber-line))] focus:border-[rgb(var(--cyber-red-accent))] text-[rgb(var(--cyber-text))] transition-all duration-300 rounded-lg"
            placeholder="••••••••"
          />
        </div>
      </div>

      <Button
        onClick={() => setScreen('verify')}
        className="w-full h-14 text-lg font-bold bg-[rgb(var(--cyber-red-accent))] hover:bg-[rgb(var(--cyber-red-bright))] text-[rgb(var(--cyber-text))] border-2 border-[rgb(var(--cyber-red-bright))] neon-border transition-all duration-300 mb-6 rounded-xl"
      >
        СОЗДАТЬ АККАУНТ
      </Button>

      <div className="text-center">
        <span className="text-[rgb(var(--cyber-text-dim))] text-sm">УЖЕ ЕСТЬ АККАУНТ? </span>
        <button
          onClick={() => setScreen('login')}
          className="text-[rgb(var(--cyber-red-accent))] hover:text-[rgb(var(--cyber-red-bright))] font-bold text-sm transition-colors"
        >
          ВОЙТИ
        </button>
      </div>
    </div>
  );

  const TwoFactorScreen = () => (
    <div className="animate-fade-in">
      <div className="flex items-center gap-3 mb-8">
        <button
          onClick={() => setScreen('login')}
          className="p-2 hover:bg-[rgb(var(--cyber-dark-2))] rounded-lg transition-colors"
        >
          <Icon name="ChevronLeft" className="w-6 h-6 text-[rgb(var(--cyber-red-accent))]" />
        </button>
        <h2 className="text-3xl font-black neon-text tracking-wider">2FA КОД</h2>
      </div>

      <div className="text-center mb-8">
        <div className="inline-flex p-4 bg-[rgb(var(--cyber-red-dark))] rounded-2xl mb-6 animate-glow-pulse">
          <Icon name="ShieldCheck" className="w-12 h-12 text-[rgb(var(--cyber-red-bright))]" />
        </div>
        <p className="text-[rgb(var(--cyber-text-dim))] text-sm mb-2">
          Введите 6-значный код подтверждения
        </p>
        <p className="text-[rgb(var(--cyber-text-dim))] text-xs">
          Код отправлен на {email || 'user@cyberauth.net'}
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <InputOTP maxLength={6} value={code} onChange={setCode}>
          <InputOTPGroup className="gap-3">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <InputOTPSlot
                key={i}
                index={i}
                className="w-12 h-14 text-2xl font-bold bg-[rgb(var(--cyber-dark-2))] border-2 border-[rgb(var(--cyber-line))] focus:border-[rgb(var(--cyber-red-accent))] text-[rgb(var(--cyber-text))] transition-all duration-300 rounded-lg"
              />
            ))}
          </InputOTPGroup>
        </InputOTP>
      </div>

      <Button
        className="w-full h-14 text-lg font-bold bg-[rgb(var(--cyber-red-accent))] hover:bg-[rgb(var(--cyber-red-bright))] text-[rgb(var(--cyber-text))] border-2 border-[rgb(var(--cyber-red-bright))] neon-border transition-all duration-300 mb-4 rounded-xl"
      >
        ПОДТВЕРДИТЬ
      </Button>

      <button className="w-full text-sm text-[rgb(var(--cyber-red-accent))] hover:text-[rgb(var(--cyber-red-bright))] font-bold transition-colors">
        ОТПРАВИТЬ КОД ПОВТОРНО
      </button>
    </div>
  );

  const VerifyScreen = () => (
    <div className="animate-fade-in">
      <div className="flex items-center gap-3 mb-8">
        <button
          onClick={() => setScreen('register')}
          className="p-2 hover:bg-[rgb(var(--cyber-dark-2))] rounded-lg transition-colors"
        >
          <Icon name="ChevronLeft" className="w-6 h-6 text-[rgb(var(--cyber-red-accent))]" />
        </button>
        <h2 className="text-3xl font-black neon-text tracking-wider">ПРОВЕРКА</h2>
      </div>

      <div className="text-center mb-8">
        <div className="inline-flex p-4 bg-[rgb(var(--cyber-red-dark))] rounded-2xl mb-6 animate-glow-pulse">
          <Icon name="Mail" className="w-12 h-12 text-[rgb(var(--cyber-red-bright))]" />
        </div>
        <p className="text-[rgb(var(--cyber-text-dim))] text-sm mb-2">
          Введите код подтверждения из письма
        </p>
        <p className="text-[rgb(var(--cyber-text-dim))] text-xs">
          Отправлено на {email || 'user@cyberauth.net'}
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <InputOTP maxLength={6} value={code} onChange={setCode}>
          <InputOTPGroup className="gap-3">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <InputOTPSlot
                key={i}
                index={i}
                className="w-12 h-14 text-2xl font-bold bg-[rgb(var(--cyber-dark-2))] border-2 border-[rgb(var(--cyber-line))] focus:border-[rgb(var(--cyber-red-accent))] text-[rgb(var(--cyber-text))] transition-all duration-300 rounded-lg"
              />
            ))}
          </InputOTPGroup>
        </InputOTP>
      </div>

      <Button
        onClick={() => setScreen('login')}
        className="w-full h-14 text-lg font-bold bg-[rgb(var(--cyber-red-accent))] hover:bg-[rgb(var(--cyber-red-bright))] text-[rgb(var(--cyber-text))] border-2 border-[rgb(var(--cyber-red-bright))] neon-border transition-all duration-300 mb-4 rounded-xl"
      >
        ЗАВЕРШИТЬ РЕГИСТРАЦИЮ
      </Button>

      <button className="w-full text-sm text-[rgb(var(--cyber-red-accent))] hover:text-[rgb(var(--cyber-red-bright))] font-bold transition-colors">
        ОТПРАВИТЬ ПИСЬМО ПОВТОРНО
      </button>
    </div>
  );

  const ForgotPasswordScreen = () => (
    <div className="animate-slide-in">
      <div className="flex items-center gap-3 mb-8">
        <button
          onClick={() => setScreen('login')}
          className="p-2 hover:bg-[rgb(var(--cyber-dark-2))] rounded-lg transition-colors"
        >
          <Icon name="ChevronLeft" className="w-6 h-6 text-[rgb(var(--cyber-red-accent))]" />
        </button>
        <h2 className="text-3xl font-black neon-text tracking-wider">ВОССТАНОВЛЕНИЕ</h2>
      </div>

      <div className="text-center mb-8">
        <div className="inline-flex p-4 bg-[rgb(var(--cyber-red-dark))] rounded-2xl mb-6 animate-glow-pulse">
          <Icon name="KeyRound" className="w-12 h-12 text-[rgb(var(--cyber-red-bright))]" />
        </div>
        <p className="text-[rgb(var(--cyber-text-dim))] text-sm">
          Введите email для восстановления доступа
        </p>
      </div>

      <div className="space-y-6 mb-8">
        <div>
          <label className="block text-sm font-bold mb-2 text-[rgb(var(--cyber-text-dim))] tracking-wide">
            EMAIL
          </label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 bg-[rgb(var(--cyber-dark-2))] border-[rgb(var(--cyber-line))] focus:border-[rgb(var(--cyber-red-accent))] text-[rgb(var(--cyber-text))] transition-all duration-300 rounded-lg"
            placeholder="user@cyberauth.net"
          />
        </div>
      </div>

      <Button
        onClick={() => setScreen('verify')}
        className="w-full h-14 text-lg font-bold bg-[rgb(var(--cyber-red-accent))] hover:bg-[rgb(var(--cyber-red-bright))] text-[rgb(var(--cyber-text))] border-2 border-[rgb(var(--cyber-red-bright))] neon-border transition-all duration-300 mb-6 rounded-xl"
      >
        ОТПРАВИТЬ КОД
      </Button>

      <div className="text-center">
        <button
          onClick={() => setScreen('login')}
          className="text-[rgb(var(--cyber-red-accent))] hover:text-[rgb(var(--cyber-red-bright))] font-bold text-sm transition-colors"
        >
          НАЗАД КО ВХОДУ
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[rgb(var(--cyber-bg))] flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[rgb(var(--cyber-red-accent))] rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[rgb(var(--cyber-red-bright))] rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="bg-[rgb(var(--cyber-dark-1))] border-2 border-[rgb(var(--cyber-line))] p-8 backdrop-blur-sm rounded-2xl">
          {screen === 'intro' && <IntroScreen />}
          {screen === 'login' && <LoginScreen />}
          {screen === 'register' && <RegisterScreen />}
          {screen === '2fa' && <TwoFactorScreen />}
          {screen === 'verify' && <VerifyScreen />}
          {screen === 'forgot' && <ForgotPasswordScreen />}
        </div>

        <div className="mt-6 text-center">
          <p className="text-[rgb(var(--cyber-text-dim))] text-xs tracking-widest">
            CYBER AUTH v2.0.47 • ЗАЩИЩЕНО
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;