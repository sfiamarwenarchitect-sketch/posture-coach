import { useState } from 'react';
import Head from 'next/head';

// ============================================
// STYLES (Tailwind via CDN)
// ============================================

function Styles() {
  return (
    <>
      <Head>
        <link href="https://cdn.tailwindcss.com" rel="stylesheet" />
        <style jsx global>{`
          html { scroll-behavior: smooth; }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            -webkit-font-smoothing: antialiased;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
        `}</style>
      </Head>
    </>
  );
}

// ============================================
// COMPOSANTS REUTILISABLES
// ============================================

function Btn({ variant = 'primary', fullWidth = false, onClick, children }) {
  const base = 'font-semibold rounded-xl py-3 px-6 transition-all duration-200 cursor-pointer border-none';
  const styles = {
    primary: 'bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg',
    secondary: 'bg-gray-200 text-gray-700 hover:bg-gray-300',
    outline: 'border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-50 bg-transparent',
  };
  return <button className={`${base} ${styles[variant]} ${fullWidth ? 'w-full' : ''}`} onClick={onClick}>{children}</button>;
}

function Card({ className = '', children, onClick }) {
  return <div className={`bg-white rounded-2xl shadow-md p-4 ${className}`} onClick={onClick}>{children}</div>;
}

function Badge({ children }) {
  return <span className="text-xs text-emerald-600 bg-emerald-100 px-2 py-1 rounded-full font-semibold">{children}</span>;
}

// ============================================
// TOUTES LES ECRANS DE L'APPLICATION
// ============================================

// Mode Selection
function ModeSelect({ onNavigate }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center">
        <div className="bg-emerald-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
          <span className="text-white text-3xl">✓</span>
        </div>
        <h1 className="text-3xl font-bold text-emerald-700 mb-2">POSTURE COACH</h1>
        <p className="text-gray-600 mb-10">Application d'entraînement intelligent</p>
        <div className="space-y-4">
          <Btn fullWidth onClick={() => onNavigate('coach-login')}>👨‍🏫 Mode Coach</Btn>
          <p className="text-gray-400 text-sm">— OU —</p>
          <Btn variant="outline" fullWidth onClick={() => onNavigate('user-home')}>👤 Mode Utilisateur</Btn>
        </div>
      </div>
    </div>
  );
}

// Coach Login
function CoachLogin({ onNavigate }) {
  const [email, setEmail] = useState('coach.marc@email.com');
  const [pass, setPass] = useState('');
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-emerald-100 p-6">
      <div className="max-w-md mx-auto mt-8">
        <div className="text-center mb-8">
          <div className="bg-emerald-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <span className="text-white text-3xl">✓</span>
          </div>
          <h1 className="text-3xl font-bold text-emerald-700">POSTURE COACH</h1>
          <p className="text-gray-600 mt-2">Accès réservé aux coachs agréés</p>
        </div>
        <Card className="space-y-4">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Connexion coach</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="coach@email.com"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-emerald-500 text-base" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mot de passe</label>
            <input type="password" value={pass} onChange={e => setPass(e.target.value)} placeholder="••••••••"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-emerald-500 text-base" />
          </div>
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 rounded text-emerald-500" />
              <span className="text-gray-600">Se souvenir de moi</span>
            </label>
            <a href="#" className="text-emerald-500 hover:underline font-medium">Mot de passe oublié ?</a>
          </div>
          <Btn fullWidth onClick={() => onNavigate('dashboard')}>Se connecter</Btn>
          <div className="text-center text-gray-400 text-sm py-2">— OU —</div>
          <Btn variant="outline" fullWidth>🍎 Se connecter avec Face ID</Btn>
        </Card>
      </div>
    </div>
  );
}

// Coach Dashboard
function CoachDashboard({ onNavigate }) {
  const clients = [
    { name: "Sarah Martin", email: "sarah@email.com", purchased: "12/05/2026", exercises: "1/10", avatar: "SM", color: "bg-emerald-100 text-emerald-600" },
    { name: "Thomas Bernard", email: "thomas@email.com", purchased: "15/05/2026", exercises: "3/10", avatar: "TB", color: "bg-blue-100 text-blue-600" },
    { name: "Laura Petit", email: "laura@email.com", purchased: "20/05/2026", exercises: "2/10", avatar: "LP", color: "bg-amber-100 text-amber-600" },
  ];
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-md p-4 pb-6">
        <div className="flex items-center space-x-2 mb-1">
          <span className="bg-emerald-500 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold">P</span>
          <h1 className="text-xl font-bold text-emerald-700">Tableau de bord</h1>
        </div>
        <p className="text-gray-500 text-sm">3 clients avec pack standard actif</p>
      </div>
      <div className="p-4 space-y-3">
        <input type="text" placeholder="🔍 Rechercher un client..."
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-emerald-500 text-base mb-2" />
        {clients.map((client, i) => (
          <Card key={i} className="flex items-center space-x-4 cursor-pointer hover:bg-emerald-50 transition-colors" onClick={() => onNavigate('client')}>
            <div className={`w-14 h-14 rounded-full ${client.color} flex items-center justify-center font-bold text-lg flex-shrink-0`}>{client.avatar}</div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-gray-800 truncate">{client.name}</h3>
              <p className="text-sm text-gray-500 truncate">{client.email}</p>
              <p className="text-sm text-emerald-600 font-medium">{client.exercises} exercices • Pack Standard</p>
            </div>
          </Card>
        ))}
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.08)] py-3 px-4 flex justify-around">
        <div className="flex flex-col items-center text-emerald-600 cursor-pointer" onClick={() => onNavigate('dashboard')}>
          <span className="text-xl">👥</span>
          <span className="text-xs font-medium mt-1">Clients</span>
        </div>
        <div className="flex flex-col items-center text-gray-400 cursor-pointer hover:text-emerald-600" onClick={() => onNavigate('library')}>
          <span className="text-xl">📚</span>
          <span className="text-xs font-medium mt-1">Bibliothèque</span>
        </div>
        <div className="flex flex-col items-center text-gray-400 cursor-pointer hover:text-emerald-600">
          <span className="text-xl">👤</span>
          <span className="text-xs font-medium mt-1">Profil</span>
        </div>
      </div>
    </div>
  );
}

// Client Profile
function ClientProfile({ onNavigate }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-md p-4">
        <div className="flex items-center space-x-3">
          <div className="bg-emerald-500 w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg">SM</div>
          <div>
            <h1 className="text-xl font-bold text-gray-800">Sarah Martin</h1>
            <div className="flex items-center space-x-2 mt-1">
              <span className="text-xs text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-full font-semibold">Pack Standard</span>
              <span className="text-gray-500 text-xs">Acheté le 12/05/2026</span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 space-y-4">
        <Card>
          <div className="grid grid-cols-2 gap-4">
            <div><p className="text-gray-500 text-sm">Email</p><p className="font-medium">sarah@email.com</p></div>
            <div><p className="text-gray-500 text-sm">Téléphone</p><p className="font-medium">06 12 34 56 78</p></div>
            <div><p className="text-gray-500 text-sm">Taille</p><p className="font-medium">1,68 m</p></div>
            <div><p className="text-gray-500 text-sm">Poids</p><p className="font-medium">65 kg</p></div>
          </div>
        </Card>
        <Card className="text-center py-10">
          <div className="text-5xl mb-4">📋</div>
          <h3 className="text-gray-700 font-semibold mb-2">Exercices enregistrés</h3>
          <p className="text-gray-500 mb-6">1 exercice configuré</p>
          <Btn fullWidth onClick={() => onNavigate('library')}>+ Nouvel exercice</Btn>
        </Card>
      </div>
    </div>
  );
}

// Exercise Library
function ExerciseLibrary({ onNavigate }) {
  const exercises = [
    { name: "Squat", type: "Dynamique", icon: "🏋️‍♀️" },
    { name: "Pompe", type: "Dynamique", icon: "💪" },
    { name: "Fente", type: "Dynamique", icon: "🦵" },
    { name: "Gainage", type: "Statique", icon: "🧘" },
    { name: "Soulevé de terre", type: "Dynamique", icon: "🏋️" },
    { name: "Tractions", type: "Dynamique", icon: "💪" },
  ];
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-md p-4 mb-4">
        <h1 className="text-xl font-bold text-emerald-700">Bibliothèque d'exercices</h1>
        <p className="text-gray-500 text-sm">Choisissez un exercice à configurer</p>
      </div>
      <div className="p-4 grid grid-cols-2 gap-4">
        {exercises.map((ex, i) => (
          <Card key={i} className="text-center cursor-pointer hover:bg-emerald-50 transition-colors" onClick={() => onNavigate('config')}>
            <div className="text-5xl mb-3">{ex.icon}</div>
            <h3 className="font-semibold text-gray-800 text-sm">{ex.name}</h3>
            <Badge>{ex.type}</Badge>
          </Card>
        ))}
      </div>
    </div>
  );
}

// Key Points Config
function KeyPointsConfig({ onNavigate }) {
  const [points, setPoints] = useState(['Genoux', 'Hanches', 'Bas du dos', 'Chevilles']);
  const allPoints = ['Genoux', 'Hanches', 'Bas du dos', 'Chevilles', 'Épaules', 'Nuque'];
  const togglePoint = (p) => setPoints(prev => prev.includes(p) ? prev.filter(x => x !== p) : [...prev, p]);
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-md p-4 mb-4">
        <h1 className="text-xl font-bold text-emerald-700">Configuration</h1>
        <p className="text-gray-500 text-sm">Exercice : Squat</p>
      </div>
      <div className="p-4">
        <h2 className="text-gray-700 font-semibold mb-4">Sélectionnez les points clés à surveiller</h2>
        <Card className="space-y-2 mb-4">
          {allPoints.map(p => {
            const sel = points.includes(p);
            return (
              <div key={p} className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-colors ${sel ? 'bg-emerald-50 border-2 border-emerald-500' : 'bg-gray-50 border-2 border-transparent'}`}
                onClick={() => togglePoint(p)}>
                <span className="text-gray-700 font-medium">{p}</span>
                <span className="text-2xl">{sel ? '✓' : '○'}</span>
              </div>
            );
          })}
        </Card>
        <Btn fullWidth onClick={() => onNavigate('capture')}>Valider et continuer →</Btn>
      </div>
    </div>
  );
}

// Video Capture
function VideoCapture({ onNavigate }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-md p-4 mb-4">
        <h1 className="text-xl font-bold text-emerald-700">Vue 1 – Face</h1>
        <p className="text-gray-500 text-sm">Enregistrement de l'exercice</p>
      </div>
      <div className="p-4">
        <Card className="text-center py-4 mb-4 bg-emerald-50 border-2 border-emerald-200">
          <p className="text-gray-700">📐 Placez le client face à la caméra</p>
          <p className="text-emerald-600 font-bold text-lg mt-2">Distance idéale : ~2 mètres</p>
        </Card>
        <div className="relative bg-gray-800 rounded-2xl overflow-hidden h-[28rem] flex items-center justify-center my-4">
          <div className="text-white text-center">
            <div className="text-7xl mb-4">🏋️‍♀️</div>
            <p className="text-gray-300">Prêt pour la capture</p>
            <div className="flex justify-center gap-2 mt-4">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-medium">Caméra active</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center space-x-4">
          <button className="bg-gray-200 p-3 rounded-xl text-2xl">⚡</button>
          <button className="bg-gray-200 p-3 rounded-xl text-2xl">📷</button>
          <button className="p-4 rounded-full bg-red-500 text-white text-2xl shadow-lg">●</button>
        </div>
        <p className="text-center text-gray-500 mt-2 text-sm">Appuyez pour démarrer (5 secondes)</p>
        <Btn fullWidth className="mt-6" onClick={() => onNavigate('verify')}>Vérifier la capture →</Btn>
      </div>
    </div>
  );
}

// Verification
function Verification({ onNavigate }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-md p-4 mb-4">
        <h1 className="text-xl font-bold text-emerald-700">Vérification</h1>
        <p className="text-gray-500 text-sm">Vue 1 (Face)</p>
      </div>
      <div className="p-4">
        <div className="relative bg-gray-800 rounded-2xl overflow-hidden h-[28rem] flex items-center justify-center">
          <div className="text-white text-center">
            <div className="text-7xl mb-4">🏋️‍♀️</div>
            <p className="text-gray-300 text-lg">Squelette détecté</p>
            <div className="flex justify-center gap-2 mt-2">
              <span className="text-blue-400 text-sm">● Genoux</span>
              <span className="text-amber-400 text-sm">● Hanches</span>
              <span className="text-green-400 text-sm">● Dos</span>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 w-3/4 transition-all"></div>
          </div>
          <p className="text-center text-gray-500 mt-1 text-sm">0:02 / 0:05</p>
        </div>
        <div className="bg-emerald-50 border-2 border-emerald-200 p-4 rounded-xl mt-4">
          <div className="flex items-center space-x-2">
            <span className="text-emerald-500 text-2xl">✓</span>
            <span className="text-emerald-700 font-semibold">Tous les points clés sont bien détectés</span>
          </div>
        </div>
        <div className="flex space-x-3 mt-4">
          <Btn variant="secondary" className="flex-1">Refaire</Btn>
          <Btn variant="outline" className="flex-1">Supprimer</Btn>
          <Btn className="flex-1" onClick={() => onNavigate('summary')}>Valider</Btn>
        </div>
      </div>
    </div>
  );
}

// Summary
function SummaryScreen({ onNavigate }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-md p-4 mb-4">
        <h1 className="text-xl font-bold text-emerald-700">Récapitulatif</h1>
      </div>
      <div className="p-4">
        <Card className="text-center py-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Squat</h2>
          <p className="text-gray-500 mb-6">Enregistrement complet</p>
          <div className="flex justify-center space-x-4 mb-6">
            <div className="bg-gray-100 p-3 rounded-xl">
              <p className="text-sm text-gray-600 mb-1">Vue Face</p>
              <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center text-3xl">🏋️‍♀️</div>
            </div>
            <div className="bg-gray-100 p-3 rounded-xl">
              <p className="text-sm text-gray-600 mb-1">Vue Profil</p>
              <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center text-3xl">🏋️‍♀️</div>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-xl text-left">
            <h3 className="font-semibold text-gray-700 mb-2">Points clés surveillés</h3>
            <div className="flex flex-wrap gap-2">
              <Badge>Genoux</Badge><Badge>Hanches</Badge><Badge>Bas du dos</Badge><Badge>Chevilles</Badge>
            </div>
          </div>
          <p className="text-gray-400 mt-4 text-sm">Date d'enregistrement: 24/05/2026 à 10:30</p>
        </Card>
        <div className="flex space-x-3 mt-4">
          <Btn variant="secondary" className="flex-1" onClick={() => onNavigate('capture')}>Refaire</Btn>
          <Btn className="flex-1" onClick={() => onNavigate('success')}>Sauvegarder ✓</Btn>
        </div>
      </div>
    </div>
  );
}

// Success
function SuccessScreen({ onNavigate }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center p-6">
      <div className="text-center p-8 max-w-md w-full">
        <div className="bg-emerald-500 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
          <span className="text-white text-4xl">✓</span>
        </div>
        <h1 className="text-2xl font-bold text-emerald-700 mb-4">Enregistré avec succès !</h1>
        <p className="text-gray-600 mb-8 text-lg">Squat enregistré avec succès. Sarah peut désormais s'entraîner en autonomie.</p>
        <div className="space-y-3">
          <Btn fullWidth onClick={() => onNavigate('dashboard')}>📋 Retour au tableau de bord</Btn>
          <Btn variant="outline" fullWidth onClick={() => onNavigate('library')}>➕ Ajouter un autre exercice</Btn>
        </div>
      </div>
    </div>
  );
}

// User Home
function UserHome({ onNavigate }) {
  const exercises = [
    { name: "Squat", level: "Intermédiaire", icon: "🏋️‍♀️", coach: true },
    { name: "Fentes", level: "Intermédiaire", icon: "🦵", coach: true },
    { name: "Gainage", level: "Intermédiaire", icon: "🧘", coach: true },
    { name: "Soulevé de terre", level: "Avancé", icon: "🏋️", coach: false },
  ];
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-md p-4 pb-6">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-xl font-bold text-emerald-700">Bonjour Sarah 👋</h1>
            <p className="text-gray-500">Prête pour ta séance ?</p>
          </div>
          <button className="text-gray-400 text-2xl">⚙️</button>
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800 mb-4">🏆 MES EXERCICES</h2>
        <div className="space-y-3">
          {exercises.map((ex, i) => (
            <Card key={i} className="flex items-center space-x-4 cursor-pointer hover:bg-emerald-50 transition-colors" onClick={() => onNavigate('user-home')}>
              <div className="text-4xl">{ex.icon}</div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">{ex.name}</h3>
                <p className="text-sm text-gray-500">Niveau {ex.level}</p>
                {ex.coach && <Badge>✓ Coaché</Badge>}
              </div>
            </Card>
          ))}
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.08)] py-3 px-4 flex justify-around">
        <div className="flex flex-col items-center text-emerald-600 cursor-pointer" onClick={() => onNavigate('user-home')}>
          <span className="text-xl">🏠</span>
          <span className="text-xs font-medium mt-1">Accueil</span>
        </div>
        <div className="flex flex-col items-center text-gray-400">
          <span className="text-xl">📊</span>
          <span className="text-xs font-medium mt-1">Historique</span>
        </div>
        <div className="flex flex-col items-center text-gray-400">
          <span className="text-xl">📈</span>
          <span className="text-xs font-medium mt-1">Progression</span>
        </div>
        <div className="flex flex-col items-center text-gray-400">
          <span className="text-xl">👤</span>
          <span className="text-xs font-medium mt-1">Profil</span>
        </div>
      </div>
    </div>
  );
}

// History
function HistoryScreen({ onNavigate }) {
  const history = [
    { name: "Squat", date: "24/05/2026", score: 89, icon: "🏋️‍♀️" },
    { name: "Squat", date: "21/05/2026", score: 94, icon: "🏋️‍♀️" },
    { name: "Fentes", date: "16/05/2026", score: 78, icon: "🦵" },
  ];
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-md p-4 mb-4">
        <h1 className="text-xl font-bold text-emerald-700">Historique</h1>
      </div>
      <div className="p-4 space-y-3">
        {history.map((item, i) => (
          <Card key={i} className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-gray-800">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.date}</p>
            </div>
            <div className={`w-14 h-14 rounded-full ${item.score >= 90 ? 'bg-emerald-500' : item.score >= 80 ? 'bg-amber-500' : 'bg-blue-500'} flex items-center justify-center`}>
              <span className="text-white font-bold text-sm">{item.score}%</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

// ============================================
// APPLICATION PRINCIPALE
// ============================================

export default function App() {
  const [screen, setScreen] = useState('mode');
  const navigate = (s) => setScreen(s);

  switch (screen) {
    case 'mode': return <><Styles /><ModeSelect onNavigate={navigate} /></>;
    case 'coach-login': return <><Styles /><CoachLogin onNavigate={navigate} /></>;
    case 'dashboard': return <><Styles /><CoachDashboard onNavigate={navigate} /></>;
    case 'client': return <><Styles /><ClientProfile onNavigate={navigate} /></>;
    case 'library': return <><Styles /><ExerciseLibrary onNavigate={navigate} /></>;
    case 'config': return <><Styles /><KeyPointsConfig onNavigate={navigate} /></>;
    case 'capture': return <><Styles /><VideoCapture onNavigate={navigate} /></>;
    case 'verify': return <><Styles /><Verification onNavigate={navigate} /></>;
    case 'summary': return <><Styles /><SummaryScreen onNavigate={navigate} /></>;
    case 'success': return <><Styles /><SuccessScreen onNavigate={navigate} /></>;
    case 'user-home': return <><Styles /><UserHome onNavigate={navigate} /></>;
    case 'history': return <><Styles /><HistoryScreen onNavigate={navigate} /></>;
    default: return <><Styles /><ModeSelect onNavigate={navigate} /></>;
  }
}