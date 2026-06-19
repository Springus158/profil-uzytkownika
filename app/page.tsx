import Avatar from "./components/Avatar";
import ActivityList from "./components/ActivityList";
import { user } from "./lib/user";

function formatJoined(iso: string) {
  return new Intl.DateTimeFormat("pl-PL", {
    month: "long",
    year: "numeric",
  }).format(new Date(iso));
}

export default function ProfilePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:py-16">
      <article className="overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-slate-200/70 dark:bg-slate-900 dark:ring-slate-800">
        {/* Banner */}
        <div className="h-32 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 sm:h-40" />

        {/* Nagłówek profilu */}
        <header className="px-6 pb-6 sm:px-10">
          {/* Avatar wystaje na baner, ale tekst zostaje w normalnym przepływie poniżej — nigdy nie jest ucinany */}
          <div className="-mt-12 sm:-mt-14">
            <Avatar
              src={user.avatarUrl}
              alt={`Avatar — ${user.name}`}
              size={112}
            />
          </div>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0">
              <h1 className="text-2xl font-bold tracking-tight break-words sm:text-3xl">
                {user.name}
              </h1>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {user.role}
              </p>
            </div>
            <a
              href={`mailto:${user.email}`}
              className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow transition hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              Napisz wiadomość
            </a>
          </div>

          <dl className="mt-6 grid grid-cols-1 gap-4 text-sm sm:grid-cols-3">
            <div>
              <dt className="text-slate-400">E-mail</dt>
              <dd>
                <a
                  href={`mailto:${user.email}`}
                  className="font-medium text-indigo-600 hover:underline dark:text-indigo-400"
                >
                  {user.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-slate-400">Lokalizacja</dt>
              <dd className="font-medium">{user.location}</dd>
            </div>
            <div>
              <dt className="text-slate-400">Dołączył(a)</dt>
              <dd className="font-medium">{formatJoined(user.joinedAt)}</dd>
            </div>
          </dl>

          <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-300">
            {user.bio}
          </p>
        </header>
      </article>

      {/* Ostatnie aktywności */}
      <section className="mt-8 rounded-3xl bg-white p-6 shadow-xl ring-1 ring-slate-200/70 sm:p-10 dark:bg-slate-900 dark:ring-slate-800">
        <h2 className="mb-6 text-lg font-semibold">Ostatnie aktywności</h2>
        <ActivityList activities={user.activities} />
      </section>

      <footer className="mt-8 text-center text-xs text-slate-400">
        Zbudowane w Next.js + Tailwind CSS
      </footer>
    </main>
  );
}
