import type { Activity } from "../lib/user";

const ICONS: Record<Activity["type"], string> = {
  commit: "🔧",
  review: "✅",
  comment: "💬",
  deploy: "🚀",
  task: "📋",
};

const LABELS: Record<Activity["type"], string> = {
  commit: "Commit",
  review: "Recenzja",
  comment: "Komentarz",
  deploy: "Wdrożenie",
  task: "Zadanie",
};

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("pl-PL", {
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(iso));
}

export default function ActivityList({ activities }: { activities: Activity[] }) {
  return (
    <ol className="relative space-y-1">
      {activities.map((a, i) => (
        <li key={a.id} className="flex gap-4">
          <div className="flex flex-col items-center">
            <span
              className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-lg dark:bg-slate-800"
              aria-hidden
            >
              {ICONS[a.type]}
            </span>
            {i < activities.length - 1 && (
              <span className="my-1 w-px flex-1 bg-slate-200 dark:bg-slate-700" />
            )}
          </div>
          <div className="pb-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-xs font-medium text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                {LABELS[a.type]}
              </span>
              <time className="text-xs text-slate-400" dateTime={a.date}>
                {formatDate(a.date)}
              </time>
            </div>
            <p className="mt-1 font-medium text-slate-900 dark:text-slate-100">
              {a.title}
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {a.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
