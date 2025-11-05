import React, { useState } from 'react'

export default function SuruLanding() {
  const [showSignup, setShowSignup] = useState(false)
  const [coins, setCoins] = useState(120)
  const [showWin, setShowWin] = useState(false)

  function handleBuyCoins() { setCoins(c => c + 50) }
  function handleSpin() {
    const win = Math.random() < 0.3
    if (win) {
      setCoins(c => c + 777)
      setShowWin(true)
      setTimeout(() => setShowWin(false), 3000)
    } else setCoins(c => Math.max(0, c - 10))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-400 to-yellow-200 p-6 font-sans">
      <header className="max-w-6xl mx-auto flex items-center justify-between py-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-white/30 flex items-center justify-center shadow-2xl transform -rotate-6">
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="9" fill="#FAF3C0" />
              <text x="50%" y="55%" textAnchor="middle" fontWeight="700" fontSize="10" fill="#0b3b0b">S</text>
            </svg>
          </div>
          <h1 className="text-2xl font-extrabold text-white drop-shadow">Suru Play</h1>
        </div>
        <nav className="flex items-center gap-4">
          <div className="bg-white/30 px-3 py-2 rounded-full">Coins: <strong>{coins}</strong></div>
          <button onClick={()=>setShowSignup(true)} className="bg-white text-green-700 px-4 py-2 rounded-full font-semibold shadow">Sign Up</button>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <section className="md:col-span-2 bg-white/80 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
          <div className="flex items-start gap-6">
            <div className="w-1/2">
              <h2 className="text-3xl font-extrabold text-green-900">Play animated games, quizzes, and puzzles — safely & for fun</h2>
              <p className="mt-3 text-green-800/80">Collect <strong>Suru Coins</strong>, win big, and redeem for exciting prizes. Quizzes, puzzles, tournaments, and a playful slot machine await.</p>

              <div className="mt-6 flex gap-3">
                <button onClick={handleSpin} className="px-5 py-3 bg-green-600 text-white rounded-xl font-bold shadow-lg hover:scale-105 transform transition">Spin Slot</button>
                <button onClick={handleBuyCoins} className="px-5 py-3 bg-yellow-400 text-green-900 rounded-xl font-bold shadow-lg hover:scale-105 transform transition">Buy 50 Suru Coins</button>
              </div>

              <div className="mt-6 bg-yellow-50 border border-yellow-200 p-3 rounded-xl inline-block">
                <strong>Payment Demo Only:</strong> This is a sample section for secure credit/debit purchases (demo mode).
              </div>

              <a href="https://www.facebook.com/surufair" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:scale-105 transform transition">Visit our Facebook</a>
            </div>

            <div className="w-1/2 flex items-center justify-center">
              <div className="relative bg-gradient-to-b from-red-500 to-red-700 rounded-2xl p-4 shadow-2xl transform hover:-translate-y-1 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-40 bg-gray-800 rounded-full flex items-center justify-center text-white font-bold text-xs transform rotate-6">LEVER</div>
                  <div className="bg-white rounded-lg p-3 flex gap-2 shadow-inner">
                    <ReelSymbol value={Math.random() < 0.3 ? '7' : '🍒'} />
                    <ReelSymbol value={Math.random() < 0.3 ? '7' : '🍊'} />
                    <ReelSymbol value={Math.random() < 0.3 ? '7' : '🍋'} />
                  </div>
                </div>
                <div className="absolute -top-6 right-6 bg-yellow-300 rounded-full px-3 py-2 text-green-900 font-extrabold shadow-lg">777</div>
                <div className="absolute -left-8 -top-6 opacity-80 animate-pulse">⭐️</div>
                <div className="absolute -right-10 bottom-0 opacity-70 animate-bounce">✨</div>
              </div>
            </div>
          </div>

          {showWin && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-white/80 rounded-2xl p-6 text-center shadow-2xl animate-pop">
                <h3 className="text-4xl font-extrabold text-green-900">You hit Triple 7!</h3>
                <p className="mt-2 text-green-800">+777 Suru Coins — Redeemable for prizes 🎉</p>
              </div>
            </div>
          )}
        </section>

        <aside className="bg-white/90 rounded-2xl p-4 shadow-md">
          <h3 className="text-xl font-bold text-green-900">Games & Competitions</h3>
          <div className="mt-4 grid gap-3">
            <GameCard title="Quiz Royale" subtitle="Timed trivia — leaderboard" cost={10} />
            <GameCard title="Puzzle Duel" subtitle="Solve fast to win" cost={15} />
            <GameCard title="Creative Contest" subtitle="Submit artwork & vote" cost={25} />
          </div>

          <div className="mt-6 border-t pt-4">
            <h4 className="text-sm font-semibold text-green-800">Redeem</h4>
            <p className="text-xs mt-1 text-green-700/80">Exchange Suru Coins for gift cards, merch, or exclusive experiences.</p>
            <button className="mt-3 w-full bg-green-700 text-white py-2 rounded-xl font-bold">Open Redeem Store</button>
          </div>
        </aside>
      </main>

      <footer className="max-w-6xl mx-auto mt-10 text-center text-sm text-green-900/70">
        <p>© Suru Play — Play responsibly. This demo uses cartoon-style games for entertainment. Ensure legal compliance in your jurisdiction.</p>
      </footer>

      {showSignup && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white rounded-2xl p-6 w-96 shadow-2xl">
            <h4 className="text-xl font-bold text-green-900">Join Suru Play</h4>
            <p className="text-sm text-green-700 mt-1">Sign up to start collecting Suru Coins.</p>
            <form action="https://formspree.io/f/yourformid" method="POST" className="mt-4 grid gap-2">
              <input placeholder="Name" name="name" className="p-2 rounded border" required />
              <input placeholder="Email or Phone Number" name="contact" className="p-2 rounded border" required />
              <div className="flex gap-2 mt-2">
                <button type="button" onClick={()=>{setShowSignup(false)}} className="flex-1 py-2 rounded bg-gray-200">Cancel</button>
                <button type="submit" className="flex-1 py-2 rounded bg-green-600 text-white">Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style jsx>{`
        .animate-pop { animation: pop 0.6s ease forwards }
        @keyframes pop { from { transform: scale(0.8); opacity: 0 } to { transform: scale(1); opacity: 1 } }
        .shadow-2xl { box-shadow: 0 20px 40px rgba(10,30,10,0.25) }
      `}</style>
    </div>
  )
}

function ReelSymbol({ value }){
  return (
    <div className="w-14 h-14 bg-yellow-50 rounded flex items-center justify-center text-2xl font-bold shadow-inner" style={{fontFamily:'\"Comic Sans MS\", sans-serif'}}>
      {value}
    </div>
  )
}

function GameCard({ title, subtitle, cost }){
  return (
    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3 flex items-center justify-between">
      <div>
        <div className="font-bold text-green-900">{title}</div>
        <div className="text-xs text-green-800/80">{subtitle}</div>
      </div>
      <div className="text-sm font-semibold">{cost} 💰</div>
    </div>
  )
}
