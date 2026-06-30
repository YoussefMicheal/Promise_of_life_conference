import { useState, useEffect } from "react";

type Page = "home" | "teams" | "tasks" | "archives";

interface TeamMember {
  name: string;
}

interface Team {
  id: number;
  name: string;
  color: string;
  members: TeamMember[];
}

interface DayTask {
  morning: string;
  evening: string;
}

interface TeamTasks {
  teamId: number;
  days: DayTask[];
}

const teams: Team[] = [
  {
    id: 1,
    name: "تيم 1",
    color: "from-sky-400 to-blue-600",
    members: [
      { name: "اسم العضو 1" },
      { name: "اسم العضو 2" },
      { name: "اسم العضو 3" },
      { name: "اسم العضو 4" },
    ],
  },
  {
    id: 2,
    name: "تيم 2",
    color: "from-violet-400 to-purple-600",
    members: [
      { name: "اسم العضو 1" },
      { name: "اسم العضو 2" },
      { name: "اسم العضو 3" },
      { name: "اسم العضو 4" },
    ],
  },
  {
    id: 3,
    name: "تيم 3",
    color: "from-pink-400 to-rose-600",
    members: [
      { name: "اسم العضو 1" },
      { name: "اسم العضو 2" },
      { name: "اسم العضو 3" },
      { name: "اسم العضو 4" },
    ],
  },
  {
    id: 4,
    name: "تيم 4",
    color: "from-cyan-400 to-teal-600",
    members: [
      { name: "اسم العضو 1" },
      { name: "اسم العضو 2" },
      { name: "اسم العضو 3" },
      { name: "اسم العضو 4" },
    ],
  },
];

const teamTasks: TeamTasks[] = teams.map((t) => ({
  teamId: t.id,
  days: [
    { morning: "التاسك الصباحي - اليوم الأول", evening: "التاسك المسائي - اليوم الأول" },
    { morning: "التاسك الصباحي - اليوم التاني", evening: "التاسك المسائي - اليوم التاني" },
  ],
}));

const spiritualContent = [
  {
    title: "آية اليوم",
    text: "«أَنَا هُوَ الطَّرِيقُ وَالْحَقُّ وَالْحَيَاةُ» — يوحنا 14: 6",
  },
  {
    title: "تأمل روحي",
    text: "الرب راعيَّ فلا يعوزني شيء، في مراعٍ خضراء يُربضني، إلى مياه الراحة يقودني.",
  },
  {
    title: "صلاة اليوم",
    text: "يا ربنا، امنحنا قلوبًا مفتوحة لنعمتك ونورك، واجعلنا أدوات لمحبتك في هذا المؤتمر.",
  },
];

function Sidebar({
  currentPage,
  onNavigate,
  dark,
}: {
  currentPage: Page;
  onNavigate: (p: Page) => void;
  dark: boolean;
}) {
  const navItems: { id: Page; label: string; icon: string }[] = [
    { id: "home", label: "الصفحة الرئيسية", icon: "🏠" },
    { id: "teams", label: "التيمات", icon: "🏆" },
    { id: "tasks", label: "التاسكات", icon: "📋" },
    { id: "archives", label: "المحفوظات", icon: "📚" },
  ];

  return (
    <aside
      style={{ width: 240, minHeight: "100vh" }}
      className={`flex flex-col fixed right-0 top-0 bottom-0 z-50 shadow-lg border-l transition-colors duration-300 ${
        dark ? "bg-gray-900 border-gray-700" : "bg-white border-slate-200"
      }`}
    >
      <div className={`p-5 border-b flex flex-col items-center gap-3 transition-colors duration-300 ${dark ? "border-gray-700" : "border-slate-200"}`}>
        <img src="/logo.jpeg" alt="VIVA 2026" className="w-28 h-auto object-contain rounded-xl" />
        <span className={`text-xs font-semibold tracking-wide ${dark ? "text-gray-400" : "text-slate-400"}`}>
          VIVA 2026
        </span>
      </div>
      <nav className="flex-1 p-3 flex flex-col gap-1 mt-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all text-right w-full cursor-pointer ${
              currentPage === item.id
                ? dark
                  ? "bg-violet-900/50 text-violet-300"
                  : "bg-gradient-to-l from-sky-100 to-violet-100 text-violet-700 shadow-sm"
                : dark
                ? "text-gray-400 hover:bg-gray-800 hover:text-gray-200"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-800"
            }`}
            style={{ borderRight: currentPage === item.id ? "3px solid #7c3aed" : "3px solid transparent" }}
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
      <div className={`p-4 text-center border-t transition-colors duration-300 ${dark ? "border-gray-700" : "border-slate-100"}`}>
        <span className={`text-xs ${dark ? "text-gray-600" : "text-slate-400"}`}>VIVA 2026 ©</span>
      </div>
    </aside>
  );
}

function HomePage({ dark }: { dark: boolean }) {
  return (
    <div className="fade-in flex flex-col gap-8">
      <div className="rounded-2xl p-6 text-center viva-gradient text-white shadow-lg">
        <img src="/logo.jpeg" alt="VIVA 2026" className="w-32 mx-auto mb-3 rounded-xl bg-white p-1" />
        <h1 className="text-2xl font-bold">أهلًا في VIVA 2026</h1>
      </div>

      <section>
        <h2 className={`text-lg font-bold mb-1 flex items-center gap-2 ${dark ? "text-gray-200" : "text-slate-700"}`}>
          <span>🏆</span> ترتيب التيمات
        </h2>
        <div className="w-16 h-1 viva-gradient rounded-full mb-5" />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {teams.map((team) => (
            <div
              key={team.id}
              className={`bg-gradient-to-br ${team.color} rounded-2xl p-5 text-white flex flex-col items-center gap-3 shadow-md`}
            >
              <div className="w-20 h-20 rounded-full bg-white/20 border-2 border-white/50 flex items-center justify-center text-4xl shadow-inner">
                🥇
              </div>
              <div className="text-center">
                <div className="font-bold text-lg">{team.name}</div>
                <div className="text-white/80 text-xs mt-1">المركز الأول</div>
              </div>
              <div className="bg-white/20 rounded-lg px-3 py-1 text-xs font-semibold">صورة التيم</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className={`text-lg font-bold mb-1 flex items-center gap-2 ${dark ? "text-gray-200" : "text-slate-700"}`}>
          <span>📅</span> جدول اليوم الأول
        </h2>
        <div className="w-16 h-1 viva-gradient rounded-full mb-5" />
        <div className={`rounded-2xl shadow-sm border overflow-hidden ${dark ? "border-gray-700 bg-gray-800" : "border-slate-100 bg-white"}`}>
          <table className="w-full text-sm">
            <thead>
              <tr className="viva-gradient text-white">
                <th className="py-3 px-4 text-right font-semibold">الوقت</th>
                <th className="py-3 px-4 text-right font-semibold">الفعالية</th>
                <th className="py-3 px-4 text-right font-semibold">التيم</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${dark ? "divide-gray-700" : "divide-slate-100"}`}>
              {[
                { time: "08:00 ص", event: "التسجيل والاستقبال", team: "الكل" },
                { time: "09:00 ص", event: "التاسك الصباحي", team: "كل التيمات" },
                { time: "12:00 م", event: "استراحة الغداء", team: "الكل" },
                { time: "03:00 م", event: "التاسك المسائي", team: "كل التيمات" },
                { time: "06:00 م", event: "ختام اليوم الأول", team: "الكل" },
              ].map((row, i) => (
                <tr key={i} className={`transition-colors ${dark ? "hover:bg-gray-700" : "hover:bg-slate-50"}`}>
                  <td className={`py-3 px-4 font-medium ${dark ? "text-gray-300" : "text-slate-600"}`}>{row.time}</td>
                  <td className={`py-3 px-4 ${dark ? "text-gray-100" : "text-slate-800"}`}>{row.event}</td>
                  <td className={`py-3 px-4 ${dark ? "text-gray-400" : "text-slate-500"}`}>{row.team}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={`mt-4 rounded-2xl flex items-center justify-center h-48 border ${dark ? "bg-gray-800 border-gray-700" : "bg-gradient-to-br from-slate-100 to-slate-200 border-slate-200"}`}>
          <div className={`text-center ${dark ? "text-gray-500" : "text-slate-400"}`}>
            <div className="text-4xl mb-2">🖼️</div>
            <p className="text-sm font-medium">صورة جدول اليوم</p>
            <p className="text-xs mt-1">يمكنك إضافة الصورة هنا</p>
          </div>
        </div>
      </section>
    </div>
  );
}

function TeamsPage({ dark }: { dark: boolean }) {
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);

  return (
    <div className="fade-in flex flex-col gap-6">
      <div>
        <h2 className={`text-lg font-bold mb-1 flex items-center gap-2 ${dark ? "text-gray-200" : "text-slate-700"}`}>
          <span>🏆</span> التيمات
        </h2>
        <div className="w-16 h-1 viva-gradient rounded-full mb-5" />
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {teams.map((team) => (
          <button
            key={team.id}
            onClick={() => setSelectedTeam(selectedTeam?.id === team.id ? null : team)}
            className={`bg-gradient-to-br ${team.color} rounded-2xl p-5 text-white flex flex-col items-center gap-3 shadow-md hover:scale-105 transition-transform cursor-pointer ${
              selectedTeam?.id === team.id ? "ring-4 ring-white/60 scale-105" : ""
            }`}
          >
            <div className="w-20 h-20 rounded-full bg-white/20 border-2 border-white/50 flex items-center justify-center text-3xl shadow-inner">
              📸
            </div>
            <div className="font-bold text-lg">{team.name}</div>
            <div className="text-white/80 text-xs">اضغط لعرض الأعضاء</div>
          </button>
        ))}
      </div>

      {selectedTeam && (
        <div className={`fade-in rounded-2xl shadow-md border overflow-hidden ${dark ? "bg-gray-800 border-gray-700" : "bg-white border-slate-100"}`}>
          <div className={`bg-gradient-to-r ${selectedTeam.color} p-5 text-white flex items-center gap-4`}>
            <div className="w-16 h-16 rounded-full bg-white/20 border-2 border-white/50 flex items-center justify-center text-3xl">
              📸
            </div>
            <div>
              <h3 className="text-xl font-bold">{selectedTeam.name}</h3>
              <p className="text-white/80 text-sm mt-1">صورة خاصة بالتيم</p>
            </div>
          </div>
          <div className="p-5">
            <h4 className={`font-bold mb-3 text-base ${dark ? "text-gray-200" : "text-slate-700"}`}>أعضاء التيم</h4>
            <div className="grid grid-cols-2 gap-3">
              {selectedTeam.members.map((member, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 border ${dark ? "bg-gray-700 border-gray-600" : "bg-slate-50 border-slate-100"}`}
                >
                  <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${selectedTeam.color} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                    {idx + 1}
                  </div>
                  <span className={`font-medium text-sm ${dark ? "text-gray-200" : "text-slate-700"}`}>{member.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {!selectedTeam && (
        <div className={`text-center py-8 ${dark ? "text-gray-500" : "text-slate-400"}`}>
          <div className="text-4xl mb-2">👆</div>
          <p className="text-sm">اختر تيم عشان تشوف أعضاؤه</p>
        </div>
      )}
    </div>
  );
}

function TasksPage({ dark }: { dark: boolean }) {
  const [selectedTeamId, setSelectedTeamId] = useState<number | null>(null);
  const [expandedDay, setExpandedDay] = useState<number | null>(null);

  const selectedTasks = teamTasks.find((t) => t.teamId === selectedTeamId);
  const selectedTeam = teams.find((t) => t.id === selectedTeamId);

  return (
    <div className="fade-in flex flex-col gap-6">
      <div>
        <h2 className={`text-lg font-bold mb-1 flex items-center gap-2 ${dark ? "text-gray-200" : "text-slate-700"}`}>
          <span>📋</span> التاسكات
        </h2>
        <div className="w-16 h-1 viva-gradient rounded-full mb-5" />
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {teams.map((team) => (
          <button
            key={team.id}
            onClick={() => {
              setSelectedTeamId(selectedTeamId === team.id ? null : team.id);
              setExpandedDay(null);
            }}
            className={`bg-gradient-to-br ${team.color} rounded-xl p-4 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md hover:scale-105 transition-transform cursor-pointer ${
              selectedTeamId === team.id ? "ring-4 ring-white/60 scale-105" : ""
            }`}
          >
            <span>📋</span>
            <span>{team.name}</span>
          </button>
        ))}
      </div>

      {selectedTeam && selectedTasks && (
        <div className="fade-in flex flex-col gap-4">
          <div className={`bg-gradient-to-r ${selectedTeam.color} rounded-2xl p-4 text-white`}>
            <h3 className="text-lg font-bold">تاسكات {selectedTeam.name}</h3>
            <p className="text-white/80 text-sm mt-1">اضغط على اليوم لعرض التاسكات</p>
          </div>

          {selectedTasks.days.map((day, dayIdx) => (
            <div key={dayIdx} className={`rounded-2xl shadow-sm border overflow-hidden ${dark ? "bg-gray-800 border-gray-700" : "bg-white border-slate-100"}`}>
              <button
                onClick={() => setExpandedDay(expandedDay === dayIdx ? null : dayIdx)}
                className={`w-full flex items-center justify-between px-5 py-4 transition-colors ${dark ? "hover:bg-gray-700" : "hover:bg-slate-50"}`}
              >
                <span className={`font-bold flex items-center gap-2 ${dark ? "text-gray-200" : "text-slate-700"}`}>
                  <span>📅</span>
                  <span>اليوم {dayIdx === 0 ? "الأول" : "التاني"}</span>
                </span>
                <span className={`text-lg ${dark ? "text-gray-500" : "text-slate-400"}`}>{expandedDay === dayIdx ? "▲" : "▼"}</span>
              </button>

              {expandedDay === dayIdx && (
                <div className={`fade-in border-t p-5 flex flex-col gap-3 ${dark ? "border-gray-700" : "border-slate-100"}`}>
                  <div className={`rounded-xl p-4 border ${dark ? "bg-sky-900/30 border-sky-800" : "bg-sky-50 border-sky-100"}`}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">🌅</span>
                      <span className={`font-bold text-sm ${dark ? "text-sky-300" : "text-sky-700"}`}>التاسك الصباحي</span>
                    </div>
                    <p className={`text-sm leading-relaxed ${dark ? "text-gray-300" : "text-slate-700"}`}>{day.morning}</p>
                  </div>
                  <div className={`rounded-xl p-4 border ${dark ? "bg-violet-900/30 border-violet-800" : "bg-violet-50 border-violet-100"}`}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">🌙</span>
                      <span className={`font-bold text-sm ${dark ? "text-violet-300" : "text-violet-700"}`}>التاسك المسائي</span>
                    </div>
                    <p className={`text-sm leading-relaxed ${dark ? "text-gray-300" : "text-slate-700"}`}>{day.evening}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {!selectedTeamId && (
        <div className={`text-center py-8 ${dark ? "text-gray-500" : "text-slate-400"}`}>
          <div className="text-4xl mb-2">👆</div>
          <p className="text-sm">اختر تيم عشان تشوف تاسكاته</p>
        </div>
      )}
    </div>
  );
}

function ArchivesPage({ dark }: { dark: boolean }) {
  return (
    <div className="fade-in flex flex-col gap-6">
      <div>
        <h2 className={`text-lg font-bold mb-1 flex items-center gap-2 ${dark ? "text-gray-200" : "text-slate-700"}`}>
          <span>📚</span> المحفوظات
        </h2>
        <div className="w-16 h-1 viva-gradient rounded-full mb-5" />
      </div>

      <section>
        <h3 className={`text-base font-bold mb-3 flex items-center gap-2 ${dark ? "text-gray-300" : "text-slate-600"}`}>
          <span>🎨</span> الشعار
        </h3>
        <div className={`rounded-2xl shadow-sm border p-6 flex flex-col items-center gap-4 ${dark ? "bg-gray-800 border-gray-700" : "bg-white border-slate-100"}`}>
          <img src="/logo.jpeg" alt="VIVA 2026 Logo" className="w-48 h-auto object-contain rounded-xl" />
          <p className={`text-sm text-center ${dark ? "text-gray-400" : "text-slate-500"}`}>شعار مؤتمر VIVA 2026 الرسمي</p>
        </div>
      </section>

      <section>
        <h3 className={`text-base font-bold mb-3 flex items-center gap-2 ${dark ? "text-gray-300" : "text-slate-600"}`}>
          <span>✝️</span> الكونتينت الروحي
        </h3>
        <div className="flex flex-col gap-3">
          {spiritualContent.map((item, idx) => (
            <div key={idx} className={`rounded-2xl shadow-sm border p-5 ${dark ? "bg-gray-800 border-gray-700" : "bg-white border-slate-100"}`}>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full viva-gradient flex items-center justify-center text-white text-sm font-bold shrink-0">
                  {idx + 1}
                </div>
                <h4 className={`font-bold ${dark ? "text-gray-200" : "text-slate-700"}`}>{item.title}</h4>
              </div>
              <p className={`text-sm leading-loose pr-10 ${dark ? "text-gray-400" : "text-slate-600"}`}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const pageMap: Record<Page, string> = {
    home: "الصفحة الرئيسية",
    teams: "التيمات",
    tasks: "التاسكات",
    archives: "المحفوظات",
  };

  return (
    <div
      className={`min-h-screen flex transition-colors duration-300 ${dark ? "bg-gray-950" : "bg-slate-50"}`}
      dir="rtl"
      style={{ fontFamily: "'Cairo', sans-serif" }}
    >
      <Sidebar currentPage={currentPage} onNavigate={setCurrentPage} dark={dark} />

      <main style={{ marginRight: 240 }} className="flex-1 flex flex-col min-h-screen">
        <header
          className={`px-6 py-4 flex items-center justify-between sticky top-0 z-40 shadow-sm border-b transition-colors duration-300 ${
            dark ? "bg-gray-900 border-gray-700" : "bg-white border-slate-200"
          }`}
        >
          <div className="flex items-center gap-3">
            <img src="/logo.jpeg" alt="VIVA 2026" className="h-8 w-auto object-contain rounded-lg" />
            <span className={`font-bold text-sm hidden sm:block ${dark ? "text-gray-200" : "text-slate-700"}`}>VIVA 2026</span>
          </div>

          <h1 className={`font-bold text-base ${dark ? "text-gray-200" : "text-slate-700"}`}>{pageMap[currentPage]}</h1>

          <div className="flex items-center gap-3">
            <span className={`text-xs hidden sm:block ${dark ? "text-gray-500" : "text-slate-400"}`}>
              {new Date().toLocaleDateString("ar-EG", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>

            <button
              onClick={() => setDark(!dark)}
              title={dark ? "وضع النهار" : "الوضع الليلي"}
              className={`w-12 h-6 rounded-full relative transition-colors duration-300 flex items-center cursor-pointer border ${
                dark ? "bg-violet-600 border-violet-500" : "bg-slate-200 border-slate-300"
              }`}
            >
              <span
                className={`absolute w-5 h-5 rounded-full flex items-center justify-center text-xs shadow transition-transform duration-300 ${
                  dark ? "translate-x-1 bg-gray-900 text-yellow-300" : "translate-x-6 bg-white text-yellow-500"
                }`}
              >
                {dark ? "🌙" : "☀️"}
              </span>
            </button>
          </div>
        </header>

        <div className="flex-1 p-6 max-w-4xl w-full mx-auto">
          {currentPage === "home" && <HomePage dark={dark} />}
          {currentPage === "teams" && <TeamsPage dark={dark} />}
          {currentPage === "tasks" && <TasksPage dark={dark} />}
          {currentPage === "archives" && <ArchivesPage dark={dark} />}
        </div>
      </main>
    </div>
  );
}

export default App;
